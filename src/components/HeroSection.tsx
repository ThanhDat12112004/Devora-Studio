import heroTeam from "@/assets/hero-team.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Left */}
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading leading-tight">
            <span className="text-gradient">THIẾT KẾ WEBSITE</span>
            <br />
            <span className="text-foreground">CHUYÊN NGHIỆP #1</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-md leading-relaxed">
            Chuyển đổi số online — Bứt phá doanh nghiệp bền vững cùng{" "}
            <strong className="text-foreground">Devora Studio</strong>
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
            >
              Nhận báo giá
            </a>
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-lg border-2 border-border text-foreground font-semibold text-sm hover:border-primary hover:text-primary transition-colors"
            >
              Xem dự án
            </a>
          </div>
        </div>

        {/* Right — hero image */}
        <div className="relative flex justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={heroTeam}
              alt="Đội ngũ Devora Studio"
              width={1280}
              height={800}
              className="w-full max-w-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
          </div>
          {/* floating badge */}
          <div className="absolute -bottom-4 -left-4 md:left-0 bg-card rounded-xl shadow-xl p-4 animate-float">
            <p className="text-3xl font-extrabold text-gradient">6+</p>
            <p className="text-xs text-muted-foreground font-medium">Năm kinh nghiệm</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
