import en from '../../i18n/en.json';

export type TranslationKey = keyof typeof en;

export const t = (key: TranslationKey): string => en[key];
