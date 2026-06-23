"use client";

import { useState } from "react";
import {
  DeclineOfferModal,
  DeclineOfferDetails,
} from "@/components/decline-offer-modal";
import { Offer } from "@/lib/types";
import { AcceptOfferModal } from "./accept-offer-modal";

interface OfferActionBarProps {
  offer: Offer;
  onDecline: (details: DeclineOfferDetails) => void;
  onAccept: (offer: Offer) => void;
}

export function OfferActionBar({
  offer,
  onDecline,
  onAccept,
}: OfferActionBarProps) {
  const [acceptModalOpen, setAcceptModalOpen] = useState(false);
  const [declineModalOpen, setDeclineModalOpen] = useState(false);

  function handleConfirmAccept(offer: Offer) {
    onAccept(offer);
    setAcceptModalOpen(false);
  }

  function handleConfirmDecline(details: DeclineOfferDetails) {
    onDecline(details);
    setDeclineModalOpen(false);
  }

  return (
    <>
      <div className="fixed bottom-0 left-0 w-full bg-surface-container-lowest shadow-[0_-10px_30px_rgba(0,0,0,0.05)] py-6 px-margin-mobile md:px-margin-desktop z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="hidden md:block">
            <p className="text-on-surface-variant font-body-md">
              Confirm your retreat today and receive a complimentary boat
              transfer.
            </p>
          </div>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => setDeclineModalOpen(true)}
              className="flex-1 sm:flex-initial px-8 py-4 border border-outline text-outline hover:bg-surface-container-low rounded-lg font-bold transition-all active:scale-95"
            >
              Decline Offer
            </button>
            <button
              onClick={() => setAcceptModalOpen(true)}
              className="flex-1 sm:flex-initial px-12 py-4 bg-primary text-white hover:bg-primary-container rounded-lg font-bold shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              Accept Offer
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      <AcceptOfferModal
        offer={offer}
        open={acceptModalOpen}
        onOpenChange={setAcceptModalOpen}
        onConfirm={handleConfirmAccept}
      />

      <DeclineOfferModal
        offer={offer}
        open={declineModalOpen}
        onOpenChange={setDeclineModalOpen}
        onConfirm={handleConfirmDecline}
      />
    </>
  );
}
