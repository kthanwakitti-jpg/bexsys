import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { BookOpen, Video, HelpCircle, FileText, ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources — SAP B1 Guides, Blog & FAQ",
  description:
    "คลังความรู้ SAP Business One — บทความ, คู่มือ, Video Tutorial และ FAQ จาก BexSys ผู้เชี่ยวชาญ SAP B1 Thailand",
};

const ARTICLES = [
  {
    category: "SAP B1 Guide",
    categoryColor: "#6DB33F",
    title: "SAP Business One คืออะไร? คู่มือฉบับสมบูรณ์สำหรับ SME ไทย",
    excerpt: "ทำความรู้จัก SAP B1 ระบบ ERP ชั้นนำสำหรับธุรกิจขนาดกลางและขนาดย่อม — Module ที่มี, ราคา, และเหมาะกับธุรกิจแบบไหน",
    readTime: "8 min",
    date: "15 มิ.ย. 2026",
    href: "/resources/sap-b1-guide",
  },
  {
    category: "Implementation",
    categoryColor: "#0078D4",
    title: "5 ขั้นตอน Implement SAP B1 ให้สำเร็จโดยไม่เกินงบประมาณ",
    excerpt: "เรียนรู้ methodology และ best practices จากการ implement SAP B1 มากกว่า 100 โครงการของ BexSys",
    readTime: "6 min",
    date: "10 มิ.ย. 2026",
    href: "/resources/implementation-guide",
  },
  {
    category: "AI & ERP",
    categoryColor: "#7C3AED",
    title: "BexAI: AI Copilot สำหรับ SAP Business One ทำงานอะไรได้บ้าง?",
    excerpt: "ความสามารถของ BexAI ตั้งแต่ Chatbot, OCR, Predictive Analytics จนถึง Dashboard Insight แบบ real-time",
    readTime: "5 min",
    date: "5 มิ.ย. 2026",
    href: "/resources/bexai-overview",
  },
  {
    category: "Finance",
    categoryColor: "#F59E0B",
    title: "SAP B1 Financial Module: ปิดบัญชีให้เร็วขึ้น 50% ด้วย Automation",
    excerpt: "วิธีใช้ SAP B1 ในงานบัญชี — GL, AP, AR, Financial Consolidation และ Tax Report อัตโนมัติ",
    readTime: "7 min",
    date: "1 มิ.ย. 2026",
    href: "/resources/finance-module",
  },
  {
    category: "Integration",
    categoryColor: "#14B8A6",
    title: "SAP Service Layer API: คู่มือ Connect SAP B1 กับระบบภายนอก",
    excerpt: "วิธี integrate SAP B1 กับ e-Commerce, WMS, POS หรือระบบอื่นๆ ผ่าน REST API และ Service Layer",
    readTime: "10 min",
    date: "25 พ.ค. 2026",
    href: "/resources/service-layer-api",
  },
  {
    category: "Manufacturing",
    categoryColor: "#EC4899",
    title: "Production Planning ด้วย SAP B1: ลด WIP และ Lead Time",
    excerpt: "การวางแผนการผลิตแบบ MRP ด้วย SAP B1 — BOM, Production Order, Issue for Production และ Cost Accounting",
    readTime: "9 min",
    date: "20 พ.ค. 2026",
    href: "/resources/production-planning",
  },
];

const FAQS = [
  {
    q: "SAP Business One เหมาะกับธุรกิจขนาดไหน?",
    a: "SAP B1 เหมาะกับธุรกิจ SME และ Mid-Market ที่มีพนักงาน 10–250 คน รายได้ 50 ล้าน – 5,000 ล้านบาท โดยเฉพาะธุรกิจที่ต้องการระบบ ERP ครบวงจรในราคาที่สมเหตุสมผล",
  },
  {
    q: "ใช้เวลา implement SAP B1 นานแค่ไหน?",
    a: "โดยเฉลี่ย 3–6 เดือนสำหรับการ implement มาตรฐาน ขึ้นอยู่กับขนาดองค์กร ความซับซ้อนของ business process และจำนวน module ที่ต้องการ BexSys มี accelerated implementation ที่เริ่มได้ใน 8 สัปดาห์",
  },
  {
    q: "SAP B1 รองรับภาษีไทย (VAT, WHT) ได้ไหม?",
    a: "รองรับครับ SAP B1 Thai Localization ครอบคลุม VAT 7%, Withholding Tax, ภพ.30, ภงด.1/3/53 และ e-Tax Invoice ตามมาตรฐาน กรมสรรพากร",
  },
  {
    q: "ราคา SAP Business One เป็นอย่างไร?",
    a: "SAP B1 มีทั้งแบบ On-Premise License และ Cloud Subscription ราคาขึ้นอยู่กับจำนวน user และ module ที่เลือก ติดต่อ BexSys เพื่อรับ quote ที่เหมาะกับธุรกิจคุณโดยเฉพาะ",
  },
  {
    q: "BexSys ให้ support หลัง go-live อย่างไร?",
    a: "BexSys มี Hypercare 30 วันหลัง go-live ฟรี จากนั้นมี Support Package รายเดือน/รายปี ครอบคลุม Help Desk, Remote Support, On-Site Visit, Bug Fix และ Monthly Health Check",
  },
  {
    q: "SAP B1 integrate กับระบบอื่น เช่น Shopee, Lazada ได้ไหม?",
    a: "ได้ครับ ผ่าน SAP Service Layer REST API BexSys มีประสบการณ์ integrate SAP B1 กับ Shopee, Lazada, WooCommerce, LINE SHOP, custom ERP และระบบอื่นๆ มากมาย",
  },
];

