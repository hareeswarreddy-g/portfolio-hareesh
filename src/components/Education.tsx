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
                        {/* Timeline Line */}
                        <div className="absolute left-0 md:left-1/2 ml-[21px] md:ml-[-1px] h-full w-[2px] bg-gradient-to-b from-[var(--neon-blue)] to-[var(--neon-purple)] opacity-30"></div>

                        {educationDetails.map((edu, index) => (
                            <div key={index} className="relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0">
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 ml-[12px] md:ml-[-10px] w-5 h-5 rounded-full bg-[var(--background)] border-4 border-[var(--neon-blue)] z-10"></div>

                                {/* Content - Left side on desktop (for variation, simpler for single item to keep right or centered) */}
                                <div className="ml-12 md:ml-auto md:w-[45%] md:pr-12 md:text-right">
                                    {/* For a single item, keeping it simple. If multiple, we flip sides. */}
                                </div>

                                {/* Right Side Content for First Item (or full width adapted) */}
                                {/* Actually, let's make it a simple card on the right for the first item */}
                                <div className="ml-12 md:ml-8 md:w-[100%]">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="p-6 rounded-2xl glass border-l-4 border-l-[var(--neon-blue)]"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                                    <GraduationCap className="text-[var(--neon-blue)]" /> {edu.institution}
                                                </h3>
                                                <p className="text-[var(--neon-cyan)]">{edu.degree}</p>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full w-fit">
                                                <Calendar size={14} /> {edu.year}
                                            </div>
                                        </div>

                                        <p className="text-gray-300 mb-4">{edu.description}</p>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                                                <BookOpen size={14} /> Relevant Coursework:
                                            </h4>
                                            <div className="flex flex-wrap gap-2 text-sm">
                                                {edu.subjects.map((sub) => (
                                                    <span key={sub} className="px-3 py-1 rounded-full bg-[var(--neon-purple)]/10 text-[var(--neon-purple)] border border-[var(--neon-purple)]/20">
                                                        {sub}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
