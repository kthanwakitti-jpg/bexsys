import type { Metadata } from "next";
import Link from "next/link";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ArrowRight, Quote, TrendingUp, Clock, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Success Stories — Customer Case Studies",
  description:
    "ความสำเร็จของลูกค้า BexSys — กรณีศึกษาจากองค์กรชั้นนำที่ยกระดับธุรกิจด้วย SAP Business One",
};

const CASE_STUDIES = [
  {
    id: "warrix",
    company: "Warrix Sport",
    industry: "Manufacturing / Retail",
    logo: "WS",
    color: "#E11D48",
    challenge: "บริหาร inventory หลายพันรายการข้ามหลาย warehouse ไม่มีระบบ real-time",
    solution: "Implement SAP B1 ครบวงจร — Inventory, Production, Sales และ Financial Module",
    results: [
      { metric: "50%", label: "ลดเวลาปิดบัญชี", icon: <Clock className="w-4 h-4" /> },
      { metric: "30%", label: "เพิ่มความแม่นยำ Stock", icon: <TrendingUp className="w-4 h-4" /> },
      { metric: "100+", label: "Users ทั่วประเทศ", icon: <Users className="w-4 h-4" /> },
    ],
    quote: "SAP B1 กับ BexSys เปลี่ยนวิธีทำงานของเราไปโดยสิ้นเชิง ข้อมูลแบบ real-time ทำให้ตัดสินใจได้เร็วและแม่นยำขึ้นมาก",
    author: "ผู้บริหาร Warrix Sport",
    modules: ["Finance", "Sales", "Inventory", "Production"],
  },
  {
    id: "micro-precision",
    company: "Micro Precision",
    industry: "Manufacturing",
    logo: "MP",
    color: "#0078D4",
    challenge: "กระบวนการผลิตซับซ้อน ต้นทุนการผลิตไม่แม่นยำ ไม่สามารถติดตาม Serial Number ได้",
    solution: "SAP B1 Production Module พร้อม Serial/Batch Tracking และ Cost Accounting แบบ real-time",
    results: [
      { metric: "90%", label: "ความแม่นยำต้นทุน", icon: <TrendingUp className="w-4 h-4" /> },
      { metric: "70%", label: "ลด Stockout", icon: <Clock className="w-4 h-4" /> },
      { metric: "100%", label: "Traceability", icon: <Users className="w-4 h-4" /> },
    ],
    quote: "ก่อนใช้ SAP B1 เราไม่รู้เลยว่าต้นทุนจริงของสินค้าคืออะไร ตอนนี้เรารู้แบบ real-time และสามารถวางแผนการผลิตได้อย่างมีประสิทธิภาพ",
    author: "CFO, Micro Precision Co., Ltd.",
    modules: ["Production", "Inventory", "Finance", "Quality"],
  },
  {
    id: "rck",
    company: "RCK Industry",
    industry: "Distribution",
    logo: "RK",
    color: "#6DB33F",
    challenge: "บริหาร distribution หลาย channel ไม่มีระบบ tracking order และ delivery",
    solution: "SAP B1 Sales & Distribution Module พร้อม API Integration กับ e-Commerce platform",
    results: [
      { metric: "40%", label: "เร็วขึ้น Order Processing", icon: <Clock className="w-4 h-4" /> },
      { metric: "25%", label: "ลดต้นทุน Logistics", icon: <TrendingUp className="w-4 h-4" /> },
      { metric: "5★", label: "Customer Satisfaction", icon: <Users className="w-4 h-4" /> },
    ],
    quote: "BexSys เข้าใจธุรกิจ distribution ของเราดีมาก implement ได้เร็วและตรงความต้องการ",
    author: "Managing Director, RCK Industry",
    modules: ["Sales", "Purchasing", "Logistics", "API"],
  },
  {
    id: "food-company",
    company: "Leading Food Manufacturer",
    industry: "Food & Beverage",
    logo: "FM",
    color: "#F59E0B",
    challenge: "ติดตาม Lot/Expiry วัตถุดิบและสินค้าสำเร็จรูปไม่ได้ ไม่ผ่าน FDA Audit",
    solution: "SAP B1 พร้อม Batch Tracking, Quality Control Module และ Regulatory Reporting",
    results: [
      { metric: "100%", label: "FDA Compliance", icon: <TrendingUp className="w-4 h-4" /> },
      { metric: "60%", label: "ลดเวลา Audit", icon: <Clock className="w-4 h-4" /> },
      { metric: "0", label: "Recall Incident", icon: <Users className="w-4 h-4" /> },
    ],
    quote: "จาก FDA non-compliance มาเป็น clean audit ได้ภายใน 6 เดือนหลัง implement SAP B1 กับ BexSys",
    author: "Quality Manager, Food Manufacturer",
    modules: ["Batch Tracking", "QC", "Production", "Compliance"],
  },
];

