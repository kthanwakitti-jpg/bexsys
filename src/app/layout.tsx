import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | SAP Business One Gold Partner Thailand`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "BexSys — Thailand's leading SAP Business One Gold Partner with 30+ years of enterprise ERP consulting experience. Implementation, AI Integration, Cloud ERP, and Business Intelligence.",
  keywords: [
    "SAP Business One",
    "SAP B1 Thailand",
    "ERP Consultant Thailand",
    "SAP Gold Partner",
    "ERP Implementation",
    "Digital Transformation",
    "AI ERP",
    "Cloud ERP",
    "BexSys",
    "SAP Business One Thailand",
  ],
  authors: [{ name: "BexSys Co., Ltd.", url: SITE.url }],
  creator: "BexSys Co., Ltd.",
  openGraph: {
    type: "website",
    locale: "th_TH",
    alternateLocale: ["en_US"],
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | SAP Business One Gold Partner Thailand`,
    description:
      "Thailand's leading SAP Business One Gold Partner — Enterprise ERP, AI Integration, Cloud Solutions, 30+ Years Experience.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BexSys — SAP Business One Gold Partner Thailand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | SAP Business One Gold Partner`,
    description: "Thailand's leading SAP Business One Gold Partner — 30+ Years, 100+ Clients",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: {
    google: "CcqV_K4sLAyiwQQMDtBf7XRJP0voRvDBa2_zgel5b7A",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Kanit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen flex flex-col antialiased" style={{ fontFamily: "Inter, Kanit, 'Segoe UI', sans-serif" }}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
