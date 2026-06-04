import { HOW_SOLAR_WORKS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StepIcon } from "@/components/ui/Icons";

export function HowSolarWorks() {
  return (
    <section className="py-20 bg-slate-50" id="how-solar-works">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          title="How Solar Works"
          description="Follow the energy path from sunlight to your electrical loads."
        />

        <div className="max-w-xl mx-auto">
          {HOW_SOLAR_WORKS.map((step, index) => (
            <div key={step.title} className="flex flex-col items-center">
              <div
                className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-solar-green/10 text-solar-green">
                    <StepIcon name={step.icon} className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-solar-navy text-lg">{step.title}</h3>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {index < HOW_SOLAR_WORKS.length - 1 && (
                <div
                  className="flex flex-col items-center py-2 text-solar-green animate-flow-pulse"
                  aria-hidden
                >
                  <span className="text-2xl font-light">↓</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
