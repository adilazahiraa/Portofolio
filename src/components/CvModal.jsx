import { motion, AnimatePresence } from "framer-motion";

function CvModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

          {/* BACKDROP */}
          <div
            className="
            absolute inset-0
            bg-[#3B2F28]/30
            backdrop-blur-md
            "
            onClick={onClose}
          />

          {/* CARD */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            transition={{ duration: 0.25 }}
            className="
            relative
            w-[92%]
            max-w-md
            p-6 md:p-8
            rounded-3xl
            overflow-hidden

            bg-[#FAF9F6]/80
            backdrop-blur-2xl

            border border-white/70

            shadow-[0_25px_60px_rgba(164,141,120,0.25)]
            "
          >

            {/* LIGHT */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#889063]/20 to-transparent"></div>

            {/* SHADOW */}
            <div className="absolute inset-0 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]"></div>

            {/* GLOW */}
            <div
              className="
              absolute inset-0
              opacity-100
              rounded-3xl
              bg-gradient-to-br
              from-[#FAF9F6]/90
              via-transparent
              to-[#CBB9A4]/25
              "
            />

            <div
              className="
              absolute
              -top-20
              -right-20
              w-60
              h-60
              rounded-full
              bg-[#CBB9A4]/35
              blur-3xl
              "
            />

            {/* CONTENT */}
            <div className="relative z-10">

              <h3
                className="
                text-xl md:text-2xl
                font-semibold
                mb-2
                text-[#3B2F28]
                "
              >
                Download CV
              </h3>

              <p
                className="
                text-[#6F5C4F]
                text-xs md:text-sm
                mb-6 md:mb-8
                "
              >
                Pilih versi CV yang ingin kamu download
              </p>

              <div className="flex flex-col gap-3 md:gap-4">

                {/* INDONESIA */}
                <a
                  href="/cv-indonesia.pdf"
                  download
                  onClick={onClose}
                  className="
                  group
                  relative

                  flex items-center justify-center

                  px-4
                  py-3
                  rounded-xl

                  bg-[#F4F1EA]
                  border border-[#CBB9A4]

                  text-[#3B2F28]
                  font-medium

                  transition-all duration-300

                  hover:bg-[#A48D78]
                  hover:border-[#A48D78]
                  hover:text-[#FAF9F6]

                  hover:shadow-[0_12px_25px_rgba(164,141,120,0.35)]
                  "
                >
                  CV Indonesia
                </a>

                {/* ENGLISH */}
                <a
                  href="/cv-english.pdf"
                  download
                  onClick={onClose}
                  className="
                  group
                  relative

                  flex items-center justify-center

                  px-4
                  py-3
                  rounded-xl

                  bg-[#F4F1EA]
                  border border-[#CBB9A4]

                  text-[#3B2F28]
                  font-medium

                  transition-all duration-300

                  hover:bg-[#A48D78]
                  hover:border-[#A48D78]
                  hover:text-[#FAF9F6]

                  hover:shadow-[0_12px_25px_rgba(164,141,120,0.35)]
                  "
                >
                  CV English
                </a>

              </div>

            </div>

            {/* CLOSE */}
            <button
              onClick={onClose}
              className="
              absolute
              top-3
              right-4

              text-[#6F5C4F]

              hover:text-[#A48D78]

              transition
              "
            >
              ✕
            </button>

          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CvModal;