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
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import ReturnsPolicyPage from "./pages/ReturnsPolicyPage";

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
      <Collection />
      <Craftsmanship />
      <HowToOrder />
      <Testimonials />
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
          <Route
            path="/privacy"
            element={
              <SiteLayout>
                <PrivacyPolicyPage />
              </SiteLayout>
            }
          />
          <Route
            path="/terms"
            element={
              <SiteLayout>
                <TermsPage />
              </SiteLayout>
            }
          />
          <Route
            path="/returns"
            element={
              <SiteLayout>
                <ReturnsPolicyPage />
              </SiteLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
