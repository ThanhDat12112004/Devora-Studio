import { Star } from "lucide-react";
import { useRef } from "react";
import ScrollAnimate from "./ScrollAnimate";
import { useAutoHorizontalScroll } from "@/hooks/useAutoHorizontalScroll";

const testimonials = [
  {
    name: "Nguyễn Văn Minh",
    role: "CEO, Công ty ABC",
    text: "Devora Studio đã giúp chúng tôi xây dựng website chuyên nghiệp, tăng lượng khách hàng online lên 200% chỉ sau 3 tháng.",
  },
  {
    name: "Trần Thị Lan",
    role: "Giám đốc Marketing",
    text: "Đội ngũ rất nhiệt tình và sáng tạo. Website được thiết kế đẹp, chuẩn SEO và hoạt động rất mượt mà.",
  },
  {
    name: "Lê Hoàng Phúc",
    role: "Founder, Startup XYZ",
    text: "Chất lượng dịch vụ vượt xa mong đợi. Tôi đặc biệt ấn tượng với khả năng hiểu và truyền tải thương hiệu qua thiết kế.",
  },
];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useAutoHorizontalScroll(scrollRef);

  return (
    <section className="section-padding bg-card spotlight-section">
      <div className="container mx-auto">
        <ScrollAnimate>
          <div className="section-head">
            <span className="section-kicker">Testimonials</span>
            <h2 className="section-title font-heading">
              Khách hàng đánh giá về <span className="text-gradient">dịch vụ</span>
            </h2>
            <div className="flex items-center justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
              <span className="ml-2 text-muted-foreground text-sm">4.9 / 5 (69 đánh giá)</span>
            </div>
          </div>
        </ScrollAnimate>
        <div ref={scrollRef} className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto overflow-y-hidden md:overflow-visible snap-x snap-mandatory md:snap-none -mx-4 px-4 md:mx-0 md:px-0 touch-pan-x overscroll-x-contain">
          {testimonials.map((t, i) => (
            <ScrollAnimate key={t.name} delay={i * 150} className="min-w-[88%] sm:min-w-[70%] md:min-w-0 snap-start">
              <div className="card-pop p-6 rounded-2xl bg-background/90 border border-border h-full relative">
                <span className="absolute -top-3 left-5 text-3xl text-primary/40 font-black">"</span>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {t.text}
                </p>
                <div className="pt-4 border-t border-border/60">
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