const RESOURCE_CATEGORIES = [
  { icon: <BookOpen className="w-6 h-6" />, label: "Guides & Articles", count: "50+", color: "#6DB33F" },
  { icon: <Video className="w-6 h-6" />, label: "Video Tutorials", count: "30+", color: "#0078D4" },
  { icon: <HelpCircle className="w-6 h-6" />, label: "FAQ", count: "40+", color: "#7C3AED" },
  { icon: <FileText className="w-6 h-6" />, label: "Case Studies", count: "15+", color: "#F59E0B" },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D1117] pt-20 pb-14 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="container-xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6DB33F]/30 bg-[#6DB33F]/10 mb-5">
            <span className="text-[#98F109] text-xs font-semibold uppercase tracking-wide">
              Knowledge Center
            </span>
          </div>
          <h1 className="heading-hero text-white mb-4">
            Learn from SAP B1
            <br />
            <span className="gradient-text">experts</span>
          </h1>
          <p className="body-lg text-gray-400 max-w-2xl mx-auto">
            คลังความรู้ SAP Business One ครบวงจร — บทความ, คู่มือ, Video และ FAQ
            จากทีมที่ปรึกษาที่มีประสบการณ์มากกว่า 30 ปี
          </p>
        </div>
      </section>

      {/* Category chips */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="container-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {RESOURCE_CATEGORIES.map((cat) => (
              <div key={cat.label} className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-[#6DB33F]/30 hover:bg-[#F8F9FB] transition-all cursor-pointer group">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0 transition-transform group-hover:scale-105" style={{ background: `linear-gradient(135deg, ${cat.color}, ${cat.color}88)` }}>
                  {cat.icon}
                </div>
                <div>
                  <p className="font-semibold text-[#111827] text-sm">{cat.label}</p>
                  <p className="text-xs text-[#9CA3AF]">{cat.count} items</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-[#F8F9FB] section-padding">
        <div className="container-xl">
          <SectionHeader
            eyebrow="Latest Articles"
            title="SAP B1 knowledge"
            titleHighlight="hub"
            className="mb-10"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES.map((article) => (
              <Link
                key={article.title}
                href={article.href}
                className="group bg-white rounded-2xl border border-gray-100 hover:shadow-lg hover:border-[#6DB33F]/20 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Color bar */}
                <div className="h-1 w-full" style={{ background: article.categoryColor }} />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: `${article.categoryColor}18`, color: article.categoryColor }}>
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-[#9CA3AF]">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>
                  <h2 className="font-bold text-[#111827] mb-2 text-sm leading-snug group-hover:text-[#6DB33F] transition-colors flex-1">
                    {article.title}
                  </h2>
                  <p className="text-[#6B7280] text-xs leading-relaxed mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#9CA3AF]">{article.date}</span>
                    <span className="text-xs font-semibold flex items-center gap-1 transition-colors" style={{ color: article.categoryColor }}>
                      อ่านต่อ <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white section-padding">
        <div className="container-xl">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently asked"
            titleHighlight="questions"
            subtitle="คำถามที่พบบ่อยเกี่ยวกับ SAP Business One และบริการของ BexSys"
            center
            className="mb-12"
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-[#F8F9FB] rounded-2xl p-6 border border-gray-100">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#6DB33F] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">Q</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#111827] mb-2">{faq.q}</p>
                    <p className="text-[#6B7280] text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-[#6B7280] mb-4">ยังมีคำถามอื่นอีกไหม?</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6DB33F] text-white font-semibold text-sm hover:bg-[#5fa332] transition-colors shadow-lg shadow-[#6DB33F]/25">
              ถามผู้เชี่ยวชาญ <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
