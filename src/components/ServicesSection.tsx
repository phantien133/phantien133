import { atomServices } from "../data/resume";
import { serviceIconFile } from "../lib/assets";

export function ServicesSection() {
  return (
    <section className="container py-16 md:py-20" id="services">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Here&apos;s what I&apos;m good at
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        These are the services I offer
      </h3>
      <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
        {atomServices.map((svc) => (
          <div key={svc.title} className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <img
                src={serviceIconFile(svc.icon, "white")}
                alt=""
                className="hidden h-full w-full object-contain group-hover:block"
              />
              <img
                src={serviceIconFile(svc.icon, "black")}
                alt=""
                className="block h-full w-full object-contain group-hover:hidden"
              />
            </div>
            <div className="text-center">
              <h4 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                {svc.title}
              </h4>
              <p className="pt-4 text-sm text-grey group-hover:text-white md:text-base">{svc.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
