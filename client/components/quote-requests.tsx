"use client";

import { QuoteRequestCard } from "@/components/quote-request-card";
import { QuoteRequest } from "@/lib/types";

export const quoteRequests: QuoteRequest[] = [
  {
    id: "1",
    slug: "amalfi-coast-luxury-escape",
    status: "offers_received",
    packageTitle: "Amalfi Coast Luxury Escape",
    destinationLabel: "Amalfi, Italy",
    dateRangeLabel: "Oct 12 – Oct 20, 2024",
    travelerCount: 2,
    notes:
      "We're celebrating our 10th anniversary. We'd love a private boat tour of the coast and dinner reservations at Michelin-starred restaurants with sea views.",
    offerCount: 3,
    priceRangeMin: 4500,
    priceRangeMax: 6000,
    coordinators: [
      {
        id: "c1",
        name: "Coordinator 1",
        avatarUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuB_pqNrj9Tcghas1csHXucYGIjyNJgl64IK6CBqJAJEXkd8qaYXe6c8Df5KmKS83MtnOt1s2oqHlwZnX_mSHwEg7TYfn0yTV8u_zQwTaFm99wmePZoUHR67QrFdJ9IdHcm4kmRDyHpTyj2wMjVfSObwqT53ooBPS3QMFKDuJXKuZUaKmb1HPthbvD62UkchLwtpC3ZKNr-ovjQGkRquyV6-W_11ekKgH5SpTecpZUzyOeTBVcvNV9Y_XiifPqbF9Nba-G9MNZ9HL0k",
      },
      {
        id: "c2",
        name: "Coordinator 2",
        avatarUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAhMLn4n6sM8xkZ1fMW5d4fzo7aAH2jLBcNXISQC4Gb6iQAWaT4jAgW8wmMfw6VHYV0IsX12Kr5h0meSsXwKN6Nc9-sbK7gD0beQmQx3djddTHQo0f7rNFSfgbN3IFuzr_2tWPsze3x-mmKxWvBrbaShBXzsxNnX-az7ZcP669_2wLCounMTqbcGZu18ZEAwtOjg03tOfaQkGJMHPGdZYrQo5vQRq42lfdhpzRcWSlb33TwoEnZB9KpM7KSru6DDhWFrZc0IH0F0pw",
      },
      {
        id: "c3",
        name: "Coordinator 3",
        avatarUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCRCk0FXaWIx2l0wCQU7mClQJrNUttGDQPJygnvWwP34gYC4LjEVA3VniZHNfJVkP1WxlyOwS7TGy7bTDc6YJKYERaw8L6bXlKDtWm_qZlk-FEHO_4PH1BZ3oOHWz8AmuKMDvvMP5gpD5treLTZhEVsll2wmyXlwIo9_nH3OBNQH64iz9tm00NtqQrRLf23MvIlp0LzHKud6GkVydUyPyGkOuJ2uQyNC_Bw2BIC0T179KN0psxVILoQL08K4y_ed1zour421bK4EJ0",
      },
    ],
  },
  {
    id: "2",
    slug: "tokyo-kyoto-cultural-tour",
    status: "awaiting_offers",
    packageTitle: "Tokyo & Kyoto Cultural Tour",
    destinationLabel: "Japan",
    dateRangeLabel: "Nov 05 - Nov 18, 2024",
    travelerCount: 4,
    priceRangeMin: 4500,
    priceRangeMax: 6000,
    notes:
      "Focus on authentic culinary experiences and traditional tea ceremonies. We'd prefer boutique ryokans for at least 3 nights in Kyoto.",
    budget: 12000,
    coordinatorsContactedCount: 5,
  },
  {
    id: "3",
    slug: "maldives-honeymoon",
    status: "booked",
    packageTitle: "Maldives Honeymoon",
    destinationLabel: "Maldives",
    dateRangeLabel: "Sept 14 – Sept 21, 2024",
    travelerCount: 2,
    totalPrice: 8750,
    bookedDateLabel: "Sept 2024",
    coordinator: {
      id: "sarah-j",
      name: "Sarah J.",
      avatarUrl: "",
    },
  },
];

export default function QuoteRequests() {
  return (
    <div className="flex flex-col gap-6">
      {quoteRequests.map((request) => (
        <QuoteRequestCard key={request.id} request={request} />
      ))}
    </div>
  );
}
