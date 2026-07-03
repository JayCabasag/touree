interface AuthHeroPanelProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
}

export function AuthHeroPanel({
  imageUrl,
  imageAlt,
  title,
  description,
}: AuthHeroPanelProps) {
  return (
    <div
      data-slot="auth-hero-panel"
      className="hidden lg:block relative min-h-162"
    >
      <div
        data-slot="auth-hero-panel-image"
        className="absolute inset-0 bg-cover bg-center"
        role="img"
        aria-label={imageAlt}
        style={{
          backgroundImage: `url("${imageUrl}")`,
        }}
      />
      <div
        data-slot="auth-hero-panel-overlay"
        className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"
      />
      <div
        data-slot="auth-hero-panel-content"
        className="absolute bottom-12 left-12 right-12 text-white"
      >
        <h2 className="font-headline-lg text-headline-lg mb-4">{title}</h2>
        <p className="font-body-lg text-body-lg opacity-90">{description}</p>
      </div>
    </div>
  );
}
