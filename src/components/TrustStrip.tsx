import { ShieldCheck, Rocket, Sparkles, Wallet } from "lucide-react";
import { useRef } from "react";
import { useAutoHorizontalScroll } from "@/hooks/useAutoHorizontalScroll";

const items = [
  {
    icon: Rocket,
    title: "Triển khai nhanh",
    desc: "Có thể chạy bản đầu trong 5-10 ngày",
  },
  {
    icon: ShieldCheck,
    title: "Chuẩn SEO kỹ thuật",
    desc: "Tối ưu cấu trúc, tốc độ và index ngay từ đầu",
  },
  {
    icon: Sparkles,
    title: "Thiết kế khác biệt",
    desc: "Bố cục nổi bật, rõ thông điệp và tăng chuyển đổi",
  },
  {
    icon: Wallet,
    title: "Chi phí hợp lý",
    desc: "Giải pháp giá tốt cho doanh nghiệp nhỏ và vừa",
  },
];

const TrustStrip = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useAutoHorizontalScroll(scrollRef, 0.3);

  return (
    <section className="-mt-3 md:-mt-5 relative z-20">
      <div ref={scrollRef} className="flex md:grid md:grid-cols-4 gap-0 border-y border-border bg-card/95 backdrop-blur shadow-sm overflow-x-auto overflow-y-hidden md:overflow-hidden snap-x snap-mandatory md:snap-none touch-pan-x overscroll-x-contain">
        {items.map((item, index) => (
          <div key={item.title} className="relative p-4 text-center min-w-[88%] sm:min-w-[60%] md:min-w-0 snap-start">
            {index > 0 && (
              <span className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-16 bg-border" />
            )}
            <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary">
              <item.icon className="w-4 h-4" />
            </div>
            <p className="mt-2 text-sm font-bold text-foreground clamp-2">{item.title}</p>
            <p className="mt-1 text-[11px] leading-4 text-muted-foreground clamp-2">{item.desc}</p>
          </div>
        ))}
        </div>
    </section>
  );
};

export default TrustStrip;

