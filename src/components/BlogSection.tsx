import { profile } from "../data/resume";

export function BlogSection() {
  return (
    <section className="bg-white" id="blog">
      <div className="container py-16 md:py-20">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Elsewhere
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Profiles and updates
        </h3>
        <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
          <a href={profile.contacts.github} target="_blank" rel="noreferrer noopener" className="shadow">
            <div className="group relative flex min-h-[18rem] items-end bg-primary bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat p-6 lg:h-64 xl:h-72">
              <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to opacity-10 transition-opacity group-hover:opacity-50" />
              <span className="relative rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">
                Visit
              </span>
            </div>
            <div className="bg-white py-6 px-5 xl:py-8">
              <span className="block font-body text-lg font-semibold text-black">GitHub</span>
              <span className="block pt-2 font-body text-grey-20">
                Code, experiments, and open-source contributions.
              </span>
            </div>
          </a>
          <a
            href={profile.contacts.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="shadow"
          >
            <div className="group relative flex min-h-[18rem] items-end bg-primary p-6 lg:h-64 xl:h-72">
              <span className="absolute inset-0 block bg-gradient-to-b from-primary to-hero-gradient-to opacity-90 transition-opacity group-hover:opacity-100" />
              <span className="relative rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">
                Visit
              </span>
            </div>
            <div className="bg-white py-6 px-5 xl:py-8">
              <span className="block font-body text-lg font-semibold text-black">LinkedIn</span>
              <span className="block pt-2 font-body text-grey-20">Experience and professional background.</span>
            </div>
          </a>
          <a href="#contact" className="shadow">
            <div className="group relative flex min-h-[18rem] items-end bg-black p-6 lg:h-64 xl:h-72">
              <span className="absolute inset-0 block bg-gradient-to-t from-black/80 to-grey-20/40 opacity-80 transition-opacity group-hover:opacity-100" />
              <span className="relative rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">
                Say hello
              </span>
            </div>
            <div className="bg-white py-6 px-5 xl:py-8">
              <span className="block font-body text-lg font-semibold text-black">Contact</span>
              <span className="block pt-2 font-body text-grey-20">
                Reach out for opportunities or collaboration.
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