const ROI_STATS = [
  { value: "50%", label: "ลดเวลาปิดบัญชีเฉลี่ย" },
  { value: "30%", label: "เพิ่มประสิทธิภาพการผลิต" },
  { value: "90%", label: "ความแม่นยำข้อมูล Stock" },
  { value: "6 เดือน", label: "ระยะเวลา ROI เฉลี่ย" },
];

export default function SuccessStoriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D1117] pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="container-xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6DB33F]/30 bg-[#6DB33F]/10 mb-5">
            <span className="text-[#98F109] text-xs font-semibold uppercase tracking-wide">
              Customer Success
            </span>
          </div>
          <h1 className="heading-hero text-white mb-4">
            Real results from
            <br />
            <span className="gradient-text">real businesses</span>
          </h1>
          <p className="body-lg text-gray-400 max-w-2xl mx-auto">
            กรณีศึกษาจากลูกค้าที่ยกระดับธุรกิจด้วย SAP Business One และ BexSys
          </p>
        </div>
      </section>

      {/* ROI Stats */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ROI_STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-4xl font-extrabold text-[#6DB33F] mb-1">{s.value}</p>
                <p className="text-[#6B7280] text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-[#F8F9FB] section-padding">
        <div className="container-xl space-y-8">
          {CASE_STUDIES.map((cs, i) => (
            <div key={cs.id} className={`bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow`}>
              <div className={`grid lg:grid-cols-5 ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                {/* Content */}
                <div className={`lg:col-span-3 p-8 lg:p-10 ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                      style={{ background: `linear-gradient(135deg, ${cs.color}, ${cs.color}88)` }}
                    >
                      {cs.logo}
                    </div>
                    <div>
                      <p className="font-bold text-[#111827]">{cs.company}</p>
                      <p className="text-xs text-[#9CA3AF]">{cs.industry}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide mb-1">ความท้าทาย</p>
                      <p className="text-[#374151] text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide mb-1">โซลูชัน</p>
                      <p className="text-[#374151] text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {cs.results.map((r) => (
                      <div key={r.label} className="bg-[#F8F9FB] rounded-xl p-3 text-center border border-gray-100">
                        <div className="flex justify-center mb-1" style={{ color: cs.color }}>{r.icon}</div>
                        <p className="font-extrabold text-xl" style={{ color: cs.color }}>{r.metric}</p>
                        <p className="text-[#9CA3AF] text-xs leading-tight mt-0.5">{r.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Modules used */}
                  <div className="flex flex-wrap gap-2">
                    {cs.modules.map((m) => (
                      <span key={m} className="text-xs px-2.5 py-1 rounded-full bg-[#6DB33F]/10 text-[#6DB33F] font-medium">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quote panel */}
                <div
                  className={`lg:col-span-2 p-8 lg:p-10 flex flex-col justify-center ${i % 2 === 1 ? "lg:col-start-1" : ""}`}
                  style={{ background: `linear-gradient(135deg, ${cs.color}18, ${cs.color}08)` }}
                >
                  <Quote className="w-8 h-8 mb-4 opacity-30" style={{ color: cs.color }} />
                  <p className="text-[#374151] leading-relaxed text-sm mb-4 italic">
                    &ldquo;{cs.quote}&rdquo;
                  </p>
                  <p className="text-xs font-semibold" style={{ color: cs.color }}>{cs.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials strip */}
      <section className="bg-white section-padding">
        <div className="container-xl">
          <SectionHeader
            eyebrow="What Clients Say"
            title="Trusted by"
            titleHighlight="100+ enterprises"
            center
            className="mb-10"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.company} className="bg-[#F8F9FB] rounded-2xl p-6 border border-gray-100">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-[#F59E0B] text-sm">★</span>
                  ))}
                </div>
                <p className="text-[#374151] text-sm leading-relaxed mb-4 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-gray-200 pt-3">
                  <p className="font-semibold text-[#111827] text-sm">{t.author}</p>
                  <p className="text-xs text-[#9CA3AF]">{t.role} — {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8F9FB] py-16">
        <div className="container-xl text-center">
          <h2 className="heading-lg text-[#111827] mb-4">พร้อมเป็น Success Story ถัดไป?</h2>
          <p className="text-[#6B7280] mb-8 max-w-xl mx-auto">
            ปรึกษาผู้เชี่ยวชาญฟรี — วิเคราะห์ว่า SAP Business One จะช่วยธุรกิจของคุณได้อย่างไร
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/book-demo" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#6DB33F] text-white font-semibold hover:bg-[#5fa332] transition-colors shadow-lg shadow-[#6DB33F]/25">
              Book Free Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-gray-200 text-[#374151] font-semibold hover:border-[#6DB33F] hover:text-[#6DB33F] transition-colors">
              ติดต่อเรา
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
