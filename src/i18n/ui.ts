// src/i18n/ui.ts
// diccionario de strings estáticos
export const languages = { en: 'English', es: 'Español' } as const;
export type Lang = keyof typeof languages;

const en = {
    // meta información
    'meta.title': 'Gregory Salazar | Portfolio',

    // Barra de navegación y títulos de secciones
    'home.name': 'Home',
    'experience.name': 'Experience',
    'projects.name': 'Projects',
    'certificates.name': 'Certificates',
    'education.name': 'Education',
    'events.name': 'Events',
    'skills.name': 'Skills',
    'contact.name': 'Contact',
    'nav.toggleLabel': 'Toggle navigation',

    // Sección Hero
    'hero.kicker': "Hi, I'm",
    'hero.roles.student': 'Software Engineering Student',
    'hero.roles.developer': 'Junior Full Stack Developer',
    'hero.description': '4+ years developing collaborative projects. Specialized in full stack development, databases, and computer vision AI. Located in Quito, Ecuador.',
    'action.downloadCv': 'Download CV',

    // Sección Skills
    'skills.showMore': 'Show more',
    'skills.showLess': 'Show less',

    // Sección Contacto
    // - Labels de los campos del formulario de contacto
    'contact.label.reason': 'Reason',
    'contact.label.name': 'Name',
    'contact.label.email': 'Email',
    'contact.label.company': 'Company',
    'contact.label.message': 'Message',

    // - Placeholders de los campos del formulario de contacto
    'contact.placeholder.name': 'Your name',
    'contact.placeholder.email': 'your.email@domain.com',
    'contact.placeholder.company': 'Your company or organization name',

    // - Mensajes de fallback
    'contact.fallbackName': 'User',

    // - Botón de envío del formulario de contacto
    'contact.send_message': 'Send message',
    'contact.sending': 'Sending...',
    'contact.processing': 'Processing message...',

    // MODALES
    // - Modal de éxito
    'modal.success.title': 'Message sent successfully!',
    'modal.success.description': 'Thank you for reaching out. I will get back to you as soon as possible.',
    'modal.button.accept': 'Accept',

    // - Modal de error
    'modal.error.title': 'Something went wrong!',
    'modal.error.description': 'Sorry, there was an error sending your message. Please try again later.',

    // MENSAJES 
    // - Mensajes de error
    'error.connection': 'Connection error. Please try again.',
    'error.generic': 'An error occurred while sending.',

    // - Mensajes de advertencia
    'warning.cooldown': 'Please wait {seconds} seconds before sending another message.',

    // FORMULARIO
    // - Nombres por defecto
    'input.default-subject': 'New message from Web Portfolio',
    'input.default-from_name': 'Web Portfolio',

    // - Error en campo
    'field.error.required': 'This field cannot be empty or contain only spaces.',
    'field.error.email': 'Please enter a valid email address.',
    'field.error.maxLength': 'Maximum character limit reached (500).',

    // Botones de acción
    'actions.view': 'View',
    'actions.download': 'Download',
    'actions.achievements': 'Achievements',
    'actions.back': 'Back',
} as const;

export type TranslationKey = keyof typeof en;

// #################################################### TRADUCCIONES AL ESPAÑOL ###################################################################################
const es: Record<TranslationKey, string> = {
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
    'nav.toggleLabel': 'Alternar navegación',

    // Sección Hero
    'hero.kicker': 'Hola, soy',
    'hero.roles.student': 'Estudiante de Ingeniería de Software',
    'hero.roles.developer': 'Desarrollador Junior Full Stack',
    'hero.description': 'Más de 4 años desarrollando proyectos colaborativos. Especializado en desarrollo full stack, Bases de Datos e IA de visión por computadora. Ubicado en Quito, Ecuador.',
    'action.downloadCv': 'Descargar CV',

    // Sección Skills
    'skills.showMore': 'Mostrar más',
    'skills.showLess': 'Mostrar menos',

    // Sección Contacto
    // - Labels de los campos del formulario de contacto
    'contact.label.reason': 'Razón de contacto',
    'contact.label.name': 'Nombre',
    'contact.label.email': 'Correo electrónico',
    'contact.label.company': 'Empresa',
    'contact.label.message': 'Mensaje',

    // - Placeholders de los campos del formulario de contacto
    'contact.placeholder.name': 'Ingresa tu nombre',
    'contact.placeholder.email': 'tu.correo@dominio.com',
    'contact.placeholder.company': 'Ingresa el nombre de tu empresa u organización',

    // - Mensajes de fallback
    'contact.fallbackName': 'Usuario',

    // - Botón de envío del formulario de contacto
    'contact.send_message': 'Enviar mensaje',
    'contact.sending': 'Enviando...',
    'contact.processing': 'Procesando mensaje...',

    // MODALES
    // - Modal de éxito
    'modal.success.title': '¡Mensaje enviado con éxito!',
    'modal.success.description': 'Gracias por escribirme. Me pondré en contacto contigo lo antes posible.',
    'modal.button.accept': 'Aceptar',

    // - Modal de error
    'modal.error.title': '¡Algo salió mal!',
    'modal.error.description': 'Una disculpa, hubo un error enviando tu mensaje. Por favor, inténtalo de nuevo más tarde.',
    
    // MENSAJES
    // - Mensajes de error
    'error.connection': 'Error de conexión. Por favor, inténtalo de nuevo más tarde.',
    'error.generic': 'Ocurrió un error mientras se enviaba el mensaje.',

    // - Mensajes de advertencia
    'warning.cooldown': 'Por favor, esperar {seconds} segundos antes de enviar otro mensaje.',

    // FORMULARIO
    // - Nombres por defecto
    'input.default-subject': 'Nuevo mensaje del Portafolio Web',
    'input.default-from_name': 'Portafolio Web',

    // - Error en campo
    'field.error.required': 'Este campo no puede estar vacío o contener solo espacios.',
    'field.error.email': 'Por favor, ingresa una dirección de correo electrónico válida.',
    'field.error.maxLength': 'Límite máximo de caracteres alcanzado (500).',

    // Botones de acción
    'actions.view': 'Ver',
    'actions.download': 'Descargar',
    'actions.achievements': 'Logros',
    'actions.back': 'Volver', 
};

export const ui = { en, es };