import { motion } from "framer-motion";

function Certifications() {
  const tags = [
    "ASP.NET Core",
    "REST API",
    "Entity Framework",
    "Authentication",
    "Swagger",
    "API Testing",
  ];

  return (
    <section
      id="certifications"
      className="
        relative
        overflow-hidden
        bg-[linear-gradient(180deg,#F7EFE3_0%,#F3E6D4_48%,#E7D5C1_100%)]
        px-6
        py-24
        text-[#4A2C2A]
        sm:py-28
        md:px-20
        md:py-40
      "
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,rgba(74,44,42,0.08),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_80%,rgba(255,255,255,0.65),transparent_34%)]" />

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
          top-10
          -translate-x-1/2
          select-none
          whitespace-nowrap
          font-syne
          text-[52px]
          font-bold
          leading-none
          tracking-[-0.08em]
          text-[#4A2C2A]/[0.045]
          sm:text-[68px]
          md:top-16
          md:text-[150px]
        "
      >
        CERTIFICATION
      </motion.h1>

      <div className="relative z-10 mx-auto max-w-[1100px]">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mb-10
            text-center
            sm:mb-12
            md:mb-14
            md:text-left
          "
        >
          <div
            className="
              mb-5
              flex
              items-center
              justify-center
              gap-3
              md:justify-start
            "
          >
            <span className="h-px w-10 bg-[#B8956A] sm:w-12" />

            <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.26em] text-[#B8956A] sm:text-[11px] sm:tracking-[0.34em]">
              Professional Development
            </p>
          </div>

          <h2
            className="
              font-syne
              text-[40px]
              font-bold
              leading-[0.95]
              tracking-[-0.06em]
              text-[#2B1A18]
              sm:text-[46px]
              md:text-[76px]
            "
          >
            Sertifikasi
            <br />
            & Pelatihan.
          </h2>
        </motion.div>

        {/* CERTIFICATE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.22 }}
          transition={{
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{ y: -6 }}
          className="
            group
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-[#4A2C2A]/10
            bg-[#FBF6EE]/82
            p-6
            shadow-[0_20px_60px_rgba(74,44,42,0.12)]
            backdrop-blur-xl
            transition-all
            duration-500
            hover:border-[#B8956A]/45
            hover:bg-[#FBF6EE]/95
            hover:shadow-[0_34px_90px_rgba(74,44,42,0.17)]
            sm:p-8
            md:rounded-[2.5rem]
            md:p-14
            md:shadow-[0_30px_85px_rgba(74,44,42,0.13)]
            md:hover:shadow-[0_38px_100px_rgba(74,44,42,0.18)]
          "
        >
          {/* CARD DECOR */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-[#D5B893]/12 opacity-80" />
          <div className="pointer-events-none absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-[#B8956A]/45 to-transparent md:left-10 md:right-10" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-[#B8956A]/18 blur-3xl md:h-64 md:w-64" />
          <div className="pointer-events-none absolute -bottom-28 -left-28 h-56 w-56 rounded-full bg-white/60 blur-3xl md:h-72 md:w-72" />

          <div
            className="
              relative
              z-10
              grid
              gap-7
              md:grid-cols-[120px_1fr]
              md:items-start
              md:gap-10
            "
          >
            {/* LEFT META */}
            <div className="flex items-end justify-between gap-4 md:block">
              <p
                className="
                  font-syne
                  text-[44px]
                  font-bold
                  leading-none
                  tracking-[-0.07em]
                  text-[#4A2C2A]/15
                  sm:text-[52px]
                  md:text-[58px]
                "
              >
                01
              </p>

              <div className="text-right md:mt-7 md:text-left">
                <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.26em] text-[#B8956A] md:tracking-[0.3em]">
                  Issued
                </p>

                <p className="mt-1 font-manrope text-sm font-semibold text-[#2B1A18] md:mt-2">
                  2026
                </p>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <p
                className="
                  font-manrope
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#B8956A]
                  md:text-[11px]
                  md:tracking-[0.28em]
                "
              >
                Microsoft via Coursera
              </p>

              <h3
                className="
                  mt-3
                  font-syne
                  text-[28px]
                  font-bold
                  leading-[0.98]
                  tracking-[-0.055em]
                  text-[#2B1A18]
                  sm:text-[32px]
                  md:mt-4
                  md:text-[48px]
                "
              >
                Back-End Development
                <br />
                with .NET
              </h3>

              <p
                className="
                  mt-5
                  max-w-[720px]
                  font-manrope
                  text-[13.5px]
                  leading-7
                  text-[#4A2C2A]/70
                  sm:text-[14px]
                  md:mt-7
                  md:text-[15px]
                  md:leading-8
                "
              >
                Mempelajari pengembangan backend modern menggunakan C#,
                ASP.NET Core, REST API Development, Entity Framework Core,
                Authentication & Authorization, Dependency Injection,
                Swagger/OpenAPI, Middleware, API Testing, serta integrasi
                frontend dan backend.
              </p>

              {/* TAGS */}
              <div className="mt-6 flex flex-wrap gap-2 sm:gap-3 md:mt-8">
                {tags.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 0.5,
                      delay: 0.12 + i * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ y: -3 }}
                    className="
                      rounded-full
                      border
                      border-[#4A2C2A]/12
                      bg-white/60
                      px-3
                      py-1.5
                      font-manrope
                      text-[11px]
                      font-medium
                      text-[#4A2C2A]
                      shadow-[0_8px_24px_rgba(74,44,42,0.06)]
                      transition
                      hover:border-[#B8956A]/50
                      hover:bg-[#4A2C2A]
                      hover:text-[#F7EFE3]
                      sm:px-4
                      sm:py-2
                      sm:text-[13px]
                    "
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Certifications;