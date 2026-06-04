"use client";

import { useEffect, useRef, useState } from "react";
import { HERO_STATS } from "@/lib/constants";

function useCountUp(target: number, active: boolean, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(target * eased);
      setValue(start);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [target, active, duration]);

  return value;
}

function StatCard({
  label,
  value,
  suffix,
  active,
}: {
  label: string;
  value: number;
  suffix: string;
  active: boolean;
}) {
  const count = useCountUp(value, active);

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-5 text-center">
      <p className="text-3xl sm:text-4xl font-bold text-solar-green-light">
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-slate-400">{label}</p>
    </div>
  );
}

export function AnimatedStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
      {HERO_STATS.map((stat) => (
        <StatCard key={stat.label} {...stat} active={active} />
      ))}
    </div>
  );
}
