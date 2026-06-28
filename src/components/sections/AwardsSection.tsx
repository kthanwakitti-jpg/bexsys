import React from "react";
import { AWARDS } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Award, Shield, Star } from "lucide-react";

export function AwardsSection() {
  return (
    <section className="bg-[#F8F9FB] section-padding">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Awards & Certifications"
          title="Recognized for"
          titleHighlight="excellence"
          subtitle="รางวัลและใบรับรองที่ยืนยันความเป็นเลิศของ BexSys ในฐานะ SAP Gold Partner"
          center
          className="mb-14"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-[#6DB33F] via-[#6DB33F]/30 to-transparent hidden md:block" />

          <div className="space-y-10">
            {AWARDS.map((award, i) => (
              <div
                key={award.year}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#6DB33F]/10 flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-[#6DB33F]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-[#6DB33F] bg-[#6DB33F]/10 px-2 py-0.5 rounded-full">
                            {award.year}
                          </span>
                        </div>
                        <h3 className="font-semibold text-[#111827] mb-1">{award.title}</h3>
                        <p className="text-xs text-[#9CA3AF] mb-2">{award.org}</p>
                        <p className="text-sm text-[#6B7280]">{award.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex w-10 h-10 rounded-full bg-[#6DB33F] items-center justify-center flex-shrink-0 shadow-lg shadow-[#6DB33F]/30 z-10">
                  <Star className="w-4 h-4 text-white fill-white" />
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Certification badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "SAP Gold Partner", sub: "SAP Business One", icon: <Award className="w-6 h-6" />, color: "#F59E0B" },
            { title: "ISO 29110", sub: "Software Process", icon: <Shield className="w-6 h-6" />, color: "#0078D4" },
            { title: "DEPA Certified", sub: "Digital Entrepreneur", icon: <Star className="w-6 h-6" />, color: "#7C3AED" },
            { title: "Infor Partner", sub: "M3 CloudSuite", icon: <Award className="w-6 h-6" />, color: "#14B8A6" },
          ].map((cert) => (
            <div
              key={cert.title}
              className="bg-white rounded-2xl p-5 border border-gray-100 text-center hover:shadow-md transition-shadow"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ background: `${cert.color}18`, color: cert.color }}
              >
                {cert.icon}
              </div>
              <p className="font-bold text-[#111827] text-sm">{cert.title}</p>
              <p className="text-[#9CA3AF] text-xs mt-0.5">{cert.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
