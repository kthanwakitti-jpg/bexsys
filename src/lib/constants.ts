export const SITE = {
  name: "BexSys",
  fullName: "BexSys Co., Ltd.",
  tagline: "Inspired by BexSys",
  description:
    "SAP Business One Gold Partner | Enterprise Digital Transformation | Thailand's Leading ERP Consultant",
  url: "https://www.bexsys.com",
  email: {
    sales: "sales@bexsys.com",
    support: "support@bexsys.com",
    consultant: "consultant@bexsys.com",
    account: "account@bexsys.com",
    hr: "hr@bexsys.com",
  },
  phone: {
    hotline: "092-248-2325",
    company: "02-235-8003",
  },
  address:
    "88 PASO Tower, 27th Floor, Unit A2, Silom Road, Suriyawongse, Bangrak, Bangkok 10500, Thailand",
  social: {
    facebook: "https://www.facebook.com/Bexsys.company",
    linkedin: "https://www.linkedin.com/in/bexsys-company-limited-a203b9160",
    youtube: "https://www.youtube.com/channel/UC15LpdGjjuUg0mynh28wxJw",
    instagram: "https://www.instagram.com/bexsys1/",
  },
};

export const STATS = [
  { value: 30, suffix: "+", label: "Years Experience", labelTh: "ปีประสบการณ์" },
  { value: 100, suffix: "+", label: "Customers", labelTh: "ลูกค้า" },
  { value: 100, suffix: "+", label: "Consultants", labelTh: "ที่ปรึกษา" },
  { value: 500, suffix: "+", label: "SAP Modules", labelTh: "SAP Modules" },
] as const;

export const SOLUTIONS = [
  {
    id: "sap-business-one",
    title: "SAP Business One",
    titleTh: "SAP Business One",
    description:
      "Complete ERP for SMEs — Finance, Sales, Inventory, Production, CRM in one platform.",
    descriptionTh:
      "ระบบ ERP ครบวงจรสำหรับ SME — บัญชี การขาย คลังสินค้า การผลิต CRM ในแพลตฟอร์มเดียว",
    icon: "Layers",
    href: "/solutions/sap-business-one",
    badge: "Gold Partner",
    color: "#6DB33F",
  },
  {
    id: "infor-m3",
    title: "Infor M3 CloudSuite",
    titleTh: "Infor M3 CloudSuite",
    description:
      "Industry-specific Cloud ERP for manufacturing, distribution, and food & beverage.",
    descriptionTh: "Cloud ERP เฉพาะอุตสาหกรรมการผลิต การกระจายสินค้า และอาหาร",
    icon: "Cloud",
    href: "/solutions/infor-m3",
    badge: "Cloud Native",
    color: "#0078D4",
  },
  {
    id: "ai-platform",
    title: "AI Platform",
    titleTh: "แพลตฟอร์ม AI",
    description:
      "BexAI — OCR, Predictive Analytics, ERP Advisor, Document Intelligence, AI Chatbot.",
    descriptionTh:
      "BexAI — OCR, Predictive Analytics, ที่ปรึกษา ERP, วิเคราะห์เอกสาร, AI Chatbot",
    icon: "Brain",
    href: "/solutions/ai-platform",
    badge: "AI First",
    color: "#7C3AED",
  },
  {
    id: "business-intelligence",
    title: "Business Intelligence",
    titleTh: "Business Intelligence",
    description:
      "Real-time dashboards, KPI tracking, and advanced analytics powered by SAP HANA.",
    descriptionTh: "Dashboard real-time, ติดตาม KPI และ Analytics ขั้นสูงด้วย SAP HANA",
    icon: "BarChart3",
    href: "/solutions/business-intelligence",
    badge: "Real-Time",
    color: "#F59E0B",
  },
  {
    id: "cloud-erp",
    title: "Cloud ERP",
    titleTh: "Cloud ERP",
    description:
      "Deploy SAP B1 on AWS, Azure, or GCP — flexible, scalable, always available.",
    descriptionTh: "ติดตั้ง SAP B1 บน AWS, Azure หรือ GCP — ยืดหยุ่น ขยายได้ พร้อมใช้งานตลอด",
    icon: "Server",
    href: "/solutions/cloud-erp",
    badge: "99.9% Uptime",
    color: "#EC4899",
  },
  {
    id: "api-integration",
    title: "API Integration",
    titleTh: "API Integration",
    description:
      "Connect SAP B1 with any system via REST API, Service Layer, n8n, and middleware.",
    descriptionTh: "เชื่อมต่อ SAP B1 กับทุกระบบผ่าน REST API, Service Layer, n8n และ Middleware",
    icon: "Zap",
    href: "/solutions/api-integration",
    badge: "SAP Service Layer",
    color: "#14B8A6",
  },
  {
    id: "ehms",
    title: "eHMS Helpdesk",
    titleTh: "eHMS Helpdesk",
    description:
      "Enterprise helpdesk and support management system — 8x5 and 24x7 support options.",
    descriptionTh: "ระบบ Helpdesk สำหรับองค์กร รองรับ 8x5 และ 24x7",
    icon: "Headphones",
    href: "/solutions/ehms",
    badge: "24/7 Support",
    color: "#F97316",
  },
  {
    id: "custom-development",
    title: "Custom Development",
    titleTh: "Custom Development",
    description:
      "Tailored ERP customization, workflow automation, and industry-specific add-ons.",
    descriptionTh: "ปรับแต่ง ERP, Workflow Automation และ Add-on เฉพาะอุตสาหกรรม",
    icon: "Code2",
    href: "/solutions/custom-development",
    badge: "Bespoke",
    color: "#6DB33F",
  },
] as const;

