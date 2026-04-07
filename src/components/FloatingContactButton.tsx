import { Facebook, Mail, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const PHONE_RAW = "0949927642";
const PHONE_LABEL = "0949 927 642";
const EMAIL = "devduongthanhdat@gmail.com";
const ZALO_URL = "https://zalo.me/0949927642";
const FACEBOOK_URL = "https://www.facebook.com/devduongthanhdat/";

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { label: "Gọi ngay", href: `tel:${PHONE_RAW}`, icon: Phone, className: "bg-primary text-primary-foreground" },
    { label: "Nhắn Zalo", href: ZALO_URL, icon: MessageCircle, className: "bg-blue-500 text-white" },
    { label: "Facebook", href: FACEBOOK_URL, icon: Facebook, className: "bg-[#1877F2] text-white" },
    { label: "Email", href: `mailto:${EMAIL}`, icon: Mail, className: "bg-secondary text-foreground" },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      {isOpen && (
        <div className="flex flex-col items-end gap-2">
          {actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target={action.href.startsWith("http") ? "_blank" : undefined}
              rel={action.href.startsWith("http") ? "noreferrer" : undefined}
              className={`inline-flex items-center gap-2 rounded-full px-3 py-2 shadow-lg ${action.className}`}
            >
              <action.icon className="w-4 h-4" />
              <span className="text-xs font-semibold">{action.label}</span>
            </a>
          ))}
        </div>
      )}

      <Button
        size="icon"
        className="rounded-full h-12 w-12 shadow-lg shadow-primary/30 bg-gradient-to-r from-primary to-cyan-500 text-primary-foreground"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Đóng liên hệ nhanh" : `Mở liên hệ nhanh ${PHONE_LABEL}`}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Phone className="w-5 h-5" />}
      </Button>
    </div>
  );
};

export default FloatingContactButton;

