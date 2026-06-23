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
  highlightLabel?: string;
}

export interface AcceptedOffer {
  packageTitle: string;
  tags: string[];
  totalPrice: number;
  coordinator: Pick<OfferCoordinator, "name" | "agencyName" | "avatarUrl">;
}
