"use client";

const features = [
  {
    id: 1,
    icon: "verified_user",
    title: "Verified Providers",
    description:
      "Every tour operator and local guide is rigorously vetted for quality, safety, and reliability.",
  },
  {
    id: 2,
    icon: "support_agent",
    title: "Global Support",
    description:
      "Our concierge team is available 24/7 to assist with any changes or emergencies during your trip.",
  },
  {
    id: 3,
    icon: "star",
    title: "Elite Coordinators",
    description:
      "Professional travel designers who handle all the fine details so you can focus on the experience.",
  },
];

export function WhyChooseTouree() {
  return (
    <section className="py-16 px-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-20 items-center">
        <div className="flex-1">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">
            Why Travelers Trust Touree
          </h2>
          <p className="text-on-surface-variant mb-10 text-lg">
            We bridge the gap between logistical precision and the emotional
            excitement of discovering the world.
          </p>

          <div className="space-y-8">
            {features.map((feature) => (
              <div key={feature.id} className="flex gap-6">
                <div className="shrink-0 w-14 h-14 bg-primary-container/10 rounded-2xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    {feature.icon}
                  </span>
                </div>
                <div>
                  <h4 className="font-headline-md text-xl mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-on-surface-variant">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZUW3nlKBedBA9Ic4ap_CUfu6777NCff-PuIKyz9L6BKNwm10WUA4v_jXRm3IvGkPIOMxAMaupD14KsoG3n4l5PBVv2KJFkBpefjaxdlUMGZ8tY5lJ-U-nWTjPFPh3mgnRBHHL8CiiCSlEzdwcE9kJonYDe3TeQR18vspLGpwodh4HqAD5gJw4xF7f8iTpcGGupGxGlWuKufguO6ToPhy1ADNXwWa_qsUMIsOeot3MfgcxvU4MtmPxk7WdYcIRMPS5z4REbBKMVSA"
              alt="Travel coordinator"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-container/20 rounded-full blur-3xl z-0"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl z-0"></div>
        </div>
      </div>
    </section>
  );
}
