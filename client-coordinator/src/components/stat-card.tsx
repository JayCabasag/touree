export function StatCard() {
  return (
    <div className="glass-card p-4 rounded-2xl flex flex-col gap-3 transition-all hover:shadow-md border border-outline-variant">
      <div className="flex justify-between items-center">
        <div className="p-2 bg-primary-fixed rounded-lg text-primary">
          <span className="material-symbols-outlined text-lg">inventory_2</span>
        </div>
        <span className="text-tertiary font-bold text-[10px] flex items-center gap-0.5">
          <span className="material-symbols-outlined text-xs">trending_up</span>
          +12%
        </span>
      </div>
      <div>
        <p className="text-on-surface-variant text-[10px] uppercase tracking-widest mb-0.5 opacity-70">
          Total Packages
        </p>
        <div className="flex items-end justify-between">
          <p className="text-xl font-headline-md text-on-surface leading-none">
            24
          </p>
          <div className="flex gap-0.5 items-end h-6">
            <div className="w-1 bg-primary/20 rounded-full h-2"></div>
            <div className="w-1 bg-primary/30 rounded-full h-4"></div>
            <div className="w-1 bg-primary/40 rounded-full h-3"></div>
            <div className="w-1 bg-primary rounded-full h-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
