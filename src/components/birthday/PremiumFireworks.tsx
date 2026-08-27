import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
interface PremiumFireworksProps {
    runKey: number;
}
interface Firework {
    x: number;
    y: number;
    targetX: number;
    targetY: number;
    vx: number;
    vy: number;
    color: string;
    life: number;
    trail: Array<{
        x: number;
        y: number;
        alpha: number;
    }>;
}
interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    color: string;
    life: number;
    maxLife: number;
    size: number;
    gravity: number;
    drag: number;
}
interface Flash {
    x: number;
    y: number;
    radius: number;
    life: number;
    color: string;
}
const palette = ["#f97316", "#facc15", "#38bdf8", "#fb7185", "#a78bfa", "#34d399", "#ffffff"];

/** Radius of the pre-rendered glow sprite, in device-independent pixels. */
const SPRITE_RADIUS = 32;

/**
 * Builds one soft radial glow per palette colour, once.
 *
 * The obvious way to draw a glowing particle is `shadowBlur` + `arc()`, but canvas
 * shadows run a real gaussian blur on every single fill. At ~1000 live particles
 * that is ~1000 blurs per frame and it dominates the frame budget on anything but
 * a fast desktop GPU. Stamping a cached sprite with `drawImage` under the existing
 * `lighter` composite looks near-identical and costs a fraction as much.
 */
const buildGlowSprites = (colors: string[]) => {
    const sprites = new Map<string, HTMLCanvasElement>();
    for (const color of colors) {
        const sprite = document.createElement("canvas");
        sprite.width = SPRITE_RADIUS * 2;
        sprite.height = SPRITE_RADIUS * 2;
        const spriteCtx = sprite.getContext("2d");
        if (!spriteCtx) continue;
        const gradient = spriteCtx.createRadialGradient(
            SPRITE_RADIUS, SPRITE_RADIUS, 0,
            SPRITE_RADIUS, SPRITE_RADIUS, SPRITE_RADIUS
        );
        gradient.addColorStop(0, color);
        gradient.addColorStop(0.25, `${color}cc`);
        gradient.addColorStop(0.55, `${color}45`);
        gradient.addColorStop(1, `${color}00`);
        spriteCtx.fillStyle = gradient;
        spriteCtx.fillRect(0, 0, SPRITE_RADIUS * 2, SPRITE_RADIUS * 2);
        sprites.set(color, sprite);
    }
    return sprites;
};

