import { useState } from "react";
import { content } from "./data/content";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SoftSkills from "./components/SoftSkills";
import TechStack from "./components/TechStack";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import CvModal from "./components/CvModal";
import Contact from "./components/Contact";

function App() {
  const [language, setLanguage] = useState("en");
  const [openMenu, setOpenMenu] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [openCV, setOpenCV] = useState(false);

  const t = content[language];

  return (
    <>
      <Navbar
        language={language}
        setLanguage={setLanguage}
        t={t}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        setOpenContact={setOpenContact}
      />

      <Hero t={t} setOpenCV={setOpenCV} />
      <About t={t} />
      <SoftSkills t={t} />
      <TechStack t={t} />
      <Certifications t={t} />
      <Projects t={t} />
      <Experience t={t} />
      <Footer t={t} />

      <CvModal
        open={openCV}
        onClose={() => setOpenCV(false)}
        t={t}
        language={language}
      />

      <Contact
        open={openContact}
        onClose={() => setOpenContact(false)}
        t={t}
        language={language}
      />

    </>
  );
}

export default App;