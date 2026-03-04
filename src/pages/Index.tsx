import { useState } from "react";
import { addWaitlistEntry } from "@/lib/firebase";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setLoading(true);
    try {
      await addWaitlistEntry(name.trim(), email.trim());
      setSubmitted(true);
      toast({ title: "You're on the list", description: "We'll be in touch soon." });
    } catch (err) {
      console.error(err);
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f0eb] overflow-hidden">
      {/* Full-bleed hero */}
      <div className="relative min-h-screen flex">
        {/* Left: Image */}
        <div className="hidden lg:block lg:w-[55%] relative">
          <img
            src="/images/waitlist-hero.jpg"
            alt="VOSTROS — Poplin shirt and tailored trousers"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a]" />
          <div className="absolute bottom-12 left-12">
            <p className="text-[9px] tracking-[0.5em] uppercase text-[#f5f0eb]/40 font-body">
              Roma Poplin · Atrium Trousers
            </p>
          </div>
        </div>

        {/* Mobile hero image */}
        <div className="lg:hidden absolute inset-0">
          <img
            src="/images/waitlist-hero.jpg"
            alt="VOSTROS — Poplin shirt and tailored trousers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/70" />
        </div>

        {/* Right: Content */}
        <div className="relative z-10 w-full lg:w-[45%] flex flex-col justify-between p-8 md:p-16 lg:p-20 min-h-screen">
          {/* Top: Logo */}
          <div>
            <h1 className="font-display text-2xl font-semibold tracking-[0.35em]">
              VOSTROS
            </h1>
          </div>

          {/* Center: Main content */}
          <div className="flex-1 flex flex-col justify-center max-w-md">
            {!submitted ? (
              <>
                <p className="text-[9px] tracking-[0.6em] uppercase text-[#c4a882] mb-6 font-body">
                  Poplin Shirts · Tailored Trousers · Premium Essentials
                </p>
                <h2 className="font-display text-4xl md:text-5xl xl:text-6xl font-normal leading-[1] mb-6">
                  The online<br />experience<br />opens soon.
                </h2>
                <p className="text-sm font-body text-[#f5f0eb]/50 mb-10 leading-relaxed max-w-sm">
                  Clean silhouettes, disciplined cuts, and premium everyday fabrics — perfected for modern men. Be the first to access the collection.
                </p>

                {!showForm ? (
                  <button
                    onClick={() => setShowForm(true)}
                    className="self-start text-[11px] font-body tracking-[0.3em] uppercase border border-[#f5f0eb]/30 px-10 py-4 hover:bg-[#f5f0eb] hover:text-[#0a0a0a] transition-all duration-500"
                  >
                    Join the Waitlist
                  </button>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
                    <div>
                      <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full bg-transparent border-b border-[#f5f0eb]/20 px-0 py-3 text-sm font-body text-[#f5f0eb] placeholder:text-[#f5f0eb]/30 focus:outline-none focus:border-[#c4a882] transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full bg-transparent border-b border-[#f5f0eb]/20 px-0 py-3 text-sm font-body text-[#f5f0eb] placeholder:text-[#f5f0eb]/30 focus:outline-none focus:border-[#c4a882] transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full text-[11px] font-body tracking-[0.3em] uppercase border border-[#f5f0eb]/30 py-4 hover:bg-[#f5f0eb] hover:text-[#0a0a0a] transition-all duration-500 disabled:opacity-40 mt-2"
                    >
                      {loading ? "Submitting..." : "Request Access"}
                    </button>
                  </form>
                )}
              </>
            ) : (
              <div className="animate-fade-in">
                <p className="text-[9px] tracking-[0.6em] uppercase text-[#c4a882] mb-6 font-body">
                  You're on the list
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-normal leading-[1.1] mb-4">
                  Thank you,<br />{name}.
                </h2>
                <p className="text-sm font-body text-[#f5f0eb]/50 leading-relaxed">
                  We'll reach out when the VOSTROS experience is ready. Until then — quiet by design.
                </p>
              </div>
            )}
          </div>

          {/* Bottom: Detail image + footer */}
          <div className="flex items-end justify-between gap-8">
            <div className="hidden md:block w-24 h-24 overflow-hidden opacity-60">
              <img
                src="/images/waitlist-detail.jpg"
                alt="Fabric detail"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[8px] tracking-[0.4em] uppercase text-[#f5f0eb]/25 font-body">
              Quiet by design · Est. 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
