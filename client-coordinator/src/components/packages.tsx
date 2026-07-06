"use client";
export function Packages() {
  return (
    <div className="ml-64 min-h-screen w-full">
      <div className="p-6 md:p-8  px-gutter pb-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Travel Packages
            </h2>
            <p className="text-text-secondary font-body-md mt-1">
              Manage, edit, and track your curated travel experiences.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-lg border border-outline-variant text-on-surface hover:bg-surface-muted transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">
                filter_list
              </span>
              Filters
            </button>
            <button className="px-4 py-2 rounded-lg border border-outline-variant text-on-surface hover:bg-surface-muted transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">
                download
              </span>
              Export
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="glass-card p-4 rounded-2xl flex flex-col gap-3 transition-all hover:shadow-md border border-outline-variant">
            <div className="flex justify-between items-center">
              <div className="p-2 bg-primary-fixed rounded-lg text-primary">
                <span className="material-symbols-outlined text-lg">
                  verified
                </span>
              </div>
              <span className="text-tertiary font-bold text-[10px] flex items-center gap-0.5">
                <span className="material-symbols-outlined text-xs">
                  trending_up
                </span>
                +12%
              </span>
            </div>
            <div>
              <p className="text-on-surface-variant text-[10px] uppercase tracking-widest mb-0.5 opacity-70">
                Active Packages
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
          <div className="glass-card p-4 rounded-2xl flex flex-col gap-3 transition-all hover:shadow-md border border-outline-variant">
            <div className="flex justify-between items-center">
              <div className="p-2 bg-status-warning/10 rounded-lg text-status-warning">
                <span className="material-symbols-outlined text-lg">
                  edit_note
                </span>
              </div>
              <span className="text-error font-bold text-[10px] flex items-center gap-0.5">
                <span className="material-symbols-outlined text-xs">
                  trending_down
                </span>
                -5%
              </span>
            </div>
            <div>
              <p className="text-on-surface-variant text-[10px] uppercase tracking-widest mb-0.5 opacity-70">
                Draft Packages
              </p>
              <div className="flex items-end justify-between">
                <p className="text-xl font-headline-md text-on-surface leading-none">
                  8
                </p>
                <div className="flex gap-0.5 items-end h-6">
                  <div className="w-1 bg-status-warning/20 rounded-full h-4"></div>
                  <div className="w-1 bg-status-warning/30 rounded-full h-3"></div>
                  <div className="w-1 bg-status-warning/40 rounded-full h-5"></div>
                  <div className="w-1 bg-status-warning rounded-full h-2"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="glass-card p-4 rounded-2xl flex flex-col gap-3 transition-all hover:shadow-md border border-outline-variant">
            <div className="flex justify-between items-center">
              <div className="p-2 bg-surface-muted rounded-lg text-text-secondary">
                <span className="material-symbols-outlined text-lg">
                  visibility_off
                </span>
              </div>
              <span className="text-tertiary font-bold text-[10px] flex items-center gap-0.5">
                <span className="material-symbols-outlined text-xs">
                  trending_up
                </span>
                +8%
              </span>
            </div>
            <div>
              <p className="text-on-surface-variant text-[10px] uppercase tracking-widest mb-0.5 opacity-70">
                Hidden Packages
              </p>
              <div className="flex items-end justify-between">
                <p className="text-xl font-headline-md text-on-surface leading-none">
                  3
                </p>
                <div className="flex gap-0.5 items-end h-6">
                  <div className="w-1 bg-secondary/20 rounded-full h-3"></div>
                  <div className="w-1 bg-secondary/30 rounded-full h-5"></div>
                  <div className="w-1 bg-secondary/40 rounded-full h-4"></div>
                  <div className="w-1 bg-secondary rounded-full h-5"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="glass-card p-4 rounded-2xl flex flex-col gap-3 transition-all hover:shadow-md border border-outline-variant bg-primary text-on-primary">
            <div className="flex justify-between items-center">
              <div className="p-2 bg-white/20 rounded-lg text-on-primary">
                <span className="material-symbols-outlined text-lg">
                  payments
                </span>
              </div>
              <span className="text-on-primary font-bold text-[10px] flex items-center gap-0.5">
                <span className="material-symbols-outlined text-xs">
                  trending_up
                </span>
                +24%
              </span>
            </div>
            <div>
              <p className="text-white/70 text-[10px] uppercase tracking-widest mb-0.5">
                Total Revenue
              </p>
              <div className="flex items-end justify-between">
                <p className="text-xl font-headline-md text-on-primary leading-none">
                  $84.2k
                </p>
                <div className="flex gap-0.5 items-end h-6">
                  <div className="w-1 bg-white/20 rounded-full h-2"></div>
                  <div className="w-1 bg-white/30 rounded-full h-4"></div>
                  <div className="w-1 bg-white/40 rounded-full h-3"></div>
                  <div className="w-1 bg-white rounded-full h-5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden border border-outline-variant/30">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low/50">
                  <th className="px-6 py-4 font-label-sm text-text-secondary uppercase tracking-wider">
                    Package Title
                  </th>
                  <th className="px-6 py-4 font-label-sm text-text-secondary uppercase tracking-wider">
                    Destination
                  </th>
                  <th className="px-6 py-4 font-label-sm text-text-secondary uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-4 font-label-sm text-text-secondary uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 font-label-sm text-text-secondary uppercase tracking-wider">
                    Created Date
                  </th>
                  <th className="px-6 py-4 font-label-sm text-text-secondary uppercase tracking-wider text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20">
                <tr className="hover:bg-surface-muted transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-surface-variant shrink-0">
                        <img
                          className="w-full h-full object-cover"
                          data-alt="A wide panoramic shot of the Amalfi Coast in Italy with colorful houses clinging to cliffs overlooking the turquoise Mediterranean Sea. The scene is bathed in golden hour light, creating a luxurious and aspirational travel vibe. Modern corporate photography style, high-key colors, sunset red highlights."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmh3xJULV2UMx0rrPC4R7LLT1lw2Jf5eYHwwNtNSVyy0RinLLR7IIiI6PVE3Iod8RtC1wMSa9ieizy88SUSfWf4LGc_k7TtK4Yo4Dm0GgwihQmppaXsvjyIkWk9IR4PJl0-Qot6ehvkhMEXb6vkJruPyIVhRmVeNuiMYDCFVFlFC1-BtOqq4iJTZ8zKBtDb2hj85DZeMEBg1TDfCvviqxttlVJf7oPgND6FJKJzrZT70CuUoBZBFIsp9oDkANUANHmBVZtWfoVqwI"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-on-surface group-hover:text-primary transition-colors">
                          Amalfi Dream Escape
                        </p>
                        <p className="text-xs text-text-secondary">
                          7 Days Luxury Tour
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-body-md text-on-surface">
                    Positano, Italy
                  </td>
                  <td className="px-6 py-4 font-bold text-secondary">$3,450</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-tertiary-fixed/30 text-tertiary">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 text-text-secondary font-label-sm">
                    Oct 12, 2023
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button
                      className="p-2 hover:bg-primary-fixed rounded-lg text-primary transition-colors"
                      title="Edit"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        edit
                      </span>
                    </button>
                    <button
                      className="p-2 hover:bg-error-container rounded-lg text-error transition-colors"
                      title="Archive"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        archive
                      </span>
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-surface-muted transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-surface-variant shrink-0">
                        <img
                          className="w-full h-full object-cover"
                          data-alt="Futuristic neon-lit street in Tokyo, Japan, at night with glowing signs reflecting off rain-slicked pavement. A sense of energy and vibrant modern life. High-quality travel photography, deep blues and vibrant sunset reds, modern corporate aesthetics."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8Y_aGcGqj-IODWzAucZEcvyExF4CJ1mV2W0E0M2LTlvC6V4W9RGv3Sz0tyx6DQcvdzGXCBZme-fGtolY4VExbUr1ACwh6hS0lSM9IZaLDO7Zmm5KOUvqk_-oLFtQoSqBr7IBZqZ2teLlIDmXw3qJkaanjLMWdw2uFqb1vafAva3Vfd6DGK6Y_ZVZRY4KwmpQnO-AynpmbyOfiMgDM3KZric9bOd6hx4wsliqEZUWh3altyf9e5hoFSlwoa4jGFRXkg7_sPoW6AkA"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-on-surface group-hover:text-primary transition-colors">
                          Tokyo Neon Nights
                        </p>
                        <p className="text-xs text-text-secondary">
                          10 Days Exploration
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-body-md text-on-surface">
                    Tokyo, Japan
                  </td>
                  <td className="px-6 py-4 font-bold text-secondary">$4,200</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-surface-container-high text-on-surface-variant">
                      Draft
                    </span>
                  </td>
                  <td className="px-6 py-4 text-text-secondary font-label-sm">
                    Nov 05, 2023
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button
                      className="p-2 hover:bg-primary-fixed rounded-lg text-primary transition-colors"
                      title="Edit"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        edit
                      </span>
                    </button>
                    <button
                      className="p-2 hover:bg-error-container rounded-lg text-error transition-colors"
                      title="Archive"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        archive
                      </span>
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-surface-muted transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-surface-variant shrink-0">
                        <img
                          className="w-full h-full object-cover"
                          data-alt="The Northern Lights aurora borealis dancing over a snowy Icelandic mountain range with a serene, cold blue lake in the foreground. Professional landscape photography, high-end travel aesthetic, ethereal lighting, subtle color palette with pristine whites and deep blues."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF8zc0Jid4b-VMqDYSEygaBLhJM4K9QdW6il3VsCHsYJR5qmCTmsPGBiJhy_pD9hcq6AXxdKNvVEW4wF4GW5w1zSVDJuzm6VNJPB0Y0YiYaQW_N7O6QAs-aumQMJTrmdssOENmaKL-NGQl9944wpk9wmQP7hR-eqzTXi_fQ1QCNCXDTNfhGtVkHKEmwndyPGIUtf5XOe6uiQYg0KWZBuz6ZIamEWbnNpGQgfespEu07AhCMrZrFWVPWncdqlXYBYTeXAJIViG76Z4"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-on-surface group-hover:text-primary transition-colors">
                          Iceland Aurora Trail
                        </p>
                        <p className="text-xs text-text-secondary">
                          5 Days Adventure
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-body-md text-on-surface">
                    Reykjavik, Iceland
                  </td>
                  <td className="px-6 py-4 font-bold text-secondary">$2,800</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-outline-variant/30 text-outline">
                      Hidden
                    </span>
                  </td>
                  <td className="px-6 py-4 text-text-secondary font-label-sm">
                    Dec 12, 2023
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button
                      className="p-2 hover:bg-primary-fixed rounded-lg text-primary transition-colors"
                      title="Edit"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        edit
                      </span>
                    </button>
                    <button
                      className="p-2 hover:bg-error-container rounded-lg text-error transition-colors"
                      title="Archive"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        archive
                      </span>
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-surface-muted transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-surface-variant shrink-0">
                        <img
                          className="w-full h-full object-cover"
                          data-alt="A lush tropical beach in Bali with swaying palm trees, white sand, and crystal-clear turquoise water. A sense of tranquility and paradise. Modern travel brand photography, bright lighting, vibrant tropical tones with warm sunset red accents."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8ajDVUmpsmikrgTUzeP-eKbMAk4JPL_iQIg_wBYirxnqG1mk0Gs42FDyp1ESRagBrVsNwdiM1z4sv9K5WUaKECioDIV7cmtAj7ooGqzfsVm-293U0LM1pesn6S1e39w8ncW4B0X98Fq9MEvaE9_iMz0C9s9mGlWlRY57epmYYB0QNovbUmHWYtqoOSD1k7ABiEUJh3aeEXrrG2VWfeZsGUKqt5SToSHyhMMXQ07BSovXGxkgxJz3NfXdcRm1s__sNZhuog_vw9oY"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-on-surface group-hover:text-primary transition-colors">
                          Bali Wellness Retreat
                        </p>
                        <p className="text-xs text-text-secondary">
                          14 Days Journey
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-body-md text-on-surface">
                    Ubud, Bali
                  </td>
                  <td className="px-6 py-4 font-bold text-secondary">$5,900</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-tertiary-fixed/30 text-tertiary">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 text-text-secondary font-label-sm">
                    Jan 02, 2024
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button
                      className="p-2 hover:bg-primary-fixed rounded-lg text-primary transition-colors"
                      title="Edit"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        edit
                      </span>
                    </button>
                    <button
                      className="p-2 hover:bg-error-container rounded-lg text-error transition-colors"
                      title="Archive"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        archive
                      </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 bg-surface-muted/30 border-t border-outline-variant/30 flex justify-between items-center">
            <p className="text-label-sm text-text-secondary">
              Showing <span className="font-bold text-on-surface">1 to 4</span>{" "}
              of <span className="font-bold text-on-surface">35</span> packages
            </p>
            <div className="flex items-center gap-1">
              <button
                className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-variant text-on-surface-variant transition-colors disabled:opacity-30"
                disabled
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-on-primary font-bold shadow-sm">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-variant text-on-surface-variant transition-colors">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-variant text-on-surface-variant transition-colors">
                3
              </button>
              <span className="px-2 text-outline">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-variant text-on-surface-variant transition-colors">
                9
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-variant text-on-surface-variant transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