export const PremiumFireworks = ({ runKey }: PremiumFireworksProps) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const reduceMotion = useReducedMotion();
    const isMobile = useIsMobile();
    useEffect(() => {
        if (!runKey || reduceMotion || typeof window === "undefined")
            return undefined;
        const canvas = canvasRef.current;
        if (!canvas)
            return undefined;
        const context = canvas.getContext("2d", { alpha: true });
        if (!context)
            return undefined;
        let raf = 0;
        let launchTimer = 0;
        let running = true;
        let lastTime = performance.now();
        let launched = 0;
        // Weak machines report few cores; give them a lighter show rather than a
        // stuttering one. Desktop stays at the original density.
        const lowPower = isMobile || (navigator.hardwareConcurrency || 8) <= 4;
        const maxLaunches = lowPower ? 8 : 14;
        const launchWindow = lowPower ? 2500 : 3300;
        const totalDuration = launchWindow + 2300;
        /** Backstop so a burst can never pile up into an unrecoverable frame. */
        const maxLiveParticles = lowPower ? 320 : 700;
        const startTime = performance.now();
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const sprites = buildGlowSprites(palette);
        const fireworks: Firework[] = [];
        const particles: Particle[] = [];
        const flashes: Flash[] = [];
        const resize = () => {
            canvas.width = Math.floor(window.innerWidth * dpr);
            canvas.height = Math.floor(window.innerHeight * dpr);
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            context.setTransform(dpr, 0, 0, dpr, 0, 0);
        };
        /** Stamps a cached glow sprite centred on (x, y). */
        const stamp = (color: string, x: number, y: number, radius: number, alpha: number) => {
            const sprite = sprites.get(color);
            if (!sprite || alpha <= 0 || radius <= 0) return;
            context.globalAlpha = Math.min(1, alpha);
            context.drawImage(sprite, x - radius, y - radius, radius * 2, radius * 2);
            context.globalAlpha = 1;
        };
        const launch = () => {
            if (!running || launched >= maxLaunches)
                return;
            const launchPositions = [0.12, 0.28, 0.5, 0.72, 0.88];
            const x = launchPositions[launched % launchPositions.length] * window.innerWidth + (Math.random() - 0.5) * 48;
            const y = window.innerHeight + 24;
            const targetX = Math.min(window.innerWidth - 40, Math.max(40, x + (Math.random() - 0.5) * window.innerWidth * 0.36));
            const targetY = window.innerHeight * (0.16 + Math.random() * 0.36);
            const speed = lowPower ? 9 : 11;
            const angle = Math.atan2(targetY - y, targetX - x);
            fireworks.push({
                x,
                y,
                targetX,
                targetY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                color: palette[Math.floor(Math.random() * palette.length)],
                life: 1,
                trail: [],
            });
            launched += 1;
            launchTimer = window.setTimeout(launch, 180 + Math.random() * (lowPower ? 260 : 180));
        };
        const explode = (firework: Firework) => {
            const headroom = maxLiveParticles - particles.length;
            if (headroom <= 0) return;
            const particleCount = Math.min(headroom, lowPower ? 36 : 64);
            flashes.push({ x: firework.x, y: firework.y, radius: 18, life: 1, color: firework.color });
            for (let i = 0; i < particleCount; i += 1) {
                const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.12;
                const speed = 1.8 + Math.random() * (lowPower ? 4 : 6);
                particles.push({
                    x: firework.x,
                    y: firework.y,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    color: Math.random() > 0.25 ? firework.color : palette[Math.floor(Math.random() * palette.length)],
                    life: 1,
                    maxLife: 54 + Math.random() * 34,
                    size: 1.2 + Math.random() * 2.4,
                    gravity: 0.035 + Math.random() * 0.025,
                    drag: 0.982 + Math.random() * 0.01,
                });
            }
        };
        const draw = (time: number) => {
            const delta = Math.min(32, time - lastTime) / 16.67;
            lastTime = time;
            context.globalCompositeOperation = "source-over";
            context.fillStyle = "rgba(0, 0, 0, 0.18)";
            context.fillRect(0, 0, window.innerWidth, window.innerHeight);
            context.globalCompositeOperation = "lighter";
            for (let i = fireworks.length - 1; i >= 0; i -= 1) {
                const firework = fireworks[i];
                firework.trail.push({ x: firework.x, y: firework.y, alpha: 1 });
                if (firework.trail.length > 12)
                    firework.trail.shift();
                firework.x += firework.vx * delta;
                firework.y += firework.vy * delta;
                firework.vy += 0.025 * delta;
                // One tapered polyline for the whole tail. The previous version stroked a
                // separate segment per trail point, so a single rocket cost 12 draw calls
                // per frame instead of one.
                if (firework.trail.length > 1) {
                    context.beginPath();
                    context.moveTo(firework.trail[0].x, firework.trail[0].y);
                    for (let p = 1; p < firework.trail.length; p += 1) {
                        context.lineTo(firework.trail[p].x, firework.trail[p].y);
                    }
                    context.lineTo(firework.x, firework.y);
                    context.strokeStyle = `${firework.color}b4`;
                    context.lineWidth = 2.2;
                    context.lineCap = "round";
                    context.lineJoin = "round";
                    context.stroke();
                }
                stamp(firework.color, firework.x, firework.y, 9, 0.95);
                if (firework.y <= firework.targetY || Math.hypot(firework.x - firework.targetX, firework.y - firework.targetY) < 28) {
                    explode(firework);
                    fireworks.splice(i, 1);
                }
            }
            for (let i = particles.length - 1; i >= 0; i -= 1) {
                const particle = particles[i];
                particle.vx *= particle.drag;
                particle.vy = particle.vy * particle.drag + particle.gravity * delta;
                particle.x += particle.vx * delta;
                particle.y += particle.vy * delta;
                particle.maxLife -= delta;
                particle.life = Math.max(0, particle.maxLife / 88);
                stamp(particle.color, particle.x, particle.y, particle.size * particle.life * 3.2, particle.life * 0.9);
                if (particle.life <= 0 || particle.y > window.innerHeight + 40)
                    particles.splice(i, 1);
            }
            for (let i = flashes.length - 1; i >= 0; i -= 1) {
                const flash = flashes[i];
                // Reuses the same cached sprite; the old code allocated a fresh radial
                // gradient for every flash on every frame.
                stamp(flash.color, flash.x, flash.y, flash.radius * 3.2, flash.life * 0.85);
                flash.radius += 6 * delta;
                flash.life -= 0.055 * delta;
                if (flash.life <= 0)
                    flashes.splice(i, 1);
            }
            const elapsed = time - startTime;
            if (elapsed > totalDuration && fireworks.length === 0 && particles.length === 0 && flashes.length === 0) {
                context.clearRect(0, 0, window.innerWidth, window.innerHeight);
                running = false;
                return;
            }
            raf = window.requestAnimationFrame(draw);
        };
        resize();
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        launch();
        raf = window.requestAnimationFrame(draw);
        window.addEventListener("resize", resize);
        return () => {
            running = false;
            window.clearTimeout(launchTimer);
            window.cancelAnimationFrame(raf);
            window.removeEventListener("resize", resize);
            fireworks.length = 0;
            particles.length = 0;
            flashes.length = 0;
            sprites.clear();
            context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        };
    }, [isMobile, reduceMotion, runKey]);
    // No `mix-blend-screen`: blending a viewport-sized layer over the page forces the
    // compositor to re-rasterise everything beneath it every frame, which is what made
    // scrolling seize up mid-burst. The canvas already composites its own particles
    // additively via `lighter`, so the look survives the change.
    return (<canvas ref={canvasRef} className="fixed inset-0 z-[95] pointer-events-none" aria-hidden="true"/>);
};
