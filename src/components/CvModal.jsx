import { motion, AnimatePresence } from "framer-motion";

function CvModal({ open, onClose, t, language }) {
  const isEnglish = language === "en";

  const selectedCV = isEnglish
    ? {
        label: "Download CV English",
        href: "/cv-english.pdf",
      }
    : {
        label: "Download CV Indonesia",
        href: "/cv-indonesia.pdf",
      };

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
            className="
              absolute
              inset-0
              bg-[#3B2F28]/30
              backdrop-blur-md
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
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
            className="
              relative
              w-[92%]
              max-w-md
              overflow-hidden
              rounded-3xl
              border
              border-white/70
              bg-[#FAF9F6]/80
              p-6
              text-center
              shadow-[0_25px_60px_rgba(164,141,120,0.25)]
              backdrop-blur-2xl
              md:p-8
            "
          >
            {/* LIGHT */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-[#889063]/20 to-transparent" />

            {/* SHADOW */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]" />

            {/* GLOW */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-3xl
                bg-gradient-to-br
                from-[#FAF9F6]/90
                via-transparent
                to-[#CBB9A4]/25
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -top-20
                -right-20
                h-60
                w-60
                rounded-full
                bg-[#CBB9A4]/35
                blur-3xl
              "
            />

            {/* CONTENT */}
            <div className="relative z-10">
              <h3
                className="
                  mb-2
                  font-syne
                  text-xl
                  font-semibold
                  text-[#3B2F28]
                  md:text-2xl
                "
              >
                {t.cv.title}
              </h3>

              <p
                className="
                  mb-6
                  font-manrope
                  text-xs
                  text-[#6F5C4F]
                  md:mb-8
                  md:text-sm
                "
              >
                {t.cv.desc}
              </p>

              <a
                href={selectedCV.href}
                download
                onClick={onClose}
                className="
                  group
                  relative
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#CBB9A4]
                  bg-[#F4F1EA]
                  px-4
                  py-3
                  font-manrope
                  font-medium
                  text-[#3B2F28]
                  transition-all
                  duration-300
                  hover:border-[#A48D78]
                  hover:bg-[#A48D78]
                  hover:text-[#FAF9F6]
                  hover:shadow-[0_12px_25px_rgba(164,141,120,0.35)]
                "
              >
                {selectedCV.label}
              </a>
            </div>

            {/* CLOSE */}
            <button
              type="button"
              onClick={onClose}
              aria-label={t.cv.close}
              className="
                absolute
                right-4
                top-3
                z-20
                text-[#6F5C4F]
                transition
                hover:text-[#A48D78]
              "
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default CvModal;