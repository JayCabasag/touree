export function VerifyEmailForm() {
  return (
    <div className="w-full max-w-md z-10">
      <div className="glass-panel border border-white/50 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-8 md:p-12 flex flex-col items-center text-center">
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl transform scale-150"></div>
          <div className="relative w-24 h-24 bg-surface rounded-full flex items-center justify-center shadow-lg border border-primary/10 animate-float">
            <span
              className="material-symbols-outlined text-[48px] text-primary"
              data-icon="mark_email_unread"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              mark_email_unread
            </span>
          </div>
        </div>

        <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-4">
          Verify your email
        </h1>

        <p className="font-body-md text-body-md text-on-surface-variant mb-10 max-w-xs mx-auto">
          We've sent a verification link to your email address. Please click the
          link to continue setting up your account.
        </p>

        <button className="w-full bg-primary hover:bg-on-primary-fixed-variant text-on-primary font-semibold py-4 rounded-lg shadow-lg shadow-primary/20 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 mb-6">
          Open Email App
        </button>

        <div className="flex flex-col gap-4">
          <button className="font-label-sm text-label-sm text-primary hover:underline transition-all">
            Resend verification email
          </button>
          <a
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface flex items-center justify-center gap-1"
            href="#"
          >
            <span
              className="material-symbols-outlined text-[16px]"
              data-icon="arrow_back"
            >
              arrow_back
            </span>
            Back to sign up
          </a>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="font-label-sm text-label-sm text-on-surface-variant/60 uppercase tracking-widest">
          Secure Travel Management
        </p>
        <div className="flex justify-center gap-6 mt-4 opacity-40 grayscale contrast-125">
          <div className="w-12 h-6 bg-on-surface-variant/20 rounded"></div>
          <div className="w-12 h-6 bg-on-surface-variant/20 rounded"></div>
          <div className="w-12 h-6 bg-on-surface-variant/20 rounded"></div>
        </div>
      </div>
    </div>
  );
}
