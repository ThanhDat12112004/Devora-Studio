import logoHero from "@/assets/logo_hero.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/75 border-t border-primary-foreground/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <img src={logoHero} alt="Devora Studio" className="h-10 w-auto" loading="lazy" />
            <p className="mt-3 text-sm text-primary-foreground/60">
              Thiết kế website chuyên nghiệp, tối ưu SEO và chuyển đổi cho doanh nghiệp vừa và nhỏ.
            </p>
            <a
              href="tel:0949927642"
              className="mt-4 inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-400 via-primary to-blue-500 px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md shadow-cyan-400/30 hover:opacity-90 transition-opacity"
            >
              Gọi tư vấn: 0949 927 642
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold text-primary-foreground mb-3">Điều hướng nhanh</p>
            <div className="flex flex-col gap-2">
              <a href="#packages" className="text-sm hover:text-primary transition-colors">Gói dịch vụ</a>
              <a href="#projects" className="text-sm hover:text-primary transition-colors">Dự án</a>
              <a href="#blog" className="text-sm hover:text-primary transition-colors">Blog</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Liên hệ</a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-primary-foreground mb-3">Thông tin</p>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/65">
              <span>TP. Hồ Chí Minh, Việt Nam</span>
              <a href="mailto:devduongthanhdat@gmail.com" className="hover:text-primary transition-colors">
                devduongthanhdat@gmail.com
              </a>
              <a href="https://www.facebook.com/devduongthanhdat/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                facebook.com/devduongthanhdat
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-4 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/50">
          <span>© 2026 Devora Studio. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary transition-colors">Chính sách</a>
            <a href="#" className="hover:text-primary transition-colors">Điều khoản</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
