export function RequestQuoteCTA() {
  return (
    <section className="mb-section-gap px-4 md:px-margin-desktop max-w-7xl mx-auto mb-12">
      <div className="bg-inverse-surface rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-10 overflow-hidden relative">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary opacity-10 rounded-full blur-3xl"></div>
        <div className="flex-1 space-y-6 z-10 text-center md:text-left">
          <h2 className="text-white font-headline-lg text-4xl">
            Can't find what you're looking for?
          </h2>
          <p className="text-white/80 text-body-lg">
            Our travel coordinators can build a completely custom itinerary
            tailored to your specific dreams and budget. Request a quote to get
            started.
          </p>
          <button className="bg-primary hover:bg-surface-tint text-on-primary px-10 py-4 rounded-xl font-bold transition-all shadow-lg inline-flex items-center gap-2">
            Request a Custom Quote
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4 z-10">
          <div className="space-y-4">
            <div className="h-40 rounded-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
              <img
                className="w-full h-full object-cover"
                data-alt="A detailed close-up of premium travel essentials: a vintage leather passport holder, a high-end camera, and a gold-rimmed compass on a dark wood surface. The lighting is moody and professional, using a corporate minimalist aesthetic with deep red accents to align with the Touree brand's luxury identity."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTc17VlLDGl3lTAWkerBEKPaU-HFZihCr52ZbdP5gTBm8lUcu11586LOxvltDkYIEXsaWCeNz6f-ZVUvQcTghOBilyD5AV9BEqjmEUMCx6FXYNWDubnfqK2pYnBPaJGlq9wEVZKceVmYspHQFuASvhrAw_J54WsFlnRSCGsaI0QoEXyfjnLRMvGxD2Q7VyTsD-vsK6Irg8CcP0fyFwai4svHX2gQBzIMFI847GwJS2UdoHOb1GJHhX38Xi6xY_UYo86mE_WPNfS2A"
              />
            </div>
            <div className="h-56 rounded-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
              <img
                className="w-full h-full object-cover"
                data-alt="A scenic wide-angle view of a luxury modern cabin nestled in a serene alpine forest with large glass windows reflecting the surrounding pine trees. The lighting is cool, crisp early morning light, emphasizing peaceful solitude and high-end vacationing. The style is minimalist and elegant, matching the Touree travel aesthetic."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWEL41fu8KZNgkSMFcAvEIHMpTjW4z3t1DnLalZVRveBGJRJsYOEFi5WB8CsVLr59edFcMM8tFVEQj0nh3aNXlUmwui36qx7BV5QsRHf94Gyma00wREyAtOeGrqECYxEaJ7CcdlSBwvgS7MViczYbDSZPvCpEhOz_83Aq60om6mMo26nGir5YAKt8rRWDzRS-Ab48Xv_nb0sPJ03Np0z5V8M5rJ7Y1mVCHdPU9kUQxVUN3p9Z4LGBesjPYySCBknHQ7f_7KFQq6q0"
              />
            </div>
          </div>
          <div className="space-y-4 pt-12">
            <div className="h-56 rounded-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
              <img
                className="w-full h-full object-cover"
                data-alt="A pristine turquoise lake in the Canadian Rockies reflecting a clear blue sky, with a red canoe floating peacefully in the center. The composition is clean and focused, using a bright light-mode palette. The overall mood is aspirational and quiet, echoing the premium and reliable nature of the Touree travel platform."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIXCYEhtSFLHA_Pubk7vfaCH3IXZIPm2QGB_AXz7mfnWOV4LF9mX6Kz_Zwxyy5fPxnAWo1JWUs6-T5y_phoeji0kmRJYbME26Bk8GYIYhDnFpygqPLMrTi4NNrP4vCcjtIsLMZJ9RS9VPT9JazowN5P4mXcLPiJ_dkGBd4Hgvz2TALIvpm8CC55sFc0KJWUyXSyvwDRF2U1rVwb87hpb4DT2fFt5VYu9SaviVdfQYqwXpE9ZjlNUa2fdiimGH1C7NIecOlGbS3RRE"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
