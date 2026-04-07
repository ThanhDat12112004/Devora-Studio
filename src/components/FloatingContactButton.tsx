import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE_RAW = "0949927642";
const PHONE_LABEL = "0949 927 642";
const EMAIL = "devduongthanhdat@gmail.com";

const FloatingContactButton = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2">
      <Button asChild size="icon" className="rounded-full h-12 w-12 shadow-lg shadow-primary/20">
        <a href={`tel:${PHONE_RAW}`} aria-label={`Gọi ${PHONE_LABEL}`}>
          <Phone className="w-5 h-5" />
        </a>
      </Button>
      <Button asChild size="icon" variant="secondary" className="rounded-full h-12 w-12 shadow-lg">
        <a href={`mailto:${EMAIL}`} aria-label={`Email ${EMAIL}`}>
          <Mail className="w-5 h-5" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingContactButton;

