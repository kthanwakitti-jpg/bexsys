import type { Metadata } from "next";
import Link from "next/link";
import { AWARDS, TESTIMONIALS, SITE } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CheckCircle, Users, Award, Star, MapPin, ArrowRight, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "About BexSys — SAP Business One Gold Partner Thailand",
  description:
    "BexSys Co., Ltd. — Thailand's trusted SAP Business One Gold Partner with 30+ years of ERP consulting experience, 100+ consultants, and 100+ enterprise clients.",
};

const TIMELINE = [
  { year: "1994", title: "ก่อตั้งบริษัท", desc: "BexSys เริ่มต้นเป็นบริษัทที่ปรึกษาด้าน ERP ในประเทศไทย" },
  { year: "2005", title: "SAP Business One Partner", desc: "เริ่มเป็นพันธมิตรกับ SAP และนำ SAP B1 มาให้บริการในไทย" },
  { year: "2015", title: "SAP Gold Partner", desc: "ได้รับสถานะ SAP Gold Partner อย่างเป็นทางการ" },
  { year: "2020", title: "AI & Digital Transformation", desc: "เปิดตัว BexAI Platform สำหรับ AI Integration บน SAP B1" },
  { year: "2024", title: "DEPA Digital Entrepreneur", desc: "ได้รับรางวัล DEPA Digital Entrepreneur ประจำปี 2024" },
];

const LEADERSHIP = [
  {
    name: "BexSys Executive Team",
    role: "SAP Business One Experts",
    bio: "ทีมผู้บริหารที่มีประสบการณ์ด้าน ERP, AI และ Digital Transformation มากกว่า 20 ปี",
    initials: "BX",
  },
  {
    name: "SAP Certified Consultants",
    role: "100+ Specialists",
    bio: "ที่ปรึกษา SAP B1 ที่ผ่านการรับรองจาก SAP ครอบคลุมทุก Module",
    initials: "SC",
  },
  {
    name: "AI & Technology Team",
    role: "Innovation Division",
    bio: "ทีมวิศวกรด้าน AI, API Integration และ Cloud Architecture",
    initials: "AI",
  },
];

const VALUES = [
  { title: "Expertise", desc: "30+ ปีของประสบการณ์ ERP ที่ไม่มีใครเทียบ", icon: "🎯" },
  { title: "Reliability", desc: "ลูกค้าไว้วางใจมากกว่า 100 องค์กรทั่วประเทศ", icon: "🛡️" },
  { title: "Innovation", desc: "นำ AI และ Cloud มาผสานกับ SAP B1", icon: "⚡" },
  { title: "Partnership", desc: "เราเป็นพันธมิตรระยะยาว ไม่ใช่แค่ Vendor", icon: "🤝" },
];

