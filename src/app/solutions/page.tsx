import type { Metadata } from "next";
import Link from "next/link";
import { SOLUTIONS } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import {
  Layers, Cloud, Brain, BarChart3, Server,
  Zap, Headphones, Code2, ArrowRight, CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions — SAP Business One, AI, Cloud ERP",
  description:
    "ครบทุกโซลูชันสำหรับ Enterprise Digital Transformation — SAP Business One, Infor M3, AI Platform, Cloud ERP, BI, API Integration",
};

const ICON_MAP: Record<string, React.ReactNode> = {
  Layers:     <Layers className="w-8 h-8" />,
  Cloud:      <Cloud className="w-8 h-8" />,
  Brain:      <Brain className="w-8 h-8" />,
  BarChart3:  <BarChart3 className="w-8 h-8" />,
  Server:     <Server className="w-8 h-8" />,
  Zap:        <Zap className="w-8 h-8" />,
  Headphones: <Headphones className="w-8 h-8" />,
  Code2:      <Code2 className="w-8 h-8" />,
};

const SAP_MODULES = [
  "Financial Management", "Sales & CRM", "Purchasing & Inventory",
  "Production & MRP", "Business Intelligence", "Analytics & Reporting",
  "Project Management", "Service Management",
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D1117] pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#6DB33F]/10 rounded-full blur-3xl" />
        <div className="container-xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6DB33F]/30 bg-[#6DB33F]/10 mb-6">
            <span className="text-[#98F109] text-xs font-semibold uppercase tracking-wide">
              Enterprise Solutions
            </span>
          </div>
          <h1 className="heading-hero text-white mb-4">
            Solutions built for
            <br />
            <span className="gradient-text">enterprise scale</span>
          </h1>
          <p className="body-lg text-gray-300 max-w-2xl mx-auto">
            ครบทุกโซลูชันสำหรับ Digital Transformation ตั้งแต่ ERP ไปจนถึง AI
            — ออกแบบมาเพื่อธุรกิจ SME และองค์กรขนาดใหญ่ในประเทศไทย
          </p>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="bg-[#F8F9FB] section-padding">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SOLUTIONS.map((s) => (
              <Link
                key={s.id}
                href={s.href}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#6DB33F]/30 hover:shadow-xl transition-all duration-300 flex gap-6"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 text-white transition-transform group-hover:scale-105 duration-300"
                  style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}99)` }}
                >
                  {ICON_MAP[s.icon]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="green">{s.badge}</Badge>
                  </div>
                  <h2 className="font-bold text-[#111827] text-lg mb-2 group-hover:text-[#6DB33F] transition-colors">
                    {s.title}
                  </h2>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-3">{s.description}</p>
                  <p className="text-[#9CA3AF] text-xs">{s.descriptionTh}</p>
                  <div className="mt-4 flex items-center gap-1 text-[#6DB33F] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SAP B1 Modules highlight */}
      <section className="bg-white section-padding">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                eyebrow="SAP Business One"
                title="500+ modules,"
                titleHighlight="one platform"
                subtitle="SAP Business One ครอบคลุมทุกกระบวนการธุรกิจ ตั้งแต่บัญชีการเงินไปจนถึงการผลิตและ CRM ในระบบเดียว"
              />
              <div className="mt-8 grid grid-cols-2 gap-3">
                {SAP_MODULES.map((mod) => (
                  <div key={mod} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#6DB33F] flex-shrink-0" />
                    <span className="text-sm text-[#374151]">{mod}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex gap-3">
                <Link
                  href="/solutions/sap-business-one"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6DB33F] text-white text-sm font-semibold hover:bg-[#5fa332] transition-colors"
                >
                  Explore SAP B1 <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/book-demo"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-[#374151] text-sm font-semibold hover:border-[#6DB33F] hover:text-[#6DB33F] transition-colors"
                >
                  Book Demo
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="bg-[#0D1117] rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 dot-pattern opacity-30" />
              <div className="relative z-10 space-y-3">
                {[
                  { module: "Finance & Accounting", status: "✓ Active", color: "#6DB33F" },
                  { module: "Sales & CRM", status: "✓ Active", color: "#0078D4" },
                  { module: "Inventory Management", status: "✓ Active", color: "#F59E0B" },
                  { module: "Production & MRP", status: "✓ Active", color: "#7C3AED" },
                  { module: "AI Analytics", status: "✓ Active", color: "#98F109" },
                ].map((item) => (
                  <div key={item.module} className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3 border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                      <span className="text-white text-sm font-medium">{item.module}</span>
                    </div>
                    <span className="text-xs font-semibold" style={{ color: item.color }}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8F9FB] py-16">
        <div className="container-xl text-center">
          <h2 className="heading-lg text-[#111827] mb-4">Not sure which solution fits?</h2>
          <p className="text-[#6B7280] mb-8 max-w-xl mx-auto">
            ผู้เชี่ยวชาญของเราพร้อมวิเคราะห์ความต้องการธุรกิจและแนะนำโซลูชันที่เหมาะสมที่สุดสำหรับคุณ
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/book-demo" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#6DB33F] text-white font-semibold hover:bg-[#5fa332] transition-colors shadow-lg shadow-[#6DB33F]/25">
              Schedule Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-gray-200 text-[#374151] font-semibold hover:border-[#6DB33F] hover:text-[#6DB33F] transition-colors">
              Talk to Expert
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
