import { motion } from "framer-motion";
import profile2 from "../assets/profile2.jpg";

function About({ t }) {
  return (
    <section
      id="about"
      className="
        relative
        -mt-10
        z-20
        overflow-hidden
        rounded-t-[3rem]
        bg-[#120905]
        text-[#FBF6EE]
        shadow-[0_-18px_45px_rgba(18,9,5,0.28)]
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#120905] via-[#2B1A18] to-[#4A2C2A]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3E6D4]/10 via-transparent to-[#120905]/80" />

      <div className="pointer-events-none absolute left-[-90px] top-[18%] h-[280px] w-[280px] rounded-full bg-[#D5B893]/10 blur-[100px] md:left-[8%] md:h-[300px] md:w-[300px]" />
      <div className="pointer-events-none absolute right-[-150px] bottom-[-120px] h-[340px] w-[340px] rounded-full bg-[#D5B893]/12 blur-[110px] md:h-[360px] md:w-[360px]" />

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
          top-12
          -translate-x-1/2
          select-none
          whitespace-nowrap
          font-syne
          text-[64px]
          font-bold
          leading-none
          tracking-[-0.08em]
          text-[#FBF6EE]/[0.035]
          sm:text-[78px]
          md:top-14
          md:text-[130px]
        "
      >
        {t.about.bgText}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.18 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-6xl
          items-center
          gap-6
          px-6
          py-14
          sm:px-8
          sm:py-16
          md:gap-10
          md:py-20
          lg:grid-cols-[330px_1fr]
          lg:px-16
        "
      >
        {/* LEFT IMAGE - hidden di mobile biar nggak bentrok sama foto Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="
            relative
            mx-auto
            hidden
            w-full
            max-w-[285px]
            sm:block
            md:max-w-[320px]
            lg:mx-0
            lg:max-w-[330px]
          "
        >
          <div className="absolute -left-3 -top-3 h-full w-full rounded-[24px] border border-[#D5B893]/20" />

          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 180, damping: 16 }}
            className="
              relative
              overflow-hidden
              rounded-[24px]
              border
              border-[#FBF6EE]/10
              bg-[#FBF6EE]/5
              p-2
              shadow-[0_24px_60px_rgba(0,0,0,0.28)]
              backdrop-blur-xl
            "
          >
            <img
              src={profile2}
              alt="Adila profile"
              className="
                h-[290px]
                w-full
                rounded-[18px]
                object-cover
                md:h-[330px]
                lg:h-[360px]
              "
            />

            <div className="absolute inset-2 rounded-[18px] bg-gradient-to-t from-[#120905]/35 to-transparent" />
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="text-center lg:text-left">
          <div className="mb-5 flex items-center justify-center gap-4 lg:justify-start">
            <span className="h-px w-10 bg-[#D5B893]/70 sm:w-12" />

            <p
              className="
                font-manrope
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#D5B893]
                sm:text-[11px]
                sm:tracking-[0.32em]
              "
            >
              {t.about.label}
            </p>
          </div>

          <h2
            className="
              font-syne
              text-[42px]
              font-bold
              leading-[0.9]
              tracking-[-0.06em]
              text-[#FBF6EE]
              sm:text-[48px]
              md:text-[60px]
              lg:text-[72px]
            "
          >
            {t.about.title.split("\n").map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </h2>

          <div
            className="
              mx-auto
              mt-6
              max-w-[680px]
              space-y-4
              font-manrope
              text-[13.5px]
              leading-7
              text-[#FBF6EE]/72
              sm:mt-7
              sm:text-[14px]
              md:text-[15px]
              lg:mx-0
            "
          >
            <p>{t.about.p1}</p>

            <p>{t.about.p2}</p>

            <p>{t.about.p3}</p>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-2.5 sm:gap-3 lg:justify-start">
            {[
                "React.js",
                "JavaScript",
                "Tailwind CSS",
                "HTML & CSS"
              ].map(
              (item) => (
                <motion.span
                  key={item}
                  whileHover={{ y: -3 }}
                  className="
                    rounded-full
                    border
                    border-[#D5B893]/25
                    bg-[#FBF6EE]/8
                    px-4
                    py-2
                    font-manrope
                    text-[12px]
                    font-semibold
                    text-[#FBF6EE]/85
                    backdrop-blur-xl
                    transition
                    hover:bg-[#D5B893]
                    hover:text-[#120905]
                    sm:px-5
                    sm:py-2.5
                    sm:text-[13px]
                  "
                >
                  {item}
                </motion.span>
              )
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;