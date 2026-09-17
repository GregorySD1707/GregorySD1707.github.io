// src/content/contact/reasons.ts
import type { Lang } from '../../i18n/ui';

type LocalizedText = Partial<Record<Lang, string>> & { en: string };

export interface ContactReason {
  id: string;
  label: LocalizedText;
  subjectPrefix: LocalizedText;
  placeholder: LocalizedText;
  extraField: string | null;
}
export const contactReasons = [
  {
    id: "work",
    label: {
       en: "Job Proposal / Project",
       es: "Propuesta de trabajo / Proyecto"
    },
    subjectPrefix: {
      en: "[Work] New message from",
      es: "[Trabajo] Nuevo mensaje de"
    },
    placeholder: {
      en: "Tell me about the role, company, or web project you have in mind...",
      es: "Dime sobre el rol, la empresa o el proyecto web que tienes en mente..."
    },
    extraField: "company"
  },
  {
    id: "suggestion",
    label: {
      en: "Suggestion / Error",
      es: "Sugerencia / Error"
    },
    subjectPrefix: {
      en: "[Support] Report of",
      es: "[Soporte] Informe de"
    },
    placeholder: {
      en: "Describe the error you found or the suggestion to improve the interface...",
      es: "Describe el error que encontraste o la sugerencia para mejorar la interfaz..."
    },
    extraField: null
  },
  {
    id: "other",
    label: {
      en: "Question / Other",
      es: "Pregunta / Otro"
    },
    subjectPrefix: {
      en: "[General] Message from",
      es: "[General] Mensaje de"
    },
    placeholder: {
      en: "Write your question or comment here...",
      es: "Escribe tu pregunta o comentario aquí..."
    },
    extraField: null
  }
];