import { motion } from "framer-motion";

import sentiment from "../assets/sentiment.png";
import nutrition from "../assets/nutrition.png";
import konser from "../assets/konser.png";
import sosmed from "../assets/sosmed.png";
import jobtracker from "../assets/jobtracker.png";
import musebrew from "../assets/musebrew.png";

const projectAssets = [
  {
    image: musebrew,
    tags: ["React JS", "Tailwind CSS", "Framer Motion"],
    links: [
      { label: "Live Demo", url: "https://muse-and-brew-company-profile.vercel.app/" },
      { label: "GitHub", url: "https://github.com/adilazahiraa/muse-and-brew-company-profile" },
    ],
  },
  {
    image: jobtracker,
    tags: ["React", "ASP.NET Core", "PostgreSQL", "Tailwind"],
    links: [{ label: "GitHub", url: "https://github.com/adilazahiraa/jobtracker-fullstack" }],
  },
  {
    image: nutrition,
    tags: ["Python", "Flask", "SQLite", "Tailwind"],
    links: [{ label: "GitHub", url: "https://github.com/adilazahiraa/skripsi" }],
  },
  {
    image: konser,
    tags: ["Figma", "UI/UX Design", "Laravel", "Tailwind"],
    links: [{ label: "GitHub", url: "https://github.com/adilazahiraa/konserkita-ticketing-system" }],
  },
  {
    image: sosmed,
    tags: ["Laravel", "PHP", "SQLite", "Backward Chaining"],
    links: [{ label: "GitHub", url: "https://github.com/adilazahiraa/sosmedcare-expert-system" }],
  },
  {
    image: sentiment,
    tags: ["Python", "Naive Bayes", "SMOTE", "NLP"],
    links: [
      { label: "Publication", url: "https://jutif.if.unsoed.ac.id/index.php/jurnal/article/view/4290" },
      { label: "GitHub", url: "https://github.com/adilazahiraa/text-mining-sentiment-analysis" },
    ],
  },
];

