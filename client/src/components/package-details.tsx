"use client";

import { BookingWidget } from "./booking-widget";

export function PackageDetails() {
  return (
    <>
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-100 md:h-150">
          <div className="md:col-span-2 md:row-span-2 relative rounded-xl overflow-hidden group cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              data-alt="A cinematic wide shot of a luxury overwater villa in the Maldives during a vibrant sunset. The sky is painted in deep oranges and reds, reflecting off the crystal clear turquoise lagoon. The modern architecture features natural wood and glass, epitomizing the premium Touree Horizon travel aesthetic. Soft lighting illuminates the wooden walkway leading to the villa, creating a serene and aspirational mood."
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDiJXLN2PO8aqnx-b4MnoK3RcQiT1C2GP4sPniRx4YHmlSAqIf6UFBTFfnRZfGwSCrF95btwj-anF6Gy5CT17aD3FuBipSg__0JIMP3sIbhfafShJvfey_kToQQon_rGlqJL_GHzXBzacSvKZW0ensu-we9XtreQl5H2gOqQfBAj0bEmDsjFv8cQKgDhn-9xAVG6tnRigx9-E7YnACvgESxdfm2C000jmCWu-h1Snh9TJyMNd10kWaR-5f_CRWSc-1g0vg_m7NY-v0')",
              }}
            ></div>
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-8">
              <h1 className="text-white font-headline-lg text-headline-lg">
                Maldives: Serenity &amp; Azure Horizons
              </h1>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden group cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              data-alt="A close-up high-fidelity shot of a tropical infinity pool merging with the ocean horizon. Sunlight sparkles on the surface of the water, which is a vivid Mediterranean blue. The surrounding deck is made of smooth, light-toned stone, following the light-mode corporate design language of Touree Horizon. A single luxury sun lounger with a plush white towel is positioned elegantly at the corner, emphasizing relaxation and exclusivity."
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC1eSZ9oKoqv02m9bCjLAEzzHRdYAO-yMOA-peJ7rD8pBbqR5q8WPDAoLzX63YIfBDBUNdaX5X9wY0UJMN9dgsHXu3dwvXKFnbYzzeehsveaErnMnfH5YuHV0QyVNBWVR_wmBxO0D4hszG421EA8LllAJs-K38DCBOwknqSXuN1qNrd6LITaCPDE6ac02o1NJbVEmZpRR4rGBhWZhqHuUjaXoi3OtO6_Dg4MjjJ88Af-Gjr4kYR3isUTyHxnpnUGbEDq3RnZvhhLrE')",
              }}
            ></div>
          </div>
          <div className="relative rounded-xl overflow-hidden group cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              data-alt="A gourmet dining experience on a private white sand beach under a canopy of palm trees. The table is meticulously set with fine white linen and crystal glassware, reflecting the sunset's warm golden hues. Exotic floral arrangements in shades of sunset red add a pop of brand-consistent color. The background features the gentle surf of the Indian Ocean, creating an atmosphere of romantic luxury and professional hospitality."
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDljhD_wpGxBXqiithwCL4gS5j-AOz7YJPQ05lf5W3hSOwO5G2gtix2c3haM_544ZcqfN3-KbXo2v8Hss2_xMBb4gkuxBublUBoFlvzaAXj2te4UixpC65I7_BbUJzNSmmI7LA1k-rChA6f-rxxNoLUY6LbCJ_c0Ke8Qr37lexBQ65EDkjqK-ymbQgKsmwiN6p7RDLWhfvefc_KZnQ-AqQGgiDXOTeDutq-UwHTNoGNe3ASoUMwFrogvsXG9Ciz1HhbrF15lqFQY0o')",
              }}
            ></div>
          </div>
          <div className="md:col-span-2 relative rounded-xl overflow-hidden group cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              data-alt="A bright, airy interior of a luxury yacht suite with floor-to-ceiling windows showing the expansive blue sea. The interior design is minimalist and modern, featuring soft cream upholstery and polished wood accents. The lighting is natural and high-key, aligning with the clean, professional visual identity of the Touree Horizon marketplace. A sense of motion and premium travel adventure is conveyed through the distant wake visible in the water."
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBkdfic5QJzySlfuR2JR-r3fMIqMzpb1lZCQ3yQyan2hDd3E3PdFr5BGloFGIrJDsPmh2Q-G1t__w8GekRaNYVr-L9Ic4ANSB0cTyNiwkPg4hSvLeVRNUZcmNxhe5P49geksmTftxbDEj9InoifN7itVS3eI8jr9dhk1I65vGn4Jqe0qLFvMXt8paKrhM7AeCtO24tcfGnRqWws92-13b5LfsMiy11zl0lm9UXEulJHhWhd0Ex5qOuSCDfe-IZSBXaf02zbkahPus')",
              }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white/90 px-6 py-3 rounded-full font-bold text-primary flex items-center gap-2 shadow-lg">
                <span className="material-symbols-outlined">grid_view</span>
                View All Photos
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col xl:flex-row gap-12 relative">
        <div className="xl:w-2/3 space-y-12">
          <section>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="px-4 py-1.5 bg-surface-container-high text-primary font-label-sm text-label-sm rounded-full flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">
                  verified
                </span>{" "}
                Recommended
              </span>
              <span className="px-4 py-1.5 bg-surface-container-high text-text-secondary font-label-sm text-label-sm rounded-full flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">
                  calendar_today
                </span>{" "}
                7 Days / 6 Nights
              </span>
              <span className="px-4 py-1.5 bg-surface-container-high text-text-secondary font-label-sm text-label-sm rounded-full flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">
                  group
                </span>{" "}
                Max 12 Travelers
              </span>
            </div>
            <p className="font-body-lg text-body-lg text-text-secondary leading-relaxed">
              Embark on an unforgettable journey through the most secluded
              atolls of the Maldives. This curated experience by Touree offers a
              perfect blend of high-octane water sports and deep therapeutic
              relaxation. From private yacht transfers to underwater dining,
              every detail is engineered for those who demand the pinnacle of
              travel excellence.
            </p>
          </section>

          <section className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/30">
            <h2 className="font-headline-md text-headline-md mb-8 text-primary">
              What's Included
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">hotel</span>
                </div>
                <div>
                  <h4 className="font-bold">5-Star Accommodation</h4>
                  <p className="text-text-secondary text-sm">
                    Luxury overwater villas with private pools and direct ocean
                    access.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">restaurant</span>
                </div>
                <div>
                  <h4 className="font-bold">Full Board Dining</h4>
                  <p className="text-text-secondary text-sm">
                    Daily breakfast, lunch, and dinner at award-winning
                    restaurants.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">
                    flight_takeoff
                  </span>
                </div>
                <div>
                  <h4 className="font-bold">Domestic Transfers</h4>
                  <p className="text-text-secondary text-sm">
                    Round-trip seaplane or speedboat transfers from Malé
                    Airport.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">
                    scuba_diving
                  </span>
                </div>
                <div>
                  <h4 className="font-bold">Water Activities</h4>
                  <p className="text-text-secondary text-sm">
                    Complimentary snorkeling gear, kayaking, and guided reef
                    tours.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md mb-8">
              Detailed Itinerary
            </h2>
            <div className="space-y-0 relative before:absolute before:left-4 md:before:left-6 before:top-0 before:bottom-0 before:w-px before:bg-outline-variant">
              <div className="relative pl-12 md:pl-20 pb-12 group">
                <div className="absolute left-0 top-0 w-8 h-8 md:w-12 md:h-12 bg-white border-4 border-primary rounded-full flex items-center justify-center z-10 transition-transform group-hover:scale-110">
                  <span className="font-bold text-xs md:text-sm">01</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant/20 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg mb-2">
                    Arrival &amp; Sunset Cruise
                  </h3>
                  <p className="text-text-secondary">
                    Arrive at Velana International Airport where our concierge
                    greets you. Transfer via private seaplane to your resort. In
                    the evening, enjoy a traditional Dhoni sunset cruise with
                    champagne.
                  </p>
                  <div className="mt-4 rounded-lg overflow-hidden h-32 w-full">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      data-alt="A luxury traditional wooden boat called a Dhoni sailing on calm, golden-hour waters in the Maldives. The sky is a blend of soft pastels and the brand's sunset red. Two passengers are seen from behind, enjoying cocktails while looking towards the distant horizon. The image captures the beginning of a high-end, professionally curated journey."
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB0lq9HO6nNEeJeuTK-ZD1V-IDXB6RMQVJa9swmM7oSVEaA2G0KD1Pd9KmNAlG-JWHSj7fsOqSADgzx2c_nqJImhGf8an9XINo0-NHhvxkGgojGYH885-4pYqj7hjUFv8RmMqM33KqY0P1Q7EMbkgWOZij5OZMeM54Y0xJ4u3cBj-ujIyrqezZZl26nAsWe04Um4RC9oUJyVr6Xh5r4MK6oAw037_7aQA3O-IEzyHCs6YsgWRYJH-HD8l43vL92vbzS8RVCwYzkIgE')",
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="relative pl-12 md:pl-20 pb-12 group">
                <div className="absolute left-0 top-0 w-8 h-8 md:w-12 md:h-12 bg-white border-4 border-outline-variant rounded-full flex items-center justify-center z-10 transition-transform group-hover:scale-110 group-hover:border-primary">
                  <span className="font-bold text-xs md:text-sm text-text-secondary group-hover:text-primary">
                    02
                  </span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant/20 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg mb-2">
                    Marine Discovery &amp; Snorkeling
                  </h3>
                  <p className="text-text-secondary">
                    Explore the vibrant house reef with a resident marine
                    biologist. Discover turtles, manta rays, and exotic coral
                    formations in the Baa Atoll UNESCO Biosphere Reserve.
                  </p>
                </div>
              </div>

              <div className="relative pl-12 md:pl-20 pb-12 group">
                <div className="absolute left-0 top-0 w-8 h-8 md:w-12 md:h-12 bg-white border-4 border-outline-variant rounded-full flex items-center justify-center z-10">
                  <span className="font-bold text-xs md:text-sm text-text-secondary">
                    ...
                  </span>
                </div>
                <button className="text-primary font-bold hover:underline">
                  View All 7 Days
                </button>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-headline-md text-headline-md">
                Traveler Reviews
              </h2>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl">4.9</span>
                <div className="flex text-status-warning">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                </div>
                <span className="text-text-secondary text-sm">
                  (128 reviews)
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-xl border border-outline-variant/20 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-primary">
                    JD
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">James Donovan</h4>
                    <p className="text-text-secondary text-xs">February 2024</p>
                  </div>
                </div>
                <p className="text-sm text-text-secondary italic">
                  "Absolutely flawless execution. Touree handled every detail
                  with such professionalism. The villa was even better than the
                  photos!"
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl border border-outline-variant/20 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-primary">
                    SC
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Sarah Chen</h4>
                    <p className="text-text-secondary text-xs">January 2024</p>
                  </div>
                </div>
                <p className="text-sm text-text-secondary italic">
                  "The marine biologist tour was the highlight. A premium
                  experience that truly felt worth the investment. Highly
                  recommend."
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="xl:w-1/3">
          <aside className="sticky top-28 space-y-6">
            <BookingWidget />
            <div className="bg-surface-container-high rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined">
                  question_answer
                </span>
              </div>
              <div>
                <h4 className="font-bold text-sm">Need Help?</h4>
                <p className="text-xs text-text-secondary mb-3 leading-relaxed">
                  Our luxury travel consultants are available to assist you with
                  your direct booking.
                </p>
                <a
                  className="text-primary font-bold text-sm hover:underline"
                  href="#"
                >
                  Contact Expert
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
