import BlogPostLayout from "./BlogPostLayout";
import cover from "@/assets/seo.png";

const SeoOnpageHuongDan = () => {
  return (
    <BlogPostLayout
      title="SEO Onpage là gì? Hướng dẫn chi tiết"
      seoTitle="SEO Onpage là gì? Hướng dẫn tối ưu chuẩn Google"
      metaDescription="Tìm hiểu SEO Onpage là gì với checklist tối ưu toàn diện: tiêu đề, thẻ meta, nội dung, schema, liên kết nội bộ, tốc độ trang, công cụ hỗ trợ."
      coverImage={cover}
      category="Chia sẻ"
    >
      <p>
        <strong className="text-foreground">Tóm tắt (Executive Summary):</strong> SEO Onpage là tất cả những tối ưu trực tiếp{" "}
        <strong className="text-foreground">ngay trên website</strong> để Google hiểu nội dung tốt hơn và người dùng đọc dễ hơn. Từ tiêu đề, meta,
        heading, nội dung, URL, schema, liên kết nội bộ đến tốc độ tải trang — mỗi phần đều tác động đến thứ hạng và chuyển đổi.
      </p>

      <h2 className="text-2xl font-extrabold text-foreground font-heading pt-4">Khái niệm SEO Onpage</h2>
      <h3 className="text-xl font-bold text-foreground font-heading pt-2">Định nghĩa và lợi ích cơ bản</h3>
      <p>
        SEO Onpage là quá trình tối ưu nội dung và cấu trúc HTML trên chính trang web: từ khoá, tiêu đề, heading, internal link, hình ảnh, tốc độ…
        Mục tiêu là giúp bot dễ thu thập dữ liệu, đồng thời tăng trải nghiệm người dùng (dễ đọc, dễ hiểu, dễ thao tác).
      </p>
      <h3 className="text-xl font-bold text-foreground font-heading pt-2">Tầm quan trọng với Google</h3>
      <p>
        Google “đọc” nội dung dựa trên cấu trúc và ngữ cảnh. Trang có cấu trúc rõ (H1/H2 hợp lý, nội dung bám intent, schema đúng) thường có cơ hội
        hiển thị cao hơn và CTR tốt hơn.
      </p>

      <h2 className="text-2xl font-extrabold text-foreground font-heading pt-4">Checklist tối ưu Onpage</h2>
      <h3 className="text-xl font-bold text-foreground font-heading pt-2">Tiêu đề trang và Meta Description</h3>
      <p>
        Title nên ngắn gọn (thường &lt; 60 ký tự), chứa từ khoá chính và phản ánh đúng nội dung. Meta Description khoảng 150–160 ký tự, tóm tắt lợi
        ích + gợi ý hành động (CTA), tránh trùng lặp giữa các trang.
      </p>

      <h3 className="text-xl font-bold text-foreground font-heading pt-2">Heading (H1, H2…) và Nội dung trang</h3>
      <p>
        Mỗi trang nên có <strong className="text-foreground">1 H1</strong> duy nhất. Các H2/H3 chia nhỏ mục để dễ đọc. Nội dung bài chuyên sâu nên
        đủ dài, trả lời đúng intent, và chèn từ khoá tự nhiên (không nhồi). Đoạn văn ngắn, có bullet để scan nhanh.
      </p>

      <h3 className="text-xl font-bold text-foreground font-heading pt-2">URL thân thiện và Cấu trúc site</h3>
      <p>
        URL ngắn, có từ khoá, dùng dấu gạch ngang (vd: <span className="text-foreground">/seo-onpage-la-gi</span>). Cấu trúc site rõ ràng, menu
        mạch lạc, breadcrumb (nếu cần) giúp Google và người dùng không bị “lạc”.
      </p>

      <h3 className="text-xl font-bold text-foreground font-heading pt-2">Schema Markup (dữ liệu có cấu trúc)</h3>
      <p>
        Schema (JSON-LD) giúp Google hiểu loại nội dung: Article, Product, FAQ, Review… Triển khai schema đúng giúp tăng cơ hội hiển thị Rich Snippet
        (FAQ/đánh giá) và cải thiện CTR.
      </p>

      <h3 className="text-xl font-bold text-foreground font-heading pt-2">Hình ảnh và alt text</h3>
      <p>
        Ảnh cần nén, đúng kích thước, lazy-load. Alt text mô tả đúng nội dung ảnh, có thể chèn từ khoá phụ tự nhiên. Đây vừa hỗ trợ accessibility
        vừa hỗ trợ SEO hình ảnh.
      </p>

      <h3 className="text-xl font-bold text-foreground font-heading pt-2">Liên kết nội bộ & ngoài</h3>
      <p>
        Internal link giúp Google hiểu mối liên hệ chủ đề và phân phối sức mạnh trang. Anchor text rõ ràng, ưu tiên liên kết tới trang dịch vụ/bài
        viết quan trọng. Outbound link tới nguồn uy tín giúp tăng độ tin cậy nội dung.
      </p>

      <h2 className="text-2xl font-extrabold text-foreground font-heading pt-4">Tối ưu kỹ thuật và trải nghiệm</h2>
      <h3 className="text-xl font-bold text-foreground font-heading pt-2">Tốc độ trang & Mobile-first</h3>
      <p>
        Tốc độ ảnh hưởng trực tiếp đến chuyển đổi. Ưu tiên tối ưu ảnh, giảm JS/CSS thừa, tránh CLS (nhảy layout). Giao diện responsive là bắt buộc
        vì Google index mobile trước.
      </p>

      <h3 className="text-xl font-bold text-foreground font-heading pt-2">Công cụ hỗ trợ SEO Onpage</h3>
      <p>
        Bộ công cụ tối thiểu: Google Search Console (hiệu suất & lỗi), PageSpeed/Lighthouse (tốc độ), Rich Results Test (schema), và một công cụ
        crawl như Screaming Frog để rà soát title/meta/404/redirect.
      </p>

      <h2 className="text-2xl font-extrabold text-foreground font-heading pt-4">Kết luận & khuyến nghị</h2>
      <p>
        SEO Onpage là nền tảng. Làm đúng từ cấu trúc + nội dung + kỹ thuật sẽ giúp website tăng thứ hạng bền vững. Nếu mới bắt đầu, hãy làm theo
        checklist: title/meta → H1/H2 → internal link → tối ưu ảnh/tốc độ → schema.
      </p>
    </BlogPostLayout>
  );
};

export default SeoOnpageHuongDan;

