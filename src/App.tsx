import { useState } from "react";
import { AboutSection } from "./components/AboutSection";
import { BlogSection } from "./components/BlogSection";
import { ContactSection } from "./components/ContactSection";
import { DecorativeStripSection } from "./components/DecorativeStripSection";
import { HeroSection } from "./components/HeroSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { ResumeSection } from "./components/ResumeSection";
import { StrengthsSection } from "./components/StrengthsSection";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { StatisticsSection } from "./components/StatisticsSection";
import { WorkSection } from "./components/WorkSection";

export default function App() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className={mobileMenu ? "relative max-h-screen overflow-hidden" : "relative"}>
      <div className="relative">
        <SiteHeader mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <WorkSection />
        <StatisticsSection />
        <StrengthsSection />
        <ResumeSection />
        <BlogSection />
        <ContactSection />
        <DecorativeStripSection />
      </div>
      <SiteFooter />
    </div>
  );
}
