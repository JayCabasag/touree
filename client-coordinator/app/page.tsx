import { Stats } from "@/components/stats";
import { PendingBookings } from "@/components/pending-bookings";
import { RecentActivities } from "@/components/recent-activities";
import { UpcommingDepartures } from "@/components/upcoming-departures";
import { Container } from "@/components/ui/container";
import { Dashboard } from "@/components/dashboard";

export default function Home() {
  return (
    <Container>
      <Dashboard />
    </Container>
  );
}
