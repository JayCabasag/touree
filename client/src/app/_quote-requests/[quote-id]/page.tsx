"use client";

import { QuoteDetails } from "@/components/quote-details";
import { quoteRequests } from "@/components/quote-requests";
import { Container } from "@/components/ui/container";
import { notFound } from "next/navigation";

export default function QuoteDetailsPage() {
  const request = quoteRequests.find((r) => r.id === "1");
  if (!request) return notFound();

  return (
    <Container>
      <QuoteDetails request={request} />
    </Container>
  );
}
