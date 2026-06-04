import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Clients"
          title="What Clients Say"
          description="Placeholder testimonials—replace with verified client feedback when available."
        />

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.author}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <p className="text-slate-700 leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-6">
                <cite className="not-italic font-semibold text-solar-navy">{t.author}</cite>
                <p className="text-sm text-slate-500">{t.company}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
