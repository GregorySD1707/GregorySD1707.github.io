export function initLangSwitcherScroll(): void {
  // 1. Desactivar el scroll automático del navegador para tomar el control
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  // 2. Restaurar la posición inmediatamente
  const savedPosition = sessionStorage.getItem('scrollPosition');
  if (savedPosition !== null) {
    const targetY = parseInt(savedPosition, 10);
    
    // Se ejecuta tras el renderizado inicial para evitar layout shifts
    requestAnimationFrame(() => {
      window.scrollTo({
        top: targetY,
        behavior: 'instant'
      });
      sessionStorage.removeItem('scrollPosition');
    });
  }

  // 3. Registrar el evento en los enlaces del selector de idioma
  const langLinks = document.querySelectorAll<HTMLAnchorElement>('.lang-option');
  langLinks.forEach((link) => {
    link.addEventListener('click', () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    });
  });
}