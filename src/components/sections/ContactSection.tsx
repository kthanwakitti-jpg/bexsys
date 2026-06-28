import React from "react";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Phone, Mail, MapPin, Calendar, MessageSquare, ArrowRight } from "lucide-react";

export function ContactSection() {
  return (
    <section className="bg-white section-padding">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#6DB33F]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#6DB33F]">
                Contact Us
              </span>
            </div>
            <h2 className="heading-xl text-[#111827] mb-4">
              Ready to transform
              <br />
              <span className="gradient-text">your business?</span>
            </h2>
            <p className="body-lg text-[#6B7280] mb-8">
              พูดคุยกับผู้เชี่ยวชาญ SAP Business One ของเราฟรี — ไม่มีค่าใช้จ่าย
              และไม่มีข้อผูกมัด
            </p>

            {/* Contact options */}
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: <Phone className="w-5 h-5" />,
                  label: "โทรหาเรา",
                  value: SITE.phone.hotline,
                  sub: "จ–ศ 09:00–18:00",
                  href: `tel:${SITE.phone.hotline}`,
                },
                {
                  icon: <Mail className="w-5 h-5" />,
                  label: "ส่งอีเมล",
                  value: SITE.email.sales,
                  sub: "ตอบกลับภายใน 1 วันทำการ",
                  href: `mailto:${SITE.email.sales}`,
                },
                {
                  icon: <MapPin className="w-5 h-5" />,
                  label: "เยี่ยมชมออฟฟิศ",
                  value: "88 PASO Tower ชั้น 27",
                  sub: "ถนนสีลม บางรัก กรุงเทพฯ 10500",
                  href: "https://maps.google.com/?q=BexSys+PASO+Tower+Silom",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-[#6DB33F]/30 hover:bg-[#F8F9FB] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#6DB33F]/10 flex items-center justify-center text-[#6DB33F] group-hover:bg-[#6DB33F] group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-[#9CA3AF] mb-0.5">{item.label}</p>
                    <p className="font-semibold text-[#111827] text-sm">{item.value}</p>
                    <p className="text-xs text-[#9CA3AF]">{item.sub}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Department emails */}
            <div className="bg-[#F8F9FB] rounded-2xl p-5 border border-gray-100">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#9CA3AF] mb-3">
                Department Directory
              </p>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(SITE.email).map(([dept, email]) => (
                  <a
                    key={dept}
                    href={`mailto:${email}`}
                    className="text-xs text-[#6B7280] hover:text-[#6DB33F] transition-colors"
                  >
                    <span className="text-[#9CA3AF]">{dept}:</span> {email}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Quick action cards */}
          <div className="space-y-4">
            {[
              {
                icon: <Calendar className="w-6 h-6" />,
                title: "Book a Free Demo",
                titleTh: "จองทดลองใช้งานฟรี",
                desc: "เห็นระบบ SAP B1 จริงในธุรกิจของคุณ — ใช้เวลา 60 นาที",
                cta: "Schedule Demo",
                href: "/book-demo",
                primary: true,
              },
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: "Talk to a Consultant",
                titleTh: "ปรึกษาผู้เชี่ยวชาญ",
                desc: "วิเคราะห์ความต้องการของธุรกิจคุณกับ ERP Consultant โดยตรง",
                cta: "Contact Now",
                href: "/contact",
                primary: false,
              },
            ].map((card) => (
              <div
                key={card.title}
                className={`rounded-2xl p-7 border ${
                  card.primary
                    ? "bg-gradient-to-br from-[#6DB33F] to-[#4a8a2a] border-[#6DB33F] text-white"
                    : "bg-white border-gray-100"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    card.primary ? "bg-white/15" : "bg-[#6DB33F]/10 text-[#6DB33F]"
                  }`}
                >
                  {card.icon}
                </div>
                <h3 className={`font-bold text-lg mb-1 ${card.primary ? "text-white" : "text-[#111827]"}`}>
                  {card.title}
                </h3>
                <p className={`text-xs mb-1 ${card.primary ? "text-green-100" : "text-[#9CA3AF]"}`}>
                  {card.titleTh}
                </p>
                <p className={`text-sm mb-6 leading-relaxed ${card.primary ? "text-green-50" : "text-[#6B7280]"}`}>
                  {card.desc}
                </p>
                <Link
                  href={card.href}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    card.primary
                      ? "bg-white text-[#4a8a2a] hover:bg-green-50"
                      : "bg-[#6DB33F] text-white hover:bg-[#5fa332] shadow-lg shadow-[#6DB33F]/25"
                  }`}
                >
                  {card.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}

            {/* Google Map embed placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 h-40 bg-[#F8F9FB] flex items-center justify-center">
              <a
                href="https://maps.google.com/?q=BexSys+PASO+Tower+Silom+Bangkok"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#6DB33F] font-medium flex items-center gap-2 hover:underline"
              >
                <MapPin className="w-4 h-4" />
                View on Google Maps — PASO Tower, Silom
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
