// src/scripts/carousel-2d.ts
export const initCarousel2D = () => {
    const carousels = document.querySelectorAll('.carousel-2d-wrapper');
    
    carousels.forEach((wrapper) => {
        const track = wrapper.querySelector('.carousel-2d-track') as HTMLElement;
        const slides = wrapper.querySelectorAll('.carousel-2d-slide');
        const prevBtn = wrapper.querySelector('.prev-btn') as HTMLButtonElement;
        const nextBtn = wrapper.querySelector('.next-btn') as HTMLButtonElement;

        // Seleccionamos los puntos
        const dots = wrapper.querySelectorAll<HTMLElement>(".dot");
        
        if (!track || slides.length === 0) return;

        let currentIndex = 0;
        const totalSlides = slides.length;

        const updateCarousel = () => {
            // Movemos el track
            track.style.transform = `translateX(-${currentIndex * 100}%)`;

            // Actualizamos el estado visual de los puntos
            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add("active");
                } else {
                    dot.classList.remove("active");
                }
            });
        };

        if (prevBtn) {
            prevBtn.addEventListener("click", () => {
                // Al restar, si baja de 0, el módulo envuelve el valor de regreso al total - 1
                currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                updateCarousel();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener("click", () => {
                // Al sumar, si llega al máximo, el módulo envuelve el valor a 0
                currentIndex = (currentIndex + 1) % totalSlides;
                updateCarousel();
            });
        }

        // Opcional: Hacer que los círculos sean clickeables
        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                currentIndex = index;
                updateCarousel();
            });
        });
    });
};