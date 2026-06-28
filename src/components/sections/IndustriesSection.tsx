import React from "react";
import Link from "next/link";
import {
  Factory, Truck, ShoppingBag, UtensilsCrossed,
  Heart, FlaskConical, Building2, Briefcase, ArrowRight,
} from "lucide-react";
import { INDUSTRIES } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/SectionHeader";

const ICON_MAP: Record<string, React.ReactNode> = {
  Factory:         <Factory className="w-7 h-7" />,
  Truck:           <Truck className="w-7 h-7" />,
  ShoppingBag:     <ShoppingBag className="w-7 h-7" />,
  UtensilsCrossed: <UtensilsCrossed className="w-7 h-7" />,
  Heart:           <Heart className="w-7 h-7" />,
  FlaskConical:    <FlaskConical className="w-7 h-7" />,
  Building2:       <Building2 className="w-7 h-7" />,
  Briefcase:       <Briefcase className="w-7 h-7" />,
};

const INDUSTRY_COLORS = [
  "#6DB33F", "#0078D4", "#7C3AED", "#F59E0B",
  "#EC4899", "#14B8A6", "#F97316", "#8B5CF6",
];

export function IndustriesSection() {
  return (
    <section className="bg-[#F8F9FB] section-padding">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Industries"
          title="Solutions built for"
          titleHighlight="your industry"
          subtitle="เราเข้าใจความท้าทายเฉพาะของแต่ละอุตสาหกรรม และมีโซลูชันที่ตรงกับความต้องการของธุรกิจคุณ"
          center
          className="mb-14"
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {INDUSTRIES.map((industry, i) => (
            <Link
              key={industry.id}
              href={`/industries/${industry.id}`}
              className="group flex flex-col items-center gap-3 p-5 bg-white rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 text-center"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300"
                style={{
                  background: `linear-gradient(135deg, ${INDUSTRY_COLORS[i]}18, ${INDUSTRY_COLORS[i]}30)`,
                  color: INDUSTRY_COLORS[i],
                }}
              >
                {ICON_MAP[industry.icon]}
              </div>
              <div>
                <p className="font-semibold text-[#111827] text-sm group-hover:text-[#6DB33F] transition-colors">
                  {industry.name}
                </p>
                <p className="text-[11px] text-[#9CA3AF] mt-0.5">{industry.nameTh}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-10 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-[#6DB33F] font-semibold text-sm hover:gap-3 transition-all"
          >
            Explore all industries <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
