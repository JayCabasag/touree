"use client";

import { useRouter } from "next/navigation";

export function QuoteRequestHeader() {
  const router = useRouter();

  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
      <div>
        <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">
          Quote Requests
        </h1>
        <p className="font-body-md text-text-secondary">
          Manage your active custom itinerary inquiries and reviewer offers from
          top-tier coordinators.
        </p>
      </div>

      <button
        onClick={() => router.push("/quote-requests/create")}
        className="bg-primary flex items-center justify-center gap-4 hover:bg-surface-tint text-on-primary px-8 py-4 rounded-xl font-bold transition-all shadow-lg active:scale-95"
      >
        <span className="material-symbols-outlined">add</span>
        Request Quote
      </button>
    </div>
  );
}
