"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "GameVersePro",
        description: "A feature-rich game store application with a shopping cart system, checkout process with payment animations, and game ownership tracking. Includes inventory management and a polished modern UI.",
        tech: ["Java", "OOP", "Spring Boot", "UI/UX"],
        github: "https://github.com/hareeswarreddy-g/GameVersePro",
        demo: "https://github.com/hareeswarreddy-g/GameVersePro",
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "IntervuAI",
        description: "An AI-powered mock interview platform that generates role-specific questions, evaluates answers in real time, and provides detailed feedback to help candidates ace their interviews.",
        tech: ["Python", "AI/ML", "NLP", "React"],
        github: "https://github.com/hareeswarreddy-g/IntervuAI",
        demo: "https://github.com/hareeswarreddy-g/IntervuAI",
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Jarvis Assistant Bot",
        description: "A voice-activated personal assistant inspired by JARVIS. Handles tasks like web search, file management, weather updates, and system controls through natural language commands.",
        tech: ["Python", "Speech Recognition", "NLP", "Automation"],
        github: "https://github.com/hareeswarreddy-g/Jarvis-AssistantBot",
        demo: "https://github.com/hareeswarreddy-g/Jarvis-AssistantBot",
        color: "from-green-500 to-emerald-500"
    },
    {
        title: "Hest Assistant",
        description: "A smart productivity assistant designed to streamline daily tasks, manage schedules, and provide intelligent suggestions. Built with a focus on user-friendly experience.",
        tech: ["Python", "AI", "Task Automation", "CLI"],
        github: "https://github.com/hareeswarreddy-g/Hest-Assistant",
        demo: "https://github.com/hareeswarreddy-g/Hest-Assistant",
        color: "from-orange-500 to-red-500"
    },
    {
        title: "BrainBuzzer – AI Quiz App",
        description: "An AI-powered adaptive quiz platform that uses a Decision Tree algorithm to dynamically adjust question difficulty based on real-time performance. Features a Neobrutalist game-show UI.",
        tech: ["Python", "Flask", "Decision Tree", "JavaScript"],
        github: "https://github.com/hareeswarreddy-g/BrainBuzzer-A-quiz-app",
        demo: "https://github.com/hareeswarreddy-g/BrainBuzzer-A-quiz-app",
        color: "from-yellow-500 to-orange-500"
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

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className={`group relative rounded-2xl overflow-hidden glass border border-[var(--card-border)] hover:border-[var(--neon-blue)]/50 transition-all duration-300 ${idx === projects.length - 1 && projects.length % 3 !== 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
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
