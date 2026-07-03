"use client";

import Link from "next/link";

const packages = [
  {
    id: 1,
    slug: "greek-island",
    name: "Greek Island Odyssey",
    location: "Santorini & Mykonos",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCAK1DRHMhgxgHcKEJixcgkzJr4-oACUp8cfcuYFLdAYwZ3oeIM7OZsdE70yLB1SKN8VrVSNUraKAVZRfZpZ2h4MFl2_tkPltJD1g4g2kHnz5adAry2lA6tb48i8wLFebx3emFxLd7N7cKAB-5iHshS9G6JPWXlmi2sHfLOA2mX7nkL83PzlPjt4vcu9pV9dTkC-mKenDAMDv_1VqvEsDZ-RMdVA5QcUaDZBdonwc5Fq8VqvUSeRQZBfV34pSR-IYpgskd1M_IuvEo",
    rating: 4.9,
    days: 7,
    price: 1499,
    badge: "BEST SELLER",
  },
  {
    id: 2,
    slug: "bali-tropical-escapse",
    name: "Bali Tropical Escape",
    location: "Ubud, Bali",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAhSFCMNSxk_eINQZx-TZd-qruqnB9ylsPXV_BBn3KyjcMX5hIth4mVceWrJeVIO-Npb_jH0VW7-JVHrkvhq3mieQvri2C3e8_8UUB6W6lcaRJnODIU22RXMdsCJRZXliwdJvrHk-ttHfXHipDRpH3-vABNVA9_UOYfYqchcs2P1JpIdltasUAbTAqTthVJaXcwaMmyfbeqyFo9MsdGpUCbyC-wCoUmSn3ebNrGwRv2Ck3t9189wwGi3-BxhfnGdztbDLnlfDlWLYk",
    rating: 4.8,
    days: 5,
    price: 899,
    badge: null,
  },
  {
    id: 3,
    slug: "swiss-alps-discovery",
    name: "Swiss Alps Discovery",
    location: "Zermatt, Switzerland",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBL8-AdjGelWojB3PwcMe1zuzbxAC4YSsyydoV0j1vmV5gmGsw3pFgrgKB34YClaHuVliLBgZroYf2GCCAFXIGLltAE0WPRPmjlomswwaTWm6WWC2gI2RWpio6Ur-4ARziJiYcE-Az3nEr-hnGnaWseQ3Cq1OKl9IYmC0NiyPUkYuK404iPjOTWNouOODgc6EoNewJQ8exJ75I0eaN0Fzff0pjWNAxDmW5toIZvZTus0sbJKUACNb81dGrs4nOiG-IysYF5FMwE0TE",
    rating: 4.9,
    days: 10,
    price: 2250,
    badge: "LIMITED OFFER",
  },
];

export function FeaturedPackages() {
  return (
    <section className="py-16 bg-surface-container-low">
      <div className="px-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Featured Packages
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            Our most-loved travel experiences, curated by experts for maximum
            discovery and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <Link
              href={`/packages/${pkg.slug}`}
              key={pkg.id}
              className="bg-surface rounded-4xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-surface-variant"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={pkg.image}
                  alt={pkg.name}
                />
                {pkg.badge && (
                  <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur px-3 py-1 rounded-full text-label-sm font-label-sm text-primary">
                    {pkg.badge}
                  </div>
                )}
                <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur text-white flex items-center justify-center hover:bg-white/40 transition-colors">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-headline-md text-xl mb-1">
                      {pkg.name}
                    </h3>
                    <div className="flex items-center gap-1 text-on-surface-variant text-sm">
                      <span className="material-symbols-outlined text-sm">
                        location_on
                      </span>
                      {pkg.location}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-status-warning/10 px-2 py-1 rounded-lg">
                    <span
                      className="material-symbols-outlined text-status-warning text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="font-bold text-on-surface text-sm">
                      {pkg.rating}
                    </span>
                  </div>
                </div>

                <hr className="border-outline-variant/30 my-4" />

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4 text-on-surface-variant text-sm">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-base">
                        schedule
                      </span>
                      {pkg.days} Days
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] uppercase font-bold text-on-surface-variant/70">
                      Starting From
                    </span>
                    <span className="text-primary font-bold text-xl">
                      ${pkg.price}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
