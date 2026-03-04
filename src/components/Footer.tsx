const footerLinks = {
  "Shop": ["Roma Regular", "Roma Relaxed", "Atrium Drop-Shoulder", "All Shirts"],
  "About": ["Our Story", "Philosophy", "Fabric", "Fit Guide"],
  "Help": ["Shipping & Returns", "Size Guide", "Contact", "FAQs"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2 className="font-display text-xl font-semibold tracking-[0.25em] text-foreground mb-4">
              VOSTRAS
            </h2>
            <p className="text-xs font-body leading-relaxed text-muted-foreground">
              Elite men's essentials. Clean silhouettes, disciplined cuts, premium everyday fabrics.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-[10px] font-body tracking-[0.3em] uppercase text-foreground mb-6">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs font-body text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-16 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[10px] font-body tracking-[0.2em] text-muted-foreground">
              © 2026 VOSTRAS — QUIET BY DESIGN
            </p>
            <div className="flex gap-6">
              {["Instagram", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-[10px] font-body tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
