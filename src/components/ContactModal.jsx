import { motion, AnimatePresence } from "framer-motion";

function Contact({ open, onClose, t }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* BACKDROP */}
          <motion.div
            className="
              absolute
              inset-0
              bg-[#120905]/55
              backdrop-blur-md
            "
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* CARD */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            transition={{
              duration: 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(e) => e.stopPropagation()}
            className="
              group
              relative
              w-full
              max-w-md
              overflow-hidden
              rounded-3xl
              border
              border-white/70
              bg-[#FAF9F6]/85
              p-6
              text-center
              shadow-[0_25px_60px_rgba(18,9,5,0.38)]
              backdrop-blur-2xl
              md:p-8
            "
          >
            {/* SOFT LIGHT */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/80 via-transparent to-[#CBB9A4]/30" />

            {/* GLOW */}
            <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-[#CBB9A4]/35 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-[#E6DAC8]/50 blur-3xl" />

            {/* SHINE */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
              <div
                className="
                  absolute
                  -left-40
                  top-0
                  h-full
                  w-32
                  rotate-12
                  bg-gradient-to-r
                  from-transparent
                  via-white/40
                  to-transparent
                  blur-xl
                  transition-transform
                  duration-1000
                  group-hover:translate-x-[900px]
                "
              />
            </div>

            {/* CLOSE */}
            <button
              type="button"
              onClick={onClose}
              aria-label={t.contact.close}
              className="
                absolute
                right-4
                top-4
                z-20
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-[#CBB9A4]/60
                bg-[#FAF9F6]/70
                text-[#6F5C4F]
                transition
                hover:bg-[#A48D78]
                hover:text-[#FAF9F6]
              "
            >
              ✕
            </button>

            {/* CONTENT */}
            <div className="relative z-10">
              <h3 className="font-syne text-[28px] font-bold tracking-[-0.05em] text-[#3B2F28] md:text-[34px]">
                {t.contact.title}
              </h3>

              <p className="mx-auto mt-3 max-w-[300px] font-manrope text-xs leading-6 text-[#6F5C4F] md:text-sm">
                {t.contact.desc}
              </p>

              <div className="mt-7 flex flex-col gap-3 md:gap-4">
                <a
                  href="https://wa.me/6282326108723"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setTimeout(onClose, 200)}
                  className="
                    group/link
                    relative
                    overflow-hidden
                    rounded-xl
                    border
                    border-[#CBB9A4]/70
                    bg-[#F4F1EA]/80
                    px-4
                    py-3
                    font-manrope
                    font-semibold
                    text-[#3B2F28]
                    transition-all
                    duration-300
                    hover:border-[#A48D78]
                    hover:bg-[#A48D78]
                    hover:text-[#FAF9F6]
                    hover:shadow-[0_12px_25px_rgba(164,141,120,0.35)]
                    active:scale-95
                    md:px-5
                  "
                >
                  <span className="relative z-10 text-sm md:text-base">
                    {t.contact.whatsapp}
                  </span>

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition group-hover/link:opacity-100" />
                </a>

                <a
                  href="mailto:hasyatiadilazahira@gmail.com"
                  onClick={() => setTimeout(onClose, 200)}
                  className="
                    group/link
                    relative
                    overflow-hidden
                    rounded-xl
                    border
                    border-[#CBB9A4]/70
                    bg-[#F4F1EA]/80
                    px-4
                    py-3
                    font-manrope
                    font-semibold
                    text-[#3B2F28]
                    transition-all
                    duration-300
                    hover:border-[#A48D78]
                    hover:bg-[#A48D78]
                    hover:text-[#FAF9F6]
                    hover:shadow-[0_12px_25px_rgba(164,141,120,0.35)]
                    active:scale-95
                    md:px-5
                  "
                >
                  <span className="relative z-10 text-sm md:text-base">
                    {t.contact.email}
                  </span>

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition group-hover/link:opacity-100" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Contact;