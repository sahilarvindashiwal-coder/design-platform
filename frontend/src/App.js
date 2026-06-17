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
const removeEmergentBadge = () => {
// Remove by ID
document.getElementById("emergent-badge")?.remove();

```
  // Remove by link target
  document.querySelectorAll('a[href*="app.emergent.sh"]').forEach((el) => {
    el.remove();
  });

  // Remove by text content
  document.querySelectorAll("a, div, p, span").forEach((el) => {
    if (
      el.textContent &&
      el.textContent.trim().includes("Made with Emergent")
    ) {
      el.remove();
    }
  });
};

// Initial removal
removeEmergentBadge();

// Keep checking in case it gets injected later
const interval = setInterval(removeEmergentBadge, 500);

// Watch DOM for new elements
const observer = new MutationObserver(() => {
  removeEmergentBadge();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

return () => {
  clearInterval(interval);
  observer.disconnect();
};
```

}, []);

return (
<div
className="site-bg text-white min-h-screen relative"
style={{ backgroundImage: `url(${ASSETS.bgEntire})` }}
data-testid="landing-root"
> <div className="mobile-shell"> <Navigation /> <Hero /> <BrandMarquee /> <TrustSection /> <SectionDivider id="divider-after-trust" /> <Collection /> <SectionDivider id="divider-after-collection" /> <Craftsmanship /> <SectionDivider id="divider-after-craft" /> <HowToOrder /> <SectionDivider id="divider-after-process" /> <Testimonials /> <SectionDivider id="divider-after-stories" /> <FaqAndCTA /> <Footer /> <FloatingWhatsApp /> </div> </div>
);
};

function App() {
return ( <div className="App"> <BrowserRouter basename={process.env.PUBLIC_URL}> <Routes>
<Route path="/" element={<Landing />} /> </Routes> </BrowserRouter> </div>
);
}

export default App;
