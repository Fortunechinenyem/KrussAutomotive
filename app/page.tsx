import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ServicesGrid />
      <Testimonials />
      {/* <CTA /> */}
    </main>
  );
}
