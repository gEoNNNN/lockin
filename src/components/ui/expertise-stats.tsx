import { Blocks, CheckCircle2, PanelsTopLeft } from "lucide-react";

const stats = [
  {
    label: (
      <>
        Completed projects
        <br />
        across industries
      </>
    ),
    value: "500+",
  },
  {
    label: (
      <>
        Typical time from kickoff
        <br />
        to product launch
      </>
    ),
    value: "2-3mo",
  },
  {
    label: (
      <>
        Total funds raised
        <br />
        by our clients
      </>
    ),
    value: "$1B+",
  },
  {
    label: (
      <>
        Recent market cap of
        <br />
        our biggest client
      </>
    ),
    value: "$321B",
  },
];

export function ExpertiseStats() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#9A6A45_0%,#D8C8AD_55%,#F5F1E8_100%)] px-5 py-14 text-[#F5F1E8] sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:gap-16">
          <div className="flex items-start gap-4 lg:block">
            <div className="relative grid size-20 shrink-0 place-items-center rounded-full border border-[#F5F1E8]/50 text-[#F5F1E8] shadow-[0_0_22px_rgba(255,255,255,0.18)] lg:size-24">
              <div className="absolute inset-2 rounded-full border border-dashed border-[#F5F1E8]/50" />
              <CheckCircle2 className="relative size-10 stroke-[1.4] lg:size-12" />
            </div>
            <p className="mt-3 text-sm font-medium leading-snug text-[#F5F1E8]/90 lg:mt-5 lg:text-base">
              Crafted by Humans.
              <br />
              Accelerated by AI
            </p>
          </div>

          <h2 className="max-w-4xl text-balance text-3xl font-medium leading-[1.08] tracking-[-0.045em] sm:text-4xl lg:text-[3.55rem]">
            Over 13 years, we&apos;ve refined our Design &amp; Development
            expertise and combined it with{" "}
            <span className="inline-flex items-center gap-2 whitespace-nowrap">
              <span className="inline-grid size-8 place-items-center rounded-lg bg-[#F5F1E8]/20 align-middle sm:size-10">
                <Blocks className="size-5 sm:size-6" />
              </span>
              AI-workflows
            </span>{" "}
            and our own{" "}
            <span className="inline-flex items-center gap-2 whitespace-nowrap">
              <span className="inline-grid size-8 place-items-center rounded-lg bg-[#F5F1E8]/20 align-middle sm:size-10">
                <PanelsTopLeft className="size-5 sm:size-6" />
              </span>
              AI-products
            </span>{" "}
            to help ambitious teams move faster, build smarter, and raise the
            bar.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-24 lg:gap-6">
          {stats.map((stat) => (
            <article
              key={stat.value}
              className="flex min-h-36 items-center justify-between gap-6 rounded-xl border border-[#D8C8AD]/80 bg-[#F5F1E8] px-7 py-7 text-[#25211D] shadow-[0_1px_0_rgba(255,255,255,0.45)] sm:px-10 lg:min-h-40"
            >
              <p className="text-sm font-medium leading-relaxed text-[#9A6A45] sm:text-base">
                {stat.label}
              </p>
              <p className="shrink-0 font-serif text-5xl italic tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                {stat.value}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExpertiseStats;
