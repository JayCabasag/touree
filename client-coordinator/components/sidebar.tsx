"use client";

import { cn, isPathnameActive } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", icon: "dashboard", href: "/" },
  { label: "Packages", icon: "inventory_2", href: "/packages" },
  { label: "Quote Requests", icon: "request_quote", href: "/quote-requests" },
  { label: "Bookings", icon: "calendar_month", href: "/bookings" },
  { label: "Settings", icon: "settings", href: "/settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  if (pathname.includes("/auth")) return null;

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 overflow-y-auto bg-surface shadow-sm flex flex-col border-r border-outline-variant z-50">
      <div className="p-6">
        <h1 className="font-headline-lg text-headline-lg font-extrabold text-primary tracking-tight">
          Touree
        </h1>
        <p className="font-label-sm text-label-sm text-on-surface-variant opacity-70">
          Coordinator
        </p>
      </div>
      <nav className="flex-1 px-3 space-y-1">
        {navItems.map((navItem) => {
          const active = isPathnameActive(pathname, navItem);

          return (
            <Link
              className={cn(
                "flex items-center gap-3 px-4 py-3",
                active
                  ? "text-primary font-bold border-r-4 border-primary bg-surface-container-low transition-transform duration-150 active:scale-95"
                  : "text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200",
              )}
              href={navItem.href}
              id={navItem.href}
              key={navItem.href}
            >
              <span className="material-symbols-outlined">{navItem.icon}</span>
              <span className="font-body-md text-body-md">{navItem.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-4 mt-auto">
        <button className="w-full bg-primary text-on-primary py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md">
          <span className="material-symbols-outlined">add</span>
          Create Package
        </button>
      </div>
      <div className="border-t border-outline-variant p-4 space-y-1">
        <a
          className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200"
          href="#"
        >
          <span className="material-symbols-outlined">help</span>
          <span className="font-label-sm text-label-sm">Help Center</span>
        </a>
        <a
          className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200"
          href="#"
        >
          <span className="material-symbols-outlined">logout</span>
          <span className="font-label-sm text-label-sm">Logout</span>
        </a>
      </div>
    </aside>
  );
}
