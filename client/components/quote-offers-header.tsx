"use client";

import { Menu } from "@base-ui/react/menu";

export type SortOption = "latest" | "lowest_price" | "highest_price";

const SORT_LABELS: Record<SortOption, string> = {
  latest: "Latest",
  lowest_price: "Lowest Price",
  highest_price: "Highest Price",
};

interface QuoteOffersHeaderProps {
  offerCount: number;
  destinationLabel: string;
  value: SortOption;
  onValueChange: (value: SortOption) => void;
}

export function QuoteOffersHeader({
  offerCount,
  destinationLabel,
  value,
  onValueChange,
}: QuoteOffersHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <h1 className="font-headline-lg text-headline-lg text-on-surface">
          Quote Offers
        </h1>
        <p className="text-text-secondary mt-2">
          You&apos;ve received {offerCount} custom proposals for your{" "}
          {destinationLabel} trip.
        </p>
      </div>

      <Menu.Root>
        <Menu.Trigger className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-lg border border-outline-variant/40 hover:border-primary transition-colors duration-200 focus:outline-none focus:border-primary">
          <span className="material-symbols-outlined text-primary text-[20px]">
            sort
          </span>
          <div className="flex flex-col items-start">
            <span className="font-label-sm text-[10px] text-text-secondary uppercase tracking-wider">
              Sort By
            </span>
            <span className="font-label-sm text-label-sm text-on-surface flex items-center gap-1">
              {SORT_LABELS[value]}
              <span className="material-symbols-outlined text-[16px]">
                expand_more
              </span>
            </span>
          </div>
        </Menu.Trigger>

        <Menu.Portal>
          <Menu.Positioner align="end" sideOffset={8} className="z-20">
            <Menu.Popup className="w-48 bg-white rounded-xl premium-shadow border border-outline-variant/40 overflow-hidden py-1 outline-none">
              <Menu.RadioGroup
                value={value}
                onValueChange={(v) => onValueChange(v as SortOption)}
              >
                {(Object.keys(SORT_LABELS) as SortOption[]).map((option) => (
                  <Menu.RadioItem
                    key={option}
                    value={option}
                    className="flex items-center justify-between px-4 py-3 font-label-sm text-label-sm text-on-surface hover:bg-surface-container transition-colors cursor-pointer outline-none data-highlighted:bg-surface-container"
                  >
                    {SORT_LABELS[option]}
                    <Menu.RadioItemIndicator className="text-primary">
                      <span className="material-symbols-outlined text-[18px]">
                        check
                      </span>
                    </Menu.RadioItemIndicator>
                  </Menu.RadioItem>
                ))}
              </Menu.RadioGroup>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>
    </div>
  );
}