function Projects({ t }) {
  const projects = t.projects.items.map((item, index) => ({
    ...item,
    ...projectAssets[index],
  }));

  return (
    <section
      id="projects"
      className="
        relative overflow-hidden bg-[#120905] px-6 pt-28 pb-32
        text-[#FBF6EE] sm:pt-32 md:px-20 md:pt-48 md:pb-44
      "
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#120905] via-[#2B1A18] to-[#4A2C2A]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F3E6D4]/8 via-transparent to-[#120905]/85" />

      <div className="pointer-events-none absolute left-1/2 top-[-100px] h-[190px] w-[520px] -translate-x-1/2 rounded-full bg-[#F3E6D4]/14 blur-[110px] md:h-[240px] md:w-[920px]" />
      <div className="pointer-events-none absolute right-[-180px] top-[25%] h-[360px] w-[360px] rounded-full bg-[#D5B893]/10 blur-[120px] md:right-[-140px] md:h-[460px] md:w-[460px]" />
      <div className="pointer-events-none absolute bottom-[-120px] left-[-180px] h-[360px] w-[360px] rounded-full bg-[#D5B893]/12 blur-[120px] md:left-[-140px] md:h-[440px] md:w-[440px]" />

      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.9 }}
        className="
          pointer-events-none absolute left-1/2 top-20 -translate-x-1/2
          select-none whitespace-nowrap font-syne text-[66px] font-bold
          leading-none tracking-[-0.08em] text-[#FBF6EE]/[0.035]
          sm:text-[78px] md:top-24 md:text-[190px]
        "
      >
        {t.projects.bgText}
      </motion.h1>

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center md:mb-24"
        >
          <div className="mb-5 flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-px w-9 bg-[#D5B893]/70 sm:w-12" />
            <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D5B893] sm:text-[11px] sm:tracking-[0.32em]">
              {t.projects.label}
            </p>
            <span className="h-px w-9 bg-[#D5B893]/70 sm:w-12" />
          </div>

          <h2 className="font-syne text-[44px] font-bold leading-[0.9] tracking-[-0.065em] text-[#FBF6EE] sm:text-[52px] md:text-[88px]">
            {t.projects.title.split("\n").map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </h2>

          <p className="mx-auto mt-6 max-w-[330px] font-manrope text-[13.5px] leading-7 text-[#FBF6EE]/70 sm:max-w-xl sm:text-[14px] md:mt-7 md:max-w-2xl md:text-[15px] md:leading-8">
            {t.projects.desc}
          </p>
        </motion.div>

        {/* MOBILE HORIZONTAL SCROLL */}
        <div className="md:hidden">
          <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileTap={{ scale: 0.98 }}
                className="w-[86vw] shrink-0 snap-center"
              >
                <div className="group relative overflow-hidden rounded-[28px] border border-[#D5B893]/16 bg-[#FBF6EE]/6 p-2 shadow-[0_22px_60px_rgba(0,0,0,0.30)] backdrop-blur-xl">
                  <div className="relative h-[210px] overflow-hidden rounded-[22px]">
                    <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120905]/80 via-[#4A2C2A]/20 to-transparent" />

                    <div className="absolute left-4 top-4 flex items-center gap-3">
                      <span className="font-syne text-[36px] font-bold leading-none tracking-[-0.08em] text-[#FBF6EE]/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <span className="rounded-full border border-[#D5B893]/20 bg-[#120905]/35 px-3 py-1.5 font-manrope text-[10px] font-semibold text-[#D5B893] backdrop-blur-xl">
                        {project.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-syne text-[28px] font-bold leading-[0.98] tracking-[-0.055em] text-[#FBF6EE]">
                      {project.title}
                    </h3>

                    <p className="mt-4 font-manrope text-[13px] leading-7 text-[#FBF6EE]/70">
                      {project.desc}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-[#FBF6EE]/14 bg-[#FBF6EE]/7 px-3 py-1.5 font-manrope text-[11px] font-medium text-[#FBF6EE]/80">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.links.map((link, index) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`rounded-full px-5 py-2.5 font-manrope text-[12px] font-semibold no-underline transition ${
                            index === 0
                              ? "bg-[#F3E6D4] text-[#120905] hover:bg-[#D5B893]"
                              : "border border-[#F3E6D4]/22 bg-[#FBF6EE]/6 text-[#FBF6EE]/86 hover:bg-[#F3E6D4] hover:text-[#120905]"
                          }`}
                        >
                          {link.label}
                          <span className="ml-1 inline-block">→</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-3 text-center font-manrope text-[11px] font-medium uppercase tracking-[0.24em] text-[#D5B893]/70">
            {t.projects.swipe}
          </p>
        </div>

        {/* DESKTOP PROJECT LIST */}
        <div className="hidden space-y-28 md:block">
          {projects.map((project, i) => {
            const isReverse = i % 2 !== 0;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 55 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.16 }}
                transition={{ duration: 0.85, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group relative pt-8"
              >
                <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#D5B893]/18 to-transparent" />

                <div
                  className={`
                    grid items-center gap-14 md:grid-cols-[0.9fr_1.1fr]
                    ${isReverse ? "md:grid-cols-[1.1fr_0.9fr]" : ""}
                  `}
                >
                  <div className={`${isReverse ? "md:order-2" : ""}`}>
                    <div className="mb-6 flex items-start gap-5">
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="shrink-0 font-syne text-[104px] font-bold leading-none tracking-[-0.08em] text-[#FBF6EE]/10 transition group-hover:text-[#D5B893]/22"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </motion.span>

                      <div className="pt-2">
                        <span className="mb-4 inline-flex rounded-full border border-[#D5B893]/18 bg-[#FBF6EE]/6 px-4 py-1.5 font-manrope text-[11px] font-semibold text-[#D5B893] backdrop-blur-xl">
                          {project.badge}
                        </span>

                        <h3 className="max-w-[620px] font-syne text-[52px] font-bold leading-[0.95] tracking-[-0.055em] text-[#FBF6EE] transition duration-300 group-hover:translate-x-2">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <p className="max-w-xl font-manrope text-[15px] leading-8 text-[#FBF6EE]/66">
                      {project.desc}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-[#FBF6EE]/14 bg-[#FBF6EE]/7 px-3.5 py-1.5 font-manrope text-xs font-medium text-[#FBF6EE]/78 backdrop-blur-xl transition duration-300 hover:border-[#D5B893]/45 hover:bg-[#F3E6D4] hover:text-[#120905]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {project.links.map((link, index) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group/link rounded-full px-5 py-2.5 font-manrope text-[13px] font-semibold no-underline transition ${
                            index === 0
                              ? "bg-[#F3E6D4] text-[#120905] hover:bg-[#D5B893]"
                              : "border border-[#F3E6D4]/22 bg-[#FBF6EE]/6 text-[#FBF6EE]/86 hover:bg-[#F3E6D4] hover:text-[#120905]"
                          }`}
                        >
                          {link.label}
                          <span className="ml-1 inline-block transition group-hover/link:translate-x-1">→</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 180, damping: 15 }}
                    className={`
                      relative overflow-hidden rounded-[32px] border border-[#D5B893]/16
                      bg-[#FBF6EE]/6 p-2 shadow-[0_30px_90px_rgba(0,0,0,0.32)]
                      backdrop-blur-xl ${isReverse ? "md:order-1" : ""}
                    `}
                  >
                    <div className="relative h-72 overflow-hidden rounded-[26px]">
                      <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#120905]/75 via-[#4A2C2A]/20 to-transparent" />
                    </div>

                    <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#F3E6D4]/10 blur-3xl" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;