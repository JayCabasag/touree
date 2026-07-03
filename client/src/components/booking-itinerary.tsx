import { Dropdown } from "./ui/dropdown";

export function BookingItinerary() {
  return (
    <div className="mx-12">
      <section className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <nav className="flex items-center gap-2 mb-4 text-text-secondary">
              <span className="font-label-sm text-label-sm uppercase tracking-wider">
                Bookings
              </span>
              <span className="material-symbols-outlined text-[16px]">
                chevron_right
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider">
                Italy
              </span>
            </nav>
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-2">
              Trip Itinerary: Amalfi Coast Expedition
            </h1>
            <p className="text-text-secondary font-body-lg text-body-lg">
              A curated 8-day journey through the vertical gems of the
              Mediterranean.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 px-6 py-3 rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-all font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[18px]">
                event_busy
              </span>
              Cancel Trip
            </button>
            <div className="relative group">
              <Dropdown
                variant="default"
                icon={
                  <span className="material-symbols-outlined">
                    chat_bubble_outline
                  </span>
                }
                options={[
                  {
                    label: "Messenger",
                    href: "#",
                    icon: (
                      <span className="material-symbols-outlined">chat</span>
                    ),
                  },
                  {
                    label: "Telegram",
                    href: "#",
                    icon: (
                      <span className="material-symbols-outlined">send</span>
                    ),
                  },
                  {
                    label: "Other Apps",
                    href: "#",
                    icon: (
                      <span className="material-symbols-outlined">
                        more_horiz
                      </span>
                    ),
                  },
                ]}
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-white rounded-xl shadow-sm border border-outline-variant/30">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">calendar_today</span>
            </div>
            <div>
              <p className="font-label-sm text-label-sm text-text-secondary uppercase">
                Dates
              </p>
              <p className="font-body-md text-body-md font-bold">
                Sep 12 - Sep 20
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">group</span>
            </div>
            <div>
              <p className="font-label-sm text-label-sm text-text-secondary uppercase">
                Guests
              </p>
              <p className="font-body-md text-body-md font-bold">2 Adults</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">support_agent</span>
            </div>
            <div>
              <p className="font-label-sm text-label-sm text-text-secondary uppercase">
                Coordinator
              </p>
              <p className="font-body-md text-body-md font-bold">Elena Rossi</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <div>
              <p className="font-label-sm text-label-sm text-text-secondary uppercase">
                Region
              </p>
              <p className="font-body-md text-body-md font-bold">
                Amalfi Coast, IT
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-12 relative">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-32 flex flex-row md:flex-col items-center md:items-end gap-4 timeline-dot">
            <span className="text-primary font-bold text-headline-md">
              Day 1
            </span>
            <span className="text-text-secondary font-label-sm uppercase tracking-widest hidden md:block">
              Sep 12
            </span>
          </div>
          <div className="flex-1">
            <div className="itinerary-card bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col lg:flex-row">
              <div className="lg:w-1/3 h-64 lg:h-auto">
                <img
                  className="w-full h-full object-cover"
                  data-alt="A breathtaking golden hour view of the Villa Cimbrone terrace in Ravello. The sun sets over the sparkling Tyrrhenian Sea, casting long warm shadows across the white marble busts of the Infinity Terrace. The scene is elegant and peaceful, capturing the ultra-luxury travel experience with vibrant sunset colors and crisp architectural details."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkS0waP7xUYTRo0VvjY5yclqxwUkiq8cn9vJckrw01ANRs37ai3kixghLhUedo2GzqjOYB4Mdv8uCjU9ERSkEtjyPXUYJShPGKDy8flE29eTyaVcS_adG-SJKji-7vO65w4YUmNlEjoAy94JPIChQNjVtyI-DQKPXJIJzqZlvFXNerLSiUoS5H_tWaQ9--VZCJjJofQvdE3JX2BztbZqmp6FljHKDVKLARqwjuTGbMGQ4cbzZIlqW_CF9Rtqi-C5hBIt3-OelZBAI"
                />
              </div>
              <div className="p-8 lg:w-2/3">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-headline-md text-headline-md text-on-background">
                    Arrival &amp; Sunset Aperitivo
                  </h3>
                  <span className="bg-secondary-container text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Arrival
                  </span>
                </div>
                <p className="text-text-secondary mb-6">
                  Welcome to Ravello. Upon arrival at Naples International, your
                  private chauffeur will escort you to the prestigious Villa
                  Cimbrone. Spend your afternoon settling into the historic
                  surroundings before we meet at the Terrace of Infinity for
                  curated sunset cocktails and local antipasti.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-text-secondary">
                    <span className="material-symbols-outlined text-[18px]">
                      hotel
                    </span>
                    <span className="font-label-sm">Stay: Villa Cimbrone</span>
                  </div>
                  <div className="flex items-center gap-2 text-text-secondary">
                    <span className="material-symbols-outlined text-[18px]">
                      restaurant
                    </span>
                    <span className="font-label-sm">Dinner: Terrace Bar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-32 flex flex-row md:flex-col items-center md:items-end gap-4 timeline-dot">
            <span className="text-primary font-bold text-headline-md">
              Day 2
            </span>
            <span className="text-text-secondary font-label-sm uppercase tracking-widest hidden md:block">
              Sep 13
            </span>
          </div>
          <div className="flex-1">
            <div className="itinerary-card bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col lg:flex-row">
              <div className="lg:w-1/3 h-64 lg:h-auto">
                <img
                  className="w-full h-full object-cover"
                  data-alt="Vibrant, oversized Amalfi lemons hanging from green vines in a sun-drenched terraced grove. The lighting is dappled sunlight through the leaves, creating a fresh, organic atmosphere. In the background, the turquoise Mediterranean sea peeks through the lemon trees. Professional food and travel photography style."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCHab9iH41YBTk3qdaTY1mL8u4zI5TxvaWlZZgcycMMt05jgTyHQsrVPuxEWlXUTw6TbD_33T9EiJLvIroOvEp0uABnrVWkAO6snP-eE0qbE0PibjuzNbr3JCgqS47f53UqQw_kEiRUE7EsiNCfbewyPMt25_7Flc3hrZ06at0KA8iDe8ieDl7cLOXgHypDyPlm51zhBxchP8szGkwzfAJYhj2MvfIHeM-CGFVzyCmjCQPOCRTzOOBxFaLBVLeFxR3-xa0f7VUblM"
                  style={{
                    transform: "scale(1)",
                    transition: "transform 0.8s",
                  }}
                />
              </div>
              <div className="p-8 lg:w-2/3">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-headline-md text-headline-md text-on-background">
                    Lemon Grove Workshop
                  </h3>
                  <span className="bg-tertiary-container text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Masterclass
                  </span>
                </div>
                <p className="text-text-secondary mb-6">
                  Experience the essence of the Amalfi coast. We begin with a
                  private morning tour of the legendary Aceto lemon groves. Walk
                  through the ancient vertical gardens followed by an exclusive
                  hands-on limoncello-making masterclass with the Aceto family,
                  ending with a lemon-themed light lunch.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-surface-container rounded-lg font-label-sm text-text-secondary">
                    9:00 AM - Pick-up
                  </span>
                  <span className="px-4 py-2 bg-surface-container rounded-lg font-label-sm text-text-secondary">
                    Aceto Family Estate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-32 flex flex-row md:flex-col items-center md:items-end gap-4 timeline-dot">
            <span className="text-primary font-bold text-headline-md">
              Day 3
            </span>
            <span className="text-text-secondary font-label-sm uppercase tracking-widest hidden md:block">
              Sep 14
            </span>
          </div>
          <div className="flex-1">
            <div className="itinerary-card bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col lg:flex-row">
              <div className="lg:w-1/3 h-64 lg:h-auto">
                <img
                  className="w-full h-full object-cover"
                  data-alt="A panoramic view from the Path of the Gods hiking trail. The rugged limestone cliffs drop into the deep blue ocean, with the colorful village of Positano visible in the far distance. The sky is a clear azure, and the lighting is bright mid-morning sun, conveying adventure and breathtaking natural beauty."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoIToIrPv_wOzZrwYWbrJLpFKOapijEldmBXg5NVNRzpP6e5q86h-B6DAYWr92Iqz_WUSF0Lx3Y-lrhpm-dvrVG__rKjpRNT-QplLGDm7Cs8aIFRZe3frwMJuvNhUOvCuBdkC4eUKb9PAPgbq6x1bXoZ-RcvC28dFMSMQa4OypXbxI6mmE4nrQtMfvbZhH87I98Cz5J9IsdNDSYk1uhNAEPN59wOloLkFJJPyEcBq-r98Z0vw1QCvkjfJqnsEaB3XGNDJpdCpQPsg"
                  style={{
                    transform: "scale(1)",
                    transition: "transform 0.8s",
                  }}
                />
              </div>
              <div className="p-8 lg:w-2/3">
                <h3 className="font-headline-md text-headline-md text-on-background mb-4">
                  Path of the Gods Hike
                </h3>
                <p className="text-text-secondary mb-6">
                  A high-altitude trek offering the most iconic views of the
                  coast. Our expert guide will lead you from Bomerano to
                  Nocelle. At the trail's highest point, enjoy a gourmet picnic
                  lunch prepared with artisanal cheeses and cured meats from the
                  Lattari Mountains.
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-status-warning">
                      star
                    </span>
                    <span className="font-label-sm">Moderate Difficulty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">
                      timer
                    </span>
                    <span className="font-label-sm">4 Hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-32 flex flex-row md:flex-col items-center md:items-end gap-4 timeline-dot">
            <span className="text-primary font-bold text-headline-md">
              Day 4
            </span>
            <span className="text-text-secondary font-label-sm uppercase tracking-widest hidden md:block">
              Sep 15
            </span>
          </div>
          <div className="flex-1">
            <div className="itinerary-card bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col lg:flex-row">
              <div className="lg:w-1/3 h-64 lg:h-auto">
                <img
                  className="w-full h-full object-cover"
                  data-alt="A luxury white yacht anchored in the glowing turquoise waters of the Blue Grotto in Capri. The sunlight reflects off the cave walls, creating a magical ethereal blue glow. The yacht is sleek and modern, emphasizing a premium lifestyle and exclusive access. Cinematic lighting and crisp details."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdIhDY8LIpkLYZ_kpfnuCDFsl4EGxHBgGyDFLoVLa0VZVOpDLQ88UWKNojjFrA_6IwewxL_oYG6FUlJpMrJsF6UbEC6yK5Px4tU3iHSj1WEyGwfOnrlR7l2Y307tzkpFkjE-01AEZytAUApF2vyNMX5gdnTIG_1oFszjBhvxbRm0x8SY0gzDsi3IaOhwUs2zr3-6i2azWvLNMiJxgXSFP9x7CjYMs8ZIxQMrSNlSQ1S5_XZgcPJYJHaQSIhAUgQH4v74uUNzt9rNU"
                />
              </div>
              <div className="p-8 lg:w-2/3">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-headline-md text-headline-md text-on-background">
                    Private Capri Boat Tour
                  </h3>
                  <span className="bg-booking-blue text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Premium
                  </span>
                </div>
                <p className="text-text-secondary mb-6">
                  Board your private 45ft luxury yacht from Amalfi port. Your
                  skipper will navigate through the Faraglioni rocks and secret
                  inlets only accessible by sea. Includes a stop at the Blue
                  Grotto and free time to explore the designer boutiques of
                  Capri town.
                </p>
                <div className="flex gap-4">
                  <span className="px-3 py-1 border border-outline-variant rounded text-xs font-bold text-text-secondary uppercase">
                    All Inclusive
                  </span>
                  <span className="px-3 py-1 border border-outline-variant rounded text-xs font-bold text-text-secondary uppercase">
                    Private Skipper
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-32 flex flex-row md:flex-col items-center md:items-end gap-4 timeline-dot">
            <span className="text-primary font-bold text-headline-md">
              Day 5
            </span>
            <span className="text-text-secondary font-label-sm uppercase tracking-widest hidden md:block">
              Sep 16
            </span>
          </div>
          <div className="flex-1">
            <div className="itinerary-card bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col lg:flex-row">
              <div className="lg:w-1/3 h-64 lg:h-auto">
                <img
                  className="w-full h-full object-cover"
                  data-alt="An authentic Italian kitchen with a rustic wooden table covered in flour and fresh handmade pasta. A professional chef is teaching a smiling couple how to shape tortellini. Bright, airy lighting through a window overlooking Positano's colorful houses. Warm, inviting, and human-centric travel photography."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd-E11Fp6fVbZXAHe9NEILHUa6S-csFK7DtcNUpbI4higojXyCpiiHkw1skbfhSO4wHVyA0B0yDc-W26oubESTva7GZx2G-asiNiU7JwvFwZzovywxn-T4DYhjawGa3S7Rw7DosHsYxqDA4WDdE9frpDO71-5bhI4OHYNbk6whoftOlsobrnrzd-fQVH5h4BmVzNr2kLjvPAE8q82Y-9vXa0PrbCzgDyueJxRxZZUOkFMMQZrxGF_gAqRWvRfHsXnA148Uj3MRnz8"
                />
              </div>
              <div className="p-8 lg:w-2/3">
                <h3 className="font-headline-md text-headline-md text-on-background mb-4">
                  Cooking Class in Positano
                </h3>
                <p className="text-text-secondary mb-6">
                  Head to a private villa overlooking the iconic Positano
                  pyramid. Master the art of Scialatielli pasta and traditional
                  'Mamma' style tomato sauce. Enjoy your creations paired with
                  local Greco di Tufo wines on the terrace.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-text-secondary">
                    <span className="material-symbols-outlined text-[18px]">
                      wine_bar
                    </span>
                    <span className="font-label-sm">Wine Pairing Included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-32 flex flex-row md:flex-col items-center md:items-end gap-4 timeline-dot">
            <span className="text-primary font-bold text-headline-md">
              Day 6
            </span>
            <span className="text-text-secondary font-label-sm uppercase tracking-widest hidden md:block">
              Sep 17
            </span>
          </div>
          <div className="flex-1">
            <div className="itinerary-card bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col lg:flex-row">
              <div className="p-8 w-full">
                <h3 className="font-headline-md text-headline-md text-on-background mb-4">
                  Ravello Exploration
                </h3>
                <p className="text-text-secondary mb-6">
                  Discover why Wagner and Virginia Woolf were inspired by this
                  'City of Music'. Visit the gardens of Villa Rufolo and Villa
                  Cimbrone at your own pace. In the evening, attend a premium
                  seat performance of Vivaldi at the Ravello Concert Society.
                </p>
                <div className="p-4 bg-surface-container-low rounded-lg border-l-4 border-primary">
                  <p className="font-label-sm text-primary font-bold uppercase mb-1">
                    Evening Highlight
                  </p>
                  <p className="font-body-md text-body-md italic text-on-surface">
                    "The Four Seasons" - 8:30 PM, Annunziata Historic Building
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-32 flex flex-row md:flex-col items-center md:items-end gap-4 timeline-dot">
            <span className="text-primary font-bold text-headline-md">
              Day 7
            </span>
            <span className="text-text-secondary font-label-sm uppercase tracking-widest hidden md:block">
              Sep 18
            </span>
          </div>
          <div className="flex-1">
            <div className="itinerary-card bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col lg:flex-row">
              <div className="lg:w-1/3 h-64 lg:h-auto">
                <img
                  className="w-full h-full object-cover"
                  data-alt="A fine-dining Michelin-starred restaurant setting on a cliffside balcony at night. Elegant table settings with crystal glassware and candles. The moon reflects on the dark sea below. The aesthetic is extremely high-end, romantic, and exclusive. Warm candlelight and deep blue night sky."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs3RuqhFaTRPN642k69esrSuLF0OIoEO0PLbaSsmP5aPyVYFJpWlyziK5JWrPn2kCfNKOoIKLWeekMfoDO9iKbVhOdlJSaMjyh9qLEKnseE9w1swpsAkZg6wGGrM0BmjgOaHI-zVSvFfd3QBhNJ0YqTX56_1xJQlY4Y0Yt-EKR5HG_Yt_ABIJ55Un_Q6BLsnblnMYz4drMfvcNPWJkejH_S5q24nGkrqwBQ4vJfaFqoLS5xsr8UmT3HHZKC3Ci2jAwABf7swFnSoo"
                />
              </div>
              <div className="p-8 lg:w-2/3">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-headline-md text-headline-md text-on-background">
                    Farewell Dinner
                  </h3>
                  <span className="bg-on-primary-container text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Michelin Star
                  </span>
                </div>
                <p className="text-text-secondary mb-6">
                  Celebrate your final night with a spectacular 3-course tasting
                  menu at a Michelin-starred cliffside restaurant. Our
                  coordinator has secured the best table in the house for an
                  intimate evening of culinary perfection and moonlit views.
                </p>
                <div className="flex items-center gap-3">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    restaurant_menu
                  </span>
                  <span className="font-body-md text-body-md font-bold">
                    Dress Code: Elegant
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-32 flex flex-row md:flex-col items-center md:items-end gap-4 timeline-dot">
            <span className="text-primary font-bold text-headline-md">
              Day 8
            </span>
            <span className="text-text-secondary font-label-sm uppercase tracking-widest hidden md:block">
              Sep 19
            </span>
          </div>
          <div className="flex-1">
            <div className="itinerary-card bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col lg:flex-row">
              <div className="lg:w-1/3 h-64 lg:h-auto">
                <img
                  className="w-full h-full object-cover"
                  data-alt="A sleek black luxury sedan parked on a scenic coastal road with the Amalfi sea in the background. The driver in a professional suit is holding the door open. The lighting is early morning soft light, suggesting a smooth and high-class departure experience."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcO_tP4FfaQqR5pPAVJMsbC07-jYLmyqY1Ty2NtY7dXNkyazELNc7s6Il6njusFsZiU-ZK7Jb6o3Y6OpVLwtBTqB7gGgxUqw7WPoUdCgFV4QJD7qATuCHFxkb-D3LcrSooIv5Coqx3pCWETPJ_8auaUWxuRKXmuY72FzJaEFcm6o3T1fQFk_2vPS-dbrhO8t6wN3DDxh5nk5dFSHSAVZ6gNoyJfsAgORB8tunfPeM9gJVUHHZfLnQ_Db6FEu5RZF9ablA4GB-kD1k"
                />
              </div>
              <div className="p-8 lg:w-2/3">
                <h3 className="font-headline-md text-headline-md text-on-background mb-4">
                  Departure
                </h3>
                <p className="text-text-secondary mb-6">
                  Enjoy a final breakfast on the terrace. Your private transfer
                  will arrive at 10:00 AM for the journey back to Naples
                  International Airport. Safe travels on your journey home!
                </p>
                <div className="flex items-center gap-4 text-text-secondary">
                  <span className="material-symbols-outlined">
                    flight_takeoff
                  </span>
                  <span className="font-label-sm">
                    Flight: LH1845 | 1:30 PM Departure
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 last-day">
          <div className="md:w-32 flex flex-row md:flex-col items-center md:items-end gap-4 timeline-dot">
            <span className="text-primary font-bold text-headline-md">
              Day 9
            </span>
            <span className="text-text-secondary font-label-sm uppercase tracking-widest hidden md:block">
              Sep 20
            </span>
          </div>
          <div className="flex-1">
            <div className="itinerary-card bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col lg:flex-row">
              <div className="p-8 w-full">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-headline-md text-headline-md text-on-background">
                    Extended Stay - Optional
                  </h3>
                  <span className="bg-surface-container text-text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Leisure
                  </span>
                </div>
                <p className="text-text-secondary mb-6">
                  Enjoy a leisurely morning at the villa. Take a final dip in
                  the infinity pool, browse the local boutiques for artisanal
                  ceramics, or simply soak in the Mediterranean sun from your
                  private terrace. This day is yours to unwind before your
                  journey home.
                </p>
                <div className="flex items-center gap-2 text-text-secondary">
                  <span className="material-symbols-outlined text-[18px]">
                    spa
                  </span>
                  <span className="font-label-sm">
                    Relaxation &amp; Shopping
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24 text-center bg-surface-container rounded-3xl p-12 border border-outline-variant/20">
        <h2 className="font-headline-lg text-headline-lg mb-4">
          Need to make a change?
        </h2>
        <p className="text-text-secondary font-body-lg text-body-lg mb-8 max-w-2xl mx-auto">
          Your coordinator Elena is available 24/7 to adjust your itinerary,
          book additional experiences, or answer questions about your stay.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg shadow-primary/20">
            Message Coordinator
          </button>
          <button className="bg-white text-on-background border border-outline px-8 py-4 rounded-xl font-bold hover:bg-surface transition-all">
            View All Travel Documents
          </button>
        </div>
      </section>
    </div>
  );
}
