import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "green" | "dark" | "outline" | "accent";
}

export function Badge({ variant = "green", className, children, ...props }: BadgeProps) {
  const variants = {
    green:   "bg-[#6DB33F]/10 text-[#4a8a2a] border border-[#6DB33F]/20",
    dark:    "bg-[#0D1117]/10 text-[#0D1117] border border-[#0D1117]/10",
    outline: "border border-[#6DB33F] text-[#6DB33F]",
    accent:  "bg-[#98F109]/15 text-[#5a8a00] border border-[#98F109]/30",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wide",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
