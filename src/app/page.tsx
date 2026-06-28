import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { AISection } from "@/components/sections/AISection";
import { SuccessSection } from "@/components/sections/SuccessSection";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "BexSys | SAP Business One Gold Partner Thailand — Digital Transformation",
  description:
    "ที่ปรึกษาและผู้เชี่ยวชาญ SAP Business One Gold Partner ประสบการณ์ 30+ ปี ลูกค้า 100+ ราย ครอบคลุม ERP, AI, Cloud, BI และ API Integration",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <SolutionsSection />
      <IndustriesSection />
      <AISection />
      <SuccessSection />
      <AwardsSection />
      <ContactSection />
    </>
  );
}
