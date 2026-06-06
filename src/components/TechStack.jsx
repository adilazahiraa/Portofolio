import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useEffect } from "react";

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

function SkillChip({ skill }) {
  return (
    <motion.div
      whileHover={{
        y: -7,
        scale: 1.045,
      }}
      whileTap={{ scale: 0.97 }}
      transition={{
        type: "spring",
        stiffness: 190,
        damping: 16,
      }}
      className="
        group
        relative
        min-w-max
        overflow-hidden
        rounded-full
        border
        border-[#E8D5C1]/90
        bg-[#F7EFE3]
        px-4
        py-2.5
        font-manrope
        text-[12px]
        font-semibold
        tracking-[0.01em]
        text-[#3A2421]
        shadow-[0_12px_30px_rgba(18,9,5,0.18)]
        transition-all
        duration-300
        hover:border-[#D5B893]
        hover:bg-[#241614]
        hover:text-[#F7EFE3]
        hover:shadow-[0_18px_42px_rgba(18,9,5,0.32)]
        sm:px-5
        sm:py-3
        sm:text-[13px]
        md:px-8
        md:py-3.5
        md:text-[16px]
        md:shadow-[0_18px_42px_rgba(18,9,5,0.20)]
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-full
          bg-gradient-to-b
          from-white/60
          via-transparent
          to-[#D5B893]/10
          opacity-75
          transition
          group-hover:opacity-20
        "
      />

      <span className="relative z-10">{skill}</span>
    </motion.div>
  );
}

function TechStack({ t }) {

    const controls = useAnimation();
    const x = useMotionValue(0);

    useEffect(() => {
      controls.start({
        x: -2000,
        transition: {
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        },
      });
    }, []);

  return (
    <section
      id="techstack"
      className="
        relative
        overflow-hidden
        bg-[#2B1A18]
        pt-32
        pb-36
        text-[#F7EFE3]
        sm:pt-36
        sm:pb-40
        md:pt-52
        md:pb-48
      "
    >
      {/* LUXURY BROWN BACKGROUND */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(180deg,#8E6C61_0%,#4A2C2A_38%,#241614_100%)]
        "
      />

      {/* SOFT DEPTH */}
      <div className="pointer-events-none absolute left-1/2 top-[-80px] h-[180px] w-[520px] -translate-x-1/2 rounded-full bg-[#F7EFE3]/12 blur-[100px] md:top-[-90px] md:h-[220px] md:w-[900px] md:blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(247,239,227,0.10),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_78%,rgba(213,184,147,0.14),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_68%,rgba(247,239,227,0.07),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(18,9,5,0.24),transparent_28%,transparent_72%,rgba(18,9,5,0.26))]" />

      {/* BIG BACKGROUND TEXT */}
      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-14
          -translate-x-1/2
          select-none
          whitespace-nowrap
          font-syne
          text-[72px]
          font-bold
          leading-none
          tracking-[-0.09em]
          text-[#F7EFE3]/[0.06]
          sm:text-[92px]
          md:top-10
          md:text-[198px]
        "
      >
        {t.techStack.bgText}
      </motion.h1>

      {/* THIN EDITORIAL LINES */}
      <div className="pointer-events-none absolute left-0 top-[34%] h-px w-full bg-gradient-to-r from-transparent via-[#F7EFE3]/12 to-transparent" />
      <div className="pointer-events-none absolute left-0 bottom-[30%] h-px w-full bg-gradient-to-r from-transparent via-[#D5B893]/14 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 md:px-20"
      >
        {/* EYEBROW */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mb-5
            flex
            items-center
            justify-center
            gap-3
            sm:gap-4
          "
        >
          <span className="h-px w-9 bg-[#D5B893]/70 sm:w-12" />

          <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D5B893] sm:text-[11px] sm:tracking-[0.36em]">
            {t.techStack.label}
          </p>

          <span className="h-px w-9 bg-[#D5B893]/70 sm:w-12" />
        </motion.div>

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mb-5
            text-center
            font-syne
            text-[44px]
            font-bold
            leading-[0.88]
            tracking-[-0.06em]
            text-[#FFF3E2]
            drop-shadow-[0_18px_45px_rgba(18,9,5,0.38)]
            sm:text-[54px]
            md:mb-6
            md:text-[82px]
          "
        >
          {t.techStack.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.75,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mb-10
            max-w-[330px]
            text-center
            font-manrope
            text-[13.5px]
            leading-7
            text-[#F7EFE3]/70
            sm:max-w-[520px]
            sm:text-[14px]
            md:mb-16
            md:max-w-[580px]
            md:text-[15px]
          "
        >
          {t.techStack.desc}
        </motion.p>

        {/* WRAPPER */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{
            duration: 0.85,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            overflow-hidden
            rounded-[28px]
            border
            border-[#F7EFE3]/10
            bg-[#120905]/12
            px-1.5
            py-3
            shadow-[0_22px_60px_rgba(18,9,5,0.26)]
            backdrop-blur-xl
            [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]
            sm:rounded-[34px]
            sm:px-2
            sm:py-4
            md:rounded-[40px]
            md:py-5
            md:shadow-[0_30px_90px_rgba(18,9,5,0.28)]
          "
        >

        {/* MOBILE - AUTO MARQUEE + BISA DRAG */}
        <div className="md:hidden overflow-hidden">
          <motion.div
            drag="x"
            style={{ x }}
            dragElastic={0.05}
            whileTap={{ cursor: "grabbing" }}
            onDragStart={() => controls.stop()}
            className="
              flex
              gap-3
              py-3
              cursor-grab
              select-none
              w-max
            "
          >
            {[...skills, ...skills].map((skill, i) => (
              <SkillChip key={i} skill={skill} />
            ))}
          </motion.div>
        </div>

        {/* DESKTOP - AUTO MARQUEE */}
        <div className="hidden overflow-hidden md:block">
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-7 py-5 w-max"
          >
            {[...skills, ...skills].map((skill, i) => (
              <SkillChip key={i} skill={skill} />
            ))}
          </motion.div>
        </div>

        </motion.div>
      </motion.div>

      {/* SOFT BOTTOM TRANSITION */}
      <div className="pointer-events-none absolute bottom-[-70px] left-1/2 h-[150px] w-[520px] -translate-x-1/2 rounded-full bg-[#D5B893]/12 blur-[100px] md:h-[180px] md:w-[900px] md:blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-28 w-full bg-[linear-gradient(to_top,rgba(247,239,227,0.14)_0%,rgba(247,239,227,0.05)_38%,transparent_100%)] md:h-32" />
    </section>
  );
}

export default TechStack;