export const INDUSTRIES = [
  { id: "manufacturing", name: "Manufacturing", nameTh: "การผลิต", icon: "Factory" },
  { id: "distribution", name: "Distribution", nameTh: "การกระจายสินค้า", icon: "Truck" },
  { id: "retail", name: "Retail", nameTh: "ค้าปลีก", icon: "ShoppingBag" },
  { id: "food", name: "Food & Beverage", nameTh: "อาหารและเครื่องดื่ม", icon: "UtensilsCrossed" },
  { id: "healthcare", name: "Healthcare", nameTh: "การแพทย์", icon: "Heart" },
  { id: "chemical", name: "Chemical", nameTh: "เคมีภัณฑ์", icon: "FlaskConical" },
  { id: "construction", name: "Construction", nameTh: "ก่อสร้าง", icon: "Building2" },
  { id: "services", name: "Services", nameTh: "บริการ", icon: "Briefcase" },
] as const;

export const NAV_ITEMS = [
  {
    label: "Solutions",
    labelTh: "โซลูชัน",
    href: "/solutions",
    children: [
      { label: "SAP Business One", href: "/solutions/sap-business-one", icon: "Layers", desc: "ERP ครบวงจรสำหรับ SME", color: "#6DB33F" },
      { label: "Infor M3 CloudSuite", href: "/solutions/infor-m3", icon: "Cloud", desc: "Cloud ERP เฉพาะอุตสาหกรรม", color: "#0078D4" },
      { label: "AI Platform", href: "/solutions/ai-platform", icon: "Brain", desc: "BexAI — AI Copilot สำหรับ SAP B1", color: "#7C3AED" },
      { label: "Business Intelligence", href: "/solutions/business-intelligence", icon: "BarChart3", desc: "Dashboard & Analytics แบบ Real-time", color: "#F59E0B" },
      { label: "Cloud ERP", href: "/solutions/cloud-erp", icon: "Server", desc: "Deploy บน Azure, AWS, GCP", color: "#14B8A6" },
      { label: "API Integration", href: "/solutions/api-integration", icon: "Zap", desc: "Connect SAP B1 กับทุกระบบ", color: "#EC4899" },
      { label: "eHMS Helpdesk", href: "/solutions/ehms", icon: "Headphones", desc: "Enterprise Support Management", color: "#6B7280" },
    ],
  },
  {
    label: "Industries",
    labelTh: "อุตสาหกรรม",
    href: "/industries",
    children: [
      { label: "Manufacturing", href: "/industries/manufacturing", icon: "Factory", desc: "การผลิต & MRP", color: "#6DB33F" },
      { label: "Distribution", href: "/industries/distribution", icon: "Truck", desc: "การกระจายสินค้า", color: "#0078D4" },
      { label: "Retail", href: "/industries/retail", icon: "ShoppingCart", desc: "ค้าปลีก & POS", color: "#F59E0B" },
      { label: "Food & Beverage", href: "/industries/food", icon: "UtensilsCrossed", desc: "อาหาร & Batch Tracking", color: "#EC4899" },
      { label: "Healthcare", href: "/industries/healthcare", icon: "HeartPulse", desc: "สาธารณสุข & เวชภัณฑ์", color: "#EF4444" },
      { label: "Chemical", href: "/industries/chemical", icon: "FlaskConical", desc: "เคมีภัณฑ์ & Compliance", color: "#8B5CF6" },
    ],
  },
  { label: "Services", labelTh: "บริการ", href: "/services" },
  { label: "Success Stories", labelTh: "ความสำเร็จ", href: "/success-stories" },
  { label: "Resources", labelTh: "ทรัพยากร", href: "/resources" },
  {
    label: "Company",
    labelTh: "บริษัท",
    href: "/company",
    children: [
      { label: "About Us", href: "/company/about" },
      { label: "Vision & Mission", href: "/company/vision" },
      { label: "Awards", href: "/company/awards" },
      { label: "Partners", href: "/company/partners" },
      { label: "Career", href: "/company/career" },
    ],
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "คุณวิศัลย์ ว.",
    role: "CEO, Warrix Sport",
    quote:
      "เราลดระยะเวลาการปิดงบได้ถึง 50% และการวางแผน MRP แม่นยำขึ้นมาก ระบบ SAP B1 ช่วยให้เราเป็นโรงงานดิจิทัลอย่างแท้จริง",
    result: "+45% Efficiency",
    logo: null,
  },
  {
    name: "คุณวรุตม์ ร.",
    role: "CEO, Micro Precision",
    quote:
      "SAP B1 ช่วยเพิ่ม Productivity และลดขั้นตอนการทำงาน จึงช่วยขจัดปัญหาด้าน Human Error ให้กับบริษัทได้อย่างมีประสิทธิผล",
    result: "-70% Stockout",
    logo: null,
  },
  {
    name: "คุณชาคริต ช.",
    role: "CEO, RCK Industry",
    quote:
      "เป็นตัวช่วยลดขั้นตอนการทำงาน ขจัดปัญหาด้าน Human Error ให้กับบริษัทได้อย่างมีประสิทธิผลและรวดเร็ว",
    result: "90% Accuracy",
    logo: null,
  },
] as const;

