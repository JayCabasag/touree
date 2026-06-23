"use client";

import { Offer, QuoteRequest } from "@/lib/types";
import { OffersSection } from "./offer-section";
import { useRouter } from "next/navigation";
import { CancelQuoteModal } from "./cancel-quote-modal";
import { useState } from "react";
import { QuoteSummary } from "./quote-summary";

const sampleOffers: Offer[] = [
  {
    id: "offer-1",
    coordinator: {
      id: "elena-rossi",
      name: "Elena Rossi",
      agencyName: "Amalfi Elite Travels",
      rating: 4.9,
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCqBg3VELEPK8Z2yUg4yYH22T1gPmT0_N12a4qbxJEMIZM6KRpPWbhOcRFd8qTAUHh6_ZnwsG4NOcbKDDBNELjoYoYtRnUZ-QwR2_7arTbshu5z6aAsP77OZd3oFA5IuHVNabfwfxsY3NBAgw_JvPPuQyuXY2FsvgdjjQ0qVD5JSAgQgDZyARtxabcPl0MZHNCpBVhAEFWrbqjpizcvpppGk6GkI0dAlKjc-vmwtR7QTgSEEpHU27FK57xT6nsyBeIFy9pAuj0sXHs",
    },
    packageTitle: "The Positano Pearl Experience",
    tags: ["5-Star Villa", "Capri Tour Included", "2 Specialty Dinners"],
    totalPrice: 6450,
  },
  {
    id: "offer-2",
    coordinator: {
      id: "marco-valli",
      name: "Marco Valli",
      agencyName: "Valli Bespoke Journeys",
      rating: 5.0,
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAHOUcVLe8OHar8NHEFzeGWyualek50HNIwqOiUpqq0aBKjcKIkl0GTDp0pvB8Q3XQPp-5W0IXe3ytdKTfTdJeT-gAlkcpPF_rfH2s9bFUJp2Md3xNgimo7_gZIR8oRPJydqA0SbURGw5jOrhMINnF1Q7Hj6Cz6ARHDdhTsS1pI1B32-yxYqMhpUXyLfeKh9G37gdZOg6cLJ1OJjOFeIXm-Y9L1a42GYiDth57TfX4Zda_La5U8X1fBPxYMdMw9XZZQjCCLS_4kKvY",
    },
    packageTitle: "Mediterranean Heritage Sojourn",
    tags: ["Luxury Boutique Hotel", "Private Chef Night", "Wine Tasting"],
    totalPrice: 5900,
  },
  {
    id: "offer-3",
    coordinator: {
      id: "sophia-conti",
      name: "Sophia Conti",
      agencyName: "Conti Luxury Portals",
      rating: 4.8,
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBphqVFg4qDjzXRzy6CTodsvOyEZke_kv4XIM78EJOGWABeyakak-jazyj5AU4nIL7iTl-dJ5qCMQmhhW3oaO7R2PMbvEkexc58B38V2vWMkPsAXp6AGsmu7KU3M8TVU228II4EmTTaNW_EbQ0BDsgLWXKPwyLah1EjoTS-GhfMinnAwMknumem4cyPYgGbqVfo6v1A_diMTUf-jjoVxZhhQ3Iueg5PdWkTyMHH5XriWeITSqY7K5HRJYxHzQkPJk6T0xTTjRFaWLw",
    },
    packageTitle: "The Amalfi Masterpiece",
    tags: ["Villa with Private Pool", "Anniversary Special", "Heli-Transfer"],
    totalPrice: 7200,
    highlightLabel: "Top Rated Value",
  },
];

interface QuoteDetailsProps {
  request: QuoteRequest;
}

export function QuoteDetails({ request }: QuoteDetailsProps) {
  const router = useRouter();

  const [pendingCancelRequest, setPendingCancelRequest] =
    useState<QuoteRequest | null>(null);

  function handleCancelClick(request: QuoteRequest) {
    setPendingCancelRequest(request);
  }

  function handleConfirmCancel() {
    if (!pendingCancelRequest) return;
    // Hook up your actual cancel mutation/API call here.
    // e.g. cancelQuoteRequest(pendingCancelRequest.id);
    setPendingCancelRequest(null);
  }

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <nav className="flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">
          <a className="hover:text-primary" href="/quote-requests">
            My Quote Requests
          </a>
          <span className="material-symbols-outlined text-[14px]">
            chevron_right
          </span>
          <span className="text-on-surface">{request.packageTitle}</span>
        </nav>
        <div className="flex items-center gap-3">
          <button className="px-6 py-2.5 rounded-lg border border-outline text-on-surface font-semibold hover:bg-surface-container transition-all text-body-md">
            Edit Request
          </button>
          <button
            onClick={() => handleCancelClick(request)}
            className="px-6 py-2.5 rounded-lg border border-error text-error font-semibold hover:bg-error-container transition-all text-body-md"
          >
            Cancel Request
          </button>
        </div>
      </div>

      <QuoteSummary request={request} />

      <OffersSection
        offers={sampleOffers}
        onViewOffer={(offer) =>
          router.push(`/quote-requests/${request.id}/offers/${offer.id}`)
        }
        onViewComparativeMatrix={() => console.log("View comparative matrix")}
      />

      <CancelQuoteModal
        pendingRequest={pendingCancelRequest}
        onOpenChange={(open) => {
          if (!open) setPendingCancelRequest(null);
        }}
        onConfirm={handleConfirmCancel}
      />
    </>
  );
}
