import { ReactNode, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type BlogPostLayoutProps = {
  title: string;
  seoTitle: string;
  metaDescription: string;
  coverImage: string;
  category: string;
  children: ReactNode;
};

const BlogPostLayout = ({ title, seoTitle, metaDescription, coverImage, category, children }: BlogPostLayoutProps) => {
  useEffect(() => {
    document.title = seoTitle;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", metaDescription);
  }, [seoTitle, metaDescription]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 md:pt-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground">
                {category}
              </span>
              <h1 className="mt-4 text-3xl md:text-4xl font-extrabold font-heading text-foreground leading-tight">
                {title}
              </h1>
              <p className="mt-3 text-sm text-muted-foreground">
                {metaDescription}
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-sm">
              <img
                src={coverImage}
                alt={title}
                width={1600}
                height={900}
                className="w-full h-64 md:h-80 object-cover"
                loading="lazy"
              />
            </div>

            <article className="mt-10 text-foreground">
              <div className="max-w-4xl space-y-5 text-base leading-8 text-muted-foreground">
                {children}
              </div>
            </article>

            <div className="mt-12 rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-bold text-foreground font-heading">Sẵn sàng triển khai website theo nội dung bài viết?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Nhắn cho mình để được tư vấn lộ trình phù hợp, tối ưu UX + tốc độ + SEO ngay từ đầu.
              </p>
              <a
                href="/#contact"
                className="mt-4 inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Liên hệ tư vấn
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostLayout;

