import { assetUrl } from "../lib/assets";

export function DecorativeStripSection() {
  return (
    <div
      className="h-48 bg-cover bg-center bg-no-repeat opacity-90 sm:h-56 md:h-64 lg:h-72"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(85,64,174,0.35), rgba(249,231,28,0.2)), url(${assetUrl("assets/img/logo-stripe.svg")})`,
        backgroundSize: "200px",
        backgroundRepeat: "repeat",
      }}
      aria-hidden
    />
  );
}
