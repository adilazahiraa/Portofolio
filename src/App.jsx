import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ContactModal from "./components/ContactModal";

import { motion } from "framer-motion";
import { useState } from "react";

function App() {
  // ✅ state harus di dalam component
const [openContact, setOpenContact] = useState(false);
const skills = [
  "Python", "Flask", "PHP", "Laravel", "Codeigniter 3",
  "JavaScript", "HTML", "CSS",
  "Tailwind", "Bootstrap",
  "MySQL", "SQLite",
  "Machine Learning", "Data Analysis"
];

  return (
    <div className="bg-gradient-to-b from-[#0a0a0f] to-black text-white min-h-screen font-poppins">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">

        <div className="flex justify-between items-center px-6 md:px-20 py-5 max-w-6xl mx-auto">

          {/* LOGO */}
          <h1 className="text-xl font-semibold tracking-tight">
            My<span className="text-white">Portfolio</span>
          </h1>

          {/* MENU */}
          <ul className="flex gap-10 text-sm font-medium text-gray-400">

            <li>
              <button
                onClick={() => {
                  document.getElementById("home").scrollIntoView({
                    behavior: "smooth"
                  });
                }}
                className="hover:text-white transition cursor-pointer"
              >
                Home
              </button>
            </li>

            <li>
              <a href="#projects" className="hover:text-white transition cursor-pointer">
                Projects
              </a>
            </li>

            <li>
              <button
                onClick={() => setOpenContact(true)}
                className="hover:text-white transition cursor-pointer"
              >
                Contact
              </button>
            </li>

          </ul>

        </div>

      </nav>

      {/* HERO */}
      <section id="home" className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-32 gap-16 max-w-6xl mx-auto">

        {/* TEXT */}
        <div className="flex-1 text-center md:text-left max-w-xl">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight"
          >
            Hi, aku Adila Zahira Hasyati<span className="text-gray-500">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mt-6 text-lg leading-relaxed"
          >
            Full Stack Developer & Data Analyst  
            yang berpengalaman dalam pengembangan web serta analisis data.
          </motion.p>

          {/* BUTTON */}
          <div className="mt-10 flex gap-3 justify-center md:justify-start flex-wrap">

            <a href="#projects">
              <button
                onClick={() => {
                  document.getElementById("projects").scrollIntoView({
                    behavior: "smooth"
                  });
                }}
                className="px-6 py-3 rounded-xl bg-white text-black text-sm font-medium hover:opacity-90 transition"
              >
                Lihat Project
              </button>
            </a>

            <div className="flex gap-3 justify-center md:justify-start flex-wrap">

              {/* LINKEDIN */}
              <a
                href="https://linkedin.com/in/adilazahirahasyati"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-3 rounded-xl 
                bg-white/5 border border-white/10 
                text-gray-300 text-sm font-medium 
                hover:text-white hover:bg-white/10 
                transition active:scale-95"
              >
                <span className="relative z-10">LinkedIn</span>

                {/* subtle glow */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-blue-400/10 blur-md transition"></div>
              </a>

              {/* DOWNLOAD CV */}
              <a
                href="/cv.pdf"
                download
                className="group relative px-6 py-3 rounded-xl 
                bg-white/5 border border-white/10 
                text-gray-300 text-sm font-medium 
                hover:text-white hover:bg-white/10 
                transition active:scale-95"
              >
                <span className="relative z-10">Download CV</span>

                {/* subtle glow */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-purple-400/10 blur-md transition"></div>
              </a>

            </div>

          </div>

        </div>

        {/* FOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative group">

            {/* 🔥 MAIN AURA (HALO BESAR) */}
            <div className="absolute inset-0 scale-150 rounded-full bg-gradient-radial from-blue-500/40 via-purple-500/20 to-transparent blur-3xl opacity-80"></div>

            {/* 💡 SECOND LIGHT (BIAR DEPTH) */}
            <div className="absolute inset-0 scale-125 rounded-full bg-white/10 blur-2xl"></div>

            {/* 🎯 IMAGE */}
            <img
              src="/profile.jpg"
              alt="profile"
              className="relative w-72 h-72 md:w-[380px] md:h-[380px] object-cover rounded-full
              transition duration-500 group-hover:scale-105"
            />

          </div>
        </motion.div>

      </section>

      {/* 🔥 SKILLS (MINIMAL MARQUEE) */}
      <section className="py-24">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-center text-2xl font-semibold text-gray-300 mb-12">
            Tech Stack
          </h2>

          <div className="relative overflow-hidden">

            {/* FADE */}
            <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10"></div>

            {/* MARQUEE */}
            <div className="marquee flex gap-8">

              {[...skills, ...skills].map((skill, i) => (
                <div
                  key={i}
                  className="group relative px-7 py-3 rounded-full 
                  bg-gradient-to-b from-white/10 to-white/[0.03] 
                  backdrop-blur-md
                  text-gray-300 text-base tracking-wide
                  transition duration-300
                  hover:text-white hover:scale-105"
                >

                  {/* SUBTLE GLOW */}
                  <div className="absolute inset-0 rounded-full bg-blue-400/10 opacity-0 group-hover:opacity-100 blur-md transition"></div>

                  {/* TEXT */}
                  <span className="relative z-10">
                    {skill}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-20 text-center">
          Selected Projects
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* 1. DATA (SINTA 2) */}
          <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition duration-300 hover:-translate-y-1">

          <div className="flex items-start justify-between gap-4 mb-4">

            <h3 className="text-xl font-semibold leading-snug">
              Analisis Sentimen Pelantikan Presiden RI 2024
            </h3>

            <span className="shrink-0 text-[11px] px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
              SINTA 2
            </span>

          </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Optimalisasi metode Naive Bayes dengan SMOTE untuk meningkatkan akurasi 
              dalam analisis sentimen data dari aplikasi X.
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              <span className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-400">Python</span>
              <span className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-400">Naive Bayes</span>
              <span className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-400">SMOTE</span>
              <span className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-400">NLP</span>
            </div>

            <div className="flex gap-3 mt-6">
              <a
                href="https://jutif.if.unsoed.ac.id/index.php/jurnal/article/view/4290"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs bg-white text-black rounded-lg hover:bg-gray-200 transition"
              >
                Publication
              </a>

              <a
                href="https://github.com/adilazahiraa/text-mining-sentiment-analysis"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs border border-white/20 rounded-lg text-gray-300 hover:border-white hover:text-white transition"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* 2. TUGAS AKHIR */}
          <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition duration-300 hover:-translate-y-1">

            <h3 className="text-xl font-semibold mb-4">
              Nutritional Status Diagnosis System
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Sistem pakar berbasis web untuk mendiagnosis status gizi secara cepat dan akurat 
              guna membantu pengguna mendapatkan analisis awal kondisi gizi.
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              <span className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-400">Laravel</span>
              <span className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-400">PHP</span>
              <span className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-400">MySQL</span>
              <span className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-400">Tailwind</span>
            </div>

            <div className="flex gap-3 mt-6">
              <a
                href="https://github.com/adilazahiraa/skripsi"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs border border-white/20 rounded-lg text-gray-300 hover:border-white hover:text-white transition"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* 3. KONSERKITA */}
          <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition duration-300 hover:-translate-y-1">

            <h3 className="text-xl font-semibold mb-4">
              KonserKita Ticketing System
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Platform pemesanan tiket konser berbasis web dengan fitur pencarian, pemesanan, 
              pembayaran, serta dashboard admin untuk pengelolaan acara.
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              <span className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-400">Laravel 11</span>
              <span className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-400">Tailwind</span>
              <span className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-400">MySQL</span>
            </div>

            <div className="flex gap-3 mt-6">
              <a
                href="https://github.com/adilazahiraa/konserkita-ticketing-system"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs border border-white/20 rounded-lg text-gray-300 hover:border-white hover:text-white transition"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* 4. SOSMEDCARE */}
          <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition duration-300 hover:-translate-y-1">

            <h3 className="text-xl font-semibold mb-4">
              SOSMEDCARE Expert System
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Sistem pakar berbasis web menggunakan metode Backward Chaining untuk menganalisis 
              tingkat kecanduan media sosial serta memberikan rekomendasi kepada pengguna.
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              <span className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-400">PHP</span>
              <span className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-400">MySQL</span>
              <span className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-400">Backward Chaining</span>
            </div>

            <div className="flex gap-3 mt-6">
              <a
                href="https://github.com/adilazahiraa/sosmedcare-expert-system"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs border border-white/20 rounded-lg text-gray-300 hover:border-white hover:text-white transition"
              >
                GitHub
              </a>
            </div>
          </div>

        </div>

      </section>
      
      {/* FOOTER */}
      <footer className="mt-32 py-10 border-t border-white/10 text-center">

        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Adila. All rights reserved.
        </p>

        <div className="flex justify-center gap-6 mt-4 text-sm text-gray-400">

          <a
            href="https://github.com/adilazahiraa"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/adilazahirahasyati"
            target="_blank"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

        </div>

      </footer>

      {/* 🔥 INI WAJIB ADA */}
      <ContactModal
        open={openContact}
        onClose={() => setOpenContact(false)}
      />

    </div>
  );
}

export default App;