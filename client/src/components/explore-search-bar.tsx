"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BudgetRangePicker } from "./budget-range-picker";
import { DateRangePicker } from "./date-range-picker";
import { GuestPicker } from "./guest-picker";

export function ExploreSearchBar() {
  const router = useRouter();

  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [budgetMin, setBudgetMin] = useState<number | null>(null);
  const [budgetMax, setBudgetMax] = useState<number | null>(null);
  const [guests, setGuests] = useState<number | null>(null);

  function handleExplore() {
    const params = new URLSearchParams();
    if (destination) params.set("destination", destination);
    if (startDate) params.set("startDate", startDate.toISOString());
    if (endDate) params.set("endDate", endDate.toISOString());
    if (budgetMin !== null) params.set("budgetMin", String(budgetMin));
    if (budgetMax !== null) params.set("budgetMax", String(budgetMax));
    if (guests !== null) params.set("guests", String(guests));
    router.push(`/explore?${params.toString()}`);
  }

  return (
    <div className="glass-effect rounded-2xl p-4 shadow-2xl flex flex-col md:flex-row gap-4 items-center max-w-6xl">
      <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Location */}
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

        {/* Date Range */}
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          onChange={({ startDate, endDate }) => {
            setStartDate(startDate);
            setEndDate(endDate);
          }}
        />

        {/* Budget Range */}
        <BudgetRangePicker
          min={budgetMin}
          max={budgetMax}
          onChange={({ min, max }) => {
            setBudgetMin(min);
            setBudgetMax(max);
          }}
        />

        {/* Guests */}
        <GuestPicker guests={guests} onChange={setGuests} />
      </div>

      <button
        onClick={handleExplore}
        className="w-full md:w-auto px-10 py-4 bg-primary text-white rounded-xl font-bold hover:bg-on-primary-fixed-variant transition-all shadow-lg shadow-primary/20 active:scale-95"
      >
        Explore Now
      </button>
    </div>
  );
}
