import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  Settings, RefreshCw, Headphones, GraduationCap,
  Code2, ArrowRight, CheckCircle, Clock, Users, Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services — ERP Implementation, Consulting & Support",
  description:
    "บริการครบวงจรจาก BexSys — SAP Business One Implementation, ERP Consulting, System Upgrade, Support, Training และ Custom Development",
};

const SERVICES = [
  {
    id: "implementation",
    icon: <Settings className="w-7 h-7" />,
    color: "#6DB33F",
    badge: "Core Service",
    title: "ERP Implementation",
    titleTh: "การ Implement ระบบ ERP",
    desc: "บริการ implement SAP Business One แบบ end-to-end ตั้งแต่วิเคราะห์ business process ไปจนถึง go-live และ hypercare",
    features: [
      "Business Process Analysis",
      "System Configuration",
      "Data Migration",
      "User Training",
      "Go-Live Support",
      "Post-Implementation Hypercare",
    ],
    duration: "3–6 เดือน",
    href: "/services/implementation",
  },
  {
    id: "consulting",
    icon: <Users className="w-7 h-7" />,
    color: "#0078D4",
    badge: "Advisory",
    title: "ERP Consulting",
    titleTh: "ที่ปรึกษา ERP",
    desc: "ผู้เชี่ยวชาญด้าน SAP B1 วิเคราะห์ความต้องการธุรกิจ แนะนำ solution ที่เหมาะสม และวางแผนโครงการ",
    features: [
      "Needs Assessment",
      "Solution Design",
      "ROI Analysis",
      "Project Planning",
      "Change Management",
      "Vendor Selection",
    ],
    duration: "2–4 สัปดาห์",
    href: "/services/consulting",
  },
  {
    id: "upgrade",
    icon: <RefreshCw className="w-7 h-7" />,
    color: "#7C3AED",
    badge: "Upgrade",
    title: "System Upgrade & Migration",
    titleTh: "อัปเกรดและย้ายระบบ",
    desc: "อัปเกรด SAP B1 เป็น version ล่าสุด หรือย้ายจากระบบ ERP อื่นมาสู่ SAP B1 โดยไม่กระทบการดำเนินธุรกิจ",
    features: [
      "Version Upgrade",
      "Database Migration (MSSQL → HANA)",
      "Legacy System Migration",
      "Data Cleansing",
      "Testing & Validation",
      "Rollback Plan",
    ],
    duration: "1–3 เดือน",
    href: "/services/upgrade",
  },
  {
    id: "support",
    icon: <Headphones className="w-7 h-7" />,
    color: "#F59E0B",
    badge: "24/7 Support",
    title: "SAP B1 Support",
    titleTh: "บริการ Support",
    desc: "ทีม support ที่พร้อมช่วยเหลือตลอดเวลา ทั้งปัญหาระบบ การ customize และ performance tuning",
    features: [
      "Help Desk (Ticket System)",
      "Remote Support",
      "On-Site Support",
      "Bug Fix & Patch",
      "Performance Tuning",
      "Monthly Health Check",
    ],
    duration: "รายเดือน / รายปี",
    href: "/services/support",
  },
  {
    id: "training",
    icon: <GraduationCap className="w-7 h-7" />,
    color: "#14B8A6",
    badge: "Training",
    title: "User Training",
    titleTh: "ฝึกอบรมผู้ใช้งาน",
    desc: "หลักสูตรฝึกอบรม SAP B1 ทั้งแบบ onsite และ online ครอบคลุมทุก module ตั้งแต่ basic จนถึง advanced",
    features: [
      "End-User Training",
      "Key-User Training",
      "Administrator Training",
      "Custom Curriculum",
      "Training Materials",
      "Post-Training Assessment",
    ],
    duration: "1–5 วัน",
    href: "/services/training",
  },
  {
    id: "custom",
    icon: <Code2 className="w-7 h-7" />,
    color: "#EC4899",
    badge: "Bespoke",
    title: "Custom Development",
    titleTh: "พัฒนาระบบเฉพาะทาง",
    desc: "พัฒนา Add-on, Report, Integration และ Automation ที่ตรงกับ business process เฉพาะของธุรกิจคุณ",
    features: [
      "SAP B1 Add-on",
      "Crystal Report",
      "API Integration",
      "Workflow Automation",
      "Web Portal",
      "Mobile Application",
    ],
    duration: "ขึ้นกับ scope",
    href: "/services/custom",
  },
];

