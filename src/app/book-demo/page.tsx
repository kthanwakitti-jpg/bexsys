"use client";

import { useState } from "react";
import { Calendar, Clock, CheckCircle, Monitor, Users, Zap } from "lucide-react";
import { SITE } from "@/lib/constants";

const DEMO_TYPES = [
  {
    id: "sap-b1",
    title: "SAP Business One Demo",
    desc: "ชมระบบ ERP ครบวงจรที่เหมาะกับธุรกิจของคุณ",
    duration: "60 นาที",
    icon: <Monitor className="w-5 h-5" />,
  },
  {
    id: "ai-platform",
    title: "BexAI Platform Demo",
    desc: "AI Copilot, OCR, Predictive Analytics บนระบบ SAP B1",
    duration: "45 นาที",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: "consultation",
    title: "ERP Consultation",
    desc: "ปรึกษาผู้เชี่ยวชาญเพื่อวิเคราะห์ความต้องการธุรกิจ",
    duration: "30 นาที",
    icon: <Users className="w-5 h-5" />,
  },
];

const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30",
];

const INDUSTRIES = [
  "Manufacturing", "Distribution / Wholesale", "Retail", "Service",
  "Food & Beverage", "Healthcare", "Construction", "Logistics", "Trading", "Other",
];

export default function BookDemoPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    demoType: "sap-b1",
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    employees: "",
    date: "",
    time: "",
    notes: "",
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
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  // Get min date (today)
  const today = new Date().toISOString().split("T")[0];
  const selectedDemo = DEMO_TYPES.find((d) => d.id === formData.demoType);

  if (submitted) {
    return (
      <section className="min-h-screen bg-[#F8F9FB] flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl p-12 border border-gray-100 max-w-md w-full text-center shadow-sm">
          <div className="w-20 h-20 rounded-full bg-[#6DB33F]/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-[#6DB33F]" />
          </div>
          <h1 className="heading-md text-[#111827] mb-3">จองสำเร็จแล้ว!</h1>
          <p className="text-[#6B7280] mb-2">
            ขอบคุณ <strong>{formData.name}</strong> ที่สนใจ {selectedDemo?.title}
          </p>
          <p className="text-sm text-[#9CA3AF] mb-6">
            ทีมของเราจะส่งอีเมลยืนยันไปที่ <strong className="text-[#6B7280]">{formData.email}</strong>{" "}
            ภายใน 1 วันทำการพร้อมลิงก์ Meeting
          </p>
          <div className="bg-[#F8F9FB] rounded-2xl p-4 mb-6 text-sm text-left space-y-2">
            <div className="flex justify-between">
              <span className="text-[#9CA3AF]">ประเภท</span>
              <span className="text-[#111827] font-medium">{selectedDemo?.title}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#9CA3AF]">วันที่</span>
              <span className="text-[#111827] font-medium">{formData.date}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#9CA3AF]">เวลา</span>
              <span className="text-[#111827] font-medium">{formData.time} น.</span>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => { setSubmitted(false); setStep(1); setFormData({ demoType: "sap-b1", name: "", company: "", email: "", phone: "", industry: "", employees: "", date: "", time: "", notes: "" }); }}
              className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-[#374151] hover:border-[#6DB33F] hover:text-[#6DB33F] transition-colors"
            >
              จองใหม่
            </button>
            <a
              href={`mailto:${SITE.email.sales}`}
              className="flex-1 px-4 py-2.5 rounded-xl bg-[#6DB33F] text-white text-sm font-semibold text-center hover:bg-[#5fa332] transition-colors"
            >
              ติดต่อ Sales
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D1117] pt-20 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="container-xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6DB33F]/30 bg-[#6DB33F]/10 mb-5">
            <span className="text-[#98F109] text-xs font-semibold uppercase tracking-wide">
              Free Demo
            </span>
          </div>
          <h1 className="heading-xl text-white mb-4">
            จองทดลองใช้งานฟรี
            <br />
            <span className="gradient-text">ไม่มีค่าใช้จ่าย</span>
          </h1>
          <p className="text-gray-400 max-w-xl">
            เลือกวันและเวลาที่สะดวก — ผู้เชี่ยวชาญ SAP B1 จะสาธิตระบบตรงตามธุรกิจของคุณ
          </p>
        </div>
      </section>

      {/* Progress */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="container-xl">
          <div className="flex items-center gap-3 max-w-lg">
            {["เลือกประเภท", "ข้อมูลของคุณ", "เลือกวันเวลา"].map((label, i) => (
              <div key={label} className="flex items-center gap-2 flex-1">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    step > i + 1
                      ? "bg-[#6DB33F] text-white"
                      : step === i + 1
                      ? "bg-[#6DB33F] text-white"
                      : "bg-gray-100 text-[#9CA3AF]"
                  }`}
                >
                  {step > i + 1 ? "✓" : i + 1}
                </div>
                <span className={`text-xs font-medium ${step === i + 1 ? "text-[#111827]" : "text-[#9CA3AF]"}`}>
                  {label}
                </span>
                {i < 2 && <div className="flex-1 h-px bg-gray-100" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-[#F8F9FB] section-padding">
        <div className="container-xl max-w-4xl">
          <form onSubmit={handleSubmit}>

            {/* Step 1: Demo type */}
            {step === 1 && (
              <div>
                <h2 className="heading-md text-[#111827] mb-2">เลือกประเภท Demo</h2>
                <p className="text-[#6B7280] text-sm mb-6">เลือกหัวข้อที่ตรงกับความต้องการของคุณ</p>
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {DEMO_TYPES.map((demo) => (
                    <button
                      key={demo.id}
                      type="button"
                      onClick={() => setFormData((p) => ({ ...p, demoType: demo.id }))}
                      className={`text-left p-6 rounded-2xl border-2 transition-all ${
                        formData.demoType === demo.id
                          ? "border-[#6DB33F] bg-[#6DB33F]/5 shadow-md"
                          : "border-gray-100 bg-white hover:border-[#6DB33F]/40"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                          formData.demoType === demo.id
                            ? "bg-[#6DB33F] text-white"
                            : "bg-gray-100 text-[#6B7280]"
                        }`}
                      >
                        {demo.icon}
                      </div>
                      <h3 className="font-bold text-[#111827] text-sm mb-1">{demo.title}</h3>
                      <p className="text-[#6B7280] text-xs mb-3 leading-relaxed">{demo.desc}</p>
                      <div className="flex items-center gap-1 text-[#9CA3AF] text-xs">
                        <Clock className="w-3 h-3" />
                        {demo.duration}
                      </div>
                    </button>
                  ))}
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-8 py-3 rounded-xl bg-[#6DB33F] text-white font-semibold text-sm hover:bg-[#5fa332] transition-colors shadow-lg shadow-[#6DB33F]/20"
                  >
                    ถัดไป →
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Contact info */}
            {step === 2 && (
              <div>
                <h2 className="heading-md text-[#111827] mb-2">ข้อมูลของคุณ</h2>
                <p className="text-[#6B7280] text-sm mb-6">เพื่อให้ทีมเตรียม Demo ตรงกับธุรกิจของคุณ</p>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4 mb-6">
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
                      <label className="block text-xs font-semibold text-[#374151] mb-1.5">เบอร์โทร</label>
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
                      <label className="block text-xs font-semibold text-[#374151] mb-1.5">ประเภทธุรกิจ</label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6DB33F]/40 focus:border-[#6DB33F] transition-colors bg-white text-[#374151]"
                      >
                        <option value="">เลือกประเภทธุรกิจ...</option>
                        {INDUSTRIES.map((i) => <option key={i} value={i}>{i}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#374151] mb-1.5">จำนวนพนักงาน</label>
                      <select
                        name="employees"
                        value={formData.employees}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6DB33F]/40 focus:border-[#6DB33F] transition-colors bg-white text-[#374151]"
                      >
                        <option value="">เลือกจำนวน...</option>
                        {["1–50 คน", "51–200 คน", "201–500 คน", "500+ คน"].map((e) => (
                          <option key={e} value={e}>{e}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#374151] mb-1.5">
                      สิ่งที่ต้องการจาก Demo / คำถามล่วงหน้า
                    </label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="เช่น ต้องการดูระบบ Inventory โดยเฉพาะ, อยากทราบราคา..."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6DB33F]/40 focus:border-[#6DB33F] transition-colors resize-none"
                    />
                  </div>
                </div>
                <div className="flex gap-3 justify-between">
                  <button type="button" onClick={() => setStep(1)} className="px-6 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-[#374151] hover:border-[#6DB33F] hover:text-[#6DB33F] transition-colors">
                    ← ย้อนกลับ
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (!formData.name || !formData.company || !formData.email) return;
                      setStep(3);
                    }}
                    className="px-8 py-2.5 rounded-xl bg-[#6DB33F] text-white font-semibold text-sm hover:bg-[#5fa332] transition-colors"
                  >
                    ถัดไป →
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Date & Time */}
            {step === 3 && (
              <div>
                <h2 className="heading-md text-[#111827] mb-2">เลือกวันและเวลา</h2>
                <p className="text-[#6B7280] text-sm mb-6">เลือกช่วงเวลาที่สะดวกสำหรับ {selectedDemo?.title}</p>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-6 space-y-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#374151] mb-1.5">
                      วันที่ <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="date"
                      name="date"
                      min={today}
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full sm:w-72 px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6DB33F]/40 focus:border-[#6DB33F] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#374151] mb-3">
                      เวลา <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                      {TIME_SLOTS.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setFormData((p) => ({ ...p, time: slot }))}
                          className={`py-2 rounded-xl text-sm font-medium border transition-all ${
                            formData.time === slot
                              ? "bg-[#6DB33F] text-white border-[#6DB33F]"
                              : "border-gray-200 text-[#374151] hover:border-[#6DB33F] hover:text-[#6DB33F]"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Summary */}
                  {formData.date && formData.time && (
                    <div className="bg-[#F8F9FB] rounded-xl p-4 text-sm space-y-1.5">
                      <p className="font-semibold text-[#111827] mb-2">สรุปการจอง</p>
                      <div className="flex items-center gap-2 text-[#6B7280]">
                        <Calendar className="w-4 h-4 text-[#6DB33F]" />
                        {formData.date} เวลา {formData.time} น.
                      </div>
                      <div className="flex items-center gap-2 text-[#6B7280]">
                        <Monitor className="w-4 h-4 text-[#6DB33F]" />
                        {selectedDemo?.title} ({selectedDemo?.duration})
                      </div>
                      <div className="flex items-center gap-2 text-[#6B7280]">
                        <Clock className="w-4 h-4 text-[#6DB33F]" />
                        ผ่าน Online Meeting (ลิงก์จะส่งทางอีเมล)
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex gap-3 justify-between">
                  <button type="button" onClick={() => setStep(2)} className="px-6 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-[#374151] hover:border-[#6DB33F] hover:text-[#6DB33F] transition-colors">
                    ← ย้อนกลับ
                  </button>
                  <button
                    type="submit"
                    disabled={!formData.date || !formData.time || loading}
                    className="px-8 py-2.5 rounded-xl bg-[#6DB33F] text-white font-semibold text-sm hover:bg-[#5fa332] transition-colors disabled:opacity-50 shadow-lg shadow-[#6DB33F]/20 flex items-center gap-2"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        กำลังจอง...
                      </>
                    ) : (
                      "ยืนยันการจอง ✓"
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
