import { Coordinator } from "./coordinator";

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
