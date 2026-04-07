import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-foreground text-primary-foreground">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading">
              Luôn sẵn sàng <br />
              <span className="text-primary">trả lời</span> thắc mắc của bạn
            </h2>
            <p className="mt-4 text-primary-foreground/70 leading-relaxed">
              Liên hệ với Devora Studio ngay hôm nay để được tư vấn miễn phí về giải pháp website và marketing online.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm">0938 002 776</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm">contact@devorastudio.vn</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm">TP. Hồ Chí Minh, Việt Nam</span>
              </div>
            </div>
          </div>

          <form className="bg-primary-foreground/10 rounded-2xl p-8 space-y-4 backdrop-blur-sm">
            <h3 className="text-xl font-bold font-heading mb-2">Đăng ký tư vấn</h3>
            <input
              type="text"
              placeholder="Họ và tên"
              className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:border-primary"
            />
            <input
              type="tel"
              placeholder="Số điện thoại"
              className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:border-primary"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:border-primary"
            />
            <textarea
              placeholder="Nội dung cần tư vấn"
              rows={3}
              className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:border-primary resize-none"
            />
            <button
              type="submit"
              className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Gửi yêu cầu
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
