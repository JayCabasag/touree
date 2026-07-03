import { OfferCard } from "@/components/offer-card";
import { AcceptedOffer, Offer } from "@/lib/types";

interface OffersSectionProps {
  offers: Offer[];
  acceptedOffer?: AcceptedOffer | null;
  totalPaid?: number;
  onViewOffer?: (offer: Offer) => void;
  onViewComparativeMatrix?: () => void;
  onViewBookingDetails?: () => void;
}

export function OffersSection({
  offers,
  acceptedOffer,
  totalPaid,
  onViewOffer,
  onViewComparativeMatrix,
  onViewBookingDetails,
}: OffersSectionProps) {
  if (acceptedOffer) {
    return (
      <section className="mb-section-gap">
        <div className="bg-white border border-outline-variant/30 rounded-2xl p-8 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 pb-6 border-b border-outline-variant/30">
            <div className="flex items-center gap-4">
              <div className="bg-tertiary-container/10 p-3 rounded-full">
                <span className="material-symbols-outlined text-tertiary text-[32px]">
                  verified
                </span>
              </div>
              <div>
                <h2 className="font-headline-lg text-headline-lg">
                  Booking Confirmed
                </h2>
                <p className="text-on-surface-variant">
                  Your luxury retreat is officially secured.
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-label-sm text-on-surface-variant uppercase">
                Total Paid
              </p>
              <p className="text-headline-lg font-extrabold text-primary">
                ${(totalPaid ?? acceptedOffer.totalPrice).toLocaleString()}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
            <div>
              <h4 className="text-label-sm text-on-surface-variant uppercase mb-4">
                Selected Package
              </h4>
              <h3 className="text-headline-md font-bold mb-4">
                {acceptedOffer.packageTitle}
              </h3>
              <div className="flex flex-wrap gap-2">
                {acceptedOffer.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-surface-container px-3 py-1 rounded-full text-label-sm text-on-primary-container"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-label-sm text-on-surface-variant uppercase mb-4">
                Your Coordinator
              </h4>
              <div className="flex items-center gap-4">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  alt={`Portrait of coordinator ${acceptedOffer.coordinator.name}`}
                  src={acceptedOffer.coordinator.avatarUrl}
                />
                <div className="flex flex-col">
                  <span className="font-bold text-on-surface">
                    {acceptedOffer.coordinator.name}
                  </span>
                  <span className="text-label-sm text-on-surface-variant">
                    {acceptedOffer.coordinator.agencyName}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={onViewBookingDetails}
            className="w-full md:w-auto px-8 py-4 bg-primary text-white rounded-xl font-bold text-body-md hover:bg-on-primary-fixed-variant transition-all shadow-md"
          >
            View Booking Details
          </button>
        </div>
      </section>
    );
  }

  if (offers.length === 0) {
    return (
      <section className="mb-section-gap">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <h2 className="font-headline-lg text-headline-lg">
              Offers Received
            </h2>
          </div>
          <button
            onClick={onViewComparativeMatrix}
            className="flex items-center gap-2 text-primary font-bold hover:underline"
          >
            <span className="material-symbols-outlined">compare_arrows</span>
            View Comparative Matrix
          </button>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-12 rounded-xl border border-outline-variant/30 text-center">
            <span className="material-symbols-outlined text-primary text-[48px] mb-4">
              pending_actions
            </span>
            <h3 className="text-headline-md font-bold mb-2">
              No offers received yet
            </h3>
            <p className="text-on-surface-variant max-w-xl mx-auto">
              Our expert coordinators are reviewing your request and will send
              proposals soon. You&apos;ll be notified as soon as the first
              itinerary is ready for your review.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-section-gap">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <h2 className="font-headline-lg text-headline-lg">Offers Received</h2>
          <span className="bg-primary text-white text-label-sm px-3 py-1 rounded-full">
            {offers.length} New
          </span>
        </div>
        <button
          onClick={onViewComparativeMatrix}
          className="flex items-center gap-2 text-primary font-bold hover:underline"
        >
          <span className="material-symbols-outlined">compare_arrows</span>
          View Comparative Matrix
        </button>
      </div>

      <div className="space-y-6">
        {offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} onViewOffer={onViewOffer} />
        ))}
      </div>
    </section>
  );
}
