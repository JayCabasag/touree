"use client";

import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Label } from "../ui/label";

interface FormActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSubmitting?: boolean;
  loadingText?: string;
}

function FormActionButton({
  isSubmitting,
  loadingText = "Please wait...",
  disabled,
  className,
  children,
  type = "submit",
  ...props
}: FormActionButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || isSubmitting}
      className={cn(
        "w-full bg-primary text-on-primary py-4 rounded-lg font-headline-xs text-headline-xs flex justify-center items-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-primary/20 disabled:opacity-60 disabled:pointer-events-none",
        className,
      )}
      {...props}
    >
      <Label className="text-on-primary">
        {isSubmitting ? loadingText : children}
      </Label>
    </button>
  );
}

export { FormActionButton };
