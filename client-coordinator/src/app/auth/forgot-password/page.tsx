import { ForgotPasswordForm } from "@/components/forgot-password-form";

export default function ForgotPasswordPage() {
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
              Empowering coordinators to craft unforgettable journeys.
            </h1>
            <p className="font-body-lg text-body-lg text-white/80 leading-relaxed">
              Manage tours, connect with travelers, and grow your travel
              business—all in one platform.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col flex-1 items-center justify-center p-margin-mobile md:p-margin-desktop bg-surface min-h-screen">
        <div className="md:hidden w-full mb-12 flex justify-center">
          <span className="font-headline-md text-headline-md font-extrabold text-primary tracking-tighter">
            Touree
          </span>
        </div>
        <div className="w-full max-w-md space-y-stack-md">
          <div className="text-center md:text-left mb-8">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2">
              Coordinator Forgot Password
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Enter your registered coordinator email to receive a reset link.
            </p>
          </div>

          <ForgotPasswordForm />
          <div className="pt-6 flex flex-col items-center gap-4">
            <a
              className="group flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-[16px] transition-transform group-hover:-translate-x-1">
                arrow_back
              </span>
              <span>Back to Login</span>
            </a>
          </div>

          <div className="pt-12 border-t border-surface-container-high">
            <p className="font-label-sm text-label-sm text-outline mb-4">
              Need further assistance?
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a
                className="text-[12px] font-semibold text-secondary hover:underline"
                href="#"
              >
                Partner Support
              </a>
              <a
                className="text-[12px] font-semibold text-secondary hover:underline"
                href="#"
              >
                Help Center
              </a>
              <a
                className="text-[12px] font-semibold text-secondary hover:underline"
                href="#"
              >
                Legal Documentation
              </a>
            </div>
          </div>
        </div>

        <div className="md:hidden mt-auto pt-12 text-center w-full">
          <div className="flex justify-center space-x-4 mb-4">
            <a
              className="font-label-sm text-label-sm text-on-surface-variant opacity-70"
              href="#"
            >
              Help Center
            </a>
            <a
              className="font-label-sm text-label-sm text-on-surface-variant opacity-70"
              href="#"
            >
              Privacy
            </a>
          </div>
          <div className="font-label-sm text-label-sm text-on-surface-variant opacity-50">
            © 2024 Touree Travel
          </div>
        </div>
      </section>
    </>
  );
}
