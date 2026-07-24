import type { Metadata } from "next";
import Link from "next/link";
import { ContentPageShell } from "@/components/seo/content-page-shell";
import { JsonLd } from "@/components/seo/json-ld";
import { buildPageMetadata, webPageJsonLd } from "@/lib/seo";
import { SITE_CONTACT, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "How BazaarBraker collects, uses, and protects personal information when you compare or buy insurance online.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <ContentPageShell
      jsonLd={
        <JsonLd
          data={webPageJsonLd({
            name: "Privacy Policy",
            description:
              "Privacy practices for BazaarBraker customers and site visitors.",
            path: "/privacy",
          })}
        />
      }
    >
      <p className="text-sm font-medium text-[var(--bb-primary)]">Privacy</p>
      <h1 className="bb-display mt-3 text-[clamp(2rem,4vw,3rem)] text-[var(--bb-ink)]">
        Privacy Policy
      </h1>
      <p className="mt-6 text-[var(--bb-body)] leading-relaxed">
        Last updated: 24 July 2026
      </p>

      <p className="mt-6 text-[var(--bb-body)] leading-relaxed">
        This policy explains how {SITE_NAME} (“we”, “us”) handles personal
        information when you use our website and services to compare or purchase
        insurance.
      </p>

      <h2 className="bb-display mt-12 text-2xl text-[var(--bb-ink)]">
        Information we collect
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--bb-body)] leading-relaxed">
        <li>
          Contact details you share (name, email, phone) for quotes or support
        </li>
        <li>
          Details needed to generate insurance quotes (age, city, vehicle or
          travel details, as relevant)
        </li>
        <li>
          Technical data such as browser type, device, and approximate location
          from IP
        </li>
        <li>Usage data that helps us improve comparison and support flows</li>
      </ul>

      <h2 className="bb-display mt-12 text-2xl text-[var(--bb-ink)]">
        How we use information
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--bb-body)] leading-relaxed">
        <li>Provide quotes, comparisons, and purchase assistance</li>
        <li>Share necessary details with insurers you choose to buy from</li>
        <li>Respond to support, renewal, and claim guidance requests</li>
        <li>Improve product clarity, security, and site performance</li>
        <li>Meet legal and regulatory obligations</li>
      </ul>

      <h2 className="bb-display mt-12 text-2xl text-[var(--bb-ink)]">
        Sharing
      </h2>
      <p className="mt-4 text-[var(--bb-body)] leading-relaxed">
        We share personal information with IRDAI-registered insurers and
        service partners only as needed to process quotes, policies, payments,
        or support. We do not sell your personal data.
      </p>

      <h2 className="bb-display mt-12 text-2xl text-[var(--bb-ink)]">
        Retention &amp; security
      </h2>
      <p className="mt-4 text-[var(--bb-body)] leading-relaxed">
        We retain information only as long as needed for the purposes above or
        as required by law. We use reasonable technical and organisational
        measures to protect data against unauthorised access.
      </p>

      <h2 className="bb-display mt-12 text-2xl text-[var(--bb-ink)]">
        Your choices
      </h2>
      <p className="mt-4 text-[var(--bb-body)] leading-relaxed">
        You may request access, correction, or deletion of personal information
        we hold, subject to legal requirements. Contact{" "}
        <a
          href={`mailto:${SITE_CONTACT.email}`}
          className="font-medium text-[var(--bb-primary)] underline-offset-2 hover:underline"
        >
          {SITE_CONTACT.email}
        </a>
        .
      </p>

      <p className="mt-10 text-[var(--bb-body)]">
        See also{" "}
        <Link
          href="/terms"
          className="font-medium text-[var(--bb-primary)] underline-offset-2 hover:underline"
        >
          Terms of Use
        </Link>{" "}
        and{" "}
        <Link
          href="/legal"
          className="font-medium text-[var(--bb-primary)] underline-offset-2 hover:underline"
        >
          Legal
        </Link>
        .
      </p>
    </ContentPageShell>
  );
}
