// src/scripts/formhandler.ts
import { showModal } from './modal';

export interface Web3FormsResponse {
    success: boolean;
    message?: string;
}

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const COOLDOWN_TIME_MS = 60000;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const LS_COOLDOWN_KEY = 'last_form_submit';
const VALIDATABLE_ELEMENTS_SELECTOR = 'input:not([type="hidden"]):not([type="checkbox"]):not([type="radio"]), textarea, select';

/**
 * Validates an individual input/textarea field in real-time.
 */
function validateField(field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement): boolean {
    // Si el contenedor padre está oculto, no se valida
    const parent = field.closest('.extra-field');
    if (parent && (parent as HTMLElement).style.display === 'none') {
        return true;
    }

    const errorSpan = field.form?.querySelector<HTMLElement>(`#error-${CSS.escape(field.id)}`);
    let errorMessage = '';

    const value = field.value.trim();

    if (field.hasAttribute('required') && value === '') {
        errorMessage = 'This field cannot be empty or contain only spaces.';
    } else if (field.type === 'email' && value !== '' && !EMAIL_REGEX.test(value)) {
        errorMessage = 'Please enter a valid email address.';
    }

    if (errorMessage) {
        field.setAttribute('aria-invalid', 'true');
        if (errorSpan) errorSpan.textContent = errorMessage;
        return false;
    } else {
        field.setAttribute('aria-invalid', 'false');
        if (errorSpan) errorSpan.textContent = '';
        return true;
    }
}

/**
 * Configures real-time inline validation listeners for form inputs.
 */
function setupInlineValidation(form: HTMLFormElement): void {
    // Selecciona todos los campos sin filtrar por estilo/visibilidad inicial
    const inputs = Array.from(
        form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
            VALIDATABLE_ELEMENTS_SELECTOR
        )
    );

    inputs.forEach((input) => {
        // Validate when user leaves the input
        input.addEventListener('blur', () => validateField(input));

        // Real-time correction when typing (only if it was previously marked invalid)
        input.addEventListener('input', () => {
            if (input.getAttribute('aria-invalid') === 'true') {
                validateField(input);
            }
        });
    });
}

// 4. Agrega la lógica de los Radio Buttons (NUEVA FUNCIÓN)
// Reemplazar la función setupDynamicReason existente por esta:
function setupDynamicReason(form: HTMLFormElement): void {
    const radios = form.querySelectorAll<HTMLInputElement>('input[name="reason"]');
    const textarea = form.querySelector<HTMLTextAreaElement>('#message');
    const extraFields = form.querySelectorAll<HTMLElement>('.extra-field');

    const updateReasonState = (activeRadio: HTMLInputElement) => {
        const config = JSON.parse(activeRadio.dataset.reasonConfig || '{}');

        // A. Actualizar Placeholder
        if (textarea) textarea.placeholder = config.placeholder || '';

        // B. Mostrar/Ocultar y alternar 'required' en campos extra
        extraFields.forEach(fieldContainer => {
            const isMatch = fieldContainer.dataset.extraFor === config.extraField;
            fieldContainer.style.display = isMatch ? 'flex' : 'none';

            const input = fieldContainer.querySelector<HTMLInputElement | HTMLSelectElement>('input, select');
            if (input) {
                if (isMatch && (input.id === 'custom_subject' || input.id === 'company_name')) {
                    input.setAttribute('required', 'true');
                } else {
                    input.removeAttribute('required');
                    input.removeAttribute('aria-invalid');
                    input.value = ''; // Limpiar el campo oculto
                }
            }
        });
    };

    radios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            const target = e.target as HTMLInputElement;
            if (target.checked) updateReasonState(target);
        });
    });

    // Ejecución inicial según el radio seleccionado por defecto (index === 0)
    const initialChecked = form.querySelector<HTMLInputElement>('input[name="reason"]:checked');
    if (initialChecked) {
        updateReasonState(initialChecked);
    }
}

// 2. Crea un helper para obtener los campos a validar
function getValidatableFields(form: HTMLFormElement) {
    return Array.from(form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
        VALIDATABLE_ELEMENTS_SELECTOR
    )).filter(field => {
        // Ignorar campos extra que estén ocultos
        const parent = field.closest('.extra-field');
        if (parent && (parent as HTMLElement).style.display === 'none') return false;
        return true;
    });
}

/**
 * Initializes character counters for textareas with a maxlength attribute.
 */
export function setupCharacterCounters(form: HTMLFormElement): void {
    const textareas = form.querySelectorAll<HTMLTextAreaElement>('textarea[maxlength]');

    textareas.forEach((textarea) => {
        const counter = form.querySelector<HTMLElement>(`[data-counter-for="${CSS.escape(textarea.id)}"]`);
        if (!counter) return;

        const maxLength = textarea.maxLength;

        const updateCounter = () => {
            const currentLength = textarea.value.length;
            counter.textContent = `${currentLength} / ${maxLength}`;

            if (currentLength >= maxLength) {
                counter.className = 'char-counter limit-reached';
            } else if (currentLength >= maxLength * 0.9) {
                counter.className = 'char-counter limit-near';
            } else {
                counter.className = 'char-counter';
            }
        };

        textarea.addEventListener('input', updateCounter);
        updateCounter();
    });
}

