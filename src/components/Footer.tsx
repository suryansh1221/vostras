const footerLinks = {
  "Customer Service": ["Track Order", "Returns & Exchanges", "Contact Us", "FAQs", "Book an Appointment"],
  "The House of Gucci": ["Stories", "Heritage", "Sustainability", "Careers", "Gucci Equilibrium"],
  "Legal": ["Privacy Policy", "Terms & Conditions", "Cookie Policy", "Accessibility"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="max-w-[1440px] mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-[0.15em] text-foreground mb-6">
              GUCCI
            </h2>
            <p className="text-xs font-body leading-relaxed text-muted-foreground tracking-wide">
              Founded in Florence in 1921, Gucci is one of the world's leading luxury fashion brands.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-[10px] font-body tracking-[0.25em] uppercase text-foreground mb-6">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs font-body text-muted-foreground hover:text-foreground transition-colors tracking-wide"
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
        <div className="gucci-stripe w-full mt-16 mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-body tracking-[0.15em] text-muted-foreground">
            © 2026 GUCCI — ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-6">
            {["Instagram", "Facebook", "Twitter", "YouTube", "Pinterest"].map((social) => (
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
    </footer>
  );
};

export default Footer;
