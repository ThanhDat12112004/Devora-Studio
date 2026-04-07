import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/60 border-t border-primary-foreground/10 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={logo} alt="Devora Studio" className="h-9 w-auto" loading="lazy" />
        <p className="text-xs">
          © 2026 Devora Studio. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-xs hover:text-primary transition-colors">Chính sách</a>
          <a href="#" className="text-xs hover:text-primary transition-colors">Điều khoản</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
