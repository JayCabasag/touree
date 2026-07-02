import { AuthPageLayout } from "@/components/layout/AuthPageLayout";
import { SignupForm } from "@/components/signup-form";

export default function SignUpPage() {
  return (
    <AuthPageLayout
      heroImageUrl="/images/signup-panel-bg.png"
      heroImageAlt="A breathtaking, cinematic view of a luxury infinity pool overlooking the turquoise Mediterranean coast of Amalfi at sunset."
      heading="Create your account"
      subheading="Enter your details to join our premium travel marketplace."
    >
      <SignupForm />
    </AuthPageLayout>
  );
}
