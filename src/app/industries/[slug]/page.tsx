import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle } from "lucide-react";

const INDUSTRY_DATA: Record<string, {
  title: string; titleTh: string; color: string; emoji: string;
  hero: string; heroTh: string; overview: string;
  challenges: string[]; solutions: string[]; modules: string[];
  results: { value: string; label: string }[];
}> = {
  manufacturing: {
    title: "Manufacturing",
    titleTh: "อุตสาหกรรมการผลิต",
    color: "#6DB33F",
    emoji: "🏭",
    hero: "Smart manufacturing with SAP B1",
    heroTh: "ยกระดับการผลิตด้วย SAP Business One",
    overview: "BexSys มีประสบการณ์ implement SAP B1 สำหรับโรงงานผลิตกว่า 50 แห่ง ครอบคลุมทั้ง Discrete, Process และ Repetitive Manufacturing",
    challenges: ["วางแผน MRP และ Production Schedule แบบ real-time", "ควบคุม BOM หลาย version และ Engineering Change", "ติดตาม Serial/Batch ทุกขั้นตอนการผลิต", "คำนวณต้นทุนการผลิตแบบแม่นยำ"],
    solutions: ["SAP B1 Production Planning (MRP)", "Multi-level BOM Management", "Serial & Batch Tracking", "Job Costing & Standard Cost"],
    modules: ["Production Order", "BOM", "MRP", "Quality Control", "Cost Accounting", "Inventory"],
    results: [{ value: "30%", label: "ลด WIP" }, { value: "90%", label: "ความแม่นยำ BOM" }, { value: "50%", label: "เร็วขึ้นปิดบัญชีต้นทุน" }, { value: "100%", label: "Traceability" }],
  },
  distribution: {
    title: "Distribution",
    titleTh: "การกระจายสินค้า",
    color: "#0078D4",
    emoji: "🚛",
    hero: "Distribution excellence with SAP B1",
    heroTh: "บริหาร Supply Chain ด้วย SAP Business One",
    overview: "ครอบคลุมทุกกระบวนการ Distribution ตั้งแต่ Order Management, Warehouse, Logistics จนถึง Customer Delivery ใน platform เดียว",
    challenges: ["บริหาร Multi-warehouse และ Multi-location", "ติดตาม Delivery Status แบบ real-time", "จัดการ Stock ข้ามสาขาและ DC", "ออก Picking List และ Packing List อัตโนมัติ"],
    solutions: ["SAP B1 Warehouse Management", "Multi-branch Inventory Control", "Delivery Route Planning", "Auto Picking & Packing"],
    modules: ["Warehouse", "Inventory", "Sales", "Delivery", "Logistics", "AP/AR"],
    results: [{ value: "40%", label: "เร็วขึ้น Order Processing" }, { value: "25%", label: "ลดต้นทุน Logistics" }, { value: "99%", label: "Delivery Accuracy" }, { value: "Real-time", label: "Stock Visibility" }],
  },
  retail: {
    title: "Retail",
    titleTh: "ค้าปลีก",
    color: "#F59E0B",
    emoji: "🛒",
    hero: "Unified commerce for modern retail",
    heroTh: "บริหารค้าปลีกแบบครบวงจรด้วย SAP B1",
    overview: "SAP B1 สำหรับ Retail ครอบคลุมทั้ง POS, สต็อก, CRM และ การเงิน พร้อม Integration กับ e-Commerce ทุกช่องทาง",
    challenges: ["บริหาร POS หลายสาขาแบบ real-time", "Sync สต็อกระหว่าง Online และ Offline", "วิเคราะห์ยอดขายรายสาขา รายสินค้า", "บริหาร Loyalty Program และ Promotion"],
    solutions: ["POS Integration กับ SAP B1", "Omnichannel Inventory Sync", "Sales Analytics by Branch/SKU", "CRM & Loyalty Management"],
    modules: ["POS", "Inventory", "Sales", "CRM", "Finance", "Analytics"],
    results: [{ value: "20%", label: "เพิ่มยอดขาย" }, { value: "60%", label: "ลด Stock Shrinkage" }, { value: "Real-time", label: "POS Sync" }, { value: "360°", label: "Customer View" }],
  },
  food: {
    title: "Food & Beverage",
    titleTh: "อุตสาหกรรมอาหาร",
    color: "#EC4899",
    emoji: "🍽️",
    hero: "Food safety & traceability with SAP B1",
    heroTh: "ความปลอดภัยอาหารและ Traceability ด้วย SAP B1",
    overview: "SAP B1 สำหรับอุตสาหกรรมอาหาร ครอบคลุม Batch Tracking, Expiry Management, Recipe Management และ Regulatory Compliance ตามมาตรฐาน GMP/HACCP/FDA",
    challenges: ["ติดตาม Lot/Expiry วัตถุดิบและสินค้าสำเร็จรูป", "จัดการ Recipe และ Formula หลาย version", "Recall Management เมื่อพบปัญหา", "ผ่านการตรวจ FDA และ Audit ภายนอก"],
    solutions: ["Batch & Lot Tracking ทุกขั้นตอน", "Recipe & Formula Management", "Forward/Backward Traceability", "FDA Compliance Reporting"],
    modules: ["Batch Tracking", "Recipe", "QC", "Production", "Compliance", "Inventory"],
    results: [{ value: "100%", label: "FDA Compliance" }, { value: "60%", label: "ลดเวลา Audit" }, { value: "0", label: "Recall Incident" }, { value: "Auto", label: "Expiry Alert" }],
  },
  healthcare: {
    title: "Healthcare",
    titleTh: "สาธารณสุขและเวชภัณฑ์",
    color: "#EF4444",
    emoji: "🏥",
    hero: "Healthcare management with SAP B1",
    heroTh: "บริหารสาธารณสุขและเวชภัณฑ์ด้วย SAP B1",
    overview: "SAP B1 สำหรับ Healthcare ครอบคลุมการบริหารเวชภัณฑ์, Medical Equipment, การเงินโรงพยาบาล และ Regulatory Compliance",
    challenges: ["ติดตาม Lot/Expiry ยาและเวชภัณฑ์", "บริหาร Medical Equipment และ Asset", "ระบบ Billing และ Insurance Claim", "ผ่านมาตรฐาน ISO 13485 และ GMP"],
    solutions: ["Medical Inventory with Lot/Expiry", "Asset & Equipment Management", "Healthcare Billing Module", "Regulatory Reporting"],
    modules: ["Inventory", "Asset", "Finance", "AR/AP", "Compliance", "Analytics"],
    results: [{ value: "100%", label: "Lot Traceability" }, { value: "30%", label: "ลดต้นทุนยา" }, { value: "Auto", label: "Expiry Alert" }, { value: "Comply", label: "GMP/ISO" }],
  },
  chemical: {
    title: "Chemical",
    titleTh: "อุตสาหกรรมเคมีภัณฑ์",
    color: "#8B5CF6",
    emoji: "⚗️",
    hero: "Chemical industry compliance with SAP B1",
    heroTh: "บริหารเคมีภัณฑ์ตามมาตรฐานด้วย SAP B1",
    overview: "SAP B1 สำหรับอุตสาหกรรมเคมีภัณฑ์ ครอบคลุม Formula Management, Hazardous Material Tracking, Safety Data Sheet และ Environmental Compliance",
    challenges: ["จัดการ Formula และ Formulation หลาย version", "ติดตาม Hazardous Material ตาม Regulation", "ออก Safety Data Sheet (SDS) อัตโนมัติ", "Report Environmental & Safety ตามกฎหมาย"],
    solutions: ["Formula & Batch Management", "Hazmat Tracking & Classification", "Auto SDS Generation", "Environmental Compliance Report"],
    modules: ["Formula", "Batch", "QC", "Safety", "Compliance", "Inventory"],
    results: [{ value: "100%", label: "Hazmat Compliance" }, { value: "Auto", label: "SDS Generation" }, { value: "Zero", label: "Safety Violation" }, { value: "Full", label: "Audit Trail" }],
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = INDUSTRY_DATA[slug];
  if (!data) return { title: "Industry Not Found" };
  return {
    title: `${data.title} ERP — SAP Business One for ${data.title}`,
    description: data.overview,
  };
}

export function generateStaticParams() {
  return Object.keys(INDUSTRY_DATA).map((slug) => ({ slug }));
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = INDUSTRY_DATA[slug];
  if (!data) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D1117] pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
          style={{ background: data.color }} />
        <div className="container-xl relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-5 text-xs font-semibold"
              style={{ borderColor: `${data.color}40`, background: `${data.color}15`, color: data.color }}>
              {data.emoji} {data.titleTh}
            </div>
            <h1 className="heading-hero text-white mb-3">
              {data.hero}
            </h1>
            <p className="text-gray-400 text-lg mb-4">{data.heroTh}</p>
            <p className="text-gray-500 max-w-2xl leading-relaxed mb-8">{data.overview}</p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/book-demo"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg"
                style={{ background: data.color }}>
                ปรึกษาผู้เชี่ยวชาญฟรี <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/industries"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-semibold text-sm hover:border-white/40 transition-colors">
                ดูอุตสาหกรรมอื่น
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {data.results.map((r) => (
              <div key={r.label} className="text-center">
                <p className="text-3xl font-extrabold mb-1" style={{ color: data.color }}>{r.value}</p>
                <p className="text-[#6B7280] text-sm">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="bg-[#F8F9FB] section-padding">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Challenges */}
            <div className="bg-white rounded-2xl p-7 border border-gray-100">
              <p className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-4">
                ความท้าทายที่เราเข้าใจ
              </p>
              <div className="space-y-3">
                {data.challenges.map((c) => (
                  <div key={c} className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">⚡</span>
                    <p className="text-[#374151] text-sm leading-relaxed">{c}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="bg-white rounded-2xl p-7 border border-gray-100">
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: data.color }}>
                โซลูชันจาก BexSys
              </p>
              <div className="space-y-3">
                {data.solutions.map((s) => (
                  <div key={s} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: data.color }} />
                    <p className="text-[#374151] text-sm leading-relaxed">{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SAP Modules */}
          <div className="mt-8 bg-[#0D1117] rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 dot-pattern opacity-20" />
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                SAP B1 Modules ที่ใช้ใน {data.titleTh}
              </p>
              <div className="flex flex-wrap gap-3">
                {data.modules.map((m) => (
                  <span key={m}
                    className="px-4 py-2 rounded-full text-sm font-semibold border"
                    style={{ borderColor: `${data.color}40`, background: `${data.color}15`, color: data.color }}>
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="container-xl text-center">
          <h2 className="heading-lg text-[#111827] mb-4">
            พร้อมยกระดับธุรกิจ {data.titleTh}?
          </h2>
          <p className="text-[#6B7280] mb-8 max-w-xl mx-auto">
            ปรึกษาผู้เชี่ยวชาญ SAP B1 ที่เข้าใจอุตสาหกรรม {data.titleTh} โดยเฉพาะ
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/book-demo"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold hover:opacity-90 transition-opacity shadow-lg"
              style={{ background: data.color }}>
              นัดปรึกษาฟรี <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/industries"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-gray-200 text-[#374151] font-semibold hover:border-[#6DB33F] hover:text-[#6DB33F] transition-colors">
              ดูอุตสาหกรรมอื่น
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
