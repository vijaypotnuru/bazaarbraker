import type { Metadata } from "next";
import Link from "next/link";
import { ContentPageShell } from "@/components/seo/content-page-shell";
import { JsonLd } from "@/components/seo/json-ld";
import { buildPageMetadata, webPageJsonLd } from "@/lib/seo";
import { SITE_CONTACT, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Use",
  description:
    "Terms governing use of the BazaarBraker website and insurance comparison services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <ContentPageShell
      jsonLd={
        <JsonLd
          data={webPageJsonLd({
            name: "Terms of Use",
            description:
              "Terms governing use of BazaarBraker comparison and purchase services.",
            path: "/terms",
          })}
        />
      }
    >
      <p className="text-sm font-medium text-[var(--bb-primary)]">Terms</p>
      <h1 className="bb-display mt-3 text-[clamp(2rem,4vw,3rem)] text-[var(--bb-ink)]">
        Terms of Use
      </h1>
      <p className="mt-6 text-[var(--bb-body)] leading-relaxed">
        Last updated: 24 July 2026
      </p>

      <p className="mt-6 text-[var(--bb-body)] leading-relaxed">
        By using {SITE_NAME}, you agree to these terms. If you do not agree,
        please do not use the site.
      </p>

      <h2 className="bb-display mt-12 text-2xl text-[var(--bb-ink)]">
        Our role
      </h2>
      <p className="mt-4 text-[var(--bb-body)] leading-relaxed">
        {SITE_NAME} provides an online platform to compare and facilitate the
        purchase of insurance products from IRDAI-registered insurers. We are
        not an insurer. Policy terms, premiums, and claim decisions are set by
        the issuing insurer.
      </p>

      <h2 className="bb-display mt-12 text-2xl text-[var(--bb-ink)]">
        Accurate information
      </h2>
      <p className="mt-4 text-[var(--bb-body)] leading-relaxed">
        You agree to provide accurate details for quotes and applications.
        Misrepresentation may lead to claim rejection by the insurer under
        applicable policy terms.
      </p>

      <h2 className="bb-display mt-12 text-2xl text-[var(--bb-ink)]">
        Quotes &amp; availability
      </h2>
      <p className="mt-4 text-[var(--bb-body)] leading-relaxed">
        Premiums and plan features shown are indicative and subject to insurer
        underwriting, product filings, and availability. Final terms appear in
        the insurer’s policy documents.
      </p>

      <h2 className="bb-display mt-12 text-2xl text-[var(--bb-ink)]">
        Acceptable use
      </h2>
      <p className="mt-4 text-[var(--bb-body)] leading-relaxed">
        You may not misuse the site, attempt unauthorised access, scrape content
        in a way that harms service availability, or use the platform for
        unlawful purposes.
      </p>

      <h2 className="bb-display mt-12 text-2xl text-[var(--bb-ink)]">
        Limitation of liability
      </h2>
      <p className="mt-4 text-[var(--bb-body)] leading-relaxed">
        To the extent permitted by law, {SITE_NAME} is not liable for insurer
        decisions, policy performance, or losses arising from reliance on
        third-party product terms. Nothing in these terms limits rights you have
        under applicable consumer or insurance law.
      </p>

      <h2 className="bb-display mt-12 text-2xl text-[var(--bb-ink)]">
        Contact
      </h2>
      <p className="mt-4 text-[var(--bb-body)] leading-relaxed">
        Questions about these terms:{" "}
        <a
          href={`mailto:${SITE_CONTACT.email}`}
          className="font-medium text-[var(--bb-primary)] underline-offset-2 hover:underline"
        >
          {SITE_CONTACT.email}
        </a>
        .
      </p>

      <p className="mt-10 text-[var(--bb-body)]">
        Related:{" "}
        <Link
          href="/privacy"
          className="font-medium text-[var(--bb-primary)] underline-offset-2 hover:underline"
        >
          Privacy Policy
        </Link>{" "}
        ·{" "}
        <Link
          href="/legal"
          className="font-medium text-[var(--bb-primary)] underline-offset-2 hover:underline"
        >
          Legal
        </Link>
      </p>
    </ContentPageShell>
  );
}
