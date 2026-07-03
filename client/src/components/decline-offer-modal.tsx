"use client";

import { useState } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { RadioGroup } from "@base-ui/react/radio-group";
import { Radio } from "@base-ui/react/radio";
import { Offer } from "@/lib/types";

export type DeclineReason = "budget" | "dates" | "itinerary" | "other";

const DECLINE_REASONS: { value: DeclineReason; label: string }[] = [
  { value: "budget", label: "Budget is too high" },
  { value: "dates", label: "Dates don't work" },
  { value: "itinerary", label: "Itinerary doesn't match my interests" },
  { value: "other", label: "Other" },
];

export interface DeclineOfferDetails {
  offer: Offer;
  reason: DeclineReason | null;
  feedback: string;
}

interface DeclineOfferModalProps {
  offer: Offer;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: (details: DeclineOfferDetails) => void;
}

export function DeclineOfferModal({
  offer,
  open,
  onOpenChange,
  onConfirm,
}: DeclineOfferModalProps) {
  const [reason, setReason] = useState<DeclineReason | null>(null);
  const [feedback, setFeedback] = useState("");

  function resetForm() {
    setReason(null);
    setFeedback("");
  }

  function handleConfirm() {
    onConfirm({ offer, reason, feedback });
  }

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(next) => {
        onOpenChange(next);
        if (!next) resetForm();
      }}
    >
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-100 bg-on-surface/40 backdrop-blur-sm transition-opacity duration-300 data-starting-style:opacity-0 data-ending-style:opacity-0" />
        <Dialog.Popup className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <div className="relative bg-surface-container-lowest w-full max-w-lg rounded-xl shadow-lg p-8 flex flex-col gap-6 transition-all duration-300 data-starting-style:opacity-0 data-starting-style:scale-95 data-ending-style:opacity-0 data-ending-style:scale-95">
            <div className="flex justify-between items-start">
              <div>
                <Dialog.Title className="text-headline-md font-headline-md text-on-surface">
                  Decline Offer
                </Dialog.Title>
                <Dialog.Description className="text-on-surface-variant text-body-md mt-2">
                  Could you let us know why you&apos;re declining? This helps
                  our coordinators improve their future offers.
                </Dialog.Description>
              </div>
              <Dialog.Close
                className="material-symbols-outlined text-outline hover:text-on-surface transition-colors"
                aria-label="Close"
              >
                close
              </Dialog.Close>
            </div>

            <div className="space-y-4">
              <label className="text-label-sm font-label-sm text-outline uppercase">
                Reason for declining
              </label>
              <RadioGroup
                value={reason}
                onValueChange={(value) => setReason(value as DeclineReason)}
                className="grid grid-cols-1 gap-3"
              >
                {DECLINE_REASONS.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 p-3 rounded-lg border border-outline-variant/30 hover:bg-surface-container-low cursor-pointer transition-colors"
                  >
                    <Radio.Root
                      value={option.value}
                      className="flex items-center justify-center w-4 h-4 rounded-full border border-outline-variant data-checked:border-primary data-checked:border-[5px] transition-all"
                    >
                      <Radio.Indicator />
                    </Radio.Root>
                    <span className="text-body-md text-on-surface">
                      {option.label}
                    </span>
                  </label>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="decline-feedback"
                className="text-label-sm font-label-sm text-outline uppercase"
              >
                Additional Feedback (Optional)
              </label>
              <textarea
                id="decline-feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full p-4 rounded-lg border border-outline-variant/50 bg-surface-container-low focus:ring-1 focus:ring-primary focus:border-primary text-body-md min-h-25"
                placeholder="Tell us more about how we can help..."
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleConfirm}
                className="flex-1 px-8 py-4 bg-primary text-white hover:bg-primary-container rounded-lg font-bold transition-all active:scale-95"
              >
                Decline Offer
              </button>
              <Dialog.Close className="flex-1 px-8 py-4 border border-outline text-outline hover:bg-surface-container-low rounded-lg font-bold transition-all active:scale-95">
                Keep Offer
              </Dialog.Close>
            </div>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
