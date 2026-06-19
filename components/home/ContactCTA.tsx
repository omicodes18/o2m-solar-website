import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export function ContactCTA() {
  return (
    <section className="py-16 sm:py-20" id="contact-cta">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-solar-navy-light to-solar-navy p-10 sm:p-14 text-center text-white glass-card">
          <h2 className="text-2xl sm:text-3xl font-bold">Ready to Go Solar?</h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Schedule a free site assessment. Our engineers will evaluate your roof, load, and
            utility connection for a tailored proposal.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg bg-solar-green px-8 py-4 text-sm font-semibold hover:bg-solar-green-dark transition-colors"
            >
              Contact Us Today
            </Link>
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-8 py-4 text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              {COMPANY.phone}
            </a>
          </div>
          <p className="mt-6 text-xs text-slate-400">{COMPANY.email}</p>
        </div>
      </div>
    </section>
  );
}
