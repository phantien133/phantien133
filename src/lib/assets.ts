import type { AtomServiceIcon } from "../data/resume";

export function assetUrl(path: string) {
  const base = import.meta.env.BASE_URL;
  const p = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${p}`;
}

export function serviceIconFile(icon: AtomServiceIcon, variant: "black" | "white") {
  const baseName: Record<AtomServiceIcon, string> = {
    development: "icon-development",
    content: "icon-content",
    mobile: "icon-mobile",
    email: "icon-email",
    design: "icon-design",
    graphics: "icon-graphics",
  };
  return assetUrl(`assets/img/${baseName[icon]}-${variant}.svg`);
}
