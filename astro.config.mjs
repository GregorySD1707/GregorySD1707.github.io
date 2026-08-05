// astro.config.mjs
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
    site: 'https://gregorysd1707.github.io',

  //base: '/', Comentando porque sí estamos usando es usuario.github.io
  
  output: 'static',

  // Para usar iconos de Material Design Icons (MDI)
  integrations: [icon({
      include: {
        'mdi': ['download', 'achievement', 'account', 'map-marker', 'calendar', 'arrow-left', 'play', 'github', 'linkedin', 'email'],
      },
    }),],
});