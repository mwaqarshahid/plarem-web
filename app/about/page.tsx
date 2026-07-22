import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { app } from "@/lib/app-data";

export const metadata: Metadata = {
  title: "About",
  description: `The story behind ${app.name} — location-triggered reminders that respect your battery and your privacy.`,
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="Reminders were built around the wrong question."
      intro="Every reminder app asks “when?”. But most of the things we forget aren’t about a time at all — they’re about a place."
    >
      <div className="prose-dark">
        <p>
          You don&apos;t need to buy groceries at 6&nbsp;pm. You need to buy
          groceries <strong>when you&apos;re at the shop</strong>. You
          don&apos;t need to return the parcel on Tuesday. You need to return
          it <strong>the next time you pass the post office</strong>.
        </p>
        <p>
          {app.name} — short for{" "}
          <strong>Pla</strong>ce <strong>Rem</strong>inder — flips the model.
          You attach a task to a place and choose how close you need to be.
          From that moment your phone&apos;s operating system watches the
          boundary using the same low-power geofencing that powers the rest of
          your device, and {app.name} stays out of the way. When you arrive,
          you get notified. That&apos;s the whole product.
        </p>

        <h2>What we believe</h2>
        <ul>
          <li>
            <strong>Context beats clocks.</strong> A reminder at the right
            place is worth ten at the wrong time.
          </li>
          <li>
            <strong>Your location is nobody&apos;s business.</strong>{" "}
            Geofences are evaluated on-device. No account, no cloud, no
            analytics — your data lives on your phone and dies with the
            uninstall.
          </li>
          <li>
            <strong>Battery is sacred.</strong> {app.name} never polls GPS.
            If an app promises location triggers and drains 20% of your
            battery, it&apos;s doing it wrong.
          </li>
          <li>
            <strong>Free means free.</strong> No ads, no subscriptions, no
            “premium radius”.
          </li>
        </ul>

        <h2>Where we are</h2>
        <p>
          {app.name} is available today on Android, with an iOS version built
          on Apple&apos;s native region monitoring on the way. If you have
          feedback, a bug, or an idea, we genuinely want to hear it — see{" "}
          <Link href="/support">Support</Link>.
        </p>
      </div>
    </PageShell>
  );
}
