"use client";

import { useState } from "react";
import { QuoteOffersHeader, SortOption } from "./quote-offers-header";

export function QuoteOffers() {
  const [sortFilter, setSortFilter] = useState<SortOption>("latest");
  return (
    <div className="flex flex-col gap-8">
      <QuoteOffersHeader
        offerCount={4}
        destinationLabel="Somehwere"
        value={sortFilter}
        onValueChange={setSortFilter}
      />

      <section className="relative bg-white rounded-xl premium-shadow border-2 border-primary overflow-hidden group">
        <div className="absolute top-0 right-0 bg-primary text-white px-6 py-2 rounded-bl-xl font-label-sm text-label-sm flex items-center gap-2 z-10">
          <span className="material-symbols-outlined text-[18px]">
            verified
          </span>
          Recommended Option
        </div>
        <div className="flex flex-col lg:flex-row h-full">
          <div className="lg:w-1/3 relative h-64 lg:h-auto">
            <img
              className="w-full h-full object-cover"
              data-alt="A breathtaking view of a luxury chalet nestled in the Swiss Alps, surrounded by snow-capped peaks and vibrant green pine forests. The sun shines brightly, creating a high-contrast and aspirational mood. The photography is clean, sharp, and emphasizes the pristine white of the snow and the rich textures of the wooden architecture."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8sguuxnpMljHcStG4d8mooChxXVlNM9WHZYEbtzScZM04aDQi46SB62h40coEosQMfRRP3QZuZptM1kjpAPeMD1BdzVoKtBHbxSurZj_w9pRKTF7VsJ3-jto9v7895UIaliyLMp31tjMktkta6dZGtRH8qXcq9G450iEhcWmpwHrgVWUR3-Rr0MhZMNrY5GIj0Nsl1yqd30T_8dWDnKrlzoozfKi5AwcJeP4F11K_IEZgM_gCpIFQ1uhiCqnKLT2MqCg6FMy72cA"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <span className="font-label-sm text-label-sm bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                10 Days / 9 Nights
              </span>
            </div>
          </div>

          <div className="lg:w-2/3 p-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <img
                    className="w-14 h-14 rounded-full border-2 border-surface-container-highest object-cover"
                    data-alt="A professional portrait of an elegant travel coordinator named Elena. She has a confident and welcoming smile, wearing a stylish blazer in a soft neutral tone. The background is a minimalist, modern office space with soft ambient lighting, conveying expertise and premium service quality."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7qXbtWZRaMzSO1Ar4P-hxYhjqDwpe3jDqsOGUCtUrE5XsNcFKyth24W6w25EEq4QB3slKHyVtPlTSAAsmfoqZxCnMb2XcbVXsQ6Wc2UuuxuW68on1aAHcX7M2OtlZgI8NVCqo2LvKDIkSH87oZnjWs1uwRR5o3M_Yli-qafJ7UmVhGzo99lI48Hp5_NQ9Q9Nkw_U50woQzeUJX8Edl_BeURbz2KWyubF38xynWz92ZCWkRtybTMLAJMjjmJ6Unc5QX2aRI4oDj-E"
                  />
                  <div>
                    <h3 className="font-headline-md text-headline-md text-on-surface">
                      Elena's Swiss Odyssey
                    </h3>
                    <p className="font-label-sm text-label-sm text-text-secondary flex items-center gap-1">
                      By{" "}
                      <span className="font-semibold text-primary underline">
                        Elena V.
                      </span>{" "}
                      • Travel Expert
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-label-sm text-label-sm text-text-secondary line-through">
                    $5,200
                  </p>
                  <p className="font-headline-lg text-headline-lg text-primary">
                    $4,850{" "}
                    <span className="text-body-md font-normal text-on-surface-variant">
                      / total
                    </span>
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary p-2 bg-primary-fixed rounded-lg">
                    hotel
                  </span>
                  <div>
                    <p className="font-label-sm text-label-sm text-on-surface font-semibold">
                      Stay
                    </p>
                    <p className="font-body-md text-[14px] text-text-secondary">
                      5-Star Boutique Chalets
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary p-2 bg-primary-fixed rounded-lg">
                    train
                  </span>
                  <div>
                    <p className="font-label-sm text-label-sm text-on-surface font-semibold">
                      Transport
                    </p>
                    <p className="font-body-md text-[14px] text-text-secondary">
                      First-class Swiss Travel Pass
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary p-2 bg-primary-fixed rounded-lg">
                    restaurant
                  </span>
                  <div>
                    <p className="font-label-sm text-label-sm text-on-surface font-semibold">
                      Dining
                    </p>
                    <p className="font-body-md text-[14px] text-text-secondary">
                      Daily breakfast &amp; 3 dinners
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-on-surface-variant font-body-md line-clamp-2">
                "Experience the heart of the Alps with exclusive access to the
                Jungfraujoch region. I've curated this itinerary to blend
                adventure with moments of pure serenity..."
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <button className="bg-primary text-white font-label-sm text-label-sm px-8 py-3 rounded-lg hover:bg-primary-container transition-all active:scale-[0.98]">
                View Full Itinerary
              </button>
              <button className="bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm px-8 py-3 rounded-lg hover:bg-surface-container-highest transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">
                  chat_bubble
                </span>
                Message Elena
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="bento-grid">
        <div className="bg-white rounded-xl premium-shadow border border-outline-variant p-6 flex flex-col justify-between hover:border-primary transition-all duration-300">
          <div>
            <div className="flex justify-between items-start mb-6">
              <div className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full font-label-sm text-[10px] uppercase tracking-wider">
                Best Value
              </div>
              <span className="font-headline-md text-headline-md text-on-surface">
                $3,100
              </span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-surface-muted overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  data-alt="A candid profile photo of Marco, a rugged and energetic travel coordinator with a passion for outdoors. He is wearing high-performance mountain gear against a background of misty peaks. The lighting is natural and slightly moody, emphasizing a sense of adventure and reliability."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9KQIspFZddTMcxaupmCWNiyMWJRRuz3qxyFWwPIjYDZNz9LwSWOnYjbVzgdsU-lj_GaBhV5uop6NTv7_4Im5yHgmBKmb3lo1tZcXPkfjq7-ZiXmJcaVcOKhdV62IRDrMovFN9XE7TPy8DdXio7hW8jsnvHMX3CpDxelicwRxXQjbkXwR6RHiHmpXLEzRdMpaRjMAnnEcQJQhrkvv6pW5HZrmM5LMjr6w5SaIRdN_LwVKu1sovN8UovMTsaVHaAzkOKF3zzcXCHbg"
                />
              </div>
              <div>
                <h4 className="font-label-sm text-label-sm text-on-surface">
                  Marco's Alpine Trail
                </h4>
                <div className="flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-status-warning text-[14px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="text-[12px] font-semibold">4.9</span>
                  <span className="text-[12px] text-text-secondary">
                    (82 reviews)
                  </span>
                </div>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-[14px] text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  check_circle
                </span>
                Hand-picked mountain lodges
              </li>
              <li className="flex items-center gap-2 text-[14px] text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  check_circle
                </span>
                Guided glacier trekking included
              </li>
              <li className="flex items-center gap-2 text-[14px] text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  check_circle
                </span>
                Sustainable travel focus
              </li>
            </ul>
          </div>
          <button className="w-full py-3 border border-primary text-primary rounded-lg font-label-sm text-label-sm hover:bg-primary hover:text-white transition-all duration-200">
            View Proposal
          </button>
        </div>

        <div className="bg-white rounded-xl premium-shadow border border-outline-variant p-6 flex flex-col justify-between hover:border-primary transition-all duration-300">
          <div>
            <div className="flex justify-between items-start mb-6">
              <div className="bg-surface-container text-on-surface-variant px-3 py-1 rounded-full font-label-sm text-[10px] uppercase tracking-wider">
                Luxury Tier
              </div>
              <span className="font-headline-md text-headline-md text-on-surface">
                $7,400
              </span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-surface-muted overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  data-alt="A portrait of Sofia, a sophisticated travel advisor specialized in ultra-luxury experiences. She has a minimalist, clean aesthetic, wearing pearls and a crisp white shirt. The background is a soft-focus image of a luxury hotel lobby, radiating exclusivity and high-end service."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE1Af5uWJ87PGWC7wjqjRZ3lsRF7HVG0_V2NqFZlJgPgW8UcgO3xt5qZdaENL5bwjKq9M-OKIvCQCt0FIPtluqI1Y7W7mxQ-eNQ27A91nl0xSKOQGUuzVdqdDOunX2uhN_vLrIVp7owsTQdnyDVmCRwTvbq_N_xOVLMNZF_o42nq_bDuR3BXdiHMFdCvYNUzWRMlo3Q-HSp6OeXJrnpenTlP9bWCLYffLgmwP4vPdyy2aMot-yUgSQXowWUs6t4sHVuWRLChL3pwE"
                />
              </div>
              <div>
                <h4 className="font-label-sm text-label-sm text-on-surface">
                  Ultimate Swiss Luxury
                </h4>
                <div className="flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-status-warning text-[14px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="text-[12px] font-semibold">5.0</span>
                  <span className="text-[12px] text-text-secondary">
                    (12 reviews)
                  </span>
                </div>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-[14px] text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  check_circle
                </span>
                Private helicopter transfers
              </li>
              <li className="flex items-center gap-2 text-[14px] text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  check_circle
                </span>
                Michelin-starred dining tour
              </li>
              <li className="flex items-center gap-2 text-[14px] text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  check_circle
                </span>
                24/7 personal concierge
              </li>
            </ul>
          </div>
          <button className="w-full py-3 border border-primary text-primary rounded-lg font-label-sm text-label-sm hover:bg-primary hover:text-white transition-all duration-200">
            View Proposal
          </button>
        </div>

        <div className="bg-white rounded-xl premium-shadow border border-outline-variant p-6 flex flex-col justify-between hover:border-primary transition-all duration-300">
          <div>
            <div className="flex justify-between items-start mb-6">
              <div className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full font-label-sm text-[10px] uppercase tracking-wider">
                Fastest Reply
              </div>
              <span className="font-headline-md text-headline-md text-on-surface">
                $4,200
              </span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-surface-muted overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  data-alt="A portrait of Julian, a young and tech-savvy travel planner who specializes in efficient and modern itineraries. He is pictured with a tablet, against a bright, contemporary urban background. The image is clean and vibrant, suggesting speed and modern travel solutions."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc3ZB_i86YvXjfK6UdcUR0YxjPc7_Xfz2gZwOT34M_qqTsrYBzbL3dcr83EfHRfHN1_WJsFnOBTfFTBjHfzCpQL7xkR1yEy8pq0HXuWIE7MYg_Goi95Etgmxhs1cbr4SrBHJneUUsXYxLy79N4tR2zNCIuOh7aD4c5oUyc6odVEtr9Ddx46fOxg5DhE5Ika45ccozD7VEjH433ZqM_XlWCSvU5tYKJTk7N8CA8kyskj0lEiKCYCSA0QmerXEwmZ1hufDyG_mK7edU"
                />
              </div>
              <div>
                <h4 className="font-label-sm text-label-sm text-on-surface">
                  Julian's Alpine Express
                </h4>
                <div className="flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-status-warning text-[14px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="text-[12px] font-semibold">4.7</span>
                  <span className="text-[12px] text-text-secondary">
                    (156 reviews)
                  </span>
                </div>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-[14px] text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  check_circle
                </span>
                Optimized 8-day route
              </li>
              <li className="flex items-center gap-2 text-[14px] text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  check_circle
                </span>
                Digital-first itinerary guide
              </li>
              <li className="flex items-center gap-2 text-[14px] text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  check_circle
                </span>
                All entry fees pre-booked
              </li>
            </ul>
          </div>
          <button className="w-full py-3 border border-primary text-primary rounded-lg font-label-sm text-label-sm hover:bg-primary hover:text-white transition-all duration-200">
            View Proposal
          </button>
        </div>
      </div>
    </div>
  );
}
