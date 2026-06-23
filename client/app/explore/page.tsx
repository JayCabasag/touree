import { ExploreFilterBar } from "@/components/explore-filter-bar";
import { ExploreResultGrid } from "@/components/explore-result-grid";
import { Container } from "@/components/ui/container";

export default async function ExplorePage({
  searchParams,
}: {
  searchParams: Promise<{
    destination?: string;
    startDate?: string;
    endDate?: string;
    budgetMin?: string;
    budgetMax?: string;
    guests?: string;
  }>;
}) {
  const params = await searchParams;

  return (
    <Container>
      <ExploreFilterBar
        defaultDestination={params.destination ?? ""}
        defaultStartDate={params.startDate ? new Date(params.startDate) : null}
        defaultEndDate={params.endDate ? new Date(params.endDate) : null}
        defaultBudgetMin={params.budgetMin ? Number(params.budgetMin) : null}
        defaultBudgetMax={params.budgetMax ? Number(params.budgetMax) : null}
        defaultGuests={params.guests ? Number(params.guests) : null}
      />
      <ExploreResultGrid destination={params.destination ?? null} />
    </Container>
  );
}
