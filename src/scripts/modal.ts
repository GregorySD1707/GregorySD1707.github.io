// src/scripts/modal.ts
export type ModalType = 'success' | 'error' | 'warning' | 'info';

interface ModalOptions {
  title: string;
  message: string;
  type?: ModalType;
  buttonText?: string;
}

const ICONS: Record<ModalType, string> = {
  success: '✓',
  error: '✕',
  warning: '⚠',
  info: 'ℹ'
};

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
export function showModal({ title, message, type = 'info', buttonText = 'Accept' }: ModalOptions): void {
  const modal = document.querySelector<HTMLDialogElement>('#global-modal');
  if (!modal) return;

  const iconEl = modal.querySelector<HTMLElement>('#modal-icon');
  const titleEl = modal.querySelector<HTMLElement>('#modal-title');
  const messageEl = modal.querySelector<HTMLElement>('#modal-message');
  const closeBtn = modal.querySelector<HTMLButtonElement>('#modal-close-btn');

  if (iconEl) iconEl.textContent = ICONS[type];
  if (titleEl) titleEl.textContent = title;
  if (messageEl) messageEl.textContent = message;
  if (closeBtn) closeBtn.textContent = buttonText;

  // Aplica la clase de estado (modal-success, modal-error, etc.)
  modal.className = `global-modal modal-${type}`;
  modal.showModal();
}