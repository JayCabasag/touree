import { AuthHeroPanel } from "../auth-hero-panel";

interface AuthPageLayoutProps {
  heroImageUrl: string;
  heroImageAlt: string;
  heading: string;
  subheading: string;
  children: React.ReactNode;
}

export function AuthPageLayout({
  heroImageUrl,
  heroImageAlt,
  heading,
  subheading,
  children,
}: AuthPageLayoutProps) {
  return (
    <div
      data-slot="auth-page-layout"
      className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-xl overflow-hidden auth-card-shadow my-12 mx-auto"
    >
      <AuthHeroPanel
        imageUrl={heroImageUrl}
        imageAlt={heroImageAlt}
        title="Discover the world's most curated experiences."
        description="Experience travel like never before with Touree's premium marketplace."
      />

      <div className="p-8 md:p-16 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <div className="mb-10 text-center lg:text-left">
            <h1 className="font-headline-lg text-headline-lg mb-2 text-on-surface">
              {heading}
            </h1>
            <p className="font-body-md text-body-md text-text-secondary">
              {subheading}
            </p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
