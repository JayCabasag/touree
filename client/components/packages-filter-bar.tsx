"use client";

import { ExploreFilterBar } from "./explore-filter-bar";

export function PackagesFilterBar() {
  return (
    <section className="relative -mt-10 z-10 px-4 md:px-margin-desktop">
      <div className="max-w-7xl mx-auto">
        <ExploreFilterBar />
      </div>
    </section>
  );
}
