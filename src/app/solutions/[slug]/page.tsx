import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle } from "lucide-react";

const SOLUTION_DATA: Record<string, {
  title: string; titleTh: string; badge: string; color: string;
  hero: string; heroTh: string;
  overview: string;
  features: string[];
  benefits: { value: string; label: string }[];
  modules?: string[];
  cta: string;
}> = {
  "sap-business-one": {
    title: "SAP Business One",
    titleTh: "SAP Business One",
    badge: "SAP Gold Partner",
    color: "#6DB33F",
    hero: "The #1 ERP for growing businesses",
    heroTh: "ระบบ ERP อันดับ 1 สำหรับธุรกิจที่กำลังเติบโต",
    overview: "SAP Business One คือระบบ ERP ครบวงจรที่ออกแบบมาสำหรับ SME และ Mid-Market ครอบคลุมทุกกระบวนการธุรกิจตั้งแต่การเงิน การขาย คลังสินค้า การผลิต ไปจนถึง CRM ในแพลตฟอร์มเดียว",
    features: [
      "Financial Management — GL, AP, AR, Fixed Asset, Budget",
      "Sales & CRM — Quotation, Order, Delivery, Invoice, Opportunity",
      "Purchasing — Purchase Request, PO, Goods Receipt, AP Invoice",
      "Inventory — Warehouse, Batch, Serial, Bin Location",
      "Production — BOM, Production Order, MRP",
      "Business Intelligence — Dashboards, Crystal Reports, Analytics",
    ],
    benefits: [
      { value: "50%", label: "ลดเวลาปิดบัญชี" },
      { value: "30%", label: "เพิ่มประสิทธิภาพ" },
      { value: "100%", label: "Visibility แบบ Real-time" },
      { value: "6 เดือน", label: "ROI เฉลี่ย" },
    ],
    modules: ["Finance", "Sales", "Purchasing", "Inventory", "Production", "CRM", "Service", "BI"],
    cta: "ขอ Demo SAP B1 ฟรี",
  },
  "infor-m3": {
    title: "Infor M3 CloudSuite",
    titleTh: "Infor M3 CloudSuite",
    badge: "Infor Partner",
    color: "#0078D4",
    hero: "Industry-specific Cloud ERP at enterprise scale",
    heroTh: "Cloud ERP เฉพาะอุตสาหกรรม ระดับ Enterprise",
    overview: "Infor M3 CloudSuite คือ ERP ระดับ Enterprise บน Cloud ที่ออกแบบมาเฉพาะสำหรับอุตสาหกรรม Manufacturing, Distribution และ Food & Beverage ด้วย AI-powered capabilities",
    features: [
      "Manufacturing Operations Management",
      "Supply Chain Planning & Execution",
      "Financial Management & Multi-company",
      "Quality Management",
      "Warehouse Management System",
      "AI-Powered Analytics & Forecasting",
    ],
    benefits: [
      { value: "40%", label: "ลด Inventory Cost" },
      { value: "25%", label: "เพิ่ม OEE" },
      { value: "99.9%", label: "Uptime SLA" },
      { value: "Cloud", label: "Native Platform" },
    ],
    cta: "ขอข้อมูล Infor M3",
  },
  "ai-platform": {
    title: "BexAI Platform",
    titleTh: "แพลตฟอร์ม AI สำหรับ SAP B1",
    badge: "AI First",
    color: "#7C3AED",
    hero: "AI Copilot built for SAP Business One",
    heroTh: "AI Copilot ที่สร้างมาเพื่อ SAP Business One โดยเฉพาะ",
    overview: "BexAI Platform ช่วยให้ทีมของคุณทำงานกับ SAP B1 ได้เร็วขึ้นและชาญฉลาดขึ้น ด้วย AI Chatbot, OCR Document Processing, Predictive Analytics และ Dashboard Insight แบบ real-time",
    features: [
      "AI Assistant — ถามตอบ SAP B1 ได้ทันที ไม่ต้อง Support",
      "OCR & Document AI — แปลงใบแจ้งหนี้เป็นข้อมูลอัตโนมัติ",
      "Predictive Analytics — พยากรณ์ยอดขาย สต็อก และ Cash Flow",
      "AI Dashboard — Insight อัตโนมัติจากข้อมูล SAP B1",
      "Knowledge Base — ค้นหา SAP documentation ด้วย AI",
      "Smart Automation — Workflow recommendation ด้วย AI",
    ],
    benefits: [
      { value: "80%", label: "ลด Support Ticket" },
      { value: "10x", label: "เร็วขึ้นในการหาข้อมูล" },
      { value: "24/7", label: "AI พร้อมใช้งาน" },
      { value: "Auto", label: "OCR & Data Entry" },
    ],
    cta: "ทดลอง BexAI ฟรี",
  },
  "business-intelligence": {
    title: "Business Intelligence",
    titleTh: "Business Intelligence & Analytics",
    badge: "Real-time",
    color: "#F59E0B",
    hero: "Turn your SAP B1 data into decisions",
    heroTh: "เปลี่ยนข้อมูล SAP B1 ให้เป็นการตัดสินใจ",
    overview: "BexSys BI Platform เชื่อมต่อ SAP B1 โดยตรง แสดง Dashboard แบบ real-time ครอบคลุม KPI ทางการเงิน การขาย สต็อก และการผลิต บนทุกอุปกรณ์",
    features: [
      "Executive Dashboard — KPI สำคัญในมุมมองเดียว",
      "Financial Analytics — P&L, Cash Flow, Budget vs Actual",
      "Sales Analytics — Pipeline, Win Rate, Revenue Forecast",
      "Inventory Analytics — Stock Level, Turnover, Aging",
      "Production Analytics — OEE, WIP, Yield Rate",
      "Custom Report Builder — สร้าง Report เองได้โดยไม่ต้องเขียน code",
    ],
    benefits: [
      { value: "Real-time", label: "ข้อมูลปัจจุบัน" },
      { value: "50+", label: "Pre-built Dashboard" },
      { value: "Any Device", label: "Mobile, Tablet, Desktop" },
      { value: "5 min", label: "Setup เริ่มต้น" },
    ],
    cta: "ดู BI Demo",
  },
  "cloud-erp": {
    title: "Cloud ERP",
    titleTh: "Cloud ERP Infrastructure",
    badge: "99.9% Uptime",
    color: "#14B8A6",
    hero: "SAP B1 on Cloud — secure, scalable, always-on",
    heroTh: "SAP B1 บน Cloud — ปลอดภัย ยืดหยุ่น และพร้อมใช้งานตลอด 24/7",
    overview: "BexSys Cloud ERP ให้บริการ deploy และดูแล SAP Business One บน Azure, AWS หรือ GCP พร้อม SLA 99.9% Uptime, Backup อัตโนมัติ และ Security ระดับ Enterprise",
    features: [
      "Deploy บน Azure, AWS, Google Cloud",
      "Auto Backup ทุกวัน + Disaster Recovery",
      "SSL Encryption & Firewall ระดับ Enterprise",
      "Performance Monitoring 24/7",
      "Auto-scaling ตามการใช้งาน",
      "Remote Access ทุกอุปกรณ์ทั่วโลก",
    ],
    benefits: [
      { value: "99.9%", label: "Uptime SLA" },
      { value: "0", label: "Hardware Cost" },
      { value: "Auto", label: "Backup & Recovery" },
      { value: "24/7", label: "Monitoring" },
    ],
    cta: "ปรึกษา Cloud Migration",
  },
  "api-integration": {
    title: "API Integration",
    titleTh: "API Integration & Middleware",
    badge: "SAP Service Layer",
    color: "#EC4899",
    hero: "Connect SAP B1 with any system",
    heroTh: "เชื่อมต่อ SAP B1 กับทุกระบบที่คุณใช้งาน",
    overview: "BexSys Integration Platform เชื่อมต่อ SAP Business One ผ่าน Service Layer REST API กับ e-Commerce, WMS, POS, CRM, Banking หรือระบบอื่นๆ ด้วย Middleware ที่เสถียรและ Scalable",
    features: [
      "SAP Service Layer REST API Integration",
      "e-Commerce — Shopee, Lazada, WooCommerce, LINE SHOP",
      "Payment Gateway — Omise, 2C2P, KBank",
      "Logistics — Flash, Kerry, J&T",
      "Custom Middleware — FastAPI, n8n, LangGraph",
      "Webhook & Real-time Event Processing",
    ],
    benefits: [
      { value: "50+", label: "Pre-built Connectors" },
      { value: "Real-time", label: "Data Sync" },
      { value: "99.5%", label: "API Uptime" },
      { value: "REST", label: "Standard Protocol" },
    ],
    cta: "ปรึกษา Integration",
  },
  "ehms": {
    title: "eHMS Helpdesk",
    titleTh: "Enterprise Helpdesk Management",
    badge: "24/7 Support",
    color: "#6B7280",
    hero: "Enterprise helpdesk built for SAP environments",
    heroTh: "ระบบ Helpdesk สำหรับองค์กรที่ใช้ SAP Business One",
    overview: "eHMS (Enterprise Helpdesk Management System) คือระบบ Ticket และ Support Management ที่ integrate กับ SAP B1 โดยตรง ช่วยให้ทีม IT และ ERP Support จัดการปัญหาได้อย่างมีประสิทธิภาพ",
    features: [
      "Ticket Management — สร้าง ติดตาม และปิด Ticket",
      "SLA Management — กำหนดและติดตาม Response Time",
      "SAP B1 Integration — เชื่อมต่อข้อมูล User และ Module",
      "Knowledge Base — คลังความรู้สำหรับแก้ปัญหาตนเอง",
      "Report & Analytics — วิเคราะห์ปัญหาที่พบบ่อย",
      "Multi-channel — Email, Line, Web Portal",
    ],
    benefits: [
      { value: "70%", label: "ลด Resolution Time" },
      { value: "24/7", label: "Self-service Portal" },
      { value: "100%", label: "SLA Visibility" },
      { value: "Auto", label: "Ticket Routing" },
    ],
    cta: "ดู eHMS Demo",
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = SOLUTION_DATA[slug];
  if (!data) return { title: "Solution Not Found" };
  return {
    title: `${data.title} — BexSys ERP Solutions`,
    description: data.overview,
  };
}

export function generateStaticParams() {
  return Object.keys(SOLUTION_DATA).map((slug) => ({ slug }));
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = SOLUTION_DATA[slug];
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-5 text-xs font-semibold uppercase tracking-wide"
              style={{ borderColor: `${data.color}40`, background: `${data.color}15`, color: data.color }}>
              {data.badge}
            </div>
            <h1 className="heading-hero text-white mb-3">
              {data.hero}
              <br />
              <span style={{ color: data.color }}>{data.title}</span>
            </h1>
            <p className="text-gray-400 text-lg mb-4">{data.heroTh}</p>
            <p className="text-gray-500 max-w-2xl leading-relaxed mb-8">{data.overview}</p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/book-demo"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg"
                style={{ background: data.color }}>
                {data.cta} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-semibold text-sm hover:border-white/40 transition-colors">
                ติดต่อผู้เชี่ยวชาญ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {data.benefits.map((b) => (
              <div key={b.label} className="text-center">
                <p className="text-3xl font-extrabold mb-1" style={{ color: data.color }}>{b.value}</p>
                <p className="text-[#6B7280] text-sm">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#F8F9FB] section-padding">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: data.color }}>
                Key Features
              </p>
              <h2 className="heading-lg text-[#111827] mb-6">
                ทุกสิ่งที่คุณต้องการ<br />ในแพลตฟอร์มเดียว
              </h2>
              <div className="space-y-3">
                {data.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: data.color }} />
                    <p className="text-[#374151] text-sm leading-relaxed">{f}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="bg-[#0D1117] rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 dot-pattern opacity-30" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-semibold"
                  style={{ background: `${data.color}20`, color: data.color }}>
                  ● Live Preview
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{data.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{data.titleTh}</p>

                {data.modules && (
                  <div className="grid grid-cols-2 gap-2">
                    {data.modules.map((m) => (
                      <div key={m} className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-2.5 border border-white/5">
                        <div className="w-2 h-2 rounded-full" style={{ background: data.color }} />
                        <span className="text-white text-xs font-medium">{m}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#6DB33F] animate-pulse" />
                  <span className="text-gray-400 text-xs">BexSys Certified Implementation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="container-xl text-center">
          <h2 className="heading-lg text-[#111827] mb-4">สนใจ {data.title}?</h2>
          <p className="text-[#6B7280] mb-8 max-w-xl mx-auto">
            ปรึกษาผู้เชี่ยวชาญ BexSys ฟรี — วิเคราะห์ว่า {data.title} เหมาะกับธุรกิจคุณอย่างไร
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/book-demo"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold hover:opacity-90 transition-opacity shadow-lg"
              style={{ background: data.color }}>
              {data.cta} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/solutions"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-gray-200 text-[#374151] font-semibold hover:border-[#6DB33F] hover:text-[#6DB33F] transition-colors">
              ดู Solutions ทั้งหมด
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
