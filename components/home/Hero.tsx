import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { AnimatedStats } from "./AnimatedStats";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-solar-navy text-white">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(22,163,74,0.25) 0%, transparent 50%), radial-gradient(ellipse at 70% 20%, rgba(34,197,94,0.3) 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='600' viewBox='0 0 1200 600'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2316a34a'/%3E%3Cstop offset='100%25' stop-color='%230b1f3a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g)' width='1200' height='600'/%3E%3Cg fill='%23ffffff' opacity='0.08'%3E%3Crect x='80' y='200' width='140' height='90' rx='4'/%3E%3Crect x='240' y='180' width='140' height='90' rx='4'/%3E%3Crect x='400' y='190' width='140' height='90' rx='4'/%3E%3Crect x='560' y='170' width='140' height='90' rx='4'/%3E%3Crect x='720' y='200' width='140' height='90' rx='4'/%3E%3Crect x='880' y='185' width='140' height='90' rx='4'/%3E%3C/g%3E%3Ccircle cx='950' cy='80' r='50' fill='%23fbbf24' opacity='0.9'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-solar-green-light font-semibold text-sm uppercase tracking-widest mb-4">
            {COMPANY.tagline}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Power Your Future with{" "}
            <span className="text-solar-green-light">Professional Solar EPC</span>
          </h1>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
            {COMPANY.description}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-solar-green px-8 py-4 text-base font-semibold text-white hover:bg-solar-green-dark transition-colors shadow-lg"
            >
              Get Free Site Assessment
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>

        <AnimatedStats />
      </div>
    </section>
  );
}
