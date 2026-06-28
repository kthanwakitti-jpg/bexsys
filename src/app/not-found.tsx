import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-[#0D1117] flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="text-center relative z-10">
        <p className="text-[#6DB33F] text-7xl font-black mb-4">404</p>
        <h1 className="heading-xl text-white mb-3">Page not found</h1>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          ขออภัย ไม่พบหน้าที่คุณต้องการ อาจถูกย้ายหรือลบออกแล้ว
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6DB33F] text-white font-semibold text-sm hover:bg-[#5fa332] transition-colors"
          >
            <Home className="w-4 h-4" /> กลับหน้าหลัก
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-semibold text-sm hover:border-[#6DB33F] transition-colors"
          >
            ติดต่อเรา <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
