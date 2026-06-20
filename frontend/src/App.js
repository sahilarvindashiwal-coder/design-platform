import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import useLenis from "./hooks/useLenis";
import SiteLayout from "./components/layout/SiteLayout";
import Hero from "./components/Hero";
import BrandMarquee from "./components/BrandMarquee";
import TrustSection from "./components/TrustSection";
import Collection from "./components/Collection";
import Craftsmanship from "./components/Craftsmanship";
import HowToOrder from "./components/HowToOrder";
import Testimonials from "./components/Testimonials";
import FaqAndCTA from "./components/FaqAndCTA";
import SectionDivider from "./components/SectionDivider";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";

const LandingPage = () => {
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

  useEffect(() => {
    const hash = window.location.hash?.slice(1);
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }, []);

  return (
    <>
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
    </>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL || undefined}>
        <Routes>
          <Route
            path="/"
            element={
              <SiteLayout>
                <LandingPage />
              </SiteLayout>
            }
          />
          <Route
            path="/products"
            element={
              <SiteLayout>
                <ProductsPage />
              </SiteLayout>
            }
          />
          <Route
            path="/products/:productId"
            element={
              <SiteLayout>
                <ProductDetailPage />
              </SiteLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
