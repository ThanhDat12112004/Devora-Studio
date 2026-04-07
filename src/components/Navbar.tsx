import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLocation } from "react-router-dom";

const navItems = [
  { label: "Thiết kế Website", href: "#services" },
  { label: "Dịch vụ", href: "#packages" },
  { label: "Dự án", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Liên hệ", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const homeHashPrefix = location.pathname === "/" ? "" : "/";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-sm" : "bg-background/85 backdrop-blur-md border-b border-border/60"
    }`}>
      <div className="container mx-auto flex items-center justify-between h-[52px] md:h-14 px-4">
        <a href="/" className="flex items-center gap-1" aria-label="Devora Studio">
          <img src={logo} alt="Devora Studio" className="h-6 md:h-7 w-auto" loading="eager" />
          <span className="hidden sm:inline text-sm md:text-base font-semibold tracking-tight text-foreground leading-none">
            Devora Studio
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={`${homeHashPrefix}${item.href}`}
                className="inline-flex items-center rounded-lg border border-transparent px-2.5 py-1 text-[15px] font-semibold text-muted-foreground hover:text-primary hover:border-primary/20 hover:bg-primary/5 transition-all"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`${homeHashPrefix}#contact`}
          className="hidden md:inline-flex px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-cyan-500 text-primary-foreground text-sm font-semibold shadow-md shadow-primary/30 hover:opacity-90 transition-opacity"
        >
          Liên hệ ngay
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/98 backdrop-blur px-4 pb-4">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={`${homeHashPrefix}${item.href}`}
                  className="block py-3 text-sm font-semibold text-foreground border-b border-border/70 hover:text-primary transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href={`${homeHashPrefix}#contact`}
                className="block py-2.5 text-center rounded-lg bg-primary text-primary-foreground text-sm font-bold"
                onClick={() => setIsOpen(false)}
              >
                Liên hệ ngay
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
