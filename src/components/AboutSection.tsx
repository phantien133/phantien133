import { profile, cvTechSummary } from "../data/resume";

export function AboutSection() {
  return (
    <section className="bg-grey-50" id="about">
      <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
        <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
          <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            Who am I?
          </h2>
          <h3 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            I&apos;m {profile.name}, a {profile.title}
          </h3>
          <p className="pt-6 font-body leading-relaxed text-grey-20">{profile.bio}</p>
          <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
            <div className="flex items-center justify-center sm:justify-start">
              <p className="font-body text-lg font-semibold uppercase text-grey-20">Connect with me</p>
              <div className="hidden sm:block">
                <i className="bx bx-chevron-right text-2xl text-primary" aria-hidden />
              </div>
            </div>
            <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
              <a href={profile.contacts.github} target="_blank" rel="noreferrer noopener">
                <i className="bx bxl-github text-2xl text-primary hover:text-yellow" />
              </a>
              <a href={profile.contacts.linkedin} className="pl-4" target="_blank" rel="noreferrer noopener">
                <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow" />
              </a>
              <a href={`tel:${profile.contacts.phone.replace(/\s/g, "")}`} className="pl-4">
                <i className="bx bx-phone text-2xl text-primary hover:text-yellow" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full space-y-6 pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
          <p className="font-body font-semibold leading-relaxed text-black">{cvTechSummary.programmingLanguages}</p>
          <p className="font-body font-semibold leading-relaxed text-black">{cvTechSummary.database}</p>
          <p className="font-body font-semibold leading-relaxed text-black">{cvTechSummary.language}</p>
        </div>
      </div>
    </section>
  );
}
