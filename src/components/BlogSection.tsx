import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import ScrollAnimate from "./ScrollAnimate";
import xuHuongTkWeb2026 from "@/assets/xuhuong_tkweb2026.png";
import seoImage from "@/assets/seo.png";
import taiSaoCanWebImage from "@/assets/taisaocanweb.png";
import { Link } from "react-router-dom";
import { useAutoHorizontalScroll } from "@/hooks/useAutoHorizontalScroll";

const posts = [
  {
    title: "Xu Hướng Thiết Kế Website 2026",
    category: "Chia sẻ",
    excerpt: "Khám phá những xu hướng thiết kế web mới nhất giúp nâng cao trải nghiệm người dùng.",
    image: xuHuongTkWeb2026,
    href: "/blog/xu-huong-thiet-ke-website-2026",
  },
  {
    title: "SEO Onpage Là Gì? Hướng Dẫn Chi Tiết",
    category: "Chia sẻ",
    excerpt: "Tìm hiểu cách tối ưu hóa SEO Onpage để website luôn đứng top Google.",
    image: seoImage,
    href: "/blog/seo-onpage-la-gi",
  },
  {
    title: "5 Lý Do Nên Có Website Riêng",
    category: "Kiến thức",
    excerpt: "Tại sao doanh nghiệp cần đầu tư vào website chuyên nghiệp ngay bây giờ.",
    image: taiSaoCanWebImage,
    href: "/blog/5-ly-do-nen-co-website-rieng",
  },
];

const BlogSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useAutoHorizontalScroll(scrollRef);

  return (
    <section id="blog" className="section-padding spotlight-section">
      <div className="container mx-auto">
        <ScrollAnimate>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Our Blog</p>
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading">
              Kiến thức <span className="text-gradient">Website</span>
            </h2>
          </div>
        </ScrollAnimate>
        <div ref={scrollRef} className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto overflow-y-hidden md:overflow-visible snap-x snap-mandatory md:snap-none -mx-4 px-4 md:mx-0 md:px-0 touch-pan-x overscroll-x-contain">
          {posts.map((post, i) => (
            <ScrollAnimate key={post.title} delay={i * 150} className="min-w-[88%] sm:min-w-[70%] md:min-w-0 snap-start">
              <div className="group card-pop rounded-2xl bg-card border border-border overflow-hidden h-full">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  width={1200}
                  height={630}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <span className="text-xs font-bold text-muted-foreground/80 mr-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-semibold text-primary uppercase">{post.category}</span>
                  <h3 className="mt-2 text-base font-bold text-foreground font-heading line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  <Link
                    to={post.href}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all"
                  >
                    Chi tiết <ArrowRight className="w-4 h-4" />
                  </Link>
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
