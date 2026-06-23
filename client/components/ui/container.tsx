import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <section
      className={cn("py-8 px-3 md:py-16 md:px-4 max-w-7xl mx-auto", className)}
    >
      {children}
    </section>
  );
}
