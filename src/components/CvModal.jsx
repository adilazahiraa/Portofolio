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
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* CARD */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            transition={{ duration: 0.25 }}
            className="relative w-[92%] max-w-md p-6 md:p-8 rounded-2xl 
            bg-[#353f24]/70 border border-[#889063]/30 
            backdrop-blur-xl text-center overflow-hidden"
          >

            {/* LIGHT */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#889063]/20 to-transparent"></div>

            {/* SHADOW */}
            <div className="absolute inset-0 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]"></div>

            {/* CONTENT */}
            <div className="relative z-10">

              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#f5f5f4]">
                Download CV
              </h3>

              <p className="text-[#cfc9be] text-xs md:text-sm mb-6 md:mb-8">
                Pilih versi CV yang ingin kamu download
              </p>

              <div className="flex flex-col gap-3 md:gap-4">

                {/* INDONESIA */}
                <a
                  href="/cv-indonesia.pdf"
                  download
                  onClick={onClose}
                  className="group relative px-4 py-2.5 rounded-xl 
                  bg-[#889063]/20 border border-[#889063]/40 
                  text-[#f5f5f4] hover:bg-[#889063]/30 transition"
                >
                  CV Indonesia
                </a>

                {/* ENGLISH */}
                <a
                  href="/cv-english.pdf"
                  download
                  onClick={onClose}
                  className="group relative px-4 py-2.5 rounded-xl 
                  bg-[#889063]/20 border border-[#889063]/40 
                  text-[#f5f5f4] hover:bg-[#889063]/30 transition"
                >
                  CV English
                </a>

              </div>

            </div>

            {/* CLOSE */}
            <button
              onClick={onClose}
              className="absolute top-2 right-3 text-[#cfc9be] hover:text-white"
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