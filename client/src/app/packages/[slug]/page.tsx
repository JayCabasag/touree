import { PackageDetails } from "@/components/package-details";
import { Container } from "@/components/ui/container";

export default async function PackageDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <Container>
      <PackageDetails />
    </Container>
  );
}
