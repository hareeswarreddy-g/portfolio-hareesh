"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

// 1. Import your db from the file you just shared
// Make sure the path './firebaseConfig' matches where your firebase file is saved
import { db } from "../lib/firebase"; 
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name,
      email,
      message,
      createdAt: new Date().toLocaleString(),
    };

    try {
      // --- STEP 1: SAVE TO FIREBASE ---
      // This ensures you have a record even if the email fails
      console.log("Saving to Firebase...");
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        sentAt: serverTimestamp(),
      });

      // --- STEP 2: SEND EMAIL VIA EMAILJS ---
      console.log("Sending email...");
      await emailjs.send(
        "service_43ztd5o",
        "template_92fqc7t",
        templateParams,
        "mEoLFE2wYcpqLR-4J"
      );

      alert("Success! Your message was saved and emailed. 🎉");
      
      // Clear form
      setName("");
      setEmail("");
      setMessage("");

    } catch (error) {
      console.error("Error during submission:", error);
      alert("Something went wrong. Check the console for details.");
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
          
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-[var(--card-bg, #1a1a1a)] border border-[var(--card-border, #333)] rounded-lg p-3 text-white focus:outline-none focus:border-[var(--neon-blue, #00d2ff)]"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-[var(--card-bg, #1a1a1a)] border border-[var(--card-border, #333)] rounded-lg p-3 text-white focus:outline-none focus:border-[var(--neon-blue, #00d2ff)]"
                  placeholder="your@email.com"
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
                className="w-full bg-[var(--card-bg, #1a1a1a)] border border-[var(--card-border, #333)] rounded-lg p-3 text-white focus:outline-none focus:border-[var(--neon-blue, #00d2ff)]"
                placeholder="How can I help you?"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? "Sending..." : <>Send Message <Send size={18} /></>}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}