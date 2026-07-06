export default function QuoteRequests() {
  return (
    <div className="ml-64 min-h-screen w-full">
      <div className="p-6 md:p-8  px-gutter pb-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Quote Requests
            </h2>
            <p className="text-text-secondary mt-1">
              Manage and respond to personalized travel inquiries.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-white border border-outline-variant rounded-lg flex items-center gap-2 hover:bg-surface-muted transition-colors">
              <span className="material-symbols-outlined text-sm">
                filter_list
              </span>
              <span className="text-sm font-semibold">Filter</span>
            </button>
            <button className="px-4 py-2 bg-white border border-outline-variant rounded-lg flex items-center gap-2 hover:bg-surface-muted transition-colors">
              <span className="material-symbols-outlined text-sm">
                download
              </span>
              <span className="text-sm font-semibold">Export</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="glass-card p-4 rounded-2xl flex flex-col gap-3 transition-all hover:shadow-md border border-outline-variant">
            <div className="flex justify-between items-center">
              <div className="p-2 bg-primary-fixed rounded-lg text-primary">
                <span className="material-symbols-outlined text-lg">inbox</span>
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
                New Requests
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
                  schedule
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
                Avg. Response
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
                  ads_click
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
                Conversion Rate
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
                Est. Commission
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

        <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-surface-container">
          <div className="p-6 border-b border-surface-container flex items-center justify-between">
            <h4 className="font-bold text-lg">Incoming Requests</h4>
            <div className="flex gap-4">
              <span className="flex items-center gap-2 text-sm text-text-secondary">
                <span className="w-3 h-3 rounded-full bg-error"></span> Urgent
              </span>
              <span className="flex items-center gap-2 text-sm text-text-secondary">
                <span className="w-3 h-3 rounded-full bg-primary-container"></span>{" "}
                Open
              </span>
              <span className="flex items-center gap-2 text-sm text-text-secondary">
                <span className="w-3 h-3 rounded-full bg-tertiary-container"></span>{" "}
                Responded
              </span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-surface-muted/50 border-b border-surface-container">
                <tr>
                  <th className="px-6 py-4 font-bold text-xs uppercase tracking-wider text-text-secondary">
                    Destination
                  </th>
                  <th className="px-6 py-4 font-bold text-xs uppercase tracking-wider text-text-secondary">
                    User
                  </th>
                  <th className="px-6 py-4 font-bold text-xs uppercase tracking-wider text-text-secondary">
                    Budget
                  </th>
                  <th className="px-6 py-4 font-bold text-xs uppercase tracking-wider text-text-secondary">
                    Dates &amp; PAX
                  </th>
                  <th className="px-6 py-4 font-bold text-xs uppercase tracking-wider text-text-secondary">
                    Status
                  </th>
                  <th className="px-6 py-4 font-bold text-xs uppercase tracking-wider text-text-secondary text-right">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container">
                <tr className="hover:bg-surface-muted/30 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl overflow-hidden shadow-sm">
                        <img
                          className="w-full h-full object-cover"
                          data-alt="A breathtaking aerial view of Santorini, Greece, with iconic white-washed buildings and vibrant blue domes overlooking the deep azure Aegean Sea. The scene is captured at golden hour, casting a warm, romantic glow over the caldera. The high-resolution photograph emphasizes the luxury and allure of the Mediterranean destination."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbL8S3Ze_MusTwi3r5_WhJomkn2RyPmpnQhq0Wmyq5D-JhYm3ZUwdVadpv3R0aWACT3HvE0bIR3gmd_NOyyNNSERNQf0xHGFMDH4AqYm1r1eCdMAwqtwxGsyirqJP56PsEl_yEo1TmYMJMWo3RBmqfIz2H3RdbqujDt4Y5x5vo-pKJzB4RfU29ZqFcKFkCaKK76RYjFY_QpdVAoCfI45F2U50DoD5uHkPj8lcCPxZ-TjAubwEf7mTYF-ntNf5BkBzuCYypVkQY2-0"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-on-surface">
                          Santorini, Greece
                        </p>
                        <p className="text-xs text-text-secondary">
                          Luxury Honeymoon
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="font-semibold">Marcus Webb</span>
                      <span className="text-xs text-text-secondary">
                        Elite Member
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="font-bold text-on-surface">$12,500+</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col text-sm">
                      <span className="">Oct 12 - Oct 20</span>
                      <span className="text-text-secondary text-xs flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">
                          group
                        </span>{" "}
                        2 Guests
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-error-container text-on-error-container">
                      Urgent
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="bg-primary text-on-primary px-5 py-2 rounded-lg font-bold text-sm shadow-sm hover:shadow-md transition-all active:scale-95">
                      Send Offer
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-surface-muted/30 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl overflow-hidden shadow-sm">
                        <img
                          className="w-full h-full object-cover"
                          data-alt="A stunning wide-angle shot of the Tokyo skyline at night, with the iconic Tokyo Tower glowing in warm orange and the Shinjuku district in the background. The city is a sea of shimmering lights and futuristic energy. The mood is vibrant, modern, and exciting, showcasing the high-tech urban beauty of Japan."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuEaoC_lNLwEagditsTOMbjKBhHSY_p8UUK4sJWGz144vKatqB8DYEINk-xoqNDRvdtz4QUdZPjPFR2125R-lLb5S9Qx2olTb7RK66kjkMAoBTowzVX-HMwxKI2FkGQbtRqQy0XexfAJBlMje7qFx4Ios0OAELKkIYnlW-MvNm2uvlz6u_dUn9NTc_u92KtrqLkzFJWy1GgfgH0kFdaOJzLdrX89dlkB_kxnPV3dwIsJdPMcv9X7E5Cpjj2GuOh6atyDVjCh8d_IU"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-on-surface">
                          Tokyo, Japan
                        </p>
                        <p className="text-xs text-text-secondary">
                          Family Expedition
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="font-semibold">Sarah Jenkins</span>
                      <span className="text-xs text-text-secondary">
                        First-time User
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="font-bold text-on-surface">$8,200+</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col text-sm">
                      <span className="">Nov 05 - Nov 18</span>
                      <span className="text-text-secondary text-xs flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">
                          group
                        </span>{" "}
                        4 Guests
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary-container/20 text-on-primary-container border border-primary-container">
                      Open
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="bg-primary text-on-primary px-5 py-2 rounded-lg font-bold text-sm shadow-sm hover:shadow-md transition-all active:scale-95">
                      Send Offer
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-surface-muted/30 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3 opacity-60">
                      <div className="w-12 h-12 rounded-xl overflow-hidden shadow-sm">
                        <img
                          className="w-full h-full object-cover"
                          data-alt="A serene landscape of the Swiss Alps in winter, featuring snow-capped peaks against a crisp blue sky. A luxury wooden chalet with smoking chimneys sits nestled in the valley, surrounded by frosted pine trees. The mood is tranquil, exclusive, and breathtakingly beautiful, evoking a sense of peaceful mountain escape."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuALMypu0S6YkNXLAnk-76gjX3F2tz85CKAVllGRapl4o2la384DjiZ2Uq_nnRWF1WJa3lSwWiFllFdq8BD-CMU8QvH2Fu7KVl0Q2XT9CrzxNpp9280hCirKo1ItCXCDb6DeorLtdPWvsiyZkzAA026SlJWjoKNL85T3iuZ8XpFEFuzV0h6aMq9jIebJp-bI22J-ybs2-wjZ1pIfzYReWOTOrcyNSm1ouCyi8g-TvFxbP-VsiFP3melrjw3o7fAjKWL2yn4fZHq0So8"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-on-surface">
                          Zermatt, Switzerland
                        </p>
                        <p className="text-xs text-text-secondary">
                          Ski Retreat
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 opacity-60">
                    <div className="flex flex-col">
                      <span className="font-semibold">David Chen</span>
                      <span className="text-xs text-text-secondary">
                        Premium Client
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 opacity-60">
                    <span className="font-bold text-on-surface">$15,400+</span>
                  </td>
                  <td className="px-6 py-5 opacity-60">
                    <div className="flex flex-col text-sm">
                      <span className="">Dec 22 - Jan 02</span>
                      <span className="text-text-secondary text-xs flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">
                          group
                        </span>{" "}
                        3 Guests
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-tertiary-container/10 text-tertiary border border-tertiary-container/30">
                      Responded
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="bg-surface-muted text-text-secondary px-5 py-2 rounded-lg font-bold text-sm border border-outline-variant hover:bg-white transition-all">
                      View History
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-surface-muted/30 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl overflow-hidden shadow-sm">
                        <img
                          className="w-full h-full object-cover"
                          data-alt="An expansive view of the Serengeti plains in Tanzania at sunrise. A majestic lion walks through the golden grass, while silhouettes of acacia trees stand against a vibrant orange and pink horizon. A luxury safari vehicle is visible in the distance, capturing the essence of a high-end wildlife adventure. The image is grand and evocative."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF7cyJEG0ls2rYVeZmrrs7NYh7eJTda7U2Ult3wOEtX0lfeHPBmp9OjvOz3j3a_ntqHueujdZ8cFoEtB2XM2VFm3Rj3ArVbc-ZgBn3pgpSfG-gk58iTUZ3W0HD_yaSa65hhbEYFpXjkGvXsEuRFOe3xD_DfrXEa0eNMNsQu4KbGSBtc2qkh29kzROnowNw6sCH1bsC40VDmUYT0YlCm7KNq3Xkwt6fzTMuz9FDBiFrdw0T3fLZei8HTB4_XsJLn_zmN0rIJ8LzJms"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-on-surface">
                          Serengeti, Tanzania
                        </p>
                        <p className="text-xs text-text-secondary">
                          Safari Adventure
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="font-semibold">Olivia Thorne</span>
                      <span className="text-xs text-text-secondary">
                        Explorer Tier
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="font-bold text-on-surface">$11,000+</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col text-sm">
                      <span className="">Sep 14 - Sep 22</span>
                      <span className="text-text-secondary text-xs flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">
                          group
                        </span>{" "}
                        2 Guests
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary-container/20 text-on-primary-container border border-primary-container">
                      Open
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="bg-primary text-on-primary px-5 py-2 rounded-lg font-bold text-sm shadow-sm hover:shadow-md transition-all active:scale-95">
                      Send Offer
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-6 bg-surface-muted/30 border-t border-surface-container flex items-center justify-between">
            <p className="text-sm text-text-secondary">
              Showing 1-10 of 24 requests
            </p>
            <div className="flex gap-2">
              <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant bg-white text-text-secondary hover:bg-surface-muted">
                <span className="material-symbols-outlined text-sm">
                  chevron_left
                </span>
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-on-primary text-sm font-bold">
                1
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant bg-white text-text-secondary hover:bg-surface-muted text-sm font-bold">
                2
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant bg-white text-text-secondary hover:bg-surface-muted text-sm font-bold">
                3
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant bg-white text-text-secondary hover:bg-surface-muted">
                <span className="material-symbols-outlined text-sm">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
