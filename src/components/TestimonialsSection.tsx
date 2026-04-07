import { Star } from "lucide-react";

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
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading">
            Khách hàng đánh giá về <span className="text-gradient">dịch vụ</span>
          </h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
            <span className="ml-2 text-muted-foreground text-sm">4.9 / 5 (69 đánh giá)</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-background border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
