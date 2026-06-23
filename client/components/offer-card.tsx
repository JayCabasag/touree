import { Offer } from "@/lib/types";

interface OfferCardProps {
  offer: Offer;
  onViewOffer?: (offer: Offer) => void;
}

export function OfferCard({ offer, onViewOffer }: OfferCardProps) {
  const isHighlighted = Boolean(offer.highlightLabel);

  return (
    <div
      className={`offer-card glass-card p-6 rounded-xl transition-all duration-300 flex flex-col md:flex-row gap-8 items-start md:items-center ${
        isHighlighted ? "border-l-4 border-primary/30" : ""
      }`}
    >
      <div className="shrink-0 flex items-center gap-4 w-full md:w-64">
        <img
          className="w-16 h-16 rounded-full object-cover"
          alt={`Portrait of coordinator ${offer.coordinator.name}`}
          src={offer.coordinator.avatarUrl}
        />
        <div>
          <h4 className="font-bold text-on-surface">
            {offer.coordinator.name}
          </h4>
          <p className="text-label-sm text-on-surface-variant">
            {offer.coordinator.agencyName}
          </p>
          <div className="flex items-center gap-1 mt-1">
            <span
              className="material-symbols-outlined text-status-warning text-[16px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <span className="text-label-sm font-bold">
              {offer.coordinator.rating.toFixed(1)}
            </span>
          </div>
        </div>
      </div>

      <div className="grow">
        <div className="flex items-center gap-2 mb-1">
          {offer.highlightLabel && (
            <span className="text-[10px] font-bold text-primary uppercase tracking-tighter bg-primary/10 px-2 py-0.5 rounded">
              {offer.highlightLabel}
            </span>
          )}
          <h3 className="text-headline-md font-bold">{offer.packageTitle}</h3>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {offer.tags.map((tag) => (
            <span
              key={tag}
              className="bg-surface-container px-3 py-1 rounded-full text-label-sm text-on-primary-container"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:items-end gap-3 w-full md:w-48">
        <div className="text-right">
          <p className="text-label-sm text-on-surface-variant">Total Price</p>
          <p className="text-headline-md font-extrabold text-primary">
            ${offer.totalPrice.toLocaleString()}
          </p>
        </div>
        <button
          onClick={() => onViewOffer?.(offer)}
          className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-on-primary-fixed-variant transition-colors shadow-md"
        >
          View Offer
        </button>
      </div>
    </div>
  );
}
