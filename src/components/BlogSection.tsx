import { ArrowRight } from "lucide-react";
import ScrollAnimate from "./ScrollAnimate";

const posts = [
  {
    title: "Xu Hướng Thiết Kế Website 2026",
    category: "Chia sẻ",
    excerpt: "Khám phá những xu hướng thiết kế web mới nhất giúp nâng cao trải nghiệm người dùng.",
  },
  {
    title: "SEO Onpage Là Gì? Hướng Dẫn Chi Tiết",
    category: "Chia sẻ",
    excerpt: "Tìm hiểu cách tối ưu hóa SEO Onpage để website luôn đứng top Google.",
  },
  {
    title: "5 Lý Do Nên Có Website Riêng",
    category: "Kiến thức",
    excerpt: "Tại sao doanh nghiệp cần đầu tư vào website chuyên nghiệp ngay bây giờ.",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding">
      <div className="container mx-auto">
        <ScrollAnimate>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Our Blog</p>
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading">
              Kiến thức <span className="text-gradient">Website</span>
            </h2>
          </div>
        </ScrollAnimate>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <ScrollAnimate key={i} delay={i * 150}>
              <div className="group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-lg transition-shadow h-full">
                <div className="h-48 bg-secondary flex items-center justify-center">
                  <span className="text-6xl font-black text-border/50 font-heading">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-primary uppercase">{post.category}</span>
                  <h3 className="mt-2 text-base font-bold text-foreground font-heading line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  <button className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Chi tiết <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
