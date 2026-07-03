"use client";

import { useState } from "react";
import { Popover } from "@base-ui/react/popover";

interface GuestPickerProps {
  guests: number | null;
  onChange: (guests: number | null) => void;
  min?: number;
  max?: number;
}

export function GuestPicker({
  guests,
  onChange,
  min = 1,
  max = 16,
}: GuestPickerProps) {
  const hasGuests = guests !== null;

  // The stepper needs a concrete number to display even before the user
  // has picked anything. This stays local until the user actually taps
  // +/-, at which point it becomes the real value via onChange.
  const [draftGuests, setDraftGuests] = useState(guests ?? min);

  const displayGuests = hasGuests ? guests : draftGuests;

  const label = hasGuests
    ? `${guests} ${guests === 1 ? "guest" : "guests"}`
    : null;

  function handleDecrement() {
    const next = Math.max(min, displayGuests - 1);
    setDraftGuests(next);
    onChange(next);
  }

  function handleIncrement() {
    const next = Math.min(max, displayGuests + 1);
    setDraftGuests(next);
    onChange(next);
  }

  function handleClear() {
    setDraftGuests(min);
    onChange(null);
  }

  return (
    <Popover.Root>
      <Popover.Trigger className="flex flex-col px-4 border-outline-variant/30 last:border-0 text-left w-full">
        <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70 mb-1">
          Guests
        </span>
        <span className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-xl">
            group
          </span>
          <span
            className={
              label
                ? "font-semibold text-on-surface text-sm whitespace-nowrap"
                : "text-outline/50 text-sm"
            }
          >
            {label ?? "Add guests"}
          </span>
        </span>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Positioner sideOffset={10} align="start" className="z-20">
          <Popover.Popup
            className="rounded-2xl p-5 shadow-2xl border border-outline-variant/20 w-64"
            style={{ backgroundColor: "#ffffff" }}
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70">
                Number of guests
              </p>
              {hasGuests && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="text-xs font-semibold text-primary hover:text-on-primary-fixed-variant"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={handleDecrement}
                disabled={displayGuests <= min}
                className="w-9 h-9 rounded-full border border-outline-variant/30 text-on-surface flex items-center justify-center disabled:opacity-30 disabled:cursor-default hover:border-primary hover:text-primary transition-colors"
                aria-label="Decrease guests"
              >
                <span className="material-symbols-outlined text-lg">
                  remove
                </span>
              </button>

              <span className="text-lg font-bold text-on-surface">
                {displayGuests} {displayGuests === 1 ? "guest" : "guests"}
              </span>

              <button
                type="button"
                onClick={handleIncrement}
                disabled={displayGuests >= max}
                className="w-9 h-9 rounded-full border border-outline-variant/30 text-on-surface flex items-center justify-center disabled:opacity-30 disabled:cursor-default hover:border-primary hover:text-primary transition-colors"
                aria-label="Increase guests"
              >
                <span className="material-symbols-outlined text-lg">add</span>
              </button>
            </div>

            <Popover.Close className="w-full mt-5 py-2.5 bg-primary text-white rounded-xl font-bold text-sm hover:bg-on-primary-fixed-variant transition-colors">
              Apply
            </Popover.Close>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}
