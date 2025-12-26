"use client";
import { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS SDK
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS parameters
    const templateParams = {
      name,
      email,
      message,
      createdAt: new Date().toLocaleString(), // Add timestamp
    };

    try {
      // Send the email via EmailJS
      await emailjs.send(
        "service_43ztd5o", // Replace with your EmailJS service ID
        "template_92fqc7t", // Replace with your EmailJS template ID
        templateParams,
        "mEoLFE2wYcpqLR-4J" // Replace with your EmailJS API Key
      );

      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
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

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-3 text-white focus:outline-none focus:border-[var(--neon-blue)] transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-3 text-white focus:outline-none focus:border-[var(--neon-blue)] transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-3 text-white focus:outline-none focus:border-[var(--neon-blue)] transition-colors"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? "Sending..." : <>Send Message <Send size={18} /></>}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
