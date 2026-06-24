"use client";

import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  if (pathname.includes("/auth/verify-email")) {
    return (
      <header className="bg-surface shadow-sm top-0 z-50 fixed w-full">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-7xl mx-auto">
          <div className="text-headline-md font-headline-md font-bold text-primary">
            Touree
          </div>
          <div className="hidden md:flex gap-6">
            <span className="text-on-surface-variant font-label-sm text-label-sm"></span>
          </div>
        </div>
      </header>
    );
  }

  if (pathname.includes("/auth")) return null;

  return (
    <header className="h-16 w-full sticky top-0 z-40 bg-surface shadow-sm">
      <div className="flex justify-between items-center h-full px-8 ml-64">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative w-full max-w-md">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
              search
            </span>
            <input
              className="w-full pl-10 pr-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-full text-body-md focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="Search requests, bookings..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-4 text-on-surface-variant">
            <button className="material-symbols-outlined hover:text-primary transition-colors focus:ring-2 focus:ring-primary rounded-full">
              notifications
            </button>
            <button className="material-symbols-outlined hover:text-primary transition-colors focus:ring-2 focus:ring-primary rounded-full">
              help_outline
            </button>
          </div>
          <div className="h-8 w-8 rounded-full overflow-hidden border border-outline-variant">
            <img
              alt="Coordinator Profile Picture"
              className="w-full h-full object-cover"
              data-alt="A professional portrait of a male travel coordinator in his late 30s wearing a smart-casual blazer. The background is a blurred high-end office with warm wooden textures and soft ambient lighting. The style is clean, sharp, and corporate-modern, using a natural color palette with subtle red accents to align with the Touree brand aesthetic."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg35yD4g3yZPtDRl76JPxV1uXHPT1R7vv6GGT7z91oI6avvkvv2TsuZoZ1lAbqyKUZoADlQ8hMEd7lk0sCBhtWjYnZZirWrhqwjzPlCp7AIoQJRwlgF9TElP7IViH7-QUbEA97VPvZKsm7m9drK4SToW-uBRu8xk4lq5spg7dpPn2wqufVjIUhik1G0LkFdgXxx8uzYH6BAKUvD6Z7kHUAxK1tWx2Onnm0P6NhxcI_mw_7brtcooU5wTLpfF3pU96Mu8vhC9CI-hQ"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
