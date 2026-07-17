import { motion } from "framer-motion";
import { useState } from "react";

function CertificateCard({ cert, index }) {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? cert.images.length - 1 : prev - 1
    );
  };

  const next = () => {
    setCurrent((prev) =>
      prev === cert.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="
        group
        rounded-[2rem]
        border
        border-[#4A2C2A]/10
        bg-[#FBF6EE]/85
        p-7
        shadow-[0_20px_60px_rgba(74,44,42,0.12)]
        backdrop-blur-xl
      "
    >
      {/* HEADER */}

      <div className="flex items-start justify-between">
        <div>

          <p className="text-xs uppercase tracking-[0.28em] text-[#B8956A]">
            {cert.issuer}
          </p>

          <h3 className="mt-2 font-syne text-3xl font-bold">
            {cert.title.split("\n").map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </h3>

        </div>

        <span className="text-[#B8956A] font-semibold">
          {cert.year}
        </span>
      </div>

      {/* IMAGE */}

      <div className="relative mt-6">

        <img
          src={cert.images[current]}
          alt={cert.title}
          className="
            h-64
            w-full
            rounded-2xl
            object-cover
            transition
            duration-300
            group-hover:scale-[1.02]
          "
        />

        {cert.images.length > 1 && (
          <>
          <button
            onClick={prev}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2

              flex
              items-center
              justify-center

              h-11
              w-11

              rounded-full
              bg-[#4A2C2A]/80
              text-white
              backdrop-blur-md

              shadow-xl
              transition-all
              duration-300

              hover:scale-110
              hover:bg-[#4A2C2A]
            "
          >
            ‹
          </button>

          <button
            onClick={next}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2

              flex
              items-center
              justify-center

              h-11
              w-11

              rounded-full
              bg-[#4A2C2A]/80
              text-white
              backdrop-blur-md

              shadow-xl
              transition-all
              duration-300

              hover:scale-110
              hover:bg-[#4A2C2A]
            "
          >
            ›
          </button>
          </>
        )}
      </div>

      {/* DOT */}

      {cert.images.length > 1 && (

        <div className="mt-4 flex justify-center gap-2">

          {cert.images.map((_, i) => (

            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all ${
                current === i
                  ? "w-8 bg-[#B8956A]"
                  : "w-2.5 bg-[#D6C4AF]"
              }`}
            />

          ))}

        </div>

      )}

      {/* DESC */}

      <p className="mt-6 text-[15px] leading-7 text-[#4A2C2A]/70">
        {cert.description}
      </p>

      {/* TAG */}

      <div className="mt-6 flex flex-wrap gap-2">

        {cert.tags.map((tag) => (

          <span
            key={tag}
            className="
              rounded-full
              border
              border-[#4A2C2A]/10
              bg-white/70
              px-4
              py-2
              text-xs
            "
          >
            {tag}
          </span>

        ))}

      </div>

    </motion.div>
  );
}

function Certifications({ t }) {

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
        {t.certifications.bgText}
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
              {t.certifications.label}
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
          {t.certifications.title.split("\n").map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </h2>
        </motion.div>

        {/* CERTIFICATE CARD */}
        <div className="grid gap-8 lg:grid-cols-2">
          {t.certifications.items.map((cert, index) => (
            <CertificateCard
              key={cert.title}
              cert={cert}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;