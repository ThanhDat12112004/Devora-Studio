import { Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto text-center max-w-3xl">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
          <Heart className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground">
          <span className="text-gradient">Devora Studio</span> — Với sứ mệnh
        </h2>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Xây dựng website <strong className="text-foreground">chuyên nghiệp</strong> & đưa ra các giải pháp chuyên sâu về lĩnh vực{" "}
          <strong className="text-foreground">Digital Marketing</strong>
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Devora Studio sinh ra để đồng hành cùng bạn xây dựng và hoạch định chiến lược phát triển thương hiệu toàn diện trên thị trường Online với những dịch vụ vượt trội: Thiết kế Website, SEO, Sáng tạo nội dung, Google Ads, Facebook Ads…
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
