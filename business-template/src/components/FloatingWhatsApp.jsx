import { FaWhatsapp } from "react-icons/fa";

function FloatingWhatsApp({ business }) {
  return (
    <a
      href={`https://wa.me/${business.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-2xl hover:bg-green-600 hover:scale-110 active:scale-95 transition-all duration-300 z-50"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}

export default FloatingWhatsApp;