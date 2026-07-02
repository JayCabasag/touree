"use client";

import { OfferActionBar } from "@/components/offer-action-bar";
import { OfferDetails } from "@/components/offer-details";
import { Container } from "@/components/ui/container";
import { DeclineOfferDetails } from "@/components/decline-offer-modal";
import { Offer } from "@/lib/types";

const testOffer: Offer = {
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
};

export default function OfferDetailsPage() {
  function handleDecline(details: DeclineOfferDetails) {
    // Hook up your actual decline mutation/API call here.
    console.log(
      "Declined offer:",
      details.offer.id,
      "reason:",
      details.reason,
      "feedback:",
      details.feedback,
    );
  }

  function handleAccept(offer: Offer) {
    // Hook up your actual accept mutation/API call here.
    console.log("Accepted offer:", offer.id);
  }

  return (
    <Container>
      <OfferDetails />
      <OfferActionBar
        offer={testOffer}
        onDecline={handleDecline}
        onAccept={handleAccept}
      />
    </Container>
  );
}
