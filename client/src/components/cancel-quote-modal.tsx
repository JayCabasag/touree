"use client";

import { Dialog } from "@base-ui/react/dialog";
import { QuoteRequest } from "@/lib/types";

interface CancelQuoteModalProps {
  pendingRequest: QuoteRequest | null;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}

export function CancelQuoteModal({
  pendingRequest,
  onOpenChange,
  onConfirm,
}: CancelQuoteModalProps) {
  const open = pendingRequest !== null;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-on-surface/40 backdrop-blur-sm transition-opacity duration-300 data-starting-style:opacity-0 data-ending-style:opacity-0" />
        <Dialog.Popup className="fixed inset-0 z-100 flex items-center justify-center">
          <div className="relative w-full max-w-md mx-4 bg-surface-container-lowest rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden border border-outline-variant/20 transition-transform duration-300 data-starting-style:scale-95 data-ending-style:scale-95">
            <div className="pt-10 pb-6 px-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-error-container text-error rounded-full flex items-center justify-center mb-6">
                <span
                  className="material-symbols-outlined text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  warning
                </span>
              </div>
              <Dialog.Title className="font-headline-md text-headline-md text-on-surface mb-3">
                Cancel Quote Request?
              </Dialog.Title>
              <Dialog.Description className="text-on-surface-variant font-body-md">
                By canceling this request for{" "}
                <span className="font-bold text-on-surface">
                  {pendingRequest?.packageTitle}
                </span>
                , all active coordinators will be notified immediately. This
                action will permanently stop all active proposals and cannot be
                undone.
              </Dialog.Description>
            </div>

            <div className="bg-surface-muted px-8 py-6 flex flex-col sm:flex-row-reverse gap-3">
              <button
                onClick={onConfirm}
                className="flex-1 bg-primary text-on-primary font-label-sm text-label-sm py-4 rounded-lg font-bold shadow-md hover:bg-on-primary-fixed-variant transition-all active:scale-[0.98]"
              >
                Cancel Request
              </button>
              <Dialog.Close className="flex-1 border border-outline text-on-surface-variant font-label-sm text-label-sm py-4 rounded-lg font-bold hover:bg-surface-variant transition-all active:scale-[0.98]">
                Keep Request
              </Dialog.Close>
            </div>

            <Dialog.Close
              className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface transition-colors"
              aria-label="Close"
            >
              <span className="material-symbols-outlined">close</span>
            </Dialog.Close>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
