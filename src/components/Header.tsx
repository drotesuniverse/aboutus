"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="fixed top-0 left-0 w-full z-50 p-6 md:p-8 mix-blend-difference text-ash pointer-events-none"
        >
            <div className="flex items-center justify-between w-full max-w-[1920px] mx-auto pointer-events-auto bg-transparent relative">

                {/* Left: Visible Navigation (Desktop) */}
                <nav className="hidden md:flex items-center gap-8 font-medium text-xs tracking-[0.2em] uppercase text-stone flex-1">
                    <Link href="/" className="hover:text-ash transition-colors">Home</Link>
                    <Link href="/shop" className="hover:text-ash transition-colors">Shop</Link>
                    <Link href="/shop" className="hover:text-ash transition-colors">Collection</Link>
                </nav>

                {/* Center: Logo */}
                <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:flex-none">
                    <Link href="/" className="block">
                        <Image
                            src="/assets/logo.png"
                            alt="Drotes"
                            width={100}
                            height={40}
                            className="w-20 md:w-24 h-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                        />
                    </Link>
                </div>

                {/* Right: Mobile Menu Only (Cart Removed) */}
                <div className="flex items-center justify-end gap-6 flex-1">

                    {/* Mobile Menu Toggle (Visible only on mobile) */}
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden group flex items-center gap-2 hover:opacity-60 transition-opacity">
                        <div className="space-y-1.5">
                            <span className={`block w-6 h-[1px] bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`block w-6 h-[1px] bg-white transition-all ${isOpen ? 'opacity-0' : ''}`} />
                            <span className={`block w-6 h-[1px] bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-obsidian z-40 flex flex-col items-center justify-center pointer-events-auto md:hidden">
                    <nav className="flex flex-col items-center gap-8 font-serif text-3xl text-ash">
                        <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link href="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
                        <Link href="/shop" onClick={() => setIsOpen(false)}>Collection</Link>
                    </nav>
                </div>
            )}
        </motion.header>
    );
}
