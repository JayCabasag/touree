"use client";

import { useState } from "react";
import { DateRangePicker } from "./date-range-picker";
import { BudgetRangePicker } from "./budget-range-picker";

export function EditQuote() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [minBudget, setMinBudget] = useState<number | null>(null);
  const [maxBudget, setMaxBudget] = useState<number | null>(null);
  const [guests, setGuests] = useState<number | null>(null);

  function handleDecrement() {
    setGuests((g) => {
      if (g === null) return 1;
      return Math.max(1, g - 1);
    });
  }

  function handleIncrement() {
    setGuests((g) => {
      if (g === null) return 1;
      return Math.min(50, g + 1);
    });
  }

  return (
    <div className="px-12">
      <div className="mb-12 text-center md:text-left">
        <nav className="flex gap-2 text-label-sm font-label-sm text-on-surface-variant mb-4 uppercase tracking-widest">
          <a className="hover:text-primary" href="#">
            Bookings
          </a>
          <span>/</span>
          <span className="text-primary">Edit Request</span>
        </nav>
        <h1 className="font-headline-lg text-headline-lg md:text-headline-lg-mobile text-on-surface mb-2">
          Edit Quote Request
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl">
          Modify your trip details below. Our travel coordinators will update
          your quote based on these changes within 24 hours.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <form
          className="lg:col-span-8 bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/30 form-card-shadow space-y-6"
          id="quoteForm"
        >
          <div>
            <label
              className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70 mb-2 block"
              htmlFor="destinationInput"
            >
              Destination
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary text-xl">
                location_on
              </span>
              <input
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-outline-variant/40 rounded-xl focus:border-primary focus:outline-none transition-colors font-body-md text-sm"
                id="destinationInput"
                placeholder="Where would you like to go?"
                required
                type="text"
              />
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
                  {guests !== null ? (
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
                    disabled={guests === 50}
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

          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70">
                Estimated Budget
              </span>
              <span className="font-headline-lg text-[20px] text-primary">
                ${minBudget?.toLocaleString()} – ${maxBudget?.toLocaleString()}
              </span>
            </div>
            <div className="border border-outline-variant/40 rounded-xl px-4 py-3">
              <BudgetRangePicker
                min={minBudget}
                max={maxBudget}
                onChange={({ min, max }) => {
                  setMinBudget(min);
                  setMaxBudget(max);
                }}
              />
              <div className="flex justify-between mt-2 text-[11px] text-outline">
                <span>$500</span>
                <span>$50,000+</span>
              </div>
            </div>
          </div>

          <div>
            <label
              className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70 mb-2 block"
              htmlFor="notesArea"
            >
              Additional Notes &amp; Requests
            </label>
            <textarea
              className="w-full px-4 py-3.5 bg-white border border-outline-variant/40 rounded-xl focus:border-primary focus:outline-none transition-colors font-body-md text-sm resize-none"
              id="notesArea"
              placeholder="Mention any special interests, dietary requirements, or accessibility needs..."
              rows={4}
            />
          </div>

          <button
            className="w-full py-3.5 bg-primary text-on-primary rounded-xl font-bold text-sm transition-all hover:bg-primary-container disabled:opacity-40 disabled:cursor-not-allowed"
            type="submit"
          >
            Request Premium Quote
          </button>

          <p className="text-center text-xs text-text-secondary">
            No charge until your consultant confirms availability
          </p>
        </form>

        <div className="lg:col-span-4">
          <div className="sticky top-32 bg-white p-8 rounded-xl border border-outline-variant/30 summary-card-gradient form-card-shadow overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-8xl">
                travel_explore
              </span>
            </div>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-6 relative">
              Quote Summary
            </h2>
            <div className="space-y-6 relative">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">map</span>
                </div>
                <div>
                  <p className="text-label-sm font-label-sm text-text-secondary uppercase">
                    Destination
                  </p>
                  <p
                    className="font-body-lg font-semibold text-on-surface"
                    id="summaryDest"
                  >
                    Not selected
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center text-on-surface-variant shrink-0">
                  <span className="material-symbols-outlined">
                    calendar_today
                  </span>
                </div>
                <div>
                  <p className="text-label-sm font-label-sm text-text-secondary uppercase">
                    Timeline
                  </p>
                  <p
                    className="font-body-lg font-semibold text-on-surface"
                    id="summaryDates"
                  >
                    Select dates
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center text-on-surface-variant shrink-0">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <div>
                  <p className="text-label-sm font-label-sm text-text-secondary uppercase">
                    Travelers
                  </p>
                  <p
                    className="font-body-lg font-semibold text-on-surface"
                    id="summaryGuests"
                  >
                    1 Person
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-outline-variant">
                <p className="text-label-sm font-label-sm text-text-secondary uppercase mb-2">
                  Total Estimated
                </p>
                <p
                  className="text-4xl font-extrabold text-primary"
                  id="summaryBudget"
                >
                  $5,000
                </p>
              </div>
              <div className="p-4 bg-surface-container-low rounded-lg flex items-start gap-3">
                <span
                  className="material-symbols-outlined text-primary text-sm mt-0.5"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  info
                </span>
                <p className="text-[13px] leading-snug text-on-surface-variant">
                  Your quote will include luxury accommodation, private
                  transfers, and curated excursions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
