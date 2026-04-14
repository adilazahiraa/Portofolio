import { motion, AnimatePresence } from "framer-motion";

function ContactModal({ open, onClose }) {
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
            backdrop-blur-xl text-center overflow-hidden
            max-h-[80vh] overflow-y-auto"
          >

            {/* ✨ SOFT LIGHT */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#889063]/20 to-transparent"></div>

            {/* 🌫 SHADOW */}
            <div className="absolute inset-0 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]"></div>

            {/* CONTENT */}
            <div className="relative z-10">

              {/* TITLE */}
              <h3 className="text-xl md:text-2xl font-semibold mb-2 tracking-tight text-[#f5f5f4]">
                Contact Me
              </h3>

              {/* DESC */}
              <p className="text-[#cfc9be] text-xs md:text-sm mb-6 md:mb-8">
                Pilih cara untuk menghubungi saya
              </p>

              <div className="flex flex-col gap-3 md:gap-4">

                {/* WHATSAPP */}
                <a
                  href="https://wa.me/6282326108723"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-4 py-2.5 md:px-5 md:py-3 rounded-xl 
                  bg-[#889063]/20 border border-[#889063]/40 
                  text-[#f5f5f4]
                  hover:bg-[#889063]/30 transition active:scale-95"
                >
                  <span className="relative z-10 text-sm md:text-base">
                    WhatsApp
                  </span>
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-[#889063]/20 transition"></div>
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:hasyatiadilazahira@gmail.com"
                  onClick={() => setTimeout(onClose, 200)} 
                  className="group relative px-4 py-2.5 md:px-5 md:py-3 rounded-xl 
                  bg-[#889063]/20 border border-[#889063]/40 
                  text-[#f5f5f4]
                  hover:bg-[#889063]/30 transition active:scale-95"
                >
                  <span className="relative z-10 text-sm md:text-base">
                    Email
                  </span>
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-[#889063]/20 transition"></div>
                </a>

              </div>

              {/* CLOSE */}
              <button
                onClick={onClose}
                className="absolute top-2 right-3 md:top-3 md:right-4 
                text-[#cfc9be] hover:text-[#f5f5f4] transition text-base md:text-lg"
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