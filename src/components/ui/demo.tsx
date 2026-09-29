import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  backgroundImage?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function Hero({
  backgroundImage = "/img/bg.jpg",
  title = "Sustainable Solutions for a Better Future",
  description = "Empowering businesses and communities to thrive in a low-carbon world through tailored clean energy solutions.",
  buttonText = "Start a Project",
  onButtonClick,
}: HeroProps = {}) {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-10 size-full pointer-events-none">
        <div className="absolute inset-0 grid grid-cols-12 divide-x divide-[#F5F1E8]/20">
          <div className="col-span-1 h-full" />
          <div className="col-span-3 h-full" />
          <div className="col-span-4 h-full" />
          <div className="col-span-3 h-full" />
          <div className="col-span-1 h-full" />
        </div>
        <div className="absolute inset-0 grid grid-rows-[repeat(12,minmax(0,1fr))] divide-y divide-[#F5F1E8]/20">
          <div className="row-span-1 w-full" />
          <div className="row-span-3 w-full" />
          <div className="row-span-4 w-full" />
          <div className="row-span-3 w-full" />
          <div className="row-span-1 w-full" />
        </div>
      </div>
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-[#25211D]/45" />
      </div>

      <div className="relative z-20 max-w-5xl px-6 text-center text-[#F5F1E8]">
        <h1 className="text-center font-kanturmuy font-normal text-5xl text-[#F5F1E8] tracking-tight md:text-6xl lg:text-8xl">
          {title}
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-center font-light text-lg text-[#F5F1E8]/90 md:text-xl">
          {description}
        </p>

        <Button
          onClick={onButtonClick}
          className="group not-disabled:inset-shadow-none mx-auto flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent px-0 py-5 font-normal shadow-none hover:bg-transparent [:hover,[data-pressed]]:bg-transparent"
        >
          <span className="rounded-full bg-[#D8C8AD] px-6 py-3 text-[#25211D] duration-500 ease-in-out group-hover:bg-[#25211D] group-hover:text-[#D8C8AD] group-hover:transition-colors">
            {buttonText}
          </span>
          <div className="relative flex h-fit cursor-pointer items-center overflow-hidden rounded-full bg-[#D8C8AD] p-5 text-[#25211D] duration-500 ease-in-out group-hover:bg-[#25211D] group-hover:text-[#D8C8AD] group-hover:transition-colors">
            <ArrowUpRight className="absolute h-5 w-5 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-10" />
            <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2" />
          </div>
        </Button>
      </div>
    </section>
  );
}

export { Hero };
