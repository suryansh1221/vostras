const CampaignBanner = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      <img
        src="/images/hero-2.jpg"
        alt="Gucci Garden Collection"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/40" />
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <div>
          <p className="text-xs font-body tracking-[0.4em] uppercase text-primary mb-6">
            Campaign
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-8xl font-light text-foreground leading-[0.9] mb-8">
            Gucci<br />Giardino
          </h2>
          <a
            href="#"
            className="inline-block text-xs font-body tracking-[0.2em] uppercase text-foreground border border-foreground px-8 py-3 hover:bg-foreground hover:text-background transition-colors duration-300"
          >
            Discover
          </a>
        </div>
      </div>
    </section>
  );
};

export default CampaignBanner;
