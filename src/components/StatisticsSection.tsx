import { atomStats } from "../data/resume";
import { assetUrl } from "../lib/assets";

export function StatisticsSection() {
  return (
    <section
      className="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(244,243,248,0.94) 0%, rgba(255,255,255,0.97) 100%), url(${assetUrl("assets/img/experience-figure.png")})`,
      }}
      id="statistics"
    >
      <div className="container">
        <div className="mx-auto w-5/6 bg-white py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
          <div className="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
            {atomStats.map((item, idx) => (
              <div
                key={item.label}
                className={`flex flex-col items-center justify-center text-center md:flex-row md:text-left ${
                  idx >= 2 ? "mt-6 md:mt-10 lg:mt-0" : ""
                }`}
              >
                <div>
                  <img
                    src={assetUrl(`assets/img/${item.icon}`)}
                    className="mx-auto h-12 w-auto md:h-20"
                    alt=""
                  />
                </div>
                <div className="pt-5 md:pl-5 md:pt-0">
                  <p className="font-body text-2xl font-bold text-primary md:text-4xl">{item.value}</p>
                  <p className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
