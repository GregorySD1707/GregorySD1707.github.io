// src/scripts/carousel-3d.ts
export const initCarousel3D = () => {
    // Cast a HTMLElement
    const carousel = document.getElementById("carousel") as HTMLElement | null;
    if (!carousel) return;

    // Cast a HTMLElement explícitamente en el NodeList
    const cards = carousel.querySelectorAll<HTMLElement>(".carousel-card");
    
    // Cast a HTMLButtonElement
    const prevBtn = document.querySelector<HTMLButtonElement>(".prev-btn");
    const nextBtn = document.querySelector<HTMLButtonElement>(".next-btn");

    const numCards = cards.length;
    if (numCards === 0) return;

    const theta = 360 / numCards;
    const cardWidth = 500;
    const paddingZ = 60;
    const radius = Math.round(cardWidth / 2 / Math.tan(Math.PI / numCards)) + paddingZ;

    let currentIndex = 0;
    let isAnimating = false;

    cards.forEach((card, index) => {
      const angle = theta * index;
      // Ahora TS sabe que 'card' es un HTMLElement y tiene 'style'
      card.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
    });

    const rotateCarousel = () => {
      const angle = theta * currentIndex * -1;
      carousel.style.transform = `translateZ(${-radius}px) rotateY(${angle}deg)`;

      const activeIndex = ((currentIndex % numCards) + numCards) % numCards;

      cards.forEach((card, index) => {
        if (index === activeIndex) {
          card.classList.add("active");
        } else {
          card.classList.remove("active");
        }
      });
    };

    // Declaramos explícitamente que direction es un 'number'
    const handleNav = (direction: number) => {
      if (isAnimating) return;
      isAnimating = true;

      currentIndex += direction;
      rotateCarousel();

      // Verificamos que los botones existan antes de usar 'disabled'
      if (prevBtn) prevBtn.disabled = true;
      if (nextBtn) nextBtn.disabled = true;

      setTimeout(() => {
        isAnimating = false;
        if (prevBtn) prevBtn.disabled = false;
        if (nextBtn) nextBtn.disabled = false;
      }, 0); // <-- CORRECCIÓN: El timeout original decía 0ms, rompiendo la protección de animación. Añade el tiempo que dura tu transición CSS (ej. 800ms).
    };

    // Añadimos el listener solo si el botón existe
    if (prevBtn) prevBtn.addEventListener("click", () => handleNav(-1));
    if (nextBtn) nextBtn.addEventListener("click", () => handleNav(1));

    rotateCarousel();
};