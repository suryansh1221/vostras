const categories = [
  {
    image: "/images/product-1.jpg",
    title: "Handbags",
    subtitle: "New Arrivals",
  },
  {
    image: "/images/product-2.jpg",
    title: "Shoes",
    subtitle: "Spring Collection",
  },
  {
    image: "/images/product-3.jpg",
    title: "Accessories",
    subtitle: "Timeless Pieces",
  },
  {
    image: "/images/product-4.jpg",
    title: "Ready-to-Wear",
    subtitle: "Cruise 2026",
  },
];

const CategoryGrid = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-20 md:py-32">
      <div className="text-center mb-16">
        <p className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-3">
          Explore
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-light text-foreground">
          The World of Gucci
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {categories.map((cat, i) => (
          <a
            key={cat.title}
            href="#"
            className="group relative overflow-hidden"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-[10px] font-body tracking-[0.25em] uppercase text-primary mb-1">
                {cat.subtitle}
              </p>
              <h3 className="font-display text-xl md:text-2xl text-foreground">
                {cat.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
