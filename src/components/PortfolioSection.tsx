import { projects } from "../data/resume";

export function PortfolioSection() {
  return (
    <section className="bg-white" id="portfolio">
      <div className="container py-16 md:py-20">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Key projects
      </h2>
      <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
        {projects.map((p, i) => (
          <article
            key={p.name + p.role + p.stack}
            className="group mx-auto w-full transform shadow transition-transform hover:scale-105 md:mx-0"
          >
            <div
              className="relative flex min-h-[220px] flex-col justify-end overflow-hidden bg-cover bg-center p-6 text-white"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(85,64,174,0.95) ${i * 8}%, rgba(65,47,144,0.88) 100%)`,
              }}
            >
              <span className="absolute inset-0 bg-black/10 opacity-10 transition-opacity group-hover:opacity-30" />
              {p.name ? (
                <span className="relative font-header text-xl font-bold uppercase leading-snug">{p.name}</span>
              ) : null}
              {p.role ? (
                <span className="relative pt-2 font-body text-sm text-white/90 whitespace-pre-line">{p.role}</span>
              ) : null}
              {p.description ? (
                <span className="relative pt-3 font-body text-sm text-white/85 whitespace-pre-line">
                  {p.description}
                </span>
              ) : null}
              {p.stack ? (
                <span className="relative pt-3 text-xs font-semibold uppercase tracking-wide text-yellow whitespace-pre-line">
                  {p.stack}
                </span>
              ) : null}
            </div>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}
