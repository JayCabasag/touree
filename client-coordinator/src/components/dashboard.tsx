"use client";

import { useRouter } from "next/navigation";
import { PendingBookings } from "./pending-bookings";
import { RecentActivities } from "./recent-activities";
import { Stats as DashboardStats } from "./stats";
import { UpcommingDepartures } from "./upcoming-departures";

export function Dashboard() {
  const router = useRouter();
  return (
    <>
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-1">
            Welcome back, Marcus
          </h2>
          <p className="text-on-surface-variant text-body-md">
            Here's what's happening with your travel packages today.
          </p>
        </div>
        <div className="hidden lg:block">
          <button
            onClick={() => router.push("/packages/create")}
            className="cursor-pointer px-6 py-2 bg-primary text-on-primary rounded-xl font-bold flex items-center gap-2 hover:shadow-lg transition-all"
          >
            <span className="material-symbols-outlined">add</span>
            New Package
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <DashboardStats />
          <PendingBookings />
          <RecentActivities />
          <UpcommingDepartures />
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="glass-card p-4 rounded-2xl flex items-center justify-between border-t border-outline-variant">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-tertiary"></span>
              </span>
              <span className="font-bold text-label-sm text-tertiary uppercase tracking-wider">
                Live System Status
              </span>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant text-lg">
              info
            </span>
          </div>

          <section className="glass-card rounded-2xl p-6 shadow-sm overflow-hidden flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Sales Velocity
                </h3>
                <p className="text-on-surface-variant text-label-sm mt-1">
                  Conversion +4% week-over-week
                </p>
              </div>
              <button className="p-2 hover:bg-surface-container rounded-lg transition-colors">
                <span className="material-symbols-outlined text-on-surface-variant">
                  show_chart
                </span>
              </button>
            </div>
            <div className="h-40 flex items-end justify-between gap-2 px-1 relative">
              <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none opacity-10">
                <div className="w-full border-t border-outline"></div>
                <div className="w-full border-t border-outline"></div>
                <div className="w-full border-t border-outline"></div>
              </div>
              <div
                className="flex-1 bg-primary/10 rounded-t-lg h-[40%] transition-all hover:h-[45%] cursor-help"
                title="Mon: 40%"
              ></div>
              <div
                className="flex-1 bg-primary/25 rounded-t-lg h-[60%] transition-all hover:h-[65%] cursor-help"
                title="Tue: 60%"
              ></div>
              <div
                className="flex-1 bg-primary/20 rounded-t-lg h-[50%] transition-all hover:h-[55%] cursor-help"
                title="Wed: 50%"
              ></div>
              <div
                className="flex-1 bg-primary/50 rounded-t-lg h-[80%] transition-all hover:h-[85%] cursor-help"
                title="Thu: 80%"
              ></div>
              <div
                className="flex-1 bg-primary rounded-t-lg h-[95%] transition-all hover:h-full cursor-help"
                title="Fri: 95%"
              ></div>
              <div
                className="flex-1 bg-primary/40 rounded-t-lg h-[70%] transition-all hover:h-[75%] cursor-help"
                title="Sat: 70%"
              ></div>
            </div>
            <div className="flex justify-between mt-3 text-[10px] text-on-surface-variant uppercase font-bold tracking-widest px-1">
              <span className="">Mon</span>
              <span className="">Fri</span>
              <span className="">Sat</span>
            </div>
          </section>

          <section className="relative h-48 rounded-2xl overflow-hidden shadow-md group cursor-pointer">
            <img
              alt="London Skyline"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLF2a4P72_QvTJGZaHtbe4HPGTqFK9AK0mGDul1EkhMF1npxpLxGuBo8dR0dQ6z9mHQSl97Db02lfVuVgZOFWftVkjaf9vv-S5x47pDanqR1Cnr_SFRCWkNUnQ8oiXBrLEFz9o6wjnjfaw9k-4GYriY758Xp54lWOb78tIt6s8XNF1Iyc-ynbB-veDnqxAuTJjvRrvbHhilgGXupToJ4U72G80u1wSQp2pjfyBow2C3DwqOUM9OTXtdDdoh7zE6C6hBP4zFVewC0k"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute top-4 left-4">
              <span className="bg-primary text-on-primary text-[10px] px-2 py-0.5 rounded-full uppercase font-bold tracking-widest">
                Spotlight
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <h4 className="text-white font-bold text-lg leading-tight">
                London Luxury Stays
              </h4>
              <p className="text-white/80 text-xs mt-0.5">
                4 bookings this week • View Trends
              </p>
            </div>
            <div className="absolute bottom-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
              <button className="bg-white text-on-background w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
            </div>
          </section>

          <div className="glass-card rounded-2xl p-6">
            <h3 className="font-bold text-on-surface mb-4">Quick Shortcuts</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-surface-container-low transition-colors text-left border border-outline-variant">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    description
                  </span>
                  <span className="text-body-md">Draft Quote</span>
                </div>
                <span className="text-on-surface-variant font-label-sm">
                  ⌘Q
                </span>
              </button>
              <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-surface-container-low transition-colors text-left border border-outline-variant">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">
                    forum
                  </span>
                  <span className="text-body-md">Unread Chats</span>
                </div>
                <span className="bg-primary text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
