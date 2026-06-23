import { QuoteRequest } from "@/lib/types";

interface QuoteSummaryProps {
  request: QuoteRequest;
}

export function QuoteSummary({ request }: QuoteSummaryProps) {
  return (
    <>
      <h1 className="font-headline-lg text-headline-lg mb-8">
        Amalfi Coast Luxury Retreat
      </h1>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-12">
        <div className="flex flex-col gap-4 lg:col-span-12">
          <div className="grid grid-cols-2 gap-4 h-full lg:grid-cols-4">
            <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between border border-outline-variant/30">
              <span className="material-symbols-outlined text-primary">
                calendar_month
              </span>
              <div>
                <p className="text-label-sm text-on-surface-variant uppercase">
                  Date Range
                </p>
                <p className="font-headline-md text-[20px] text-on-surface">
                  Oct 12 - 19
                </p>
              </div>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between border border-outline-variant/30">
              <span className="material-symbols-outlined text-primary">
                group
              </span>
              <div>
                <p className="text-label-sm text-on-surface-variant uppercase">
                  Guests
                </p>
                <p className="font-headline-md text-[20px] text-on-surface">
                  4 Adults
                </p>
              </div>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between border border-outline-variant/30">
              <span className="material-symbols-outlined text-primary">
                payments
              </span>
              <div>
                <p className="text-label-sm text-on-surface-variant uppercase">
                  Budget
                </p>
                <p className="font-headline-md text-[20px] text-on-surface">
                  $5k - $7.5k
                </p>
              </div>
            </div>
            <div className="bg-tertiary-fixed p-6 rounded-xl flex flex-col justify-between">
              <span className="material-symbols-outlined text-on-tertiary-fixed-variant">
                schedule
              </span>
              <div>
                <p className="text-label-sm text-on-tertiary-fixed-variant uppercase">
                  Status
                </p>
                <p className="font-headline-md text-[20px] text-on-tertiary-fixed-variant">
                  Pending
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-outline-variant/30 shadow-sm grow lg:flex lg:gap-8">
            <div className="flex items-center gap-2 mb-4 lg:mb-0">
              <span className="material-symbols-outlined text-primary">
                format_quote
              </span>
              <h3 className="font-bold text-on-surface">Traveler Notes</h3>
            </div>
            <p className="text-on-surface-variant italic leading-relaxed">
              &quot;We are celebrating a 30th anniversary. We&apos;d love a
              balcony with a sea view in Positano and a private boat tour to
              Capri. Fine dining recommendations for the actual anniversary
              night are a must.&quot;
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
