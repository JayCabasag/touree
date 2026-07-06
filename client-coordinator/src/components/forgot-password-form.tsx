"use client";

export function ForgotPasswordForm() {
  return (
    <form action="#" className="space-y-6" id="recoveryForm" method="POST">
      <div className="group">
        <label
          className="block font-label-sm text-label-sm text-on-surface-variant mb-2 transition-colors group-focus-within:text-secondary"
          htmlFor="email"
        >
          Work Email Address
        </label>
        <div className="relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant">
            mail
          </span>
          <input
            className="w-full pl-12 pr-4 py-4 rounded-lg border border-outline-variant bg-surface-container-lowest focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all placeholder:text-outline/50"
            id="email"
            name="email"
            placeholder="name@touree.co"
            required
            type="email"
          />
        </div>
      </div>
      <button
        className="w-full bg-primary hover:bg-on-primary-fixed-variant text-on-primary font-bold py-4 rounded-lg shadow-lg shadow-primary/20 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
        type="submit"
      >
        <span>Send Reset Link</span>
        <span className="material-symbols-outlined text-[18px]">send</span>
      </button>
    </form>
  );
}
