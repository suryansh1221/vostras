const CampaignBanner = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      <img
        src="/images/hero-2.jpg"
        alt="VOSTRAS Atrium Collection"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/10" />
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <div>
          <p className="text-[10px] font-body tracking-[0.5em] uppercase text-background mb-6">
            The Atrium Line
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-normal text-background leading-[0.95] mb-4">
            Built in<br />restraint.
          </h2>
          <p className="text-sm font-body text-background/70 mb-8 max-w-md mx-auto">
            Drop-shoulder silhouettes. Relaxed fit. The same disciplined fabric.
          </p>
          <a
            href="#"
            className="inline-block text-[11px] font-body tracking-[0.2em] uppercase text-foreground bg-background px-8 py-3.5 hover:bg-background/90 transition-colors"
          >
            Explore Atrium
          </a>
        </div>
      </div>
    </section>
  );
};

export default CampaignBanner;
