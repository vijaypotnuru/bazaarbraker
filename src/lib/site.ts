/** Canonical production origin. Override via NEXT_PUBLIC_SITE_URL in deploy. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bazaarbraker.com"
).replace(/\/$/, "");

export const SITE_NAME = "BazaarBraker";

export const SITE_TAGLINE = "India's calm insurance marketplace";

export const SITE_DESCRIPTION =
  "Compare health, term life, motor, travel, and investment insurance from 50+ IRDAI-registered insurers. Clear cover for Indian families.";

export const SITE_LOCALE = "en_IN";

export const SITE_CONTACT = {
  email: "support@bazaarbraker.com",
  phoneDisplay: "1800 208 8787",
  phoneTel: "+9118002088787",
  phoneHref: "tel:18002088787",
} as const;

/** Public IRDAI disclosure — update licence number when issued. */
export const IRDAI_DISCLOSURE = {
  role: "Insurance Web Aggregator",
  regulator: "IRDAI",
  licenceNote:
    "BazaarBraker operates as an insurance web aggregator. Licence details are published on the Legal page and updated when the IRDAI registration is confirmed.",
  solicitation:
    "Insurance is the subject matter of solicitation. Policies are issued by IRDAI-registered insurers.",
} as const;

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
