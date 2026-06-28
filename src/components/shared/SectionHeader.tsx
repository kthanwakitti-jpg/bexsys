import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  center = false,
  light = false,
  className,
}: SectionHeaderProps) {
  const titleParts = titleHighlight
    ? title.split(titleHighlight)
    : [title];

  return (
    <div
      className={cn(
        "max-w-3xl",
        center && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-6 h-px bg-[#6DB33F]" />
          <span
            className={cn(
              "text-xs font-semibold uppercase tracking-widest",
              light ? "text-[#98F109]" : "text-[#6DB33F]"
            )}
          >
            {eyebrow}
          </span>
          <span className="w-6 h-px bg-[#6DB33F]" />
        </div>
      )}

      <h2
        className={cn(
          "heading-xl mb-4",
          light ? "text-white" : "text-[#111827]"
        )}
      >
        {titleHighlight ? (
          <>
            {titleParts[0]}
            <span className="gradient-text">{titleHighlight}</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "body-lg max-w-2xl",
            center && "mx-auto",
            light ? "text-gray-300" : "text-[#6B7280]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
