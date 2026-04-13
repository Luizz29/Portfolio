import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Hi, I'm Your Name
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl text-gray-400 max-w-xl"
        >
          Fullstack Developer specialized in Golang & React. I build secure,
          scalable, and elegant web systems.
        </motion.p>
        <div className="flex gap-4 mt-6">
          <a href="#projects" className="px-6 py-3 bg-white text-black rounded-2xl">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 border border-white rounded-2xl">
            Contact Me
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-gray-400 leading-relaxed">
          I am a passionate developer focused on building modern web applications
          with clean architecture. Experienced in JWT authentication, system
          design, and building real-world scalable apps.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 bg-zinc-900">
        <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              className="bg-black p-6 rounded-2xl border border-zinc-800"
            >
              <h3 className="text-xl font-semibold mb-2">Project {item}</h3>
              <p className="text-gray-400 text-sm mb-4">
                Web-based system with authentication, dashboard, and API
                integration.
              </p>
              <button className="text-sm underline">View Detail</button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {["Golang", "React", "PostgreSQL", "Docker", "JWT", "REST API"].map(
            (skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-zinc-800 rounded-xl text-sm"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-zinc-900 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <p className="text-gray-400 mb-6">Let's work together</p>
        <div className="flex justify-center gap-6">
          <a href="#"><Github /></a>
          <a href="#"><Linkedin /></a>
          <a href="#"><Mail /></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        © 2026 Your Name. All rights reserved.
      </footer>
    </div>
  );
}
