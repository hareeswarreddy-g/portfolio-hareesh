"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Calendar } from "lucide-react";

const educationDetails = [
    {
        institution: "SRM UNIVERSITY",
        degree: "Bachelor of Technology in Computer Science",
        year: "2024 - 2028",
        description: "Building strong foundations in Computer Science.",
        subjects: [
            "Computer Organization",
            "Digital Logic",
            "Structured Programming",
            "Object-Oriented Programming",
            "Programming Paradigms",
            "Language Concepts & Theory"
        ]
    }
];

export default function Education() {
    return (
        <section id="education" className="py-24 relative bg-black/40">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                        My <span className="text-[var(--neon-purple)]">Education</span>
                    </h2>

                    <div className="max-w-3xl mx-auto relative">
                        {/* 1. Timeline Line - Adjusted ml to center behind the 20px dot */}
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--neon-blue)] to-transparent ml-[9px] opacity-30"></div>

                        {educationDetails.map((edu, index) => (
                            <div key={index} className="relative pl-10 md:pl-12 mb-12 last:mb-0">
                                
                                {/* 2. Timeline Dot - Fixed at left-0, 20px wide (w-5) */}
                                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-black border-4 border-[var(--neon-blue)] z-10 shadow-[0_0_10px_rgba(0,210,255,0.5)]"></div>

                                {/* 3. Card Content */}
                                <motion.div
                                    whileHover={{ scale: 1.01 }}
                                    className="p-6 rounded-2xl glass border-l-4 border-l-[var(--neon-blue)] bg-white/5 backdrop-blur-sm"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                                <GraduationCap className="text-[var(--neon-blue)]" /> {edu.institution}
                                            </h3>
                                            <p className="text-[var(--neon-cyan)] font-medium mt-1">{edu.degree}</p>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full w-fit h-fit border border-white/10">
                                            <Calendar size={14} /> {edu.year}
                                        </div>
                                    </div>

                                    <p className="text-gray-300 mb-6 leading-relaxed">{edu.description}</p>

                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-400 mb-4 flex items-center gap-2">
                                            <BookOpen size={14} /> Relevant Coursework:
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {edu.subjects.map((sub) => (
                                                <span 
                                                    key={sub} 
                                                    className="px-3 py-1 rounded-full bg-[var(--neon-purple)]/10 text-[var(--neon-purple)] border border-[var(--neon-purple)]/20 text-xs font-medium hover:bg-[var(--neon-purple)]/20 transition-colors"
                                                >
                                                    {sub}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}