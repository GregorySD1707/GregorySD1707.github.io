// src/i18n/utils.ts
import { ui, languages, type Lang } from './ui';

function isValidLang(lang: string | undefined): lang is Lang {
  return !!lang && lang in languages;
}

export function getSafeLang(lang: string | undefined): Lang {
  return isValidLang(lang) ? lang : 'en';
}

export function useTranslations(lang: string | undefined) {
  const safeLang = getSafeLang(lang);
  return function t(key: keyof typeof ui['en']): string {
    return ui[safeLang][key] ?? ui.en[key];
  };
}