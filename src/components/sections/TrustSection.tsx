import React from "react";
import { STATS } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Shield, Award, Users, CheckCircle } from "lucide-react";

const PARTNERS = [
  { name: "SAP", text: "SAP" },
  { name: "Microsoft", text: "Microsoft" },
  { name: "AWS", text: "AWS" },
  { name: "Azure", text: "Azure" },
  { name: "Google Cloud", text: "Google Cloud" },
  { name: "UiPath", text: "UiPath" },
  { name: "DEPA", text: "DEPA" },
  { name: "Fujitsu", text: "Fujitsu" },
  { name: "ISO 29110", text: "ISO 29110" },
];

const TRUST_BADGES = [
  { icon: <Award className="w-5 h-5" />, text: "SAP Gold Partner" },
  { icon: <Shield className="w-5 h-5" />, text: "ISO 29110 Certified" },
  { icon: <Users className="w-5 h-5" />, text: "100+ Expert Consultants" },
  { icon: <CheckCircle className="w-5 h-5" />, text: "100+ Enterprise Clients" },
];

export function TrustSection() {
  return (
    <section className="bg-[#F8F9FB] section-padding border-b border-gray-100">
      <div className="container-xl">
        {/* Trust badges row */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
          {TRUST_BADGES.map((b) => (
            <div
              key={b.text}
              className="flex items-center gap-2.5 px-5 py-2.5 bg-white rounded-full border border-gray-200 shadow-sm text-sm font-medium text-[#374151]"
            >
              <span className="text-[#6DB33F]">{b.icon}</span>
              {b.text}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className="text-5xl font-bold mb-2"
                style={{
                  background: "linear-gradient(135deg, #6DB33F, #98F109)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}{stat.suffix}
              </div>
              <p className="text-[#6B7280] text-sm font-medium">{stat.label}</p>
              <p className="text-[#9CA3AF] text-xs mt-0.5">{stat.labelTh}</p>
            </div>
          ))}
        </div>

        {/* Partner logos */}
        <div>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#9CA3AF] mb-8">
            Trusted by Leading Organizations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {PARTNERS.map((p) => (
              <div
                key={p.name}
                className="h-8 flex items-center text-gray-300 font-bold text-sm tracking-wide hover:text-[#6DB33F] transition-colors cursor-default select-none"
                title={p.name}
              >
                {p.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
