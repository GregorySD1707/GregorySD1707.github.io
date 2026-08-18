export interface Skill {
    name: string;
    icon: string;
    isBrandColor: boolean; // true = logos:*/multi-color, false = mdi:*/simple-icons con currentColor
}

export const skills: Skill[] = [
    { name: "Python", icon: "logos:python", isBrandColor: true },
    { name: "Java", icon: "logos:java", isBrandColor: true },
    { name: "C", icon: "logos:c", isBrandColor: true },
    { name: "C++", icon: "logos:c-plusplus", isBrandColor: true },
    { name: "C#", icon: "logos:c-sharp", isBrandColor: true },
    { name: "PHP", icon: "logos:php", isBrandColor: true }, // El logo oficial de PHP (las letras/óvalo)

    { name: "Hibernate", icon: "logos:hibernate", isBrandColor: true },
    { name: "Maven", icon: "logos:maven", isBrandColor: true },
    { name: "Apache Tomcat", icon: "logos:tomcat", isBrandColor: true },

    { name: "PostgreSQL", icon: "logos:postgresql", isBrandColor: true },
    { name: "MySQL", icon: "logos:mysql-icon", isBrandColor: true },
    { name: "MongoDB", icon: "logos:mongodb-icon", isBrandColor: true },
    { name: "SQLite", icon: "logos:sqlite", isBrandColor: true },

    { name: "HTML5", icon: "logos:html-5", isBrandColor: true },
    { name: "JavaScript", icon: "logos:javascript", isBrandColor: true },
    { name: "CSS3", icon: "logos:css-3", isBrandColor: true },

    { name: "npm", icon: "logos:npm-icon", isBrandColor: true },
    { name: "Node.js", icon: "logos:nodejs-icon", isBrandColor: true },
    { name: "TypeScript", icon: "logos:typescript-icon", isBrandColor: true },

    { name: "Git", icon: "logos:git-icon", isBrandColor: true },
    { name: "GitHub", icon: "logos:github-icon", isBrandColor: true },
    { name: "GitHub Actions", icon: "logos:github-actions", isBrandColor: true },

    { name: "Jenkins", icon: "logos:jenkins", isBrandColor: true },
    { name: "Docker", icon: "logos:docker-icon", isBrandColor: true },

    { name: "PyTorch", icon: "logos:pytorch-icon", isBrandColor: true },
    { name: "NumPy", icon: "logos:numpy", isBrandColor: true },
    { name: "OpenCV", icon: "logos:opencv", isBrandColor: true },
    { name: "TensorFlow", icon: "logos:tensorflow", isBrandColor: true },

    { name: "Django", icon: "logos:django-icon", isBrandColor: true },

    { name: "Unity", icon: "logos:unity", isBrandColor: true },

    { name: "FastAPI", icon: "logos:fastapi-icon", isBrandColor: true },
    { name: "Flask", icon: "logos:flask", isBrandColor: true },

    { name: "Streamlit", icon: "logos:streamlit", isBrandColor: true },

    { name: "Linux", icon: "logos:linux-tux", isBrandColor: true },

    { name: "Kotlin", icon: "logos:kotlin-icon", isBrandColor: true },
    { name: "Astro", icon: "logos:astro-icon", isBrandColor: true },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", isBrandColor: true },
    { name: "Bootstrap", icon: "logos:bootstrap", isBrandColor: true },
    { name: "Laravel", icon: "logos:laravel", isBrandColor: true },

    { name: "Eclipse", icon: "logos:eclipse-icon", isBrandColor: true },
    { name: "Visual Studio Code", icon: "logos:visual-studio-code", isBrandColor: true },
    { name: "IntelliJ IDEA", icon: "logos:intellij-idea", isBrandColor: true },
    { name: "PyCharm", icon: "logos:pycharm", isBrandColor: true },
    { name: "Visual Studio", icon: "logos:visual-studio", isBrandColor: true },

    { name: "Azure", icon: "logos:azure-icon", isBrandColor: true },

    { name: "Supabase", icon: "logos:supabase-icon", isBrandColor: true },
    { name: "Vercel", icon: "logos:vercel-icon", isBrandColor: true },
    { name: "Postman", icon: "logos:postman-icon", isBrandColor: true },

    { name: "Figma", icon: "logos:figma", isBrandColor: true },

    { name: "JQuery", icon: "logos:opengl", isBrandColor: true },
    { name: "Power BI", icon: "logos:microsoft-power-bi", isBrandColor: true },

    // Soft Skills
    { name: "Self-learning", icon: "mdi:head-lightbulb", isBrandColor: false },
    { name: "Conflict resolution", icon: "mdi:handshake", isBrandColor: false },
    { name: "Technical leadership", icon: "mdi:account-star", isBrandColor: false },
    { name: "Teamwork", icon: "mdi:account-group", isBrandColor: false },
    { name: "Effective communication", icon: "mdi:chat-processing", isBrandColor: false },
    { name: "Adaptability", icon: "mdi:autorenew", isBrandColor: false },
    { name: "Requirements analysis", icon: "mdi:clipboard-text-search", isBrandColor: false },

    // Arquitectura y Metodologías
  { name: "Agile SCRUM Framework", icon: "mdi:reiterate", isBrandColor: false },
  

];