import Image from "next/image";
import Link from "next/link";
import { PROJECT_IMAGES } from "@/lib/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";

const HEIGHTS = ["h-48", "h-64", "h-56", "h-72", "h-52", "h-60"];

export function ProjectGallery({ showAll = false }: { showAll?: boolean }) {
  const images = showAll ? PROJECT_IMAGES : PROJECT_IMAGES.slice(0, 6);

  return (
    <section className="py-20 bg-slate-50" id="projects">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Project Gallery"
          description="Representative EPC installations across residential, commercial, and industrial sites."
        />

        <div className="masonry">
          {images.map((project, i) => (
            <figure
              key={project.src}
              className={`masonry-item relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm group ${HEIGHTS[i % HEIGHTS.length]} min-h-[12rem]`}
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-solar-navy/90 to-transparent p-4">
                <p className="text-white text-sm font-medium">{project.alt}</p>
                <span className="text-xs text-solar-green-light capitalize">{project.category}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        {!showAll && (
          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-lg bg-solar-navy px-8 py-3 text-sm font-semibold text-white hover:bg-solar-navy-light transition-colors"
            >
              View all projects
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
