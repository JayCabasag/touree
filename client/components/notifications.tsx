export function Notifications() {
  return (
    <>
      <div className="px-20 flex gap-10  items-start">
        <section className="grow">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface">
                Recent Activity
              </h1>
              <p className="text-on-surface-variant font-body-md text-body-md">
                Stay updated with your travel plans and offers.
              </p>
            </div>
            <button className="text-primary font-label-sm text-label-sm hover:underline transition-all">
              Mark all as read
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <div className="notification-card bg-surface-container-lowest p-6 rounded-xl border-l-4 border-primary shadow-sm flex gap-6 items-start relative group">
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  task_alt
                </span>
              </div>
              <div className="grow">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-headline-md text-[18px] text-on-surface">
                    Booking Confirmed: Amalfi Coast Discovery
                  </h3>
                  <span className="text-on-surface-variant font-label-sm text-label-sm">
                    Just now
                  </span>
                </div>
                <p className="text-on-surface-variant font-body-md text-body-md mb-4 max-w-2xl">
                  Coordinator Sarah Jenkins has accepted your quote. Your trip
                  is now confirmed! Check your bookings for the updated
                  itinerary.
                </p>
                <div className="flex gap-3">
                  <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-opacity">
                    View Booking
                  </button>
                  <button className="bg-surface-container-high text-on-surface-variant px-6 py-2 rounded-lg font-label-sm text-label-sm hover:bg-surface-container-highest transition-colors">
                    Message Coordinator
                  </button>
                </div>
              </div>
              <div className="absolute top-6 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="material-symbols-outlined text-on-surface-variant hover:text-primary">
                  more_vert
                </button>
              </div>
            </div>

            <div className="notification-card bg-surface-container-lowest p-6 rounded-xl border-l-4 border-primary shadow-sm flex gap-6 items-start relative group">
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  request_quote
                </span>
              </div>
              <div className="grow">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-headline-md text-[18px] text-on-surface">
                    New Quote Offer: Swiss Alps Escape
                  </h3>
                  <span className="text-on-surface-variant font-label-sm text-label-sm">
                    2 mins ago
                  </span>
                </div>
                <p className="text-on-surface-variant font-body-md text-body-md mb-4 max-w-2xl">
                  Coordinator Marco Rossi has sent you a premium quote for your
                  upcoming trip to Zermatt. Check the details and inclusions
                  now.
                </p>
                <div className="flex gap-3">
                  <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-opacity">
                    View Quote
                  </button>
                  <button className="bg-surface-container-high text-on-surface-variant px-6 py-2 rounded-lg font-label-sm text-label-sm hover:bg-surface-container-highest transition-colors">
                    Details
                  </button>
                </div>
              </div>
              <div className="absolute top-6 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="material-symbols-outlined text-on-surface-variant hover:text-primary">
                  more_vert
                </button>
              </div>
            </div>

            <div className="notification-card bg-surface p-6 rounded-xl border border-outline-variant/30 flex gap-6 items-start group">
              <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary">
                  chat_bubble
                </span>
              </div>
              <div className="grow">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-headline-md text-[18px] text-on-surface">
                      Message from Sarah Jenkins
                    </h3>
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  </div>
                  <span className="text-on-surface-variant font-label-sm text-label-sm">
                    1 hour ago
                  </span>
                </div>
                <p className="text-on-surface-variant font-body-md text-body-md italic mb-0">
                  "Hi there! I've updated the itinerary for the Amalfi Coast
                  tour. Would you like to add the private boat tour as well?"
                </p>
              </div>
              <button className="material-symbols-outlined text-outline-variant hover:text-primary self-center p-2 rounded-full hover:bg-surface-container-high">
                reply
              </button>
            </div>

            <div className="notification-card bg-surface p-6 rounded-xl border border-outline-variant/30 flex gap-6 items-start group">
              <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-tertiary">
                  task_alt
                </span>
              </div>
              <div className="grow">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-headline-md text-[18px] text-on-surface">
                    Booking Confirmed: Tokyo City Lights
                  </h3>
                  <span className="text-on-surface-variant font-label-sm text-label-sm">
                    Yesterday
                  </span>
                </div>
                <p className="text-on-surface-variant font-body-md text-body-md">
                  Your booking for 'Tokyo City Lights' (Oct 15 - Oct 22) has
                  been confirmed by the coordinator. Pack your bags!
                </p>
                <div className="mt-4 flex items-center gap-2 text-tertiary bg-tertiary-container/10 w-fit px-3 py-1 rounded-full">
                  <span className="material-symbols-outlined text-[16px]">
                    info
                  </span>
                  <span className="font-label-sm text-label-sm">
                    Itinerary ready to download
                  </span>
                </div>
              </div>
            </div>

            <div className="notification-card bg-surface p-6 rounded-xl border border-outline-variant/30 flex gap-6 items-start group opacity-70">
              <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-surface-variant">
                  settings_suggest
                </span>
              </div>
              <div className="grow">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-headline-md text-[18px] text-on-surface">
                    System Maintenance
                  </h3>
                  <span className="text-on-surface-variant font-label-sm text-label-sm">
                    2 days ago
                  </span>
                </div>
                <p className="text-on-surface-variant font-body-md text-body-md">
                  Touree will be undergoing scheduled maintenance on Sunday, Oct
                  20th between 2:00 AM and 4:00 AM UTC.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <button className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm bg-surface-container-high hover:bg-surface-container-highest px-8 py-3 rounded-full transition-all">
              Show older notifications
              <span className="material-symbols-outlined">expand_more</span>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
