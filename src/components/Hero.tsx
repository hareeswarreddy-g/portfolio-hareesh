"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden pt-20 md:pt-0">
      {/* Background Glow */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-50 z-0" />

      <div className="container mx-auto px-6 relative z-10">
        {/* GRID: Stacks on mobile, splits 50/50 on PC */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* IMAGE BLOCK: order-1 puts it at the top on Mobile */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-full aspect-square max-w-[300px] sm:max-w-[380px] md:max-w-[500px]">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 blur-2xl rounded-full" />
              <Image
                src="/profile.jpg"
                alt="Hareesh Profile"
                fill
                className="object-cover rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* TEXT BLOCK: order-2 puts it below the image on Mobile */}
          <div className="order-2 md:order-1 text-left">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-800 bg-gray-900/50 backdrop-blur-md mb-6">
                <Terminal size={14} className="text-cyan-400" />
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400">System Ready</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-tight">
                <span className="text-white block">GUDDEMMAGARI</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">
                  HAREESWAR REDDY
                </span>
              </h1>

              <p className="text-base md:text-xl text-gray-400 mb-8 max-w-xl">
                Computer Science Student | Programmer | AWS Enthusiast
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link href="#projects" className="px-8 py-3 rounded-full bg-white text-black font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-all">
                  View Projects <ArrowRight size={18} />
                </Link>
                <Link href="#contact" className="px-8 py-3 rounded-full border border-gray-700 text-white text-center hover:bg-white/5 transition-all">
                  Contact Me
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}