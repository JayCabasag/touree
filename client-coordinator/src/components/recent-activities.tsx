export function RecentActivities() {
  return (
    <section className="glass-card rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-headline-md text-headline-md text-on-surface">
          Recent Activity
        </h3>
        <button className="text-primary font-bold font-label-sm text-label-sm hover:underline">
          View All
        </button>
      </div>
      <div className="space-y-6">
        <div className="flex gap-4 group">
          <div className="relative shrink-0">
            <img
              alt="Client Avatar"
              className="w-12 h-12 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHngMMGCGAi_oouZC5mz8wUZPbyTXrqcD9CpImIIVTS_hcEbwP_-msNMwYGQXWRHGcWRuYsh9hiCVgtjVhV8IzJcoD7jjorAyP5w6xZzDCp8y6UKuurUcl2bClkhuJD-p2pL2IKA1wd7UoNVWQMylVVP4iDGFQWK-NhghuUDyiH574NllWI0Yn96rf5xFVTFwOuvqcyqw0QF6GPMOCXc27CNVjvVKNkFpeSCNx2ZZ3zj8Wn1KC8871GnIe2_tV6rRHt8Chx3RKqyk"
            />
            <div className="absolute -bottom-1 -right-1 bg-tertiary-container text-on-tertiary-container w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
              <span
                className="material-symbols-outlined text-[10px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check
              </span>
            </div>
          </div>
          <div className="flex-1 pb-5 border-b border-outline-variant group-last:border-0">
            <p className="text-body-md text-on-surface leading-tight">
              <span className="font-bold">Elena Vance</span> confirmed the{" "}
              <span className="font-bold text-primary hover:underline cursor-pointer">
                "Amalfi Coast Escape"
              </span>{" "}
              booking.
            </p>
            <span className="text-on-surface-variant font-label-sm text-label-sm mt-1 block">
              2 minutes ago
            </span>
          </div>
        </div>
        <div className="flex gap-4 group">
          <div className="relative shrink-0">
            <img
              alt="Client Avatar"
              className="w-12 h-12 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1VzerYU92qa_GBQNxLqUrKzPAt3ckCk-x61LvLVcPEILDV4GaAjRI7H52pMDMftG2OLtSNi2sSKQYN0tlk8z5gWp_9fAjpM8knEmW9Q0GNgxGqe9T5i4o--kRD-45DfkCyHX_QX-U_mZ6S5KUoEw4Qn4MWZ2aQE0g-pcdG0aK3-LxDWDj3Pbpk9nL_05ytV14VYncXfzuquYrsrZwP52bRuuAEiCJcB8VIpf9mRhAtN7uPQZmE3CIbPMSTtIph0bij5XQv1ZwzBM"
            />
            <div className="absolute -bottom-1 -right-1 bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
              <span className="material-symbols-outlined text-[10px]">
                mail
              </span>
            </div>
          </div>
          <div className="flex-1 pb-5 border-b border-outline-variant group-last:border-0">
            <p className="text-body-md text-on-surface leading-tight">
              <span className="font-bold">Julian Rossi</span> sent a new message
              regarding dietary requirements for the upcoming Milan trip.
            </p>
            <span className="text-on-surface-variant font-label-sm text-label-sm mt-1 block">
              45 minutes ago
            </span>
          </div>
        </div>
        <div className="flex gap-4 group">
          <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-primary">
              request_quote
            </span>
          </div>
          <div className="flex-1 pb-5 group-last:border-0">
            <p className="text-body-md text-on-surface leading-tight">
              New Quote Request received for{" "}
              <span className="font-bold">"Kyoto Heritage Trail"</span> (4
              Travelers).
            </p>
            <div className="mt-3 flex gap-2">
              <button className="px-4 py-1.5 bg-primary text-on-primary rounded-lg text-label-sm font-label-sm hover:opacity-90 transition-opacity">
                Review Now
              </button>
              <button className="px-4 py-1.5 border border-outline-variant rounded-lg text-label-sm font-label-sm hover:bg-surface-container-low transition-colors">
                Ignore
              </button>
            </div>
            <span className="block mt-2 text-on-surface-variant font-label-sm text-label-sm">
              2 hours ago
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
