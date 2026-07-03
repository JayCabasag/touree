import { PackagesFilterBar } from "@/components/packages-filter-bar";
import { PackagesCarousel } from "@/components/packages-carousel";
import { PackagesGrid } from "@/components/packages-grid";
import { RequestQuoteCTA } from "@/components/request-quote-cta";

export default function PackagesPage() {
  return (
    <>
      <PackagesCarousel />
      <PackagesFilterBar />
      <PackagesGrid />
      <RequestQuoteCTA />
    </>
  );
}
