/**
 * Single source of truth for all product copy — including the exact
 * store-listing fields for Google Play and the Apple App Store.
 * Edit here; every page reads from this file.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://plarem.app"; // TODO: replace with your production domain

export const app = {
  name: "Plarem",
  tagline: "Play a Reminder on Arrival",
  motto: "Arrive. Remember.",

  /** App Store subtitle — must stay ≤ 30 characters. */
  subtitle: "Location-triggered reminders",

  /** Google Play short description — must stay ≤ 80 characters. */
  shortDescription:
    "Attach tasks to places. Get reminded the moment you arrive — even offline.",

  /** Google Play / App Store long description. */
  longDescription: `Plarem turns places into reminders. Attach a task to a location, choose an arrival radius, and Plarem notifies you the moment you get there — even if the app is closed and your phone is in your pocket.

No times to guess. No alarms that fire while you're still on the bus. The location itself is the trigger.

WHY PLAREM

• OS-level geofencing — Plarem registers your reminder with the operating system itself (Google Play Services on Android), so there is no GPS polling and battery impact stays minimal.
• Works when closed — reminders trigger even when the app isn't running. Your phone wakes Plarem the moment you cross the boundary.
• Private by design — reminders live on your device. No account, no cloud, no tracking. Your location never leaves your phone.
• Radius you control — from a 100 m doorstep alert to a 1 km neighbourhood heads-up.
• Repeat on every arrival — one-off errands or recurring routines like "water the plants" every time you get home.
• Categories and search — errands, shopping, work, health, or your own custom labels.
• Beautiful in the dark — a carefully tuned light and dark theme.

HOW IT WORKS

1. Create a reminder and give it a title.
2. Pin a place — search, tap the map, or use your current location.
3. Choose the radius and save. Plarem hands the geofence to the OS and gets out of the way.

When you arrive, your phone plays the reminder. Tap it and get the job done.

PERMISSIONS, EXPLAINED

Plarem asks for location "all the time" only because geofences must fire while the app is closed — that is the entire product. Location is processed on-device by the operating system. Notifications permission is used to show the reminder itself. That's it.

Free. No ads. No account.`,

  /** Store metadata */
  category: "Productivity",
  contentRating: "Everyone",
  keywords: [
    "location reminder",
    "geofence reminder",
    "arrival alert",
    "gps reminder",
    "task reminder",
    "errand app",
    "remind me at a place",
    "location alarm",
  ],

  price: "Free",
  platforms: ["Android"],
  iosStatus: "coming soon",

  /** Links — update appStoreUrl once the iOS listing is live. */
  playStoreUrl:
    "https://play.google.com/store/apps/details?id=com.plarem",
  appStoreUrl: null as string | null,

  supportEmail: "support@plarem.app",

  company: "Plarem",
  effectiveDate: "July 9, 2026",
} as const;

export const features = [
  {
    title: "OS-level geofencing",
    body: "Reminders are registered with the operating system itself — no background GPS polling, no battery drain, no missed arrivals.",
    icon: "ring",
  },
  {
    title: "Works when closed",
    body: "Cross the boundary and your phone wakes Plarem — even days after you last opened the app.",
    icon: "bolt",
  },
  {
    title: "Private by design",
    body: "No account. No cloud. No analytics. Reminders and locations live on your device and nowhere else.",
    icon: "shield",
  },
  {
    title: "Radius you control",
    body: "A 100 m nudge at the shop door, or a 1 km heads-up as you enter the neighbourhood. You decide.",
    icon: "target",
  },
  {
    title: "Repeat on arrival",
    body: "One-off errands, or reminders that fire every single time you arrive — perfect for routines.",
    icon: "repeat",
  },
  {
    title: "Battery-smart",
    body: "The OS batches geofence checks with everything else your phone does. Plarem adds almost nothing on top.",
    icon: "leaf",
  },
] as const;

export const faqs = [
  {
    q: "Does Plarem drain my battery?",
    a: "No. Plarem never polls GPS. It registers your reminders as geofences with the operating system, which monitors them using the same low-power system that powers the rest of your phone. Typical impact is negligible.",
  },
  {
    q: "Does it work when the app is closed?",
    a: "Yes — that's the whole point. The OS wakes Plarem when you cross a reminder's boundary, even if you haven't opened the app in days. This is why Plarem asks for “Allow all the time” location access.",
  },
  {
    q: "Where does my location data go?",
    a: "Nowhere. Geofences are evaluated on-device by the operating system. Plarem has no server, no account system, and no analytics. Your reminders are stored locally on your phone.",
  },
  {
    q: "How precise is the arrival detection?",
    a: "Geofencing is designed for arrival at places, not centimetre precision. Radii start at 100 m, and the OS may take a minute or two to confirm you've entered a zone — that's normal, battery-efficient behaviour.",
  },
  {
    q: "When is the iPhone version coming?",
    a: "Plarem for iOS is in development and uses Apple's native region monitoring. Leave the App Store button a little time — it'll light up soon.",
  },
] as const;

export const howItWorks = [
  {
    step: "01",
    title: "Pin a place",
    body: "Search for it, tap the map, or grab your current location.",
  },
  {
    step: "02",
    title: "Set the radius",
    body: "From 100 m to 1 km — how early do you want the nudge?",
  },
  {
    step: "03",
    title: "Live your life",
    body: "Plarem hands the geofence to the OS. The moment you arrive, it plays your reminder.",
  },
] as const;
