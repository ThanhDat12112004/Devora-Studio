import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  { img: project1, title: "Website Doanh Nghiệp", category: "Website, Design" },
  { img: project2, title: "Website Bán Hàng", category: "E-commerce, UI/UX" },
  { img: project3, title: "Nhận Diện Thương Hiệu", category: "Branding, Design" },
  { img: project4, title: "Thiết Kế App Mobile", category: "App, UI/UX" },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Our Projects</p>
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading">
            Dự án <span className="text-gradient">tiêu biểu</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Luôn sáng tạo ý tưởng mới nhằm tạo ra những website mang nét riêng biệt, giúp thương hiệu khách hàng nổi bật.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
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
              </div>
              <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
