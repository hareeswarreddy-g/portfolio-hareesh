"use client";

import { motion } from "framer-motion";
import { Terminal, Code2, Cpu, ShieldCheck } from "lucide-react";

const skillGroups = [
    { 
        category: "Languages", 
        icon: <Code2 size={20} className="text-blue-400" />,
        items: [
            { name: "C/C++", level: 85 },
            { name: "Python", level: 70 },
            { name: "Java", level: 40 } // Known Least
        ] 
    },
    { 
        category: "Core Concepts", 
        icon: <Cpu size={20} className="text-purple-400" />,
        items: [
            { name: "Digital Logic", level: 90 },
            { name: "Structured Programming", level: 85 },
            { name: "OS Principles", level: 60 },
            { name: "Data Structures", level: 45 } // Learning phase
        ] 
    },
    { 
        category: "Tools & OS", 
        icon: <Terminal size={20} className="text-cyan-400" />,
        items: [
            { name: "Linux (Termux)", level: 95 }, // Known Most
            { name: "Bash Scripting", level: 92 }, // Known Most
            { name: "Git/GitHub", level: 80 },
            { name: "Kali Linux Tools", level: 75 }
        ] 
    },
    { 
        category: "Interests", 
        icon: <ShieldCheck size={20} className="text-red-400" />,
        items: [
            { name: "System Programming", level: 80 },
            { name: "Low-level Computing", level: 75 },
            { name: "Security/Hacking", level: 65 }
        ] 
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative bg-black">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">
                        Technical <span className="text-cyan-400">Skills</span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skillGroups.map((group, idx) => (
                            <div
                                key={group.category}
                                className="p-6 rounded-2xl border border-white/10 bg-white/5"
                            >
                                <div className="flex items-center gap-3 mb-8">
                                    {group.icon}
                                    <h3 className="text-lg font-bold text-white">{group.category}</h3>
                                </div>

                                <div className="space-y-6">
                                    {group.items.map((skill) => (
                                        <div key={skill.name}>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-gray-300 text-xs font-medium">{skill.name}</span>
                                                <span className="text-gray-500 text-[10px]">{skill.level}%</span>
                                            </div>
                                            
                                            {/* Progress Bar Track */}
                                            <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                                                {/* Animated Progress Fill */}
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1.2, ease: "circOut" }}
                                                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}