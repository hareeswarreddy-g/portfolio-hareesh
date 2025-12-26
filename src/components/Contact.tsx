"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

// 1. Ensure this path points exactly to where your firebase config file lives
import { db } from "../lib/firebase"; 
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Prevent double clicks
    if (loading) return;
    setLoading(true);

    try {
      // --- STEP 1: SAVE TO FIREBASE ---
      console.log("Attempting to save to Firebase...");
      const docRef = await addDoc(collection(db, "contacts"), {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        sentAt: serverTimestamp(),
      });
      console.log("Firebase Success! ID:", docRef.id);

      // --- STEP 2: SEND EMAIL VIA EMAILJS ---
      console.log("Attempting to send email...");
      // We pass the data directly in the object
      await emailjs.send(
        "service_43ztd5o", 
        "template_92fqc7t", 
        {
          name: name,
          email: email,
          message: message,
          createdAt: new Date().toLocaleString(),
        },
        "mEoLFE2wYcpqLR-4J" 
      );
      console.log("EmailJS Success!");

      // --- STEP 3: SUCCESS FEEDBACK ---
      alert("Message sent successfully! 🎉");
      
      // Reset form fields
      setName("");
      setEmail("");
      setMessage("");

    } catch (error: any) {
      // This will catch errors from BOTH Firebase and EmailJS
      console.error("Submission Failure:", error);
      
      // Clearer error messages for you to debug
      if (error.code === 'permission-denied') {
        alert("Firebase Error: Please check your Firestore Security Rules.");
      } else {
        alert("Failed to send: " + (error.text || error.message || "Unknown Error"));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Get In <span className="text-purple-500">Touch</span>
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4 text-left mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-all"
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
                  className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-all"
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
                className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                placeholder="How can I help you?"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  Sending... <span className="animate-pulse">●●●</span>
                </span>
              ) : (
                <>Send Message <Send size={18} /></>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}