import heroTeam from "@/assets/hero-team.jpg";
import logoHero from "@/assets/logo_hero.png";
import heroBg from "@/assets/hero-bg.svg";
import { ArrowRight, CheckCircle } from "lucide-react";

const highlights = [
  "100% khách hàng hài lòng",
];

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden pt-24 pb-14 md:pt-28 md:pb-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-white/25" />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-10 items-center relative z-10">
        {/* Left */}
        <div className="animate-fade-in-up">
          {/* Brand badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Digital Agency #1
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold font-heading leading-[1.15]">
            <span className="text-gradient">THIẾT KẾ WEBSITE</span>
            <br />
            <span className="text-foreground">CHUYÊN NGHIỆP</span>
            <br />
            <span className="text-foreground">CÙNG </span>
            <span className="relative inline-block">
              <span className="text-gradient">DEVORA</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8 C50 2, 150 2, 198 8" stroke="hsl(200, 85%, 48%)" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-md leading-relaxed">
            Chuyển đổi số online — Bứt phá doanh nghiệp bền vững với giải pháp website & digital marketing toàn diện.
          </p>

          {/* Highlights */}
          <div className="mt-6 flex flex-wrap gap-4">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/70 border border-primary/10">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{h}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 text-white font-extrabold text-base border border-cyan-100/70 shadow-[0_0_0_2px_rgba(255,255,255,0.42),0_16px_40px_-12px_rgba(14,165,233,0.65)] hover:shadow-[0_0_0_2px_rgba(255,255,255,0.6),0_22px_48px_-12px_rgba(14,165,233,0.75)] transition-all duration-300 hover:-translate-y-1"
            >
              <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cyan-200/50 to-blue-300/40 blur opacity-60 -z-10" />
              <span className="[text-shadow:_0_1px_1px_rgba(0,0,0,0.35),_0_0_10px_rgba(255,255,255,0.2)]">
                Nhận báo giá miễn phí
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl border-2 border-primary/40 bg-white/90 text-foreground font-bold text-sm shadow-md shadow-primary/10 hover:border-primary hover:bg-white hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
            >
              Xem dự án
            </a>
          </div>
        </div>

        {/* Right — hero image with decorative frame */}
        <div className="relative flex justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {/* Decorative frame behind image */}
          <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl border-2 border-primary/20" />
          <div className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl bg-primary/5" />

          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border w-full max-w-[560px]">
            <img
              src={heroTeam}
              alt="Đội ngũ Devora Studio"
              width={1280}
              height={800}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />

            {/* Overlay brand logo */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-foreground/65 to-transparent">
              <img
                src={logoHero}
                alt="Devora Studio logo"
                className="h-10 md:h-14 w-auto drop-shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path
            d="M0 60L48 52C96 44 192 28 288 22C384 16 480 20 576 28C672 36 768 48 864 48C960 48 1056 36 1152 28C1248 20 1344 16 1392 14L1440 12V60H0Z"
            fill="hsl(var(--card))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
