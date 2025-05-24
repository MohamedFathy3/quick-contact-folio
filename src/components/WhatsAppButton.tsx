
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const whatsappNumber = "201064621943";
  const message = "Hello! I'm interested in your development services.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="h-7 w-7 mx-auto" />
      
      {/* Pulse animation ring */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
    </button>
  );
};

export default WhatsAppButton;
