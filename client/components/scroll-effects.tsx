"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (!header) return;

      if (window.scrollY > 50) {
        header.classList.add("py-2", "shadow-md");
        header.classList.remove("py-0");
      } else {
        header.classList.remove("py-2", "shadow-md");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
