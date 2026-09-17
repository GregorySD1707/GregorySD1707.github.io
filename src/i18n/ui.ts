// src/i18n/ui.ts
// diccionario de strings estáticos
export const languages = { en: 'English', es: 'Español' } as const;
export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // meta información
    'meta.title': 'Gregory Salazar | Portfolio',

    // Barra de navegación y t´tulos de secciones
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
    'hero.roles.student': 'Software Engineering Student',
    'hero.roles.developer': 'Full Stack Developer',
    'hero.description': '4+ years developing collaborative projects. Specialized in full stack development, databases, and computer vision AI. Located in Quito, Ecuador.',
    'action.downloadCv': 'Download CV',
    
    // Botones de acción
    'actions.view': 'View',
    'actions.download': 'Download',
    'actions.achievements': 'Achievements',
    'actions.back': 'Back',
  },
  es: {
    // meta información
    'meta.title': 'Gregory Salazar | Portafolio',

    // Barra de navegación y títulos de secciones
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
    'hero.roles.student': 'Estudiante de Ingeniería de Software',
    'hero.roles.developer': 'Desarrollador Full Stack',
    'hero.description': 'Más de 4 años desarrollando proyectos colaborativos. Especializado en desarrollo full stack, Bases de Datos e IA de visión por computadora. Ubicado en Quito, Ecuador.',
    'action.downloadCv': 'Descargar CV',

    // Botones de acción
    'actions.view': 'Ver',
    'actions.download': 'Descargar',
    'actions.achievements': 'Logros',
    'actions.back': 'Volver',
  },
} as const;