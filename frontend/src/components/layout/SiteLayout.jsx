import { ASSETS } from "../../config/assets";
import Navigation from "../Navigation";
import Footer from "../Footer";
import FloatingWhatsApp from "../FloatingWhatsApp";

export default function SiteLayout({ children }) {
  return (
    <div
      className="site-bg text-white min-h-screen relative"
      style={{ backgroundImage: `url(${ASSETS.bgEntire})` }}
    >
      <div className="mobile-shell">
        <Navigation />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </div>
    </div>
  );
}
