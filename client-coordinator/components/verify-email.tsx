"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export function VerifyEmail() {
  const isSuccess = true;
  const router = useRouter();

  return (
    <section className="grow flex items-center justify-center px-margin-mobile py-section-gap relative">
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary-container/10 rounded-full blur-3xl opacity-50"></div>

      {isSuccess ? (
        <div className="relative z-10 w-full max-w-140 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-outline-variant/30 flex flex-col items-center text-center">
          <div className="mb-8 success-animation">
            <div className="w-24 h-24 bg-tertiary-container/20 rounded-full flex items-center justify-center mb-2">
              <div className="w-16 h-16 bg-tertiary-container rounded-full flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-on-tertiary-container text-[40px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-headline-lg font-headline-lg text-on-surface mb-4">
            Account Verified Successfully!
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-md mx-auto mb-10">
            Your coordinator account has been verified. You can now access your
            coordinator account and start managing your travel packages.
          </p>

          <div className="w-full flex flex-col gap-4">
            <button
              onClick={() => router.push("/auth/signin")}
              className="w-full bg-primary hover:bg-on-primary-fixed-variant text-on-primary font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
            >
              <span
                className="material-symbols-outlined text-[20px]"
                data-icon="open_in_new"
              >
                open_in_new
              </span>
              Go to Login
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-outline-variant/30 w-full flex justify-center items-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-body-md">
                verified_user
              </span>
              <span className="text-label-sm font-label-sm">Secure Portal</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-body-md">
                support_agent
              </span>
              <span className="text-label-sm font-label-sm">24/7 Support</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-lg w-full glass-card border border-outline-variant/30 rounded-xl p-8 md:p-12 shadow-[0_20px_50px_rgba(181,35,48,0.08)] relative z-10 text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 bg-primary-fixed rounded-full flex items-center justify-center text-primary animate-float relative">
              <span
                className="material-symbols-outlined text-[48px]"
                data-icon="mark_email_read"
              >
                mark_email_read
              </span>

              <div className="absolute -top-1 -right-1 w-6 h-6 bg-status-warning rounded-full border-4 border-white"></div>
            </div>
          </div>

          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
            Verify your Coordinator Account
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mb-10 leading-relaxed">
            We have sent a verification link to your business email. Please
            check your inbox to activate your portal access.
          </p>

          <div className="flex flex-col gap-4">
            <button className="w-full bg-primary hover:bg-on-primary-fixed-variant text-on-primary font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
              <span
                className="material-symbols-outlined text-[20px]"
                data-icon="open_in_new"
              >
                open_in_new
              </span>
              Open Email App
            </button>
            <button className="w-full bg-transparent hover:bg-surface-container-low text-primary font-semibold py-4 rounded-lg transition-colors duration-200 border border-outline-variant">
              Resend Verification Email
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-outline-variant/30">
            <p className="text-label-sm font-label-sm text-on-surface-variant flex items-center justify-center gap-2">
              <span
                className="material-symbols-outlined text-[16px]"
                data-icon="info"
              >
                info
              </span>
              Can't find the email? Check your spam or promotions folder.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
