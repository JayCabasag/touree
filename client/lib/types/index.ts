export interface Coordinator {
  id: string;
  name: string;
  avatarUrl: string;
}

interface QuoteRequestBase {
  id: string;
  slug: string;
  packageTitle: string;
  destinationLabel: string;
  dateRangeLabel: string;
  travelerCount: number;
  notes?: string;
}

export interface QuoteRequestOffersReceived extends QuoteRequestBase {
  status: "offers_received";
  offerCount: number;
  priceRangeMin: number;
  priceRangeMax: number;
  coordinators: Coordinator[];
}

export interface QuoteRequestAwaitingOffers extends QuoteRequestBase {
  status: "awaiting_offers";
  budget: number;
  priceRangeMin: number;
  priceRangeMax: number;
  coordinatorsContactedCount: number;
}

export interface QuoteRequestBooked extends QuoteRequestBase {
  status: "booked";
  totalPrice: number;
  bookedDateLabel: string;
  coordinator: Coordinator;
}

export type QuoteRequest =
  | QuoteRequestOffersReceived
  | QuoteRequestAwaitingOffers
  | QuoteRequestBooked;

// QUOTE OFFERS
export interface OfferCoordinator {
  id: string;
  name: string;
  agencyName: string;
  avatarUrl: string;
  rating: number;
}

export interface Offer {
  id: string;
  coordinator: OfferCoordinator;
  packageTitle: string;
  tags: string[];
  totalPrice: number;
  /** Visually highlights this offer as recommended/best value */
  highlightLabel?: string;
}

export interface AcceptedOffer {
  packageTitle: string;
  tags: string[];
  totalPrice: number;
  coordinator: Pick<OfferCoordinator, "name" | "agencyName" | "avatarUrl">;
}
