import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/constants";
import {
  Facebook, Linkedin, Youtube, Instagram,
  MapPin, Phone, Mail, ArrowRight,
} from "lucide-react";

const footerLinks = {
  Solutions: [
    { label: "SAP Business One", href: "/solutions/sap-business-one" },
    { label: "Infor M3 CloudSuite", href: "/solutions/infor-m3" },
    { label: "AI Platform", href: "/solutions/ai-platform" },
    { label: "Business Intelligence", href: "/solutions/business-intelligence" },
    { label: "Cloud ERP", href: "/solutions/cloud-erp" },
    { label: "API Integration", href: "/solutions/api-integration" },
  ],
  Services: [
    { label: "ERP Implementation", href: "/services/implementation" },
    { label: "ERP Consulting", href: "/services/consulting" },
    { label: "System Upgrade", href: "/services/upgrade" },
    { label: "Custom Development", href: "/services/custom" },
    { label: "eHMS Helpdesk", href: "/solutions/ehms" },
    { label: "Training", href: "/services/training" },
  ],
  Resources: [
    { label: "Blog", href: "/resources/blog" },
    { label: "Case Studies", href: "/success-stories" },
    { label: "SAP B1 Guide", href: "/resources/sap-b1-guide" },
    { label: "FAQ", href: "/resources/faq" },
    { label: "Video Library", href: "/resources/videos" },
  ],
  Company: [
    { label: "About Us", href: "/company/about" },
    { label: "Vision & Mission", href: "/company/vision" },
    { label: "Awards", href: "/company/awards" },
    { label: "Partners", href: "/company/partners" },
    { label: "Career", href: "/company/career" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0D1117] text-gray-300">
      {/* CTA Band */}
      <div className="border-b border-white/5">
        <div className="container-xl py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white text-2xl font-bold mb-1">
                พร้อมยกระดับธุรกิจด้วย{" "}
                <span className="text-[#98F109]">SAP Business One</span>?
              </h3>
              <p className="text-gray-400">
                ปรึกษาผู้เชี่ยวชาญฟรี — ไม่มีค่าใช้จ่าย ไม่มีข้อผูกมัด
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white text-sm font-semibold hover:border-[#6DB33F] hover:text-[#98F109] transition-all"
              >
                Talk to Consultant
              </Link>
              <Link
                href="/book-demo"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6DB33F] text-white text-sm font-semibold hover:bg-[#5fa332] transition-all shadow-lg shadow-[#6DB33F]/25"
              >
                Request Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex mb-6">
              <Image
                src="/logo.png"
                alt="BexSys — Inspired by BexSys"
                width={130}
                height={48}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Thailand&apos;s leading SAP Business One Gold Partner with 30+ years of enterprise
              digital transformation expertise.
            </p>

            {/* Contact */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 text-[#6DB33F] flex-shrink-0" />
                <span>{SITE.address}</span>
              </div>
              <a href={`tel:${SITE.phone.hotline}`} className="flex items-center gap-3 text-gray-400 hover:text-[#98F109] transition-colors">
                <Phone className="w-4 h-4 text-[#6DB33F] flex-shrink-0" />
                {SITE.phone.hotline}
              </a>
              <a href={`mailto:${SITE.email.sales}`} className="flex items-center gap-3 text-gray-400 hover:text-[#98F109] transition-colors">
                <Mail className="w-4 h-4 text-[#6DB33F] flex-shrink-0" />
                {SITE.email.sales}
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: <Facebook className="w-4 h-4" />, href: SITE.social.facebook, label: "Facebook" },
                { icon: <Linkedin className="w-4 h-4" />, href: SITE.social.linkedin, label: "LinkedIn" },
                { icon: <Youtube className="w-4 h-4" />, href: SITE.social.youtube, label: "YouTube" },
                { icon: <Instagram className="w-4 h-4" />, href: SITE.social.instagram, label: "Instagram" },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#6DB33F] flex items-center justify-center transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#98F109] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} BexSys Co., Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-gray-300 transition-colors">Sitemap</Link>
          </div>
          <p className="text-gray-600 text-xs">
            Powered by BexSys · Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
