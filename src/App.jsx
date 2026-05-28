import sentiment from "./assets/sentiment.png";
import nutrition from "./assets/nutrition.png";
import konser from "./assets/konser.png";
import sosmed from "./assets/sosmed.png";
import jobtracker from "./assets/jobtracker.png"

import profile from "./assets/profile.jpg";
import profile2 from "./assets/profile2.jpg";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ContactModal from "./components/ContactModal";
import CvModal from "./components/CvModal";

import { motion } from "framer-motion";
import certIcon from "./assets/online-learning.png";
import { useState } from "react";

function App() {
  // ✅ state harus di dalam component
const [openMenu, setOpenMenu] = useState(false);
const [openContact, setOpenContact] = useState(false);
const [activeTab, setActiveTab] = useState("internship");
const [openCV, setOpenCV] = useState(false);
const softSkills = [
  { name: "Teamwork", x: "-40%", y: "-10%" },
  { name: "Communication", x: "30%", y: "-20%" },
  { name: "Problem Solving", x: "-20%", y: "20%" },
  { name: "Critical Thinking", x: "40%", y: "25%" },
  { name: "Time Management", x: "0%", y: "35%" },
  { name: "Adaptability", x: "20%", y: "-40%" },
];
const skills = [
  "C#", "ASP.NET Core",
  "Python", "Flask",
  "PHP", "Laravel", "CodeIgniter 3",
  "JavaScript", "React JS",
  "HTML", "CSS",
  "Tailwind CSS", "Bootstrap",
  "PostgreSQL", "MySQL", "SQLite",
  "REST API Development",
  "Entity Framework Core",
  "Authentication & Authorization",
  "Software Testing",
  "Machine Learning", "Data Analysis"
];

  return (
    <div className="relative z-10 bg-gradient-to-br from-[#354024] via-[#6f7f4f] to-[#bfa77a] text-[#2d2a26] min-h-screen font-poppins overflow-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#3a4630]/60 border-b border-[#889063]/40">

        <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-4 max-w-6xl mx-auto">

          {/* LOGO */}
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#f0eadf]">
            My<span className="text-[#aab38a]">Portfolio</span>
          </h1>

          {/* HAMBURGER (MOBILE ONLY) */}
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>

          {/* MENU DESKTOP */}
          <ul className="
            hidden md:flex
            gap-6 lg:gap-10
            text-sm md:text-base lg:text-lg
            font-medium text-gray-300 tracking-wide
          ">

            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#projects" className="hover:text-[#c2caa0] transition">Projects</a></li>
            <li><a href="#experience" className="hover:text-white transition">Experience</a></li>
            <li>
              <button
                onClick={() => setOpenContact(true)}
                className="text-[#e7e5e4] hover:text-[#c2d3a0] transition"
              >
                Contact
              </button>
            </li>

          </ul>

        </div>

        {/* MOBILE MENU */}
        {openMenu && (
          <div className="md:hidden px-6 pb-6 animate-fadeIn">

            <ul className="flex flex-col gap-4 text-gray-300 text-base">

              <li><a href="#home" onClick={() => setOpenMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setOpenMenu(false)}>About</a></li>
              <li><a href="#projects" onClick={() => setOpenMenu(false)}>Projects</a></li>
              <li><a href="#experience" onClick={() => setOpenMenu(false)}>Experience</a></li>

              <li>
                <button
                  onClick={() => {
                    setOpenContact(true);
                    setOpenMenu(false);
                  }}
                  className="text-left text-[#e7e5e4]"
                >
                  Contact
                </button>
              </li>

            </ul>

          </div>
        )}

      </nav>
      
      {/* HERO */}
      <section
        id="home"
        className="relative flex flex-col md:flex-row items-center justify-between 
                  px-6 md:px-20 md:pl-20 lg:pl-28
                  min-h-screen
                  pt-20 md:pt-36 pb-24 md:pb-32 
                  gap-12 md:gap-16 max-w-[1400px] mx-auto overflow-visible"
      >


        {/* TEXT */}
        <div className="flex-1 w-full relative z-10 mt-16 md:mt-24 
                text-center md:text-left 
                mx-auto md:mx-0 md:ml-4 lg:ml-8">

          <div className="space-y-6 flex flex-col items-center md:items-start relative w-full">

            {/* HALO */}
            <motion.h2
              initial={{ opacity: 0, rotate: 3 }}
              animate={{ opacity: 1, rotate: 3 }}
              transition={{ duration: 0.6 }}
              className="absolute 
                        left-[15%] md:left-[20%]
                        top-[-30px] md:top-[-50px]
                        z-20
                        text-5xl md:text-7xl 
                        font-semibold 
                        text-[#e6d3a3]
                        tracking-tight 
                        rotate-[4deg]
                        whitespace-nowrap
                        drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
            >
              Halo! Saya
            </motion.h2>

            {/* NAME */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative inline-block bg-[#889063] px-6 md:px-10 py-4 rounded-lg 
                        shadow-md rotate-[-2deg]"
            >

              <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 
                bg-black/20 rounded-lg blur-md"></div>

              <h1 className="text-3xl md:text-6xl font-bold text-white 
                            leading-tight text-center md:text-left
                            whitespace-nowrap">
                Adila Zahira Hasyati
              </h1>

            </motion.div>

          </div>

          {/* ROLE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-sm md:text-lg 
                        text-[#e7e5e4]/80 font-medium 
                        mt-8 
                        text-center md:text-left
                        w-full md:ml-24"
                                >
            Software Engineer | Fullstack Developer | QA Enthusiast 
          </motion.p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4 
            justify-center md:justify-start 
            items-center w-full md:ml-32"> 

            {/* LIHAT PROJECT */}
            <button
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 rounded-xl bg-white text-black text-sm font-medium hover:opacity-90 transition"
            >
              Lihat Project
            </button>

            {/* LINKEDIN */}
            <a
              href="https://linkedin.com/in/adilazahirahasyati"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:text-white hover:bg-white/10 transition active:scale-95"
            >
              <span className="relative z-10">LinkedIn</span>

              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-blue-400/10 blur-md transition"></div>
            </a>

            {/* DOWNLOAD CV */}
            <button
              onClick={() => setOpenCV(true)}
              className="group relative px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:text-white hover:bg-white/10 transition active:scale-95"
            >
              Download CV
            </button>

          </div>

        </div>

        {/* FOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-none flex justify-center md:justify-end relative z-10 
                     md:translate-x-12 lg:translate-x-20 xl:translate-x-24"
        >
          <div className="relative">

            {/* SPOTLIGHT */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[420px] h-[420px] rounded-full 
                bg-[radial-gradient(circle,_rgba(136,144,99,0.35)_0%,_transparent_70%)]
                blur-3xl">
              </div>
            </div>

            {/* SHADOW */}
            <div className="absolute inset-0 translate-y-6 
              rounded-full bg-black/10 blur-2xl">
            </div>

            {/* RING */}
            <div className="absolute inset-0 rounded-full 
              border border-[#889063]/50">
            </div>

            {/* IMAGE */}
            <img
              img src={profile}
              alt="profile"
              className="relative 
              w-72 
              md:w-[380px]
              aspect-square
              object-cover rounded-full 
              shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
            />
          </div>
        </motion.div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative max-w-[1400px] mx-auto px-6 md:px-20 
        pt-28 md:pt-16 pb-32 overflow-hidden"
      >
        {/* 🔥 BACKGROUND BIG TEXT */}
        <h1
          className="absolute text-[60px] md:text-[140px] font-bold 
          text-[#889063]/10 
          top-[136px] md:top-16 
          left-6 md:left-20 
          pointer-events-none select-none"
        >
          ABOUT
        </h1>

        <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-10 md:gap-12 lg:gap-20 mt-14 md:mt-16">

          {/* LEFT */}
          <div className="md:w-2/5 lg:w-1/3 flex flex-col items-center md:items-start mt-0 md:mt-0">

            <h2 className="text-2xl md:text-3xl font-semibold text-[#f5f5f4] leading-snug text-center md:text-left">
              Tentang Saya
            </h2>

            <p className="mt-4 text-[#cfc7bb] text-sm md:text-base leading-relaxed text-center md:text-left">
              Sedikit cerita tentang siapa saya dan apa yang saya kerjakan.
            </p>

            {/* 📸 FOTO */}
            <div className="mt-8 relative md:translate-x-2 lg:translate-x-4">

              {/* glow */}
              <div className="absolute inset-0 rounded-xl bg-[#889063]/20 blur-2xl"></div>

              {/* shadow */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 
                bg-black/20 rounded-xl blur-md"></div>

              {/* frame */}
              <div className="relative rotate-[-2deg]">

                <img
                  img src={profile2}
                  alt="profile2"
                  className="w-full max-w-[320px] md:w-[300px] md:h-[200px] lg:w-[380px] lg:h-[240px]
                  object-cover rounded-xl border border-white/10 
                  shadow-[0_20px_50px_rgba(0,0,0,0.35)]
                  transition duration-500 hover:scale-105 hover:rotate-0"
                />

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="md:w-3/5 lg:w-2/3 relative mt-0 md:mt-0">

            {/* 💎 CARD */}
            <div className="relative p-6 md:p-10 rounded-2xl 
              bg-white/5 border border-white/10 
              backdrop-blur-xl 
              shadow-[0_10px_40px_rgba(0,0,0,0.15)]
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition">

              {/* subtle light */}
              <div className="absolute inset-0 rounded-2xl 
                bg-gradient-to-b from-white/10 to-transparent opacity-30"></div>

              <div className="relative z-10 space-y-5 text-[#e7e5e4] text-sm md:text-base lg:text-lg leading-relaxed text-justify">

                <p>
                  Saya adalah seorang <span className="text-[#d6ba7b] font-medium">fresh graduate Informatika</span>{" "}
                  yang berfokus pada pengembangan aplikasi web dan backend melalui berbagai proyek akademik, personal project, dan pengalaman magang.
                </p>

                <p>
                  Memiliki pengalaman dalam membangun aplikasi fullstack menggunakan React.js, ASP.NET Core, Laravel, dan PostgreSQL, termasuk integrasi REST API, pengelolaan database, serta implementasi fitur yang berfokus pada fungsionalitas dan pengalaman pengguna.
                </p>

                <p>
                  Saya tertarik pada bidang <span className="text-[#d6ba7b] font-medium">Software Engineering</span>,{" "}
                  <span className="text-[#d6ba7b] font-medium">Fullstack Development</span>, dan{" "}
                  <span className="text-[#d6ba7b] font-medium">Software Quality Assurance</span>{" "}
                  untuk membangun sistem yang scalable, terstruktur, dan andal.
                </p>

              </div>

            </div>

            {/* 🔥 FLOATING GLOW */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 
              bg-[#889063]/20 blur-3xl rounded-full"></div>

          </div>

        </div>
      </section>

      {/* 🔥 SOFT SKILLS */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-20 pt-10 md:pt-16 pb-32">

        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#f5f5f4] mb-12">
          Soft Skills
        </h2>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            "Teamwork",
            "Communication",
            "Problem Solving",
            "Critical Thinking",
            "Time Management",
            "Adaptability"
          ].map((skill, i) => (
            <div
              key={i}
              className="group relative overflow-hidden p-[1px] rounded-2xl 
              bg-gradient-to-b from-white/20 to-transparent 
              transition duration-300 hover:-translate-y-1"
            >

              {/* 💎 INNER CARD */}
              <div className="relative flex items-center gap-4 px-6 py-5 rounded-2xl 
                bg-white/[0.06] backdrop-blur-xl
                border border-white/15
                transition duration-300
                group-hover:border-[#889063]/50
                group-hover:bg-white/[0.09]
                group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
              >

                {/* ✨ LEFT ACCENT LINE */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 
                  w-[2px] h-0 bg-[#889063] 
                  transition-all duration-300 
                  group-hover:h-8">
                </div>

                {/* 🌟 SOFT LIGHT GLOW */}
                <div className="absolute inset-0 rounded-2xl 
                  bg-gradient-to-br from-white/20 to-transparent 
                  opacity-40 group-hover:opacity-60 transition"></div>

                {/* DOT */}
                <div className="relative z-10 w-2.5 h-2.5 rounded-full 
                  bg-[#889063] opacity-80 
                  group-hover:opacity-100 group-hover:scale-125 
                  transition duration-300">
                </div>

                {/* TEXT */}
                <span className="relative z-10 text-[#f1efe9] text-sm md:text-base tracking-wide">
                  {skill}
                </span>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* 🔥 SKILLS (FINAL FIXED & CLEAN) */}
      <section className="py-28 md:py-32">

        <div className="max-w-5xl mx-auto px-6 md:px-20">

          {/* TITLE */}
          <h2 className="text-center text-3xl md:text-4xl font-semibold 
            text-[#f5f5f4] mb-16 tracking-tight">
            Tech Stack
          </h2>

          {/* WRAPPER */}
          <div className="relative overflow-hidden 
            [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">

            {/* MARQUEE */}
            <div className="marquee flex gap-12 md:gap-16 py-6 md:py-8">

              {[...skills, ...skills].map((skill, i) => (
                <div
                  key={i}
                  className="group relative px-9 md:px-11 py-4 rounded-full 
                  bg-gradient-to-b from-white/15 to-white/[0.05]
                  text-white text-lg md:text-xl tracking-wide
                  border border-white/20
                  shadow-[0_8px_25px_rgba(0,0,0,0.25)]
                  backdrop-blur-md
                  transition duration-300
                  hover:scale-110 hover:border-[#889063] 
                  hover:shadow-[0_12px_35px_rgba(0,0,0,0.35)]"
                >

                  {/* ✨ INNER LIGHT */}
                  <div className="absolute inset-0 rounded-full 
                    bg-gradient-to-b from-white/20 to-transparent opacity-40"></div>

                  {/* 🌿 GLOW */}
                  <div className="absolute inset-0 rounded-full 
                    bg-[#889063]/30 opacity-0 group-hover:opacity-100 
                    blur-xl transition"></div>

                  {/* TEXT */}
                  <span className="relative z-10 font-medium">
                    {skill}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* CERTIFICATIONS */}
      <section className="py-28 px-6 md:px-20 max-w-[1100px] mx-auto">

        {/* TITLE */}
        <div className="mb-14 text-center">

          <p className="text-[#aab38a] uppercase tracking-[0.3em] text-xs mb-3">
            Professional Development
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#f5f5f4] tracking-tight">
            Sertifikasi & Pelatihan
          </h2>

        </div>

        {/* CARD */}
        <div
          className="group relative overflow-hidden rounded-3xl 
          border border-white/10 bg-white/[0.04] 
          backdrop-blur-xl p-8 md:p-10
          hover:border-[#c8b38a]/40 
          transition-all duration-500
          hover:-translate-y-2
          hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
        >

          {/* 🌟 BACKGROUND GLOW */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100
            transition duration-500"
          >

            <div
              className="absolute -top-10 -right-10 w-72 h-72
              bg-[#c8b38a]/15 blur-3xl rounded-full"
            ></div>

            <div
              className="absolute bottom-0 left-0 w-52 h-52
              bg-[#889063]/10 blur-3xl rounded-full"
            ></div>

          </div>

          {/* ✨ SHINE EFFECT */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100
            transition duration-700"
          >

            <div
              className="absolute -left-32 top-0 h-full w-24
              rotate-12 bg-white/10 blur-2xl
              translate-x-0 group-hover:translate-x-[900px]
              transition-transform duration-1000"
            ></div>

          </div>

          <div className="relative z-10">

            {/* TOP */}
            <div className="flex flex-wrap items-center gap-5 mb-6">

              {/* ICON */}
              <div
                className="w-16 h-16 rounded-2xl 
                bg-[#c8b38a]/10 border border-[#c8b38a]/20
                flex items-center justify-center
                transition duration-500
                group-hover:scale-110
                group-hover:rotate-3
                group-hover:bg-[#c8b38a]/20"
              >

              <img
                src={certIcon}
                alt="certificate"
                className="w-9 h-9 object-contain invert 
                opacity-90 group-hover:opacity-100 transition"
              />

              </div>

              {/* TEXT */}
              <div>

                <h3
                  className="text-xl md:text-2xl font-semibold text-white
                  transition duration-300 group-hover:text-[#f6f1e8]"
                >
                  Back-End Development with .NET
                </h3>

                <p className="text-sm text-[#b8b2a7] mt-1">
                  Microsoft via Coursera • 2026
                </p>

              </div>

            </div>

            {/* DESCRIPTION */}
            <p
              className="text-[#ddd6ce] leading-relaxed 
              text-sm md:text-base"
            >
              Mempelajari pengembangan backend modern menggunakan C#, ASP.NET Core,
              REST API Development, Entity Framework Core, Authentication &
              Authorization, Dependency Injection, Swagger/OpenAPI, Middleware,
              API Testing, serta integrasi frontend dan backend.
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-3 mt-7">

              {[
                "ASP.NET Core",
                "REST API",
                "Entity Framework",
                "Authentication",
                "Swagger",
                "API Testing"
              ].map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg 
                  bg-white/5 border border-white/10
                  text-sm text-[#e7e5e4]
                  transition-all duration-300
                  hover:scale-105
                  hover:bg-[#c8b38a]/10
                  hover:border-[#c8b38a]/30
                  hover:text-white"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="py-32 px-6 md:px-20 max-w-[1200px] mx-auto"
      >
        <div className="mb-20 text-center">
          <p className="text-[#aab38a] uppercase tracking-[0.3em] text-xs mb-3">
            Portfolio
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#f5f5f4] tracking-tight">
            Selected Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              title: "JobTracker",
              image: jobtracker,
              desc: "Aplikasi web fullstack untuk mengelola lamaran kerja, jadwal interview, catatan, dan progress karier dalam satu workspace.",
              tags: ["React", "ASP.NET Core", "PostgreSQL", "Tailwind"],
              badge: "Fullstack Developer",
              links: [
                { label: "GitHub", url: "https://github.com/adilazahiraa/jobtracker-fullstack" },
              ],
            },
            {
              title: "Nutritional Status Diagnosis System",
              image: nutrition,
              desc: "Aplikasi sistem pakar berbasis web untuk mendiagnosis status gizi dan memberikan rekomendasi secara personal.",
              tags: ["Python", "Flask", "SQLite", "Tailwind"],
              badge: "Fullstack Developer",
              links: [
                { label: "GitHub", url: "https://github.com/adilazahiraa/skripsi" },
              ],
            },
            {
              title: "KonserKita Ticketing System",
              image: konser,
              desc: "Platform pemesanan tiket konser berbasis web dengan antarmuka responsif, dashboard admin, dan pengalaman pengguna yang nyaman.",
              tags: ["Figma", "UI/UX Design", "Laravel", "Tailwind"],
              badge: "UI/UX Designer",
              links: [
                { label: "GitHub", url: "https://github.com/adilazahiraa/konserkita-ticketing-system" },
              ],
            },
            {
              title: "SOSMEDCARE Expert System",
              image: sosmed,
              desc: "Sistem pakar berbasis web dengan metode Backward Chaining untuk menganalisis tingkat kecanduan media sosial.",
              tags: ["Laravel", "PHP", "SQLite", "Backward Chaining"],
              badge: "Backend Developer",
              links: [
                { label: "GitHub", url: "https://github.com/adilazahiraa/sosmedcare-expert-system" },
              ],
            },
            {
              title: "Indonesian Presidential Inauguration Sentiment Analysis",
              image: sentiment,
              desc: "Proyek data science untuk menganalisis sentimen masyarakat di platform X menggunakan preprocessing teks, TF-IDF, Naive Bayes, dan optimasi SMOTE.",
              tags: ["Python", "Naive Bayes", "SMOTE", "NLP"],
              badge: "Data Science",
              links: [
                {
                  label: "Publication",
                  url: "https://jutif.if.unsoed.ac.id/index.php/jurnal/article/view/4290",
                },
                {
                  label: "GitHub",
                  url: "https://github.com/adilazahiraa/text-mining-sentiment-analysis",
                },
              ],
            },
          ].map((project, i) => (
            <div
              key={i}
              className={`group relative p-6 rounded-2xl 
              bg-[#1a1a1f] border border-white/10 
              hover:border-[#889063]/40 
              transition duration-300 
              hover:-translate-y-2 
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]
              flex flex-col h-full overflow-hidden
              ${i === 4 ? "md:col-span-2 md:max-w-[520px] md:mx-auto" : ""}`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute -top-10 -right-10 w-52 h-52 bg-[#889063]/10 blur-3xl rounded-full"></div>
              </div>

              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 md:h-56 object-cover rounded-xl transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              </div>

              <div className="relative z-10 flex items-start justify-between gap-4 mb-4">
                <h3 className="text-lg md:text-xl font-semibold text-[#f5f5f4] leading-snug">
                  {project.title}
                </h3>

                {project.badge && (
                  <span className="shrink-0 text-[11px] px-3 py-1 rounded-full bg-[#889063]/20 text-[#dbe4b2] border border-[#889063]/30">
                    {project.badge}
                  </span>
                )}
              </div>

              <p className="relative z-10 text-[#bdb5a8] text-sm leading-relaxed">
                {project.desc}
              </p>

              <div className="relative z-10 flex flex-wrap gap-2 mt-5">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-md bg-[#2a2a30] text-[#e7e5e4] border border-white/10 transition duration-300 hover:bg-[#889063]/10 hover:border-[#889063]/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="relative z-10 flex gap-3 mt-auto pt-6 flex-wrap">
                {project.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 text-xs rounded-lg transition ${
                      link.label === "Publication"
                        ? "bg-[#889063] text-black hover:opacity-90"
                        : "border border-white/20 text-gray-300 hover:border-white hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* 💼 EXPERIENCE */}
      <section
        id="experience"
        className="relative max-w-[1400px] mx-auto px-6 md:px-20 py-32"
      >

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#f5f5f4] mb-14 tracking-tight">
          Experience
        </h2>

        {/* 🔘 TABS (UPGRADED) */}
        <div className="flex gap-3 mb-12 flex-wrap">

          {["internship", "organization", "committee"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-2.5 rounded-full text-sm transition-all duration-300
              ${
                activeTab === tab
                  ? "text-black bg-[#889063] shadow-md"
                  : "text-gray-400 bg-white/5 border border-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              {/* active glow */}
              {activeTab === tab && (
                <div className="absolute inset-0 rounded-full bg-[#889063]/30 blur-md"></div>
              )}

              <span className="relative z-10">
                {tab === "internship" && "Internship"}
                {tab === "organization" && "Organization"}
                {tab === "committee" && "Committee"}
              </span>
            </button>
          ))}

        </div>

        {/* 💼 CONTENT */}
        <div className="relative pl-6">

          {/* TIMELINE LINE */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/10"></div>

          <div className="space-y-10">

            {/* INTERNSHIP */}
            {activeTab === "internship" && (
              <div className="space-y-8">

                {/* TELKOM */}
                <div className="relative p-8 rounded-2xl 
                  bg-white/5 border border-white/10 backdrop-blur-xl
                  hover:border-[#889063]/40 transition duration-300
                  hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)]">

                  {/* DOT */}
                  <div className="absolute -left-[9px] top-10 w-4 h-4 rounded-full bg-[#889063]"></div>

                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    Infrastructure Intern
                  </h3>

                  <p className="text-sm text-[#aab38a] mt-1">
                    Telkom Indonesia – Purwokerto • September – Oktober 2025
                  </p>

                  <p className="text-[#e7e5e4] mt-4 leading-relaxed">
                    Mendukung divisi infrastruktur dalam operasional harian melalui monitoring dan validasi data. 
                    Melakukan pengecekan data secara rutin untuk memastikan akurasi dan keandalan sistem, 
                    serta membantu pengelolaan data operasional guna menunjang performa infrastruktur.
                  </p>

                </div>

                {/* DISKOMINFO */}
                <div className="relative p-8 rounded-2xl 
                  bg-white/5 border border-white/10 backdrop-blur-xl
                  hover:border-[#889063]/40 transition duration-300
                  hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)]">

                  {/* DOT */}
                  <div className="absolute -left-[9px] top-10 w-4 h-4 rounded-full bg-[#889063]"></div>

                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    IT Intern
                  </h3>

                  <p className="text-sm text-[#aab38a] mt-1">
                    Dinas Komunikasi dan Informatika Provinsi Jawa Tengah • Juli – Agustus 2024
                  </p>

                  <p className="text-[#e7e5e4] mt-4 leading-relaxed">
                    Mengembangkan modul admin pada sistem E-Pegawai berbasis web, termasuk pengelolaan data pegawai dan autentikasi pengguna. 
                    Berkontribusi dalam sistem manajemen aset dengan mengelola dan menginput data aset untuk meningkatkan proses pelacakan. 
                    Mengembangkan fitur Riwayat Servis untuk memantau perawatan aset, serta melakukan pengujian black-box dan perbaikan sistem.
                  </p>

                </div>

              </div>
            )}

           {/* ORGANIZATION */}
            {activeTab === "organization" && (
              <div className="relative p-8 rounded-2xl 
                bg-white/5 border border-white/10 backdrop-blur-xl
                hover:border-[#889063]/40 transition duration-300
                hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)]">

                {/* DOT */}
                <div className="absolute -left-[9px] top-10 w-4 h-4 rounded-full bg-[#889063]"></div>

                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  HMIF UNSOED
                </h3>

                <p className="text-sm text-[#aab38a] mt-1">
                  Sekretaris Divisi Pengembangan Sumber Daya Mahasiswa (PSDM) • Maret – Desember 2023
                </p>

                <p className="text-[#e7e5e4] mt-4 leading-relaxed">
                  Bertanggung jawab dalam pengelolaan administrasi divisi, termasuk pembuatan laporan, 
                  surat-menyurat, dan dokumentasi kegiatan. Menyusun notulensi rapat serta memastikan 
                  pencatatan dan pengarsipan berjalan dengan baik. 
                  Selain itu, berperan dalam koordinasi agenda kerja divisi, evaluasi kinerja staf, 
                  serta mendukung komunikasi internal untuk memastikan kelancaran pelaksanaan program kerja.
                </p>

              </div>
            )}

            {/* COMMITTEE */}
            {activeTab === "committee" && (
              <div className="space-y-8">

                {/* MASKRAB */}
                <div className="relative p-8 rounded-2xl 
                  bg-white/5 border border-white/10 backdrop-blur-xl
                  hover:border-[#889063]/40 transition duration-300
                  hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)]">

                  <div className="absolute -left-[9px] top-10 w-4 h-4 rounded-full bg-[#889063]"></div>

                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    Staff Divisi Acara
                  </h3>

                  <p className="text-sm text-[#aab38a] mt-1">
                    Maskrab Makrab (MM) • 2023–2024 & 2024–2025 (2 Periode)
                  </p>

                  <p className="text-[#e7e5e4] mt-4 leading-relaxed">
                    Bertanggung jawab dalam penyusunan konsep acara dan alur kegiatan 
                    untuk mendukung pelaksanaan orientasi mahasiswa baru.
                  </p>

                </div>

                {/* IC */}
                <div className="relative p-8 rounded-2xl 
                  bg-white/5 border border-white/10 backdrop-blur-xl
                  hover:border-[#889063]/40 transition duration-300
                  hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)]">

                  <div className="absolute -left-[9px] top-10 w-4 h-4 rounded-full bg-[#889063]"></div>

                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    Staff Divisi Acara
                  </h3>

                  <p className="text-sm text-[#aab38a] mt-1">
                    Informatics Championship (IC) • 2022 & 2023 (2 Periode)
                  </p>

                  <p className="text-[#e7e5e4] mt-4 leading-relaxed">
                    Berperan dalam pengaturan teknis dan penyusunan alur kegiatan, 
                    khususnya dalam mendukung pelaksanaan lomba di bidang olahraga dan seni.
                  </p>

                </div>

                {/* PEMIRA */}
                <div className="relative p-8 rounded-2xl 
                  bg-white/5 border border-white/10 backdrop-blur-xl
                  hover:border-[#889063]/40 transition duration-300
                  hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)]">

                  <div className="absolute -left-[9px] top-10 w-4 h-4 rounded-full bg-[#889063]"></div>

                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    Staff Divisi Acara
                  </h3>

                  <p className="text-sm text-[#aab38a] mt-1">
                    Pemilihan Raya (Pemira) • 2023 & 2024 (2 Periode)
                  </p>

                  <p className="text-[#e7e5e4] mt-4 leading-relaxed">
                    Terlibat dalam penyusunan alur kegiatan serta pengembangan program 
                    perhitungan suara untuk mendukung proses pemilihan ketua himpunan.
                  </p>

                </div>

                {/* TREASURER */}
                <div className="relative p-8 rounded-2xl 
                  bg-white/5 border border-white/10 backdrop-blur-xl
                  hover:border-[#889063]/40 transition duration-300
                  hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)]">

                  <div className="absolute -left-[9px] top-10 w-4 h-4 rounded-full bg-[#889063]"></div>

                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    Bendahara
                  </h3>

                  <p className="text-sm text-[#aab38a] mt-1">
                    Soedirman Technophoria (S-Tech) • 2023
                  </p>

                  <p className="text-[#e7e5e4] mt-4 leading-relaxed">
                    Mengelola pemasukan dan pengeluaran dana kegiatan serta memastikan 
                    pengelolaan keuangan berjalan secara tertib dan terstruktur.
                  </p>

                </div>

              </div>
            )}

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="relative mt-40 py-14 border-t border-white/10 overflow-hidden">

        {/* 🌫 BACKGROUND GLOW */}
        <div className="absolute inset-0 flex justify-center">
          <div className="w-[500px] h-[200px] bg-[#889063]/10 blur-3xl rounded-full"></div>
        </div>

        <div className="relative z-10 text-center">

          {/* NAME */}
          <h3 className="text-lg md:text-xl font-semibold text-white tracking-wide">
            Adila Zahira Hasyati
          </h3>

          {/* DESC */}
          <p className="text-[#bdb5a8] text-sm mt-2">
            Software Engineer  •  Fullstack Developer  •  QA Enthusiast
          </p>

          {/* LINKS */}
          <div className="flex justify-center gap-8 mt-6 text-sm">

            <a
              href="https://github.com/adilazahiraa"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-[#cfc7bb] hover:text-white transition"
            >
              GitHub
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
            </a>

            <a
              href="https://linkedin.com/in/adilazahirahasyati"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-[#cfc7bb] hover:text-white transition"
            >
              LinkedIn
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
            </a>

          </div>

          {/* COPYRIGHT */}
          <p className="text-[#cfc7bb] text-xs mt-8">
            © {new Date().getFullYear()} Adila. All rights reserved.
          </p>

        </div>

      </footer>

      <CvModal open={openCV} onClose={() => setOpenCV(false)} />

      {/* 🔥 INI WAJIB ADA */}
      <ContactModal
        open={openContact}
        onClose={() => setOpenContact(false)}
      />

    </div>
  );
}

export default App;