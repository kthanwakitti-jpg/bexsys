"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  href?: string;
  as?: "button" | "a";
}

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  className,
  children,
  disabled,
  href,
  as: Tag = "button",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#6DB33F] disabled:opacity-50 disabled:pointer-events-none select-none";

  const variants = {
    primary:
      "bg-[#6DB33F] text-white hover:bg-[#5fa332] active:scale-[0.98] shadow-lg shadow-[#6DB33F]/25 hover:shadow-[#6DB33F]/40",
    secondary:
      "bg-[#98F109] text-[#0D1117] hover:bg-[#85d608] active:scale-[0.98] shadow-lg shadow-[#98F109]/25",
    outline:
      "border-2 border-[#6DB33F] text-[#6DB33F] hover:bg-[#6DB33F] hover:text-white active:scale-[0.98]",
    ghost:
      "text-[#6DB33F] hover:bg-[#6DB33F]/10 active:scale-[0.98]",
    dark:
      "bg-white text-[#0D1117] hover:bg-gray-100 active:scale-[0.98] shadow-lg",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
    xl: "px-10 py-4 text-lg",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      )}
      {children}
    </button>
  );
}
