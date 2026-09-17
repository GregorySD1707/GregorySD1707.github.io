// src/i18n/utils.ts
import { ui, languages, type Lang, type TranslationKey } from './ui';

function isValidLang(lang: string | undefined): lang is Lang {
  return !!lang && lang in languages;
}

export function getSafeLang(lang: string | undefined): Lang {
  return isValidLang(lang) ? lang : 'en';
}

export function useTranslations(lang: string | undefined) {
  const safeLang = getSafeLang(lang);
  return function t(key: TranslationKey, params?: Record<string, string | number>): string {
    let text: string = ui[safeLang][key];
    if (params) {
      for (const [param, value] of Object.entries(params)) {
        text = text.replaceAll(`{${param}}`, String(value));
      }
    }
    return text;
  };
}

export function localizeText(
  text: Partial<Record<Lang, string>> & { en: string },
  lang: Lang
): string {
  return text[lang] ?? text.en;
}