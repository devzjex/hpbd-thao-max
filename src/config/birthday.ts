const parseEnvStr = (val: unknown): string | null => {
    if (!val)
        return null;
    const str = String(val).trim();
    if (str === "" || str === "null" || str === "undefined")
        return null;
    return str;
};

const envPhoto1 = parseEnvStr(import.meta.env.VITE_PHOTO_1);
const envPhoto2 = parseEnvStr(import.meta.env.VITE_PHOTO_2);
const envPhoto3 = parseEnvStr(import.meta.env.VITE_PHOTO_3);
const envBgm = parseEnvStr(import.meta.env.VITE_BGM_URL) || parseEnvStr(import.meta.env.VITE_SOUND_URL);
const envSoundEffectsRaw = parseEnvStr(import.meta.env.VITE_SOUND_EFFECTS);
const envSoundEffects = envSoundEffectsRaw !== null
    ? !['false', '0', 'no', 'off', 'disabled'].includes(envSoundEffectsRaw.toLowerCase())
    : true;

export const PHOTO_ASSETS = {
    photo1: envPhoto1,
    photo2: envPhoto2,
    photo3: envPhoto3,
};

/**
 * Accepts a bare video id or any common YouTube URL shape
 * (youtu.be/ID, /watch?v=ID, /embed/ID, /shorts/ID) and returns the id.
 */
const parseYouTubeId = (raw: string | null): string | null => {
    if (!raw) return null;
    const value = raw.trim();
    if (/^[\w-]{11}$/.test(value)) return value;
    const patterns = [
        /youtu\.be\/([\w-]{11})/,
        /[?&]v=([\w-]{11})/,
        /\/embed\/([\w-]{11})/,
        /\/shorts\/([\w-]{11})/,
    ];
    for (const pattern of patterns) {
        const match = value.match(pattern);
        if (match) return match[1];
    }
    return null;
};

const envYoutubeBgm = parseEnvStr(import.meta.env.VITE_YOUTUBE_BGM_URL) || parseEnvStr(import.meta.env.VITE_YOUTUBE_BGM_ID);
const envYoutubeVolume = Number(parseEnvStr(import.meta.env.VITE_YOUTUBE_BGM_VOLUME) ?? '');
const envYoutubeStart = Number(parseEnvStr(import.meta.env.VITE_YOUTUBE_BGM_START) ?? '');

/**
 * Background music for the final celebration page only — the cinematic intro
 * keeps the AUDIO_ASSETS.bgmUrl track. Leave the env var empty to disable.
 */
export const YOUTUBE_BGM = {
    videoId: parseYouTubeId(envYoutubeBgm),
    volume: Number.isFinite(envYoutubeVolume) && envYoutubeVolume > 0 ? Math.min(100, envYoutubeVolume) : 35,
    startSeconds: Number.isFinite(envYoutubeStart) && envYoutubeStart > 0 ? Math.floor(envYoutubeStart) : 0,
};

export const AUDIO_ASSETS = {
    bgmUrl: envBgm,
    soundEffectsEnabled: envSoundEffects,
};
