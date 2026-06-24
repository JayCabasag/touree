"use client";

import { TextField } from "./ui/textfield";

export function SignUpForm() {
  return (
    <form className="space-y-stack-md mt-8" onSubmit={() => {}}>
      <TextField
        label="Full Name"
        icon="person"
        id="name"
        placeholder="John Doe"
        type="text"
      />

      <TextField
        label="Business Email"
        icon="mail"
        id="email"
        placeholder="john@company.com"
        type="email"
      />

      <TextField
        label="Phone Number"
        icon="phone"
        id="phone"
        placeholder="+1 (555) 000-0000"
        type="tel"
      />

      <TextField
        label="Password"
        icon="lock"
        id="password"
        placeholder="••••••••"
        type="password"
        helperText="Minimum 8 characters with one special symbol"
      />

      <div className="flex items-start gap-3 pt-2">
        <div className="relative flex items-center">
          <input
            className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/20 transition-all cursor-pointer"
            id="terms"
            type="checkbox"
          />
        </div>
        <label
          className="text-on-surface-variant font-label-sm leading-snug cursor-pointer select-none"
          htmlFor="terms"
        >
          I agree to the{" "}
          <a className="text-secondary font-semibold hover:underline" href="#">
            Coordinator Terms &amp; Conditions
          </a>{" "}
          and Touree's privacy policy.
        </label>
      </div>

      <div className="pt-6">
        <button
          className="group relative w-full bg-primary text-on-primary font-headline-md py-4 rounded-lg shadow-lg shadow-primary/10 hover:shadow-primary/30 active:scale-[0.98] transition-all duration-300 overflow-hidden"
          type="submit"
        >
          <span className="relative z-10">Submit Application</span>
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
      </div>
    </form>
  );
}
