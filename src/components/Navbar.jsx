import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function Navbar({
    language,
    setLanguage,
    t,
    openMenu,
    setOpenMenu,
    setOpenContact,
  }) {
  const [theme, setTheme] = useState("light");
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { label: t.nav.home, href: "#home", id: "home" },
    { label: t.nav.about, href: "#about", id: "about" },
    { label: t.nav.projects, href: "#projects", id: "projects" },
    { label: t.nav.experience, href: "#experience", id: "experience" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 70);
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = [
      { id: "home", theme: "hero", active: "home" },
      { id: "about", theme: "dark", active: "about" },
      { id: "softskills", theme: "light", active: null },
      { id: "techstack", theme: "dark", active: null },
      { id: "certifications", theme: "light", active: null },
      { id: "projects", theme: "dark", active: "projects" },
      { id: "experience", theme: "light", active: "experience" },
      { id: "footer", theme: "dark", active: null },
    ];

    const handleActiveSection = () => {
      const triggerPoint = window.innerHeight * 0.35;
      let currentSection = sections[0];

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
          currentSection = section;
        }
      });

      setTheme(currentSection.theme);
      setActiveSection(currentSection.active);
    };

    handleActiveSection();

    window.addEventListener("scroll", handleActiveSection);
    window.addEventListener("resize", handleActiveSection);

    return () => {
      window.removeEventListener("scroll", handleActiveSection);
      window.removeEventListener("resize", handleActiveSection);
    };
  }, []);

  const isDark = theme === "dark";
  const isHero = theme === "hero";

  const darkMode = isDark || isHero;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        fixed
        left-0
        top-0
        z-50
        w-full
        px-4
        pt-5
        md:px-8
      "
    >
      {/* SOFT NAV VEIL */}
      <div
        className={`
          pointer-events-none
          absolute
          left-0
          top-0
          -z-10
          h-24
          w-full
          transition-all
          duration-700
          ${
            scrolled
              ? darkMode
                ? "bg-[linear-gradient(to_bottom,rgba(18,9,5,0.58),rgba(18,9,5,0.18),transparent)]"
                : "bg-[linear-gradient(to_bottom,rgba(247,239,227,0.72),rgba(247,239,227,0.22),transparent)]"
              : "bg-transparent"
          }
        `}
      />

      <div
        className="
          mx-auto
          flex
          max-w-6xl
          items-center
          justify-between
          gap-4
        "
      >
        {/* BRAND */}
        <motion.a
          href="#home"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="
            group
            flex
            items-center
            gap-3
            no-underline
          "
        >
          <motion.div
            animate={{
              backgroundColor: darkMode ? "#F3E6D4" : "#4A2C2A",
              color: darkMode ? "#120905" : "#F3E6D4",
            }}
            transition={{ duration: 0.5 }}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              font-syne
              text-sm
              font-bold
              shadow-[0_14px_35px_rgba(18,9,5,0.20)]
            "
          >
            A
          </motion.div>

          <div className="leading-none">
            <p
              className={`
                font-syne
                text-[20px]
                font-bold
                tracking-[-0.05em]
                transition
                duration-500
                ${
                  darkMode
                    ? "text-[#FBF6EE] group-hover:text-[#D5B893]"
                    : "text-[#2B1A18] group-hover:text-[#8B675F]"
                }
              `}
            >
              Adila.
            </p>

            <p
              className={`
                mt-1
                hidden
                font-manrope
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.28em]
                transition
                duration-500
                sm:block
                ${
                  darkMode
                    ? "text-[#D5B893]/70"
                    : "text-[#4A2C2A]/45"
                }
              `}
            >
              Portfolio
            </p>
          </div>
        </motion.a>

        {/* DESKTOP NAV */}
        <motion.div
          animate={{ scale: scrolled ? 0.98 : 1 }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            hidden
            items-center
            gap-10
            md:flex
          "
        >
          {menuItems.map((item, index) => {
            const active = activeSection === item.id;

            return (
              <motion.a
                key={item.id}
                href={item.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.25 + index * 0.07,
                  duration: 0.4,
                }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`
                  group
                  relative
                  pb-2
                  font-manrope
                  text-[17px]
                  font-semibold
                  no-underline
                  transition
                  duration-300
                  ${
                    darkMode
                      ? "text-[#FBF6EE]/75 hover:text-[#FBF6EE]"
                      : "text-[#4A2C2A]/75 hover:text-[#2B1A18]"
                  }
                `}
              >
                <span>{item.label}</span>

                <span
                  className={`
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      active
                        ? "w-full bg-[#D5B893]"
                        : "w-0 bg-[#D5B893] group-hover:w-full"
                    }
                  `}
                />
              </motion.a>
            );
          })}

          <motion.button
            type="button"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setOpenContact(true)}
            className={`
              rounded-full
              px-7
              py-3.5
              font-manrope
              text-[15px]
              font-semibold
              transition-all
              duration-500
              ${
                darkMode
                  ? "bg-[#F3E6D4] text-[#120905] hover:bg-[#D5B893]"
                  : "bg-[#4A2C2A] text-[#F7EFE3] hover:bg-[#2B1A18]"
              }
            `}
          >
            {t.nav.contact}
          </motion.button>
        </motion.div>

        <div className="flex items-center rounded-full border border-[#F3E6D4]/18 bg-[#FBF6EE]/6 p-1 backdrop-blur-xl">
          {["en", "id"].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setLanguage(item)}
              className={`
                rounded-full
                px-3
                py-1.5
                font-manrope
                text-[11px]
                font-bold
                uppercase
                transition
                ${
                  language === item
                    ? darkMode
                      ? "bg-[#F3E6D4] text-[#120905]"
                      : "bg-[#4A2C2A] text-[#F7EFE3]"
                    : darkMode
                    ? "text-[#FBF6EE]/65"
                    : "text-[#4A2C2A]/55"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>      

        {/* MOBILE BUTTON */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.92 }}
          onClick={() => setOpenMenu(!openMenu)}
          className={`
            relative
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            backdrop-blur-2xl
            transition-all
            duration-700
            md:hidden
            ${
              darkMode
                ? "border-[#F3E6D4]/18 bg-[#120905]/48"
                : "border-[#4A2C2A]/12 bg-[#F7EFE3]/78"
            }
          `}
        >
          <span className="sr-only">Toggle menu</span>

          {[17, 23, 29].map((top, i) => (
            <motion.span
              key={i}
              animate={
                openMenu
                  ? i === 0
                    ? { rotate: 45, y: 6 }
                    : i === 1
                    ? { opacity: 0 }
                    : { rotate: -45, y: -6 }
                  : { rotate: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 0.25 }}
              className={`
                absolute
                h-[2px]
                w-5
                rounded-full
                ${darkMode ? "bg-[#F3E6D4]" : "bg-[#4A2C2A]"}
              `}
              style={{ top: `${top}px` }}
            />
          ))}
        </motion.button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{
              duration: 0.32,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`
              md:hidden
              mx-auto
              mt-5
              max-w-6xl
              px-6
              py-6
              rounded-[2rem]
              border
              backdrop-blur-2xl
              transition-all
              duration-700
              ${
                darkMode
                  ? "border-[#F3E6D4]/14 bg-[#120905]/92 shadow-[0_24px_70px_rgba(0,0,0,0.32)]"
                  : "border-[#4A2C2A]/10 bg-[#F7EFE3]/92 shadow-[0_22px_60px_rgba(74,44,42,0.14)]"
              }
            `}
          >
            <div className="flex flex-col gap-5">
              {menuItems.map((item, index) => {
                const active = activeSection === item.id;

                return (
                  <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={() => setOpenMenu(false)}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.28,
                  }}
                  className={`
                    group
                    relative
                    w-fit
                    pb-2
                    font-manrope
                    text-[20px]
                    font-semibold
                    no-underline
                    transition
                    duration-300
                    drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]
                    ${
                      darkMode
                        ? "text-[#FBF6EE]/95 hover:text-[#FFFFFF]"
                        : "text-[#4A2C2A]/90 hover:text-[#2B1A18]"
                    }
                  `}
                >
                    {item.label}

                    <span
                      className={`
                        absolute
                        bottom-0
                        left-0
                        h-[2px]
                        rounded-full
                        transition-all
                        duration-300
                        ${
                          active
                            ? "w-full bg-[#D5B893]"
                            : "w-0 bg-[#D5B893] group-hover:w-full"
                        }
                      `}
                    />
                  </motion.a>
                );
              })}

              <motion.button
                type="button"
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: menuItems.length * 0.05,
                  duration: 0.28,
                }}
                onClick={() => {
                  setOpenContact(true);
                  setOpenMenu(false);
                }}
                className={`
                  mt-2
                  w-fit
                  rounded-full
                  px-7
                  py-3
                  font-manrope
                  text-[15px]
                  font-semibold
                  transition-all
                  duration-500
                  ${
                    darkMode
                      ? "bg-[#F3E6D4] text-[#120905] hover:bg-[#D5B893]"
                      : "bg-[#4A2C2A] text-[#F7EFE3] hover:bg-[#2B1A18]"
                  }
                `}
              >
                Contact
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;