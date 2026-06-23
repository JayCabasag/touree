"use client";

import Link from "next/link";

export function SignupForm() {
  return (
    <form
      action="#"
      className="space-y-6"
      id="signup-form"
      method="POST"
      onSubmit={() => {}}
    >
      <div className="space-y-2">
        <label
          className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"
          htmlFor="email"
        >
          Email address
        </label>
        <div className="relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
            mail
          </span>
          <input
            className="w-full pl-12 pr-4 py-4 bg-surface-muted border border-outline-variant rounded-lg font-body-md text-body-md transition-all focus:bg-white"
            id="email"
            name="email"
            placeholder="alex@example.com"
            required
            type="email"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label
            className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
              lock
            </span>
            <input
              className="w-full pl-11 pr-4 py-4 bg-surface-muted border border-outline-variant rounded-lg font-body-md text-body-md transition-all focus:bg-white"
              id="password"
              name="password"
              placeholder="••••••••"
              required
              type="password"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
              lock_reset
            </span>
            <input
              className="w-full pl-11 pr-4 py-4 bg-surface-muted border border-outline-variant rounded-lg font-body-md text-body-md transition-all focus:bg-white"
              id="confirm-password"
              name="confirm-password"
              placeholder="••••••••"
              required
              type="password"
            />
          </div>
        </div>
      </div>

      <div className="flex items-start gap-3 py-1">
        <div className="flex items-center h-5">
          <input
            className="peer h-5 w-5 rounded border-outline-variant text-primary focus:ring-primary/20 cursor-pointer"
            id="terms"
            required
            type="checkbox"
          />
        </div>
        <label
          className="font-body-md text-body-md text-text-secondary leading-tight"
          htmlFor="terms"
        >
          I agree to the{" "}
          <a className="text-primary hover:underline font-semibold" href="#">
            Terms of Service
          </a>{" "}
          and{" "}
          <a className="text-primary hover:underline font-semibold" href="#">
            Privacy Policy
          </a>
          .
        </label>
      </div>

      <button
        className="w-full bg-primary text-white py-4 rounded-lg font-headline-md text-headline-md flex justify-center items-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-primary/20"
        type="submit"
      >
        Create Account
      </button>

      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-outline-variant"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-on-surface-variant font-label-sm text-label-sm">
            OR CONTINUE WITH
          </span>
        </div>
      </div>

      <button
        className="w-full bg-white border border-outline-variant text-on-surface py-4 rounded-lg font-body-md text-body-md flex justify-center items-center gap-3 hover:bg-surface-muted active:scale-[0.98] transition-all"
        type="button"
      >
        <img
          alt="Google"
          className="w-5 h-5"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBsC1fc4WZSVUXVjdiAI7Cmx-042Kca9SBlVT5DzgDGVE5N_M_lz6FhQheVwl3wIb0ojhe7-vn3MI627HmyY6gM9jzSeWp0jGO4EPNDPgnR_9vpXIQ-o_GWmjm2XeVPqK7H29ECkNsudWi9QTuNXcNEOJmlafisMrltgX_t5-QReTj06o55g5Tm1I3lB7XRNZ8xrekdrvIGacfZ29uzCeBe3Vw9JC5yixvA9JkJUNSrbuizMvtti-C0z443ohmngnKrdKqWsNdJj0"
        />
        <span>Google</span>
      </button>

      <div className="text-center mt-8">
        <p className="font-body-md text-body-md text-text-secondary">
          Already have an account?
          <Link
            className="text-primary font-bold hover:underline"
            href="/auth/signin"
          >
            Sign In
          </Link>
        </p>
      </div>
    </form>
  );
}
