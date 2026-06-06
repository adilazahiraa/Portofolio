import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Experience() {
  const [activeTab, setActiveTab] = useState("internship");

  const tabs = [
    { id: "internship", label: "Internship" },
    { id: "organization", label: "Organization" },
    { id: "committee", label: "Committee" },
  ];

  const experiences = {
    internship: [
      {
        title: "Infrastructure Intern",
        place: "Telkom Indonesia – Purwokerto",
        date: "September – Oktober 2025",
        desc: "Mendukung divisi infrastruktur dalam operasional harian melalui monitoring dan validasi data. Melakukan pengecekan data secara rutin untuk memastikan akurasi dan keandalan sistem, serta membantu pengelolaan data operasional guna menunjang performa infrastruktur.",
      },
      {
        title: "IT Intern",
        place: "Dinas Komunikasi dan Informatika Provinsi Jawa Tengah",
        date: "Juli – Agustus 2024",
        desc: "Mengembangkan modul admin pada sistem E-Pegawai berbasis web, termasuk pengelolaan data pegawai dan autentikasi pengguna. Berkontribusi dalam sistem manajemen aset, mengembangkan fitur Riwayat Servis, serta melakukan pengujian black-box dan perbaikan sistem.",
      },
    ],

    organization: [
      {
        title: "HMIF UNSOED",
        place: "Sekretaris Divisi PSDM",
        date: "Maret – Desember 2023",
        desc: "Bertanggung jawab dalam pengelolaan administrasi divisi, pembuatan laporan, surat-menyurat, dokumentasi kegiatan, penyusunan notulensi rapat, pengarsipan, koordinasi agenda kerja, evaluasi staf, serta mendukung komunikasi internal.",
      },
    ],

    committee: [
      {
        title: "Staff Divisi Acara",
        place: "Maskrab Makrab (MM)",
        date: "2023–2024 & 2024–2025",
        desc: "Bertanggung jawab dalam penyusunan konsep acara dan alur kegiatan untuk mendukung pelaksanaan orientasi mahasiswa baru.",
      },
      {
        title: "Staff Divisi Acara",
        place: "Informatics Championship (IC)",
        date: "2022 & 2023",
        desc: "Berperan dalam pengaturan teknis dan penyusunan alur kegiatan, khususnya dalam mendukung pelaksanaan lomba di bidang olahraga dan seni.",
      },
      {
        title: "Staff Divisi Acara",
        place: "Pemilihan Raya (Pemira)",
        date: "2023 & 2024",
        desc: "Terlibat dalam penyusunan alur kegiatan serta pengembangan program perhitungan suara untuk mendukung proses pemilihan ketua himpunan.",
      },
      {
        title: "Bendahara",
        place: "Soedirman Technophoria (S-Tech)",
        date: "2023",
        desc: "Mengelola pemasukan dan pengeluaran dana kegiatan serta memastikan pengelolaan keuangan berjalan secara tertib dan terstruktur.",
      },
    ],
  };

  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        bg-[#FBF6EE]
        px-6
        py-24
        text-[#2B1A18]
        sm:py-28
        md:px-20
        md:py-40
      "
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#FBF6EE_0%,#F7EFE3_55%,#F3E6D4_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(74,44,42,0.08),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,rgba(184,149,106,0.12),transparent_35%)]" />

      <div className="pointer-events-none absolute right-[-170px] top-[12%] h-[340px] w-[340px] rounded-full bg-[#4A2C2A]/8 blur-[120px] md:right-[-140px] md:h-[460px] md:w-[460px] md:blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-130px] left-[-170px] h-[340px] w-[340px] rounded-full bg-[#B8956A]/12 blur-[120px] md:left-[-140px] md:h-[440px] md:w-[440px] md:blur-[130px]" />

      {/* BIG BG TEXT */}
      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.9 }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-12
          -translate-x-1/2
          select-none
          whitespace-nowrap
          font-syne
          text-[54px]
          font-bold
          leading-none
          tracking-[-0.08em]
          text-[#2B1A18]/[0.045]
          sm:text-[68px]
          md:top-20
          md:text-[170px]
        "
      >
        EXPERIENCE
      </motion.h1>

      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="
            mb-10
            text-center
            sm:mb-12
            md:mb-14
            md:text-left
          "
        >
          <div className="mb-5 flex items-center justify-center gap-3 md:justify-start md:gap-4">
            <span className="h-px w-10 bg-[#B8956A]/70 sm:w-12" />

            <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.28em] text-[#B8956A] sm:text-[11px] sm:tracking-[0.32em]">
              Journey
            </p>
          </div>

          <h2
            className="
              font-syne
              text-[42px]
              font-bold
              leading-[0.9]
              tracking-[-0.065em]
              text-[#2B1A18]
              sm:text-[52px]
              md:text-[88px]
            "
          >
            Experience.
          </h2>
        </motion.div>

        {/* TABS */}
        <div className="mb-10 flex flex-wrap justify-center gap-5 sm:gap-7 md:mb-14 md:justify-start md:gap-8">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              type="button"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveTab(tab.id)}
              className={`
                relative
                pb-2.5
                font-manrope
                text-[13px]
                font-semibold
                transition
                duration-300
                sm:text-[14px]
                md:pb-3
                md:text-[15px]
                ${
                  activeTab === tab.id
                    ? "text-[#2B1A18]"
                    : "text-[#2B1A18]/40 hover:text-[#2B1A18]/75"
                }
              `}
            >
              {tab.label}

              {activeTab === tab.id && (
                <motion.span
                  layoutId="experience-active-tab"
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-full
                    rounded-full
                    bg-[#B8956A]
                  "
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* CONTENT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid gap-5 md:gap-6"
          >
            {experiences[activeTab].map((item, i) => (
              <motion.div
                key={`${item.title}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.7rem]
                  border
                  border-[#4A2C2A]/10
                  bg-white
                  p-5
                  shadow-[0_14px_42px_rgba(74,44,42,0.09)]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:border-[#B8956A]/45
                  hover:bg-[#FBF6EE]
                  hover:shadow-[0_24px_65px_rgba(74,44,42,0.14)]
                  sm:rounded-[2rem]
                  sm:p-6
                  md:p-8
                  md:shadow-[0_18px_55px_rgba(74,44,42,0.10)]
                  md:hover:shadow-[0_26px_70px_rgba(74,44,42,0.15)]
                "
              >
                {/* NUMBER */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    right-5
                    top-4
                    font-syne
                    text-[56px]
                    font-bold
                    leading-none
                    tracking-[-0.08em]
                    text-[#2B1A18]/[0.035]
                    transition
                    duration-300
                    group-hover:text-[#B8956A]/14
                    sm:text-[72px]
                    md:right-7
                    md:top-5
                    md:text-[104px]
                  "
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* CARD LIGHT */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-transparent to-[#D5B893]/10 opacity-80" />
                <div className="pointer-events-none absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-[#B8956A]/35 to-transparent md:left-8 md:right-8" />
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#B8956A]/14 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100 md:h-56 md:w-56" />

                <div className="relative z-10">
                  <div className="mb-5 flex flex-col items-start gap-4 pr-14 sm:pr-20 md:flex-row md:flex-wrap md:justify-between md:pr-24">
                    <div>
                      <p className="mb-3 inline-flex rounded-full border border-[#B8956A]/24 bg-[#F7EFE3] px-3.5 py-1.5 font-manrope text-[10.5px] font-semibold text-[#8B675F] backdrop-blur-xl sm:px-4 sm:text-[11px]">
                        {item.place}
                      </p>

                      <h3
                        className="
                          font-syne
                          text-[26px]
                          font-bold
                          leading-[0.98]
                          tracking-[-0.055em]
                          text-[#2B1A18]
                          sm:text-[30px]
                          md:text-[44px]
                        "
                      >
                        {item.title}
                      </h3>
                    </div>

                    <span
                      className="
                        rounded-full
                        border
                        border-[#4A2C2A]/10
                        bg-[#F7EFE3]
                        px-3.5
                        py-1.5
                        font-manrope
                        text-[11px]
                        font-semibold
                        text-[#4A2C2A]/70
                        backdrop-blur-xl
                        sm:px-4
                        sm:py-2
                        sm:text-xs
                      "
                    >
                      {item.date}
                    </span>
                  </div>

                  <p className="max-w-[880px] font-manrope text-[13.5px] leading-7 text-[#4A2C2A]/70 sm:text-[14px] md:text-[15px] md:leading-8">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Experience;