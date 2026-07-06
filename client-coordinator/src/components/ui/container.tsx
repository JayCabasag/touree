import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className="ml-64 min-h-screen w-full">
      <div className="p-6 md:p-8  px-gutter pb-12 max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
}
