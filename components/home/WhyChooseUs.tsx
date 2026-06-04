import { WHY_CHOOSE_US } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Us"
          title="Why Choose Us"
          description="Engineering discipline and transparent delivery set professional EPC apart."
        />

        <div className="grid gap-8 sm:grid-cols-2">
          {WHY_CHOOSE_US.map((item, i) => (
            <article key={item.title} className="flex gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-solar-green/10 text-solar-green font-bold text-lg">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-bold text-solar-navy">{item.title}</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
