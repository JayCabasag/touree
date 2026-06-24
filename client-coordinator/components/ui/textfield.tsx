"use client";

import { useId, useState } from "react";
import type { InputHTMLAttributes } from "react";

interface TextFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "id"
> {
  label: string;
  icon: string;
  id?: string;
  helperText?: string;
  error?: string;
}

export function TextField({
  label,
  icon,
  id,
  helperText,
  error,
  type = "text",
  className,
  ...inputProps
}: TextFieldProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const resolvedType = isPassword && showPassword ? "text" : type;

  const message = error ?? helperText;

  return (
    <div className="space-y-1.5">
      <label
        className="font-label-sm text-label-sm text-on-surface-variant ml-1"
        htmlFor={fieldId}
      >
        {label}
      </label>
      <div className="relative">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
          {icon}
        </span>
        <input
          className={`w-full pl-12 ${
            isPassword ? "pr-12" : "pr-4"
          } py-3.5 bg-white border ${
            error ? "border-error" : "border-outline-variant"
          } rounded-lg font-body-md text-on-surface focus:outline-none form-input-focus transition-all duration-200 ${
            className ?? ""
          }`}
          id={fieldId}
          type={resolvedType}
          {...inputProps}
        />
        {isPassword && (
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors"
            onClick={() => setShowPassword((prev) => !prev)}
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            <span className="material-symbols-outlined">
              {showPassword ? "visibility_off" : "visibility"}
            </span>
          </button>
        )}
      </div>
      {message && (
        <p
          className={`font-label-sm text-[10px] mt-1 uppercase tracking-wider ${
            error ? "text-error" : "text-on-surface-variant/70"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
