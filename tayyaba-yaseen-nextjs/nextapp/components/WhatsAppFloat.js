import { WhatsAppIcon } from "@/lib/icons";
import { WHATSAPP_URL } from "@/lib/config";

export default function WhatsAppFloat() {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat on WhatsApp">
      <WhatsAppIcon />
    </a>
  );
}
