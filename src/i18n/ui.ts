// src/i18n/ui.ts
// diccionario de strings estáticos
export const languages = { en: 'English', es: 'Español' } as const;
export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // meta información
    'meta.title': 'Gregory Salazar | Portfolio',

    // Barra de navegación
    'nav.home': 'Home',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.certificates': 'Certificates',
    'nav.education': 'Education',
    'nav.events': 'Events',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',

    // Sección Hero
    'hero.kicker': "Hi, I'm",
    'hero.description': '4+ years developing collaborative projects. Specialized in full stack development, databases, and computer vision AI. Located in Quito, Ecuador.',
    'action.downloadCv': 'Download CV',
    
    // ...resto de strings estáticos
  },
  es: {
    // meta información
    'meta.title': 'Gregory Salazar | Portafolio',
    
    // Barra de navegación
    'nav.home': 'Inicio',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.certificates': 'Certificados',
    'nav.education': 'Educación',
    'nav.events': 'Eventos',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',

    // Sección Hero
    'hero.kicker': 'Hola, soy',
    'hero.description': 'Más de 4 años desarrollando proyectos colaborativos. Especializado en desarrollo full stack, bases de datos e IA de visión por computadora. Ubicado en Quito, Ecuador.',
    'action.downloadCv': 'Descargar CV',
  },
} as const;