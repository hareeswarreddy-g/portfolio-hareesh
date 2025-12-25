"use client";

import { motion } from "framer-motion";

const skills = [
    { category: "Languages", items: ["C", "C++", "Python", "Java"] },
    { category: "Core Concepts", items: ["OOP", "Data Structures", "OS Principles", "Digital Logic"] },
    { category: "Tools & OS", items: ["Linux (Termux)", "Bash Scripting", "Git/GitHub", "Kali Linux Tools"] },
    { category: "Interests", items: ["System Programming", "Low-level Computing", "Security/Hacking"] },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                        Technical <span className="text-[var(--neon-cyan)]">Skills</span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {skills.map((skillGroup, idx) => (
                            <motion.div
                                key={skillGroup.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="p-6 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] hover:bg-white/5 transition-all group"
                            >
                                <h3 className="text-xl font-semibold text-white mb-6 group-hover:text-[var(--neon-blue)] transition-colors">
                                    {skillGroup.category}
                                </h3>
                                <div className="space-y-4">
                                    {skillGroup.items.map((item) => (
                                        <div key={item} className="relative">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-gray-300 text-sm">{item}</span>
                                                {/* Animated decorative bar */}
                                                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] rounded-full transition-all duration-700 ease-out absolute bottom-[-4px]"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
