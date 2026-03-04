const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <img
        src="/images/hero-1.jpg"
        alt="VOSTRAS Roma Poplin Shirt"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 lg:p-24">
        <div className="max-w-xl animate-fade-in">
          <p className="text-[10px] font-body tracking-[0.4em] uppercase text-muted-foreground mb-4">
            The Icons Collection
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-normal text-foreground leading-[0.95] mb-3">
            Quiet by<br />design.
          </h2>
          <p className="text-sm font-body text-muted-foreground mb-8 max-w-sm leading-relaxed">
            Premium poplin shirts, perfected. Clean silhouettes built for modern men.
          </p>
          <a
            href="#"
            className="inline-block text-[11px] font-body tracking-[0.2em] uppercase text-primary-foreground bg-primary px-8 py-3.5 hover:bg-foreground/80 transition-colors"
          >
            Shop the Collection
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
