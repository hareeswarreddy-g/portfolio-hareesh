"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--neon-purple)] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get In <span className="text-[var(--neon-purple)]">Touch</span>
                    </h2>
                    <p className="text-gray-400 mb-12">
                        Interested in collaborating or just want to say hi? Feel free to drop a message!
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 text-left">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="glass p-8 rounded-2xl border border-[var(--card-border)]">
                                <h3 className="text-xl font-semibold text-white mb-6">Contact Info</h3>
                                <div className="space-y-4">
                                    <a href="mailto:hareeshreddy665@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-[var(--neon-cyan)] transition-colors">
                                        <div className="p-3 rounded-full bg-white/5"><Mail size={20} /></div>
                                        <span>hareeshreddy665@gmail.com</span>
                                    </a>
                                    <a href="https://www.linkedin.com/in/hareeswar-reddy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-[var(--neon-cyan)] transition-colors">
                                        <div className="p-3 rounded-full bg-white/5"><Linkedin size={20} /></div>
                                        <span>Connect on LinkedIn</span>
                                    </a>
                                    <a href="https://github.com/hareeswarreddy-g" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-[var(--neon-cyan)] transition-colors">
                                        <div className="p-3 rounded-full bg-white/5"><Github size={20} /></div>
                                        <span>Follow on GitHub</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Name</label>
                                    <input type="text" className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-3 text-white focus:outline-none focus:border-[var(--neon-blue)] transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Email</label>
                                    <input type="email" className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-3 text-white focus:outline-none focus:border-[var(--neon-blue)] transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Message</label>
                                <textarea rows={4} className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-3 text-white focus:outline-none focus:border-[var(--neon-blue)] transition-colors" placeholder="Your message..."></textarea>
                            </div>
                            <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
