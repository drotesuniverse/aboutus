"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function StarkHero() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section ref={container} className="relative h-[90vh] md:h-screen w-full overflow-hidden bg-white text-black flex flex-col items-center justify-center">
            {/* Background - Optional: Keep it white or subtle image. 
            User wanted editorial. Let's start with a massive image then overlay text.
        */}
            <motion.div style={{ scale, y }} className="absolute inset-0 z-0">
                <Image
                    src="/assets/image2.jpg"
                    alt="Desert"
                    fill
                    className="object-cover grayscale contrast-125 brightness-110" // High fashion B&W look
                    priority
                />
                <div className="absolute inset-0 bg-white/10" />
            </motion.div>

            <div className="relative z-10 text-center mix-blend-difference text-white px-4">
                <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[12vw] leading-[0.85] font-black tracking-tighter uppercase"
                >
                    Evolving <br /> Minimalism
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="mt-8 flex justify-center gap-12 text-xs uppercase tracking-[0.2em] font-medium"
                >
                    <span>Resilience</span>
                    <span>Silence</span>
                    <span>Self-Belief</span>
                </motion.div>
            </div>
        </section>
    );
}
