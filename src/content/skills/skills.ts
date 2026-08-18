import type { ImageMetadata } from 'astro';
import excelIcon from '../../assets/images/skills/excel.webp';
import flaskIcon from '../../assets/images/skills/flask.webp';
import jakartaEeIcon from '../../assets/images/skills/jakarta-ee.webp';
import jqueryIcon from '../../assets/images/skills/jquery.webp';
import kerasIcon from '../../assets/images/skills/keras.webp';
import mavenIcon from '../../assets/images/skills/maven.webp';
import opencvIcon from '../../assets/images/skills/opencv.webp';
import pydanticIcon from '../../assets/images/skills/pydantic.webp';
import scikitLearnIcon from '../../assets/images/skills/Scikit_learn.webp';
import sqlServerIcon from '../../assets/images/skills/sql-server.webp';
import sqliteIcon from '../../assets/images/skills/sqlite.webp';
import yoloIcon from '../../assets/images/skills/yolo.webp';

export interface Skill {
  name: string;
  icon: string | ImageMetadata; // Puede ser un string (para iconos de la librería) o un objeto ImageMetadata (para imágenes locales)
}

export const skills: Skill[] = [
  { name: "Python", icon: "logos:python" },
  { name: "Java", icon: "logos:java" },
  { name: "C#", icon: "logos:c-sharp" },

  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "TypeScript", icon: "logos:typescript-icon" },

  { name: "PostgreSQL", icon: "logos:postgresql" },
  { name: "MySQL", icon: "logos:mysql-icon" },
  { name: "MongoDB", icon: "logos:mongodb-icon" },
  { name: "SQLite", icon: sqliteIcon },
  { name: "SQL Server", icon: sqlServerIcon },

  { name: "HTML5", icon: "logos:html-5" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "CSS3", icon: "logos:css-3" },
  { name: "Astro", icon: "logos:astro-icon" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { name: "Bootstrap", icon: "logos:bootstrap" },

  { name: "Azure", icon: "logos:azure-icon" },
  { name: "Agile SCRUM Framework", icon: "mdi:reiterate" },

  { name: "Docker", icon: "logos:docker-icon" },
  { name: "Unity", icon: "logos:unity" },

  { name: "FastAPI", icon: "logos:fastapi-icon" },
  { name: "Flask", icon: flaskIcon },

  { name: "PHP", icon: "logos:php" },

  // Soft Skills
  { name: "Self-learning", icon: "mdi:head-lightbulb" },
  { name: "Conflict resolution", icon: "mdi:handshake" },
  { name: "Technical leadership", icon: "mdi:account-star" },
  { name: "Teamwork", icon: "mdi:account-group" },
  { name: "Effective communication", icon: "mdi:chat-processing" },
  { name: "Adaptability", icon: "mdi:autorenew" },
  { name: "Requirements analysis", icon: "mdi:clipboard-text-search" },

  { name: "Django", icon: "logos:django-icon" },

  { name: "Power BI", icon: "logos:microsoft-power-bi" },

  // ---------------------------- skills que no se van a ver ----------------------------

  { name: "C++", icon: "logos:c-plusplus" },
  { name: "C", icon: "logos:c" },
  { name: "Jenkins", icon: "logos:jenkins" },
  { name: "PyTorch", icon: "logos:pytorch-icon" },
  { name: "NumPy", icon: "logos:numpy" },

  { name: "TensorFlow", icon: "logos:tensorflow" },

  { name: "Streamlit", icon: "logos:streamlit" },

  { name: "Linux", icon: "logos:linux-tux" },

  { name: "Kotlin", icon: "logos:kotlin-icon" },
  { name: "Laravel", icon: "logos:laravel" },

  { name: "Eclipse", icon: "logos:eclipse-icon" },
  { name: "Visual Studio Code", icon: "logos:visual-studio-code" },
  { name: "IntelliJ IDEA", icon: "logos:intellij-idea" },
  { name: "PyCharm", icon: "logos:pycharm" },
  { name: "Visual Studio", icon: "logos:visual-studio" },

  { name: "Supabase", icon: "logos:supabase-icon" },
  { name: "Vercel", icon: "logos:vercel-icon" },
  { name: "Postman", icon: "logos:postman-icon" },

  { name: "Figma", icon: "logos:figma" },

  { name: "JQuery", icon: "logos:opengl" },

  { name: "OpenCV", icon: opencvIcon },
  { name: "Excel", icon: excelIcon },

  { name: "Keras", icon: kerasIcon },
  { name: "Maven", icon: mavenIcon },
  { name: "jQuery", icon: jqueryIcon },
  { name: "Jakarta EE", icon: jakartaEeIcon },
  { name: "Pydantic", icon: pydanticIcon },
  { name: "Scikit-learn", icon: scikitLearnIcon },
  { name: "YOLOv8", icon: yoloIcon },

  { name: "Hibernate", icon: "logos:hibernate" },
  { name: "Apache Tomcat", icon: "logos:tomcat" },

  { name: "npm", icon: "logos:npm-icon" },

  { name: "Git", icon: "logos:git-icon" },
  { name: "GitHub", icon: "logos:github-icon" },
  { name: "GitHub Actions", icon: "logos:github-actions" },

];