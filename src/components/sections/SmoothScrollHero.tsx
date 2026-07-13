// ReactLenis removed - using global provider
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "framer-motion";
import { usePerformance } from "@/hooks/usePerformance";

export const SmoothScrollHero = () => {
    const { isLowPowerMode } = usePerformance();
    return (
        <div className="bg-background text-zinc-900 dark:text-zinc-50 relative z-0">
            <Hero isLowPowerMode={isLowPowerMode} />
        </div>
    );
};

const SECTION_HEIGHT = 600;

const Hero = ({ isLowPowerMode }: { isLowPowerMode: boolean }) => {
    const { scrollY } = useScroll();

    // Simplify physics for low power mode
    const smoothScrollY = useSpring(scrollY, isLowPowerMode ? {
        stiffness: 50,
        damping: 30
    } : {
        mass: 0.1,
        stiffness: 100,
        damping: 20
    });

    return (
        <div
            style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
            className="relative w-full"
        >
            <CenterImage scrollY={smoothScrollY} />

            <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-transparent to-background z-20 pointer-events-none" />

            <motion.div
                className="fixed bottom-6 left-1/2 -translate-x-[65%] z-50 hidden md:flex flex-col items-center gap-2 cursor-pointer pointer-events-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                onClick={() => {
                    document.getElementById("launch-schedule")?.scrollIntoView({
                        behavior: "smooth",
                    });
                }}
            >
            </motion.div>
        </div>
    );
};

const CenterImage = ({ scrollY }: { scrollY: MotionValue<number> }) => {
    // Animation: Scale from 50% to 100%
    const scale = useTransform(scrollY, [0, SECTION_HEIGHT], [0.5, 1]);
    const borderRadius = useTransform(scrollY, [0, SECTION_HEIGHT], [24, 0]);
    // Fade out LATER, ensuring it stays as a backdrop for the Timeline entry
    const opacity = useTransform(
        scrollY,
        [SECTION_HEIGHT + 1000, SECTION_HEIGHT + 1600],
        [1, 0]
    );

    // Text specific animations
    const textOpacity = useTransform(scrollY, [0, 200], [1, 0]);
    const textScale = useTransform(scrollY, [0, 200], [1, 1.1]);
    const textY = useTransform(scrollY, [0, 200], [0, 50]);

    const subtitleOpacity = useTransform(scrollY, [0, 150], [1, 0]);
    const subtitleY = useTransform(scrollY, [0, 150], [0, 20]);

    return (
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-0">
            <motion.div
                style={{
                    scale,
                    borderRadius,
                    opacity,
                }}
                className="w-full h-full shadow-2xl relative origin-center bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-800"
            >
                <div className="absolute inset-0 bg-black/5 dark:bg-black/40" />
            </motion.div>

            {/* Title Overlay - 'READ DETAIL' Style Glassmorphism */}
            <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    style={{
                        opacity: textOpacity,
                        scale: textScale,
                        y: textY,
                        maskImage: 'radial-gradient(ellipse 90% 85% at center, black 65%, transparent 100%)',
                        WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at center, black 65%, transparent 100%)',
                    }}
                    className="relative group bg-white/50 dark:bg-black/40 backdrop-blur-[80px] px-[clamp(24px,8vw,128px)] py-[clamp(60px,15vh,240px)] rounded-[clamp(2rem,6vw,4rem)] flex flex-col items-center justify-center w-[92vw] max-w-[1600px]"
                >
                    {/* Ambient Glow */}
                    <div className="absolute inset-0 bg-primary/2 rounded-[clamp(2rem,6vw,4rem)] pointer-events-none" />

                    <h1 className="text-[clamp(3.5rem,15vw,15rem)] font-black text-foreground dark:text-white tracking-[-0.06em] leading-[0.8] uppercase text-center mb-[clamp(24px,4vh,48px)] -ml-2">
                        EXPERIENCE
                    </h1>

                    <p className="w-full max-w-4xl text-center text-[clamp(10px,1.2vw,14px)] font-bold text-foreground/50 dark:text-white/50 tracking-[clamp(0.1em,0.4em,0.4em)] leading-relaxed md:leading-[2.2] uppercase">
                        Merging technical precision with creative vision.
                        <br className="hidden md:block" />
                        A curated timeline of my professional journey, from foundational code to AI solutions.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

