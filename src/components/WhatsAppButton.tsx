import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "254724022016";

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent("Hello! I'm interested in your safari services. Can you help me?");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  );
};

export default WhatsAppButton;
