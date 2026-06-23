"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { DateRangePicker } from "./date-range-picker";
import { BudgetRangePicker } from "./budget-range-picker";
import { GuestPicker } from "./guest-picker";

interface ExploreFilterBarProps {
  defaultDestination?: string;
  defaultStartDate?: Date | null;
  defaultEndDate?: Date | null;
  defaultBudgetMin?: number | null;
  defaultBudgetMax?: number | null;
  defaultGuests?: number | null;
}

export function ExploreFilterBar({
  defaultDestination = "",
  defaultStartDate = null,
  defaultEndDate = null,
  defaultBudgetMin = null,
  defaultBudgetMax = null,
  defaultGuests = null,
}: ExploreFilterBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [destination, setDestination] = useState(defaultDestination);
  const [startDate, setStartDate] = useState<Date | null>(defaultStartDate);
  const [endDate, setEndDate] = useState<Date | null>(defaultEndDate);
  const [budgetMin, setBudgetMin] = useState<number | null>(defaultBudgetMin);
  const [budgetMax, setBudgetMax] = useState<number | null>(defaultBudgetMax);
  const [guests, setGuests] = useState<number | null>(defaultGuests);

  function handleClearAll() {
    setDestination("");
    setStartDate(null);
    setEndDate(null);
    setBudgetMin(null);
    setBudgetMax(null);
    setGuests(null);
    router.push("/explore");
  }

  function handleApplyFilters() {
    const params = new URLSearchParams(searchParams.toString());

    if (destination) params.set("destination", destination);
    else params.delete("destination");

    if (startDate) params.set("startDate", startDate.toISOString());
    else params.delete("startDate");

    if (endDate) params.set("endDate", endDate.toISOString());
    else params.delete("endDate");

    if (budgetMin != null) params.set("budgetMin", String(budgetMin));
    else params.delete("budgetMin");

    if (budgetMax != null) params.set("budgetMax", String(budgetMax));
    else params.delete("budgetMax");

    if (guests != null) params.set("guests", String(guests));
    else params.delete("guests");

    router.push(`/explore?${params.toString()}`);
  }

  return (
    <div className="bg-white border border-outline-variant/50 rounded-xl p-3 mb-8 flex flex-wrap items-center gap-4 card-shadow">
      <div className="relative group">
        <div className="flex flex-col px-4 border-r border-outline-variant/30 last:border-0">
          <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70 mb-1">
            Where to?
          </label>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-xl">
              location_on
            </span>
            <input
              className="bg-transparent border-0 border-b-2 border-transparent p-0 pb-0.5 focus:ring-0 focus:outline-none focus:border-primary transition-colors text-on-surface font-semibold placeholder:text-outline/50 w-full"
              placeholder="Search destination"
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="h-8 w-px bg-outline-variant/30 hidden md:block"></div>

      <div className="relative group">
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          onChange={({ startDate, endDate }) => {
            setStartDate(startDate);
            setEndDate(endDate);
          }}
        />
      </div>

      <div className="h-8 w-px bg-outline-variant/30 hidden md:block"></div>

      <div className="relative group">
        <BudgetRangePicker
          min={budgetMin}
          max={budgetMax}
          onChange={({ min, max }) => {
            setBudgetMin(min);
            setBudgetMax(max);
          }}
        />
      </div>

      <div className="h-8 w-px bg-outline-variant/30 hidden md:block"></div>

      <div className="relative group">
        <GuestPicker guests={guests} onChange={setGuests} />
      </div>

      <div className="ml-auto flex items-center gap-6">
        <button
          onClick={handleClearAll}
          className="text-text-secondary font-label-sm text-label-sm uppercase tracking-wider hover:text-primary transition-colors"
        >
          Clear All
        </button>
        <button
          onClick={handleApplyFilters}
          className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-sm text-label-sm uppercase tracking-widest hover:bg-primary-container transition-all shadow-sm"
        >
          Apply
        </button>
      </div>
    </div>
  );
}
