import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/ui/Icons";

export function ServiceCards() {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Solar Solutions for Every Scale"
          description="From homes to heavy industry—engineered systems with professional EPC delivery."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              href="/services"
              className="group relative rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-solar-green hover:shadow-xl hover:shadow-solar-green/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-solar-navy text-solar-green-light transition-colors group-hover:bg-solar-green group-hover:text-white">
                <ServiceIcon name={service.icon} className="w-7 h-7" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-solar-navy group-hover:text-solar-green transition-colors">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {service.description}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-solar-green opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
