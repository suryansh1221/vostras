const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <img
        src="/images/hero-1.jpg"
        alt="Gucci Spring Summer Collection"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 lg:p-24">
        <div className="max-w-2xl animate-fade-in">
          <p className="text-xs font-body tracking-[0.3em] uppercase text-primary mb-4">
            Spring Summer 2026
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-foreground leading-[0.95] mb-6">
            A New Era<br />of Elegance
          </h2>
          <a
            href="#"
            className="inline-block text-xs font-body tracking-[0.2em] uppercase text-foreground border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors"
          >
            Explore the Collection
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
