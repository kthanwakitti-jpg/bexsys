import React from "react";
import Link from "next/link";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Quote, ArrowRight, TrendingUp } from "lucide-react";

export function SuccessSection() {
  return (
    <section className="bg-white section-padding">
      <div className="container-xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <SectionHeader
            eyebrow="Customer Success"
            title="Real results for"
            titleHighlight="real businesses"
            subtitle="ลูกค้าของเราเห็นผลลัพธ์ที่จับต้องได้ตั้งแต่วันแรกที่เริ่มใช้งาน SAP Business One"
          />
          <Link
            href="/success-stories"
            className="inline-flex items-center gap-2 text-[#6DB33F] font-semibold text-sm hover:gap-3 transition-all flex-shrink-0"
          >
            All case studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="relative bg-[#F8F9FB] rounded-2xl p-7 border border-gray-100 hover:border-[#6DB33F]/20 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <Quote className="w-8 h-8 text-[#6DB33F]/30 mb-4" />

              <p className="text-[#374151] text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center justify-between border-t border-gray-200 pt-5">
                <div>
                  <p className="font-semibold text-[#111827] text-sm">{t.name}</p>
                  <p className="text-[#9CA3AF] text-xs mt-0.5">{t.role}</p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#6DB33F]/10">
                  <TrendingUp className="w-3.5 h-3.5 text-[#6DB33F]" />
                  <span className="text-[#4a8a2a] text-xs font-bold">{t.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ROI Banner */}
        <div className="bg-gradient-to-r from-[#0D1117] via-[#0f1f0a] to-[#0D1117] rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-30" />
          <div className="relative z-10">
            <p className="text-[#98F109] text-sm font-semibold uppercase tracking-widest mb-3">
              Average Client Outcomes
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              {[
                { metric: "50%", label: "Faster Month-End Close" },
                { metric: "70%", label: "Reduction in Stockouts" },
                { metric: "90%", label: "Data Accuracy" },
                { metric: "30%", label: "Faster Implementation" },
              ].map((m) => (
                <div key={m.label}>
                  <div className="text-4xl font-bold text-white mb-1">{m.metric}</div>
                  <p className="text-gray-400 text-sm">{m.label}</p>
                </div>
              ))}
            </div>
            <Link
              href="/book-demo"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#6DB33F] text-white font-semibold hover:bg-[#5fa332] transition-colors shadow-lg shadow-[#6DB33F]/30"
            >
              See how we can help your business <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
