import React from "react";
import Link from "next/link";
import {
  Layers, Cloud, Brain, BarChart3, Server,
  Zap, Headphones, Code2, ArrowRight,
} from "lucide-react";
import { SOLUTIONS } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Badge } from "@/components/ui/Badge";

const ICON_MAP: Record<string, React.ReactNode> = {
  Layers:     <Layers className="w-6 h-6" />,
  Cloud:      <Cloud className="w-6 h-6" />,
  Brain:      <Brain className="w-6 h-6" />,
  BarChart3:  <BarChart3 className="w-6 h-6" />,
  Server:     <Server className="w-6 h-6" />,
  Zap:        <Zap className="w-6 h-6" />,
  Headphones: <Headphones className="w-6 h-6" />,
  Code2:      <Code2 className="w-6 h-6" />,
};

export function SolutionsSection() {
  return (
    <section className="bg-white section-padding">
      <div className="container-xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <SectionHeader
            eyebrow="Solutions"
            title="Everything your enterprise needs,"
            titleHighlight="in one platform"
            subtitle="จากการบริหารการเงินไปจนถึง AI — เราครอบคลุมทุกมิติของ Digital Transformation"
          />
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-[#6DB33F] font-semibold text-sm hover:gap-3 transition-all flex-shrink-0"
          >
            View all solutions <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SOLUTIONS.map((solution, i) => (
            <Link
              key={solution.id}
              href={solution.href}
              className="group relative bg-[#F8F9FB] rounded-2xl p-6 border border-gray-100 hover:border-[#6DB33F]/30 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white transition-transform group-hover:scale-110 duration-300"
                style={{ background: `linear-gradient(135deg, ${solution.color}, ${solution.color}aa)` }}
              >
                {ICON_MAP[solution.icon]}
              </div>

              {/* Badge */}
              <div className="mb-3">
                <Badge variant="green">{solution.badge}</Badge>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-[#111827] text-base mb-2 group-hover:text-[#6DB33F] transition-colors">
                {solution.title}
              </h3>

              {/* Desc */}
              <p className="text-sm text-[#6B7280] leading-relaxed line-clamp-2">
                {solution.description}
              </p>

              {/* Arrow */}
              <div className="mt-4 flex items-center gap-1 text-[#6DB33F] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
