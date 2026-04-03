import { assetUrl } from "../lib/assets";

export function DecorativeStripSection() {
  return (
    <div
      className="h-48 bg-cover bg-center bg-no-repeat opacity-90 sm:h-56 md:h-64 lg:h-72"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(15,118,110,0.35), rgba(251,191,36,0.22)), url(${assetUrl("assets/img/logo-stripe.svg")})`,
        backgroundSize: "200px",
        backgroundRepeat: "repeat",
      }}
      aria-hidden
    />
  );
}
