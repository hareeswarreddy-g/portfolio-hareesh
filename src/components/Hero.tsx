"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col md:block overflow-hidden bg-[var(--background)]">
            {/* Background Elements */}
            <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-50 z-0"></div>

            {/* --- MOBILE ONLY IMAGE (Top of stack) --- */}
            <div className="relative w-full h-[40vh] z-10 md:hidden">
                <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--background)] z-20"></div>
                    <Image
                        src="/profile.jpg"
                        alt="Profile Mobile"
                        fill
                        className="object-cover object-top"
                        priority
                    />
                </div>
            </div>

            {/* --- PC ONLY IMAGE (Original Floating Style) --- */}
            {/* Using 'md:block' and 'absolute' ensures it doesn't push the PC text */}
            <div className="hidden md:block absolute top-0 right-0 w-1/2 h-full z-0 pointer-events-none select-none">
                <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[var(--background)] to-[var(--background)] z-10"></div>
                    <Image
                        src="/profile.jpg"
                        alt="Profile PC"
                        fill
                        className="object-cover object-right-top"
                        priority
                    />
                </div>
            </div>

            {/* --- CONTENT CONTAINER --- */}
            {/* On PC, 'md:flex md:items-center' restores your original vertical centering */}
            <div className="container relative z-30 px-6 mx-auto flex flex-col md:flex md:flex-row md:items-center h-full min-h-[60vh] md:min-h-screen mt-[-20px] md:mt-0 pb-12 md:pb-0">
                <div className="max-w-4xl text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)]/50 backdrop-blur-md mb-6">
                            <Terminal size={14} className="text-[var(--neon-cyan)]" />
                            <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400">System Ready</span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-[1.1]"
                    >
                        <span className="text-white block">GUDDEMMAGAI</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-cyan)] to-[var(--neon-purple)]">
                            HAREESWAR REDDY
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-base md:text-2xl text-gray-400 mb-8 max-w-xl leading-relaxed"
                    >
                        Computer Science Student | Programmer | AWS Enthusiast
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
                    >
                        <Link
                            href="#projects"
                            className="group relative px-8 py-3 rounded-full bg-white text-black font-semibold overflow-hidden transition-all hover:scale-105 flex justify-center items-center"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                View Projects <ArrowRight size={18} />
                            </span>
                            <div className="absolute inset-0 bg-[var(--neon-blue)] opacity-0 group-hover:opacity-20 transition-opacity" />
                        </Link>

                        <Link
                            href="#contact"
                            className="px-8 py-3 rounded-full border border-white/20 hover:border-[var(--neon-purple)] hover:text-[var(--neon-purple)] transition-all hover:bg-white/5 text-center text-white"
                        >
                            Contact Me
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}