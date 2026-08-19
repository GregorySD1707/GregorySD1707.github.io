document.addEventListener("DOMContentLoaded", () => {
  // INTERSECTION OBSERVER
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

  // ----------------------------------------------------
  // Lógica de Tarjeta Giratoria (Flip 3D)
  // ----------------------------------------------------
  const initFlipCards = () => {
    const flipButtons = document.querySelectorAll(".flip-btn");
    const flipBackButtons = document.querySelectorAll(".flip-back-btn");

    // Girar hacia atrás (Ver Detalles)
    flipButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        // Previene que el click interfiera con el arrastre (drag)
        e.stopPropagation();

        // Encuentra la tarjeta padre más cercana y le añade la clase
        const card = e.target.closest(".carousel-card");
        if (card) {
          card.classList.add("flipped");
        }
      });
    });

    // Girar hacia adelante (Volver)
    flipBackButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();

        const card = e.target.closest(".carousel-card");
        if (card) {
          card.classList.remove("flipped");
        }
      });
    });

    // Opcional: Si el usuario navega a la siguiente tarjeta (flechas laterales),
    // reseteamos todas las tarjetas para que vuelvan a mostrar el frente.
    //const resetFlippedCards = () => {
    //    document.querySelectorAll('.carousel-card.flipped').forEach(card => {
    //        card.classList.remove('flipped');
    //    });
    //};

    // Llama a resetFlippedCards() dentro de las funciones de navegación
    // navNext.addEventListener('click', ...)
    // navPrev.addEventListener('click', ...)
  };

  // --- CARRUSEL 3D ---
  const initCarousel = () => {
    const carousel = document.getElementById("carousel");
    if (!carousel) return;

    const cards = carousel.querySelectorAll(".carousel-card");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    const numCards = cards.length;
    if (numCards === 0) return;

    // Geometría: Divide 360 grados entre el número de proyectos
    const theta = 360 / numCards;

    // Calcula la profundidad (translateZ) para que las tarjetas no colisionen
    const cardWidth = 500;
    const paddingZ = 60;
    const radius =
      Math.round(cardWidth / 2 / Math.tan(Math.PI / numCards)) + paddingZ;

    let currentIndex = 0;
    let isAnimating = false;

    // 1. Posicionar dinámicamente las tarjetas en el espacio 3D
    cards.forEach((card, index) => {
      const angle = theta * index;
      card.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
    });

    // 2. Función maestra de rotación
    const rotateCarousel = () => {
      const angle = theta * currentIndex * -1;
      carousel.style.transform = `translateZ(${-radius}px) rotateY(${angle}deg)`;

      // Calcular índice real activo matemáticamente
      const activeIndex = ((currentIndex % numCards) + numCards) % numCards;

      // Transición del Glow y opacidad para el estado activo
      cards.forEach((card, index) => {
        if (index === activeIndex) {
          card.classList.add("active");
        } else {
          card.classList.remove("active");
        }
      });
    };

    // 3. Sistema de navegación y protección Anti-Spam
    const handleNav = (direction) => {
      if (isAnimating) return;
      isAnimating = true;

      currentIndex += direction;
      rotateCarousel();

      // Bloquear botones durante la animación (800ms)
      prevBtn.disabled = true;
      nextBtn.disabled = true;

      setTimeout(() => {
        isAnimating = false;
        prevBtn.disabled = false;
        nextBtn.disabled = false;
      }, 0);
    };

    prevBtn.addEventListener("click", () => handleNav(-1));
    nextBtn.addEventListener("click", () => handleNav(1));

    // Inicializar la primera vista
    rotateCarousel();
  };

  // ----------------------------------------------------
  // Glow radial en la grid de Skills (sigue al cursor)
  // ----------------------------------------------------
  const initSkillsSpotlight = () => {
    const grid = document.querySelector(".skills-grid");
    if (!grid) return;

    const cards = grid.querySelectorAll(".skill-card");
    const RADIUS = 75; // px — radio de influencia del glow
    let rafId = null;

    const updateGlow = (mouseX, mouseY) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const dx = Math.max(rect.left - mouseX, 0, mouseX - rect.right);
        const dy = Math.max(rect.top - mouseY, 0, mouseY - rect.bottom);
        const distance = Math.hypot(dx, dy); // 0 si el mouse está dentro de la card
        const intensity = Math.max(0, 1 - distance / RADIUS);
        card.style.setProperty("--glow-intensity", intensity.toFixed(2));
      });
    };

    grid.addEventListener("mousemove", (e) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        updateGlow(e.clientX, e.clientY);
        rafId = null;
      });
    });

    grid.addEventListener("mouseleave", () => {
      cards.forEach((card) => card.style.setProperty("--glow-intensity", 0));
    });
  };

  // ----------------------------------------------------
  // Despliegue dinámico de 4 filas de Skills
  // ----------------------------------------------------
  const initSkillsToggle = () => {
    const wrapper = document.getElementById("skills-wrapper");
    const grid = document.getElementById("skills-grid");
    const btn = document.getElementById("toggle-skills-btn");
    if (!wrapper || !grid || !btn) return;

    let isExpanded = false;

    const updateGridHeight = () => {
      const cards = Array.from(grid.querySelectorAll(".skill-card"));
      if (cards.length === 0) return;

      // Obtener las coordenadas verticales de cada fila única
      const rowTops = [];
      cards.forEach((card) => {
        const top = card.offsetTop;
        if (!rowTops.includes(top)) rowTops.push(top);
      });

      // Si hay 4 o menos filas en total, se oculta el botón
      if (rowTops.length <= 4) {
        btn.style.display = "none";
        wrapper.style.maxHeight = "none";
        wrapper.classList.remove("collapsed");
        wrapper.classList.add("expanded");
        return;
      }

      btn.style.display = "inline-flex";

      if (!isExpanded) {
        // La altura de 4 filas equivale al inicio de la 5ª fila menos el inicio de la grid
        const fifthRowTop = rowTops[4];
        const gridTop = cards[0].offsetTop;
        const peekAmount = 50; // Píxeles visibles de la parte superior de la 5ta fila
        const collapsedHeight = fifthRowTop - gridTop + peekAmount;
        wrapper.style.maxHeight = `${collapsedHeight}px`;
      } else {
        wrapper.style.maxHeight = `${grid.scrollHeight}px`;
      }
    };

    btn.addEventListener("click", () => {
      isExpanded = !isExpanded;
      btn.setAttribute("aria-expanded", isExpanded);

      const btnText = btn.querySelector(".btn-text");

      if (isExpanded) {
        wrapper.classList.remove("collapsed");
        wrapper.classList.add("expanded");
        wrapper.style.maxHeight = `${grid.scrollHeight}px`;
        if (btnText) btnText.textContent = "Show less";
      } else {
        wrapper.classList.remove("expanded");
        wrapper.classList.add("collapsed");
        updateGridHeight();
        if (btnText) btnText.textContent = "Show more";
        wrapper.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });

    // Recalcular al cambiar el tamaño de ventana
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateGridHeight, 150);
    });

    updateGridHeight();
  };

  // ----------------------------------------------------
  // Indicador dinámico de sección activa en Navbar
  // ----------------------------------------------------
  const initNavObserver = () => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll('#nav-menu a[href^="#"]');

    if (!sections.length || !navLinks.length) return;

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeId = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
              const isActive = link.getAttribute("href") === `#${activeId}`;
              link.classList.toggle("active", isActive);
            });
          }
        });
      },
      {
        rootMargin: "-20% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => navObserver.observe(section));
  };

  initCarousel();
  initFlipCards(); // Inicializa la funcionalidad de volteo de tarjetas
  initSkillsSpotlight();
  initSkillsToggle();
  initNavObserver();
});
