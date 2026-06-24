"use client";

import Link from "next/link";
import { TextField } from "./ui/textfield";

export function SignInForm() {
  return (
    <form className="space-y-stack-md" id="loginForm" onSubmit={() => {}}>
      <TextField
        label="Email Address"
        icon="mail"
        id="email"
        placeholder="name@company.com"
        type="email"
      />

      <TextField
        label="Passwrd"
        icon="lock"
        id="password"
        placeholder="••••••••"
        type="password"
      />

      <div className="flex justify-end items-center">
        <Link
          className="font-label-sm text-label-sm text-primary hover:underline transition-all"
          href="/auth/forgot-password"
        >
          Forgot password?
        </Link>
      </div>

      <div className="flex items-center space-x-2 py-2">
        <input
          className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary"
          id="remember"
          type="checkbox"
        />
        <label
          className="font-label-sm text-label-sm text-on-surface-variant select-none"
          htmlFor="remember"
        >
          Remember me for 30 days
        </label>
      </div>

      <button
        className="w-full py-4 bg-primary text-on-primary font-headline-md rounded-lg shadow-sm hover:shadow-lg hover:opacity-90 transition-all transform active:scale-[0.98] focus:ring-4 focus:ring-primary/20"
        type="submit"
      >
        Sign In
      </button>
    </form>
  );
}
