type FullPageLoaderType = {
  isLoading: boolean;
};

export function FullPageLoader({ isLoading }: FullPageLoaderType) {
  if (!isLoading) {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-50 grid place-items-center bg-black/50"
    >
      <span
        className="material-symbols-outlined animate-spin text-white"
        style={{ fontSize: "2.5rem" }}
        aria-hidden="true"
      >
        progress_activity
      </span>
      <span className="sr-only">Loading…</span>
    </div>
  );
}
