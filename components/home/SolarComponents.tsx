"use client";

import { useState } from "react";
import { SOLAR_COMPONENTS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconChevron } from "@/components/ui/Icons";

export function SolarComponents() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white" id="components">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="System Parts"
          title="Solar Components"
          description="Understand the equipment that makes up a complete solar plant."
        />

        <div className="max-w-3xl mx-auto space-y-3">
          {SOLAR_COMPONENTS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 bg-slate-50 px-6 py-4 text-left hover:bg-slate-100 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-solar-navy">{item.title}</span>
                  <IconChevron open={isOpen} className="text-solar-green shrink-0" />
                </button>
                {isOpen && (
                  <div className="px-6 py-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                    {item.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
