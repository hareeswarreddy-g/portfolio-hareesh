"use client";

import { motion } from "framer-motion";
import { User, Cpu, Code } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        About <span className="text-[var(--neon-blue)]">Me</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="space-y-6">
                            <p className="text-gray-300 leading-relaxed">
                                I am a <span className="text-white font-semibold">Computer Science Student</span> with a strong interest in programming, computer organization, digital logic, and operating systems.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                My passion lies in exploring low-level concepts, structured programming, and Linux environments. I actively practice development using tools like Termux and have a growing interest in Kali Linux and scripting.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                                <div className="p-4 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] hover:bg-white/5 transition-colors">
                                    <Cpu className="text-[var(--neon-purple)] mb-2" />
                                    <h4 className="font-semibold text-white">System Architecture</h4>
                                    <p className="text-sm text-gray-400">Computer Org & Digital Logic</p>
                                </div>
                                <div className="p-4 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] hover:bg-white/5 transition-colors">
                                    <Code className="text-[var(--neon-cyan)] mb-2" />
                                    <h4 className="font-semibold text-white">Programming</h4>
                                    <p className="text-sm text-gray-400">C, C++, Java, Python</p>
                                </div>
                            </div>
                        </div>

                        {/* Visual/Image Placeholder */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--neon-blue)] to-[var(--neon-purple)] rounded-2xl blur-lg opacity-20 transform rotate-3"></div>
                            <div className="relative p-8 rounded-2xl border border-[var(--card-border)] bg-[#0a0a0a] overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                                    <User size={120} className="text-[var(--card-border)] stroke-1" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Education</h3>
                                <p className="text-[var(--neon-blue)] font-medium mb-4">SRM UNIVERSITY</p>
                                <p className="text-gray-400 text-sm mb-4">2024 - 2028</p>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li>• Computer Science Major</li>
                                    <li>• Focus on Low-level Computing</li>
                                    <li>• Object-Oriented Programming</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
