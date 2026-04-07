const clients = [
  "Bidrico", "Tribeco", "BreadTalk", "Hoàn Mỹ", "Dona Tourist",
  "Gocons", "Hucons", "V-Holdings", "Thanh Tâm", "Metalix",
  "BB Racing", "Việt Mỹ", "R'Art", "ACC", "DOCHI",
];

const ClientLogos = () => {
  return (
    <section className="section-padding bg-card border-y border-border overflow-hidden">
      <div className="container mx-auto mb-8">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest">
          Khách hàng tin tưởng
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-scroll-left w-max">
          {[...clients, ...clients].map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-8 flex items-center justify-center h-12"
            >
              <span className="text-lg font-bold text-muted-foreground/40 whitespace-nowrap tracking-wide">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
