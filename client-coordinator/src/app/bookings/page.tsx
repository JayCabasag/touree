export default function BookingsPage() {
  return (
    <div className="md:ml-64 min-h-screen flex flex-col w-full">
      <div className="p-6 md:p-8 max-w-7xl w-full mx-auto space-y-8 ">
        <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              Bookings Management
            </h2>
            <p className="text-body-md text-text-secondary">
              Oversee all traveler reservations and manage confirmation
              workflows.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-surface border border-outline-variant text-on-surface-variant rounded-lg font-semibold flex items-center gap-2 hover:bg-surface-variant/50 transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                filter_list
              </span>
              Filter
            </button>
            <button className="px-4 py-2 bg-surface border border-outline-variant text-on-surface-variant rounded-lg font-semibold flex items-center gap-2 hover:bg-surface-variant/50 transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                ios_share
              </span>
              Export
            </button>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="glass-card p-4 rounded-2xl flex flex-col gap-3 transition-all hover:shadow-md border border-outline-variant">
            <div className="flex justify-between items-center">
              <div className="p-2 bg-primary-fixed rounded-lg text-primary">
                <span className="material-symbols-outlined text-lg">
                  confirmation_number
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
                Total Bookings
              </p>
              <div className="flex items-end justify-between">
                <p className="text-xl font-headline-md text-on-surface leading-none">
                  1,284
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
                  pending_actions
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
                Pending Confirmation
              </p>
              <div className="flex items-end justify-between">
                <p className="text-xl font-headline-md text-on-surface leading-none">
                  42
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
              <div className="p-2 bg-secondary-fixed rounded-lg text-secondary">
                <span className="material-symbols-outlined text-lg">
                  check_circle
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
                Confirmed Bookings
              </p>
              <div className="flex items-end justify-between">
                <p className="text-xl font-headline-md text-on-surface leading-none">
                  1,156
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

          <div className="glass-card p-4 rounded-2xl flex flex-col gap-3 transition-all hover:shadow-md border border-outline-variant">
            <div className="flex justify-between items-center">
              <div className="p-2 bg-tertiary-container/20 rounded-lg text-tertiary">
                <span className="material-symbols-outlined text-lg">
                  payments
                </span>
              </div>
              <span className="text-tertiary font-bold text-[10px] flex items-center gap-0.5">
                <span className="material-symbols-outlined text-xs">
                  trending_up
                </span>
                +24%
              </span>
            </div>
            <div>
              <p className="text-on-surface-variant text-[10px] uppercase tracking-widest mb-0.5 opacity-70">
                Monthly Revenue
              </p>
              <div className="flex items-end justify-between">
                <p className="text-xl font-headline-md text-on-surface leading-none">
                  $84.2k
                </p>
                <div className="flex gap-0.5 items-end h-6">
                  <div className="w-1 bg-tertiary/20 rounded-full h-2"></div>
                  <div className="w-1 bg-tertiary/30 rounded-full h-4"></div>
                  <div className="w-1 bg-tertiary/40 rounded-full h-3"></div>
                  <div className="w-1 bg-tertiary rounded-full h-5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-surface border border-outline-variant/30 rounded-2xl shadow-sm overflow-hidden flex flex-col glass-card">
          <div className="p-6 border-b border-outline-variant/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h4 className="font-bold text-headline-md">Recent Bookings</h4>
            <div className="flex items-center gap-4">
              <div className="relative w-64">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">
                  search
                </span>
                <input
                  className="w-full text-label-sm bg-surface-container-lowest border-outline-variant rounded-lg py-2 pl-9"
                  placeholder="Quick search..."
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr
                  className="bg-surface-container-low/50"
                  style={{
                    transform: "translateX(0px)",
                    transition: "transform 0.2s ease-out",
                  }}
                >
                  <th className="px-6 py-4 text-label-sm font-bold text-on-surface-variant border-b border-outline-variant/20">
                    BOOKING ID
                  </th>
                  <th className="px-6 py-4 text-label-sm font-bold text-on-surface-variant border-b border-outline-variant/20">
                    TRAVELER
                  </th>
                  <th className="px-6 py-4 text-label-sm font-bold text-on-surface-variant border-b border-outline-variant/20">
                    PACKAGE / DESTINATION
                  </th>
                  <th className="px-6 py-4 text-label-sm font-bold text-on-surface-variant border-b border-outline-variant/20">
                    TRAVEL DATES
                  </th>
                  <th className="px-6 py-4 text-label-sm font-bold text-on-surface-variant border-b border-outline-variant/20">
                    AMOUNT
                  </th>
                  <th className="px-6 py-4 text-label-sm font-bold text-on-surface-variant border-b border-outline-variant/20">
                    STATUS
                  </th>
                  <th className="px-6 py-4 text-label-sm font-bold text-on-surface-variant border-b border-outline-variant/20">
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                <tr
                  className="hover:bg-surface-container-lowest transition-colors group"
                  style={{
                    transform: "translateX(0px)",
                    transition: "transform 0.2s ease-out",
                  }}
                >
                  <td className="px-6 py-5 font-semibold text-primary">
                    #TR-8821
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <img
                        alt="Traveler Avatar"
                        className="w-9 h-9 rounded-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFbYPxm7lcK513MgLL0xqNxOXAYGCqq0BYrVfUYu8ohieAblr_5tbQt4T61VsJpL-n3zy6dmE7DYyfge4cJfJXD8rngL3tffCu0ksHelKHbUQsFlsR4kGyL6S3ij82A9bevfIFQdNz-0HbNjuY8jjNKMJhJiSm_bYcW0ezxgOYX1CR780Hce_Spdmtpje92NUsRLwXTf8rd09W29hCDR40uZBw2R_bwBhrXGtU2YcXcnn5KnIEyhfI77xFhMRKu8OAXKRNhs-Dc3I"
                      />
                      <div>
                        <p className="text-label-sm font-bold text-on-surface">
                          Elena Rodriguez
                        </p>
                        <p className="text-[11px] text-text-secondary">
                          elena.rod@email.com
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="text-label-sm font-semibold">
                        Santorini Sunset Retreat
                      </span>
                      <span className="text-[11px] text-text-secondary flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">
                          location_on
                        </span>
                        Greece
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-label-sm text-on-surface">
                    Oct 12 - Oct 18, 2023
                  </td>
                  <td className="px-6 py-5 font-bold text-on-surface">
                    $2,450
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-status-warning/10 text-status-warning border border-status-warning/20">
                      PENDING
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <button
                        className="p-1.5 hover:bg-secondary-container/10 text-secondary rounded transition-colors"
                        title="Confirm Booking"
                      >
                        <span
                          className="material-symbols-outlined text-[20px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          check_circle
                        </span>
                      </button>
                      <button
                        className="p-1.5 hover:bg-surface-variant text-on-surface-variant rounded transition-colors"
                        title="View Details"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          visibility
                        </span>
                      </button>
                      <button
                        className="p-1.5 hover:bg-surface-variant text-on-surface-variant rounded transition-colors"
                        title="Edit"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          edit
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr
                  className="hover:bg-surface-container-lowest transition-colors group"
                  style={{
                    transform: "translateX(0px)",
                    transition: "transform 0.2s ease-out",
                  }}
                >
                  <td className="px-6 py-5 font-semibold text-primary">
                    #TR-8819
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <img
                        alt="Traveler Avatar"
                        className="w-9 h-9 rounded-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeqnMd7766zp2ORIZkyhVdU2RvZGcdzlVlzf2CiV5tgqX_gx8qPk60gcTDgtrdR3L8FQZDLcPhu3uB_8fLK5QETD0sdocU8Mrfdr9ASCIA0vmBg1hxksssjhRws4STF1aNj5kop2etlGZwe_cBav1iYy5b70vPCAi1Z8HDVZpqixgDn_hzwPdMfEAJ-_NWDrOEcKfUJN-TJTxyKCN5sBKZIsRakUcR-YJdo_ENLMv_YYhBVHIDGpxL1ovnvazZLxPQ2tuUStpjeNQ"
                      />
                      <div>
                        <p className="text-label-sm font-bold text-on-surface">
                          Marcus Thorne
                        </p>
                        <p className="text-[11px] text-text-secondary">
                          m.thorne@corp.com
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="text-label-sm font-semibold">
                        Kyoto Zen Gardens
                      </span>
                      <span className="text-[11px] text-text-secondary flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">
                          location_on
                        </span>
                        Japan
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-label-sm text-on-surface">
                    Nov 05 - Nov 12, 2023
                  </td>
                  <td className="px-6 py-5 font-bold text-on-surface">
                    $3,820
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-secondary/10 text-secondary border border-secondary/20">
                      CONFIRMED
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <button
                        className="p-1.5 hover:bg-surface-variant text-on-surface-variant rounded transition-colors"
                        title="View Details"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          visibility
                        </span>
                      </button>
                      <button
                        className="p-1.5 hover:bg-surface-variant text-on-surface-variant rounded transition-colors"
                        title="Edit"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          edit
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-surface-container-lowest transition-colors group">
                  <td className="px-6 py-5 font-semibold text-primary">
                    #TR-8815
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <img
                        alt="Traveler Avatar"
                        className="w-9 h-9 rounded-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaPLNnfYMDlyBiLDa7a7gbtTIHQZihJda5u0E37Z9FXaEX_rLQFP4PFigZYo5-hpIL1LqNwppQRDtRcE4Fs2Fzzw_PNmMdysFUxcAQjFxEd66KFLw4GPEO5jiUqwvN-zLJ2nbPX0xd0x4ykRG6PYz4UXl8cv8GdtpYAGDrC2XMTqjEHP1NhO7YCujfhTvKUei_45r9he969Id15ls9dvKxFrBixATKSfuAt6RQpgxa2lk4SPp7ZkOv_rwkKbxSspHRGaMM0yoNXVo"
                      />
                      <div>
                        <p className="text-label-sm font-bold text-on-surface">
                          Sarah Jenkins
                        </p>
                        <p className="text-[11px] text-text-secondary">
                          sarah.jenks@web.com
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="text-label-sm font-semibold">
                        Amalfi Coast Luxury
                      </span>
                      <span className="text-[11px] text-text-secondary flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">
                          location_on
                        </span>
                        Italy
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-label-sm text-on-surface">
                    Sep 20 - Sep 28, 2023
                  </td>
                  <td className="px-6 py-5 font-bold text-on-surface">
                    $5,100
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-tertiary/10 text-tertiary border border-tertiary/20">
                      COMPLETED
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <button
                        className="p-1.5 hover:bg-surface-variant text-on-surface-variant rounded transition-colors"
                        title="View Details"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          visibility
                        </span>
                      </button>
                      <button
                        className="p-1.5 hover:bg-surface-variant text-on-surface-variant rounded transition-colors"
                        title="Edit"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          edit
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-surface-container-lowest transition-colors group">
                  <td className="px-6 py-5 font-semibold text-primary">
                    #TR-8812
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-outline font-bold text-label-sm">
                        JD
                      </div>
                      <div>
                        <p className="text-label-sm font-bold text-on-surface">
                          Julian Drake
                        </p>
                        <p className="text-[11px] text-text-secondary">
                          jd@creative.org
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 opacity-60">
                    <div className="flex flex-col">
                      <span className="text-label-sm font-semibold">
                        Safari Expedition
                      </span>
                      <span className="text-[11px] text-text-secondary flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">
                          location_on
                        </span>
                        Kenya
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-label-sm text-on-surface opacity-60">
                    Oct 01 - Oct 07, 2023
                  </td>
                  <td className="px-6 py-5 font-bold text-on-surface opacity-60">
                    $3,400
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-error/10 text-error border border-error/20">
                      CANCELLED
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <button
                        className="p-1.5 hover:bg-surface-variant text-on-surface-variant rounded transition-colors"
                        title="View Details"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          visibility
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <footer className="p-6 border-t border-outline-variant/20 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-label-sm text-text-secondary">
              Showing <span className="font-bold text-on-surface">1 to 10</span>{" "}
              of <span className="font-bold text-on-surface">1,284</span>{" "}
              entries
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
                129
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-variant text-on-surface-variant transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
}
