import { profile } from "../data/resume";

export function ContactSection() {
  return (
    <section className="container py-16 md:py-20" id="contact">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Get in touch
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Have any questions?
      </h3>
      <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
        <p className="font-body text-grey-10">
          Reach me by phone or email — I&apos;d be glad to hear from you.
        </p>
      </div>
      <div className="flex flex-col pt-12 lg:flex-row">
        <div className="w-full border-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
          <div className="flex items-center">
            <i className="bx bx-phone text-2xl text-grey-40" aria-hidden />
            <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">My phone</p>
          </div>
          <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
            <a href={`tel:${profile.contacts.phone.replace(/\s/g, "")}`}>{profile.contacts.phoneDisplay}</a>
          </p>
        </div>
        <div className="w-full border-2 border-t-0 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-t-2 lg:border-l-0">
          <div className="flex items-center">
            <i className="bx bx-envelope text-2xl text-grey-40" aria-hidden />
            <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">My email</p>
          </div>
          <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
            <a href={`mailto:${profile.contacts.email}`}>{profile.contacts.email}</a>
          </p>
        </div>
        <div className="w-full border-2 border-t-0 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-t-2 lg:border-l-0">
          <div className="flex items-center">
            <i className="bx bx-map text-2xl text-grey-40" aria-hidden />
            <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">Location</p>
          </div>
          <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">Vietnam</p>
        </div>
      </div>
    </section>
  );
}
