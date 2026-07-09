import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { app } from "@/lib/app-data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `${app.name} privacy policy — no accounts, no cloud, no analytics. Your reminders and your location stay on your device.`,
};

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Privacy Policy"
      intro={`Effective ${app.effectiveDate}. The short version: ${app.name} has no account system, no server, and no analytics. Your data stays on your device.`}
    >
      <div className="prose-dark">
        <h2>1. Who we are</h2>
        <p>
          {app.name} (&quot;the app&quot;, &quot;we&quot;) is a local-first,
          location-triggered reminder application for mobile devices. This
          policy explains what data the app handles and where that data lives.
          It applies to the {app.name} mobile app and to this website.
        </p>

        <h2>2. Data we do not collect</h2>
        <p>
          {app.name} does <strong>not</strong> collect, transmit, sell, or
          share:
        </p>
        <ul>
          <li>Your identity — there are no accounts and no sign-in.</li>
          <li>
            Your location history — geofences are registered with and evaluated
            by your device&apos;s operating system. The app does not track,
            record, or upload your movements.
          </li>
          <li>Your reminders — titles, descriptions, places, and settings.</li>
          <li>
            Usage analytics — the app contains no analytics or advertising
            SDKs.
          </li>
        </ul>

        <h2>3. Data stored on your device</h2>
        <p>
          Reminders you create (title, optional description, chosen place and
          radius, category, repeat setting, status) and your app preferences
          (theme, notification sound) are stored locally on your device only.
          Deleting a reminder deletes it immediately; uninstalling the app
          deletes everything.
        </p>

        <h2>4. Permissions the app requests</h2>
        <ul>
          <li>
            <strong>Location — &quot;Allow all the time&quot;</strong>: required
            so the operating system can trigger your reminders when you arrive,
            even while the app is closed. Location is processed on-device by
            the OS geofencing service; the app receives an event only when you
            cross a boundary you defined.
          </li>
          <li>
            <strong>Notifications</strong>: required to display the reminder
            when you arrive.
          </li>
        </ul>

        <h2>5. Third-party services</h2>
        <p>
          When you search for a place or view a map inside the app, your search
          query and map viewport are sent to <strong>Google Maps Platform</strong>{" "}
          (Maps, Places, and Geocoding services) to return results. This is the
          only network traffic the app generates, and it is governed by{" "}
          <a
            href="https://policies.google.com/privacy"
            rel="noopener noreferrer"
            target="_blank"
          >
            Google&apos;s Privacy Policy
          </a>
          . We do not attach any identity to these requests.
        </p>

        <h2>6. This website</h2>
        <p>
          This website is a static informational site. It sets no cookies and
          runs no analytics or trackers.
        </p>

        <h2>7. Children</h2>
        <p>
          {app.name} does not knowingly collect any personal information from
          anyone, including children. There is nothing to collect.
        </p>

        <h2>8. Data deletion</h2>
        <p>
          All app data lives on your device. Delete individual reminders in the
          app, or uninstall the app to remove everything. There is no copy
          anywhere else, so there is nothing further to request from us.
        </p>

        <h2>9. Changes to this policy</h2>
        <p>
          If the app&apos;s data practices ever change (for example, optional
          cloud sync in the future), this policy will be updated before that
          change ships, with the new effective date shown at the top.
        </p>

        <h2>10. Contact</h2>
        <p>
          Questions about privacy? Email{" "}
          <a href={`mailto:${app.supportEmail}`}>{app.supportEmail}</a>.
        </p>
      </div>
    </PageShell>
  );
}
