import { motion, AnimatePresence } from "framer-motion";

function Contact({ open, onClose, t, language }) {
  const isEnglish = language === "en";

  const cardTheme = isEnglish
    ? "bg-[#FAF9F6]/80 border-white/70 shadow-[0_25px_60px_rgba(164,141,120,0.28)]"
    : "bg-[#2B1A18]/92 border-[#D5B893]/25 shadow-[0_30px_80px_rgba(18,9,5,0.48)]";

  const titleTheme = isEnglish ? "text-[#3B2F28]" : "text-[#F7EFE3]";

  const descTheme = isEnglish ? "text-[#6F5C4F]" : "text-[#F7EFE3]/65";

  const closeTheme = isEnglish
    ? "text-[#6F5C4F] hover:text-[#A48D78]"
    : "text-[#F7EFE3]/65 hover:text-[#D5B893]";

  const buttonTheme = isEnglish
    ? `
      bg-[#F4F1EA]/80
      border-[#CBB9A4]/70
      text-[#3B2F28]
      hover:bg-[#A48D78]
      hover:border-[#A48D78]
      hover:text-[#FAF9F6]
      hover:shadow-[0_12px_25px_rgba(164,141,120,0.35)]
    `
    : `
      bg-[#FBF6EE]/8
      border-[#D5B893]/25
      text-[#F7EFE3]
      hover:bg-[#D5B893]
      hover:border-[#D5B893]
      hover:text-[#120905]
      hover:shadow-[0_14px_30px_rgba(213,184,147,0.22)]
    `;

  return (
    <AnimatePresence>
      {open && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            px-4
            py-8
          "
        >
          {/* BACKDROP */}
          <motion.div
            className={`
              absolute
              inset-0
              backdrop-blur-lg
              ${
                isEnglish
                  ? "bg-[#3B2F28]/28"
                  : "bg-[#120905]/45"
              }
            `}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            onClick={onClose}
          />

          {/* CARD */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(e) => e.stopPropagation()}
            className={`
              group
              relative
              w-[92%]
              max-w-md
              overflow-hidden
              rounded-3xl
              border
              p-6
              text-center
              backdrop-blur-2xl
              md:p-8
              ${cardTheme}
            `}
          >
            {/* SOFT LIGHT */}
            <div
              className={`
                pointer-events-none
                absolute
                inset-0
                rounded-3xl
                ${
                  isEnglish
                    ? "bg-gradient-to-br from-white/80 via-transparent to-[#CBB9A4]/30"
                    : "bg-gradient-to-br from-[#F7EFE3]/10 via-transparent to-[#D5B893]/8"
                }
              `}
            />

            {/* GLOW */}
            <div
              className={`
                pointer-events-none
                absolute
                -top-20
                -right-20
                h-60
                w-60
                rounded-full
                blur-3xl
                ${
                  isEnglish
                    ? "bg-[#CBB9A4]/35"
                    : "bg-[#D5B893]/16"
                }
              `}
            />

            <div
              className={`
                pointer-events-none
                absolute
                -bottom-20
                -left-20
                h-52
                w-52
                rounded-full
                blur-3xl
                ${
                  isEnglish
                    ? "bg-[#E6DAC8]/50"
                    : "bg-[#F7EFE3]/8"
                }
              `}
            />

            {/* SHINE */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
              <div
                className={`
                  absolute
                  -left-40
                  top-0
                  h-full
                  w-32
                  rotate-12
                  bg-gradient-to-r
                  from-transparent
                  blur-xl
                  transition-transform
                  duration-1000
                  group-hover:translate-x-[900px]
                  ${
                    isEnglish
                      ? "via-white/40 to-transparent"
                      : "via-[#F7EFE3]/14 to-transparent"
                  }
                `}
              />
            </div>

            {/* CONTENT */}
            <div className="relative z-10">
              {/* CLOSE */}
              <button
                type="button"
                onClick={onClose}
                aria-label={t.contact.close}
                className={`
                  absolute
                  right-0
                  top-0
                  text-base
                  transition
                  md:text-lg
                  ${closeTheme}
                `}
              >
                ✕
              </button>

              {/* TITLE */}
              <h3
                className={`
                  mb-2
                  font-syne
                  text-xl
                  font-semibold
                  tracking-tight
                  md:text-2xl
                  ${titleTheme}
                `}
              >
                {t.contact.title}
              </h3>

              {/* DESC */}
              <p
                className={`
                  mb-6
                  font-manrope
                  text-xs
                  leading-6
                  md:mb-8
                  md:text-sm
                  ${descTheme}
                `}
              >
                {t.contact.desc}
              </p>

              <div className="flex flex-col gap-3 md:gap-4">
                {/* WHATSAPP */}
                <a
                  href="https://wa.me/6282326108723"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setTimeout(onClose, 200)}
                  className={`
                    group/link
                    relative
                    overflow-hidden
                    rounded-xl
                    border
                    px-4
                    py-3
                    font-manrope
                    font-medium
                    transition-all
                    duration-300
                    active:scale-95
                    md:px-5
                    ${buttonTheme}
                  `}
                >
                  <span className="relative z-10 text-sm md:text-base">
                    {t.contact.whatsapp}
                  </span>

                  <div
                    className={`
                      absolute
                      inset-0
                      bg-gradient-to-r
                      from-transparent
                      to-transparent
                      opacity-0
                      transition
                      group-hover/link:opacity-100
                      ${
                        isEnglish
                          ? "via-white/20"
                          : "via-[#F7EFE3]/10"
                      }
                    `}
                  />
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:hasyatiadilazahira@gmail.com"
                  onClick={() => setTimeout(onClose, 200)}
                  className={`
                    group/link
                    relative
                    overflow-hidden
                    rounded-xl
                    border
                    px-4
                    py-3
                    font-manrope
                    font-medium
                    transition-all
                    duration-300
                    active:scale-95
                    md:px-5
                    ${buttonTheme}
                  `}
                >
                  <span className="relative z-10 text-sm md:text-base">
                    {t.contact.email}
                  </span>

                  <div
                    className={`
                      absolute
                      inset-0
                      bg-gradient-to-r
                      from-transparent
                      to-transparent
                      opacity-0
                      transition
                      group-hover/link:opacity-100
                      ${
                        isEnglish
                          ? "via-white/20"
                          : "via-[#F7EFE3]/10"
                      }
                    `}
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Contact;