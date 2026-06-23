"use client";

import Link from "next/link";
import { Pagination } from "./pagination";

interface ExploreResult {
  id: string;
  slug: string;
  title: string;
  location: string;
  duration: string;
  price: number;
  rating: number;
  reviewCount: string;
  image: string;
  imageAlt: string;
  badge?: string;
  badgeStyle?: "primary" | "booking-blue";
}

// Replace this with the response from your API (e.g. GET /explore?query=Europe)
const results: ExploreResult[] = [
  {
    id: "1",
    slug: "amalfi-coast-luxury-escape",
    title: "Amalfi Coast Luxury Escape",
    location: "Amalfi, Italy",
    duration: "7 Days",
    price: 3450,
    rating: 4.9,
    reviewCount: "1.2k",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCKueRRY2vZpXe0WFLCy85FnxADY0jfl-MFNHjH-pGqVRVfz8bzVfCELUJLHyL7TxIVVO8N7Nw7jj85mrAFNvCEjfLhLDXeR7zsOyLKZ_l5Lp0MbCwTggP0Kd8ZUURdYXiH_JDDGPCuh_XSkuaqkEwYWCiXpJ9u9LjM7W0f73-u1wXdnKFtM18na0_k-lgqVhxKGAHmcQr5fsbZ8LA00NUBbpc75hgp7sTNCkDrOy-mrMtgVXQAiK1BofrvXSZaCrJq0-Rw6I_cZ20",
    imageAlt:
      "A wide cinematic shot of a sunset over the Amalfi Coast in Italy. Warm golden light spills over colorful pastel buildings perched on steep limestone cliffs overlooking the Mediterranean sea.",
    badge: "Best Seller",
    badgeStyle: "primary",
  },
  {
    id: "2",
    slug: "swiss-alpine-grand-tour",
    title: "Swiss Alpine Grand Tour",
    location: "Zermatt, CH",
    duration: "10 Days",
    price: 4120,
    rating: 4.8,
    reviewCount: "850",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDXBhyHncstYiPTnZ5CHm_tWyGp_roW5trdnf6UaA0CYWeiesP7TtwuP5yPhlXQqYbt77riKIx2NIZRXss6rAZQfbcbZuhWCVtGUc74vuB83LYz9BxQofiOO3vlkfDeqVLxXaUOUxqdIcQxRZUbdZca_ffrghCXutOlFAWz8NajCMdejXB19Y0ioYn7MSt6KhV5vNQ4SG7BXxgRjtbVlGLzLvwqnwF8pInzuoLPesWkeSAw78YQRtyxb_gG8X8Lyt6L7-df11OoP0k",
    imageAlt:
      "Breathtaking aerial view of the Swiss Alps in winter. Sharp, snow-covered mountain peaks piercing through a sea of white clouds under a brilliant blue sky.",
    badge: "High Value",
    badgeStyle: "booking-blue",
  },
  {
    id: "3",
    slug: "cycladic-island-hopping",
    title: "Cycladic Island Hopping",
    location: "Santorini, GR",
    duration: "12 Days",
    price: 2890,
    rating: 4.7,
    reviewCount: "2.4k",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB0jBA1FILDCpV1hQRuQ1JJWh2x_cPlquWd5iPVMV_xuEHZgedcy7SchpfUrllB-EDlr-8sFFBFWBypMLV93dP0aXo0_L7oyyzgOq1VVPTySb7GY0YPUSDFnyHjd9SqcYf6DPx1CgbolAWmyDOHifc3JYI9bMvhb08WmkeedNBis8WiYpHkWkupU1uE-nCS6Ts0MjHU0BllPCzOOb1K6Ey7xti-61WFj__V_xmX-1sdCIBPl-6TRnA5FSiFcfHYJFepg4Rz2mHRPvU",
    imageAlt:
      "Sunset at Santorini, Greece with the iconic blue-domed white churches in Oia. The sky is a gradient of violet and orange.",
  },
];

