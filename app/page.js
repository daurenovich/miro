import Navbar from "./componentes/Navbar"
import HeroSection from "./componentes/HeroSection"
import LogoSection from "./componentes/LogoSection"
import Section from "./componentes/Section"
import WorkSection from "./componentes/WorkSection"
import BuiletSection from "./componentes/BuiletSection"
import BuiletSec from "./componentes/BuiletSec"
import ComSec from "./componentes/ComSec"
import TeSec from "./componentes/TeSec"
import Footer from "./componentes/Footer"

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <LogoSection />
      <Section />
      <WorkSection />
      <BuiletSection />
      <BuiletSec />
      <ComSec />
      <TeSec />
      <Footer />
    </div>
  );
}
