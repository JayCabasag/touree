import { SignUpForm } from "@/components/signup-form";

export default function SignUpPage() {
  return (
    <>
      <section className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-on-surface">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-80 scale-105 transition-transform duration-10000ms hover:scale-100"
            data-alt="A cinematic wide-angle shot of a luxurious overwater villa resort in the Maldives at sunset. The sky is painted in deep oranges and soft purples, reflecting off the crystal clear turquoise lagoon. The architecture is refined and modern, featuring natural wood and glass. This high-end travel aesthetic uses a warm, premium color palette to evoke aspiration and elite status, perfectly aligned with the Touree brand."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtAYOyW1piSmYPXHrWVAQnTWSIPjLLvW9AmYQShJIbM2BAvKmWl-qiHhPJHmBgPBFJUM3K_lY6fTeqenfJ6uVXfy6d2t9aPtW693tZqmcUasTsD2uw3Oa2tBywh4ykG1ls9iQ23CUarXH_P_dcmsME1e1lvYPV6llrMPtz-z8uSOGLw9emSK6bzGx6cr7wE5i5BsMWVSV0AJc6rKz6VNQMVWrRI1mLwmukq-3Dfa91yYhInHHFnUmmLMcnHSZ0JXyCQ1n6IgLCp9o"
          />
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-on-surface via-on-surface/40 to-transparent z-10"></div>

        <div className="relative z-20 w-full flex flex-col justify-between p-margin-desktop">
          <div className="flex items-center space-x-2 text-on-primary">
            <div>
              <h1 className="font-headline-lg text-headline-lg font-extrabold tracking-tight">
                Touree
              </h1>
              <p className="font-label-sm text-label-sm opacity-70">
                Coordinator
              </p>
            </div>
          </div>
          <div className="max-w-xl">
            <h1 className="font-headline-lg text-headline-lg text-white mb-6">
              Join our global network of elite coordinators.
            </h1>
            <p className="font-body-lg text-body-lg text-white/80 leading-relaxed">
              Empower travelers by crafting bespoke experiences. Access
              exclusive tools, global partnerships, and a community dedicated to
              the art of premium travel.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="glass-effect rounded-xl px-6 py-4 flex items-center gap-4">
              <span className="material-symbols-outlined text-primary-fixed text-3xl">
                public
              </span>
              <div>
                <p className="font-label-sm text-white/60">Global Reach</p>
                <p className="font-headline-md text-white">140+ Countries</p>
              </div>
            </div>
            <div className="glass-effect rounded-xl px-6 py-4 flex items-center gap-4">
              <span className="material-symbols-outlined text-primary-fixed text-3xl">
                verified_user
              </span>
              <div>
                <p className="font-label-sm text-white/60">Verification</p>
                <p className="font-headline-md text-white">Elite Status</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full lg:w-1/2 flex items-center justify-center p-margin-mobile md:p-margin-desktop bg-surface">
        <div className="w-full max-w-md space-y-8">
          <div className="lg:hidden mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-headline-md font-headline-md font-bold text-primary">
                Touree
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Apply as Coordinator
            </h2>
            <p className="text-on-surface-variant font-body-md">
              Start your journey as a travel experience designer today.
            </p>
          </div>

          <SignUpForm />

          <div className="pt-8 text-center">
            <p className="text-on-surface-variant font-body-md">
              Already have an account?
              <a
                className="text-primary font-bold hover:underline transition-all"
                href="#"
              >
                Sign In
              </a>
            </p>
          </div>

          <div className="pt-12 border-t border-outline-variant/30 flex justify-between items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="font-label-sm uppercase tracking-tighter">
              Verified Provider
            </span>
            <div className="flex gap-4">
              <span className="material-symbols-outlined">verified</span>
              <span className="material-symbols-outlined">shield</span>
              <span className="material-symbols-outlined">hotel_class</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
