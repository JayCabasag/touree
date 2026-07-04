"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Dropdown } from "@/components/ui/dropdown";
import withPageRequiredAuth from "@/services/auth/with-page-required-auth";

type TabKey = "upcoming" | "past" | "cancelled";

const upcomingTrips = [
  {
    id: "amalfi-2024",
    status: "CONFIRMED",
    statusClass: "bg-primary text-on-primary",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAr0YRLaK3b0AbnW_tWzPdpbUQxsWdFJIBbGs97m9OEFro-TX3BEsYx4OPDuOumGRT2l2tO-Wf_EcHGgoOkxRUJEZnPEIzW5iY0m70XkvzJY0Oe6RTZI9CfbKLoAgo7MF4HmGTiKbQYGVM4MsoQ-IAFhhTbO1KbQmXJicIFkmQdLRzQVEhs9G4PhzFSJ6_lSm97kWXqLr_54kGHw_q4h-eTtg8UaAYHVUJ3oAwshm73aNx-uhge6GCP9ZABbTEkXP_okdZegurBY-0",
    title: "Amalfi Coast Expedition",
    dates: "SEP 12 — SEP 20, 2024",
    price: "$4,250",
    travelers: "2 Adults",
    flight: "AZ 611 (Confirmed)",
    accommodation: "Belmond Hotel Caruso",
    coordinator: "Elena Rossi",
  },
  {
    id: "kyoto-2024",
    status: "WAITING FOR CONFIRMATION",
    statusClass: "bg-status-warning text-text-main",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDKB7ZkkuDcgf_9XKJgpGNySvAgPc_h5-gK8iHBv4N4Tu7BUCDvQt7wGgKYSE0CtHdIdYbNCcIV9QyWFMAC19BDKLbivR1G29v3PLWeKCGn2U-W78Ua7TM1EIauU_eoGleOmHSDAWqEAdNa4t-OWt1fUDazrpflq89_tWBqeJ1xdccoVH1ktk2P-9wm695f03b1DIHM765MQTVRIlOGmNZjvhL4BaiQXUxc38D7f5x8fNiipddtxN7Sp4dlqnOV77d8pp51SojTiEQ",
    title: "Kyoto Zen Retreat",
    dates: "DEC 05 — DEC 12, 2024",
    description:
      "Experience the historical heart of Japan with private tea ceremonies, forest bathing, and Michelin-starred dining in the Gion district.",
  },
];

const pastTrips = [
  {
    id: "bali-2023",
    status: "COMPLETED",
    statusClass: "bg-secondary text-on-secondary",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAr0YRLaK3b0AbnW_tWzPdpbUQxsWdFJIBbGs97m9OEFro-TX3BEsYx4OPDuOumGRT2l2tO-Wf_EcHGgoOkxRUJEZnPEIzW5iY0m70XkvzJY0Oe6RTZI9CfbKLoAgo7MF4HmGTiKbQYGVM4MsoQ-IAFhhTbO1KbQmXJicIFkmQdLRzQVEhs9G4PhzFSJ6_lSm97kWXqLr_54kGHw_q4h-eTtg8UaAYHVUJ3oAwshm73aNx-uhge6GCP9ZABbTEkXP_okdZegurBY-0",
    title: "Bali Wellness Sanctuary",
    dates: "MAR 03 — MAR 10, 2023",
    price: "$3,180",
    travelers: "2 Adults",
    flight: "GA 880 (Completed)",
    accommodation: "Como Uma Ubud",
    coordinator: "Made Wirawan",
  },
  {
    id: "santorini-2022",
    status: "COMPLETED",
    statusClass: "bg-secondary text-on-secondary",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDKB7ZkkuDcgf_9XKJgpGNySvAgPc_h5-gK8iHBv4N4Tu7BUCDvQt7wGgKYSE0CtHdIdYbNCcIV9QyWFMAC19BDKLbivR1G29v3PLWeKCGn2U-W78Ua7TM1EIauU_eoGleOmHSDAWqEAdNa4t-OWt1fUDazrpflq89_tWBqeJ1xdccoVH1ktk2P-9wm695f03b1DIHM765MQTVRIlOGmNZjvhL4BaiQXUxc38D7f5x8fNiipddtxN7Sp4dlqnOV77d8pp51SojTiEQ",
    title: "Santorini Sunset Escape",
    dates: "JUN 18 — JUN 25, 2022",
    description:
      "A romantic island getaway through Oia's cliffside villages, with private catamaran sailing and volcanic wine tastings.",
  },
];

