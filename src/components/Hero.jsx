import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const textContainer = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Hero({ setOpenCV, t }) {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-[#120905]
      "
    >
      {/* BACKGROUND BASE */}
      <div
        className="
        pointer-events-none
        absolute
        inset-0
        bg-[linear-gradient(135deg,#120905_0%,#2B1A18_42%,#5B403B_72%,#CDB39D_100%)]
      "
      />
      <div
        className="
        pointer-events-none
        absolute
        inset-0
        bg-[linear-gradient(90deg,rgba(18,9,5,0.65)_0%,rgba(18,9,5,0.25)_38%,transparent_60%,rgba(243,230,212,0.08)_100%)]
      "
      />

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            top-[-220px]
            right-[-160px]
            h-[640px]
            w-[640px]
            rounded-full
            bg-[#F3E6D4]/28
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            bottom-[-180px]
            left-[-160px]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#120905]/45
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            left-[38%]
            top-[24%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#D5B893]/12
            blur-[130px]
          "
        />
      </div>

      {/* SOFT GRID / DEPTH */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_68%_42%,rgba(243,230,212,0.14),transparent_34%)]" />

      <div
        className="
          relative z-10
          flex flex-col md:flex-row items-center justify-between
          px-6 md:px-20 md:pl-20 lg:pl-28
          min-h-screen
          pt-28 md:pt-36 pb-24 md:pb-32
          gap-12 md:gap-16 max-w-[1400px] mr-auto ml-0 overflow-visible
        "
      >
        {/* TEXT */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.35 }}
          className="
            flex-1 w-full relative z-10 mt-16 md:mt-24
            text-center md:text-left
            mx-auto md:mx-0 md:ml-10 lg:ml-16
          "
        >

        <div className="space-y-6 flex flex-col items-center md:items-start relative w-full">

          <div className="relative inline-block">
            
          {/* HALO */}
          <motion.h2
            initial={{ opacity: 0, rotate: 3 }}
            animate={{ opacity: 1, rotate: 3 }}
            whileHover={{ scale: 1.04, rotate: 1 }}
            transition={{ duration: 0.6 }}
            className="
              absolute
              left-[53px] sm:left-[70px] md:left-[26%]
              top-[-60px] md:top-[-96px]
              z-20
              font-syne
              text-5xl md:text-7xl
              font-bold
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-[#FBF6EE]
              via-[#D5B893]
              to-[#FBF6EE]
              tracking-[-0.06em]
              rotate-[4deg]
              whitespace-nowrap
              drop-shadow-[0_10px_28px_rgba(18,9,5,0.28)]
            "
          >
            {t.hero.greeting}
          </motion.h2>

            {/* NAME */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              whileHover={{ scale: 1.03, rotate: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="
                relative inline-block
                md:ml-11
                px-6 md:px-10 py-4
                rounded-[1.35rem]
                border border-[#FBF6EE]/75
                bg-[#FBF6EE]/95
                shadow-[0_28px_70px_rgba(18,9,5,0.34)]
                rotate-[-2deg]
                overflow-hidden
                backdrop-blur-xl
              "
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-[#D5B893]/18" />

              <div
                className="
                  absolute inset-0 -z-10 translate-x-2 translate-y-2
                  bg-[#120905]/35 rounded-[1.1rem] blur-md
                "
              />

              <h1
                className="
                  relative z-10
                  font-syne
                  text-3xl md:text-6xl
                  font-bold
                  text-[#2B1A18]
                  leading-tight text-center md:text-left
                  tracking-[-0.055em]
                  whitespace-nowrap
                "
              >
                Adila Zahira Hasyati
              </h1>
            </motion.div>

          </div>
          
        </div>

          {/* ROLE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ x: 6 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="
            text-sm md:text-lg
            font-manrope
            text-[#FBF6EE]
            drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]
            mt-8
            text-center md:text-left
            w-full md:ml-48
            tracking-[0.01em]
            "
          >
            {t.hero.role}
          </motion.p>

          {/* BUTTONS */}
          <div
            className="
              mt-8 flex flex-wrap gap-4
              justify-center md:justify-start
              items-center w-full md:ml-32
            "
          >
            <motion.button
              whileHover={{ y: -4, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="
                px-7 py-3
                rounded-full
                bg-[#F3E6D4]
                text-[#120905]
                font-manrope
                text-sm
                font-semibold
                shadow-[0_16px_35px_rgba(18,9,5,0.28)]
                hover:bg-[#D5B893]
                hover:shadow-[0_22px_48px_rgba(18,9,5,0.38)]
                transition-all
                duration-300
              "
            >
              {t.hero.projectButton}
            </motion.button>

            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="https://linkedin.com/in/adilazahirahasyati"
              target="_blank"
              rel="noopener noreferrer"
              className="
              px-6 py-3
              rounded-full
              bg-white/10
              border border-[#FBF6EE]/45
              text-[#FBF6EE]
              font-manrope
              font-semibold
              backdrop-blur-xl
              shadow-[0_12px_30px_rgba(0,0,0,0.15)]
              hover:bg-[#F3E6D4]
              hover:text-[#120905]
              transition-all duration-300
              "
            >
              {t.hero.linkedinButton}
            </motion.a>

            <motion.button
              type="button"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setOpenCV(true)}
              className="
              px-6 py-3
              rounded-full
              bg-white/10
              border border-[#FBF6EE]/45
              text-[#FBF6EE]
              font-manrope
              font-semibold
              backdrop-blur-xl
              shadow-[0_12px_30px_rgba(0,0,0,0.15)]
              hover:bg-[#F3E6D4]
              hover:text-[#120905]
              transition-all duration-300
              "
            >
              {t.hero.cvButton}
            </motion.button>
          </div>
        </motion.div>

        {/* FOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="
            flex-none flex justify-center md:justify-end relative z-10
            md:translate-x-12 lg:translate-x-20 xl:translate-x-24
          "
        >
          <motion.div
            whileHover={{ scale: 1.04, rotate: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 180, damping: 14 }}
            className="relative"
          >
            {/* SPOTLIGHT */}
            <motion.div
              animate={{ scale: [1, 1.06, 1], opacity: [0.78, 1, 0.78] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div
                className="
                  w-[420px] h-[420px] rounded-full
                  bg-[radial-gradient(circle,_rgba(243,230,212,0.90)_0%,rgba(213,184,147,0.34)_36%,rgba(74,44,42,0.12)_58%,transparent_76%)]
                  blur-3xl
                "
              />
            </motion.div>

            {/* SHADOW */}
            <div
              className="
                absolute inset-0 translate-y-6
                rounded-full bg-[#120905]/28 blur-2xl
              "
            />

            {/* RING */}
            <motion.div
              animate={{ rotate: [0, 2, 0, -2, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="
                absolute inset-0 rounded-full
                border-2 border-[#FBF6EE]/70
                shadow-[0_0_60px_rgba(243,230,212,0.22)]
              "
            >
              <div
                className="
                  absolute inset-0
                  rounded-full
                  bg-[radial-gradient(circle,rgba(243,230,212,0.42),transparent)]
                  blur-2xl
                "
              />
            </motion.div>

            {/* IMAGE */}
            <motion.img
              src={profile}
              alt="profile"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="
                relative
                w-72
                md:w-[380px]
                aspect-square
                object-cover rounded-full
                border border-[#FBF6EE]/65
                shadow-[0_18px_55px_rgba(18,9,5,0.35)]
              "
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;