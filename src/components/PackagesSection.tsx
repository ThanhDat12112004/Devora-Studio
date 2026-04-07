import { Check } from "lucide-react";
import ScrollAnimate from "./ScrollAnimate";
import { Button } from "@/components/ui/button";

type PackageItem = {
  badge?: string;
  title: string;
  subtitle: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

const packages: PackageItem[] = [
  {
    badge: "Starter",
    title: "Landing / Website gọn",
    subtitle: "Phù hợp khi bạn cần ra mắt nhanh và tập trung một dịch vụ chủ lực.",
    features: [
      "Thông điệp rõ + CTA nổi bật",
      "Hiển thị đẹp trên mobile",
      "Form liên hệ gọn, dễ điền",
      "Cơ bản để dễ tìm trên Google",
    ],
    cta: "Nhận tư vấn gói Starter",
  },
  {
    badge: "Most chosen",
    title: "Website doanh nghiệp",
    subtitle: "Dành cho doanh nghiệp cần nhiều trang dịch vụ và nội dung để tăng tin cậy.",
    features: [
      "Cấu trúc trang rõ theo từng dịch vụ",
      "Trang dự án / giới thiệu / liên hệ",
      "Khu vực cập nhật bài viết (tuỳ nhu cầu)",
      "Tối ưu để khách đọc và liên hệ",
    ],
    cta: "Nhận tư vấn gói Business",
    highlighted: true,
  },
  {
    badge: "Premium",
    title: "Website + tích hợp",
    subtitle: "Khi bạn cần nhiều luồng, nhiều form, tích hợp hệ thống sẵn có hoặc quy trình bán hàng.",
    features: [
      "Nhiều trang + nhiều luồng chuyển đổi",
      "Tích hợp email/CRM theo nhu cầu",
      "Chuẩn hoá nội dung theo thương hiệu",
      "Hỗ trợ cập nhật & nâng cấp",
    ],
    cta: "Trao đổi gói Premium",
  },
];

const PackagesSection = () => {
  return (
    <section id="packages" className="section-padding">
      <div className="container mx-auto">
        <ScrollAnimate>
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
              Packages
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading">
              Chọn gói <span className="text-gradient">phù hợp</span> với mục tiêu
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              3 lựa chọn rõ ràng để bạn ra quyết định nhanh. Có thể tuỳ biến theo ngành và nhu cầu thực tế.
            </p>
          </div>
        </ScrollAnimate>

        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {packages.map((p, i) => (
            <ScrollAnimate key={p.title} delay={i * 120}>
              <div
                className={[
                  "relative rounded-2xl bg-card border border-border p-7 md:p-8 h-full",
                  "shadow-sm",
                  p.highlighted ? "border-primary/30 shadow-xl shadow-primary/10" : "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all",
                ].join(" ")}
              >
                {p.badge && (
                  <div className="inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold bg-secondary text-foreground mb-6">
                    {p.badge}
                  </div>
                )}

                <h3 className="text-xl md:text-2xl font-extrabold font-heading text-foreground">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {p.subtitle}
                </p>

                <ul className="mt-6 space-y-3 text-sm text-foreground/90">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10">
                        <Check className="w-4 h-4 text-primary" />
                      </span>
                      <span className="leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button asChild className={p.highlighted ? "w-full h-11 rounded-xl" : "w-full h-11 rounded-xl"} variant={p.highlighted ? "default" : "outline"}>
                    <a href="#contact">{p.cta}</a>
                  </Button>
                </div>

                {p.highlighted && (
                  <div className="pointer-events-none absolute inset-x-6 -bottom-6 h-12 rounded-2xl bg-primary/20 blur-2xl" />
                )}
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;

