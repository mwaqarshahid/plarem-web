import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { app } from "@/lib/app-data";

export const metadata: Metadata = {
  title: "Support",
  description: `Get help with ${app.name} — troubleshooting, feedback, and contact.`,
};

const tips = [
  {
    title: "Reminders don't trigger with the app closed",
    body: 'Make sure location permission is set to "Allow all the time" (Settings → Apps → Plarem → Permissions → Location). On some phones you also need to exempt Plarem from battery optimisation so the OS delivers geofence events promptly.',
  },
  {
    title: "The reminder arrived late",
    body: "The operating system batches geofence checks to save battery, so a delay of up to a couple of minutes after crossing the boundary is normal — especially with smaller radii. Radii of 100 m and up are the most reliable.",
  },
  {
    title: "Notifications don't appear",
    body: "Check that notifications are enabled for Plarem and that Do Not Disturb isn't silencing them. The app's Settings screen shows the live status of every permission it needs.",
  },
  {
    title: "Map or search isn't loading",
    body: "Place search and map tiles need an internet connection. Reminders themselves keep working offline — only the map preview and search require connectivity.",
  },
];

export default function SupportPage() {
  return (
    <PageShell
      eyebrow="Support"
      title="How can we help?"
      intro="Most issues come down to permissions or battery settings — check the quick fixes below, then reach out if you're still stuck."
    >
      <div className="space-y-3">
        {tips.map((tip) => (
          <details key={tip.title} className="group glass rounded-2xl px-6 py-4 open:pb-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-fg [&::-webkit-details-marker]:hidden">
              {tip.title}
              <span className="text-fg-faint transition-transform duration-200 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-fg-muted">{tip.body}</p>
          </details>
        ))}
      </div>

      <div className="glass mt-10 rounded-2xl p-8 text-center">
        <h2 className="text-lg font-semibold">Still stuck? Talk to a human.</h2>
        <p className="mx-auto mt-2 max-w-sm text-sm text-fg-muted">
          Bug reports, feature ideas, or anything else — we read every message.
        </p>
        <a
          href={`mailto:${app.supportEmail}`}
          className="mt-5 inline-block rounded-full bg-fg px-6 py-2.5 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
        >
          {app.supportEmail}
        </a>
        <p className="mt-4 text-xs text-fg-faint">
          See also the <Link className="underline underline-offset-2" href="/#faq">FAQ</Link> for
          general questions about how {app.name} works.
        </p>
      </div>
    </PageShell>
  );
}
