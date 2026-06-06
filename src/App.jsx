import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SoftSkills from "./components/SoftSkills";
import TechStack from "./components/TechStack";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import CvModal from "./components/CvModal";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [openCV, setOpenCV] = useState(false);

  return (
    <div className="relative z-10 min-h-screen font-poppins overflow-hidden text-[#3B2F28] bg-[linear-gradient(135deg,#FAF9F6_0%,#F4F1EA_18%,#E6DAC8_42%,#CBB9A4_70%,#A48D78_100%)]">

      <Navbar
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        setOpenContact={setOpenContact}
      />

      <Hero setOpenCV={setOpenCV} />

      <About />

      <SoftSkills />

      <TechStack />

      <Certifications />

      <Projects />

      <Experience />

      <Footer />

      <CvModal
        open={openCV}
        onClose={() => setOpenCV(false)}
      />

      <ContactModal
        open={openContact}
        onClose={() => setOpenContact(false)}
      />

    </div>
  );
}

export default App;