import { Container } from "./ui/container";

export function Settings() {
  return (
    <Container>
      <section className="mb-10">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">
          Account Settings
        </h2>
        <p className="text-on-surface-variant text-body-lg font-body-lg">
          Manage your professional profile, preferences, and secure your
          account.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <section className="lg:col-span-8 space-y-gutter">
          <div className="bg-surface shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-xl p-8 border border-white">
            <div className="flex justify-between items-center mb-10">
              <h3 className="font-headline-md text-headline-md text-on-surface">
                Profile Information
              </h3>
              <button className="flex items-center gap-2 px-6 py-2 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary-container transition-all scale-95 active:scale-90">
                <span className="material-symbols-outlined text-[18px]">
                  edit
                </span>
                <span className="">Edit</span>
              </button>
            </div>
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="relative group">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-surface-container border-4 border-white shadow-lg">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="A minimalist circular profile avatar placeholder for a professional user account. The background is a soft, tonal gradient of Touree red and light peach, featuring a clean white silhouette icon of a person. High-key lighting and a polished corporate feel."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWU5xTlGqSlhzm2RjXdUvi8F_pThZmWTbDkcc-1WhcmX-EdHoCTxJMvj-y67RVN03mUQEWCa4Vai8rDNfzUd7n_7hOB-t8JWrpRokc95EPESbTpA7bMtOINJuFODxlKf3mWlcQ1ckj5kTGxdXijuc3K6-KO3BTnoZtoG7WrgcD5TjhFA0Vuyny0TmXTd9Wl6nWZho6q7L_ByYNG4omF6RrRHBJT6WWIOFTV7Tx2XhAD2rmf79M3bwnvKvI7NY2FX7eDK2wLaVuQOs"
                  />
                </div>
                <button className="absolute bottom-0 right-0 bg-primary text-on-primary p-2 rounded-full shadow-md hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">
                    photo_camera
                  </span>
                </button>
                <p className="mt-4 text-center font-label-sm text-label-sm text-on-surface-variant">
                  Update Avatar
                </p>
              </div>

              <div className="grow grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant">
                    Full Name
                  </label>
                  <input
                    className="w-full border border-outline-variant bg-surface-container-lowest rounded-lg px-4 py-3 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                    type="text"
                    value="Julian Montgomery"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant">
                    Professional Title
                  </label>
                  <input
                    className="w-full border border-outline-variant bg-surface-container-lowest rounded-lg px-4 py-3 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                    type="text"
                    value="Senior Travel Architect"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant">
                    Email Address
                  </label>
                  <input
                    className="w-full border border-outline-variant bg-surface-container-lowest rounded-lg px-4 py-3 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                    type="email"
                    value="julian.m@touree.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant">
                    Phone Number
                  </label>
                  <input
                    className="w-full border border-outline-variant bg-surface-container-lowest rounded-lg px-4 py-3 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                    type="tel"
                    value="+1 (555) 012-3456"
                  />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant">
                    Bio / Agency Description
                  </label>
                  <textarea
                    className="w-full border border-outline-variant bg-surface-container-lowest rounded-lg px-4 py-3 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all resize-none"
                    rows={4}
                  >
                    Passionate travel coordinator with over 10 years of
                    experience crafting bespoke European adventures.
                    Specializing in luxury tours across Italy, France, and
                    Spain. Dedicated to providing seamless, high-end travel
                    experiences for every client.
                  </textarea>
                </div>
              </div>
            </div>
          </div>
        </section>

        <aside className="lg:col-span-4 space-y-gutter">
          <section className="bg-surface shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-xl p-6 border border-white">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary">
                notifications_active
              </span>
              <h3 className="font-headline-md text-[20px] text-on-surface">
                Notifications
              </h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body-md text-on-surface">
                    New Quote Requests
                  </p>
                  <p className="text-label-sm text-on-surface-variant opacity-70">
                    Email &amp; Push
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input checked className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body-md text-on-surface">
                    Booking Updates
                  </p>
                  <p className="text-label-sm text-on-surface-variant opacity-70">
                    Push only
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input checked className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body-md text-on-surface">Messages</p>
                  <p className="text-label-sm text-on-surface-variant opacity-70">
                    Email &amp; Push
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </section>

          <section className="bg-surface shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-xl p-6 border border-white">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary">
                security
              </span>
              <h3 className="font-headline-md text-[20px] text-on-surface">
                Security
              </h3>
            </div>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between px-4 py-3 bg-surface-container-low rounded-lg hover:bg-surface-variant transition-colors group">
                <span className="font-body-md text-on-surface">
                  Change Password
                </span>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">
                  chevron_right
                </span>
              </button>
              <div className="flex items-center justify-between px-4 py-3 bg-surface-container-low rounded-lg">
                <div>
                  <p className="font-body-md text-on-surface">
                    Two-Factor Auth
                  </p>
                  <p className="text-label-sm text-tertiary">Enabled</p>
                </div>
                <button className="px-4 py-2 text-primary font-bold hover:underline">
                  Manage
                </button>
              </div>
            </div>
          </section>
        </aside>
      </div>

      <div className="mt-section-gap pt-gutter border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-6 pb-margin-desktop">
        <div className="text-on-surface-variant text-body-md flex items-center gap-2">
          <span className="material-symbols-outlined text-tertiary">
            verified_user
          </span>
          All changes are encrypted and securely stored.
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <button className="flex-1 md:flex-none px-8 py-3 text-on-surface-variant font-bold rounded-lg hover:bg-surface-variant transition-colors">
            Discard
          </button>
          <button className="flex-1 md:flex-none px-12 py-3 bg-primary text-on-primary font-bold rounded-lg shadow-lg hover:brightness-110 active:scale-95 transition-all">
            Save Changes
          </button>
        </div>
      </div>
    </Container>
  );
}
