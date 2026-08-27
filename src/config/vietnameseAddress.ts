/**
 * Vietnamese second-person address.
 *
 * Vietnamese has no neutral "you" — the right word depends on the relative age and
 * standing of the two people (chị, anh, em, cô, chú...). Copy that hardcodes "bạn"
 * reads wrong the moment the recipient is addressed with an honorific: a card
 * greeting "chị Thảo" and then continuing "làm việc cùng bạn" mixes two registers
 * in one breath.
 *
 * So Vietnamese copy writes the address as a `{ban}` token and this module resolves
 * it. Note that a literal "bạn" is left alone on purpose — it is also the noun
 * "friend" ("bạn thân", "người bạn đời"), and blindly swapping those would produce
 * nonsense like "chị thân".
 */

/** Kinship terms that act as an address when they lead a name. */
const VI_HONORIFICS = [
    'chị', 'anh', 'em', 'cô', 'chú', 'bác', 'ông', 'bà',
    'thầy', 'cậu', 'dì', 'mợ', 'bố', 'ba', 'mẹ', 'má', 'con', 'cháu',
];

/**
 * Works out how to address the recipient.
 *
 * Prefers an explicit override, else reads an honorific off the front of the name
 * ("chị Thảo" -> "chị"), else falls back to the neutral peer pronoun.
 */
export const resolveVietnameseAddress = (name?: string, explicit?: string): string => {
    const override = explicit?.trim();
    if (override) return override.toLowerCase();

    const words = (name ?? '').trim().split(/\s+/).filter(Boolean);
    if (words.length > 1 && VI_HONORIFICS.includes(words[0].toLowerCase())) {
        return words[0].toLowerCase();
    }
    return 'bạn';
};

/** Substitutes `{ban}` / `{Ban}` (sentence-initial) with the resolved address. */
export const applyVietnameseAddress = (text: string, address: string): string => {
    if (!text) return text;
    const capitalised = address.charAt(0).toUpperCase() + address.slice(1);
    return text.replace(/\{ban\}/g, address).replace(/\{Ban\}/g, capitalised);
};
