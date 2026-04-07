import heroTeam from "@/assets/hero-team.jpg";
import { ArrowRight, CheckCircle } from "lucide-react";

const highlights = [
  "100% khách hàng hài lòng",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-hero">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 translate-y-1/2 -translate-x-1/4" />
      <div className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-primary/30 animate-float" />
      <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-primary/20 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/4 left-1/3 w-4 h-4 rounded-full bg-primary/15 animate-float" style={{ animationDelay: "2s" }} />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(hsl(200, 85%, 48%) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
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

          <p className="mt-8 text-lg text-muted-foreground max-w-md leading-relaxed">
            Chuyển đổi số online — Bứt phá doanh nghiệp bền vững với giải pháp website & digital marketing toàn diện.
          </p>

          {/* Highlights */}
          <div className="mt-6 flex flex-wrap gap-4">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{h}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Nhận báo giá miễn phí
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl border-2 border-border text-foreground font-semibold text-sm hover:border-primary hover:text-primary transition-colors"
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

          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border">
            <img
              src={heroTeam}
              alt="Đội ngũ Devora Studio"
              width={1280}
              height={800}
              className="w-full max-w-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />

            {/* Overlay brand watermark */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/60 to-transparent">
              <p className="text-2xl font-extrabold text-primary-foreground font-heading tracking-wider">
                DEVORA <span className="font-light">STUDIO</span>
              </p>
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
