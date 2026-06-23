"use client";

import { QuoteRequest } from "@/lib/types";
import { useRouter } from "next/navigation";

interface QuoteRequestCardProps {
  request: QuoteRequest;
}

export function QuoteRequestCard({ request }: QuoteRequestCardProps) {
  const router = useRouter();

  return (
    <div
      className={`glass-card ambient-shadow rounded-xl p-6 border border-outline-variant/30 transition-all group ${
        request.status === "booked"
          ? "opacity-90"
          : "hover:border-primary-fixed"
      }`}
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 flex flex-col">
          <div className="flex flex-col md:flex-row justify-between md:items-start gap-2">
            <div>
              <h3
                className={`font-headline-md text-headline-md text-on-surface ${
                  request.status !== "booked"
                    ? "group-hover:text-primary transition-colors"
                    : ""
                }`}
              >
                {request.packageTitle}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-text-secondary font-semibold">
                    Timeline
                  </p>
                  <p className="text-sm font-medium">
                    {request.status === "booked"
                      ? request.bookedDateLabel
                      : request.dateRangeLabel}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-text-secondary font-semibold">
                    Travelers
                  </p>
                  <p className="text-sm font-medium">
                    {request.travelerCount} Guests
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-text-secondary font-semibold">
                    {request.status === "booked" ? "Total Paid" : "Budget"}
                  </p>
                  <p
                    className={`text-sm font-medium ${
                      request.status === "booked"
                        ? "text-on-surface"
                        : "text-primary"
                    }`}
                  >
                    $
                    {request.status === "booked"
                      ? request.totalPrice.toLocaleString()
                      : `${request.priceRangeMin.toLocaleString()} - ${request.priceRangeMax.toLocaleString()}`}
                  </p>
                </div>

                <div className="md:text-right">
                  {request.status === "offers_received" && (
                    <span className="px-2.5 py-1 bg-tertiary-container text-on-tertiary-container font-label-sm text-[11px] rounded-full inline-block">
                      {request.offerCount} Offers Received
                    </span>
                  )}

                  {request.status === "awaiting_offers" && (
                    <span className="px-2.5 py-1 bg-surface-variant text-on-surface-variant font-label-sm text-[11px] rounded-full flex items-center justify-center md:justify-end gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-status-warning animate-pulse" />
                      Awaiting Offers
                    </span>
                  )}

                  {request.status === "booked" && (
                    <span className="px-2.5 py-1 bg-secondary-container text-on-secondary-container font-label-sm text-[11px] rounded-full inline-block">
                      Booked &amp; Confirmed
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {request.notes && (
            <div className="mt-4 bg-surface-container-low/50 p-3 rounded-lg border border-outline-variant/20">
              <p className="text-[10px] uppercase tracking-widest text-text-secondary font-semibold mb-1">
                Additional Notes
              </p>
              <p className="text-sm text-on-surface-variant line-clamp-2 italic">
                &quot;{request.notes}&quot;
              </p>
            </div>
          )}

          {request.status === "offers_received" && (
            <div className="mt-4 flex items-center justify-between border-t border-outline-variant pt-4">
              <div className="flex -space-x-2">
                {request.coordinators.map((coordinator) => (
                  <img
                    key={coordinator.id}
                    alt="Coordinator"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    src={coordinator.avatarUrl}
                  />
                ))}
              </div>
              <button
                onClick={() => router.push("/quote-requests/1")}
                className="text-secondary font-label-sm text-label-sm flex items-center gap-1 hover:underline font-bold"
              >
                View Offers (Range ${request.priceRangeMin.toLocaleString()} - $
                {request.priceRangeMax.toLocaleString()}){" "}
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </button>
            </div>
          )}

          {request.status === "awaiting_offers" && (
            <div className="mt-4 flex items-center justify-between border-t border-outline-variant pt-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-surface-variantView Offers text-[18px]">
                    hourglass_top
                  </span>
                </div>
                <p className="font-body-md text-sm text-on-surface font-medium">
                  Waiting for coordinator offers
                </p>
              </div>
              <button
                onClick={() => router.push("/quote-requests/1")}
                className="bg-surface-container-high text-on-surface px-5 py-2 rounded-lg font-label-sm text-label-sm hover:bg-surface-container-highest transition-colors"
              >
                View Details
              </button>
            </div>
          )}

          {request.status === "booked" && (
            <div className="mt-4 flex items-center justify-between border-t border-outline-variant pt-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    check_circle
                  </span>
                </div>
                <p className="font-body-md text-sm text-on-surface font-medium">
                  Arranged by Coordinator {request.coordinator.name}
                </p>
              </div>
              <button
                onClick={() => router.push("/quote-requests/1")}
                className="bg-surface-container-high text-on-surface px-5 py-2 rounded-lg font-label-sm text-label-sm hover:bg-surface-container-highest transition-colors"
              >
                View Details
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
