"use client";

import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const isAuthRoute = pathname.startsWith("/auth");
  return isAuthRoute ? <AuthFooter /> : <MainFooter />;
}

export function MainFooter() {
  return (
    <footer className="w-full py-16 px-20 grid grid-cols-1 md:grid-cols-4 gap-6 bg-surface-container-lowest dark:bg-inverse-surface">
      {/* Brand Section */}
      <div className="space-y-6">
        <div className="font-headline-md text-headline-md font-bold text-primary">
          Touree
        </div>
        <p className="font-body-md text-body-md text-text-secondary dark:text-outline-variant max-w-xs">
          Premium travel experiences tailored for those who seek more than just
          a trip.
        </p>
        <div className="flex gap-4">
          <a
            className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all"
            href="#"
          >
            <span className="material-symbols-outlined text-lg">public</span>
          </a>
          <a
            className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all"
            href="#"
          >
            <span className="material-symbols-outlined text-lg">share</span>
          </a>
        </div>
      </div>

      {/* Company Links */}
      <div>
        <h4 className="font-bold text-on-surface mb-6">Company</h4>
        <ul className="space-y-4">
          <li>
            <a
              className="text-text-secondary dark:text-outline-variant hover:text-primary hover:underline transition-all"
              href="#"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              className="text-text-secondary dark:text-outline-variant hover:text-primary hover:underline transition-all"
              href="#"
            >
              Press
            </a>
          </li>
          <li>
            <a
              className="text-text-secondary dark:text-outline-variant hover:text-primary hover:underline transition-all"
              href="#"
            >
              Careers
            </a>
          </li>
        </ul>
      </div>

      {/* Help & Support */}
      <div>
        <h4 className="font-bold text-on-surface mb-6">Help & Support</h4>
        <ul className="space-y-4">
          <li>
            <a
              className="text-text-secondary dark:text-outline-variant hover:text-primary hover:underline transition-all"
              href="#"
            >
              Support
            </a>
          </li>
          <li>
            <a
              className="text-text-secondary dark:text-outline-variant hover:text-primary hover:underline transition-all"
              href="#"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              className="text-text-secondary dark:text-outline-variant hover:text-primary hover:underline transition-all"
              href="#"
            >
              Terms of Service
            </a>
          </li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="font-bold text-on-surface mb-6">Contact</h4>
        <p className="text-text-secondary dark:text-outline-variant mb-4">
          Questions? Our experts are here to help.
        </p>
        <a
          className="text-primary font-bold block mb-2"
          href="mailto:hello@touree.com"
        >
          hello@touree.com
        </a>
        <p className="text-on-surface font-semibold">+1 (555) TOUR-001</p>
      </div>

      {/* Bottom Footer */}
      <div className="col-span-1 md:col-span-4 pt-12 mt-12 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-text-secondary dark:text-outline-variant text-sm">
          © 2024 Touree Premium Travel. All rights reserved.
        </p>
        <div className="flex gap-8">
          <span className="text-xs text-on-surface-variant/50">Mastercard</span>
          <span className="text-xs text-on-surface-variant/50">Visa</span>
          <span className="text-xs text-on-surface-variant/50">
            American Express
          </span>
        </div>
      </div>
    </footer>
  );
}

export function AuthFooter() {
  return (
    <footer className="w-full py-16 px-20 grid grid-cols-1 md:grid-cols-4 gap-6 bg-surface-container-lowest dark:bg-inverse-surface">
      <div className="font-headline-md text-headline-md text-primary">
        Touree
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        <a
          className="font-label-sm text-label-sm text-text-secondary hover:text-primary transition-colors"
          href="#"
        >
          Privacy Policy
        </a>
        <a
          className="font-label-sm text-label-sm text-text-secondary hover:text-primary transition-colors"
          href="#"
        >
          Terms of Service
        </a>
        <a
          className="font-label-sm text-label-sm text-text-secondary hover:text-primary transition-colors"
          href="#"
        >
          Cookie Policy
        </a>
      </div>
      <div className="font-label-sm text-label-sm text-text-secondary">
        © 2024 Touree Premium Travel Marketplace. All rights reserved.
      </div>
    </footer>
  );
}
