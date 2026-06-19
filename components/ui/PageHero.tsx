type PageHeroProps = {
  title: string;
  description: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="bg-solar-navy text-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{title}</h1>
        <p className="mt-4 text-lg text-slate-300 max-w-2xl">{description}</p>
      </div>
    </section>
  );
}
