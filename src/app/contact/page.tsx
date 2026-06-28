"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Send, CheckCircle, Clock, Building2 } from "lucide-react";
import { SITE } from "@/lib/constants";

const SERVICES = [
  "SAP Business One Implementation",
  "SAP Business One Upgrade",
  "SAP Business One Support",
  "ERP Consulting",
  "AI Integration",
  "API Integration",
  "Business Intelligence / BI",
  "Cloud ERP",
  "Workflow Automation",
  "Custom Development",
  "Other / Not sure yet",
];

const INDUSTRIES = [
  "Manufacturing",
  "Distribution / Wholesale",
  "Retail",
  "Service",
  "Food & Beverage",
  "Healthcare",
  "Construction",
  "Logistics",
  "Trading",
  "Other",
];

const BUDGETS = [
  "ต่ำกว่า 500,000 บาท",
  "500,000 – 1,000,000 บาท",
  "1,000,000 – 3,000,000 บาท",
  "3,000,000 – 5,000,000 บาท",
  "มากกว่า 5,000,000 บาท",
  "ยังไม่ได้กำหนด",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    industry: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: POST to /api/contact
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D1117] pt-20 pb-14 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="container-xl relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6DB33F]/30 bg-[#6DB33F]/10 mb-5">
              <span className="text-[#98F109] text-xs font-semibold uppercase tracking-wide">
                ติดต่อเรา
              </span>
            </div>
            <h1 className="heading-xl text-white mb-4">
              พูดคุยกับผู้เชี่ยวชาญ
              <br />
              <span className="gradient-text">SAP Business One</span>
            </h1>
            <p className="body-lg text-gray-400">
              ทีมที่ปรึกษาของเราพร้อมให้คำแนะนำ — ไม่มีค่าใช้จ่าย ไม่มีข้อผูกมัด
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FB] section-padding">
        <div className="container-xl">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* Contact info sidebar */}
            <div className="lg:col-span-2 space-y-5">
              {[
                {
                  icon: <Phone className="w-5 h-5" />,
                  label: "Hotline",
                  value: SITE.phone.hotline,
                  sub: "จ–ศ 09:00–18:00 น.",
                  href: `tel:${SITE.phone.hotline.replace(/-/g, "")}`,
                },
                {
                  icon: <Mail className="w-5 h-5" />,
                  label: "Sales & Consulting",
                  value: SITE.email.sales,
                  sub: "ตอบกลับภายใน 1 วันทำการ",
                  href: `mailto:${SITE.email.sales}`,
                },
                {
                  icon: <Building2 className="w-5 h-5" />,
                  label: "สำนักงานใหญ่",
                  value: "88 PASO Tower ชั้น 27 ยูนิต A2",
                  sub: "ถนนสีลม แขวงสุริยวงศ์ เขตบางรัก กรุงเทพฯ 10500",
                  href: "https://maps.google.com/?q=PASO+Tower+Silom+Bangkok",
                },
                {
                  icon: <Clock className="w-5 h-5" />,
                  label: "เวลาทำการ",
                  value: "วันจันทร์ – วันศุกร์",
                  sub: "09:00 – 18:00 น. (เว้นวันหยุดนักขัตฤกษ์)",
                  href: null,
                },
              ].map((item) => {
                const Tag = item.href ? "a" : "div";
                return (
                  <Tag
                    key={item.label}
                    {...(item.href
                      ? {
                          href: item.href,
                          target: item.href.startsWith("http") ? "_blank" : undefined,
                          rel: "noopener noreferrer",
                        }
                      : {})}
                    className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-[#6DB33F]/30 transition-all group cursor-default"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#6DB33F]/10 flex items-center justify-center text-[#6DB33F] group-hover:bg-[#6DB33F] group-hover:text-white transition-all flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-[#9CA3AF] mb-0.5">{item.label}</p>
                      <p className="font-semibold text-[#111827] text-sm">{item.value}</p>
                      <p className="text-xs text-[#9CA3AF] mt-0.5 leading-relaxed">{item.sub}</p>
                    </div>
                  </Tag>
                );
              })}

              {/* Department emails */}
              <div className="bg-white rounded-2xl p-5 border border-gray-100">
                <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide mb-3">
                  แผนกอีเมล
                </p>
                <div className="space-y-2">
                  {[
                    { label: "Sales", email: SITE.email.sales },
                    { label: "Support", email: SITE.email.support },
                    { label: "Consultant", email: SITE.email.consultant },
                    { label: "Accounting", email: SITE.email.account },
                    { label: "HR", email: SITE.email.hr },
                  ].map((d) => (
                    <div key={d.label} className="flex items-center justify-between">
                      <span className="text-xs text-[#9CA3AF] w-20">{d.label}</span>
                      <a
                        href={`mailto:${d.email}`}
                        className="text-xs text-[#6B7280] hover:text-[#6DB33F] transition-colors"
                      >
                        {d.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=PASO+Tower+Silom+Bangkok"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#6DB33F] hover:underline"
              >
                <MapPin className="w-4 h-4" />
                View on Google Maps
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-white rounded-3xl p-12 border border-gray-100 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#6DB33F]/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-[#6DB33F]" />
                  </div>
                  <h2 className="heading-md text-[#111827] mb-3">ส่งข้อความแล้ว!</h2>
                  <p className="text-[#6B7280] mb-6">
                    ทีมของเราจะติดต่อกลับภายใน 1 วันทำการ
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#6DB33F] text-white text-sm font-semibold hover:bg-[#5fa332] transition-colors"
                  >
                    ส่งข้อความใหม่
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-5"
                >
                  <div>
                    <h2 className="heading-md text-[#111827] mb-1">ส่งข้อความหาเรา</h2>
                    <p className="text-[#9CA3AF] text-sm">กรอกข้อมูลเพื่อให้ทีมติดต่อกลับ</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#374151] mb-1.5">
                        ชื่อ – นามสกุล <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="กรุณากรอกชื่อ"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6DB33F]/40 focus:border-[#6DB33F] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#374151] mb-1.5">
                        บริษัท / องค์กร <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="ชื่อบริษัท"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6DB33F]/40 focus:border-[#6DB33F] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#374151] mb-1.5">
                        อีเมล <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6DB33F]/40 focus:border-[#6DB33F] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#374151] mb-1.5">
                        เบอร์โทรศัพท์
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0xx-xxx-xxxx"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6DB33F]/40 focus:border-[#6DB33F] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#374151] mb-1.5">
                        บริการที่สนใจ
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6DB33F]/40 focus:border-[#6DB33F] transition-colors bg-white text-[#374151]"
                      >
                        <option value="">เลือกบริการ...</option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#374151] mb-1.5">
                        ประเภทธุรกิจ
                      </label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6DB33F]/40 focus:border-[#6DB33F] transition-colors bg-white text-[#374151]"
                      >
                        <option value="">เลือกประเภทธุรกิจ...</option>
                        {INDUSTRIES.map((i) => (
                          <option key={i} value={i}>{i}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#374151] mb-1.5">
                      งบประมาณโครงการ
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6DB33F]/40 focus:border-[#6DB33F] transition-colors bg-white text-[#374151]"
                    >
                      <option value="">เลือกงบประมาณ...</option>
                      {BUDGETS.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#374151] mb-1.5">
                      รายละเอียดเพิ่มเติม
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="เล่าให้เราฟังถึงความต้องการและปัญหาของธุรกิจคุณ..."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6DB33F]/40 focus:border-[#6DB33F] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#6DB33F] text-white font-semibold text-sm hover:bg-[#5fa332] transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-[#6DB33F]/20"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        กำลังส่ง...
                      </>
                    ) : (
                      <>
                        ส่งข้อความ <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-[#9CA3AF] text-center">
                    ข้อมูลของคุณจะถูกเก็บเป็นความลับและใช้เพื่อติดต่อกลับเท่านั้น
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
