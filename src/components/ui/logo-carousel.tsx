"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/logo-carousel-utils/carousel";
import { TextRoll } from "@/components/ui/logo-carousel-utils/text-roll";

export interface LogoItem {
  src: string;
  alt?: string;
}

export const DEFAULT_PARTNER_LOGOS: LogoItem[] = [
  { src: "/img/parteneri/Logo 1.png", alt: "Partner 1" },
  { src: "/img/parteneri/Logo 2.png", alt: "Partner 2" },
  { src: "/img/parteneri/Logo 3.png", alt: "Partner 3" },
  { src: "/img/parteneri/Logo 4.png", alt: "Partner 4" },
  { src: "/img/parteneri/Logo 5.png", alt: "Partner 5" },
  { src: "/img/parteneri/Logo 6.png", alt: "Partner 6" },
  { src: "/img/parteneri/Logo 7.png", alt: "Partner 7" },
];

export interface AnimatedCarouselProps {
  title?: string;
  logoCount?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  logos?: (string | LogoItem)[] | null;
  containerClassName?: string;
  titleClassName?: string;
  carouselClassName?: string;
  logoClassName?: string;
  itemsPerViewMobile?: number;
  itemsPerViewDesktop?: number;
  spacing?: string;
  padding?: string;
  logoContainerWidth?: string;
  logoContainerHeight?: string;
  logoImageWidth?: string;
  logoImageHeight?: string;
  logoMaxWidth?: string;
  logoMaxHeight?: string;
}

export const AnimatedCarousel: React.FC<AnimatedCarouselProps> = ({
  title = "Trusted by thousands of businesses worldwide",
  logoCount = 14,
  autoPlay = true,
  autoPlayInterval = 2500,
  logos = null,
  containerClassName = "",
  titleClassName = "",
  carouselClassName = "",
  logoClassName = "",
  itemsPerViewMobile = 3,
  itemsPerViewDesktop = 5,
  spacing = "gap-10",
  padding = "py-16 lg:py-24",
  logoContainerWidth = "w-48",
  logoContainerHeight = "h-24",
  logoImageWidth = "w-full",
  logoImageHeight = "h-full",
  logoMaxWidth = "",
  logoMaxHeight = "",
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api || !autoPlay) {
      return;
    }

    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, autoPlayInterval);

    return () => clearTimeout(timer);
  }, [api, current, autoPlay, autoPlayInterval]);

  const defaultLogos = DEFAULT_PARTNER_LOGOS.map((l) => l.src);
  const logoItems =
    logos ||
    (defaultLogos.length > 0
      ? Array.from(
          { length: logoCount },
          (_, i) => defaultLogos[i % defaultLogos.length]
        )
      : Array.from(
          { length: logoCount },
          (_, i) =>
            `https://th.bing.com/th/id/R.4aa108082e7d3cbd55add79f84612aaa?rik=I4dbPhSe%2fbHHSg&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png&ehk=ewmaCOvP0Ji4QViEJnxSdlrYUrTSTWhi8nZ9XdyCgAI%3d&risl=&pid=ImgRaw&r=0100x100?text=Logo+${i + 1}`
        ));

  const logoImageSizeClasses =
    `${logoImageWidth} ${logoImageHeight} ${logoMaxWidth} ${logoMaxHeight}`.trim();

  const mobileBasis = `${100 / Math.max(itemsPerViewMobile, 1)}%`;
  const desktopBasis = `${100 / Math.max(itemsPerViewDesktop, 1)}%`;

  return (
    <div className={`w-full ${padding} bg-background ${containerClassName}`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${spacing}`}>
          <h2
            className={`text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left ml-2 text-foreground ${titleClassName}`}
          >
            <TextRoll>{title}</TextRoll>
          </h2>

          <div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              setApi={setApi}
              className={`w-full ${carouselClassName}`}
            >
              <CarouselContent>
                {logoItems.map((logo, index) => {
                  const src = typeof logo === "string" ? logo : logo.src;
                  const alt =
                    typeof logo === "string"
                      ? `Logo ${index + 1}`
                      : logo.alt || `Logo ${index + 1}`;

                  return (
                    <CarouselItem
                      className="basis-[var(--mobile-basis)] lg:basis-[var(--desktop-basis)]"
                      style={
                        {
                          "--mobile-basis": mobileBasis,
                          "--desktop-basis": desktopBasis,
                        } as React.CSSProperties
                      }
                      key={index}
                    >
                      <div
                        className={`mx-auto flex items-center justify-center rounded-md p-4 transition-colors hover:bg-accent ${logoContainerWidth} ${logoContainerHeight} ${logoClassName}`}
                        style={{ width: "min(10rem, 100%)", height: "5rem" }}
                      >
                        <img
                          src={encodeURI(src)}
                          alt={alt}
                          className={`${logoImageSizeClasses} block object-contain opacity-80 transition-opacity hover:opacity-100`}
                          style={{ width: "auto", height: "3.5rem", maxWidth: "100%" }}
                        />
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Case1 = (props: AnimatedCarouselProps) => {
  return <AnimatedCarousel {...props} />;
};

export default AnimatedCarousel;
