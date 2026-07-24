import type { Metadata } from "next";
import Link from "next/link";
import { ContentPageShell } from "@/components/seo/content-page-shell";
import { JsonLd } from "@/components/seo/json-ld";
import { buildPageMetadata, webPageJsonLd } from "@/lib/seo";
import { SITE_CONTACT } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Careers at BazaarBraker",
  description:
    "Join BazaarBraker — build a clearer insurance marketplace for Indian families. Contact us about open roles.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <ContentPageShell
      jsonLd={
        <JsonLd
          data={webPageJsonLd({
            name: "Careers at BazaarBraker",
            description: "Work with BazaarBraker on insurance comparison.",
            path: "/careers",
          })}
        />
      }
    >
      <p className="text-sm font-medium text-[var(--bb-primary)]">Careers</p>
      <h1 className="bb-display mt-3 text-[clamp(2rem,4vw,3rem)] text-[var(--bb-ink)]">
        Build clarity into insurance
      </h1>
      <p className="mt-6 text-[var(--bb-body)] leading-relaxed md:text-lg">
        We&apos;re building a calm marketplace where Indian families can compare
        cover without pressure. If you care about product design, trust, and
        regulated fintech, we&apos;d like to hear from you.
      </p>
      <p className="mt-6 text-[var(--bb-body)] leading-relaxed">
        Send a short note and your profile to{" "}
        <a
          href={`mailto:${SITE_CONTACT.email}?subject=Careers`}
          className="font-medium text-[var(--bb-primary)] underline-offset-2 hover:underline"
        >
          {SITE_CONTACT.email}
        </a>{" "}
        with subject line &quot;Careers&quot;.
      </p>
      <p className="mt-10 text-[var(--bb-body)]">
        Learn more{" "}
        <Link
          href="/about"
          className="font-medium text-[var(--bb-primary)] underline-offset-2 hover:underline"
        >
          about us
        </Link>
        .
      </p>
    </ContentPageShell>
  );
}
