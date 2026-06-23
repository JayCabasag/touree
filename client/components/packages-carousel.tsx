"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type Package = {
  id: string;
  badge: string;
  title: string;
  description: string;
  price: string;
  priceUnit: string;
  imageAlt: string;
  imageSrc: string;
};

const PACKAGES: Package[] = [
  {
    id: "maldives-overwater",
    badge: "Featured Experience",
    title: "Maldives Ultimate Overwater Retreat",
    description:
      "Experience unparalleled luxury in your private overwater villa. Includes private chef, guided snorkeling tours, and sunset yacht cruises.",
    price: "$4,250",
    priceUnit: "/ person",
    imageAlt:
      "A breathtaking panoramic aerial view of a luxury tropical resort on a private island, surrounded by vibrant turquoise coral reefs and white sandy beaches under a warm golden sunset.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAf6b3uUxlguyhFE3fwZ7Z8mlcJAsDHizWHg3p-to2zUcngMxR0X55Ixskv2vVHrPAIOIKa0hJURaGyX7i-BRZUtPSGBFjka6iS-iFR5YCW-9SlyD88HfzFuSK4kF7L1Swuk6P0nxx05Rtfa0Z1pvtEfaOIiBfqHv0KLnq-gwCXAGtt7g_H2YEPkpwX0niDokBxnV4KqJde3ROAysztxGRzPChvaC7-RaH8efWgLj-tbNA9OUVzqEeQnN4GdLJtHJYezhDkCTigamE",
  },
  {
    id: "santorini-cliffside",
    badge: "Editor's Pick",
    title: "Santorini Cliffside Honeymoon Escape",
    description:
      "Wake up to caldera views from your private infinity pool suite. Includes wine tasting tours, a candlelit dinner, and a sunset catamaran cruise.",
    price: "$3,180",
    priceUnit: "/ person",
    imageAlt:
      "A stunning cliffside view of Santorini with white-washed buildings, blue domed roofs, and an infinity pool overlooking the deep blue Aegean Sea at golden hour.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAf6b3uUxlguyhFE3fwZ7Z8mlcJAsDHizWHg3p-to2zUcngMxR0X55Ixskv2vVHrPAIOIKa0hJURaGyX7i-BRZUtPSGBFjka6iS-iFR5YCW-9SlyD88HfzFuSK4kF7L1Swuk6P0nxx05Rtfa0Z1pvtEfaOIiBfqHv0KLnq-gwCXAGtt7g_H2YEPkpwX0niDokBxnV4KqJde3ROAysztxGRzPChvaC7-RaH8efWgLj-tbNA9OUVzqEeQnN4GdLJtHJYezhDkCTigamE",
  },
  {
    id: "kyoto-cultural",
    badge: "New This Season",
    title: "Kyoto Heritage & Hot Springs Journey",
    description:
      "Stay in a traditional ryokan, soak in a private onsen, and join a guided tea ceremony through Kyoto's historic temple districts.",
    price: "$2,640",
    priceUnit: "/ person",
    imageAlt:
      "A serene Kyoto temple garden in autumn with red maple leaves, a traditional wooden ryokan building, and a stone pathway leading to a softly lit lantern at dusk.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAf6b3uUxlguyhFE3fwZ7Z8mlcJAsDHizWHg3p-to2zUcngMxR0X55Ixskv2vVHrPAIOIKa0hJURaGyX7i-BRZUtPSGBFjka6iS-iFR5YCW-9SlyD88HfzFuSK4kF7L1Swuk6P0nxx05Rtfa0Z1pvtEfaOIiBfqHv0KLnq-gwCXAGtt7g_H2YEPkpwX0niDokBxnV4KqJde3ROAysztxGRzPChvaC7-RaH8efWgLj-tbNA9OUVzqEeQnN4GdLJtHJYezhDkCTigamE",
  },
];

const AUTOPLAY_DELAY_MS = 6000;

export function PackagesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: AUTOPLAY_DELAY_MS }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      <div className="h-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="relative flex-[0_0_100%] min-w-0 h-full"
            >
              <div className="absolute inset-0 w-full h-full">
                <img
                  className="w-full h-full object-cover"
                  data-alt={pkg.imageAlt}
                  src={pkg.imageSrc}
                  alt={pkg.imageAlt}
                />
                <div className="absolute inset-0 carousel-gradient"></div>
              </div>
              <div className="absolute inset-0 flex items-end pb-16 px-4 md:px-margin-desktop">
                <div className="max-w-7xl mx-auto w-full">
                  <div className="max-w-2xl space-y-4">
                    <span className="bg-primary px-3 py-1 text-on-primary rounded-full font-label-sm uppercase tracking-wider">
                      {pkg.badge}
                    </span>
                    <h1 className="text-white font-headline-lg text-4xl md:text-6xl">
                      {pkg.title}
                    </h1>
                    <p className="text-white/90 text-body-lg max-w-xl">
                      {pkg.description}
                    </p>
                    <div className="flex items-center gap-6 pt-4">
                      <div>
                        <p className="text-white/70 font-label-sm uppercase">
                          Starting from
                        </p>
                        <p className="text-white text-3xl font-bold">
                          {pkg.price}{" "}
                          <span className="text-lg font-normal">
                            {pkg.priceUnit}
                          </span>
                        </p>
                      </div>
                      <button className="bg-primary hover:bg-surface-tint text-on-primary px-8 py-4 rounded-xl font-bold transition-all shadow-lg active:scale-95">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Previous package"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-2 md:p-3 transition-all active:scale-90"
      >
        <span className="material-symbols-outlined text-2xl md:text-3xl leading-none">
          chevron_left
        </span>
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label="Next package"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-2 md:p-3 transition-all active:scale-90"
      >
        <span className="material-symbols-outlined text-2xl md:text-3xl leading-none">
          chevron_right
        </span>
      </button>

      {/* Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {PACKAGES.map((pkg, index) => (
          <button
            key={pkg.id}
            type="button"
            onClick={() => scrollTo(index)}
            aria-label={`Go to ${pkg.title}`}
            aria-current={index === selectedIndex}
            className={`h-2 rounded-full transition-all ${
              index === selectedIndex ? "w-6 bg-primary" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
