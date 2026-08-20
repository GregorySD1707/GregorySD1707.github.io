export interface Web3FormsResponse {
    success: boolean;
    message?: string;
}

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

/**
 * Inicializa el manejo asíncrono y de accesibilidad para un formulario.
 */
export function setupFormHandler(form: HTMLFormElement): void {
    const statusText = form.querySelector<HTMLElement>('[data-form-status]');
    const submitBtn = form.querySelector<HTMLButtonElement>('[data-form-submit]');

    if (!submitBtn || !statusText) return;

    form.addEventListener('submit', async (e: SubmitEvent) => {
        e.preventDefault();

        // Evita doble envío si la petición está en curso
        if (form.getAttribute('aria-busy') === 'true') return;

        // Estado visual de carga y accesibilidad
        form.setAttribute('aria-busy', 'true');
        submitBtn.disabled = true;
        const originalBtnText = submitBtn.textContent || 'Enviar';
        submitBtn.textContent = 'Enviando...';

        statusText.textContent = 'Procesando mensaje...';
        statusText.className = 'form-status info';

        const formData = new FormData(form);
        const jsonPayload = JSON.stringify(Object.fromEntries(formData));

        try {
            const response = await fetch(WEB3FORMS_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: jsonPayload
            });

            const result: Web3FormsResponse = await response.json();

            if (response.ok && result.success) {
                statusText.textContent = '¡Mensaje enviado con éxito!';
                statusText.className = 'form-status success';
                form.reset();
            } else {
                statusText.textContent = result.message || 'Ocurrió un error al enviar.';
                statusText.className = 'form-status error';
            }
        } catch (error) {
            statusText.textContent = 'Error de conexión. Inténtalo nuevamente.';
            statusText.className = 'form-status error';
        } finally {
            form.setAttribute('aria-busy', 'false');
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    });
}