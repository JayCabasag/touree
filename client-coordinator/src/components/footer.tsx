"use client";

import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  if (pathname.includes("/auth") || pathname.includes("/packages/create"))
    return null;

  return (
    <button className="fixed bottom-8 right-8 w-16 h-16 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group">
      <span className="material-symbols-outlined text-3xl">add</span>
      <span className="absolute right-20 bg-inverse-surface text-inverse-on-surface px-4 py-2 rounded-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
        New Package
      </span>
    </button>
  );
}
