import { VerifyEmailForm } from "@/components/verify-email-form";

export default function VerifyEmailPage() {
  return (
    <main className="grow flex items-center justify-center relative py-section-gap px-margin-mobile my-12">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary opacity-5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary opacity-5 blur-[120px] rounded-full"></div>

      <VerifyEmailForm />
    </main>
  );
}
