"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Dialog } from "@base-ui/react/dialog";
import useAuth from "@/services/auth/use-auth";
import { NavigationMenu } from "@base-ui/react";
import useAuthActions from "@/services/auth/use-auth-actions";

const navItems = [
  { label: "Destinations", href: "/", matchPaths: ["/", "/explore"] },
  { label: "Packages", href: "/packages" },
  // { label: "Quote Requests", href: "/quote-requests" },
  { label: "Bookings", href: "/bookings" },
];

function isActive(
  pathname: string,
  item: { href: string; matchPaths?: string[] },
) {
  const paths = item.matchPaths ?? [item.href];
  return paths.some((path) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path),
  );
}

export function TopNavBar() {
  const pathname = usePathname();
  const isAuthRoute = pathname.startsWith("/auth");
  return isAuthRoute ? <AuthTopNavBar /> : <MainTopNavBar />;
}

export function MainTopNavBar() {
  const pathname = usePathname();
  const router = useRouter();

  const { user } = useAuth();
  const { logOut } = useAuthActions();

  const [drawerOpen, setDrawerOpen] = useState(false);

  function navigateAndClose(href: string) {
    setDrawerOpen(false);
    router.push(href);
  }

  async function handleLogout() {
    await logOut();

    const currentPath = window.location.pathname;
    const params = new URLSearchParams({ redirect: currentPath });

    router.replace(`/auth/signin?${params.toString()}`);
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-sm transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 md:px-20 flex justify-between items-center h-20">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-headline-md text-headline-md font-bold text-primary">
            Touree
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const active = isActive(pathname, item);
            return (
              <Link
                key={item.label}
                className={
                  active
                    ? "font-body-md text-body-md text-primary font-bold border-b-2 border-primary transition-all"
                    : "font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                }
                href={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.push("/notifications")}
                className="cursor-pointer p-2 rounded-full hover:bg-surface-container-low transition-colors active:scale-95 text-primary"
              >
                <span className="material-symbols-outlined">notifications</span>
              </button>

              <NavigationMenu.Root>
                <NavigationMenu.List>
                  <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="cursor-pointer p-2 rounded-full hover:bg-surface-container-low transition-colors active:scale-95 text-primary">
                      <span className="material-symbols-outlined">person</span>
                    </NavigationMenu.Trigger>

                    <NavigationMenu.Content className="p-2">
                      <ul className="flex flex-col min-w-45">
                        <li>
                          <NavigationMenu.Link
                            render={<Link href="/profile" />}
                            className="flex items-center gap-3 rounded-xl px-3 py-2 text-body-md font-body-md text-on-surface hover:bg-surface-container-low transition-colors"
                          >
                            <span className="material-symbols-outlined text-on-surface-variant">
                              account_circle
                            </span>
                            Profile
                          </NavigationMenu.Link>
                        </li>
                        <li>
                          <NavigationMenu.Link
                            render={<Link href="/help" />}
                            className="flex items-center gap-3 rounded-xl px-3 py-2 text-body-md font-body-md text-on-surface hover:bg-surface-container-low transition-colors"
                          >
                            <span className="material-symbols-outlined text-on-surface-variant">
                              help
                            </span>
                            Help
                          </NavigationMenu.Link>
                        </li>
                        <li>
                          <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 rounded-xl px-3 py-2 w-full text-left text-body-md font-body-md text-error hover:bg-surface-container-low transition-colors"
                          >
                            <span className="material-symbols-outlined">
                              logout
                            </span>
                            Logout
                          </button>
                        </li>
                      </ul>
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>
                </NavigationMenu.List>

                <NavigationMenu.Portal>
                  <NavigationMenu.Positioner
                    className="z-50"
                    sideOffset={8}
                    collisionPadding={{
                      top: 5,
                      bottom: 5,
                      left: 20,
                      right: 20,
                    }}
                  >
                    <NavigationMenu.Popup className="bg-white rounded-2xl shadow-md origin-(--transform-origin) transition-[transform,scale,opacity] data-starting-style:opacity-0 data-starting-style:scale-95 data-ending-style:opacity-0 data-ending-style:scale-95">
                      <NavigationMenu.Viewport />
                    </NavigationMenu.Popup>
                  </NavigationMenu.Positioner>
                </NavigationMenu.Portal>
              </NavigationMenu.Root>
            </div>
          ) : (
            <>
              <button
                onClick={() => router.push("/auth/signin")}
                className="flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full border border-outline-variant hover:bg-surface-container-low transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-primary">
                  person
                </span>
                <span className="text-label-sm font-label-sm uppercase tracking-wider text-on-surface">
                  Sign In
                </span>
              </button>
            </>
          )}
        </div>

        <Dialog.Root open={drawerOpen} onOpenChange={setDrawerOpen}>
          <Dialog.Trigger
            className="md:hidden p-2 rounded-full hover:bg-surface-container-low transition-colors active:scale-95"
            aria-label="Open menu"
          >
            <span className="material-symbols-outlined text-on-surface text-2xl">
              menu
            </span>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Backdrop
              className="fixed inset-0 z-50 bg-black/50 transition-opacity duration-300
                data-starting-style:opacity-0 data-ending-style:opacity-0"
            />
            <Dialog.Popup
              className="fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm bg-surface
                shadow-2xl flex flex-col transition-transform duration-300 ease-out
                data-starting-style:translate-x-full data-ending-style:translate-x-full"
            >
              <div className="flex items-center justify-between h-20 px-6 border-b border-outline-variant/30 shrink-0">
                <Dialog.Title className="font-headline-md text-headline-md font-bold text-primary">
                  Touree
                </Dialog.Title>
                <Dialog.Close
                  className="p-2 rounded-full hover:bg-surface-container-low transition-colors active:scale-95"
                  aria-label="Close menu"
                >
                  <span className="material-symbols-outlined text-on-surface-variant text-2xl">
                    close
                  </span>
                </Dialog.Close>
              </div>

              <div className="flex flex-col gap-1 px-4 py-6 overflow-y-auto">
                {navItems.map((item) => {
                  const active = isActive(pathname, item);
                  return (
                    <button
                      key={item.label}
                      onClick={() => navigateAndClose(item.href)}
                      className={
                        active
                          ? "text-left px-3 py-3 rounded-lg font-body-md text-body-md text-primary font-bold bg-primary/5"
                          : "text-left px-3 py-3 rounded-lg font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors"
                      }
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>

              <div className="mt-auto px-4 py-6 border-t border-outline-variant/30 flex flex-col gap-3 shrink-0">
                <button
                  onClick={() => navigateAndClose("/notifications")}
                  className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-surface-container-low transition-colors active:scale-[0.98]"
                >
                  <span className="material-symbols-outlined text-on-surface-variant">
                    notifications
                  </span>
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    Notifications
                  </span>
                </button>
                <button
                  onClick={() => navigateAndClose("/auth/signin")}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-outline-variant hover:bg-surface-container-low transition-all active:scale-[0.98]"
                >
                  <span className="material-symbols-outlined text-primary">
                    person
                  </span>
                  <span className="text-label-sm font-label-sm uppercase tracking-wider text-on-surface">
                    Sign In
                  </span>
                </button>
              </div>
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>
      </nav>
    </header>
  );
}

export function AuthTopNavBar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-sm transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 md:px-20 flex justify-between items-center h-20">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-headline-md text-headline-md font-bold text-primary">
            Touree
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            className="font-body-md text-body-md text-on-surface-variant hover:opacity-80 transition-opacity"
            href="#"
          >
            Help
          </Link>
        </div>
      </nav>
    </header>
  );
}
