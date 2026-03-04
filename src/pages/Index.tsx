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
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 text-center max-w-lg w-full">
        {/* Logo */}
        <h1 className="font-display text-3xl md:text-4xl font-semibold tracking-[0.3em] text-foreground mb-2">
          VOSTROS
        </h1>
        <div className="w-12 h-px bg-accent mx-auto mb-10" />

        {!submitted ? (
          <>
            {/* Tagline */}
            <p className="text-[10px] font-body tracking-[0.5em] uppercase text-muted-foreground mb-4">
              Icons for Modern Men
            </p>
            <h2 className="font-display text-2xl md:text-4xl font-normal text-foreground leading-tight mb-4">
              Online experience<br />opens soon.
            </h2>
            <p className="text-sm font-body text-muted-foreground mb-10 max-w-sm mx-auto leading-relaxed">
              Premium poplin shirts, perfected. Clean silhouettes built with restraint. Be the first to know when we launch.
            </p>

            {!showForm ? (
              <button
                onClick={() => setShowForm(true)}
                className="inline-block text-[11px] font-body tracking-[0.25em] uppercase text-primary-foreground bg-primary px-10 py-4 hover:bg-foreground/80 transition-all duration-300"
              >
                Join the Waitlist
              </button>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 max-w-xs mx-auto animate-fade-in">
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-transparent border-b border-border px-0 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-transparent border-b border-border px-0 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full text-[11px] font-body tracking-[0.25em] uppercase text-primary-foreground bg-primary px-10 py-4 hover:bg-foreground/80 transition-all duration-300 disabled:opacity-50 mt-2"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            )}
          </>
        ) : (
          /* Success state */
          <div className="animate-fade-in">
            <p className="text-[10px] font-body tracking-[0.5em] uppercase text-accent mb-4">
              You're in
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-normal text-foreground leading-tight mb-4">
              Thank you, {name}.
            </h2>
            <p className="text-sm font-body text-muted-foreground max-w-sm mx-auto leading-relaxed">
              We'll notify you when the VOSTROS experience goes live. Quiet by design.
            </p>
          </div>
        )}

        {/* Footer tagline */}
        <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[9px] font-body tracking-[0.4em] uppercase text-muted-foreground/50">
          Quiet by design
        </p>
      </div>
    </div>
  );
};

export default Index;
