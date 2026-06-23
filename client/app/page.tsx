"use client";

import { HeroSection } from "@/components/hero-section";
import { FeaturedPackages } from "@/components/featured-packages";
import { WhyChooseTouree } from "@/components/why-choose-touree";
import { TravelStories } from "@/components/travel-stories";
import { CTANewsletter } from "@/components/cta-newsletter";
import { MostBookedRightNow } from "@/components/most-booked-right-now";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MostBookedRightNow />
      <FeaturedPackages />
      <WhyChooseTouree />
      <TravelStories />
      <CTANewsletter />
    </>
  );
}
