"use client";

import { useState } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { RadioGroup } from "@base-ui/react/radio-group";
import { Radio } from "@base-ui/react/radio";

import type { Trip } from "@/lib/types";
import { cn } from "@/lib/utils";

type CancelReason = "change_plans" | "emergency" | "price" | "other";

const CANCEL_REASONS: { value: CancelReason; label: string }[] = [
  { value: "change_plans", label: "Change of plans" },
  { value: "emergency", label: "Personal emergency" },
  { value: "price", label: "Found better price" },
  { value: "other", label: "Other" },
];

interface CancelTripModalProps {
  trip: Trip | null;
  onOpenChange: (open: boolean) => void;
  onConfirm: (details: {
    reason: CancelReason | null;
    comments: string;
  }) => void;
}

export function CancelTripModal({
  trip,
  onOpenChange,
  onConfirm,
}: CancelTripModalProps) {
  const open = trip !== null;

  const [reason, setReason] = useState<CancelReason | null>(null);
  const [comments, setComments] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onConfirm({ reason, comments });
  }

  function handleOpenChange(nextOpen: boolean) {
    if (!nextOpen) {
      setReason(null);
      setComments("");
    }
    onOpenChange(nextOpen);
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-on-surface/40 backdrop-blur-sm transition-opacity duration-300 data-starting-style:opacity-0 data-ending-style:opacity-0" />
        <Dialog.Popup className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <div className="relative w-full max-w-xl mx-auto bg-surface-container-lowest rounded-xl shadow-2xl overflow-hidden border border-outline-variant transition-transform duration-300 data-starting-style:scale-95 data-ending-style:scale-95">
            {/* Header */}
            <div className="px-8 py-6 border-b border-surface-container flex justify-between items-center bg-surface-container-low">
              <Dialog.Title className="font-headline-md text-headline-md text-on-surface">
                Cancel Trip
              </Dialog.Title>
              <Dialog.Close
                className="p-2 hover:bg-surface-container-high rounded-full transition-colors text-on-surface-variant"
                aria-label="Close"
              >
                <span className="material-symbols-outlined">close</span>
              </Dialog.Close>
            </div>

            {/* Content */}
            <div className="p-8 space-y-6 max-h-179 overflow-y-auto">
              {/* Warning */}
              <div className="flex gap-4 p-4 rounded-lg bg-error-container/30 border border-error-container">
                <span className="material-symbols-outlined text-error shrink-0">
                  warning
                </span>
                <Dialog.Description className="text-on-surface-variant font-body-md">
                  Are you sure you want to cancel your{" "}
                  <strong className="text-on-surface">
                    &lsquo;{trip?.title}&rsquo;
                  </strong>
                  ? This action will notify your coordinator,{" "}
                  <strong className="text-on-surface">
                    {trip?.coordinator}
                  </strong>
                  , and may be subject to cancellation policies.
                </Dialog.Description>
              </div>

              {/* Policy summary */}
              <div className="p-4 rounded-lg bg-surface-muted border border-outline-variant flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-surface-variant">
                    policy
                  </span>
                </div>
                <div>
                  <h4 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    Cancellation Policy
                  </h4>
                  <p className="text-body-md text-on-surface">
                    Free cancellation until{" "}
                    <span className="font-bold">Aug 28</span>. After this date,
                    a 50% fee may apply.
                  </p>
                </div>
              </div>

              {/* Form */}
              <form
                id="cancelTripForm"
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div className="space-y-3">
                  <label className="font-label-sm text-label-sm text-text-secondary uppercase">
                    Reason for Cancellation
                  </label>
                  <RadioGroup
                    value={reason}
                    onValueChange={(value) => setReason(value as CancelReason)}
                    className="grid grid-cols-1 md:grid-cols-2 gap-3"
                  >
                    {CANCEL_REASONS.map(({ value, label }) => (
                      <label
                        key={value}
                        className={cn(
                          "flex items-center p-3 rounded-lg border border-outline-variant hover:border-primary-container cursor-pointer transition-all group",
                          reason === value && "bg-primary-fixed border-primary",
                        )}
                      >
                        <Radio.Root
                          value={value}
                          className="w-4 h-4 mr-3 rounded-full border border-outline data-checked:border-primary data-checked:bg-primary flex items-center justify-center shrink-0 focus-visible:ring-2 focus-visible:ring-primary-container outline-none"
                        >
                          <Radio.Indicator className="w-2 h-2 rounded-full bg-on-primary data-unchecked:hidden" />
                        </Radio.Root>
                        <span className="text-on-surface-variant font-body-md group-hover:text-primary transition-colors">
                          {label}
                        </span>
                      </label>
                    ))}
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <label
                    htmlFor="comments"
                    className="font-label-sm text-label-sm text-text-secondary uppercase"
                  >
                    Additional Comments (Optional)
                  </label>
                  <textarea
                    id="comments"
                    rows={3}
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    placeholder="Tell us more about your decision..."
                    className="w-full rounded-lg border-outline-variant bg-surface-container-low focus:ring-2 focus:ring-primary focus:border-transparent font-body-md p-4 placeholder:text-outline"
                  />
                </div>
              </form>
            </div>

            {/* Footer */}
            <div className="px-8 py-6 bg-surface-container-low border-t border-surface-container flex flex-col md:flex-row-reverse gap-4">
              <button
                type="submit"
                form="cancelTripForm"
                className="w-full md:w-auto px-8 py-3 bg-primary text-on-primary font-bold rounded-lg shadow-md hover:bg-on-primary-fixed-variant transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">
                  delete_forever
                </span>
                Cancel Trip
              </button>
              <Dialog.Close className="w-full md:w-auto px-8 py-3 border border-outline-variant text-on-surface-variant bg-surface font-bold rounded-lg hover:bg-surface-container-high transition-all active:scale-95">
                Keep Trip
              </Dialog.Close>
            </div>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
