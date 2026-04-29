import { CallToAction } from "./sections/CallToAction";
import { CustomerStorySection } from "./sections/CustomerStorySection";
import { FeatureSection } from "./sections/FeatureSection";
import { HeroSection } from "./sections/HeroSection";
import { SupportSection } from "./sections/SupportSection";

export function LandingPage() {
  return (
    <article className="flex flex-col gap-10 md:gap-20">
      <HeroSection />

      <FeatureSection />

      <SupportSection />

      <CustomerStorySection />

      <CallToAction />
    </article>
  );
}