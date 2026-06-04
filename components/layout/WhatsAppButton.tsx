import { COMPANY } from "@/lib/constants";
import { IconWhatsApp } from "@/components/ui/Icons";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    `Hello ${COMPANY.name}, I would like to inquire about solar installation.`
  );
  const href = `https://wa.me/${COMPANY.whatsapp}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform animate-pulse-glow"
      aria-label="Chat on WhatsApp"
    >
      <IconWhatsApp className="w-7 h-7" />
    </a>
  );
}
