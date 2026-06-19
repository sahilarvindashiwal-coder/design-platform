import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import useLenis from "./hooks/useLenis";
import { ASSETS } from "./config/assets";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import BrandMarquee from "./components/BrandMarquee";
import TrustSection from "./components/TrustSection";
import Collection from "./components/Collection";
import Craftsmanship from "./components/Craftsmanship";
import HowToOrder from "./components/HowToOrder";
import Testimonials from "./components/Testimonials";
import FaqAndCTA from "./components/FaqAndCTA";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import SectionDivider from "./components/SectionDivider";

const Landing = () => {
  useLenis();

  useEffect(() => {
    const removeEmergentBranding = () => {
      document
        .querySelectorAll(
          '#emergent-badge, a[href*="emergent.sh"], a[href*="app.emergent.sh"]'
        )
        .forEach((el) => el.remove());
    };

    removeEmergentBranding();

    const observer = new MutationObserver(removeEmergentBranding);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="site-bg text-white min-h-screen relative"
      style={{ backgroundImage: `url(${ASSETS.bgEntire})` }}
      data-testid="landing-root"
    >
      <div className="mobile-shell">
        <Navigation />
        <Hero />
        <BrandMarquee />
        <TrustSection />
        <SectionDivider id="divider-after-trust" />
        <Collection />
        <SectionDivider id="divider-after-collection" />
        <Craftsmanship />
        <SectionDivider id="divider-after-craft" />
        <HowToOrder />
        <SectionDivider id="divider-after-process" />
        <Testimonials />
        <SectionDivider id="divider-after-stories" />
        <FaqAndCTA />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
