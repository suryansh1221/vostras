const categories = [
  {
    image: "/images/product-1.jpg",
    title: "White",
    subtitle: "Roma Poplin",
  },
  {
    image: "/images/product-2.jpg",
    title: "Cream",
    subtitle: "Atrium Relaxed",
  },
  {
    image: "/images/product-3.jpg",
    title: "Black",
    subtitle: "Roma Regular",
  },
  {
    image: "/images/product-4.jpg",
    title: "Pink",
    subtitle: "Atrium Drop-Shoulder",
  },
];

const CategoryGrid = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-32">
      <div className="text-center mb-16">
        <p className="text-[10px] font-body tracking-[0.4em] uppercase text-muted-foreground mb-3">
          Core Palette
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-normal text-foreground">
          Icons, Not SKUs
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {categories.map((cat) => (
          <a
            key={cat.title}
            href="#"
            className="group relative overflow-hidden"
          >
            <div className="aspect-[3/4] overflow-hidden bg-secondary">
              <img
                src={cat.image}
                alt={`VOSTRAS ${cat.subtitle} in ${cat.title}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="pt-4 pb-2">
              <p className="text-[10px] font-body tracking-[0.25em] uppercase text-muted-foreground mb-1">
                {cat.subtitle}
              </p>
              <h3 className="font-display text-lg text-foreground">
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
