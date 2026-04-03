import { organizations } from "../data/resume";

export function ClientsSection() {
  return (
    <section className="bg-grey-50" id="clients">
      <div className="container py-16 md:py-20">
        <div className="mx-auto w-full sm:w-3/4 lg:w-full">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            Organizations I&apos;ve worked with
          </h2>
          <div className="flex flex-wrap items-center justify-center pt-8 sm:pt-10">
            {organizations.map((org) => (
              <span
                key={org}
                className="m-4 block rounded-full border-2 border-grey-60 bg-white px-8 py-3 font-header text-sm font-semibold uppercase text-primary shadow-sm"
              >
                {org}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
