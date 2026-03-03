import { useState } from "react";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    "New In", "Handbags", "Women", "Men", "Jewelry & Watches", "Beauty", "Décor", "Gifts"
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      {/* Top banner */}
      <div className="gucci-stripe w-full" />
      <div className="bg-secondary py-2 text-center">
        <p className="text-xs font-body tracking-[0.2em] text-muted-foreground uppercase">
          Complimentary shipping & gift wrapping
        </p>
      </div>

      {/* Main nav */}
      <nav className="border-b border-border">
        <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between h-16">
          {/* Left: hamburger on mobile */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
            <h1 className="font-display text-2xl lg:text-3xl font-semibold tracking-[0.15em] text-foreground">
              GUCCI
            </h1>
          </div>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[11px] font-body tracking-[0.15em] uppercase text-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-5">
            <Search size={18} className="text-foreground cursor-pointer hover:text-primary transition-colors" />
            <User size={18} className="text-foreground cursor-pointer hover:text-primary transition-colors hidden sm:block" />
            <ShoppingBag size={18} className="text-foreground cursor-pointer hover:text-primary transition-colors" />
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="block text-sm font-body tracking-[0.15em] uppercase text-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
