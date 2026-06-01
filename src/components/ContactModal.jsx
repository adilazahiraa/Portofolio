import { motion, AnimatePresence } from "framer-motion";

function ContactModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-[#3B2F28]/30 backdrop-blur-md"
            onClick={onClose}
          />

          {/* CARD */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            transition={{ duration: 0.25 }}
            className="relative w-[92%] max-w-md p-6 md:p-8 rounded-3xl 
            bg-[#FAF9F6]/80 border border-white/70
            backdrop-blur-2xl text-center overflow-hidden
            shadow-[0_25px_60px_rgba(164,141,120,0.28)]"
          >

            {/* SOFT LIGHT */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/80 via-transparent to-[#CBB9A4]/30"></div>

            {/* GLOW */}
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[#CBB9A4]/35 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-52 h-52 rounded-full bg-[#E6DAC8]/50 blur-3xl"></div>

            {/* SHINE */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
              <div
                className="absolute -left-40 top-0 h-full w-32
                rotate-12 bg-gradient-to-r from-transparent via-white/40 to-transparent
                blur-xl translate-x-0 group-hover:translate-x-[900px]
                transition-transform duration-1000"
              />
            </div>

            {/* CONTENT */}
            <div className="relative z-10">

              {/* TITLE */}
              <h3 className="text-xl md:text-2xl font-semibold mb-2 tracking-tight text-[#3B2F28]">
                Contact Me
              </h3>

              {/* DESC */}
              <p className="text-[#6F5C4F] text-xs md:text-sm mb-6 md:mb-8">
                Pilih cara untuk menghubungi saya
              </p>

              <div className="flex flex-col gap-3 md:gap-4">

                {/* WHATSAPP */}
                <a
                  href="https://wa.me/6282326108723"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-4 py-3 md:px-5 md:py-3 rounded-xl 
                  bg-[#F4F1EA]/80 border border-[#CBB9A4]/70
                  text-[#3B2F28] font-medium
                  hover:bg-[#A48D78] hover:border-[#A48D78] hover:text-[#FAF9F6]
                  hover:shadow-[0_12px_25px_rgba(164,141,120,0.35)]
                  transition-all duration-300 active:scale-95 overflow-hidden"
                >
                  <span className="relative z-10 text-sm md:text-base">
                    WhatsApp
                  </span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/20 to-transparent transition"></div>
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:hasyatiadilazahira@gmail.com"
                  onClick={() => setTimeout(onClose, 200)}
                  className="group relative px-4 py-3 md:px-5 md:py-3 rounded-xl 
                  bg-[#F4F1EA]/80 border border-[#CBB9A4]/70
                  text-[#3B2F28] font-medium
                  hover:bg-[#A48D78] hover:border-[#A48D78] hover:text-[#FAF9F6]
                  hover:shadow-[0_12px_25px_rgba(164,141,120,0.35)]
                  transition-all duration-300 active:scale-95 overflow-hidden"
                >
                  <span className="relative z-10 text-sm md:text-base">
                    Email
                  </span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/20 to-transparent transition"></div>
                </a>

              </div>

              {/* CLOSE */}
              <button
                onClick={onClose}
                className="absolute top-2 right-3 md:top-3 md:right-4 
                text-[#6F5C4F] hover:text-[#A48D78] transition text-base md:text-lg"
              >
                ✕
              </button>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ContactModal;