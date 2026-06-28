"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Play, Shield, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Glow */}
      <div className="absolute inset-0 bg-[#6DB33F]/20 blur-3xl rounded-full scale-75" />

      {/* Main dashboard card */}
      <div className="relative rounded-2xl border border-white/10 bg-[#161B22]/90 backdrop-blur-xl overflow-hidden shadow-2xl">
        {/* Window bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#0D1117]/50">
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-green-500/70" />
          <div className="flex-1 mx-4">
            <div className="h-5 bg-white/5 rounded-md w-48 mx-auto flex items-center justify-center">
              <span className="text-[10px] text-gray-400">bexsys.com/dashboard</span>
            </div>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-5">
          {/* KPI row */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { label: "Revenue YTD", value: "฿12.4M", change: "+23%", up: true },
              { label: "Open Orders", value: "847", change: "+12%", up: true },
              { label: "Inventory", value: "2,341", change: "-5%", up: false },
            ].map((kpi) => (
              <div key={kpi.label} className="bg-white/5 rounded-xl p-3 border border-white/5">
                <p className="text-[10px] text-gray-400 mb-1">{kpi.label}</p>
                <p className="text-white font-bold text-lg leading-none mb-1">{kpi.value}</p>
                <span className={`text-[10px] font-semibold ${kpi.up ? "text-[#98F109]" : "text-red-400"}`}>
                  {kpi.change}
                </span>
              </div>
            ))}
          </div>

          {/* Chart area */}
          <div className="bg-white/5 rounded-xl p-4 mb-4 border border-white/5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-gray-300 font-medium">Sales Performance 2025</span>
              <span className="text-[10px] text-[#98F109] bg-[#98F109]/10 px-2 py-0.5 rounded-full">Live</span>
            </div>
            {/* Bar chart */}
            <div className="flex items-end gap-1.5 h-16">
              {[40, 65, 45, 80, 70, 55, 90, 75, 85, 60, 95, 88].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    background: i === 10
                      ? "linear-gradient(to top, #6DB33F, #98F109)"
                      : "rgba(109,179,63,0.25)",
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-1">
              {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map((m) => (
                <span key={m} className="text-[8px] text-gray-500">{m}</span>
              ))}
            </div>
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-2 gap-3">
            {/* Recent activity */}
            <div className="bg-white/5 rounded-xl p-3 border border-white/5">
              <p className="text-[10px] text-gray-400 mb-2 font-medium">Recent Transactions</p>
              {[
                { doc: "SO-2025-1847", customer: "ABC Corp", amount: "฿82,500" },
                { doc: "PO-2025-0934", customer: "XYZ Ltd", amount: "฿45,200" },
                { doc: "INV-2025-3201", customer: "DEF Co.", amount: "฿128,000" },
              ].map((tx) => (
                <div key={tx.doc} className="flex items-center justify-between py-1">
                  <div>
                    <p className="text-[9px] text-white font-medium">{tx.doc}</p>
                    <p className="text-[8px] text-gray-400">{tx.customer}</p>
                  </div>
                  <span className="text-[9px] text-[#98F109] font-semibold">{tx.amount}</span>
                </div>
              ))}
            </div>

            {/* AI insights */}
            <div className="bg-gradient-to-br from-[#6DB33F]/10 to-[#98F109]/5 rounded-xl p-3 border border-[#6DB33F]/20">
              <div className="flex items-center gap-1.5 mb-2">
                <div className="w-4 h-4 rounded-full bg-[#98F109] flex items-center justify-center">
                  <span className="text-[7px] font-bold text-black">AI</span>
                </div>
                <p className="text-[10px] text-[#98F109] font-semibold">BexAI Insight</p>
              </div>
              <p className="text-[9px] text-gray-300 leading-relaxed">
                ยอดขายเดือนนี้สูงกว่าเป้า 23% — แนะนำเพิ่มสต็อก SKU-A012 ก่อนสิ้นเดือน
              </p>
              <div className="mt-2 h-0.5 bg-gradient-to-r from-[#6DB33F] to-transparent rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-2 border border-gray-100 animate-float">
        <div className="w-8 h-8 rounded-xl bg-[#6DB33F] flex items-center justify-center">
          <Award className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-[10px] text-gray-500 leading-none">SAP Partner</p>
          <p className="text-xs font-bold text-[#111827]">Gold Level</p>
        </div>
      </div>

      <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-2 border border-gray-100 animate-float delay-300">
        <div className="w-8 h-8 rounded-xl bg-[#0078D4] flex items-center justify-center">
          <Shield className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-[10px] text-gray-500 leading-none">Certified</p>
          <p className="text-xs font-bold text-[#111827]">ISO 29110</p>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="hero-bg relative overflow-hidden min-h-screen flex items-center">
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-40" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6DB33F]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#98F109]/8 rounded-full blur-3xl" />

      <div className="container-xl relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div className="text-center lg:text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6DB33F]/30 bg-[#6DB33F]/10 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#98F109] animate-pulse" />
              <span className="text-[#98F109] text-xs font-semibold tracking-wide uppercase">
                SAP Business One Gold Partner · Thailand
              </span>
            </div>

            {/* Headline */}
            <h1 className="heading-hero text-white mb-6 opacity-0 animate-fade-in-up">
              Digital{" "}
              <span className="gradient-text">Transformation</span>
              <br />
              Starts Here
            </h1>

            {/* Subtitle */}
            <p className="body-lg text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0 opacity-0 animate-fade-in-up delay-200">
              ที่ปรึกษา SAP Business One อันดับ 1 ของไทย ประสบการณ์ 30+ ปี
              ลูกค้า 100+ ราย ผู้เชี่ยวชาญ 100+ คน
            </p>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-10 opacity-0 animate-fade-in-up delay-300">
              {["SAP Business One", "Enterprise AI", "Cloud ERP", "Business Intelligence"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start opacity-0 animate-fade-in-up delay-400">
              <Button href="/book-demo" variant="primary" size="xl">
                Request Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button href="/contact" variant="dark" size="xl">
                Talk to Consultant
              </Button>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-gray-300 hover:text-white transition-colors"
              >
                <Play className="w-4 h-4" />
                Explore Solutions
              </Link>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-4 mt-12 pt-10 border-t border-white/10 opacity-0 animate-fade-in-up delay-500">
              {[
                { v: "30+", l: "Years" },
                { v: "100+", l: "Clients" },
                { v: "500+", l: "Modules" },
                { v: "5★", l: "Rated" },
              ].map((s) => (
                <div key={s.l} className="text-center lg:text-left">
                  <p className="text-2xl font-bold text-white">{s.v}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — dashboard mockup */}
          <div className="hidden lg:block opacity-0 animate-scale-in delay-400">
            <DashboardMockup />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#F8F9FB] to-transparent" />
    </section>
  );
}
