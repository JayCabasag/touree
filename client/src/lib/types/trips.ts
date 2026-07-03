// lib/types/booking.ts

/**
 * Status values a booking can have. Drives both the label shown to the user
 * and the styling applied via `statusClass`.
 */
type BookingStatus =
  | "CONFIRMED"
  | "WAITING FOR CONFIRMATION"
  | "COMPLETED"
  | "CANCELLED";

/**
 * Fields shared by every booking, regardless of status or detail level.
 */
interface BaseBooking {
  id: string;
  status: BookingStatus;
  /** Tailwind classes controlling the status badge's background/text color */
  statusClass: string;
  image: string;
  title: string;
  /** Pre-formatted date range string, e.g. "SEP 12 — SEP 20, 2024" */
  dates: string;
}

/**
 * A booking with full details — price, traveler count, and either
 * flight/accommodation info (active bookings) or refund info (cancelled).
 */
interface DetailedBooking extends BaseBooking {
  price: string;
  travelers: string;
  coordinator: string;
}

/**
 * An active or completed booking with confirmed logistics.
 */
interface ConfirmedBooking extends DetailedBooking {
  status: "CONFIRMED" | "COMPLETED";
  flight: string;
  accommodation: string;
  refundStatus?: never;
}

/**
 * A cancelled booking — swaps flight/accommodation for refund status.
 */
interface CancelledBooking extends DetailedBooking {
  status: "CANCELLED";
  refundStatus: string;
  flight?: never;
  accommodation?: never;
}

/**
 * A booking shown with just a narrative description instead of full
 * logistics — typically upcoming bookings still pending confirmation,
 * or older completed bookings where line-item details aren't surfaced.
 */
interface SummaryBooking extends BaseBooking {
  status: "WAITING FOR CONFIRMATION" | "COMPLETED";
  description: string;
  price?: never;
  travelers?: never;
  flight?: never;
  accommodation?: never;
  coordinator?: never;
  refundStatus?: never;
}

/**
 * Any booking card the UI can render. Narrow via:
 *
 *   if ("description" in booking) { ...SummaryBooking... }
 *   else if (booking.status === "CANCELLED") { ...CancelledBooking... }
 *   else { ...ConfirmedBooking... }
 */
type Booking = ConfirmedBooking | CancelledBooking | SummaryBooking;

/**
 * A booking that has full, named-coordinator detail — i.e. NOT a
 * SummaryBooking. Use this where the UI needs `coordinator`/`title` to
 * always be present, such as the Cancel Booking modal's confirmation copy.
 */
type DetailedBookingVariant = ConfirmedBooking | CancelledBooking;

/**
 * The three booking lists rendered on the bookings page.
 */
interface BookingsData {
  upcomingBookings: Booking[];
  pastBookings: Booking[];
  cancelledBookings: CancelledBooking[];
}

export type {
  BookingStatus,
  BaseBooking,
  DetailedBooking,
  ConfirmedBooking,
  CancelledBooking,
  SummaryBooking,
  DetailedBookingVariant,
  Booking,
  BookingsData,
};
