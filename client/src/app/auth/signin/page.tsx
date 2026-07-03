import { AuthHeroPanel } from "@/components/auth-hero-panel";
import { AuthPageLayout } from "@/components/layout/AuthPageLayout";
import { SigninForm } from "@/components/signin-form";

export default function SignInPage() {
  return (
    <AuthPageLayout
      heroImageUrl="/images/signin-panel-bg.png"
      heroImageAlt="Touree curated travel experience"
      heading="Discover the world's most curated experiences."
      subheading="Experience travel like never before with Touree's premium marketplace."
    >
      <SigninForm />
    </AuthPageLayout>
  );
}
