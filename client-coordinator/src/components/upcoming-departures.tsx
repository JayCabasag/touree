export function UpcommingDepartures() {
  return (
    <section className="glass-card rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-headline-md text-headline-md text-on-surface">
          Departures
        </h3>
        <button className="text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1 hover:text-primary transition-colors">
          Calendar View{" "}
          <span className="material-symbols-outlined text-sm">
            calendar_month
          </span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl border border-outline-variant hover:border-primary/40 hover:bg-surface-container-low transition-all cursor-pointer group">
          <div className="flex justify-between items-start mb-3">
            <div className="w-10 h-10 rounded-lg bg-primary-fixed text-primary flex flex-col items-center justify-center">
              <span className="font-bold text-sm leading-none">12</span>
              <span className="text-[9px] uppercase font-bold">OCT</span>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
              more_vert
            </span>
            <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
              Upcoming
            </span>
          </div>
          <h4 className="font-bold text-on-surface mb-1">Swiss Alps Trek</h4>
          <p className="text-on-surface-variant text-[11px] uppercase tracking-wider mb-2">
            Swiss Air • 2 Guests
          </p>
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-200"></div>
            <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-300"></div>
            <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
              Upcoming
            </span>
          </div>
        </div>
        <div className="p-4 rounded-xl border border-outline-variant hover:border-primary/40 hover:bg-surface-container-low transition-all cursor-pointer group">
          <div className="flex justify-between items-start mb-3">
            <div className="w-10 h-10 rounded-lg bg-surface-container-highest text-on-surface-variant flex flex-col items-center justify-center">
              <span className="font-bold text-sm leading-none">15</span>
              <span className="text-[9px] uppercase font-bold">OCT</span>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
              more_vert
            </span>
            <span className="bg-tertiary/10 text-tertiary text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
              Active
            </span>
          </div>
          <h4 className="font-bold text-on-surface mb-1">Parisian Art Tour</h4>
          <p className="text-on-surface-variant text-[11px] uppercase tracking-wider mb-2">
            Eurostar • 4 Guests
          </p>
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-200"></div>
            <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-300"></div>
            <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-400"></div>
            <div className="w-6 h-6 rounded-full border-2 border-white bg-primary text-[8px] text-white flex items-center justify-center font-bold">
              +1
            </div>
            <span className="bg-tertiary/10 text-tertiary text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
              Active
            </span>
          </div>
        </div>
        <div className="p-4 rounded-xl border border-outline-variant hover:border-primary/40 hover:bg-surface-container-low transition-all cursor-pointer group">
          <div className="flex justify-between items-start mb-3">
            <div className="w-10 h-10 rounded-lg bg-surface-container-highest text-on-surface-variant flex flex-col items-center justify-center">
              <span className="font-bold text-sm leading-none">21</span>
              <span className="text-[9px] uppercase font-bold">OCT</span>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
              more_vert
            </span>
            <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
              Upcoming
            </span>
          </div>
          <h4 className="font-bold text-on-surface mb-1">Bali Wellness</h4>
          <p className="text-on-surface-variant text-[11px] uppercase tracking-wider mb-2">
            Singapore Air • 1 Guest
          </p>
          <div className="flex">
            <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-200"></div>
            <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
              Upcoming
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
