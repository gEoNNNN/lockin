import Navbar from "@/components/ui/navbar";
import Hero from "@/components/ui/demo";
import CarouselDemo from "@/components/ui/logo-carousel-demo";
import ExpertiseStats from "@/components/ui/expertise-stats";
import ProjectsSection from "@/components/ui/projects-section";
import PricingDemo from "@/components/ui/pricing-demo";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="w-full">
        <Hero />
        <CarouselDemo />
        <ExpertiseStats />
        <ProjectsSection />
        <PricingDemo />
      </main>
    </div>
  );
}
