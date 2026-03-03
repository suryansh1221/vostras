const stories = [
  { title: "The Ritual of Beauty", category: "Beauty" },
  { title: "Gucci Bamboo 1947", category: "Icons" },
  { title: "Sabato De Sarno's Vision", category: "Fashion Show" },
];

const EditorialSection = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-20 md:py-32">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Stories
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-foreground">
            From the House
          </h2>
        </div>
        <a
          href="#"
          className="text-xs font-body tracking-[0.2em] uppercase text-foreground border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors hidden md:block"
        >
          View All Stories
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
        {stories.map((story) => (
          <a
            key={story.title}
            href="#"
            className="group bg-background p-8 md:p-10 flex flex-col justify-between min-h-[250px] hover:bg-secondary/50 transition-colors duration-300"
          >
            <p className="text-[10px] font-body tracking-[0.3em] uppercase text-primary">
              {story.category}
            </p>
            <div>
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4 group-hover:text-primary transition-colors">
                {story.title}
              </h3>
              <span className="text-xs font-body tracking-[0.15em] uppercase text-muted-foreground group-hover:text-foreground transition-colors">
                Read More →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default EditorialSection;
