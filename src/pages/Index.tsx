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
    <div className="min-h-screen bg-[#050505] text-[#f5f0eb] overflow-hidden relative">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        poster="/images/waitlist-hero.jpg"
      >
        <source src="/videos/runway.mp4" type="video/mp4" />
      </video>

      {/* Dark overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-[#050505]/40 to-[#050505]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/80" />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between p-8 md:p-14 lg:p-20">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <h1 className="font-display text-xl md:text-2xl font-semibold tracking-[0.4em]">
            VOSTROS
          </h1>
          <p className="text-[8px] tracking-[0.5em] uppercase text-[#f5f0eb]/30 font-body hidden sm:block">
            Est. 2025
          </p>
        </div>

        {/* Center content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-2xl mx-auto">
            {!submitted ? (
              <>
                {/* Decorative line */}
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#c4a882] to-transparent mx-auto mb-10" />

                <p className="text-[9px] tracking-[0.7em] uppercase text-[#c4a882] mb-8 font-body">
                  Poplin Shirts · Tailored Trousers · Premium Essentials
                </p>

                <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-normal leading-[0.9] mb-8 tracking-[0.02em]">
                  The Experience<br />
                  <span className="italic font-light">Opens Soon</span>
                </h2>

                <p className="text-[13px] font-body text-[#f5f0eb]/40 mb-14 leading-relaxed max-w-md mx-auto">
                  Clean silhouettes. Disciplined cuts. Premium everyday fabrics — perfected for modern men.
                </p>

                {!showForm ? (
                  <button
                    onClick={() => setShowForm(true)}
                    className="group relative text-[11px] font-body tracking-[0.35em] uppercase px-14 py-5 overflow-hidden transition-all duration-700"
                  >
                    <span className="absolute inset-0 border border-[#f5f0eb]/25 group-hover:border-[#c4a882]/60 transition-colors duration-700" />
                    <span className="absolute inset-0 bg-[#f5f0eb] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                    <span className="relative z-10 group-hover:text-[#050505] transition-colors duration-700">
                      Join the Waitlist
                    </span>
                  </button>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8 max-w-sm mx-auto animate-fade-in">
                    <input
                      type="text"
                      placeholder="YOUR NAME"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full bg-transparent border-b border-[#f5f0eb]/15 px-0 py-4 text-[12px] tracking-[0.2em] font-body text-[#f5f0eb] placeholder:text-[#f5f0eb]/20 focus:outline-none focus:border-[#c4a882] transition-colors duration-500"
                    />
                    <input
                      type="email"
                      placeholder="YOUR EMAIL"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-transparent border-b border-[#f5f0eb]/15 px-0 py-4 text-[12px] tracking-[0.2em] font-body text-[#f5f0eb] placeholder:text-[#f5f0eb]/20 focus:outline-none focus:border-[#c4a882] transition-colors duration-500"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative w-full text-[11px] font-body tracking-[0.35em] uppercase py-5 overflow-hidden transition-all duration-700 disabled:opacity-40 mt-4"
                    >
                      <span className="absolute inset-0 border border-[#f5f0eb]/25 group-hover:border-[#c4a882]/60 transition-colors duration-700" />
                      <span className="absolute inset-0 bg-[#f5f0eb] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                      <span className="relative z-10 group-hover:text-[#050505] transition-colors duration-700">
                        {loading ? "Submitting..." : "Request Access"}
                      </span>
                    </button>
                  </form>
                )}
              </>
            ) : (
              <div className="animate-fade-in">
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#c4a882] to-transparent mx-auto mb-10" />
                <p className="text-[9px] tracking-[0.7em] uppercase text-[#c4a882] mb-6 font-body">
                  You're on the list
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-normal leading-[1] mb-6">
                  Thank you,<br /><span className="italic">{name}.</span>
                </h2>
                <p className="text-sm font-body text-[#f5f0eb]/40 leading-relaxed max-w-sm mx-auto">
                  We'll reach out when the VOSTROS experience is ready.<br />Quiet by design.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-end justify-between">
          <p className="text-[8px] tracking-[0.5em] uppercase text-[#f5f0eb]/20 font-body">
            Quiet by design
          </p>
          <p className="text-[8px] tracking-[0.5em] uppercase text-[#f5f0eb]/20 font-body">
            Icons for Modern Men
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
