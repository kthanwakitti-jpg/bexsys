"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import {
  Menu, X, ChevronDown, Phone, Mail,
  Layers, Cloud, Brain, BarChart3, Server,
  Zap, Headphones, Factory, Truck, ShoppingCart,
  UtensilsCrossed, HeartPulse, FlaskConical,
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Layers:          <Layers className="w-4 h-4" />,
  Cloud:           <Cloud className="w-4 h-4" />,
  Brain:           <Brain className="w-4 h-4" />,
  BarChart3:       <BarChart3 className="w-4 h-4" />,
  Server:          <Server className="w-4 h-4" />,
  Zap:             <Zap className="w-4 h-4" />,
  Headphones:      <Headphones className="w-4 h-4" />,
  Factory:         <Factory className="w-4 h-4" />,
  Truck:           <Truck className="w-4 h-4" />,
  ShoppingCart:    <ShoppingCart className="w-4 h-4" />,
  UtensilsCrossed: <UtensilsCrossed className="w-4 h-4" />,
  HeartPulse:      <HeartPulse className="w-4 h-4" />,
  FlaskConical:    <FlaskConical className="w-4 h-4" />,
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#0D1117] text-gray-400 text-xs py-2 hidden lg:block">
        <div className="container-xl flex items-center justify-between">
          <p className="text-[#98F109] font-medium">
            🏆 SAP Business One Gold Partner Thailand — 30+ Years Excellence
          </p>
          <div className="flex items-center gap-6">
            <a href={`tel:${SITE.phone.hotline}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3 h-3" />
              {SITE.phone.hotline}
            </a>
            <a href={`mailto:${SITE.email.sales}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3 h-3" />
              {SITE.email.sales}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm"
            : "bg-white/95 backdrop-blur-xl border-b border-gray-100"
        )}
      >
        <div className="container-xl">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.png"
                alt="BexSys — Inspired by BexSys"
                width={140}
                height={52}
                className="h-11 w-auto object-contain group-hover:opacity-90 transition-opacity"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#374151] hover:text-[#6DB33F] rounded-lg hover:bg-[#6DB33F]/5 transition-all",
                      activeMenu === item.label && "text-[#6DB33F] bg-[#6DB33F]/5"
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          activeMenu === item.label && "rotate-180"
                        )}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && activeMenu === item.label && (
                    <div className="absolute top-full left-0 pt-2 z-50" style={{ minWidth: "280px" }}>
                      <div className="bg-white rounded-2xl border border-gray-100 shadow-2xl shadow-black/10 p-2 overflow-hidden">
                        {/* Header strip */}
                        <div className="px-3 py-2 mb-1 border-b border-gray-50">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-[#9CA3AF]">
                            {item.label}
                          </p>
                        </div>
                        {item.children.map((child) => {
                          const c = child as { label: string; href: string; icon?: string; desc?: string; color?: string };
                          return (
                            <Link
                              key={c.href}
                              href={c.href}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#F8F9FB] transition-all group/item"
                            >
                              {c.icon && c.color ? (
                                <div
                                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-white transition-transform group-hover/item:scale-105"
                                  style={{ background: `linear-gradient(135deg, ${c.color}, ${c.color}99)` }}
                                >
                                  {ICON_MAP[c.icon]}
                                </div>
                              ) : (
                                <span className="w-1.5 h-1.5 rounded-full bg-[#6DB33F]/40 ml-1 flex-shrink-0" />
                              )}
                              <div className="min-w-0">
                                <p className="text-sm font-semibold text-[#111827] group-hover/item:text-[#6DB33F] transition-colors leading-tight">
                                  {c.label}
                                </p>
                                {c.desc && (
                                  <p className="text-xs text-[#9CA3AF] leading-tight mt-0.5 truncate">{c.desc}</p>
                                )}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="text-sm font-medium text-[#374151] hover:text-[#6DB33F] transition-colors"
              >
                Contact
              </Link>
              <Button href="/book-demo" variant="primary" size="md">
                Book Demo
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="container-xl py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-[#374151] hover:text-[#6DB33F] hover:bg-[#6DB33F]/5 rounded-xl transition-all"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-[#6B7280] hover:text-[#6DB33F] hover:bg-[#6DB33F]/5 rounded-lg transition-all"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
                <Button href="/contact" variant="outline" size="md" className="w-full justify-center">
                  Contact Us
                </Button>
                <Button href="/book-demo" variant="primary" size="md" className="w-full justify-center">
                  Book Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
