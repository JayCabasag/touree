"use client";

import { useState } from "react";
import { Popover } from "@base-ui/react/popover";

interface BudgetRangePickerProps {
  min: number | null;
  max: number | null;
  onChange: (range: { min: number | null; max: number | null }) => void;
  rangeMin?: number;
  rangeMax?: number;
  step?: number;
}

function formatPriceRangeLabel(value: number, isMax: boolean, ceiling: number) {
  const formatted = `$${value.toLocaleString()}`;
  return isMax && value >= ceiling ? `${formatted}+` : formatted;
}

export function BudgetRangePicker({
  min,
  max,
  onChange,
  rangeMin = 0,
  rangeMax = 10000,
  step = 100,
}: BudgetRangePickerProps) {
  const hasBudget = min !== null && max !== null;

  // Sliders need a concrete value to render even before the user has
  // picked anything, so we track draft positions locally. These only
  // become the "real" budget once the user actually drags a slider.
  const [draftMin, setDraftMin] = useState(min ?? rangeMin);
  const [draftMax, setDraftMax] = useState(max ?? rangeMax);

  const displayMin = hasBudget ? min : draftMin;
  const displayMax = hasBudget ? max : draftMax;

  const label = hasBudget
    ? `$${min.toLocaleString()} - $${max.toLocaleString()}${max >= rangeMax ? "+" : ""}`
    : null;

  function handleMinChange(value: number) {
    const nextMin = Math.min(value, displayMax - step);
    setDraftMin(nextMin);
    onChange({ min: nextMin, max: displayMax });
  }

  function handleMaxChange(value: number) {
    const nextMax = Math.max(value, displayMin + step);
    setDraftMax(nextMax);
    onChange({ min: displayMin, max: nextMax });
  }

  function handleClear() {
    setDraftMin(rangeMin);
    setDraftMax(rangeMax);
    onChange({ min: null, max: null });
  }

  return (
    <Popover.Root>
      <Popover.Trigger className="flex flex-col px-4 border-outline-variant/30 last:border-0 text-left w-full">
        <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70 mb-1">
          Budget
        </span>
        <span className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-xl">
            payments
          </span>
          <span
            className={
              label
                ? "font-semibold text-on-surface text-sm whitespace-nowrap"
                : "text-outline/50 text-sm"
            }
          >
            {label ?? "Add budget"}
          </span>
        </span>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Positioner sideOffset={10} align="start" className="z-20">
          <Popover.Popup
            className="rounded-2xl p-5 shadow-2xl border border-outline-variant/20 w-80"
            style={{ backgroundColor: "#ffffff" }}
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70">
                Price range per person
              </p>
              {hasBudget && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="text-xs font-semibold text-primary hover:text-on-primary-fixed-variant"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center justify-between mb-5">
              <div className="text-center">
                <p className="text-[11px] text-on-surface-variant/60 mb-0.5">
                  Min
                </p>
                <p className="text-lg font-bold text-on-surface">
                  {formatPriceRangeLabel(displayMin, false, rangeMax)}
                </p>
              </div>
              <span className="text-outline/40">—</span>
              <div className="text-center">
                <p className="text-[11px] text-on-surface-variant/60 mb-0.5">
                  Max
                </p>
                <p className="text-lg font-bold text-on-surface">
                  {formatPriceRangeLabel(displayMax, true, rangeMax)}
                </p>
              </div>
            </div>

            <div className="mb-3">
              <label className="text-[11px] text-on-surface-variant/60">
                Minimum
              </label>
              <input
                type="range"
                min={rangeMin}
                max={rangeMax}
                step={step}
                value={displayMin}
                onChange={(e) => handleMinChange(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>

            <div className="mb-2">
              <label className="text-[11px] text-on-surface-variant/60">
                Maximum
              </label>
              <input
                type="range"
                min={rangeMin}
                max={rangeMax}
                step={step}
                value={displayMax}
                onChange={(e) => handleMaxChange(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>

            <Popover.Close className="w-full mt-2 py-2.5 bg-primary text-white rounded-xl font-bold text-sm hover:bg-on-primary-fixed-variant transition-colors">
              Apply
            </Popover.Close>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}
