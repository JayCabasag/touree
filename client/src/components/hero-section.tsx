"use client";

import { ExploreSearchBar } from "./explore-search-bar";

export function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-150 flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB0nFENdFT0bjUpIS2h-d9SkQ642ZUZhwLuZvKbbp6ly6OjMNxVXfqxoXC2fUn0akDg02vLjML3mOW0yahvecNsMVBZ3ITW2y2-XAWcT9u_Rjmn6z4KHvlIdlGeLhpPyfj_8TlsDjZRH9QnF-P6tAHB-LlyNAXt3d3NgFQqU9kcOyqSXt4gVcOLt9wLfDfua5LTTI4Uohwltub0aSaFH9nCmDY36mXxm1wsDqxZi8aiCVKBtxw5h5ED2bbXf3-cQZyFwylwuoyvD9E")',
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-20">
        <div className="max-w-2xl text-white hero-shadow z-10">
          <h1 className="font-headline-lg text-6xl md:text-7xl mb-6 leading-tight">
            Crafting Unforgettable Journeys.
          </h1>
          <p className="font-body-lg text-body-lg md:text-2xl opacity-90 mb-12">
            Find tours and travel packages easily, anytime, anywhere with
            Touree&apos;s curated luxury collections.
          </p>
        </div>

        <ExploreSearchBar />
      </div>
    </section>
  );
}
