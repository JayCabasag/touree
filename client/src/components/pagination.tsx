export function Pagination() {
  return (
    <div className="flex justify-center items-center gap-2 pt-12">
      <button className="p-2 rounded-lg hover:bg-surface-container transition-colors">
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <button className="w-10 h-10 rounded-lg bg-primary text-on-primary font-bold">
        1
      </button>
      <button className="w-10 h-10 rounded-lg hover:bg-surface-container transition-colors">
        2
      </button>
      <button className="w-10 h-10 rounded-lg hover:bg-surface-container transition-colors">
        3
      </button>
      <span className="px-2">...</span>
      <button className="w-10 h-10 rounded-lg hover:bg-surface-container transition-colors">
        12
      </button>
      <button className="p-2 rounded-lg hover:bg-surface-container transition-colors">
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
    </div>
  );
}
