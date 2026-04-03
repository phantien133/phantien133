import { experience } from "../data/resume";

export function WorkSection() {
  return (
    <section className="bg-grey-50" id="work">
      <div className="container py-16 md:py-20">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Work experience
      </h2>

      <div className="relative mx-auto mt-12 w-full max-w-5xl lg:w-5/6">
        <span className="absolute inset-y-0 left-[22%] hidden w-0.5 -translate-x-1/2 bg-grey-40 md:block lg:left-[20%]" />
        {experience.map((job) => (
          <div
            key={`${job.company}-${job.period}`}
            className="mt-8 flex flex-col gap-6 text-center md:flex-row md:gap-0 md:text-left"
          >
            <div className="md:w-[22%] md:max-w-[200px] md:shrink-0 lg:w-[20%] lg:max-w-[220px]">
              <div className="flex justify-center md:justify-start">
                <span className="flex h-auto min-h-[4rem] w-32 shrink-0 items-center justify-center rounded border border-grey-60 bg-grey-50 px-3 text-center font-header text-sm font-bold uppercase leading-tight text-primary">
                  {job.company}
                </span>
                <div className="relative ml-2 hidden min-w-0 flex-1 md:block">
                  <span className="absolute inset-x-0 top-1/2 hidden h-0.5 -translate-y-1/2 bg-grey-70 md:block" />
                </div>
              </div>
            </div>
            <div className="min-w-0 md:flex-1 md:pl-6 lg:pl-10">
              <div className="relative flex md:pl-18">
                <span className="absolute top-1 left-8 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block" />
                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block" aria-hidden />
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">{job.period}</span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                      {job.role}
                    </span>
                    {job.highlights.length > 0 ? (
                      <ul className="mt-2 list-disc space-y-2 pl-5 text-left font-body text-black md:pl-6">
                        {job.highlights.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
