import { useState } from "react";

import "../styles/Home.css";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import AboutStory from "../components/AboutStory.jsx";
import Mission from "../components/Mission.jsx";
import Services from "../components/Services.jsx";
import Testimonials from "../components/Testimonials.jsx";
import CallToAction from "../components/CallToAction.jsx";
import ContactSection from "../components/ContactSection.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  const [showAboutStory, setShowAboutStory] = useState(false);

  const handleShowAboutStory = () => {
    setShowAboutStory(true);

    setTimeout(() => {
      document.getElementById("mi-historia")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const handleHideAboutStory = () => {
    setShowAboutStory(false);

    setTimeout(() => {
      document.getElementById("sobre-mi")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <main className="home">
      
      <Header />
      <Hero />
      <About onShowStory={handleShowAboutStory} />

      {showAboutStory && (
        <AboutStory onHideStory={handleHideAboutStory} />
      )}
      
      <Mission />
      <Services />
      <Testimonials />
      <CallToAction />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default Home;