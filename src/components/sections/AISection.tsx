import React from "react";
import Link from "next/link";
import {
  Brain, FileSearch, TrendingUp, LayoutDashboard,
  BookOpen, Cpu, FileText, ArrowRight, Sparkles,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";

const AI_FEATURES = [
  {
    icon: <Brain className="w-5 h-5" />,
    title: "AI Assistant",
    titleTh: "ผู้ช่วย AI",
    desc: "SAP B1 expert chatbot ตอบทุกคำถามทันที 24/7",
  },
  {
    icon: <FileSearch className="w-5 h-5" />,
    title: "OCR & Document AI",
    titleTh: "OCR & เอกสาร AI",
    desc: "แปลงเอกสารกระดาษเป็นข้อมูลดิจิทัลอัตโนมัติ",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Predictive Analytics",
    titleTh: "วิเคราะห์เชิงพยากรณ์",
    desc: "คาดการณ์ยอดขาย ความต้องการสินค้า และ Cash Flow",
  },
  {
    icon: <LayoutDashboard className="w-5 h-5" />,
    title: "AI Dashboard",
    titleTh: "Dashboard อัจฉริยะ",
    desc: "Dashboard ที่อัปเดต insight ให้อัตโนมัติทุกวัน",
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "Knowledge Base",
    titleTh: "ฐานความรู้",
    desc: "ค้นหาคำตอบจาก SAP documentation และ best practices",
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "ERP Advisor",
    titleTh: "ERP Advisor",
    desc: "แนะนำโซลูชัน ERP ที่เหมาะกับธุรกิจของคุณ",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Document Analysis",
    titleTh: "วิเคราะห์เอกสาร",
    desc: "วิเคราะห์ใบแจ้งหนี้ สัญญา และรายงานอัตโนมัติ",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Smart Automation",
    titleTh: "Automation อัจฉริยะ",
    desc: "อัตโนมัติกระบวนการซ้ำซ้อนด้วย AI Workflow",
  },
];

export function AISection() {
  return (
    <section className="bg-[#0D1117] section-padding relative overflow-hidden">
      {/* BG effects */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#6DB33F]/8 rounded-full blur-3xl" />

      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#98F109]/30 bg-[#98F109]/10 mb-6">
              <Brain className="w-3.5 h-3.5 text-[#98F109]" />
              <span className="text-[#98F109] text-xs font-semibold tracking-wide uppercase">
                AI-Powered ERP
              </span>
            </div>

            <SectionHeader
              eyebrow=""
              title="Introducing "
              titleHighlight="BexAI"
              subtitle="ผู้ช่วย AI ที่เข้าใจ SAP Business One อย่างลึกซึ้ง — ช่วยให้ทีมของคุณทำงานได้เร็วขึ้น แม่นยำขึ้น และชาญฉลาดขึ้น"
              light
            />

            <div className="mt-8 space-y-3">
              {[
                "ตอบคำถาม SAP B1 ทันที ไม่ต้องรอ Support",
                "วิเคราะห์ข้อมูลบัญชีและรายงาน real-time",
                "แนะนำการตั้งค่าและ configuration ที่เหมาะสม",
                "รองรับภาษาไทยและอังกฤษ",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#6DB33F]/20 border border-[#6DB33F]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#6DB33F]" />
                  </div>
                  <p className="text-gray-300 text-sm">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/solutions/ai-platform"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6DB33F] text-white text-sm font-semibold hover:bg-[#5fa332] transition-colors shadow-lg shadow-[#6DB33F]/25"
              >
                Explore BexAI <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/book-demo"
                className="text-sm text-gray-400 hover:text-white transition-colors font-medium"
              >
                Book a demo →
              </Link>
            </div>
          </div>

          {/* Right — feature grid */}
          <div className="grid grid-cols-2 gap-3">
            {AI_FEATURES.map((feature, i) => (
              <div
                key={feature.title}
                className="glass-card rounded-2xl p-4 hover:border-[#6DB33F]/30 transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#6DB33F]/15 border border-[#6DB33F]/20 flex items-center justify-center text-[#98F109] mb-3 group-hover:bg-[#6DB33F]/25 transition-colors">
                  {feature.icon}
                </div>
                <h4 className="text-white font-semibold text-sm mb-1">{feature.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
