import Navigation from "../Navigation";
import Footer from "../Footer";
import FloatingWhatsApp from "../FloatingWhatsApp";
import RibbonSiteBackground from "../RibbonSiteBackground";
import { SITE_SECTIONS } from "../../config/siteSections";

export default function SiteLayout({ children }) {
  return (
    <div className="site-bg text-white min-h-screen relative">
      <RibbonSiteBackground />
      <div className="mobile-shell">
        <Navigation />
        {children}
        <Footer />
        {SITE_SECTIONS.showFloatingWhatsApp && <FloatingWhatsApp />}
      </div>
    </div>
  );
}
