import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "dark" | "elevated";
  hover?: boolean;
}

export function Card({
  variant = "default",
  hover = false,
  className,
  children,
  ...props
}: CardProps) {
  const variants = {
    default:
      "bg-white border border-gray-100 shadow-[0_1px_3px_0_rgb(0_0_0/0.08)]",
    glass:
      "bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_4px_24px_0_rgb(0_0_0/0.06)]",
    dark:
      "bg-[#161B22] border border-white/10 text-white",
    elevated:
      "bg-white border border-gray-100 shadow-[0_8px_24px_0_rgb(0_0_0/0.08)]",
  };

  return (
    <div
      className={cn(
        "rounded-2xl overflow-hidden",
        variants[variant],
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_0_rgb(0_0_0/0.12)] cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-6 pb-0", className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-6", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-6 pt-0", className)} {...props}>
      {children}
    </div>
  );
}
