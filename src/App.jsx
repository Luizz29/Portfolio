import React from "react";
import { motion } from "framer-motion";
import { Mail, Globe, Briefcase, ChevronRight, Download, ExternalLink } from "lucide-react";
import profile from "./assets/profile.png";
import cvPdf from "./assets/CV_Alfaluis.pdf";
import dashboardAdmin from "./assets/dashboard admin.png";
import masterMenu from "./assets/mastermenu.png";
import halamanUjian from "./assets/halaman ujian.png";
import dashboardPerumahan from "./assets/dashboardperumahan.png";
import formBayar from "./assets/formbayar.png";
import daftarRumah from "./assets/daftarrumah.png";
import laporanPerumahan from "./assets/laporanperumahan.png";

const Github = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

function ProjectCard({ project, onImageClick }) {
  const [activeImage, setActiveImage] = React.useState(0);
  const hasImages = project.images && project.images.length > 0;

  return (
    <motion.div
      variants={fadeIn}
      className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col group w-full max-w-sm"
    >
      {/* Image Container */}
      <div className="h-48 w-full bg-zinc-800 relative overflow-hidden">
        {hasImages ? (
          <div className="w-full h-full relative">
            <img
              src={project.images[activeImage]}
              alt={project.title}
              onClick={() => onImageClick && onImageClick(project.images[activeImage])}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 cursor-zoom-in"
            />
            {project.images.length > 1 && (
              <>
                {/* Navigation Arrows */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-10 text-sm font-bold"
                >
                  &larr;
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImage((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-10 text-sm font-bold"
                >
                  &rarr;
                </button>
                {/* Navigation Dots */}
                <div className="absolute bottom-2 inset-x-0 flex justify-center z-10">
                  <div className="flex gap-1.5 bg-black/50 backdrop-blur-sm px-2.5 py-1.5 rounded-full border border-white/10">
                    {project.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImage(idx);
                        }}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${
                          activeImage === idx ? "bg-primary-400 w-3.5" : "bg-white/40 hover:bg-white/70"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        ) : (
          /* Placeholder */
          <div className="w-full h-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/50 to-zinc-900/50 mix-blend-overlay"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity duration-300">
              <Briefcase size={32} className="mb-2" />
              <span className="text-xs uppercase tracking-widest">Project Visual</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h4 className="text-xl font-bold font-display group-hover:text-primary-400 transition-colors">
            {project.title}
          </h4>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-primary-400 transition-colors"
              title="Live Demo"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>

        <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto mb-6">
          {project.tech.map((t) => (
            <span key={t} className="text-xs font-mono text-accent-400 bg-accent-400/10 px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-zinc-800/50 hover:bg-zinc-700/50 text-zinc-300 hover:text-white rounded-xl font-medium text-sm transition-all border border-zinc-800 hover:border-zinc-700 mt-2"
          >
            <Github size={16} /> Open in GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [lightboxImage, setLightboxImage] = React.useState(null);
  const skills = [
    "Golang", "React", "PostgreSQL", "Codeigniter", "JWT",
    "REST API", "TailwindCSS", "Javascript", "Laravel"
  ];

const experiences = [
  {
    role: "Junior Web Developer (Intern)",
    company: "PT Hyperdata Solusindo Mandiri",
    duration: "Dec 2024 - Dec 2025",
    description: "Developed a web-based inventory management system to monitor stock distribution across multiple branches in an oil manufacturing company. Implemented features such as item tracking, stock in/out management, and reporting dashboard to improve operational efficiency."
  }
    // {
    //   role: "Backend Engineer Intern",
    //   company: "Startup Hub",
    //   duration: "Jun 2023 - Dec 2023",
    //   description: "Built robust RESTful APIs in Go and managed PostgreSQL databases. Implemented secure JWT authentication and reduced latency by 15%."
    // }
  ];

const projects = [
  {
    id: 1,
    title: "Exam Platform System",
    desc: "Developed a web-based online exam system with secure authentication, anti-cheating features, and real-time monitoring dashboard. Enabled scheduled exams, role-based access, and location-based validation to ensure exam integrity.",
    tech: ["Golang", "React", "PostgreSQL", "Tailwind"],
    github: "https://github.com/Luizz29/Exam-Management",
    images: [dashboardAdmin, masterMenu, halamanUjian],
  },
  {
    id: 4,
    title: "Residential Management",
    desc: "Developed a residential management system designed to monitor visitor logs (in/out tracking) for each household and automate neighborhood maintenance fee (iuran) collections. Features secure administration panel and billing status dashboard.",
    tech: ["Laravel", "React", "MySQL", "Tailwind", "Javascript"],
    github: "https://github.com/Luizz29/ResidentalManagement",
    images: [dashboardPerumahan, formBayar, daftarRumah, laporanPerumahan],
  }
];

  return (
    <div className="bg-background text-zinc-100 min-h-screen font-sans scroll-smooth overflow-x-hidden relative">

      {/* Background Animated Blobs */}
      <div className="absolute top-0 inset-x-0 h-screen overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-accent-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navbar Minimal */}
      <nav className="fixed top-0 w-full glass-panel z-50 px-6 py-4 border-b-0 border-t-0 border-x-0 border-zinc-800">
        <div className="max-w-5xl mx-auto flex justify-end items-center">
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-primary-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-primary-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-primary-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative mb-8"
        >
          {/* Avatar Placeholder */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-br from-primary-500 to-accent-400 mx-auto shadow-2xl shadow-primary-500/20">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-background bg-[#1e3a8a]">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-extrabold mb-4 tracking-tight"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Alfaluis Bintang.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl font-light leading-relaxed mb-10"
        >
          I design and architect modern web systems. Specializing in high-performance backends and sleek React interfaces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white rounded-full font-medium transition-all shadow-lg shadow-primary-500/25"
          >
            Explore My Work <ChevronRight size={18} />
          </a>
          <a
            href={cvPdf}
            download="CV_Alfaluis.pdf"
            className="flex items-center gap-2 px-8 py-3.5 border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/50 text-zinc-300 rounded-full font-medium transition-all"
          >
            Download CV <Download size={18} />
          </a>
        </motion.div>
      </section>

      {/* About & Skills */}
      <section id="about" className="py-24 px-6 max-w-5xl mx-auto scroll-mt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-sm font-bold tracking-widest text-primary-400 uppercase mb-3">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">Driven by logic. Inspired by design.</h3>
            <p className="text-zinc-400 leading-relaxed mb-6">
              I am a Web Developer and Software Engineering graduate with a strong interest in backend development. I have hands-on experience building web applications using Golang, Codeigniter, Laravel, React, PHP, and PostgreSQL through academic and internship projects. I enjoy developing clean, maintainable, and efficient applications while continuously learning new technologies to improve my skills.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-500/20 blur-2xl rounded-full"></div>
            <h4 className="text-xl font-semibold mb-6">Tech Stack</h4>
            <div className="flex flex-wrap gap-3 relative z-10">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 border border-zinc-700/50 bg-zinc-800/50 hover:border-primary-500 hover:text-primary-300 rounded-lg text-sm transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-24 px-6 bg-zinc-900/30 scroll-mt-20 border-y border-zinc-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-accent-400 uppercase mb-3">Career Journey</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold">Experience</h3>
          </motion.div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="relative pl-8 md:pl-0"
              >
                <div className="md:grid md:grid-cols-[1fr_auto_1fr] md:gap-12 items-center">

                  {/* Left Side (Date - Hidden on mobile) */}
                  <div className="hidden md:block text-right">
                    <span className="text-primary-400 font-medium">{exp.duration}</span>
                  </div>

                  {/* Node */}
                  <div className="absolute left-0 md:relative md:flex justify-center items-center h-full">
                    <div className="h-full w-px bg-zinc-800 absolute top-0 md:top-4 md:bottom-[-3rem]"></div>
                    <div className="w-4 h-4 rounded-full bg-zinc-900 border-2 border-primary-500 relative z-10 mt-1.5 md:mt-0 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
                  </div>

                  {/* Right Side (Content) */}
                  <div className="md:col-start-3 pb-8">
                    <div className="md:hidden text-primary-400 font-medium text-sm mb-2">{exp.duration}</div>
                    <h4 className="text-xl font-bold text-zinc-100">{exp.role}</h4>
                    <h5 className="text-zinc-400 mb-4">{exp.company}</h5>
                    <p className="text-zinc-400 text-sm leading-relaxed">{exp.description}</p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary-400 uppercase mb-3">Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold">Selected Works</h3>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onImageClick={setLightboxImage} />
          ))}
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-zinc-900/50 scroll-mt-20 border-t border-zinc-800/50 relative overflow-hidden">
        {/* Glow effect at the bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-primary-600/20 blur-[100px] pointer-events-none rounded-t-full"></div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Let's build something amazing together.</h2>
          <p className="text-zinc-400 mb-10 text-lg">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bintangalfaluis@gmail.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-zinc-200 rounded-full font-semibold transition-colors shadow-lg shadow-white/10 mb-12">
            Say Hello <Mail size={18} />
          </a>

          <div className="flex justify-center gap-8 border-t border-zinc-800/50 pt-10">
            <a href="https://github.com/Luizz29" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-full" aria-label="GitHub">
              <Github />
            </a>
            <a href="#" className="text-zinc-500 hover:text-primary-400 transition-colors p-2 hover:bg-zinc-800 rounded-full" aria-label="LinkedIn">
              <Briefcase />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bintangalfaluis@gmail.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-accent-400 transition-colors p-2 hover:bg-zinc-800 rounded-full" aria-label="Email">
              <Mail />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-zinc-600 border-t border-zinc-800/50 text-sm font-medium">
        <p>Built with React & Tailwind. © {new Date().getFullYear()} Alfaluis Bintang Arsa.</p>
      </footer>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl font-light"
            onClick={() => setLightboxImage(null)}
          >
            &times;
          </button>
          <img 
            src={lightboxImage} 
            alt="Enlarged view" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-fade-in"
          />
        </div>
      )}
    </div>
  );
}