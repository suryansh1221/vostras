const stories = [
  { title: "Why We Start with Poplin", category: "Fabric" },
  { title: "Roma vs Atrium: A Fit Guide", category: "Fit" },
  { title: "The Architecture of Restraint", category: "Philosophy" },
];

const EditorialSection = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-32">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-[10px] font-body tracking-[0.4em] uppercase text-muted-foreground mb-3">
            Journal
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-normal text-foreground">
            From the House
          </h2>
        </div>
        <a
          href="#"
          className="text-[11px] font-body tracking-[0.2em] uppercase text-foreground border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors hidden md:block"
        >
          All Entries
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
        {stories.map((story) => (
          <a
            key={story.title}
            href="#"
            className="group bg-background p-8 md:p-10 flex flex-col justify-between min-h-[220px] hover:bg-secondary transition-colors duration-300"
          >
            <p className="text-[10px] font-body tracking-[0.3em] uppercase text-muted-foreground">
              {story.category}
            </p>
            <div>
              <h3 className="font-display text-xl md:text-2xl text-foreground mb-4 group-hover:text-accent transition-colors">
                {story.title}
              </h3>
              <span className="text-[11px] font-body tracking-[0.15em] uppercase text-muted-foreground group-hover:text-foreground transition-colors">
                Read →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default EditorialSection;
