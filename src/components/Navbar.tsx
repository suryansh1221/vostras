import { useState } from "react";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = ["Shop", "Roma", "Atrium", "About", "Journal"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      {/* Top banner */}
      <div className="bg-primary py-2 text-center">
        <p className="text-[10px] font-body tracking-[0.3em] text-primary-foreground uppercase">
          Complimentary shipping on all orders
        </p>
      </div>

      {/* Main nav */}
      <nav className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
          {/* Left: hamburger on mobile */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Desktop links left */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[11px] font-body tracking-[0.2em] uppercase text-foreground hover:text-muted-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <h1 className="font-display text-xl lg:text-2xl font-semibold tracking-[0.25em] text-foreground">
              VOSTRAS
            </h1>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-5">
            <Search size={17} className="text-foreground cursor-pointer hover:text-muted-foreground transition-colors" />
            <User size={17} className="text-foreground cursor-pointer hover:text-muted-foreground transition-colors hidden sm:block" />
            <ShoppingBag size={17} className="text-foreground cursor-pointer hover:text-muted-foreground transition-colors" />
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
                className="block text-sm font-body tracking-[0.2em] uppercase text-foreground hover:text-muted-foreground transition-colors"
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
