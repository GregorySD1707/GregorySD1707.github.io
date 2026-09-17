// src/scripts/modal.ts
export type ModalType = 'success' | 'error' | 'warning' | 'info';
import {useTranslations, getSafeLang} from '../i18n/utils';

interface ModalOptions {
  title: string;
  message: string;
  type?: ModalType;
  buttonText?: string;
}

export function initModal(): void {
  const modal = document.querySelector<HTMLDialogElement>('#global-modal');
  const closeBtn = modal?.querySelector<HTMLButtonElement>('#modal-close-btn');

  if (!modal || !closeBtn) return;

  closeBtn.addEventListener('click', () => modal.close());
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
  });
}

// Parámetros por defecto en type y buttonText. Son valores de respaldo (fallback) que 
// usa la función showModal() cuando es ejecutada sin definir la propiedad buttonText
export function showModal({ title, message, type = 'info', buttonText }: ModalOptions): void {
  // Evaluates current DOM language dynamically at invocation time
  const lang = getSafeLang(document.documentElement.lang);
  const t = useTranslations(lang);

  // Fallback to translated text if buttonText was not provided
  const resolvedButtonText = buttonText ?? t('modal.button.accept');

  const modal = document.querySelector<HTMLDialogElement>('#global-modal');
  if (!modal) return;

  const titleEl = modal.querySelector<HTMLElement>('#modal-title');
  const messageEl = modal.querySelector<HTMLElement>('#modal-message');
  const closeBtn = modal.querySelector<HTMLButtonElement>('#modal-close-btn');

  // Hide all pre-rendered icons, show the active one
  const allIcons = modal.querySelectorAll<HTMLElement>('.meta-icon');
  allIcons.forEach(icon => (icon.style.display = 'none'));
  const activeIcon = modal.querySelector<HTMLElement>(`#icon-${type}`);
  
  if (activeIcon) activeIcon.style.display = 'block';
  if (titleEl) titleEl.textContent = title;
  if (messageEl) messageEl.textContent = message;
  if (closeBtn) closeBtn.textContent = resolvedButtonText;

  // Aplica la clase de estado (modal-success, modal-error, etc.)
  modal.className = `global-modal modal-${type}`;
  modal.showModal();
}