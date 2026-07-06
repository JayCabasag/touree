"use client";

export function CreatePackage() {
  return (
    <>
      <div className="px-8 max-w-5xl mx-auto">
        <div className="mb-10">
          <h1 className="font-headline-lg text-headline-lg text-on-surface">
            Create New Package
          </h1>
          <p className="text-on-surface-variant mt-1 text-body-md">
            Design a premium travel experience for your clients.
          </p>
        </div>
        <form className="space-y-8" onSubmit={() => {}}>
          <section className="glass-card p-8 rounded-2xl shadow-sm border border-outline-variant">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">
                  image
                </span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Media Gallery
              </h2>
            </div>
            <div className="space-y-8">
              <div className="border-2 border-dashed border-outline-variant rounded-3xl p-12 flex flex-col items-center justify-center bg-surface-muted/20 group hover:bg-surface-container-low/50 hover:border-primary transition-all cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform border border-outline-variant/30">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    cloud_upload
                  </span>
                </div>
                <p className="font-headline-md text-[20px] text-on-surface text-center font-bold">
                  Drag and drop package images
                </p>
                <p className="text-on-surface-variant text-center mt-2 font-label-sm">
                  High-resolution JPEG or PNG. Max 10MB per file.
                </p>
                <button
                  className="mt-8 px-8 py-2.5 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-on-primary transition-all"
                  type="button"
                >
                  Browse Files
                </button>
              </div>

              <div>
                <h3 className="font-label-sm text-label-sm text-on-surface-variant mb-5 uppercase tracking-widest flex items-center justify-between">
                  Image Previews (3/10)
                  <span className="text-primary font-bold">
                    Recommended: 16:9 Aspect Ratio
                  </span>
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="relative group aspect-video rounded-2xl overflow-hidden shadow-sm border border-outline-variant">
                    <img
                      alt="Preview 1"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5tcaoIjJf2gcULT4CTP7goCw5f5HQo3m6MWuCLh1lVal3JobU6S5OxrFWi3oHcuQI8l6zB9x11Cb2ANur_OUqWGtltiwScGzZqJBQ1bZmrzch6vWnOuhCWYQdjBv_dlMQCd77yRqquFWECkPrbcTUQH2hPGB9jCSi7ku1Kn-2COISnL8gMnHBLdtgWYALrJeRraLVFH8Z62LY8UYj6SS6nNdtLOyBqRvsOCEEtihpZ41bNMNuJstOd4F3YkmzsMfCawjNnlPZTmY"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <button className="p-2.5 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40">
                        <span className="material-symbols-outlined">
                          visibility
                        </span>
                      </button>
                      <button className="p-2.5 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-error/80">
                        <span className="material-symbols-outlined">
                          delete
                        </span>
                      </button>
                    </div>
                    <div className="absolute top-3 left-3 px-3 py-1 bg-primary text-[10px] text-white font-bold rounded-lg shadow-lg">
                      COVER
                    </div>
                  </div>
                  <div className="relative group aspect-video rounded-2xl overflow-hidden shadow-sm border border-outline-variant">
                    <img
                      alt="Preview 2"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuACMheeHiURiPF1KL0qGxnDOFbyLR1jLDxqQVpAOzPftGEaM4uzQaSlF7LUMmRQYSL4uKjos-pnAdQe-khve82Ajhy6kafQLs_l2tWXTpUkmhU_pyg_5SfOirQZdc9Jh7sHbaVGSJo3iHqDsal-0BZUDLOtQmIpwhdM0Xdi0BD_it8BZmT479VMuxQDOkFyeX40lToNq3jkl80TPJIC-V5o5CGUtggKNA9DxRJ8YOw8fd6pJRzdqJDWSwKlMtEoSi413_XDInaTGCY"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <button className="p-2.5 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40">
                        <span className="material-symbols-outlined">
                          visibility
                        </span>
                      </button>
                      <button className="p-2.5 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-error/80">
                        <span className="material-symbols-outlined">
                          delete
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="relative group aspect-video rounded-2xl overflow-hidden shadow-sm border border-outline-variant">
                    <img
                      alt="Preview 3"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVdiqL2FaLvMTZJIfyZlWUyle7VmyaHeOqp3PDCR3FGA0gcsH8UOfY6Wn03_omVhNibWPW2ap4gpAzcbpVMkten4bLs-LHlF1Xo_9Km8nlnz1rtNnXJgb6PPYKXQvZAP1OaKtqIuqAx-SdpJvCkt_0l4Kja6mosZ9RszmvjFLivO_22avqS1ucrLNfMc8DpL1nWQdYz-jaF_4X_jl3g8oxDOEjrzBIGGAWjehVXUlc-R2VRrIH-PVFdMrs42JndtaAzHJP1tRKQSE"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <button className="p-2.5 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40">
                        <span className="material-symbols-outlined">
                          visibility
                        </span>
                      </button>
                      <button className="p-2.5 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-error/80">
                        <span className="material-symbols-outlined">
                          delete
                        </span>
                      </button>
                    </div>
                  </div>
                  <button
                    className="aspect-video rounded-2xl border-2 border-dashed border-outline-variant flex flex-col items-center justify-center bg-surface-muted/20 text-on-surface-variant hover:text-primary hover:border-primary transition-all group"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-4xl group-hover:scale-110 transition-transform">
                      add_circle
                    </span>
                    <span className="text-[12px] font-bold mt-2 uppercase tracking-wider">
                      Add More
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="glass-card p-8 rounded-2xl shadow-sm border border-outline-variant">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">
                  info
                </span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Basic Information
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:col-span-2">
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2">
                  Package Title
                </label>
                <input
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl py-3.5 px-4 text-on-surface transition-all font-body-md"
                  placeholder="e.g. 7 Days Luxury Escape in Santorini"
                  type="text"
                />
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2">
                  Destination
                </label>
                <select className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl py-3.5 px-4 text-on-surface appearance-none font-body-md">
                  <option disabled selected value="">
                    Select a destination
                  </option>
                  <option>Santorini, Greece</option>
                  <option>Bali, Indonesia</option>
                  <option>Kyoto, Japan</option>
                  <option>Amalfi Coast, Italy</option>
                </select>
              </div>

              <div className="space-y-4">
                <label className="block font-label-sm text-label-sm text-on-surface-variant">
                  Pricing Structure (Per Person)
                </label>
                <div className="grid gap-4 grid-cols-1">
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
                      $
                    </span>
                    <input
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl py-3.5 pl-8 pr-4 text-on-surface font-body-md"
                      placeholder="0.00"
                      type="number"
                    />
                  </div>
                </div>
                <div className="hidden" id="max-guests-field">
                  <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2">
                    Max Guests per Group
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl py-3 px-4 text-on-surface font-body-md"
                    placeholder="e.g. 10"
                    type="number"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-4">
                  Group Type
                </label>
                <div className="flex gap-8">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      className="w-5 h-5 text-primary border-outline-variant focus:ring-primary/20"
                      name="group_type"
                      type="radio"
                    />
                    <span className="font-body-md text-on-surface group-hover:text-primary transition-colors">
                      Joiner (Shared)
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      className="w-5 h-5 text-primary border-outline-variant focus:ring-primary/20"
                      name="group_type"
                      type="radio"
                    />
                    <span className="font-body-md text-on-surface group-hover:text-primary transition-colors">
                      Private Tour
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </section>

          <section className="glass-card p-8 rounded-2xl shadow-sm border border-outline-variant">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-tertiary-container/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary">
                  article
                </span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Content Details
              </h2>
            </div>
            <div className="space-y-8">
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2">
                  Package Description
                </label>
                <textarea
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl py-4 px-4 text-on-surface font-body-md min-h-30"
                  placeholder="Describe the highlights and the unique vibe of this package..."
                ></textarea>
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="block font-label-sm text-label-sm text-on-surface-variant">
                    Inclusions (Check all that apply)
                  </label>
                  <button
                    className="flex items-center gap-1.5 text-primary font-bold text-label-sm hover:underline"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-lg">
                      add_circle
                    </span>
                    Add New Inclusion
                  </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <label className="flex items-center gap-3 p-4 border border-outline-variant rounded-xl hover:border-primary/40 hover:bg-surface-container-low transition-all cursor-pointer">
                    <input
                      className="rounded text-primary focus:ring-primary/20 border-outline-variant"
                      type="checkbox"
                    />
                    <span className="text-body-md">Accommodation</span>
                  </label>
                  <label className="flex items-center gap-3 p-4 border border-outline-variant rounded-xl hover:border-primary/40 hover:bg-surface-container-low transition-all cursor-pointer">
                    <input
                      className="rounded text-primary focus:ring-primary/20 border-outline-variant"
                      type="checkbox"
                    />
                    <span className="text-body-md">Airport Transfer</span>
                  </label>
                  <label className="flex items-center gap-3 p-4 border border-outline-variant rounded-xl hover:border-primary/40 hover:bg-surface-container-low transition-all cursor-pointer">
                    <input
                      className="rounded text-primary focus:ring-primary/20 border-outline-variant"
                      type="checkbox"
                    />
                    <span className="text-body-md">Daily Breakfast</span>
                  </label>
                  <label className="flex items-center gap-3 p-4 border border-outline-variant rounded-xl hover:border-primary/40 hover:bg-surface-container-low transition-all cursor-pointer">
                    <input
                      className="rounded text-primary focus:ring-primary/20 border-outline-variant"
                      type="checkbox"
                    />
                    <span className="text-body-md">Guided Tours</span>
                  </label>
                  <label className="flex items-center gap-3 p-4 border border-outline-variant rounded-xl hover:border-primary/40 hover:bg-surface-container-low transition-all cursor-pointer">
                    <input
                      className="rounded text-primary focus:ring-primary/20 border-outline-variant"
                      type="checkbox"
                    />
                    <span className="text-body-md">Entrance Fees</span>
                  </label>
                  <label className="flex items-center gap-3 p-4 border border-outline-variant rounded-xl hover:border-primary/40 hover:bg-surface-container-low transition-all cursor-pointer">
                    <input
                      className="rounded text-primary focus:ring-primary/20 border-outline-variant"
                      type="checkbox"
                    />
                    <span className="text-body-md">WIFI Onboard</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2">
                  Exclusions
                </label>
                <textarea
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl py-4 px-4 text-on-surface font-body-md min-h-20"
                  placeholder="What's not included? (e.g. Flight tickets, personal insurance...)"
                ></textarea>
              </div>
            </div>
          </section>

          <section className="glass-card p-8 rounded-2xl shadow-sm border border-outline-variant">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary-container/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary">
                    map
                  </span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface">
                  Itinerary Builder
                </h2>
              </div>
              <button
                className="flex items-center gap-2 bg-secondary/10 text-secondary font-bold hover:bg-secondary/20 px-5 py-2 rounded-xl transition-all"
                type="button"
              >
                <span className="material-symbols-outlined">add</span>
                <span>Add Day</span>
              </button>
            </div>
            <div className="space-y-6" id="itinerary-container">
              <div className="itinerary-day border border-outline-variant rounded-2xl overflow-hidden bg-surface-container-lowest/50 shadow-sm transition-all hover:border-secondary/30">
                <div className="bg-surface-container-low/50 border-b border-outline-variant px-6 py-3 flex items-center justify-between">
                  <span className="font-bold text-primary font-label-sm text-label-sm uppercase tracking-wider">
                    Day 1
                  </span>
                  <button
                    className="text-on-surface-variant hover:text-error transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="md:col-span-3 space-y-4">
                    <input
                      className="w-full bg-surface-muted/50 border border-outline-variant rounded-xl py-3 px-4 text-on-surface font-semibold font-body-md"
                      placeholder="Title for the day (e.g. Arrival &amp; Welcome Dinner)"
                      type="text"
                    />
                    <textarea
                      className="w-full bg-surface-muted/50 border border-outline-variant rounded-xl py-3 px-4 text-on-surface font-body-md"
                      placeholder="Detailed schedule and activities for this day..."
                      rows={4}
                    ></textarea>
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="block font-label-sm text-label-sm text-on-surface-variant">
                      Visual Context
                    </label>
                    <div className="flex-1 border-2 border-dashed border-outline-variant rounded-xl flex flex-col items-center justify-center bg-surface-muted/30 group hover:border-secondary transition-all cursor-pointer min-h-35">
                      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary mb-2 text-3xl">
                        add_a_photo
                      </span>
                      <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider text-center px-4">
                        Upload Day Image
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="itinerary-day border border-outline-variant rounded-2xl overflow-hidden bg-surface-container-lowest/50 shadow-sm transition-all hover:border-secondary/30">
                <div className="bg-surface-container-low/50 border-b border-outline-variant px-6 py-3 flex items-center justify-between">
                  <span className="font-bold text-primary font-label-sm text-label-sm uppercase tracking-wider">
                    Day 2
                  </span>
                  <button
                    className="text-on-surface-variant hover:text-error transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="md:col-span-3 space-y-4">
                    <input
                      className="w-full bg-surface-muted/50 border border-outline-variant rounded-xl py-3 px-4 text-on-surface font-semibold font-body-md"
                      placeholder="Title for the day"
                      type="text"
                    />
                    <textarea
                      className="w-full bg-surface-muted/50 border border-outline-variant rounded-xl py-3 px-4 text-on-surface font-body-md"
                      placeholder="Detailed schedule and activities for this day.."
                      rows={4}
                    ></textarea>
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="block font-label-sm text-label-sm text-on-surface-variant">
                      Visual Context
                    </label>
                    <div className="flex-1 border-2 border-dashed border-outline-variant rounded-xl flex flex-col items-center justify-center bg-surface-muted/30 group hover:border-secondary transition-all cursor-pointer min-h-35">
                      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary mb-2 text-3xl">
                        add_a_photo
                      </span>
                      <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider text-center px-4">
                        Upload Day Image
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="fixed bottom-0 right-0 left-64 h-24 bg-surface/90 backdrop-blur-md border-t border-outline-variant/30 px-12 flex items-center justify-end gap-6 z-40">
            <button
              className="cursor-pointer px-6 py-2 text-on-surface-variant font-bold hover:bg-surface-container-low rounded-2xl transition-all"
              type="button"
            >
              Discard Changes
            </button>

            <button className="cursor-pointer px-6 py-2 bg-primary text-on-primary rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md">
              <span className="material-symbols-outlined">publish</span>
              Create Package
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
