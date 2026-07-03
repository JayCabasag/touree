import ProfileSetupForm from "@/components/profile-setup-form";

export default function ProfilePage() {
  return (
    <div className="relative z-10 w-full max-w-120 mx-auto my-12">
      <div className="glass-card shadow-[0_20px_50px_rgba(0,0,0,0.06)] rounded-xl border border-white p-8 md:p-10">
        <div className="mb-8">
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2">
            Complete your profile
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Just one more step to start your journey.
          </p>
        </div>

        <ProfileSetupForm />
        <p className="mt-8 text-center font-label-sm text-label-sm text-outline">
          By completing setup, you agree to our
          <a
            className="text-secondary hover:underline underline-offset-4"
            href="#"
          >
            Terms of Service
          </a>
        </p>
      </div>
    </div>
  );
}
