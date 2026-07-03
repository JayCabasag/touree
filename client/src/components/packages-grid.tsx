"use client";

import { useState } from "react";
import { Pagination } from "./pagination";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Container } from "./ui/container";

const packages = [
  {
    id: 1,
    slug: "mystic-morocco",
    title: "Mystic Morocco Explorer",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDEn_W3Dt9C0LclJPAllvv7rMQaLkBXkhnCk0BeacCk3Z3oISvn3HIvxqxwI_JKowXxtMnjsjCrKK0p8b-LGYmX0ZDi_j7fNKznsQQm3BIkRDmkabjrHWC3CJg_irSkrErGZV68PLMAco7DmVaTC3_9LuFOtoHqjcL6I_DpZ75KHdz-0Dg60Jvf_N2Az4PgU8WC0rM3ba6u6DgRBTqF-cRPuz_uBi_XvZbSBrP2PskEgNR4Utj2OYdum6j0X4LsF77l1xhoKF3WYIY",
    rating: 4.9,
    duration: "7 Days / 6 Nights",
    groupSize: "Group of 8",
    badge: "Trending",
    badgeColor: "tertiary-container",
    price: 1850,
    favorited: false,
  },
  {
    id: 2,
    slug: "nordic-fjord",
    title: "Nordic Fjord Odyssey",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCjbHIFO-pz-WmsvjyB-KBBGhPe4NWV7XT3UHAdT4WFZ1pGECFaqroVpBVFEE7Ya01onjDxNvm76Ujco1gY1fumbpc2JlItWT6IcqfFyQntHP9Iiyr68LUKa35tUW3mFdoCRH4ROWRfM6BQNkIzJzMU9EY9no5mRCu5UN8l_GiQiylRE769F-MBuw_GtF9L6VG3m4diWgmdKJnoPdk1nwWTSfENHIyzWlpwtwHiepk9qN7O4WFf33cDpHgBeJyfYeV4ycOGBSmO-_8",
    rating: 4.8,
    duration: "5 Days / 4 Nights",
    activity: "Active",
    price: 2400,
    favorited: false,
  },
  {
    id: 3,
    slug: "tuscan-wine",
    title: "Tuscan Wine & Wellness",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBYke0HhO_NI78yCK8we2ylnTfTb9Ly-FARySssBaUOQ4e2OBuQ5ArL6aEwozr6JeTQMygFi7OF90WV8l3qg0T_4Gv5zjhbtoy5fsCjU8jZXxJ_OV87HtVBY1Dhv6qKv7YTJVQjVBz7sIW4sswhLqDwJHu4o-aL_U-Dkh0F3_skOD052R9ZabiOH2AY3FHU5QB4Kv8bg4Xe-nRB4f1PVSiSK-dxw5qj2dnXUyMhuBSJCVi0DccFi89Uw-91qV2LYf5tCpo64rR0Jb4",
    rating: 5.0,
    duration: "10 Days / 9 Nights",
    activity: "Gourmet",
    price: 3150,
    favorited: true,
  },
  {
    id: 4,
    slug: "japanese-zen",
    title: "Japanese Zen Retreat",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDEn_W3Dt9C0LclJPAllvv7rMQaLkBXkhnCk0BeacCk3Z3oISvn3HIvxqxwI_JKowXxtMnjsjCrKK0p8b-LGYmX0ZDi_j7fNKznsQQm3BIkRDmkabjrHWC3CJg_irSkrErGZV68PLMAco7DmVaTC3_9LuFOtoHqjcL6I_DpZ75KHdz-0Dg60Jvf_N2Az4PgU8WC0rM3ba6u6DgRBTqF-cRPuz_uBi_XvZbSBrP2PskEgNR4Utj2OYdum6j0X4LsF77l1xhoKF3WYIY",
    rating: 4.7,
    duration: "8 Days / 7 Nights",
    activity: "Culture",
    price: 2850,
    favorited: false,
  },
  {
    id: 5,
    slug: "japanese-zen-retreat",
    title: "Japanese Zen Retreat",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDEn_W3Dt9C0LclJPAllvv7rMQaLkBXkhnCk0BeacCk3Z3oISvn3HIvxqxwI_JKowXxtMnjsjCrKK0p8b-LGYmX0ZDi_j7fNKznsQQm3BIkRDmkabjrHWC3CJg_irSkrErGZV68PLMAco7DmVaTC3_9LuFOtoHqjcL6I_DpZ75KHdz-0Dg60Jvf_N2Az4PgU8WC0rM3ba6u6DgRBTqF-cRPuz_uBi_XvZbSBrP2PskEgNR4Utj2OYdum6j0X4LsF77l1xhoKF3WYIY",
    rating: 4.7,
    duration: "8 Days / 7 Nights",
    activity: "Culture",
    price: 2850,
    favorited: false,
  },
  {
    id: 6,
    slug: "japanese-zen-retreat-2",
    title: "Japanese Zen Retreat",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDEn_W3Dt9C0LclJPAllvv7rMQaLkBXkhnCk0BeacCk3Z3oISvn3HIvxqxwI_JKowXxtMnjsjCrKK0p8b-LGYmX0ZDi_j7fNKznsQQm3BIkRDmkabjrHWC3CJg_irSkrErGZV68PLMAco7DmVaTC3_9LuFOtoHqjcL6I_DpZ75KHdz-0Dg60Jvf_N2Az4PgU8WC0rM3ba6u6DgRBTqF-cRPuz_uBi_XvZbSBrP2PskEgNR4Utj2OYdum6j0X4LsF77l1xhoKF3WYIY",
    rating: 4.7,
    duration: "8 Days / 7 Nights",
    activity: "Culture",
    price: 2850,
    favorited: false,
  },
];

