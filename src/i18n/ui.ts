// src/i18n/ui.ts
// diccionario de strings estáticos
export const languages = { en: 'English', es: 'Español' } as const;
export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // meta información
    'meta.title': 'Gregory Salazar | Portfolio',

    // Barra de navegación y t´tulos de secciones
    'home.name': 'Home',
    'experience.name': 'Experience',
    'projects.name': 'Projects',
    'certificates.name': 'Certificates',
    'education.name': 'Education',
    'events.name': 'Events',
    'skills.name': 'Skills',
    'contact.name': 'Contact',

    // Sección Hero
    'hero.kicker': "Hi, I'm",
    'hero.roles.student': 'Software Engineering Student',
    'hero.roles.developer': 'Full Stack Developer',
    'hero.description': '4+ years developing collaborative projects. Specialized in full stack development, databases, and computer vision AI. Located in Quito, Ecuador.',
    'action.downloadCv': 'Download CV',

    // Sección Skills
    'skills.showMore': 'Show more',
    'skills.showLess': 'Show less',
    
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
    'home.name': 'Inicio',
    'experience.name': 'Experiencia',
    'projects.name': 'Proyectos',
    'certificates.name': 'Certificados',
    'education.name': 'Educación',
    'events.name': 'Eventos',
    'skills.name': 'Habilidades',
    'contact.name': 'Contacto',

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

    // Sección Skills
    'skills.showMore': 'Mostrar más',
    'skills.showLess': 'Mostrar menos',
  },
} as const;