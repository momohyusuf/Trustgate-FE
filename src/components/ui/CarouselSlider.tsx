"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import EmblaCarousel from "./embla-carousel/EmblaCarousel";

export default function Carousel({ children }: { children: React.ReactNode }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  React.useEffect(() => {
    if (emblaApi) {
      console.log(emblaRef);

      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <section className="my-[3rem]">
      <EmblaCarousel>{children}</EmblaCarousel>
    </section>
  );
}
