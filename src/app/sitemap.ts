import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/solutions`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/solutions/sap-business-one`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/solutions/ai-platform`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/solutions/cloud-erp`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/industries`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/company`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/book-demo`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
  ];
}
