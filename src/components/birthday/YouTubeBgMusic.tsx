import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { YOUTUBE_BGM } from "@/config/birthday";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
    interface Window {
        YT?: any;
        onYouTubeIframeAPIReady?: () => void;
    }
}

const IFRAME_API_SRC = "https://www.youtube.com/iframe_api";
const PLAYER_ELEMENT_ID = "birthday-bloom-youtube-bgm";

/** Loads the YouTube IFrame API once and resolves when `window.YT.Player` is ready. */
let apiPromise: Promise<void> | null = null;
const loadIframeApi = (): Promise<void> => {
    if (typeof window === "undefined") return Promise.resolve();
    if (window.YT?.Player) return Promise.resolve();
    if (apiPromise) return apiPromise;

    apiPromise = new Promise<void>((resolve) => {
        const previousCallback = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = () => {
            previousCallback?.();
            resolve();
        };
        if (!document.querySelector(`script[src="${IFRAME_API_SRC}"]`)) {
            const script = document.createElement("script");
            script.src = IFRAME_API_SRC;
            script.async = true;
            document.head.appendChild(script);
        }
    });
    return apiPromise;
};

/**
 * Background music for the final celebration page, streamed from YouTube.
 *
 * Mounted only once the guest reaches the landing page — the cinematic intro
 * keeps its own soundtrack. Browsers only allow unmuted autoplay after a user
 * gesture, and by this point the guest has tapped through the intro, so playback
 * normally starts on its own; if it is still blocked we retry on the next tap.
 */
export const YouTubeBgMusic = () => {
    const playerRef = useRef<any>(null);
    const hostRef = useRef<HTMLDivElement>(null);
    const [isMuted, setIsMuted] = useState(false);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (!YOUTUBE_BGM.videoId) return;

        let cancelled = false;
        let retryOnGesture: (() => void) | null = null;

        loadIframeApi().then(() => {
            if (cancelled || !hostRef.current) return;

            playerRef.current = new window.YT.Player(PLAYER_ELEMENT_ID, {
                videoId: YOUTUBE_BGM.videoId,
                playerVars: {
                    autoplay: 1,
                    controls: 0,
                    disablekb: 1,
                    fs: 0,
                    modestbranding: 1,
                    playsinline: 1,
                    rel: 0,
                    loop: 1,
                    // `loop` only works on a single video when a playlist of itself is given.
                    playlist: YOUTUBE_BGM.videoId,
                    start: YOUTUBE_BGM.startSeconds,
                },
                events: {
                    onReady: (event: any) => {
                        if (cancelled) return;
                        event.target.setVolume(YOUTUBE_BGM.volume);
                        event.target.playVideo();
                        setIsReady(true);

                        // Autoplay may still be refused; resume on the next interaction.
                        retryOnGesture = () => {
                            const state = playerRef.current?.getPlayerState?.();
                            if (state !== window.YT?.PlayerState?.PLAYING) {
                                playerRef.current?.playVideo?.();
                            }
                        };
                        document.addEventListener("click", retryOnGesture);
                        document.addEventListener("touchstart", retryOnGesture);
                    },
                    onStateChange: (event: any) => {
                        // Belt-and-braces loop in case the `playlist` trick is ignored.
                        if (event.data === window.YT?.PlayerState?.ENDED) {
                            event.target.seekTo(YOUTUBE_BGM.startSeconds, true);
                            event.target.playVideo();
                        }
                    },
                },
            });
        });

        return () => {
            cancelled = true;
            if (retryOnGesture) {
                document.removeEventListener("click", retryOnGesture);
                document.removeEventListener("touchstart", retryOnGesture);
            }
            playerRef.current?.destroy?.();
            playerRef.current = null;
        };
    }, []);

    const toggleMute = () => {
        const player = playerRef.current;
        if (!player) return;
        if (isMuted) {
            player.unMute?.();
            player.setVolume?.(YOUTUBE_BGM.volume);
            player.playVideo?.();
        } else {
            player.mute?.();
        }
        setIsMuted(!isMuted);
    };

    if (!YOUTUBE_BGM.videoId) return null;

    return (
        <>
            {/* Off-screen player: audio only, never visible to the guest. */}
            <div
                ref={hostRef}
                aria-hidden="true"
                className="fixed w-px h-px opacity-0 pointer-events-none -left-[9999px] -top-[9999px]"
            >
                <div id={PLAYER_ELEMENT_ID} />
            </div>

            {isReady && (
                <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={isMuted ? "Bật nhạc nền" : "Tắt nhạc nền"}
                    className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl text-white/50 hover:text-white hover:bg-white/10 transition-all flex items-center justify-center shadow-2xl"
                >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
            )}
        </>
    );
};
