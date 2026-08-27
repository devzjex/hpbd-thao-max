import { useBirthdayStore } from "@/features/core/store/useBirthdayStore";
import { TranslationSchema } from "./types";
import { enTranslations } from "./locales/en";
import { hiTranslations } from "./locales/hi";
import { bnTranslations } from "./locales/bn";
import { fr as frTranslations } from "./locales/fr";
import { viTranslations } from "./locales/vi";
import { applyVietnameseAddress, resolveVietnameseAddress } from "@/config/vietnameseAddress";

export type SupportedLanguage = 'en' | 'hi' | 'bn' | 'fr' | 'vi';

export const translations: Record<SupportedLanguage, TranslationSchema> = {
    en: enTranslations,
    hi: hiTranslations,
    bn: bnTranslations,
    fr: frTranslations,
    vi: viTranslations,
};

/** Every spelling of a language we accept from env vars, URL params, and share links. */
const VIETNAMESE_ALIASES = ['vi', 'vn', 'vie', 'viet', 'vietnamese', 'tieng viet', 'tiếng việt', 'tiengviet', 'việt', 'vietnam', 'việt nam'];
const FRENCH_ALIASES = ['fr', 'french', 'francais', 'française', 'francaise'];
const BENGALI_ALIASES = ['bn', 'bengali', 'bangla'];
const HINDI_ALIASES = ['hi', 'hindi', 'in'];

/** Resolve any raw language spelling to one of the supported locale codes. */
export const normalizeLanguage = (lang?: string): SupportedLanguage => {
    const normalized = (lang || '').toLowerCase().trim();
    if (VIETNAMESE_ALIASES.includes(normalized)) return 'vi';
    if (FRENCH_ALIASES.includes(normalized)) return 'fr';
    if (BENGALI_ALIASES.includes(normalized)) return 'bn';
    if (HINDI_ALIASES.includes(normalized)) return 'hi';
    return 'en';
};

export const getTranslation = (lang?: string): TranslationSchema => {
    return translations[normalizeLanguage(lang)] || enTranslations;
};

export const interpolate = (text: string, params?: Record<string, string | number>): string => {
    if (!params) return text;
    return Object.entries(params).reduce((acc, [key, val]) => {
        return acc.replace(new RegExp(`\\{\\{?${key}\\}?\\}`, 'g'), String(val));
    }, text);
};

export const getTranslationValue = (lang: string, keyPath: string, params?: Record<string, string | number>): string => {
    const dict = getTranslation(lang);
    const keys = keyPath.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let current: any = dict;
    for (const k of keys) {
        if (current && typeof current === 'object' && k in current) {
            current = current[k];
        } else {
            // Fallback to English
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            let fallbackCurrent: any = enTranslations;
            for (const fk of keys) {
                if (fallbackCurrent && typeof fallbackCurrent === 'object' && fk in fallbackCurrent) {
                    fallbackCurrent = fallbackCurrent[fk];
                } else {
                    return keyPath;
                }
            }
            return interpolate(String(fallbackCurrent), params);
        }
    }
    return interpolate(String(current), params);
};

export const useTranslation = () => {
    const rawLanguage = useBirthdayStore(state => state.config.language);
    const recipientName = useBirthdayStore(state => state.config.name);
    const language: SupportedLanguage = normalizeLanguage(rawLanguage);
    const currentTranslations = translations[language] || enTranslations;
    // Vietnamese copy writes the second person as a {ban} token; resolve it from how
    // the recipient is named ("chị Thảo" -> "chị") so one string never mixes registers.
    const address = resolveVietnameseAddress(recipientName);

    const t = (keyPath: string, params?: Record<string, string | number>): string => {
        const value = getTranslationValue(language, keyPath, params);
        return language === 'vi' ? applyVietnameseAddress(value, address) : value;
    };

    /**
     * Resolves the {ban} address token in Vietnamese strings written inline in
     * components (the ones that never went through the locale files). A no-op in
     * every other language, so call sites can wrap unconditionally.
     */
    const addr = (text: string): string =>
        language === 'vi' ? applyVietnameseAddress(text, address) : text;

    return {
        t,
        addr,
        language,
        isHindi: language === 'hi',
        isBengali: language === 'bn',
        isFrench: language === 'fr',
        isVietnamese: language === 'vi',
        translations: currentTranslations,
    };
};
