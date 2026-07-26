function FloatingWhatsApp({ business }) {
  return (
    <a
      href={`https://wa.me/${business.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl hover:bg-green-600 hover:scale-110 transition-all duration-300 z-50"
    >
      💬
    </a>
  );
}

export default FloatingWhatsApp;