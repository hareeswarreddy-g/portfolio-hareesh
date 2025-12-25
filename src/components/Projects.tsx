"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Student Management System",
        description: "A comprehensive system to manage student records, attendance, and grades efficiently.",
        tech: ["C", "C++", "File Handling"],
        github: "#",
        demo: "#",
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Console Application",
        description: "Object-Oriented console app demonstrating polymorphism, inheritance, and encapsulation.",
        tech: ["Java", "OOP", "Console UI"],
        github: "#",
        demo: "#",
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Linux Command Utility",
        description: "Custom Bash utility scripts to automate system maintenance and file organization.",
        tech: ["Bash", "Linux", "Shell Scripting"],
        github: "#",
        demo: "#",
        color: "from-green-500 to-emerald-500"
    },
    {
        title: "Mini OS Project",
        description: "A simulation of basic OS scheduling algorithms and memory management concepts.",
        tech: ["C", "OS Concepts", "System Programming"],
        github: "#",
        demo: "#",
        color: "from-orange-500 to-red-500"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative bg-black/40">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                        Featured <span className="text-[var(--neon-blue)]">Projects</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="group relative rounded-2xl overflow-hidden glass border border-[var(--card-border)] hover:border-[var(--neon-blue)]/50 transition-all duration-300"
                            >
                                {/* Hover Glow Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                <div className="p-8 relative z-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color} bg-opacity-20`}>
                                            <Code className="text-white" size={24} />
                                        </div>
                                        <div className="flex gap-3">
                                            <Link href={project.github} className="text-gray-400 hover:text-white transition-colors">
                                                <Github size={20} />
                                            </Link>
                                            <Link href={project.demo} className="text-gray-400 hover:text-white transition-colors">
                                                <ExternalLink size={20} />
                                            </Link>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--neon-cyan)] transition-colors">{project.title}</h3>
                                    <p className="text-gray-300 mb-6 line-clamp-2">{project.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <span key={t} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-300 border border-white/10">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
