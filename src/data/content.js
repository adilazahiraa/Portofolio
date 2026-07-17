export const content = {
  id: {
    nav: {
      home: "Home",
      about: "Tentang",
      projects: "Proyek",
      experience: "Pengalaman",
      contact: "Kontak",
    },

    contact: {
    title: "Hubungi Saya",
    desc: "Terbuka untuk peluang kerja, kolaborasi, maupun diskusi seputar analisis data, business intelligence, machine learning, dan pengambilan keputusan berbasis data.",
    whatsapp: "WhatsApp",
    email: "Email",
    close: "Tutup",
    },

    hero: {
      greeting: "Halo! Saya",
      role: "Data Analyst | Business Intelligence Enthusiast",
      projectButton: "Lihat Project",
      linkedinButton: "LinkedIn",
      cvButton: "Download CV",
    },

    cv: {
    title: "Download CV",
    desc: "Unduh CV sesuai bahasa yang sedang dipilih.",
    close: "Tutup",
    },

    about: {
    bgText: "TENTANG",
    label: "Tentang Saya",
    title: "Tentang\nSaya.",
    p1: "Saya adalah lulusan Informatika yang memiliki minat di bidang Data Analyst dan Business Intelligence.",
    p2: "Memiliki pengalaman dalam pengolahan, analisis, dan visualisasi data melalui proyek akademik, personal project, dan pengalaman magang.",
    p3: "Saya tertarik mengubah data menjadi insight yang dapat mendukung pengambilan keputusan melalui analisis data, dashboard interaktif, dan visualisasi yang informatif.",
    },

    softSkills: {
    bgText: "SOFT SKILLS",
    label: "Keunggulan Personal",
    title: "Soft Skills.",
    desc: "Kemampuan yang mendukung cara saya berkolaborasi, berkomunikasi, dan menyelesaikan masalah saat membangun produk digital.",
    items: [
        {
        name: "Kerja Sama Tim",
        desc: "Mampu bekerja sama dan berkontribusi secara efektif dalam tim.",
        },
        {
        name: "Komunikasi",
        desc: "Mampu menyampaikan ide, bertanya, dan berdiskusi dengan jelas.",
        },
        {
        name: "Pemecahan Masalah",
        desc: "Terbiasa menganalisis masalah dan mencari solusi yang terstruktur.",
        },
        {
        name: "Berpikir Kritis",
        desc: "Mampu mengevaluasi situasi secara logis sebelum mengambil keputusan.",
        },
        {
        name: "Manajemen Waktu",
        desc: "Mampu mengatur prioritas dan tugas agar pekerjaan tetap terorganisir.",
        },
        {
        name: "Adaptabilitas",
        desc: "Terbuka untuk mempelajari tools, workflow, dan lingkungan baru.",
        },
    ],
    },

    techStack: {
    bgText: "STACK",
    label: "Tools yang Saya Gunakan",
    title: "Tech Stack",
    desc: "Kumpulan tools yang saya gunakan untuk mengolah data, membangun dashboard interaktif, melakukan analisis, serta mendukung pengambilan keputusan berbasis data.",
    },

    certifications: {
    bgText: "SERTIFIKASI",
    label: "Pengembangan Profesional",
    title: "Sertifikasi\n& Pelatihan.",

    items: [
        {
        year: "2026",
        issuer: "MySkill",
        title: "Microsoft Excel\nIntermediate",

        images: [
            "/certificates/excel-lookup.png",
            "/certificates/excel-pivot.png",
            "/certificates/excel-chart.png",
        ],

        description:
            "Mempelajari Microsoft Excel untuk analisis data, dashboard, Pivot Table, Lookup, serta visualisasi data.",

        tags: [
            "Excel",
            "Pivot Table",
            "Lookup",
            "Dashboard",
        ],
        },

        {
        year: "2026",
        issuer: "MySkill",
        title: "Data Analytic\nin Power BI",

        images: [
            "/certificates/powerbi.png",
        ],

        description:
            "Mempelajari data modelling, DAX, Power Query, serta dashboard interaktif.",

        tags: [
            "Power BI",
            "Dashboard",
            "DAX",
        ],
        },

        {
        year: "2026",
        issuer: "DQLab",
        title: "Fundamental SQL\nSeries",

        images: [
            "/certificates/sql-function-groupby.png",
            "/certificates/sql-groupby-having.png",
            "/certificates/sql-join-union.png",
            "/certificates/sql-orderby.png",
            "/certificates/sql-logical-operator.png",
            "/certificates/sql-subquery.png",
        ],

        description:
            "Mempelajari dasar SQL mulai dari SELECT, JOIN, GROUP BY hingga Subquery.",

        tags: [
            "SQL",
            "JOIN",
            "GROUP BY",
            "Subquery",
        ],
        },

        {
        year: "2026",
        issuer: "DQLab",
        title: "Business Decision\nResearch",

        images: [
            "/certificates/business-decision.png",
        ],

        description:
            "Mempelajari business analytics dan data-driven decision making.",

        tags: [
            "Business",
            "Analytics",
        ],
        },
    ],
    },

    projects: {
    bgText: "PROYEK",
    label: "Portofolio",
    title: "Project\nPilihan.",
    desc: "Kumpulan project yang menunjukkan kemampuan saya dalam analisis data, business intelligence, machine learning, dan pengembangan sistem cerdas.",
    swipe: "Geser untuk melihat",
    items: [
        {
        title: "Dashboard Penjualan Eksekutif SuperStores US",
        desc: "Mengembangkan dashboard interaktif menggunakan Power BI untuk menganalisis performa penjualan, tren keuntungan, segmentasi pelanggan, dan insight regional dengan memanfaatkan Power Query, DAX, serta visualisasi data.",
        badge: "Business Intelligence",
        },
        {
        title: "Analisis & Prediksi Customer Churn Retail",
        desc: "Membangun model machine learning untuk memprediksi customer churn melalui data preprocessing, exploratory data analysis (EDA), feature engineering, evaluasi model, dan predictive analytics menggunakan Python.",
        badge: "Analisis Data",
        },
        {
        title: "Sistem Diagnosis Status Gizi",
        desc: "Mengembangkan sistem pakar berbasis web menggunakan Flask, Fuzzy Logic, dan Decision Tree untuk mendiagnosis status gizi serta memberikan rekomendasi pola hidup sehat secara personal.",
        badge: "Sistem Cerdas",
        },
        {
        title: "Analisis Sentimen Pelantikan Presiden Indonesia",
        desc: "Melakukan analisis sentimen terhadap opini masyarakat di platform X menggunakan text preprocessing, TF-IDF, Naive Bayes, dan SMOTE untuk mengklasifikasikan sentimen serta menghasilkan insight berbasis data.",
        badge: "Machine Learning",
        },
    ],
    },

    experience: {
    bgText: "PENGALAMAN",
    label: "Perjalanan",
    title: "Pengalaman.",
    tabs: {
        internship: "Magang",
        organization: "Organisasi",
        committee: "Kepanitiaan",
    },

    internship: [
        {
        title: "Infrastructure Intern",
        place: "Telkom Indonesia – Purwokerto",
        date: "September – Oktober 2025",
        desc: "Mendukung divisi infrastruktur melalui monitoring dan validasi data operasional. Melakukan pengecekan data secara rutin untuk memastikan akurasi sistem serta membantu pengelolaan data guna menunjang performa infrastruktur.",
        },
        {
        title: "IT Intern",
        place: "Dinas Komunikasi dan Informatika Provinsi Jawa Tengah",
        date: "Juli – Agustus 2024",
        desc: "Mengembangkan modul admin pada sistem E-Pegawai berbasis web, termasuk pengelolaan data pegawai dan autentikasi pengguna. Berkontribusi pada sistem manajemen aset, fitur Riwayat Servis, serta melakukan pengujian dan perbaikan sistem.",
        },
    ],

    organization: [
        {
        title: "HMIF UNSOED",
        place: "Sekretaris Divisi PSDM",
        date: "Maret – Desember 2023",
        desc: "Bertanggung jawab dalam administrasi divisi, penyusunan laporan, dokumentasi kegiatan, notulensi rapat, pengarsipan, serta mendukung koordinasi dan komunikasi internal.",
        },
    ],

    committee: [
        {
        title: "Staff Divisi Acara",
        place: "Maskrab Makrab (MM)",
        date: "2023–2024 & 2024–2025",
        desc: "Menyusun konsep acara dan alur kegiatan untuk mendukung pelaksanaan orientasi mahasiswa baru.",
        },
        {
        title: "Staff Divisi Acara",
        place: "Informatics Championship (IC)",
        date: "2022 & 2023",
        desc: "Mendukung pelaksanaan lomba melalui pengaturan teknis dan penyusunan alur kegiatan di bidang olahraga dan seni.",
        },
        {
        title: "Staff Divisi Acara",
        place: "Pemilihan Raya (Pemira)",
        date: "2023 & 2024",
        desc: "Terlibat dalam penyusunan alur kegiatan serta pengembangan program perhitungan suara untuk pemilihan ketua himpunan.",
        },
        {
        title: "Bendahara",
        place: "Soedirman Technophoria (S-Tech)",
        date: "2023",
        desc: "Mengelola pemasukan dan pengeluaran dana kegiatan serta memastikan administrasi keuangan berjalan secara tertib dan terstruktur.",
        },
    ],
    },

    footer: {
    bgText: "TERIMA KASIH",
    label: "Mari Terhubung",

    title: {
        line1: "Mari bangun",
        line2: "sesuatu bersama.",
    },

    desc:
  "Terima kasih telah mengunjungi portofolio saya. Saya terbuka untuk peluang kerja, kolaborasi, maupun diskusi seputar analisis data, business intelligence, machine learning, dan pengambilan keputusan berbasis data.",

    role:
        "Data Analyst | Business Intelligence Enthusiast",

    copyright: "Seluruh hak cipta dilindungi.",

    links: {
        github: "GitHub",
        linkedin: "LinkedIn",
        email: "Email",
    },
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },

    contact: {
    title: "Contact Me",
    desc: "Open to job opportunities, collaborations, and discussions related to data analytics, business intelligence, machine learning, and data-driven decision making.",
    whatsapp: "WhatsApp",
    email: "Email",
    close: "Close",
    },

    hero: {
      greeting: "Hello! I am",
      role: "Data Analyst | Business Intelligence Enthusiast",
      projectButton: "View Projects",
      linkedinButton: "LinkedIn",
      cvButton: "Download CV",
    },

    cv: {
    title: "Download CV",
    desc: "Download the CV version based on the selected language.",
    close: "Close",
    },

    about: {
    bgText: "ABOUT",
    label: "About Me",
    title: "About\nMe.",
    p1: "I am an Informatics graduate with a strong interest in Data Analytics and Business Intelligence.",
    p2: "I have hands-on experience in data processing, analysis, and visualization through academic projects, personal projects, and internship experience.",
    p3: "I am passionate about transforming data into actionable insights that support business decision-making through data analysis, interactive dashboards, and meaningful visualizations.",
    },

    softSkills: {
    bgText: "SOFT SKILLS",
    label: "Personal Strength",
    title: "Soft Skills.",
    desc: "Skills that shape the way I collaborate, communicate, and solve problems while building reliable digital products.",
    items: [
        {
        name: "Teamwork",
        desc: "Able to collaborate and contribute effectively in a team environment.",
        },
        {
        name: "Communication",
        desc: "Clear in sharing ideas, asking questions, and discussing solutions.",
        },
        {
        name: "Problem Solving",
        desc: "Enjoy analyzing problems and finding structured solutions.",
        },
        {
        name: "Critical Thinking",
        desc: "Able to evaluate situations logically before making decisions.",
        },
        {
        name: "Time Management",
        desc: "Manage priorities and tasks to keep work organized.",
        },
        {
        name: "Adaptability",
        desc: "Open to learning new tools, workflows, and environments.",
        },
    ],
    },

    techStack: {
    bgText: "STACK",
    label: "Tools I Work With",
    title: "Tech Stack",
    desc: "A curated selection of technologies I use to craft polished interfaces, structured backends, and reliable digital experiences.",
    },

    certifications: {
    bgText: "CERTIFICATION",
    label: "Professional Development",
    title: "Certification\n& Training.",

    items: [
        {
        year: "2026",
        issuer: "MySkill",
        title: "Microsoft Excel\nIntermediate",

        images: [
            "/certificates/excel-lookup.png",
            "/certificates/excel-pivot.png",
            "/certificates/excel-chart.png",
        ],

        description:
            "Learned Microsoft Excel for data analysis, Pivot Tables, Lookup functions, dashboards, and data visualization.",

        tags: [
            "Excel",
            "Pivot Table",
            "Lookup",
            "Dashboard",
        ],
        },

        {
        year: "2026",
        issuer: "MySkill",
        title: "Data Analytics\nin Power BI",

        images: [
            "/certificates/powerbi.png",
        ],

        description:
            "Learned data modeling, Power Query, DAX, and interactive dashboard development using Power BI.",

        tags: [
            "Power BI",
            "Dashboard",
            "DAX",
        ],
        },

        {
        year: "2026",
        issuer: "DQLab",
        title: "Fundamental SQL\nSeries",

        images: [
            "/certificates/sql-function-groupby.png",
            "/certificates/sql-groupby-having.png",
            "/certificates/sql-join-union.png",
            "/certificates/sql-orderby.png",
            "/certificates/sql-logical-operator.png",
            "/certificates/sql-subquery.png",
        ],

        description:
            "Learned SQL fundamentals including SELECT, JOIN, GROUP BY, ORDER BY, HAVING, and Subquery.",

        tags: [
            "SQL",
            "JOIN",
            "GROUP BY",
            "Subquery",
        ],
        },

        {
        year: "2026",
        issuer: "DQLab",
        title: "Business Decision\nResearch",

        images: [
            "/certificates/business-decision.png",
        ],

        description:
            "Learned business analytics and data-driven decision making for business problem solving.",

        tags: [
            "Business",
            "Analytics",
        ],
        },
    ],
    },

    projects: {
    bgText: "PROJECT",
    label: "Portfolio",
    title: "Selected\nProjects.",
    desc: "A selection of projects showcasing my experience in data analytics, business intelligence, machine learning, and intelligent systems.",
    swipe: "Swipe to explore",
    items: [
        {
        title: "SuperStores US Executive Sales Dashboard",
        desc: "Developed an interactive Power BI dashboard to analyze sales performance, profit trends, customer segments, and regional insights using Power Query, DAX, and data visualization techniques.",
        badge: "Business Intelligence",
        },
        {
        title: "Retail Customer Churn Analysis & Prediction",
        desc: "Built a machine learning model to predict customer churn through data preprocessing, exploratory data analysis (EDA), feature engineering, model evaluation, and predictive analytics using Python.",
        badge: "Data Analytics",
        },
        {
        title: "Nutritional Status Diagnosis System",
        desc: "Developed a web-based expert system using Flask, Fuzzy Logic, and Decision Tree to assess nutritional status and provide personalized healthy lifestyle recommendations.",
        badge: "Intelligent System",
        },
        {
        title: "Indonesian Presidential Inauguration Sentiment Analysis",
        desc: "Performed sentiment analysis on public discussions from X using text preprocessing, TF-IDF, Naive Bayes, and SMOTE to classify sentiment and generate data-driven insights.",
        badge: "Machine Learning",
        },
    ],
    },

    experience: {
    bgText: "EXPERIENCE",
    label: "Journey",
    title: "Experience.",

    tabs: {
        internship: "Internship",
        organization: "Organization",
        committee: "Committee",
    },

    internship: [
        {
        title: "Infrastructure Intern",
        place: "Telkom Indonesia – Purwokerto",
        date: "September – October 2025",
        desc: "Supported the infrastructure division through operational data monitoring and validation. Conducted routine data verification to ensure system accuracy and assisted in maintaining operational data to support infrastructure performance.",
        },
        {
        title: "IT Intern",
        place: "Central Java Provincial Communication and Information Office",
        date: "July – August 2024",
        desc: "Developed administrative modules for the E-Pegawai web system, including employee data management and user authentication. Contributed to asset management features, service history functionality, and system testing activities.",
        },
    ],

    organization: [
        {
        title: "HMIF UNSOED",
        place: "Secretary of Human Resource Development Division",
        date: "March – December 2023",
        desc: "Managed divisional administration, documentation, reports, meeting minutes, archives, and supported internal coordination and communication activities.",
        },
    ],

    committee: [
        {
        title: "Event Staff",
        place: "Maskrab Makrab (MM)",
        date: "2023–2024 & 2024–2025",
        desc: "Assisted in designing event concepts and activity flows for new student orientation programs.",
        },
        {
        title: "Event Staff",
        place: "Informatics Championship (IC)",
        date: "2022 & 2023",
        desc: "Supported competition execution through technical coordination and event planning for sports and arts activities.",
        },
        {
        title: "Event Staff",
        place: "General Election Committee (Pemira)",
        date: "2023 & 2024",
        desc: "Participated in event planning and contributed to the development of a vote-counting system for student organization elections.",
        },
        {
        title: "Treasurer",
        place: "Soedirman Technophoria (S-Tech)",
        date: "2023",
        desc: "Managed event finances, including budgeting, income tracking, and expenditure reporting to ensure accurate financial administration.",
        },
    ],
    },

    footer: {
    bgText: "THANK YOU",
    label: "Let's Connect",

    title: {
        line1: "Let's build",
        line2: "something together.",
    },

    desc:
         "Thank you for visiting my portfolio. I am open to job opportunities, collaborations, and discussions related to data analytics, business intelligence, machine learning, and data-driven decision making.",

    role:
        "Data Analyst | Business Intelligence Enthusiast",

    copyright: "All rights reserved.",

    links: {
        github: "GitHub",
        linkedin: "LinkedIn",
        email: "Email",
    },
    },
  },
};