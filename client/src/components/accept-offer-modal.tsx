"use client";

import { useState } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { Checkbox } from "@base-ui/react/checkbox";
import { Offer } from "@/lib/types";

interface AcceptOfferModalProps {
  offer: Offer;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: (offer: Offer) => void;
}

export function AcceptOfferModal({
  offer,
  open,
  onOpenChange,
  onConfirm,
}: AcceptOfferModalProps) {
  const [termsAccepted, setTermsAccepted] = useState(false);

  function handleConfirm() {
    onConfirm(offer);
  }

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(next) => {
        onOpenChange(next);
        if (!next) setTermsAccepted(false);
      }}
    >
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-100 bg-on-surface/40 backdrop-blur-md transition-opacity duration-300 data-starting-style:opacity-0 data-ending-style:opacity-0" />
        <Dialog.Popup className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <div className="relative bg-surface-container-lowest w-full max-w-lg rounded-lg shadow-lg overflow-hidden transition-all duration-300 data-starting-style:opacity-0 data-starting-style:scale-95 data-ending-style:opacity-0 data-ending-style:scale-95">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <Dialog.Title className="text-headline-md font-headline-md text-on-surface">
                    Accept Offer
                  </Dialog.Title>
                  <Dialog.Description className="text-on-surface-variant text-body-md mt-2">
                    Review your selection before finalizing.
                  </Dialog.Description>
                </div>
                <Dialog.Close
                  className="material-symbols-outlined text-outline hover:text-on-surface transition-colors p-2 hover:bg-surface-container-low rounded-full"
                  aria-label="Close"
                >
                  close
                </Dialog.Close>
              </div>

              <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/30 mb-8">
                <div className="flex flex-col gap-4">
                  <div>
                    <span className="text-label-sm font-label-sm text-outline uppercase tracking-wider">
                      Selected Package
                    </span>
                    <h3 className="text-body-lg font-bold text-on-surface mt-1">
                      {offer.packageTitle}
                    </h3>
                  </div>
                  <div className="pt-4 border-t border-outline-variant/30 flex justify-between items-end">
                    <div>
                      <span className="text-label-sm font-label-sm text-outline uppercase tracking-wider">
                        Total Investment
                      </span>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-headline-md font-headline-md text-secondary-container tracking-tighter">
                          ${offer.totalPrice.toLocaleString()}
                        </span>
                        <span className="text-body-md font-body-md text-outline">
                          USD
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-on-surface-variant">
                        Includes all taxes &amp; fees
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <p className="text-on-surface-variant text-body-md leading-relaxed">
                  By accepting this offer, you are requesting to secure your
                  booking. Your coordinator,{" "}
                  <span className="font-bold text-on-surface">
                    {offer.coordinator.name}
                  </span>
                  , will be notified immediately to finalize your itinerary and
                  villa reservation.
                </p>
                <label className="flex items-start gap-3 cursor-pointer">
                  <Checkbox.Root
                    checked={termsAccepted}
                    onCheckedChange={setTermsAccepted}
                    className="flex items-center justify-center h-5 w-5 mt-0.5 rounded border border-outline data-checked:bg-primary data-checked:border-primary transition-colors"
                  >
                    <Checkbox.Indicator className="text-white">
                      <span className="material-symbols-outlined text-[16px] leading-none">
                        check
                      </span>
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <span className="text-body-md text-on-surface-variant">
                    I agree to the{" "}
                    <a
                      className="text-primary font-bold hover:underline"
                      href="#"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      className="text-primary font-bold hover:underline"
                      href="#"
                    >
                      Booking Policy
                    </a>
                    .
                  </span>
                </label>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog.Close className="flex-1 px-8 py-4 border border-outline text-outline hover:bg-surface-container-low rounded-lg font-bold transition-all active:scale-95">
                  Go Back
                </Dialog.Close>
                <button
                  onClick={handleConfirm}
                  disabled={!termsAccepted}
                  className="flex-1 px-8 py-4 bg-primary text-white hover:bg-primary-container rounded-lg font-bold shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100 disabled:shadow-none"
                >
                  Confirm &amp; Accept
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                </button>
              </div>
            </div>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
