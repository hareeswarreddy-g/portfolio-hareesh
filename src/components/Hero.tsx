"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--background)]">
            {/* Background Elements */}
            <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-50 z-0"></div>

            {/* Profile Background Image - Responsive Adjustments */}
            <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0 opacity-30 md:opacity-100 pointer-events-none select-none">
                <div className="relative w-full h-full">
                    {/* Horizontal Gradient: Blends image from left on desktop, adds readability on mobile */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[var(--background)] to-[var(--background)] z-10 md:via-transparent"></div>
                    {/* Vertical Gradient: Blends image into the bottom of the page */}
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

            {/* Animated Glow Orb */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                    x: [0, 30, -30, 0],
                    y: [0, -30, 30, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-0 w-72 md:w-96 h-72 md:h-96 bg-[var(--neon-blue)] rounded-full blur-[120px] md:blur-[150px] z-0 pointer-events-none"
            />

            <div className="container relative z-20 px-6 mx-auto">
                <div className="max-w-4xl text-left">
                    {/* Badge */}
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

                    {/* Main Heading - Responsive text sizes prevent overlap */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-[1.1]"
                    >
                        <span className="text-white block">GUDDEMMAGAI</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-cyan)] to-[var(--neon-purple)]">
                            HAREESWAR REDDY
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-base md:text-xl lg:text-2xl text-gray-400 mb-8 max-w-xl leading-relaxed"
                    >
                        Computer Science Student | Programmer | AWS Enthusiast
                    </motion.p>

                    {/* Quote/Motto */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-gray-500 mb-10 text-xs md:text-base max-w-md border-l-2 border-[var(--neon-purple)] pl-4 italic"
                    >
                        "Building strong programming fundamentals with a passion for systems and Linux"
                    </motion.p>

                    {/* Buttons - Stack on small mobile, row on larger screens */}
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
                            className="px-8 py-3 rounded-full border border-white/20 hover:border-[var(--neon-purple)] hover:text-[var(--neon-purple)] transition-all hover:bg-white/5 text-center"
                        >
                            Contact Me
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}