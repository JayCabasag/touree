"use client";

import { useState } from "react";
import { Popover } from "@base-ui/react/popover";

interface DateRangePickerProps {
  startDate: Date | null;
  endDate: Date | null;
  onChange: (range: { startDate: Date | null; endDate: Date | null }) => void;
}

const DAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"];
const MONTH_LABELS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function isSameDay(a: Date | null, b: Date | null) {
  return (
    !!a &&
    !!b &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isInRange(d: Date, start: Date | null, end: Date | null) {
  if (!start || !end) return false;
  return d > start && d < end;
}

function formatShort(d: Date | null) {
  if (!d) return null;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function buildMonthCells(monthDate: Date): (Date | null)[] {
  const firstOfMonth = new Date(
    monthDate.getFullYear(),
    monthDate.getMonth(),
    1,
  );
  const leadingBlanks = firstOfMonth.getDay();
  const daysInMonth = new Date(
    monthDate.getFullYear(),
    monthDate.getMonth() + 1,
    0,
  ).getDate();

  const cells: (Date | null)[] = Array(leadingBlanks).fill(null);
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(new Date(monthDate.getFullYear(), monthDate.getMonth(), day));
  }
  return cells;
}

function MonthGrid({
  monthDate,
  startDate,
  endDate,
  onPickDate,
}: {
  monthDate: Date;
  startDate: Date | null;
  endDate: Date | null;
  onPickDate: (d: Date) => void;
}) {
  const today = new Date();
  const todayStart = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );
  const cells = buildMonthCells(monthDate);

  return (
    <div className="w-60">
      <p className="text-center text-sm font-semibold text-on-surface mb-2">
        {MONTH_LABELS[monthDate.getMonth()]} {monthDate.getFullYear()}
      </p>
      <div className="grid grid-cols-7 gap-0.5 mb-1">
        {DAY_LABELS.map((label, i) => (
          <span
            key={i}
            className="text-center text-[10px] font-bold text-on-surface-variant/60"
          >
            {label}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-0.5">
        {cells.map((date, i) => {
          if (!date) return <div key={i} />;

          const isStart = isSameDay(date, startDate);
          const isEnd = isSameDay(date, endDate);
          const within = isInRange(date, startDate, endDate);
          const isPast = date < todayStart;

          let classes =
            "w-8 h-8 mx-auto flex items-center justify-center text-xs rounded-full transition-colors";

          if (isStart || isEnd) {
            classes += " bg-primary text-white font-semibold";
          } else if (within) {
            classes += " bg-primary/10 text-primary rounded-none";
          } else if (isPast) {
            classes += " text-outline/40 cursor-default";
          } else {
            classes += " text-on-surface hover:bg-primary/10 cursor-pointer";
          }

          return (
            <button
              key={i}
              type="button"
              disabled={isPast}
              onClick={() => onPickDate(date)}
              className={classes}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function DateRangePicker({
  startDate,
  endDate,
  onChange,
}: DateRangePickerProps) {
  const today = new Date();
  const [viewMonth, setViewMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1),
  );

  const nextMonth = new Date(
    viewMonth.getFullYear(),
    viewMonth.getMonth() + 1,
    1,
  );

  const hasRange = startDate !== null && endDate !== null;

  function handlePickDate(date: Date) {
    const noRangeYet = !startDate || (startDate && endDate);

    if (noRangeYet) {
      onChange({ startDate: date, endDate: null });
    } else if (date < startDate) {
      onChange({ startDate: date, endDate: null });
    } else {
      onChange({ startDate, endDate: date });
    }
  }

  function handleClear() {
    onChange({ startDate: null, endDate: null });
  }

  const label =
    startDate && endDate
      ? `${formatShort(startDate)} - ${formatShort(endDate)}`
      : startDate
        ? `${formatShort(startDate)} - ?`
        : null;

  return (
    <Popover.Root>
      <Popover.Trigger className="flex flex-col px-4 border-outline-variant/30 last:border-0 text-left w-full">
        <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70 mb-1">
          When?
        </span>
        <span className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-xl">
            calendar_today
          </span>
          <span
            className={
              label
                ? "font-semibold text-on-surface text-sm whitespace-nowrap"
                : "text-outline/50 text-sm"
            }
          >
            {label ?? "Select dates"}
          </span>
        </span>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Positioner sideOffset={10} align="start" className="z-20">
          <Popover.Popup
            className="rounded-2xl p-5 shadow-2xl border border-outline-variant/20"
            style={{ backgroundColor: "#ffffff" }}
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-on-surface-variant/70">
                Select check-in and check-out
              </p>
              {hasRange && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="text-xs font-semibold text-primary hover:text-on-primary-fixed-variant"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center justify-between mb-3">
              <button
                type="button"
                onClick={() =>
                  setViewMonth(
                    new Date(
                      viewMonth.getFullYear(),
                      viewMonth.getMonth() - 1,
                      1,
                    ),
                  )
                }
                className="text-on-surface-variant hover:text-primary px-2 text-lg"
                aria-label="Previous month"
              >
                ‹
              </button>
              <span className="text-xs text-on-surface-variant/50">
                {MONTH_LABELS[viewMonth.getMonth()]} {viewMonth.getFullYear()} –{" "}
                {MONTH_LABELS[nextMonth.getMonth()]} {nextMonth.getFullYear()}
              </span>
              <button
                type="button"
                onClick={() =>
                  setViewMonth(
                    new Date(
                      viewMonth.getFullYear(),
                      viewMonth.getMonth() + 1,
                      1,
                    ),
                  )
                }
                className="text-on-surface-variant hover:text-primary px-2 text-lg"
                aria-label="Next month"
              >
                ›
              </button>
            </div>

            <div className="flex gap-6">
              <MonthGrid
                monthDate={viewMonth}
                startDate={startDate}
                endDate={endDate}
                onPickDate={handlePickDate}
              />
              <MonthGrid
                monthDate={nextMonth}
                startDate={startDate}
                endDate={endDate}
                onPickDate={handlePickDate}
              />
            </div>

            <Popover.Close className="w-full mt-4 py-2.5 bg-primary text-white rounded-xl font-bold text-sm hover:bg-on-primary-fixed-variant transition-colors">
              Apply
            </Popover.Close>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}