export default function CompanyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D1117] pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-[#6DB33F]/8 rounded-full blur-3xl" />
        <div className="container-xl relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6DB33F]/30 bg-[#6DB33F]/10 mb-5">
              <span className="text-[#98F109] text-xs font-semibold uppercase tracking-wide">
                About BexSys
              </span>
            </div>
            <h1 className="heading-hero text-white mb-4">
              Thailand's trusted
              <br />
              <span className="gradient-text">SAP Business One</span>
              <br />
              Gold Partner
            </h1>
            <p className="body-lg text-gray-400 max-w-2xl">
              กว่า 30 ปีของการเป็นที่ปรึกษาและผู้เชี่ยวชาญ ERP ที่ได้รับความไว้วางใจจากองค์กรชั้นนำทั่วประเทศไทย
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "30+", label: "ปีประสบการณ์", sub: "Years of Excellence" },
              { value: "100+", label: "ลูกค้าองค์กร", sub: "Enterprise Clients" },
              { value: "100+", label: "ที่ปรึกษา", sub: "SAP Consultants" },
              { value: "500+", label: "SAP Modules", sub: "Implemented" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-4xl font-extrabold text-[#6DB33F] mb-1">{s.value}</p>
                <p className="font-semibold text-[#111827] text-sm">{s.label}</p>
                <p className="text-[#9CA3AF] text-xs">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-[#F8F9FB] section-padding">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                eyebrow="Our Mission"
                title="Simplifying enterprise"
                titleHighlight="through intelligence"
                subtitle="BexSys มุ่งมั่นในการทำให้ระบบ ERP ขององค์กรง่ายขึ้น ชาญฉลาดขึ้น และตอบโจทย์ธุรกิจมากขึ้นผ่านเทคโนโลยี AI และ Digital Transformation"
              />
              <div className="mt-8 grid grid-cols-2 gap-4">
                {VALUES.map((v) => (
                  <div key={v.title} className="bg-white rounded-2xl p-5 border border-gray-100">
                    <p className="text-2xl mb-2">{v.icon}</p>
                    <p className="font-bold text-[#111827] text-sm mb-1">{v.title}</p>
                    <p className="text-[#6B7280] text-xs leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Office info */}
            <div className="space-y-4">
              <div className="bg-[#0D1117] rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 dot-pattern opacity-20" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-[#6DB33F] flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-white font-semibold">สำนักงานใหญ่</p>
                  </div>
                  <p className="text-[#98F109] font-bold mb-1">BexSys Co., Ltd.</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    88 PASO Tower ชั้น 27 ยูนิต A2<br />
                    ถนนสีลม แขวงสุริยวงศ์<br />
                    เขตบางรัก กรุงเทพมหานคร 10500<br />
                    ประเทศไทย
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                    <p className="text-sm text-gray-400">
                      <span className="text-gray-500">Hotline: </span>
                      <span className="text-white">{SITE.phone.hotline}</span>
                    </p>
                    <p className="text-sm text-gray-400">
                      <span className="text-gray-500">Sales: </span>
                      <span className="text-white">{SITE.email.sales}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Award className="w-5 h-5" />, label: "SAP Gold Partner", color: "#F59E0B" },
                  { icon: <Shield className="w-5 h-5" />, label: "ISO 29110 Certified", color: "#0078D4" },
                  { icon: <Star className="w-5 h-5" />, label: "4× Award Winner", color: "#7C3AED" },
                  { icon: <Users className="w-5 h-5" />, label: "100+ Consultants", color: "#6DB33F" },
                ].map((b) => (
                  <div key={b.label} className="bg-white rounded-2xl p-4 border border-gray-100 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${b.color}18`, color: b.color }}>
                      {b.icon}
                    </div>
                    <p className="text-xs font-semibold text-[#111827]">{b.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white section-padding">
        <div className="container-xl">
          <SectionHeader
            eyebrow="Our Journey"
            title="30 years of"
            titleHighlight="excellence"
            center
            className="mb-14"
          />
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#6DB33F] to-transparent" />
            <div className="space-y-8">
              {TIMELINE.map((item) => (
                <div key={item.year} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#6DB33F] flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-lg shadow-[#6DB33F]/30 z-10">
                    {item.year.slice(2)}
                  </div>
                  <div className="bg-[#F8F9FB] rounded-2xl p-5 flex-1 border border-gray-100">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-[#6DB33F]">{item.year}</span>
                    </div>
                    <h3 className="font-bold text-[#111827] mb-1">{item.title}</h3>
                    <p className="text-[#6B7280] text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="bg-[#F8F9FB] section-padding">
        <div className="container-xl">
          <SectionHeader
            eyebrow="Awards & Recognition"
            title="Recognized by"
            titleHighlight="industry leaders"
            center
            className="mb-10"
          />
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {AWARDS.map((award) => (
              <div key={award.year} className="bg-white rounded-2xl p-6 border border-gray-100 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-[#F59E0B]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#6DB33F] bg-[#6DB33F]/10 px-2 py-0.5 rounded-full">{award.year}</span>
                  <h3 className="font-semibold text-[#111827] text-sm mt-1.5 mb-0.5">{award.title}</h3>
                  <p className="text-xs text-[#9CA3AF]">{award.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white section-padding">
        <div className="container-xl">
          <SectionHeader
            eyebrow="Our Team"
            title="Expert team,"
            titleHighlight="proven results"
            center
            className="mb-10"
          />
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {LEADERSHIP.map((member) => (
              <div key={member.name} className="bg-[#F8F9FB] rounded-2xl p-6 border border-gray-100 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6DB33F] to-[#4a8a2a] flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {member.initials}
                </div>
                <h3 className="font-bold text-[#111827] mb-1">{member.name}</h3>
                <p className="text-xs text-[#6DB33F] font-semibold mb-3">{member.role}</p>
                <p className="text-[#6B7280] text-xs leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0D1117] py-16 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="container-xl text-center relative z-10">
          <h2 className="heading-lg text-white mb-4">
            พร้อมเริ่มต้น<span className="gradient-text"> Digital Transformation</span>?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            ปรึกษาผู้เชี่ยวชาญ SAP Business One ของเราฟรี — วิเคราะห์ความต้องการธุรกิจของคุณโดยไม่มีค่าใช้จ่าย
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/book-demo"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#6DB33F] text-white font-semibold hover:bg-[#5fa332] transition-colors shadow-lg shadow-[#6DB33F]/25"
            >
              Book Free Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/20 text-white font-semibold hover:border-[#6DB33F] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
