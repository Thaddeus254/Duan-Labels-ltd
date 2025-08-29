import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp logo

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/254796586862?text=Hello%20Duan%20Labels%20Ltd%20👋%2C%20I’m%20interested%20in%20your%20labeling%20and%20branding%20services.%20Could%20you%20please%20share%20more%20details%20about%20your%20products%2C%20pricing%2C%20and%20how%20to%20place%20an%20order%3F%20Thank%20you!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg 
                   hover:bg-[#20b858] transition-all duration-300 animate-bounce 
                   ring-4 ring-[#25D366]/40 hover:ring-[#25D366]/60"
      >
        <FaWhatsapp className="w-7 h-7 drop-shadow-md" />
      </a>
    </>
  );
};

export default ScrollToTop;