/**
 * Handles asynchronous submission, local rate-limiting, and form validation.
 */
export function setupFormHandler(form: HTMLFormElement): void {
    const statusText = form.querySelector<HTMLElement>('[data-form-status]');
    const submitBtn = form.querySelector<HTMLButtonElement>('[data-form-submit]');

    if (!submitBtn || !statusText) return;

    setupCharacterCounters(form);
    setupInlineValidation(form);
    setupDynamicReason(form);

    form.addEventListener('submit', async (e: SubmitEvent) => {
        e.preventDefault();

        // 1. Full Form Validation on Submit
        const inputs = getValidatableFields(form);

        let firstInvalidInput: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null = null;

        // El bucle for...of permite a TypeScript rastrear la reasignación de la variable
        for (const input of inputs) {
            const isValid = validateField(input);
            if (!isValid && !firstInvalidInput) {
                firstInvalidInput = input;
            }
        }

        if (firstInvalidInput) {
            firstInvalidInput.focus();
            return; // Detiene el envío si hay campos inválidos
        }

        // 2. Cooldown Rate-Limit Check
        const lastSubmit = localStorage.getItem(LS_COOLDOWN_KEY);
        const now = Date.now();
        if (lastSubmit && now - parseInt(lastSubmit, 10) < COOLDOWN_TIME_MS) {
            const remaining = Math.ceil((COOLDOWN_TIME_MS - (now - parseInt(lastSubmit, 10))) / 1000);
            statusText.textContent = `Please wait ${remaining} seconds before sending another message.`;
            statusText.className = 'form-status error';
            return;
        }

        if (form.getAttribute('aria-busy') === 'true') return;

        form.setAttribute('aria-busy', 'true');
        submitBtn.disabled = true;
        const originalBtnText = submitBtn.textContent || 'Send Message';
        submitBtn.textContent = 'Sending...';

        statusText.textContent = 'Processing message...';
        statusText.className = 'form-status info';

        // 3. Payload Cleanup & Trimming
        const rawFormData = new FormData(form);
        const cleanedData: Record<string, string> = {};

        rawFormData.forEach((value, key) => {
            if (typeof value === 'string') {
                cleanedData[key] = value.trim();
            }
        });

        // 6. Preparar el Subject Dinámico antes de armar el FormData
        const checkedRadio = form.querySelector<HTMLInputElement>('input[name="reason"]:checked');
        const subjectInput = form.querySelector<HTMLInputElement>('#form-subject');
        const nameInput = form.querySelector<HTMLInputElement>('#name');
        const companyInput = form.querySelector<HTMLInputElement>('#company_name');

        if (checkedRadio && subjectInput && nameInput) {
            const config = JSON.parse(checkedRadio.dataset.reasonConfig || '{}');
            const userName = nameInput.value.trim() || 'Usuario';

            if (config.extraField === 'company' && companyInput) {
                // Genera: "[Laboral] Nuevo mensaje de Juan Pérez (Tech Corp)"
                subjectInput.value = `${config.subjectPrefix} ${userName} (${companyInput.value.trim()})`;
            } else {
                subjectInput.value = `${config.subjectPrefix} ${userName}`;
            }
        }

        try {
            const response = await fetch(WEB3FORMS_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(cleanedData)
            });

            const result: Web3FormsResponse = await response.json();

            if (response.ok && result.success) {
                statusText.textContent = 'Message sent successfully!';
                statusText.className = 'form-status success';
                localStorage.setItem('last_form_submit', Date.now().toString());
                form.reset();

                // Reset character counters and field states
                const counters = form.querySelectorAll<HTMLElement>('.char-counter');
                counters.forEach((c) => {
                    c.textContent = '0 / 500';
                    c.className = 'char-counter';
                });

                inputs.forEach((input) => input.removeAttribute('aria-invalid'));

                // En el envío exitoso del formulario:
                showModal({
                    title: 'Message sent successfully!',
                    message: 'Thanks for contacting me. I will respond to you as soon as possible.',
                    type: 'success'
                });
            } else {
                statusText.textContent = result.message || 'An error occurred while sending.';
                statusText.className = 'form-status error';

                // En el envío exitoso del formulario:
                showModal({
                    title: 'Something went wrong!',
                    message: 'Sorry, there was an error sending your message. Please try again later.',
                    type: 'error'
                });
            }
        } catch (error) {
            statusText.textContent = 'Connection error. Please try again.';
            statusText.className = 'form-status error';
        } finally {
            form.setAttribute('aria-busy', 'false');
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    });
}