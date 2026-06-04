import { ADVANTAGES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Advantages() {
  return (
    <section className="py-20 bg-solar-navy text-white" id="advantages">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Benefits"
          title="Advantages of Solar"
          description="Why businesses and homeowners invest in on-site solar generation."
          light
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ADVANTAGES.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:border-solar-green-light/50 transition-colors"
            >
              <div className="h-1 w-12 rounded-full bg-solar-green-light mb-4" />
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
