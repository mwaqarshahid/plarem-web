import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { app } from "@/lib/app-data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for the ${app.name} mobile app and website.`,
};

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Terms of Service"
      intro={`Effective ${app.effectiveDate}. Please read these terms before using ${app.name}.`}
    >
      <div className="prose-dark">
        <h2>1. Acceptance</h2>
        <p>
          By downloading, installing, or using the {app.name} mobile
          application or this website (together, &quot;the Service&quot;), you
          agree to these Terms of Service. If you do not agree, do not use the
          Service.
        </p>

        <h2>2. The service</h2>
        <p>
          {app.name} lets you create reminders attached to geographic
          locations. The reminder is delivered as a notification when your
          device&apos;s operating system determines you have entered the area
          you defined. The app is currently provided free of charge, without
          ads.
        </p>

        <h2>3. License</h2>
        <p>
          We grant you a personal, non-exclusive, non-transferable, revocable
          license to use {app.name} on devices you own or control, subject to
          these terms and to the rules of the app store you obtained it from
          (Google Play or the Apple App Store).
        </p>

        <h2>4. Reliability — important</h2>
        <p>
          Geofencing depends on your device&apos;s operating system, hardware,
          signal conditions, and battery settings. Arrival detection can be
          delayed (commonly up to a couple of minutes) or, in rare
          circumstances, missed entirely.{" "}
          <strong>
            Do not rely on {app.name} for safety-critical, medical,
            time-critical, or emergency purposes.
          </strong>
        </p>

        <h2>5. Acceptable use</h2>
        <ul>
          <li>Do not use the Service to break any law.</li>
          <li>
            Do not reverse-engineer, resell, or redistribute the app except as
            permitted by law or the relevant app store terms.
          </li>
          <li>
            Do not use the Service to monitor another person without their
            informed consent.
          </li>
        </ul>

        <h2>6. Third-party services</h2>
        <p>
          Maps, place search, and geocoding are provided by Google Maps
          Platform and are subject to Google&apos;s own terms. We are not
          responsible for the availability or accuracy of third-party services.
        </p>

        <h2>7. Disclaimer of warranty</h2>
        <p>
          The Service is provided <strong>&quot;as is&quot;</strong> and{" "}
          <strong>&quot;as available&quot;</strong>, without warranties of any
          kind, express or implied, including fitness for a particular purpose
          and non-infringement. We do not warrant that reminders will be
          delivered at any particular time or at all.
        </p>

        <h2>8. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, {app.company} shall not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages, or for any loss of data, profits, or opportunity,
          arising from your use of (or inability to use) the Service — even if
          advised of the possibility. Our total aggregate liability shall not
          exceed the amount you paid for the Service in the past twelve months
          (currently: zero).
        </p>

        <h2>9. Changes to the service or terms</h2>
        <p>
          We may modify or discontinue the Service, or update these terms, at
          any time. Material changes will be reflected by a new effective date
          at the top of this page. Continued use after a change constitutes
          acceptance.
        </p>

        <h2>10. Termination</h2>
        <p>
          You may stop using the Service at any time by uninstalling the app.
          We may terminate or suspend access if you breach these terms.
          Sections 4, 7, and 8 survive termination.
        </p>

        <h2>11. Contact</h2>
        <p>
          Questions about these terms? Email{" "}
          <a href={`mailto:${app.supportEmail}`}>{app.supportEmail}</a>.
        </p>
      </div>
    </PageShell>
  );
}
