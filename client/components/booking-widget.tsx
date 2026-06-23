"use client";

import { useState } from "react";
import Link from "next/link";
import { Dialog } from "@base-ui/react/dialog";
import { DateRangePicker } from "./date-range-picker";

interface BookingWidgetProps {
  pricePerPerson?: number;
  maxGuests?: number;
}

export function BookingWidget({
  pricePerPerson = 2450,
  maxGuests = 12,
}: BookingWidgetProps) {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [guests, setGuests] = useState<number | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const nights =
    startDate && endDate
      ? Math.round(
          (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
        )
      : 0;

  const hasDates = startDate !== null && endDate !== null;
  const hasGuests = guests !== null;
  const isReady = hasDates && hasGuests;

  const subtotal = hasGuests ? pricePerPerson * guests : 0;

  function handleDecrement() {
    setGuests((g) => {
      if (g === null) return 1;
      return Math.max(1, g - 1);
    });
  }

  function handleIncrement() {
    setGuests((g) => {
      if (g === null) return 1;
      return Math.min(maxGuests, g + 1);
    });
  }

  function handleReserve() {
    // Hook this up to your booking/quote-request creation logic.
    setShowConfirmation(true);
  }

  return (
    <div className="bg-white rounded-2xl border border-outline-variant/30 shadow-lg p-6 space-y-6">
      <div>
        <span className="text-text-secondary font-label-sm text-label-sm">
          From
        </span>
        <div className="flex items-baseline gap-1">
          <span className="font-headline-lg text-[28px] text-primary">
            ${pricePerPerson.toLocaleString()}
          </span>
          <span className="text-text-secondary text-sm">/ person</span>
        </div>
      </div>

      <div className="border border-outline-variant/40 rounded-xl divide-y divide-outline-variant/30 overflow-hidden">
        <div className="py-3">
          <DateRangePicker
            startDate={startDate}
            endDate={endDate}
            onChange={({ startDate, endDate }) => {
              setStartDate(startDate);
              setEndDate(endDate);
            }}
          />
        </div>

        <div className="flex flex-col px-4 py-3">
          <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70 mb-1">
            Guests
          </label>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm">
              <span className="material-symbols-outlined text-primary text-xl">
                group
              </span>
              {hasGuests ? (
                <span className="font-semibold text-on-surface">
                  {guests} {guests === 1 ? "Guest" : "Guests"}
                </span>
              ) : (
                <span className="text-outline/50">Add guests</span>
              )}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleDecrement}
                disabled={guests === 1}
                className="w-7 h-7 rounded-full border border-outline-variant flex items-center justify-center text-on-surface hover:border-primary hover:text-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Decrease guests"
              >
                <span className="material-symbols-outlined text-base leading-none">
                  remove
                </span>
              </button>
              <button
                type="button"
                onClick={handleIncrement}
                disabled={guests === maxGuests}
                className="w-7 h-7 rounded-full border border-outline-variant flex items-center justify-center text-on-surface hover:border-primary hover:text-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Increase guests"
              >
                <span className="material-symbols-outlined text-base leading-none">
                  add
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isReady && (
        <div className="space-y-2 text-sm">
          <div className="flex justify-between text-text-secondary">
            <span>
              ${pricePerPerson.toLocaleString()} × {guests}{" "}
              {guests === 1 ? "guest" : "guests"}
            </span>
            <span>${subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-text-secondary">
            <span>Duration</span>
            <span>{nights} nights</span>
          </div>
          <div className="flex justify-between font-bold text-on-surface pt-2 border-t border-outline-variant/30">
            <span>Total</span>
            <span>${subtotal.toLocaleString()}</span>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={handleReserve}
        disabled={!isReady}
        className="w-full py-3.5 bg-primary text-on-primary rounded-xl font-bold text-sm transition-all hover:bg-primary-container disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {!hasDates
          ? "Select Dates to Continue"
          : !hasGuests
            ? "Add Guests to Continue"
            : "Reserve Now"}
      </button>

      <p className="text-center text-xs text-text-secondary">
        No charge until confirmed by your travel consultant
      </p>

      <Dialog.Root open={showConfirmation} onOpenChange={setShowConfirmation}>
        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />
          <Dialog.Popup className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-60 w-[90%] max-w-md bg-surface rounded-2xl shadow-2xl p-8 border border-outline-variant/30">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-4xl">
                  mark_email_read
                </span>
              </div>
              <Dialog.Title className="font-headline-md text-headline-md mb-4">
                Reservation Request Sent
              </Dialog.Title>
              <Dialog.Description className="text-text-secondary text-body-md leading-relaxed mb-8">
                Your request for this package has been sent to the coordinator.
                Please wait for them to confirm your booking. You can track the
                status in your &apos;My Bookings&apos; page. The coordinator may
                also contact you for additional inquiries or to finalize
                details.
              </Dialog.Description>
              <div className="flex flex-col w-full gap-3">
                <Dialog.Close className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary-container transition-colors">
                  Got it
                </Dialog.Close>
                <Link
                  href="/bookings"
                  className="w-full text-primary font-bold py-2 hover:underline text-sm"
                >
                  View My Bookings
                </Link>
              </div>
            </div>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
