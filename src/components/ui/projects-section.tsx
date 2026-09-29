import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    category: "AI / PRODUCT DESIGN",
    date: "AUGUST 10, 2026",
    title:
      "Voice AI video editor: from concept to a seamless creative flow",
    description:
      "We designed an AI-first video experience—from strategy and brand direction to product UX, onboarding, and a polished launch-ready interface.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Mobile application interface displayed on a smartphone",
  },
  {
    category: "WEB / DEVELOPMENT",
    date: "JUNE 24, 2026",
    title:
      "A digital platform built to turn complex data into clear decisions",
    description:
      "A high-performance web platform combining thoughtful information architecture, intuitive dashboards, and a scalable design system.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Analytics dashboard displayed on a laptop",
  },
  {
    category: "BRAND / EXPERIENCE",
    date: "MARCH 08, 2026",
    title:
      "A bold identity and website for a new generation of products",
    description:
      "We brought strategy, visual identity, and digital execution together to create a distinctive brand experience designed for growth.",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Designer working on a colorful digital interface",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#F5F1E8] px-5 py-16 text-[#25211D] sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex items-end justify-between gap-6 lg:mb-14">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#25211D]/45">
              Selected work
            </p>
            <h2 className="text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-7xl">
              Projects built to move businesses forward.
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-relaxed text-[#25211D]/55 lg:block">
            Three recent collaborations across AI, product design, development,
            and brand experience.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-xl border border-[#9A6A45]/15 bg-[#D8C8AD]/15 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
            >
              <div className="grid min-h-[420px] lg:grid-cols-[0.92fr_1.08fr]">
                <div className="flex flex-col p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-wrap items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#25211D]/40">
                    <span>{project.category}</span>
                    <span aria-hidden="true">|</span>
                    <time>{project.date}</time>
                  </div>
                  <h3 className="mt-5 max-w-2xl text-3xl font-medium leading-[1.02] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                    {project.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#25211D]/60 sm:text-base">
                    {project.description}
                  </p>
                  <a
                    href={`#project-${index + 1}`}
                    className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-[#25211D] px-5 py-3 text-xs font-medium text-[#F5F1E8] transition-transform duration-300 group-hover:translate-x-1 lg:mt-auto"
                  >
                    View case
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
                <div
                  id={`project-${index + 1}`}
                  className="relative min-h-72 overflow-hidden bg-[#D8C8AD]/40 lg:min-h-full"
                >
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#25211D]/20 via-transparent to-[#F5F1E8]/10" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
