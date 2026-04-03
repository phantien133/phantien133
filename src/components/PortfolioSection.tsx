import { projects } from "../data/resume";

export function PortfolioSection() {
  return (
    <section className="container py-16 md:py-20" id="portfolio">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Check out my portfolio
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Here&apos;s what I&apos;ve shipped in the past
      </h3>
      <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
        {projects.map((p, i) => (
          <article
            key={p.name + p.period}
            className="group mx-auto w-full transform shadow transition-transform hover:scale-105 md:mx-0"
          >
            <div
              className="relative flex min-h-[220px] flex-col justify-end overflow-hidden bg-cover bg-center p-6 text-white"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(85,64,174,0.95) ${i * 8}%, rgba(65,47,144,0.88) 100%)`,
              }}
            >
              <span className="absolute inset-0 bg-black/10 opacity-10 transition-opacity group-hover:opacity-30" />
              <span className="relative font-header text-xl font-bold uppercase leading-snug">{p.name}</span>
              <span className="relative pt-2 font-body text-sm text-white/90">{p.role}</span>
              <span className="relative pt-3 font-body text-sm text-white/85">{p.description}</span>
              <span className="relative pt-3 text-xs font-semibold uppercase tracking-wide text-yellow">
                {p.stack}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