const cancelledTrips = [
  {
    id: "paris-2024",
    status: "CANCELLED",
    statusClass: "bg-error text-on-error",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAr0YRLaK3b0AbnW_tWzPdpbUQxsWdFJIBbGs97m9OEFro-TX3BEsYx4OPDuOumGRT2l2tO-Wf_EcHGgoOkxRUJEZnPEIzW5iY0m70XkvzJY0Oe6RTZI9CfbKLoAgo7MF4HmGTiKbQYGVM4MsoQ-IAFhhTbO1KbQmXJicIFkmQdLRzQVEhs9G4PhzFSJ6_lSm97kWXqLr_54kGHw_q4h-eTtg8UaAYHVUJ3oAwshm73aNx-uhge6GCP9ZABbTEkXP_okdZegurBY-0",
    title: "Parisian Autumn Escape",
    dates: "OCT 02 — OCT 08, 2024",
    price: "$2,940",
    refundStatus: "Refunded in full",
    travelers: "1 Adult",
    coordinator: "Sophie Laurent",
  },
];

const tabConfig: { key: TabKey; label: string }[] = [
  { key: "upcoming", label: `UPCOMING TRIPS (${upcomingTrips.length})` },
  { key: "past", label: "PAST ADVENTURES" },
  { key: "cancelled", label: "CANCELLED" },
];