export const AWARDS = [
  {
    year: "2021",
    title: "Highest Growth Partner of the Year",
    org: "SAP SMB Innovation Summit, Manila",
    description: "รางวัลการเติบโตสูงสุดในฐานะ SAP Partner ระดับเอเชียแปซิฟิก",
  },
  {
    year: "2022",
    title: "NNN Partner of the Year Thailand",
    org: "SAP Thailand",
    description: "รางวัล Partner ยอดเยี่ยมด้านการแนะนำลูกค้าใหม่ ปีที่ 1",
  },
  {
    year: "2023",
    title: "NNN Partner of the Year Thailand",
    org: "SAP Thailand",
    description: "รางวัล Partner ยอดเยี่ยม ปีที่ 2 ต่อเนื่อง",
  },
  {
    year: "2024",
    title: "DEPA Digital Entrepreneur",
    org: "สำนักงานส่งเสริมเศรษฐกิจดิจิทัล",
    description: "ผ่านการรับรองเป็นผู้ประกอบการดิจิทัลไทย",
  },
] as const;

export const PARTNER_LOGOS = [
  { name: "SAP", src: "/logos/sap.svg" },
  { name: "Microsoft", src: "/logos/microsoft.svg" },
  { name: "AWS", src: "/logos/aws.svg" },
  { name: "Azure", src: "/logos/azure.svg" },
  { name: "Google Cloud", src: "/logos/google-cloud.svg" },
  { name: "UiPath", src: "/logos/uipath.svg" },
  { name: "DEPA", src: "/logos/depa.svg" },
  { name: "ISO", src: "/logos/iso.svg" },
] as const;
