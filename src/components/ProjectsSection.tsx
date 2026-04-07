import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project5 from "@/assets/project-5.jpg";
import ScrollAnimate from "./ScrollAnimate";

const projects = [
  {
    img: project1,
    title: "Demo Spa",
    category: "Spa • Landing Page",
    href: "https://thanhdat12112004.github.io/demo-spa/",
  },
  {
    img: project2,
    title: "ProMax X1 — Giới thiệu sản phẩm công nghệ",
    category: "Product • One-page",
    href: "https://thanhdat12112004.github.io/gioithieu-sanpham/",
  },
  {
    img: project3,
    title: "Coffee Demo — Quán cafe",
    category: "F&B • Landing Page",
    href: "https://thanhdat12112004.github.io/coffee-demo/",
  },
  {
    img: project5,
    title: "Việt Autoescuela — Thi trắc nghiệm DGT",
    category: "Quiz • Web App",
    href: "https://vietautoescuela.com/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding spotlight-section">
      <div className="container mx-auto">
        <ScrollAnimate>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Our Projects</p>
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading">
              Dự án <span className="text-gradient">tiêu biểu</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Luôn sáng tạo ý tưởng mới nhằm tạo ra những website mang nét riêng biệt, giúp thương hiệu khách hàng nổi bật.
            </p>
          </div>
        </ScrollAnimate>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ScrollAnimate key={i} delay={i * 100}>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group card-pop relative rounded-2xl overflow-hidden cursor-pointer block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={660}
                  className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-xs font-medium text-primary-foreground/70 uppercase tracking-wider">
                    {p.category}
                  </span>
                  <h3 className="text-xl font-bold text-primary-foreground mt-1">{p.title}</h3>
                  <span className="mt-2 text-xs text-primary-foreground/70 underline underline-offset-4">
                    Xem dự án
                  </span>
                </div>
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </a>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
