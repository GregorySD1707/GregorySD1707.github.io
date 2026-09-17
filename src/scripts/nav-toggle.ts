const OPEN_CLASS = 'nav-open';
const OVERLAY_VISIBLE_CLASS = 'nav-overlay-visible';
const BODY_LOCK_CLASS = 'nav-scroll-lock';
const NO_RESIZE_TRANSITION_CLASS = 'no-resize-transition';
const DESKTOP_BREAKPOINT = 1100;
const RESIZE_SETTLE_DELAY_MS = 200;

export function initNavToggle(): void {
  const toggle = document.getElementById('nav-toggle');
  const closeBtn = document.getElementById('nav-close');
  const nav = document.getElementById('nav-menu');
  const overlay = document.getElementById('nav-overlay');
  if (!toggle || !nav || !overlay) return;

  const isOpen = (): boolean => nav.classList.contains(OPEN_CLASS);

  const setOpen = (open: boolean): void => {
    nav.classList.toggle(OPEN_CLASS, open);
    overlay.classList.toggle(OVERLAY_VISIBLE_CLASS, open);
    document.body.classList.toggle(BODY_LOCK_CLASS, open);
    toggle.setAttribute('aria-expanded', String(open));
  };

  toggle.addEventListener('click', () => setOpen(!isOpen()));

  if (closeBtn) {
    closeBtn.addEventListener('click', () => setOpen(false));
  }

  overlay.addEventListener('click', () => setOpen(false));

  nav.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target.tagName === 'A' || target.closest('a')) {
      setOpen(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) setOpen(false);
  });

  let resizeTimer: number | undefined;
  window.addEventListener('resize', () => {
    document.documentElement.classList.add(NO_RESIZE_TRANSITION_CLASS);

    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      document.documentElement.classList.remove(NO_RESIZE_TRANSITION_CLASS);
    }, RESIZE_SETTLE_DELAY_MS);

    // Si pasamos el breakpoint de escritorio, forzamos el cierre completo
    if (window.innerWidth > DESKTOP_BREAKPOINT) {
      setOpen(false);
    }
  });
}