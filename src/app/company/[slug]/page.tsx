import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, Award, Users, Target, Heart, Briefcase } from "lucide-react";

/* ─────────────────────────────────────────────────────── */
/*  DATA                                                    */
/* ─────────────────────────────────────────────────────── */

const COMPANY_DATA: Record<string, {
  title: string; titleTh: string; icon: React.ReactNode; color: string;
  hero: string; heroTh: string; body: React.ReactNode;
}> = {
  about: {
    title: "About Us",
    titleTh: "เกี่ยวกับเรา",
    icon: <Users className="w-5 h-5" />,
    color: "#6DB33F",
    hero: "Thailand's leading SAP Business One partner",
    heroTh: "พันธมิตร SAP Business One ชั้นนำของไทย",
    body: <AboutBody />,
  },
  vision: {
    title: "Vision & Mission",
    titleTh: "วิสัยทัศน์และพันธกิจ",
    icon: <Target className="w-5 h-5" />,
    color: "#7C3AED",
    hero: "Our vision, mission & core values",
    heroTh: "วิสัยทัศน์ พันธกิจ และค่านิยมองค์กร",
    body: <VisionBody />,
  },
  awards: {
    title: "Awards & Recognition",
    titleTh: "รางวัลและการยอมรับ",
    icon: <Award className="w-5 h-5" />,
    color: "#F59E0B",
    hero: "Recognized for SAP excellence",
    heroTh: "รางวัลที่พิสูจน์ความเป็นเลิศด้าน SAP",
    body: <AwardsBody />,
  },
  partners: {
    title: "Technology Partners",
    titleTh: "พันธมิตรเทคโนโลยี",
    icon: <Heart className="w-5 h-5" />,
    color: "#0078D4",
    hero: "Powered by world-class technology partners",
    heroTh: "ขับเคลื่อนด้วยพันธมิตรเทคโนโลยีระดับโลก",
    body: <PartnersBody />,
  },
  career: {
    title: "Career",
    titleTh: "ร่วมงานกับเรา",
    icon: <Briefcase className="w-5 h-5" />,
    color: "#EC4899",
    hero: "Grow your career in enterprise technology",
    heroTh: "เติบโตในสายงานเทคโนโลยีองค์กรกับ BexSys",
    body: <CareerBody />,
  },
};

/* ─────────────────────────────────────────────────────── */
/*  SUB-PAGE BODIES                                         */
/* ─────────────────────────────────────────────────────── */

