import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isPathnameActive(
  pathname: string,
  item: { href: string; matchPaths?: string[] },
) {
  const paths = item.matchPaths ?? [item.href];
  return paths.some((path) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path),
  );
}
