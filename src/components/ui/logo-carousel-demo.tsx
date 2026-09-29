"use client";

import { AnimatedCarousel, LogoItem } from "@/components/ui/logo-carousel";

const partnerLogos: LogoItem[] = [
  { src: "/img/parteneri/Logo 1.png", alt: "Partner 1" },
  { src: "/img/parteneri/Logo 2.png", alt: "Partner 2" },
  { src: "/img/parteneri/Logo 3.png", alt: "Partner 3" },
  { src: "/img/parteneri/Logo 4.png", alt: "Partner 4" },
  { src: "/img/parteneri/Logo 5.png", alt: "Partner 5" },
  { src: "/img/parteneri/Logo 6.png", alt: "Partner 6" },
  { src: "/img/parteneri/Logo 7.png", alt: "Partner 7" },
];

export function CarouselDemo() {
  return (
    <div className="w-full flex items-center justify-center">
      <AnimatedCarousel
        title="Partenerii noștri"
        logos={partnerLogos}
        autoPlay={true}
        autoPlayInterval={3000}
        itemsPerViewMobile={3}
        itemsPerViewDesktop={5}
        logoContainerWidth="w-40"
        logoContainerHeight="h-20"
        logoImageWidth="w-auto"
        logoImageHeight="h-10"
      />
    </div>
  );
}

export default CarouselDemo;
