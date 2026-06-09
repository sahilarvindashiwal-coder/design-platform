import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useLenis from "./hooks/useLenis";
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
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen grain" data-testid="landing-root">
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
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
