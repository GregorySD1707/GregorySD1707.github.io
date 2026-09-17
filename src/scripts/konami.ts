// No hay recompensa si viniste a ver la respuesta aquí en el código
const KONAMI_SEQUENCE = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a', 'enter'];
const DISPLAY_DURATION_MS = 5000;
const MAX_BUFFER_LENGTH = KONAMI_SEQUENCE.length;

export function initKonamiCode(gifUrl: string): void {
    let keyBuffer: string[] = [];
    let isAnimating = false;

    console.log('[Konami] Script initialized. Listening for keys...');

    document.addEventListener('keydown', (event: KeyboardEvent) => {
        if (isAnimating) return;

        const key = event.key.toLowerCase();
        keyBuffer.push(key);

        if (keyBuffer.length > MAX_BUFFER_LENGTH) {
            keyBuffer.shift();
        }

        // DEBUG: Muestra qué teclas se están guardando en el buffer
        console.log(`[Konami] Current buffer:`, keyBuffer.join(', '));

        if (keyBuffer.join(',') === KONAMI_SEQUENCE.join(',')) {
            console.log('[Konami] Sequence matched! Triggering Easter Egg...');
            triggerEasterEgg(gifUrl);
            keyBuffer = []; 
        }
    });

    function triggerEasterEgg(url: string): void {
        isAnimating = true;
        
        const img = document.createElement('img');
        img.src = url;
        img.className = 'konami-easter-egg';
        img.alt = 'Easter egg animation';
        img.setAttribute('aria-hidden', 'true'); 
        
        // DEBUG: Revisa si la imagen carga correctamente o falla
        img.onload = () => console.log('[Konami] GIF loaded successfully.');
        img.onerror = () => console.error(`[Konami] Error loading GIF at path: ${url}`);
        
        document.body.appendChild(img);
        console.log('[Konami] Image appended to DOM.');

        setTimeout(() => {
            img.remove();
            isAnimating = false;
            console.log('[Konami] Animation finished. Image removed.');
        }, DISPLAY_DURATION_MS);
    }
}