function ResultCard({ result }: { result: ExploreResult }) {
  return (
    <Link
      href={`/packages/${result.slug}`}
      className="group relative bg-white rounded-xl overflow-hidden card-shadow hover:-translate-y-1 transition-all duration-300 block"
    >
      <div className="aspect-4/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10"></div>
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          data-alt={result.imageAlt}
          src={result.image}
        />
        {result.badge && (
          <div
            className={`absolute top-4 left-4 z-20 px-3 py-1 rounded-full font-label-sm text-label-sm ${
              result.badgeStyle === "booking-blue"
                ? "bg-booking-blue text-white"
                : "bg-primary text-on-primary"
            }`}
          >
            {result.badge}
          </div>
        )}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            // toggleFavorite(result.id)
          }}
          className="absolute top-4 right-4 z-20 p-2 bg-white/20 glass-effect rounded-full text-white hover:bg-primary transition-all"
        >
          <span className="material-symbols-outlined">favorite</span>
        </button>
        <div className="absolute bottom-4 left-4 z-20 text-white">
          <div className="flex items-center gap-1 mb-1">
            <span
              className="material-symbols-outlined text-[16px] text-status-warning"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <span className="font-label-sm text-label-sm">
              {result.rating} ({result.reviewCount})
            </span>
          </div>
          <h3 className="font-headline-md text-[20px] leading-tight">
            {result.title}
          </h3>
        </div>
      </div>
      <div className="p-5 space-y-4">
        <div className="flex justify-between items-center text-text-secondary font-label-sm text-label-sm">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px]">
              calendar_today
            </span>{" "}
            {result.duration}
          </div>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px]">
              location_on
            </span>{" "}
            {result.location}
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <span className="text-text-secondary font-label-sm text-label-sm">
              From
            </span>
            <div className="font-headline-lg text-[24px] text-primary">
              ${result.price.toLocaleString()}
            </div>
          </div>
          <span className="bg-primary group-hover:bg-primary-container text-on-primary px-6 py-2.5 rounded-lg font-label-sm text-label-sm transition-all">
            View Deal
          </span>
        </div>
      </div>
    </Link>
  );
}

export function ExploreResultGrid({
  destination,
}: {
  destination: string | null;
}) {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
        <div>
          <h1 className="font-headline-lg text-headline-lg">
            Found {results.length} results for "{destination}"
          </h1>
          <p className="text-text-secondary font-body-md text-body-md">
            Showing best value and premium experiences
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex p-1 bg-surface-container-high rounded-lg">
            <button
              className="p-2 rounded-md bg-white shadow-sm text-primary"
              id="grid-toggle"
            >
              <span className="material-symbols-outlined">grid_view</span>
            </button>
            <button
              className="p-2 rounded-md text-text-secondary hover:text-primary transition-all"
              id="map-toggle"
            >
              <span
                className="material-symbols-outlined"
                style={{ transform: "scale(1)" }}
              >
                map
              </span>
            </button>
          </div>
          <select className="border-outline-variant rounded-lg bg-surface font-label-sm text-label-sm focus:ring-primary focus:border-primary">
            <option>Recommended</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
          </select>
        </div>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        id="results-container"
      >
        {results.map((result) => (
          <ResultCard key={result.id} result={result} />
        ))}

        <div
          className="hidden col-span-full h-150 rounded-xl overflow-hidden border border-outline-variant relative"
          id="map-view-container"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            data-location="Europe"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCkyuJFxKu8LikaQsbQMQHvc4bLjUHCgCs7NeFShAvPi7CbJ8cY464_goTijZNIh5WQ6Th4eToQIpEB68Sj-oIz9NIwF721cqPLLZK-X_WC8P11nctIB9t7NL-53l98ya6wPzKiJ7994tDhGKGpdxI3K3p2EVr_Ztrls0OqtU7EpjY4EazOt6bASyviurb4O7azATCOzIiKXU-qkSd26ffbo1KjFg4XhDIm4b1s-4bjAFOBkXm9yPTjeux8wNP3FTIfXbkTpcqbzLU')",
            }}
          ></div>
          <div className="absolute top-6 left-6 z-20 space-y-3">
            {results.slice(0, 2).map((result) => (
              <Link
                key={result.id}
                href={`/packages/${result.slug}`}
                className="bg-white/90 backdrop-blur p-3 rounded-lg shadow-lg border border-outline-variant flex items-center gap-4 max-w-xs group cursor-pointer"
              >
                <div className="w-16 h-16 rounded overflow-hidden shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    data-alt={`A small thumbnail of ${result.title}`}
                    src={result.image}
                  />
                </div>
                <div>
                  <p className="font-bold text-label-sm text-primary">
                    ${result.price.toLocaleString()}
                  </p>
                  <p className="text-body-md font-bold truncate">
                    {result.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Pagination />
    </>
  );
}
