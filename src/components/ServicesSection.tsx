import { Globe, TrendingUp, Palette } from "lucide-react";
import ScrollAnimate from "./ScrollAnimate";

const services = [
  {
    num: "01",
    icon: Globe,
    title: "Thiết kế Website",
    desc: "Hơn 6+ năm kinh nghiệm trong việc lên kế hoạch và thực hiện website cho tất cả loại hình doanh nghiệp trên thị trường.",
    tags: ["Thiết kế App", "Website Doanh Nghiệp", "Website Bán Hàng", "Website Bất Động Sản"],
  },
  {
    num: "02",
    icon: TrendingUp,
    title: "Marketing Online",
    desc: "Lên kế hoạch marketing online cụ thể nhằm thúc đẩy doanh số, lan tỏa thương hiệu nhanh chóng đến cộng đồng người tiêu dùng.",
    tags: ["Dịch vụ SEO", "Google Ads", "Facebook Ads", "Chăm sóc Fanpage"],
  },
  {
    num: "03",
    icon: Palette,
    title: "Nhận diện thương hiệu",
    desc: "Dù che đi logo vẫn nhận diện được thương hiệu bạn giữa hàng trăm đối thủ cạnh tranh trên thị trường.",
    tags: ["Thiết kế Logo", "Name Card", "Catalogue", "Profile"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-card">
      <div className="container mx-auto">
        <ScrollAnimate>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground">
              <span className="text-gradient">Devora Studio</span> — Với sứ mệnh
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Xây dựng website <strong className="text-foreground">chuyên nghiệp</strong> & đưa ra các giải pháp chuyên sâu về lĩnh vực{" "}
              <strong className="text-foreground">Digital Marketing</strong>
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Devora Studio sinh ra để đồng hành cùng bạn xây dựng và hoạch định chiến lược phát triển thương hiệu toàn diện trên thị trường Online với những dịch vụ vượt trội: Thiết kế Website, SEO, Sáng tạo nội dung, Google Ads, Facebook Ads...
            </p>
          </div>
        </ScrollAnimate>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ScrollAnimate key={s.num} delay={i * 150}>
              <div className="group relative p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 h-full">
                <span className="text-6xl font-black text-border/60 absolute top-4 right-6 font-heading">
                  {s.num}
                </span>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-heading text-foreground mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full bg-secondary text-muted-foreground font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
