import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import ScrollAnimate from "./ScrollAnimate";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background text-foreground spotlight-section">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollAnimate>
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold font-heading">
                Luôn sẵn sàng <br />
                <span className="text-primary">trả lời</span> thắc mắc của bạn
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Liên hệ với Devora Studio ngay hôm nay để được tư vấn miễn phí về giải pháp website và marketing online.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-white shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Số điện thoại</p>
                    <a className="text-sm font-semibold hover:text-primary transition-colors" href="tel:0949927642">
                      0949 927 642
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-white shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Email</p>
                    <a className="text-sm font-semibold hover:text-primary transition-colors" href="mailto:devduongthanhdat@gmail.com">
                      devduongthanhdat@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-white shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Địa chỉ</p>
                    <span className="text-sm font-semibold">TP. Hồ Chí Minh, Việt Nam</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-white shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Facebook className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Facebook</p>
                    <a
                      className="text-sm font-semibold hover:text-primary transition-colors"
                      href="https://www.facebook.com/devduongthanhdat/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      facebook.com/devduongthanhdat
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimate>

          <ScrollAnimate delay={200}>
            <form className="relative rounded-2xl p-8 space-y-5 text-foreground shadow-2xl border border-primary/20 bg-white overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-100/50 via-transparent to-blue-100/40" />
              <div className="pointer-events-none absolute -top-20 -right-16 w-56 h-56 rounded-full bg-primary/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-16 w-56 h-56 rounded-full bg-cyan-300/20 blur-3xl" />
              <div className="relative">
              <h3 className="text-xl font-bold font-heading mb-2">Đăng ký tư vấn</h3>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground/80">Họ và tên</label>
                <input
                  type="text"
                  placeholder="Nhập họ và tên"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground/80">Số điện thoại</label>
                <input
                  type="tel"
                  placeholder="Nhập số điện thoại"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground/80">Email</label>
                <input
                  type="email"
                  placeholder="Nhập email"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground/80">Nội dung cần tư vấn</label>
                <textarea
                  placeholder="Mô tả ngắn nhu cầu của bạn"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-gradient-to-r from-cyan-400 via-primary to-blue-500 text-primary-foreground font-semibold text-sm shadow-lg shadow-cyan-400/40 hover:shadow-xl hover:shadow-cyan-400/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                Gửi yêu cầu
              </button>
              </div>
            </form>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
