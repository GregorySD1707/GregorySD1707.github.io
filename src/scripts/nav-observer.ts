// ----------------------------------------------------
// Indicador dinámico de sección activa en Navbar
// ----------------------------------------------------
export const initNavObserver = () => {
  const sections = document.querySelectorAll<HTMLElement>("section[id]");
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('#nav-menu a[href^="#"]');

  if (!sections.length || !navLinks.length) return;

  // Track currently visible sections and their viewport position
  const visibleSections = new Map<string, number>();

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (!id) return;

        if (entry.isIntersecting) {
          // Store section ID and its relative top offset from viewport
          visibleSections.set(id, entry.boundingClientRect.top);
        } else {
          // Remove section when it leaves the target zone
          visibleSections.delete(id);
        }
      });

      if (visibleSections.size === 0) return;

      // Find the visible section closest to the top of the viewport
      let activeId = "";
      let closestToTop = Infinity;

      visibleSections.forEach((top, id) => {
        if (Math.abs(top) < closestToTop) {
          closestToTop = Math.abs(top);
          activeId = id;
        }
      });

      // Update active navigation class
      if (activeId) {
        navLinks.forEach((link) => {
          const isActive = link.getAttribute("href") === `#${activeId}`;
          link.classList.toggle("active", isActive);
        });
      }
    },
    {
      rootMargin: "-15% 0px -40% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    }
  );

  sections.forEach((section) => navObserver.observe(section));
};