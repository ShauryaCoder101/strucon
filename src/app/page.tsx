import { Hero } from "@/components/home/Hero";
import { TrustedBy } from "@/components/home/TrustedBy";
import { StatsBar } from "@/components/home/StatsBar";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { IndustriesGrid } from "@/components/home/IndustriesGrid";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { WhyChoose } from "@/components/home/WhyChoose";
import { GlobalPresence } from "@/components/home/GlobalPresence";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <StatsBar />
      <ServicesGrid />
      <IndustriesGrid />
      <FeaturedProjects />
      <WhyChoose />
      <GlobalPresence />
      <FinalCta />
    </>
  );
}