const PROCESS = [
  { step: "01", title: "Discovery", desc: "วิเคราะห์ business process และความต้องการ", color: "#6DB33F" },
  { step: "02", title: "Design", desc: "ออกแบบ solution และวางแผนโครงการ", color: "#0078D4" },
  { step: "03", title: "Build", desc: "Configure ระบบ พัฒนา Add-on และ Integration", color: "#7C3AED" },
  { step: "04", title: "Test", desc: "ทดสอบระบบและ UAT กับผู้ใช้งานจริง", color: "#F59E0B" },
  { step: "05", title: "Go-Live", desc: "เปิดใช้งานระบบและ Hypercare 30 วัน", color: "#14B8A6" },
  { step: "06", title: "Support", desc: "ดูแลหลัง go-live และ continuous improvement", color: "#EC4899" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D1117] pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#6DB33F]/8 rounded-full blur-3xl" />
        <div className="container-xl relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6DB33F]/30 bg-[#6DB33F]/10 mb-5">
              <span className="text-[#98F109] text-xs font-semibold uppercase tracking-wide">
                Our Services
              </span>
            </div>
            <h1 className="heading-hero text-white mb-4">
              End-to-end ERP services
              <br />
              <span className="gradient-text">from experts</span>
            </h1>
            <p className="body-lg text-gray-400 max-w-2xl">
              ครบทุกบริการที่ธุรกิจต้องการ — ตั้งแต่วางแผนจนถึง go-live และ support ระยะยาว
              โดยทีมที่ปรึกษา SAP B1 ที่มีประสบการณ์มากกว่า 30 ปี
            </p>
            <div className="flex gap-4 mt-8">
              <Link href="/book-demo" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6DB33F] text-white font-semibold text-sm hover:bg-[#5fa332] transition-colors shadow-lg shadow-[#6DB33F]/25">
                ปรึกษาฟรี <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-semibold text-sm hover:border-[#6DB33F] transition-colors">
                ติดต่อเรา
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-[#F8F9FB] section-padding">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc) => (
              <div key={svc.id} className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-xl hover:border-[#6DB33F]/20 transition-all duration-300 group flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white transition-transform group-hover:scale-105 duration-300"
                    style={{ background: `linear-gradient(135deg, ${svc.color}, ${svc.color}99)` }}
                  >
                    {svc.icon}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F8F9FB] text-[#6B7280] border border-gray-100">
                    {svc.badge}
                  </span>
                </div>

                <h2 className="font-bold text-[#111827] text-lg mb-1">{svc.title}</h2>
                <p className="text-xs text-[#9CA3AF] mb-3">{svc.titleTh}</p>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-5 flex-1">{svc.desc}</p>

                <div className="space-y-1.5 mb-5">
                  {svc.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: svc.color }} />
                      <span className="text-xs text-[#374151]">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 text-xs text-[#9CA3AF]">
                    <Clock className="w-3.5 h-3.5" />
                    {svc.duration}
                  </div>
                  <Link
                    href={svc.href}
                    className="text-xs font-semibold flex items-center gap-1 transition-colors hover:gap-2"
                    style={{ color: svc.color }}
                  >
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="bg-white section-padding">
        <div className="container-xl">
          <SectionHeader
            eyebrow="Our Process"
            title="Proven implementation"
            titleHighlight="methodology"
            subtitle="กระบวนการที่ผ่านการพิสูจน์แล้วกว่า 100+ โครงการ ให้คุณ go-live ได้ตรงเวลาและตรงงบประมาณ"
            center
            className="mb-14"
          />
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {PROCESS.map((p, i) => (
              <div key={p.step} className="text-center relative">
                {i < PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-px bg-gray-100 z-0" />
                )}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 relative z-10 text-white font-bold text-lg"
                  style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}88)` }}
                >
                  {p.step}
                </div>
                <h3 className="font-bold text-[#111827] text-sm mb-1">{p.title}</h3>
                <p className="text-[#9CA3AF] text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why BexSys */}
      <section className="bg-[#F8F9FB] section-padding">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                eyebrow="Why BexSys"
                title="What makes us"
                titleHighlight="different"
                subtitle="ไม่ใช่แค่ vendor — เราเป็นพันธมิตรระยะยาวที่เข้าใจธุรกิจของคุณ"
              />
              <div className="mt-8 space-y-4">
                {[
                  { icon: "⭐", title: "SAP Gold Partner", desc: "ได้รับสถานะสูงสุดจาก SAP ยืนยันความเชี่ยวชาญและคุณภาพ" },
                  { icon: "🎓", title: "100+ Certified Consultants", desc: "ทีมที่ปรึกษาที่ผ่านการรับรองจาก SAP ครอบคลุมทุก module" },
                  { icon: "📋", title: "ISO 29110 Certified", desc: "กระบวนการทำงานได้มาตรฐานสากล ลดความเสี่ยงโครงการ" },
                  { icon: "🤖", title: "AI-Powered Approach", desc: "ใช้ AI ช่วย implement เร็วขึ้น แม่นยำขึ้น และ support ดีขึ้น" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-[#111827] text-sm mb-0.5">{item.title}</p>
                      <p className="text-[#6B7280] text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-[#0D1117] rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute inset-0 dot-pattern opacity-30" />
              <div className="relative z-10 grid grid-cols-2 gap-6">
                {[
                  { value: "30+", label: "ปีประสบการณ์", color: "#6DB33F" },
                  { value: "100+", label: "โครงการสำเร็จ", color: "#98F109" },
                  { value: "98%", label: "ลูกค้าพึงพอใจ", color: "#F59E0B" },
                  { value: "30 วัน", label: "Hypercare หลัง Go-Live", color: "#0078D4" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/5 rounded-2xl p-5 border border-white/5">
                    <p className="font-black text-3xl mb-1" style={{ color: s.color }}>{s.value}</p>
                    <p className="text-gray-400 text-sm">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="container-xl text-center">
          <h2 className="heading-lg text-[#111827] mb-4">พร้อมเริ่มโครงการ ERP?</h2>
          <p className="text-[#6B7280] mb-8 max-w-xl mx-auto">
            ปรึกษาผู้เชี่ยวชาญฟรี — วิเคราะห์ความต้องการและเสนอ solution ที่เหมาะสมกับธุรกิจคุณ
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/book-demo" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#6DB33F] text-white font-semibold hover:bg-[#5fa332] transition-colors shadow-lg shadow-[#6DB33F]/25">
              นัดปรึกษาฟรี <ArrowRight className="w-4 h-4" />
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
