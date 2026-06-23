"use client";

export function CTANewsletter() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
  };

  return (
    <section className="py-16 px-20 max-w-7xl mx-auto">
      <div className="bg-inverse-surface rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center text-white">
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-headline-lg text-4xl md:text-5xl mb-6">
            Ready to start your story?
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Subscribe to our newsletter for exclusive travel tips, early access
            to new packages, and premium member rewards.
          </p>

          <form
            className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto"
            onSubmit={handleSubmit}
          >
            <input
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white placeholder:text-white/40"
              placeholder="Your email address"
              type="email"
              required
            />
            <button
              className="bg-primary text-white font-bold py-4 px-8 rounded-xl hover:bg-on-primary-fixed-variant transition-all shadow-xl active:scale-95"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Background Decorations */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
