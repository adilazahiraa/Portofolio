import { motion } from "framer-motion";

function Footer() {
  const links = [
    {
      label: "GitHub",
      href: "https://github.com/adilazahiraa",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/adilazahirahasyati",
    },
    {
      label: "Email",
      href: "mailto:hasyatiadilazahira@gmail.com",
    },
  ];

  return (
    <footer
      id="footer"
      className="
        relative
        overflow-hidden
        bg-[#120905]
        px-6
        pt-24
        pb-10
        text-[#FBF6EE]
        md:px-20
        md:pt-32
        md:pb-12
      "
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#120905] via-[#2B1A18] to-[#4A2C2A]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F3E6D4]/8 via-transparent to-[#120905]/90" />

      <div className="pointer-events-none absolute left-[-120px] top-[10%] h-[320px] w-[320px] rounded-full bg-[#D5B893]/10 blur-[100px] md:left-[10%] md:h-[360px] md:w-[360px] md:blur-[110px]" />
      <div className="pointer-events-none absolute right-[-160px] bottom-[-140px] h-[380px] w-[380px] rounded-full bg-[#D5B893]/12 blur-[120px] md:right-[-140px] md:h-[440px] md:w-[440px] md:blur-[130px]" />

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
          top-12
          -translate-x-1/2
          select-none
          whitespace-nowrap
          font-syne
          text-[52px]
          font-bold
          leading-none
          tracking-[-0.08em]
          text-[#FBF6EE]/[0.04]
          sm:text-[72px]
          md:top-20
          md:text-[170px]
        "
      >
        THANK YOU
      </motion.h1>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="
            grid
            gap-10
            border-b
            border-[#FBF6EE]/10
            pb-12
            md:pb-16
            lg:grid-cols-[1.1fr_0.9fr]
            lg:items-end
          "
        >
          {/* LEFT */}
          <div className="text-center md:text-left">
            <div
              className="
                mb-5
                flex
                items-center
                justify-center
                gap-3
                md:justify-start
                md:gap-4
              "
            >
              <span className="h-px w-10 bg-[#D5B893]/70 md:w-12" />

              <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D5B893] sm:text-[11px] sm:tracking-[0.32em]">
                Let’s Connect
              </p>
            </div>

            <h2
              className="
                mx-auto
                max-w-[760px]
                font-syne
                text-[38px]
                font-bold
                leading-[0.9]
                tracking-[-0.065em]
                text-[#FBF6EE]
                sm:text-[48px]
                md:mx-0
                md:text-[86px]
                lg:text-[96px]
              "
            >
              Let’s build
              <br />
              something together.
            </h2>
          </div>

          {/* RIGHT */}
          <div
            className="
              text-center
              md:text-left
              lg:justify-self-end
            "
          >
            <p
              className="
                mx-auto
                max-w-[430px]
                font-manrope
                text-[13.5px]
                leading-7
                text-[#FBF6EE]/68
                sm:text-[14px]
                md:mx-0
                md:text-[15px]
                md:leading-8
              "
            >
              Thank you for visiting my portfolio. I’m open to discussing
              opportunities, collaborations, and digital product ideas.
            </p>

            <div
              className="
                mt-7
                flex
                flex-wrap
                justify-center
                gap-2.5
                md:justify-start
                md:gap-3
                md:mt-8
              "
            >
              {links.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Email" ? undefined : "_blank"}
                  rel={item.label === "Email" ? undefined : "noopener noreferrer"}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className={`
                    rounded-full
                    px-5
                    py-2.5
                    font-manrope
                    text-[13px]
                    font-semibold
                    no-underline
                    transition-all
                    duration-300
                    md:px-6
                    md:py-3
                    md:text-[14px]
                    ${
                      index === 0
                        ? "bg-[#F3E6D4] text-[#120905] hover:bg-[#D5B893]"
                        : "border border-[#F3E6D4]/22 bg-[#FBF6EE]/6 text-[#FBF6EE]/86 backdrop-blur-xl hover:bg-[#F3E6D4] hover:text-[#120905]"
                    }
                  `}
                >
                  {item.label}
                  <span className="ml-1 inline-block transition group-hover:translate-x-1">
                    →
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* BOTTOM */}
        <div
          className="
            mt-8
            flex
            flex-col
            items-center
            gap-4
            text-center
            md:flex-row
            md:items-center
            md:justify-between
            md:text-left
          "
        >
          <div>
            <h3 className="font-syne text-[24px] font-bold tracking-[-0.05em] text-[#FBF6EE] md:text-[28px]">
              Adila Zahira Hasyati.
            </h3>

            <p className="mt-2 font-manrope text-sm text-[#FBF6EE]/48">
              Front-End Developer • Full Stack Developer • Web Designer
            </p>
          </div>

          <p className="font-manrope text-sm text-[#FBF6EE]/35">
            © {new Date().getFullYear()} Adila. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;