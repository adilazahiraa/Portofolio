import { motion } from "framer-motion";

function SoftSkills({ t }) {
  const softSkills = t.softSkills.items;

  return (
    <section
      id="softskills"
      className="
        relative
        overflow-hidden
        bg-[#F7EFE3]
        pt-28
        pb-40
        text-[#4A2C2A]
        sm:pt-32
        sm:pb-48
        md:pt-44
        md:pb-80
      "
    >
      {/* SOFT BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(74,44,42,0.08),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_80%,rgba(184,149,106,0.22),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.35)_0%,transparent_28%,rgba(228,205,184,0.45)_100%)]" />

      {/* BIG BACKGROUND TEXT */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-16
          -translate-x-1/2
          select-none
          whitespace-nowrap
          font-syne
          text-[54px]
          font-bold
          leading-none
          tracking-[-0.08em]
          text-[#4A2C2A]/[0.05]
          sm:text-[70px]
          md:top-20
          md:text-[150px]
        "
      >
        {t.softSkills.bgText}
      </motion.h1>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 sm:px-8 md:px-20">
        {/* TITLE AREA */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 max-w-[760px] text-center sm:mb-14 md:mb-16 md:text-left"
        >
          <div className="mb-5 flex items-center justify-center gap-4 md:justify-start">
            <span className="h-px w-10 bg-[#B8956A] sm:w-12" />

            <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.28em] text-[#B8956A] sm:text-[11px] sm:tracking-[0.34em]">
              {t.softSkills.label}
            </p>
          </div>

          <h2
            className="
              font-syne
              text-[42px]
              font-bold
              leading-[0.9]
              tracking-[-0.06em]
              text-[#2B1A18]
              sm:text-[50px]
              md:text-[76px]
            "
          >
            {t.softSkills.title}
          </h2>

          <p className="mx-auto mt-5 max-w-[520px] font-manrope text-[13.5px] leading-7 text-[#4A2C2A]/68 sm:text-[14px] md:mx-0 md:mt-6 md:max-w-2xl md:text-[15px]">
            {t.softSkills.desc}
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {softSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{
                opacity: 0,
                y: 45,
                scale: 0.97,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: false,
                amount: 0.18,
              }}
              transition={{
                duration: 0.72,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -7,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[1.6rem]
                border
                border-[#4A2C2A]/10
                bg-[#FBF6EE]/76
                p-5
                shadow-[0_14px_38px_rgba(74,44,42,0.09)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-[#B8956A]/45
                hover:bg-[#FBF6EE]/95
                hover:shadow-[0_22px_60px_rgba(74,44,42,0.15)]
                sm:rounded-[1.8rem]
                sm:p-6
                md:rounded-[2rem]
              "
            >
              {/* CARD LIGHT */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/65 via-transparent to-[#D5B893]/12 opacity-70 transition group-hover:opacity-90" />

              {/* CARD LINE DECOR */}
              <div className="pointer-events-none absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-[#B8956A]/45 to-transparent" />

              {/* HOVER GLOW */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#B8956A]/18 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between sm:mb-8">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-[1rem]
                      border
                      border-[#4A2C2A]/10
                      bg-[#4A2C2A]/[0.06]
                      font-syne
                      text-[13px]
                      font-bold
                      text-[#4A2C2A]
                      transition
                      group-hover:bg-[#4A2C2A]
                      group-hover:text-[#F7EFE3]
                      sm:h-11
                      sm:w-11
                      sm:rounded-2xl
                    "
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div
                    className="
                      h-[2px]
                      w-7
                      rounded-full
                      bg-[#4A2C2A]/18
                      transition-all
                      duration-300
                      group-hover:w-12
                      group-hover:bg-[#B8956A]
                      sm:w-8
                      sm:group-hover:w-14
                    "
                  />
                </div>

                <h3 className="font-syne text-[23px] font-semibold leading-none tracking-[-0.045em] text-[#2B1A18] sm:text-[26px] md:text-[28px]">
                  {skill.name}
                </h3>

                <p className="mt-3 font-manrope text-[13.5px] leading-6 text-[#4A2C2A]/65 sm:mt-4 sm:text-[14px] sm:leading-7">
                  {skill.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* BOTTOM SOFT TRANSITION */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-36 w-full bg-[linear-gradient(to_top,#E4CDB8_0%,rgba(228,205,184,0.55)_34%,transparent_100%)] md:h-48" />
      <div className="pointer-events-none absolute bottom-[-60px] left-1/2 h-[130px] w-[520px] -translate-x-1/2 rounded-full bg-[#4A2C2A]/10 blur-[90px] md:h-[160px] md:w-[900px] md:blur-[110px]" />
    </section>
  );
}

export default SoftSkills;