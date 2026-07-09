import Link from "next/link";
import { PhoneMockup } from "@/components/phone-mockup";
import { StoreButtons } from "@/components/store-buttons";
import { Reveal } from "@/components/reveal";
import { app, features, faqs, howItWorks, SITE_URL } from "@/lib/app-data";

/* ---------- tiny inline icons for feature cards ---------- */
function FeatureIcon({ name }: { name: string }) {
  const common = "h-5 w-5 stroke-teal-bright";
  switch (name) {
    case "ring":
      return (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" className={common}>
          <circle cx="12" cy="12" r="3.2" />
          <circle cx="12" cy="12" r="8" opacity="0.45" />
          <path d="M12 1.5v2M12 20.5v2M1.5 12h2M20.5 12h2" opacity="0.7" />
        </svg>
      );
    case "bolt":
      return (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" className={common}>
          <path d="M13 2 4.5 13.5H11L9.5 22 19 10h-6.5L13 2Z" strokeLinejoin="round" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" className={common}>
          <path d="M12 2.5 4 5.5v6c0 5 3.4 8.3 8 10 4.6-1.7 8-5 8-10v-6l-8-3Z" strokeLinejoin="round" />
          <path d="m8.8 12 2.2 2.2 4.2-4.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "target":
      return (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" className={common}>
          <circle cx="12" cy="12" r="9" opacity="0.5" />
          <circle cx="12" cy="12" r="5.5" opacity="0.8" />
          <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
        </svg>
      );
    case "repeat":
      return (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" className={common}>
          <path d="M17 2.5 21 6l-4 3.5M21 6H8a5 5 0 0 0-5 5M7 21.5 3 18l4-3.5M3 18h13a5 5 0 0 0 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" className={common}>
          <path d="M12 21c4.5-2 8-5.5 8-10.5C20 6 17 3 12 3S4 6 4 10.5C4 15.5 7.5 19 12 21Z" strokeLinejoin="round" />
          <path d="M12 3v18" opacity="0.5" />
        </svg>
      );
  }
}

const trustPoints = [
  "OS-level geofencing",
  "No account",
  "Local-first",
  "Battery-smart",
  "Works when closed",
  "Free",
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: app.name,
    operatingSystem: "Android",
    applicationCategory: "ProductivityApplication",
    description: app.shortDescription,
    url: SITE_URL,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* ambient glows */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 animate-shimmer rounded-full bg-indigo-core/20 blur-[140px]" />
        <div className="pointer-events-none absolute top-40 -right-40 h-[420px] w-[420px] rounded-full bg-teal-core/15 blur-[120px]" />
        <div className="hero-grid pointer-events-none absolute inset-0" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pt-20 pb-16 md:grid-cols-[1.1fr_0.9fr] md:pt-28 md:pb-24">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs text-fg-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-teal-bright opacity-60" />
                  <span className="h-2 w-2 rounded-full bg-teal-bright" />
                </span>
                Now on Android
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl md:text-7xl">
                Forget times.
                <br />
                Remember{" "}
                <em className="gradient-text font-serif italic">places.</em>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-fg-muted">
                Attach a task to a place. The moment you arrive, {app.name}{" "}
                plays your reminder — even with the app closed and your phone
                in your pocket.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <StoreButtons className="mt-9" />
            </Reveal>

            <Reveal delay={320}>
              <p className="mt-5 text-xs text-fg-faint">
                Free · No ads · No account · Your location never leaves your
                phone
              </p>
            </Reveal>
          </div>

          <Reveal delay={200} className="justify-self-center md:justify-self-end">
            <PhoneMockup />
          </Reveal>
        </div>

        {/* trust strip */}
        <div className="relative border-y border-line bg-surface/50">
          <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5 py-4 text-xs tracking-wide text-fg-faint">
            {trustPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="features" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-bright">
              Why Plarem
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
              The location is the trigger.{" "}
              <span className="text-fg-muted">Everything else is handled.</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 70}>
                <div className="glass group h-full rounded-2xl p-6 transition-colors hover:border-indigo-bright/30">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-core/10 transition-transform group-hover:scale-110">
                    <FeatureIcon name={feature.icon} />
                  </div>
                  <h3 className="mt-4 font-semibold text-fg">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {feature.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section id="how" className="scroll-mt-20 border-t border-line bg-surface/40 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-bright">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Three steps. Then it&apos;s{" "}
              <em className="gradient-text font-serif italic">automatic.</em>
            </h2>
          </Reveal>

          <div className="relative mt-14 grid gap-10 md:grid-cols-3">
            {/* connecting line */}
            <div className="absolute top-6 right-[16%] left-[16%] hidden h-px bg-gradient-to-r from-indigo-core/60 via-teal-core/60 to-indigo-core/20 md:block" />
            {howItWorks.map((item, i) => (
              <Reveal key={item.step} delay={i * 120}>
                <div className="relative">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-raised font-mono text-sm text-teal-bright">
                    {item.step}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-fg-muted">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRIVACY ================= */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="glass rounded-3xl p-10 md:p-16">
            <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
              <div>
                <Reveal>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-bright">
                    Privacy
                  </p>
                  <h2 className="mt-3 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">
                    Your location{" "}
                    <em className="gradient-text font-serif italic">never</em>{" "}
                    leaves your phone.
                  </h2>
                  <p className="mt-5 max-w-lg leading-relaxed text-fg-muted">
                    Geofences are monitored on-device by the operating system.
                    {" "}{app.name} has no server, no accounts, and no analytics.
                    Reminders are stored locally — deleting the app deletes
                    everything.
                  </p>
                  <Link
                    href="/privacy"
                    className="mt-6 inline-block text-sm font-medium text-indigo-bright underline-offset-4 hover:underline"
                  >
                    Read the privacy policy →
                  </Link>
                </Reveal>
              </div>
              <Reveal delay={150}>
                <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border border-teal-core/30 bg-teal-core/5">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.2" className="h-16 w-16 stroke-teal-bright">
                    <path d="M12 2.5 4 5.5v6c0 5 3.4 8.3 8 10 4.6-1.7 8-5 8-10v-6l-8-3Z" strokeLinejoin="round" />
                    <path d="m8.8 12 2.2 2.2 4.2-4.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section id="faq" className="scroll-mt-20 border-t border-line bg-surface/40 py-24">
        <div className="mx-auto max-w-3xl px-5">
          <Reveal>
            <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
              Questions, answered.
            </h2>
          </Reveal>
          <div className="mt-10 space-y-3">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 60}>
                <details className="group glass rounded-2xl px-6 py-4 open:pb-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-fg [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span className="text-fg-faint transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {faq.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section id="download" className="scroll-mt-20 py-28">
        <div className="mx-auto max-w-4xl px-5">
          <Reveal>
            <div className="cta-border relative overflow-hidden rounded-3xl p-10 text-center md:p-16">
              <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[500px] -translate-x-1/2 rounded-full bg-indigo-core/20 blur-[100px]" />
              <h2 className="relative text-4xl font-semibold tracking-tight sm:text-5xl">
                Never forget the milk{" "}
                <em className="gradient-text font-serif italic">again.</em>
              </h2>
              <p className="relative mx-auto mt-5 max-w-md text-fg-muted">
                {app.motto} — set a reminder for the next place you go, and let
                your phone do the remembering.
              </p>
              <div className="relative mt-9 flex justify-center">
                <StoreButtons />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
