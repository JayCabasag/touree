export function OfferDetails() {
  return (
    <div className="mx-12">
      <section className="mb-12 grid grid-cols-1 md:grid-cols-12 gap-gutter ">
        <div className="md:col-span-8 bg-surface-container-lowest p-8 rounded-lg shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-label-sm font-label-sm text-outline uppercase">
              Selected Package
            </span>
            <h2 className="text-headline-md font-headline-md text-on-surface mt-1">
              The Positano Pearl Experience
            </h2>
          </div>
          <div className="h-12 w-px bg-outline-variant hidden md:block"></div>
          <div className="text-center md:text-left">
            <span className="text-label-sm font-label-sm text-outline uppercase">
              Total Price
            </span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-headline-md font-headline-md text-secondary-container tracking-tighter">
                $6,450
              </span>
              <span className="text-body-md font-body-md text-outline">
                USD
              </span>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 bg-surface-container-lowest p-8 rounded-lg shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] flex items-center gap-4">
          <div className="relative">
            <img
              className="w-16 h-16 rounded-full object-cover"
              data-alt="A professional close-up portrait of Elena Rossi, a luxury travel coordinator. She has a warm, welcoming smile and is dressed in a smart navy blue blazer. The background is a soft-focus Amalfi Coast balcony at sunset, using a bright, high-key lighting style to match the premium brand aesthetic."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXVFGuAadrBNSwqKHHOhWOI-HvPO-0wWHpqguJAxdgU_gjX2O4fomVLl6kCCsym80qB7IdUae0uZznNA6sBj07RH6Se26woK4YMBq9wPkrW4HZwBIxy7HOrpcTmZf-Trd60_7ko7LWgfk15Z8f99qFAQQ_MR5uNTuotBxtke44ljcGehlmHWodx9W5vsPkBFRChMDLHSJlxrLWfn2VLTv7DBsFh4KWB-DYEitQ0-YZYaXpjEchnKo8R-JL5dRhpfs4i0BDQQsboxk"
            />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div>
            <span className="text-label-sm font-label-sm text-outline uppercase">
              Coordinator
            </span>
            <h3 className="text-body-lg font-body-lg font-bold text-on-surface">
              Elena Rossi
            </h3>
            <div className="flex items-center text-status-warning mt-1">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "FILL' 1" }}
              >
                star
              </span>
              <span className="text-outline text-label-sm font-label-sm ml-2">
                4.9 (124 reviews)
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">inventory_2</span>
              </div>
              <h3 className="font-headline-md text-headline-md">
                What's Included
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-lg bg-surface-container-low border border-transparent hover:border-outline-variant transition-all">
                <span className="material-symbols-outlined text-primary mb-2">
                  hotel
                </span>
                <h4 className="font-bold text-on-surface">
                  5-Star Cliffside Villa
                </h4>
                <p className="text-on-surface-variant text-body-md mt-1">
                  7 nights in a private villa overlooking the Tyrrhenian Sea.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-surface-container-low border border-transparent hover:border-outline-variant transition-all">
                <span className="material-symbols-outlined text-primary mb-2">
                  directions_boat
                </span>
                <h4 className="font-bold text-on-surface">
                  Private Capri Tour
                </h4>
                <p className="text-on-surface-variant text-body-md mt-1">
                  Full-day luxury yacht excursion around Capri and the Blue
                  Grotto.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-surface-container-low border border-transparent hover:border-outline-variant transition-all">
                <span className="material-symbols-outlined text-primary mb-2">
                  restaurant
                </span>
                <h4 className="font-bold text-on-surface">
                  2 Specialty Dinners
                </h4>
                <p className="text-on-surface-variant text-body-md mt-1">
                  Curated tasting menus at Michelin-starred restaurants in
                  Amalfi.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-surface-container-low border border-transparent hover:border-outline-variant transition-all">
                <span className="material-symbols-outlined text-primary mb-2">
                  flight_takeoff
                </span>
                <h4 className="font-bold text-on-surface">
                  VIP Airport Transfers
                </h4>
                <p className="text-on-surface-variant text-body-md mt-1">
                  Private chauffeur service from Naples International Airport.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">map</span>
              </div>
              <h3 className="font-headline-md text-headline-md">
                Itinerary Highlights
              </h3>
            </div>
            <ul className="space-y-6">
              <li className="flex gap-6 group">
                <div className="flex-none flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div className="w-px h-full bg-outline-variant mt-2"></div>
                </div>
                <div className="pb-6">
                  <h4 className="font-bold text-body-lg text-on-surface">
                    Arrival &amp; Sunset Aperitivo
                  </h4>
                  <p className="text-on-surface-variant mt-2 text-body-md">
                    Settle into your villa and enjoy a curated selection of
                    local wines and appetizers as the sun dips below the Amalfi
                    horizon.
                  </p>
                </div>
              </li>
              <li className="flex gap-6 group">
                <div className="flex-none flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div className="w-px h-full bg-outline-variant mt-2"></div>
                </div>
                <div className="pb-6">
                  <h4 className="font-bold text-body-lg text-on-surface">
                    Lemon Grove Workshop
                  </h4>
                  <p className="text-on-surface-variant mt-2 text-body-md">
                    A private morning visit to the ancient Aceto lemon groves,
                    followed by a hands-on limoncello-making masterclass.
                  </p>
                </div>
              </li>
              <li className="flex gap-6 group">
                <div className="flex-none flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                </div>
                <div className="pb-6">
                  <h4 className="font-bold text-body-lg text-on-surface">
                    Path of the Gods Hike
                  </h4>
                  <p className="text-on-surface-variant mt-2 text-body-md">
                    A guided trekking experience through the legendary Sentiero
                    degli Dei with a gourmet picnic lunch provided.
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </div>

        <div className="space-y-8">
          <section className="bg-surface-container p-8 rounded-lg relative overflow-hidden">
            <span className="material-symbols-outlined absolute -top-4 -right-4 text-9xl text-white/20 select-none">
              format_quote
            </span>
            <h3 className="font-headline-md text-headline-md mb-6 relative z-10">
              Coordinator's Note
            </h3>
            <p className="text-body-md text-on-surface leading-relaxed relative z-10">
              "Ciao! I've designed this experience to capture the true essence
              of the Amalfi Coast beyond the typical tourist paths. The villa
              I've selected offers the best sunset views in Positano, and the
              dinner reservations are at my personal favorite local gems. I
              believe this itinerary perfectly balances luxury with authentic
              Italian soul. I'm here to handle every detail for you."
            </p>
            <div className="mt-8 pt-6 border-t border-outline-variant/30 flex items-center gap-4">
              <img
                className="w-12 h-12 rounded-full object-cover"
                data-alt="A small circular avatar of Elena Rossi, smiling and looking professional. High quality digital photography, bright white background, professional lighting."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLLpavCa-AoD-HQotms1SfL5VsD9JExCdO0UEyM7pp28fwaZ3IUeeUd3a7KnUZdV-zjuoyapgeB_oWlYFOVAmUET-_PaokBcE_nZrX3XVN27uQYLNnoZS87vuO587rrzrjDmoqX8L1U-dsgTVPjgdhIVGWmFlGuIwFhOy38xTTMcgT7KdzuzPmQHIRkJBLnIsISCgNeQqAyNr6gC8A6egcE6FVrQrK9XWsDXIdJPYfQkrbM1iHMayvxFJYE6ShiUre8WNsPVcQH8Q"
              />
              <div>
                <p className="font-bold text-on-surface">Elena Rossi</p>
                <p className="text-label-sm font-label-sm text-outline uppercase">
                  Premium Coordinator
                </p>
              </div>
            </div>
          </section>
          <div className="bg-white p-8 rounded-lg border border-outline-variant/50 shadow-sm">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-status-warning">
                info
              </span>
              Offer Validity
            </h4>
            <p className="text-on-surface-variant text-body-md">
              This offer and the quoted pricing are guaranteed for the next{" "}
              <span className="font-bold text-on-surface">48 hours</span>.
              Please accept to secure your villa and tour dates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