export function PackagesGrid() {
  const router = useRouter();

  const [favorites, setFavorites] = useState<Record<number, boolean>>(
    packages.reduce((acc, pkg) => ({ ...acc, [pkg.id]: pkg.favorited }), {}),
  );

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Container className="-mt-12">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">
            Discover Packages
          </h2>
          <p className="text-on-surface-variant text-body-md">
            Handpicked experiences curated by our local travel experts.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {packages.map((pkg) => (
          <Link
            key={pkg.id}
            href={`/packages/${pkg.slug}`}
            className="group bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-surface-container block"
          >
            <div className="relative aspect-4/5 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={pkg.image}
                alt={pkg.title}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleFavorite(pkg.id);
                }}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/70 backdrop-blur text-primary hover:bg-primary hover:text-on-primary transition-all"
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontVariationSettings: favorites[pkg.id]
                      ? "'FILL' 1"
                      : "'FILL' 0",
                  }}
                >
                  favorite
                </span>
              </button>
              {pkg.badge && (
                <div className="absolute bottom-4 left-4">
                  <span
                    className={`bg-${pkg.badgeColor} text-on-tertiary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase`}
                  >
                    {pkg.badge}
                  </span>
                </div>
              )}
            </div>

            <div className="p-5 space-y-3">
              <div className="flex justify-between items-start">
                <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                  {pkg.title}
                </h3>
                <div className="flex items-center gap-1 bg-surface-container px-2 py-0.5 rounded-lg">
                  <span
                    className="material-symbols-outlined text-sm text-status-warning"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="text-xs font-bold">{pkg.rating}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-on-surface-variant text-sm">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    schedule
                  </span>
                  {pkg.duration}
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    {pkg.activity === "Active"
                      ? "kayaking"
                      : pkg.activity === "Gourmet"
                        ? "restaurant"
                        : "group"}
                  </span>
                  {pkg.activity || pkg.groupSize}
                </div>
              </div>

              <div className="pt-4 flex justify-between items-center border-t border-surface-container-highest">
                <div>
                  <p className="text-[10px] text-outline font-bold uppercase">
                    Starting Price
                  </p>
                  <p className="text-xl font-bold text-on-surface">
                    ${pkg.price}
                  </p>
                </div>
                <div className="bg-primary-container/10 text-primary group-hover:bg-primary group-hover:text-on-primary p-2 rounded-xl transition-all">
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Pagination />
    </Container>
  );
}
