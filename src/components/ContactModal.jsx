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
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* CARD */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            transition={{ duration: 0.25 }}
            className="relative w-[90%] max-w-md p-8 rounded-2xl 
            bg-white/[0.04] border border-white/10 
            backdrop-blur-xl text-center overflow-hidden"
          >

            {/* ✨ OUTER SOFT LIGHT */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-40"></div>

            {/* 💎 INNER LIGHT */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-20"></div>

            {/* 🌫 SHADOW */}
            <div className="absolute inset-0 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.6)]"></div>

            {/* CONTENT */}
            <div className="relative z-10">

              <h3 className="text-2xl font-semibold mb-2 tracking-tight">
                Contact Me
              </h3>

              <p className="text-gray-400 text-sm mb-8">
                Pilih cara untuk menghubungi saya
              </p>

              <div className="flex flex-col gap-4">

                {/* WHATSAPP */}
                <a
                  href="https://wa.me/6282326108723"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-5 py-3 rounded-xl 
                  bg-white/5 border border-white/10 
                  hover:bg-white/10 transition active:scale-95"
                >
                  <span className="relative z-10">WhatsApp</span>
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-white/5 transition"></div>
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:hasyatiadilazahira@gmail.com"
                  onClick={() => setTimeout(onClose, 200)} 
                  className="group relative px-5 py-3 rounded-xl 
                  bg-white/5 border border-white/10 
                  hover:bg-white/10 transition active:scale-95"
                >
                  <span className="relative z-10">Email</span>
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-white/5 transition"></div>
                </a>

              </div>

              {/* CLOSE */}
              <button
                onClick={onClose}
                className="absolute top-3 right-4 text-gray-400 hover:text-white transition text-lg"
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