export function CompanyLogo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const dim =
    size === "lg" ? "h-20 w-20" : size === "sm" ? "h-10 w-10" : "h-14 w-14";
  const text = size === "lg" ? "text-lg" : size === "sm" ? "text-[10px]" : "text-xs";

  return (
    <div
      className={`${dim} relative flex shrink-0 items-center justify-center rounded-full glass-ring animate-pulse-glow`}
      aria-hidden
    >
      <div className="absolute inset-1 rounded-full bg-gradient-to-br from-solar-green/30 to-solar-navy-light/80" />
      <svg className="relative h-[55%] w-[55%] text-solar-green-light" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3.5" fill="currentColor" />
        <path
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          d="M12 3v2M12 19v2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M3 12h2M19 12h2M5.6 18.4l1.4-1.4M17 7l1.4-1.4"
        />
      </svg>
      <span className={`absolute bottom-1 font-bold tracking-tight text-white/80 ${text}`}>
        O2M
      </span>
    </div>
  );
}
