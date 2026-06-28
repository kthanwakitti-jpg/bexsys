import type { Metadata } from "next";
import Link from "next/link";
import { INDUSTRIES } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  Factory, Truck, ShoppingCart, HeartPulse, Building2, Package,
  UtensilsCrossed, FlaskConical, ArrowRight, CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries — SAP Business One for Every Sector",
  description:
    "BexSys ให้บริการ SAP Business One สำหรับทุกอุตสาหกรรม — Manufacturing, Distribution, Retail, Healthcare, Construction, Logistics และอีกมากมาย",
};

const ICON_MAP: Record<string, React.ReactNode> = {
  Factory:       <Factory className="w-8 h-8" />,
  Truck:         <Truck className="w-8 h-8" />,
  ShoppingCart:  <ShoppingCart className="w-8 h-8" />,
  HeartPulse:    <HeartPulse className="w-8 h-8" />,
  Building2:     <Building2 className="w-8 h-8" />,
  Package:       <Package className="w-8 h-8" />,
  UtensilsCrossed: <UtensilsCrossed className="w-8 h-8" />,
  FlaskConical:  <FlaskConical className="w-8 h-8" />,
};

const INDUSTRY_DETAILS: Record<string, { challenges: string[]; modules: string[]; case?: string }> = {
  manufacturing: {
    challenges: ["วางแผนการผลิตแบบ Real-time", "ควบคุม BOM และ Production Order", "ติดตาม Serial/Batch ทุกขั้นตอน"],
    modules: ["Production Planning (MRP)", "BOM Management", "Quality Control", "Cost Accounting"],
  },
  distribution: {
    challenges: ["บริหาร Multi-warehouse", "ติดตาม Delivery Status", "จัดการ Stock ข้ามสาขา"],
    modules: ["Warehouse Management", "Inventory Control", "Logistics Planning", "Transport Management"],
  },
  retail: {
    challenges: ["บริหาร POS หลายสาขา", "วิเคราะห์ยอดขายแบบ Real-time", "จัดการ Loyalty Program"],
    modules: ["Point of Sale", "Customer Loyalty", "Multi-store Management", "Sales Analytics"],
  },
  healthcare: {
    challenges: ["ติดตาม Lot/Expiry ยาและเวชภัณฑ์", "บริหาร Medical Equipment", "งานบัญชี Healthcare"],
    modules: ["Medical Inventory", "Asset Management", "AR/AP", "Regulatory Compliance"],
  },
  construction: {
    challenges: ["ติดตามต้นทุนโครงการ", "บริหาร Subcontractor", "วางแผนวัสดุก่อสร้าง"],
    modules: ["Project Management", "Job Costing", "Material Planning", "Vendor Management"],
  },
  logistics: {
    challenges: ["ติดตาม Fleet Real-time", "จัดการ Routing", "บิลค่าขนส่งอัตโนมัติ"],
    modules: ["Fleet Management", "Route Optimization", "Billing Automation", "Driver Management"],
  },
  food: {
    challenges: ["ติดตาม Lot/Expiry อาหาร", "ควบคุมคุณภาพการผลิต", "ต้นทุนวัตถุดิบ"],
    modules: ["Batch Tracking", "Quality Assurance", "Recipe Management", "Food Safety Compliance"],
  },
  chemical: {
    challenges: ["จัดการสูตรสารเคมี", "ปฏิบัติตาม Safety Standard", "ติดตาม Hazardous Material"],
    modules: ["Formula Management", "Safety Data Sheet", "Regulatory Reporting", "Environmental Compliance"],
  },
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D1117] pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="container-xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6DB33F]/30 bg-[#6DB33F]/10 mb-6">
            <span className="text-[#98F109] text-xs font-semibold uppercase tracking-wide">
              Industries We Serve
            </span>
          </div>
          <h1 className="heading-hero text-white mb-4">
            SAP Business One for
            <br />
            <span className="gradient-text">every industry</span>
          </h1>
          <p className="body-lg text-gray-400 max-w-2xl mx-auto">
            BexSys มีประสบการณ์ implement SAP B1 ในทุกกลุ่มอุตสาหกรรมหลักของไทย
            ด้วยทีมที่ปรึกษาที่เข้าใจ Business Process จริง
          </p>
        </div>
      </section>

      {/* Industries grid */}
      <section className="bg-[#F8F9FB] section-padding">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {INDUSTRIES.map((ind) => {
              const details = INDUSTRY_DETAILS[ind.id] || { challenges: [], modules: [] };
              return (
                <div
                  key={ind.id}
                  className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#6DB33F]/30 hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-4 transition-transform group-hover:scale-105 duration-300"
                    style={{ background: `linear-gradient(135deg, #6DB33F, #6DB33F99)` }}
                  >
                    {ICON_MAP[ind.icon]}
                  </div>
                  <h2 className="font-bold text-[#111827] mb-0.5">{ind.name}</h2>
                  <p className="text-[#9CA3AF] text-xs mb-4">{ind.nameTh}</p>
                  <div className="space-y-1.5">
                    {details.modules.slice(0, 3).map((m) => (
                      <div key={m} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-[#6DB33F] flex-shrink-0" />
                        <span className="text-xs text-[#6B7280]">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Feature industries (expanded cards) */}
          <SectionHeader
            eyebrow="Industry Expertise"
            title="Deep domain"
            titleHighlight="knowledge"
            subtitle="ความเชี่ยวชาญเฉพาะอุตสาหกรรมที่ทำให้ BexSys แตกต่างจากที่ปรึกษา ERP ทั่วไป"
            center
            className="mb-10"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {INDUSTRIES.slice(0, 4).map((ind) => {
              const details = INDUSTRY_DETAILS[ind.id] || { challenges: [], modules: [] };
              return (
                <div key={ind.id} className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-white"
                      style={{ background: `linear-gradient(135deg, #6DB33F, #6DB33F99)` }}
                    >
                      {ICON_MAP[ind.icon]}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111827]">{ind.name}</h3>
                      <p className="text-xs text-[#9CA3AF]">{ind.nameTh}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide mb-2">Challenges Solved</p>
                      <div className="space-y-2">
                        {details.challenges.map((c) => (
                          <div key={c} className="flex items-start gap-1.5">
                            <span className="text-[#6DB33F] mt-0.5 flex-shrink-0">›</span>
                            <span className="text-xs text-[#6B7280]">{c}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide mb-2">Key Modules</p>
                      <div className="space-y-1.5">
                        {details.modules.map((m) => (
                          <div key={m} className="flex items-center gap-1.5">
                            <CheckCircle className="w-3 h-3 text-[#6DB33F] flex-shrink-0" />
                            <span className="text-xs text-[#6B7280]">{m}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="container-xl text-center">
          <h2 className="heading-lg text-[#111827] mb-4">
            ไม่เห็นอุตสาหกรรมของคุณ?
          </h2>
          <p className="text-[#6B7280] mb-8 max-w-lg mx-auto">
            BexSys มีประสบการณ์กับหลากหลายอุตสาหกรรม — พูดคุยกับเราเพื่อให้เราวิเคราะห์ความเหมาะสม
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#6DB33F] text-white font-semibold hover:bg-[#5fa332] transition-colors shadow-lg shadow-[#6DB33F]/25"
            >
              ปรึกษาผู้เชี่ยวชาญ <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/book-demo"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-gray-200 text-[#374151] font-semibold hover:border-[#6DB33F] hover:text-[#6DB33F] transition-colors"
            >
              Book Free Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
