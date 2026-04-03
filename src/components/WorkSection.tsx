import { experience } from "../data/resume";

export function WorkSection() {
  return (
    <section className="container py-16 md:py-20" id="work">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        My work experience
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Highlights from my recent roles
      </h3>

      <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
        <span className="absolute inset-y-0 left-2/5 ml-10 hidden w-0.5 bg-grey-40 md:block" />
        {experience.map((job) => (
          <div
            key={`${job.company}-${job.period}`}
            className="mt-8 flex flex-col text-center md:flex-row md:text-left"
          >
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="flex h-auto min-h-[4rem] w-32 shrink-0 items-center justify-center rounded border border-grey-60 bg-grey-50 px-3 text-center font-header text-sm font-bold uppercase leading-tight text-primary">
                  {job.company}
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 hidden h-0.5 -translate-y-1/2 bg-grey-70 md:block" />
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span className="absolute top-1 left-8 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block" />
                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block" aria-hidden />
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">{job.period}</span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                      {job.role}
                    </span>
                    <div className="pt-2">
                      <span className="block font-body text-black">{job.highlights[0]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
