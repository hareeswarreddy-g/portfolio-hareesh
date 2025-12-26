"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20 md:pt-0">
            {/* Background Glow */}
            <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-50 z-0"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Grid System:
                   - Mobile: 1 Column (Stacks Image then Text)
                   - PC: 2 Columns (Text Left, Image Right)
                */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    {/* --- TEXT BLOCK --- */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col text-left items-start order-2 md:order-1"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-800 bg-gray-900/50 backdrop-blur-md mb-6">
                            <Terminal size={14} className="text-cyan-400" />
                            <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400">System Ready</span>
                        </div>

                        {/* Name */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-tight">
                            <span className="text-white block">GUDDEMMAGARI</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">
                                HAREESWAR REDDY
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-base md:text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
                            Computer Science Student | Programmer | AWS Enthusiast
                        </p>

                        {/* Quote */}
                        <p className="text-gray-500 mb-10 text-xs md:text-base max-w-md border-l-2 border-purple-500 pl-4 italic">
                           "Building strong programming fundamentals with a passion for systems and Linux"
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                            <Link
                                href="#projects"
                                className="w-full sm:w-auto px-8 py-3 rounded-full bg-white text-black font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                            >
                                View Projects <ArrowRight size={18} />
                            </Link>

                            <Link
                                href="#contact"
                                className="w-full sm:w-auto px-8 py-3 rounded-full border border-gray-700 hover:border-purple-500 transition-all text-white text-center"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </motion.div>

                    {/* --- IMAGE BLOCK --- */}
                    {/* order-1 puts it on top for mobile, md:order-2 puts it on the right for PC */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="order-1 md:order-2 flex justify-center"
                    >
                        <div className="relative w-full aspect-square max-w-[300px] md:max-w-[500px]">
                            {/* Decorative background blur */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 blur-2xl rounded-full"></div>
                            
                            <Image
                                src="/profile.jpg"
                                alt="Hareesh Profile"
                                fill
                                className="object-cover rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl"
                                priority
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}