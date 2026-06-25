"use client";

import { useRouter } from "next/navigation";

export default function ProfileSetupForm() {
  const router = useRouter();

  return (
    <form className="space-y-6" id="setupForm">
      <div className="space-y-2">
        <label
          className="font-label-sm text-label-sm text-on-surface-variant ml-1"
          htmlFor="fullName"
        >
          Full Name
        </label>
        <div className="relative">
          <input
            className="w-full px-5 py-4 rounded-lg bg-white border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all duration-200 placeholder:text-outline text-on-surface font-body-md"
            id="fullName"
            placeholder="Alexander Graham"
            required
            type="text"
          />
          <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant select-none">
            person
          </span>
        </div>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="font-label-sm text-label-sm text-on-surface-variant ml-1">
            Contact Information
          </label>
          <div className="flex gap-2">
            <div className="relative w-1/3">
              <select className="w-full px-4 py-4 rounded-lg bg-white border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all duration-200 text-on-surface font-body-md appearance-none">
                <option value="phone">Phone</option>
                <option value="viber">Viber</option>
                <option value="facebook">Facebook</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant pointer-events-none">
                expand_more
              </span>
            </div>
            <div className="relative flex-1">
              <input
                className="w-full px-5 py-4 rounded-lg bg-white border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all duration-200 placeholder:text-outline text-on-surface font-body-md"
                placeholder="Enter number or link"
                required
                type="text"
              />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant select-none">
                contact_support
              </span>
            </div>
          </div>
          <p className="text-label-sm text-outline ml-1">
            Provide at least one way for the coordinator to reach you easily.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-6 border-2 border-dashed border-outline-variant/50 rounded-xl bg-surface-container-lowest/50 group hover:border-primary/30 transition-colors cursor-pointer">
        <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
          <span className="material-symbols-outlined text-outline text-3xl">
            add_a_photo
          </span>
        </div>
        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
          Add profile photo
        </span>
      </div>
      <div className="pt-4">
        <button
          className="w-full bg-primary text-on-primary py-4 px-6 rounded-lg font-headline-md text-body-md shadow-lg shadow-primary/20 hover:bg-on-primary-fixed-variant hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 active:translate-y-0 active:scale-95"
          type="submit"
        >
          Complete Setup
        </button>
      </div>
    </form>
  );
}