function AboutBody() {
  const timeline = [
    { year: "1994", text: "ก่อตั้ง BexSys เริ่มต้นด้วยงาน ERP Consulting สำหรับตลาดไทย" },
    { year: "2005", text: "เป็น SAP Business One Partner อย่างเป็นทางการ" },
    { year: "2012", text: "ขยายทีมเป็น 50+ consultants รองรับลูกค้าทั่วภูมิภาค" },
    { year: "2018", text: "เปิดตัว BexAI — แพลตฟอร์ม AI สำหรับ SAP B1" },
    { year: "2021", text: "คว้ารางวัล Highest Growth SAP Partner of the Year — Asia Pacific" },
    { year: "2024", text: "SAP Gold Partner, DEPA Digital Entrepreneur Certified, 100+ Enterprise Customers" },
  ];
  return (
    <section className="bg-[#F8F9FB] section-padding">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-4">บริษัทของเรา</p>
            <h2 className="heading-lg text-[#111827] mb-5">
              30+ ปีแห่งความเชี่ยวชาญ<br />
              <span className="text-[#6DB33F]">SAP Business One</span>
            </h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              BexSys Co., Ltd. ก่อตั้งด้วยความมุ่งมั่นที่จะยกระดับธุรกิจไทยด้วยเทคโนโลยี ERP ชั้นนำ
              เราเป็น SAP Business One Gold Partner ที่มีประสบการณ์ implement มากกว่า 100 โครงการ
              ในหลากหลายอุตสาหกรรมทั่วภูมิภาค
            </p>
            <p className="text-[#6B7280] leading-relaxed mb-6">
              ทีมที่ปรึกษากว่า 100 คนของเรา มีความเชี่ยวชาญครบทุก module ของ SAP B1
              ตั้งแต่ Finance, Manufacturing, Distribution จนถึง AI Integration
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[["30+", "ปีประสบการณ์"], ["100+", "ลูกค้า"], ["100+", "ที่ปรึกษา"], ["Gold", "SAP Partner"]].map(([v, l]) => (
                <div key={l} className="bg-white rounded-2xl p-4 border border-gray-100 text-center">
                  <p className="text-2xl font-extrabold text-[#6DB33F]">{v}</p>
                  <p className="text-xs text-[#6B7280]">{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-5">เส้นทางการเติบโต</p>
            <div className="space-y-4">
              {timeline.map((t) => (
                <div key={t.year} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#6DB33F] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {t.year.slice(2)}
                    </div>
                    <div className="w-px flex-1 bg-[#6DB33F]/20 mt-1" />
                  </div>
                  <div className="pb-4">
                    <p className="text-xs font-semibold text-[#6DB33F] mb-0.5">{t.year}</p>
                    <p className="text-sm text-[#374151] leading-relaxed">{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisionBody() {
  const values = [
    { icon: "🎯", title: "Excellence", desc: "มุ่งมั่นส่งมอบงานคุณภาพสูงสุดในทุกโครงการ" },
    { icon: "🤝", title: "Partnership", desc: "เราคือพันธมิตร ไม่ใช่แค่ผู้ขาย" },
    { icon: "💡", title: "Innovation", desc: "นำ AI และเทคโนโลยีใหม่มาสร้างคุณค่าให้ลูกค้า" },
    { icon: "🛡️", title: "Integrity", desc: "โปร่งใส ซื่อสัตย์ และรับผิดชอบต่อผลลัพธ์" },
    { icon: "📈", title: "Growth", desc: "เติบโตร่วมกันกับลูกค้าและพนักงาน" },
    { icon: "🌏", title: "Regional", desc: "ขยายความเชี่ยวชาญสู่ระดับ ASEAN" },
  ];
  return (
    <section className="bg-[#F8F9FB] section-padding">
      <div className="container-xl max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#0D1117] rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 dot-pattern opacity-20" />
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-3">Vision</p>
              <h3 className="text-xl font-bold mb-3">วิสัยทัศน์</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                เป็นผู้นำด้าน Enterprise Digital Transformation ใน ASEAN
                ที่ผสานความเชี่ยวชาญ SAP กับนวัตกรรม AI เพื่อยกระดับธุรกิจไทยสู่มาตรฐานโลก
              </p>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-gray-100">
            <p className="text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-3">Mission</p>
            <h3 className="text-xl font-bold text-[#111827] mb-3">พันธกิจ</h3>
            <p className="text-[#6B7280] leading-relaxed text-sm">
              ส่งมอบโซลูชัน ERP และ AI ที่ช่วยให้องค์กรดำเนินงานได้อย่างมีประสิทธิภาพ
              ด้วยทีมที่ปรึกษาที่เชี่ยวชาญและการ support ที่ไม่ทิ้งลูกค้า
            </p>
          </div>
        </div>
        <p className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] text-center mb-6">Core Values</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((v) => (
            <div key={v.title} className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#7C3AED]/30 transition-colors">
              <span className="text-2xl mb-3 block">{v.icon}</span>
              <p className="font-bold text-[#111827] mb-1">{v.title}</p>
              <p className="text-sm text-[#6B7280]">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardsBody() {
  const awards = [
    { year: "2021", title: "Highest Growth Partner of the Year", org: "SAP SMB Innovation Summit, Manila", desc: "รางวัลการเติบโตสูงสุดในฐานะ SAP Partner ระดับเอเชียแปซิฟิก", color: "#F59E0B" },
    { year: "2022", title: "NNN Partner of the Year Thailand", org: "SAP Thailand", desc: "รางวัล Partner ยอดเยี่ยมด้านการแนะนำลูกค้าใหม่ ปีที่ 1", color: "#F59E0B" },
    { year: "2023", title: "NNN Partner of the Year Thailand", org: "SAP Thailand", desc: "รางวัล Partner ยอดเยี่ยม ปีที่ 2 ต่อเนื่อง", color: "#F59E0B" },
    { year: "2024", title: "DEPA Digital Entrepreneur Certified", org: "สำนักงานส่งเสริมเศรษฐกิจดิจิทัล (DEPA)", desc: "ผ่านการรับรองเป็นผู้ประกอบการดิจิทัลไทยระดับองค์กร", color: "#6DB33F" },
    { year: "2024", title: "SAP Gold Partner", org: "SAP SE", desc: "ระดับสูงสุดของ SAP Partner Program ในประเทศไทย", color: "#0078D4" },
  ];
  return (
    <section className="bg-[#F8F9FB] section-padding">
      <div className="container-xl max-w-3xl mx-auto">
        <div className="space-y-5">
          {awards.map((a, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 flex gap-5 items-start hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl flex-shrink-0 flex flex-col items-center justify-center text-white"
                style={{ background: `linear-gradient(135deg, ${a.color}, ${a.color}88)` }}>
                <Award className="w-6 h-6" />
                <p className="text-[10px] font-bold mt-0.5">{a.year}</p>
              </div>
              <div>
                <p className="font-bold text-[#111827] mb-0.5">{a.title}</p>
                <p className="text-xs font-semibold mb-2" style={{ color: a.color }}>{a.org}</p>
                <p className="text-sm text-[#6B7280] leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnersBody() {
  const partners = [
    { name: "SAP", tier: "Gold Partner", desc: "SAP Business One Gold Partner — ระดับสูงสุดของ SAP Partner Program", color: "#0078D4" },
    { name: "Microsoft", tier: "Technology Partner", desc: "Microsoft Azure Cloud Infrastructure สำหรับ SAP B1 Cloud Hosting", color: "#00A4EF" },
    { name: "AWS", tier: "Cloud Partner", desc: "Amazon Web Services — Cloud Platform สำหรับ Deploy SAP B1 บน AWS", color: "#FF9900" },
    { name: "Google Cloud", tier: "Cloud Partner", desc: "Google Cloud Platform — อีกหนึ่งทางเลือก Cloud สำหรับลูกค้า", color: "#4285F4" },
    { name: "DEPA", tier: "Government Partner", desc: "สำนักงานส่งเสริมเศรษฐกิจดิจิทัล — Digital Entrepreneur Certified", color: "#6DB33F" },
    { name: "n8n", tier: "Integration Partner", desc: "Workflow Automation Platform สำหรับ SAP B1 Integration", color: "#EA4B71" },
  ];
  return (
    <section className="bg-[#F8F9FB] section-padding">
      <div className="container-xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {partners.map((p) => (
            <div key={p.name} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#0078D4]/20 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center font-extrabold text-white text-sm"
                style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}88)` }}>
                {p.name.slice(0, 2).toUpperCase()}
              </div>
              <p className="font-bold text-[#111827] mb-1">{p.name}</p>
              <p className="text-xs font-semibold mb-2" style={{ color: p.color }}>{p.tier}</p>
              <p className="text-sm text-[#6B7280] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareerBody() {
  const positions = [
    { title: "SAP B1 Functional Consultant", dept: "Consulting", type: "Full-time", loc: "Bangkok (Hybrid)" },
    { title: "SAP B1 Technical Developer", dept: "Development", type: "Full-time", loc: "Bangkok (Hybrid)" },
    { title: "AI/ML Engineer", dept: "AI Platform", type: "Full-time", loc: "Bangkok (Remote OK)" },
    { title: "FastAPI Backend Developer", dept: "Integration", type: "Full-time", loc: "Bangkok (Hybrid)" },
    { title: "ERP Project Manager", dept: "Project", type: "Full-time", loc: "Bangkok" },
    { title: "Business Development Executive", dept: "Sales", type: "Full-time", loc: "Bangkok" },
  ];
  const perks = ["ทำงาน Hybrid 3 วัน/สัปดาห์", "ประกันสุขภาพกลุ่ม", "Training SAP ฟรี", "โบนัสประจำปี", "งบพัฒนาทักษะ 20,000 บาท/ปี", "วันหยุดพักร้อน 15 วัน"];
  return (
    <section className="bg-[#F8F9FB] section-padding">
      <div className="container-xl">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-5">ตำแหน่งที่เปิดรับ</p>
            {positions.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-5 border border-gray-100 flex items-center justify-between gap-4 hover:border-[#EC4899]/30 hover:shadow-md transition-all group">
                <div>
                  <p className="font-semibold text-[#111827] group-hover:text-[#EC4899] transition-colors">{p.title}</p>
                  <div className="flex gap-2 mt-1.5 flex-wrap">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#EC4899]/10 text-[#EC4899] font-medium">{p.dept}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-[#6B7280]">{p.type}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-[#6B7280]">{p.loc}</span>
                  </div>
                </div>
                <Link href={`mailto:hr@bexsys.com?subject=สมัครงาน: ${encodeURIComponent(p.title)}`}
                  className="flex-shrink-0 px-4 py-2 rounded-full border border-[#EC4899] text-[#EC4899] text-sm font-semibold hover:bg-[#EC4899] hover:text-white transition-all">
                  สมัคร
                </Link>
              </div>
            ))}
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-5">สวัสดิการ</p>
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="space-y-3">
                {perks.map((perk) => (
                  <div key={perk} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#EC4899] flex-shrink-0" />
                    <p className="text-sm text-[#374151]">{perk}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-gray-100">
                <p className="text-xs text-[#9CA3AF] mb-2">ส่ง Resume มาที่</p>
                <a href="mailto:hr@bexsys.com" className="text-sm font-semibold text-[#EC4899] hover:underline">hr@bexsys.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────── */
/*  PAGE                                                    */
/* ─────────────────────────────────────────────────────── */

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = COMPANY_DATA[slug];
  if (!data) return { title: "Page Not Found" };
  return { title: `${data.title} — BexSys Co., Ltd.` };
}

export function generateStaticParams() {
  return Object.keys(COMPANY_DATA).map((slug) => ({ slug }));
}

export default async function CompanySubPage({ params }: Props) {
  const { slug } = await params;
  const data = COMPANY_DATA[slug];
  if (!data) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D1117] pt-20 pb-14 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
          style={{ background: data.color }} />
        <div className="container-xl relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-5 text-xs font-semibold"
              style={{ borderColor: `${data.color}40`, background: `${data.color}15`, color: data.color }}>
              {data.icon} {data.titleTh}
            </div>
            <h1 className="heading-hero text-white mb-3">{data.hero}</h1>
            <p className="text-gray-400 text-lg mb-8">{data.heroTh}</p>
            <div className="flex gap-3">
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg"
                style={{ background: data.color }}>
                ติดต่อเรา <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/company"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-semibold text-sm hover:border-white/40 transition-colors">
                เกี่ยวกับ BexSys
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      {data.body}

      {/* CTA */}
      <section className="bg-[#0D1117] py-16 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="container-xl text-center relative z-10">
          <h2 className="heading-lg text-white mb-4">พร้อมเริ่มต้นกับ BexSys?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">ปรึกษาผู้เชี่ยวชาญฟรี ไม่มีค่าใช้จ่าย</p>
          <Link href="/book-demo"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: data.color }}>
            นัด Demo ฟรี <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