function Bookings() {
  const [activeTab, setActiveTab] = useState<TabKey>("upcoming");
  const router = useRouter();

  return (
    <Container>
      <div className="mb-10 px-20">
        <h1 className="font-headline-lg text-headline-lg text-text-main mb-2">
          Bookings
        </h1>
        <p className="text-text-secondary font-body-md">
          Manage your upcoming adventures and relive your past journeys.
        </p>
      </div>

      <div className="px-20 grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <div className="lg:col-span-12 flex flex-wrap items-center justify-between gap-4 border-b border-outline-variant pb-4">
          <div className="flex gap-8">
            {tabConfig.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative font-label-sm text-label-sm py-2 transition-all ${
                  activeTab === tab.key
                    ? "text-primary"
                    : "text-text-secondary hover:text-primary"
                }`}
              >
                {tab.label}
                {activeTab === tab.key && (
                  <div className="active-tab-indicator"></div>
                )}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-label-sm text-text-secondary">SORT BY:</span>
            <select className="bg-transparent border-none text-label-sm font-semibold text-primary focus:ring-0 cursor-pointer">
              <option>Departure Date</option>
              <option>Recently Booked</option>
              <option>Price</option>
            </select>
          </div>
        </div>

        <div className="lg:col-span-12 space-y-6 mt-4">
          {activeTab === "upcoming" &&
            upcomingTrips.map((trip) => (
              <div
                key={trip.id}
                className="bg-surface-container-lowest rounded-xl premium-shadow overflow-hidden group border border-outline-variant/30 transition-all hover:border-primary/20"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative h-64 md:h-auto overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      src={trip.image}
                      alt={trip.title}
                    />
                    <div
                      className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold tracking-wider ${trip.statusClass}`}
                    >
                      {trip.status}
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h2 className="font-headline-md text-headline-md text-text-main">
                            {trip.title}
                          </h2>
                          <div className="flex items-center gap-2 text-text-secondary mt-1">
                            <span className="material-symbols-outlined text-sm">
                              calendar_today
                            </span>
                            <span className="font-label-sm text-label-sm">
                              {trip.dates}
                            </span>
                          </div>
                        </div>
                        {trip.price && (
                          <div className="text-right">
                            <div className="text-primary font-bold text-xl">
                              {trip.price}
                            </div>
                            <div className="text-text-secondary text-xs uppercase tracking-tighter">
                              Total Paid
                            </div>
                          </div>
                        )}
                      </div>

                      {trip.description ? (
                        <p className="text-text-secondary text-sm line-clamp-2 mb-6">
                          {trip.description}
                        </p>
                      ) : (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-outline-variant/20 mb-6">
                          <div className="flex flex-col gap-1">
                            <span className="text-xs text-text-secondary uppercase">
                              Travelers
                            </span>
                            <span className="font-semibold text-sm">
                              {trip.travelers}
                            </span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-xs text-text-secondary uppercase">
                              Flight
                            </span>
                            <span className="font-semibold text-sm">
                              {trip.flight}
                            </span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-xs text-text-secondary uppercase">
                              Accommodation
                            </span>
                            <span className="font-semibold text-sm">
                              {trip.accommodation}
                            </span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-xs text-text-secondary uppercase">
                              Coordinator
                            </span>
                            <span className="font-semibold text-sm text-secondary">
                              {trip.coordinator}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-4 items-center justify-between">
                      <div className="flex gap-3">
                        <button
                          onClick={() => router.push("/bookings/1")}
                          className="bg-primary text-on-primary px-6 py-3 rounded-lg font-bold text-sm transition-transform active:scale-95 flex items-center gap-2"
                        >
                          <span className="material-symbols-outlined text-lg">
                            {trip.description ? "info" : "description"}
                          </span>
                          View Itinerary
                        </button>
                        <Dropdown
                          variant="outline"
                          icon={
                            <span className="material-symbols-outlined">
                              chat_bubble_outline
                            </span>
                          }
                          options={[
                            {
                              label: "Messenger",
                              href: "#",
                              icon: (
                                <span className="material-symbols-outlined">
                                  chat
                                </span>
                              ),
                            },
                            {
                              label: "Telegram",
                              href: "#",
                              icon: (
                                <span className="material-symbols-outlined">
                                  send
                                </span>
                              ),
                            },
                            {
                              label: "Other Apps",
                              href: "#",
                              icon: (
                                <span className="material-symbols-outlined">
                                  more_horiz
                                </span>
                              ),
                            },
                          ]}
                        />
                      </div>
                      <button className="text-text-secondary hover:text-error text-sm font-semibold flex items-center gap-1 transition-colors">
                        Manage Booking
                        <span className="material-symbols-outlined text-sm">
                          arrow_forward_ios
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {activeTab === "past" &&
            pastTrips.map((trip) => (
              <div
                key={trip.id}
                className="bg-surface-container-lowest rounded-xl premium-shadow overflow-hidden group border border-outline-variant/30 transition-all hover:border-primary/20"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative h-64 md:h-auto overflow-hidden">
                    <img
                      className="w-full h-full object-cover grayscale-15 transition-transform duration-700 group-hover:scale-105"
                      src={trip.image}
                      alt={trip.title}
                    />
                    <div
                      className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold tracking-wider ${trip.statusClass}`}
                    >
                      {trip.status}
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h2 className="font-headline-md text-headline-md text-text-main">
                            {trip.title}
                          </h2>
                          <div className="flex items-center gap-2 text-text-secondary mt-1">
                            <span className="material-symbols-outlined text-sm">
                              calendar_today
                            </span>
                            <span className="font-label-sm text-label-sm">
                              {trip.dates}
                            </span>
                          </div>
                        </div>
                        {trip.price && (
                          <div className="text-right">
                            <div className="text-text-main font-bold text-xl">
                              {trip.price}
                            </div>
                            <div className="text-text-secondary text-xs uppercase tracking-tighter">
                              Total Paid
                            </div>
                          </div>
                        )}
                      </div>

                      {trip.description ? (
                        <p className="text-text-secondary text-sm line-clamp-2 mb-6">
                          {trip.description}
                        </p>
                      ) : (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-outline-variant/20 mb-6">
                          <div className="flex flex-col gap-1">
                            <span className="text-xs text-text-secondary uppercase">
                              Travelers
                            </span>
                            <span className="font-semibold text-sm">
                              {trip.travelers}
                            </span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-xs text-text-secondary uppercase">
                              Flight
                            </span>
                            <span className="font-semibold text-sm">
                              {trip.flight}
                            </span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-xs text-text-secondary uppercase">
                              Accommodation
                            </span>
                            <span className="font-semibold text-sm">
                              {trip.accommodation}
                            </span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-xs text-text-secondary uppercase">
                              Coordinator
                            </span>
                            <span className="font-semibold text-sm text-secondary">
                              {trip.coordinator}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-4 items-center justify-between">
                      <div className="flex gap-3">
                        <button
                          onClick={() => router.push("/bookings/1")}
                          className="bg-primary text-on-primary px-6 py-3 rounded-lg font-bold text-sm transition-transform active:scale-95 flex items-center gap-2"
                        >
                          <span className="material-symbols-outlined text-lg">
                            description
                          </span>
                          View Itinerary
                        </button>
                        <button className="border border-outline text-text-main px-6 py-3 rounded-lg font-bold text-sm hover:bg-surface-container-low transition-colors flex items-center gap-2">
                          <span className="material-symbols-outlined text-lg">
                            replay
                          </span>
                          Book Again
                        </button>
                      </div>
                      <button className="text-text-secondary hover:text-error text-sm font-semibold flex items-center gap-1 transition-colors">
                        Leave a Review
                        <span className="material-symbols-outlined text-sm">
                          arrow_forward_ios
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {activeTab === "cancelled" &&
            cancelledTrips.map((trip) => (
              <div
                key={trip.id}
                className="bg-surface-container-lowest rounded-xl premium-shadow overflow-hidden group border border-outline-variant/30 transition-all hover:border-primary/20"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative h-64 md:h-auto overflow-hidden">
                    <img
                      className="w-full h-full object-cover grayscale opacity-70 transition-transform duration-700 group-hover:scale-105"
                      src={trip.image}
                      alt={trip.title}
                    />
                    <div
                      className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold tracking-wider ${trip.statusClass}`}
                    >
                      {trip.status}
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h2 className="font-headline-md text-headline-md text-text-main">
                            {trip.title}
                          </h2>
                          <div className="flex items-center gap-2 text-text-secondary mt-1">
                            <span className="material-symbols-outlined text-sm">
                              calendar_today
                            </span>
                            <span className="font-label-sm text-label-sm">
                              {trip.dates}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-text-main font-bold text-xl line-through opacity-60">
                            {trip.price}
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-6 border-y border-outline-variant/20 mb-6">
                        <div className="flex flex-col gap-1">
                          <span className="text-xs text-text-secondary uppercase">
                            Guests
                          </span>
                          <span className="font-semibold text-sm">
                            {trip.travelers}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-xs text-text-secondary uppercase">
                            Coordinator
                          </span>
                          <span className="font-semibold text-sm text-secondary">
                            {trip.coordinator}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 items-center justify-between">
                      <div className="flex gap-3">
                        <button className="bg-primary text-on-primary px-6 py-3 rounded-lg font-bold text-sm transition-transform active:scale-95 flex items-center gap-2">
                          <span className="material-symbols-outlined text-lg">
                            replay
                          </span>
                          Rebook Trip
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Container>
  );
}

export default withPageRequiredAuth(Bookings);
