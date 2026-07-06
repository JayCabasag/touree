export function PendingBookings() {
  return (
    <section className="glass-card rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-headline-md text-headline-md text-on-surface">
          Pending Booking Requests
        </h3>
        <span className="bg-primary/10 text-primary text-label-sm px-2 py-1 rounded-full font-bold">
          2 Pending
        </span>
      </div>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4 group">
          <div className="flex items-center gap-4 flex-1">
            <img
              alt="Traveler Avatar"
              className="w-12 h-12 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg35yD4g3yZPtDRl76JPxV1uXHPT1R7vv6GGT7z91oI6avvkvv2TsuZoZ1lAbqyKUZoADlQ8hMEd7lk0sCBhtWjYnZZirWrhqwjzPlCp7AIoQJRwlgF9TElP7IViH7-QUbEA97VPvZKsm7m9drK4SToW-uBRu8xk4lq5spg7dpPn2wqufVjIUhik1G0LkFdgXxx8uzYH6BAKUvD6Z7kHUAxK1tWx2Onnm0P6NhxcI_mw_7brtcooU5wTLpfF3pU96Mu8vhC9CI-hQ"
            />
            <div>
              <p className="text-body-md text-on-surface font-bold">
                Marcus Webb
              </p>
              <p className="text-on-surface-variant text-sm">
                Requested{" "}
                <span className="text-primary font-bold">
                  Amalfi Dream Escape
                </span>
              </p>
              <p className="text-on-surface-variant text-xs mt-0.5">
                Nov 12 - Nov 18 • 2 Guests
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 md:flex-none px-4 py-2 bg-primary text-on-primary rounded-lg text-label-sm font-bold hover:opacity-90 transition-opacity">
              Confirm Booking
            </button>
            <button className="flex-1 md:flex-none px-4 py-2 border border-outline-variant rounded-lg text-label-sm font-bold text-on-surface-variant hover:bg-surface-container-low transition-colors">
              Decline
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-4 group pt-6 border-t border-outline-variant">
          <div className="flex items-center gap-4 flex-1">
            <img
              alt="Traveler Avatar"
              className="w-12 h-12 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHngMMGCGAi_oouZC5mz8wUZPbyTXrqcD9CpImIIVTS_hcEbwP_-msNMwYGQXWRHGcWRuYsh9hiCVgtjVhV8IzJcoD7jjorAyP5w6xZzDCp8y6UKuurUcl2bClkhuJD-p2pL2IKA1wd7UoNVWQMylVVP4iDGFQWK-NhghuUDyiH574NllWI0Yn96rf5xFVTFwOuvqcyqw0QF6GPMOCXc27CNVjvVKNkFpeSCNx2ZZ3zj8Wn1KC8871GnIe2_tV6rRHt8Chx3RKqyk"
            />
            <div>
              <p className="text-body-md text-on-surface font-bold">
                Sarah Jenkins
              </p>
              <p className="text-on-surface-variant text-sm">
                Requested{" "}
                <span className="text-primary font-bold">
                  Kyoto Heritage Trail
                </span>
              </p>
              <p className="text-on-surface-variant text-xs mt-0.5">
                Dec 05 - Dec 12 • 4 Guests
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 md:flex-none px-4 py-2 bg-primary text-on-primary rounded-lg text-label-sm font-bold hover:opacity-90 transition-opacity">
              Confirm Booking
            </button>
            <button className="flex-1 md:flex-none px-4 py-2 border border-outline-variant rounded-lg text-label-sm font-bold text-on-surface-variant hover:bg-surface-container-low transition-colors">
              Decline
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
