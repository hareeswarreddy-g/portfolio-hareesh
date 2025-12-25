"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center overflow-hidden bg-[var(--background)]">
            {/* Background Elements */}
            <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-50 z-0"></div>

            {/* Profile Background Image (Right Side) */}
            <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0 opacity-40 md:opacity-100 pointer-events-none select-none">
                <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[var(--background)] to-[var(--background)] z-10 md:via-transparent md:to-[var(--background)]"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--background)] z-10"></div>
                    <Image
                        src="/profile.jpg"
                        alt="Profile Background"
                        fill
                        className="object-cover object-center md:object-right-top"
                        priority
                    />
                </div>
            </div>

            {/* Animated Glow Orbs (Adjusted for Left Alignment) */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 50, -50, 0],
                    y: [0, -50, 50, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-0 w-96 h-96 bg-[var(--neon-blue)] rounded-full blur-[150px] opacity-10 z-0"
            />

            <div className="container relative z-10 px-6">
                <div className="max-w-2xl text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-sm mb-6">
                            <Terminal size={14} className="text-[var(--neon-cyan)]" />
                            <span className="text-xs uppercase tracking-widest text-gray-400">System Ready</span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
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
                        className="text-xl md:text-2xl text-gray-400 mb-8 max-w-xl"
                    >
                        Computer Science Student | Programmer | AWS Enthusiast
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-gray-500 mb-10 text-sm md:text-base max-w-lg border-l-2 border-[var(--neon-purple)] pl-4"
                    >
                        "Building strong programming fundamentals with a passion for systems and Linux"
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-start gap-4"
                    >
                        <Link
                            href="#projects"
                            className="group relative px-8 py-3 rounded-full bg-white text-black font-semibold overflow-hidden transition-all hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                View Projects <ArrowRight size={18} />
                            </span>
                            <div className="absolute inset-0 bg-[var(--neon-blue)] opacity-0 group-hover:opacity-20 transition-opacity" />
                        </Link>

                        <Link
                            href="#contact"
                            className="px-8 py-3 rounded-full border border-white/20 hover:border-[var(--neon-purple)] hover:text-[var(--neon-purple)] transition-all hover:bg-white/5"
                        >
                            Contact Me
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
