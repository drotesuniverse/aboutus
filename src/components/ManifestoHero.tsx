"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ManifestoHero() {
    return (
        <section className="h-[85vh] w-full flex flex-col items-center justify-center relative overflow-hidden bg-obsidian border-b border-stone/5">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#050505_70%)] opacity-40 z-10" />

            {/* Subtle Background Image */}
            <div className="absolute inset-0 opacity-10">
                <Image
                    src="/assets/origin.jpg"
                    alt="Background Texture"
                    fill
                    className="object-cover blur-sm grayscale"
                />
            </div>

            <div className="relative z-20 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <span className="block text-stone text-xs md:text-sm tracking-[0.4em] uppercase mb-6 font-medium">The Beginning</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
                    className="font-serif text-5xl md:text-8xl lg:text-9xl text-ash tracking-tight leading-none"
                >
                    It Started <br />
                    <span className="text-stone/80 italic">With Silence.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 2 }}
                    className="mt-12 max-w-lg mx-auto text-stone/60 text-sm md:text-base leading-relaxed"
                >
                    No noise. No clamor for attention. <br />
                    Just the quiet resolve to build something real.
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 2 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="flex flex-col items-center gap-4">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-stone/50 animate-pulse">Scroll</span>
                    <div className="w-[1px] h-16 bg-stone/20 overflow-hidden">
                        <motion.div
                            animate={{ y: ["-100%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="w-full h-full bg-stone"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
