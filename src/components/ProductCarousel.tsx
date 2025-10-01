"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Props = {
  images: string[];
  title: string;
};

export default function ProductCarousel({ images, title }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="relative max-w-xl">
      {/* carousel */}
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {images.map((img, idx) => (
            <div className="flex-[0_0_100%]" key={idx}>
              <Image
                src={img}
                alt={`${title} ${idx + 1}`}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* navigation button */}
      <button
        onClick={scrollPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white px-3 py-1 rounded-full shadow cursor-pointer"
      >
        ◀
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white px-3 py-1 rounded-full shadow cursor-pointer"
      >
        ▶
      </button>

      {/* dot indicator */}
      <div className="flex justify-center gap-2 mt-3">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === selectedIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
