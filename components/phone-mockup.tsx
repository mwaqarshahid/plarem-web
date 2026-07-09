import { LogoMark } from "./logo";

function ReminderRow({
  emoji,
  title,
  place,
  radius,
  active,
  status,
  statusColor,
}: {
  emoji: string;
  title: string;
  place: string;
  radius: string;
  active: boolean;
  status: string;
  statusColor: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.04] p-3">
      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-core/25 text-sm">
          {emoji}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[11px] font-semibold text-fg">{title}</p>
          <p className="truncate text-[9px] text-fg-faint">
            {place} · {radius}
          </p>
        </div>
        {/* switch */}
        <div
          className={`flex h-4 w-7 shrink-0 items-center rounded-full px-0.5 transition-colors ${
            active ? "justify-end bg-indigo-core" : "justify-start bg-white/15"
          }`}
        >
          <div className="h-3 w-3 rounded-full bg-white" />
        </div>
      </div>
      <div className="mt-2 flex items-center gap-1.5">
        <span
          className="rounded-full px-1.5 py-px text-[8px] font-semibold"
          style={{ color: statusColor, backgroundColor: `${statusColor}22` }}
        >
          {status}
        </span>
      </div>
    </div>
  );
}

/**
 * A hand-built replica of the Plarem home screen — pure CSS, no screenshot.
 * The map strip up top pulses a geofence ring around the pinned place.
 */
export function PhoneMockup() {
  return (
    <div className="relative animate-float" aria-hidden="true">
      {/* glow behind the device */}
      <div className="absolute -inset-10 -z-10 rounded-full bg-indigo-core/25 blur-[90px]" />

      {/* device frame */}
      <div className="w-[280px] rounded-[2.6rem] border border-white/15 bg-[#1a1d29] p-2 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)] sm:w-[300px]">
        <div className="relative overflow-hidden rounded-[2.1rem] bg-[#0F1117]">
          {/* status bar + notch */}
          <div className="relative flex items-center justify-between px-5 pt-3 pb-1">
            <span className="text-[9px] font-medium text-fg-muted">9:41</span>
            <div className="absolute left-1/2 top-2 h-4 w-16 -translate-x-1/2 rounded-full bg-black" />
            <div className="flex items-center gap-1">
              <div className="h-1.5 w-3 rounded-sm bg-fg-muted/70" />
              <div className="h-1.5 w-1.5 rounded-full bg-fg-muted/70" />
            </div>
          </div>

          {/* app header */}
          <div className="flex items-center justify-between px-4 pt-2">
            <div className="flex items-center gap-1.5">
              <LogoMark size={16} />
              <span className="text-[13px] font-bold tracking-tight text-fg">
                Plarem
              </span>
            </div>
            <div className="h-6 w-6 rounded-full bg-white/[0.07]" />
          </div>

          {/* map strip with pulsing geofence */}
          <div className="relative mx-4 mt-3 h-28 overflow-hidden rounded-2xl border border-white/[0.06] bg-[#12141d]">
            {/* road lines */}
            <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 260 112">
              <path d="M-10 30 C 60 20, 120 55, 270 40" stroke="#2a2e40" strokeWidth="7" fill="none" />
              <path d="M-10 80 C 80 95, 150 60, 270 85" stroke="#2a2e40" strokeWidth="5" fill="none" />
              <path d="M120 -10 C 110 40, 140 70, 125 122" stroke="#2a2e40" strokeWidth="4" fill="none" />
            </svg>
            {/* geofence rings */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 animate-ring rounded-full border-2 border-teal-bright/70" />
              <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 animate-ring-late rounded-full border-2 border-teal-bright/50" />
              <div className="h-16 w-16 rounded-full border border-teal-bright/40 bg-teal-core/10" />
            </div>
            {/* pin */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[85%]">
              <svg width="22" height="28" viewBox="0 0 128 128">
                <path
                  d="M64 24 C49.5 24 39 35 39 48.5 C39 55.5 48.5 67 64 91 C79.5 67 89 55.5 89 48.5 C89 35 78.5 24 64 24 Z"
                  fill="#4F5BE8"
                />
                <circle cx="64" cy="47" r="11.5" fill="#fff" opacity="0.96" />
                <circle cx="64" cy="47" r="5" fill="#00A98F" />
              </svg>
            </div>
          </div>

          {/* search + chips */}
          <div className="px-4 pt-3">
            <div className="flex h-8 items-center gap-2 rounded-full bg-white/[0.06] px-3">
              <div className="h-2.5 w-2.5 rounded-full border border-fg-faint" />
              <span className="text-[9px] text-fg-faint">Search reminders…</span>
            </div>
            <div className="mt-2.5 flex gap-1.5">
              <span className="rounded-full bg-indigo-core px-2.5 py-1 text-[8px] font-semibold text-white">
                All
              </span>
              <span className="rounded-full bg-white/[0.07] px-2.5 py-1 text-[8px] text-fg-muted">
                Pending
              </span>
              <span className="rounded-full bg-white/[0.07] px-2.5 py-1 text-[8px] text-fg-muted">
                Shopping
              </span>
              <span className="rounded-full bg-white/[0.07] px-2.5 py-1 text-[8px] text-fg-muted">
                Errands
              </span>
            </div>
          </div>

          {/* reminder cards */}
          <div className="space-y-2 px-4 pt-3 pb-4">
            <ReminderRow
              emoji="🛒"
              title="Buy groceries"
              place="City Supermarket"
              radius="250 m"
              active
              status="Pending"
              statusColor="#9BA3FF"
            />
            <ReminderRow
              emoji="📦"
              title="Pick up parcel"
              place="Post office"
              radius="100 m"
              active
              status="Pending"
              statusColor="#9BA3FF"
            />
            <ReminderRow
              emoji="💊"
              title="Collect prescription"
              place="Greenfield Pharmacy"
              radius="500 m"
              active={false}
              status="Completed"
              statusColor="#3DD9BD"
            />
          </div>

          {/* FAB */}
          <div className="absolute bottom-16 right-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-core text-lg font-light text-white shadow-[0_8px_24px_rgba(79,91,232,0.5)]">
            +
          </div>

          {/* bottom nav */}
          <div className="flex items-center justify-around border-t border-white/[0.06] bg-[#12141d] px-6 py-3">
            <div className="flex flex-col items-center gap-0.5">
              <div className="h-3.5 w-3.5 rounded-[4px] bg-indigo-bright" />
              <span className="text-[7px] font-medium text-indigo-bright">
                Reminders
              </span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <div className="h-3.5 w-3.5 rounded-full border border-fg-faint" />
              <span className="text-[7px] text-fg-faint">Settings</span>
            </div>
          </div>

          {/* home indicator */}
          <div className="pb-1.5">
            <div className="mx-auto h-1 w-24 rounded-full bg-white/20" />
          </div>
        </div>
      </div>

      {/* floating arrival notification */}
      <div className="glass absolute -left-16 top-16 hidden w-52 rounded-2xl p-3 shadow-2xl sm:block md:-left-24">
        <div className="flex items-start gap-2.5">
          <LogoMark size={18} />
          <div className="min-w-0">
            <p className="text-[10px] font-semibold text-fg">
              You&apos;ve arrived 🎉
            </p>
            <p className="mt-0.5 text-[9px] leading-snug text-fg-muted">
              Buy groceries — City Supermarket
            </p>
          </div>
          <span className="ml-auto shrink-0 text-[8px] text-fg-faint">now</span>
        </div>
      </div>
    </div>
  );
}
