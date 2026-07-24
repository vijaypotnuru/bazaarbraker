import type { Metadata } from "next";
import Link from "next/link";
import { ContentPageShell } from "@/components/seo/content-page-shell";
import { JsonLd } from "@/components/seo/json-ld";
import { buildPageMetadata, webPageJsonLd } from "@/lib/seo";
import { IRDAI_DISCLOSURE, SITE_CONTACT, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Legal & IRDAI Disclosure",
  description:
    "Legal disclosures for BazaarBraker as an insurance web aggregator, including IRDAI, solicitation, and grievance information.",
  path: "/legal",
});

export default function LegalPage() {
  return (
    <ContentPageShell
      jsonLd={
        <JsonLd
          data={webPageJsonLd({
            name: "Legal & IRDAI Disclosure",
            description:
              "Regulatory role, licence disclosure, and grievance channels for BazaarBraker.",
            path: "/legal",
          })}
        />
      }
    >
      <p className="text-sm font-medium text-[var(--bb-primary)]">Legal</p>
      <h1 className="bb-display mt-3 text-[clamp(2rem,4vw,3rem)] text-[var(--bb-ink)]">
        Legal &amp; regulatory disclosure
      </h1>
      <p className="mt-6 text-[var(--bb-body)] leading-relaxed">
        Last updated: 24 July 2026
      </p>

      <h2 className="bb-display mt-12 text-2xl text-[var(--bb-ink)]">
        Who we are
      </h2>
      <p className="mt-4 text-[var(--bb-body)] leading-relaxed">
        {SITE_NAME} operates as an {IRDAI_DISCLOSURE.role} under the oversight
        of the {IRDAI_DISCLOSURE.regulator}. We help customers compare and
        purchase insurance products offered by IRDAI-registered insurers.
        Policies are issued by the insurer, not by {SITE_NAME}.
      </p>

      <h2 className="bb-display mt-12 text-2xl text-[var(--bb-ink)]">
        Licence status
      </h2>
      <p className="mt-4 text-[var(--bb-body)] leading-relaxed">
        {IRDAI_DISCLOSURE.licenceNote} When the registration number is
        confirmed, it will be displayed here and in the site footer. You may
        verify web aggregator registrations on the official IRDAI website.
      </p>

      <h2 className="bb-display mt-12 text-2xl text-[var(--bb-ink)]">
        Solicitation notice
      </h2>
      <p className="mt-4 text-[var(--bb-body)] leading-relaxed">
        {IRDAI_DISCLOSURE.solicitation}
      </p>

      <h2 className="bb-display mt-12 text-2xl text-[var(--bb-ink)]">
        Grievance &amp; support
      </h2>
      <p className="mt-4 text-[var(--bb-body)] leading-relaxed">
        For policy purchase, renewal, or claim assistance, contact{" "}
        <a
          href={`mailto:${SITE_CONTACT.email}`}
          className="font-medium text-[var(--bb-primary)] underline-offset-2 hover:underline"
        >
          {SITE_CONTACT.email}
        </a>{" "}
        or call{" "}
        <a
          href={SITE_CONTACT.phoneHref}
          className="font-medium text-[var(--bb-primary)] underline-offset-2 hover:underline"
        >
          {SITE_CONTACT.phoneDisplay}
        </a>
        . For insurer-specific claim settlements, the issuing insurer remains
        the final authority.
      </p>

      <h2 className="bb-display mt-12 text-2xl text-[var(--bb-ink)]">
        Related policies
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--bb-body)]">
        <li>
          <Link
            href="/privacy"
            className="font-medium text-[var(--bb-primary)] underline-offset-2 hover:underline"
          >
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link
            href="/terms"
            className="font-medium text-[var(--bb-primary)] underline-offset-2 hover:underline"
          >
            Terms of Use
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="font-medium text-[var(--bb-primary)] underline-offset-2 hover:underline"
          >
            Contact
          </Link>
        </li>
      </ul>
    </ContentPageShell>
  );
}
