import type { Metadata } from "next";
import Link from "next/link";
import { ContentPageShell } from "@/components/seo/content-page-shell";
import { JsonLd } from "@/components/seo/json-ld";
import { buildPageMetadata, webPageJsonLd } from "@/lib/seo";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "About BazaarBraker",
  description:
    "BazaarBraker is India's calm insurance marketplace. We help families compare IRDAI-registered plans with clarity — not pressure.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <ContentPageShell
      jsonLd={
        <JsonLd
          data={webPageJsonLd({
            name: "About BazaarBraker",
            description:
              "Who BazaarBraker is, how we work, and how we stay regulated.",
            path: "/about",
          })}
        />
      }
    >
      <p className="text-sm font-medium text-[var(--bb-primary)]">About</p>
      <h1 className="bb-display mt-3 text-[clamp(2rem,4vw,3rem)] text-[var(--bb-ink)]">
        Insurance comparison, without the noise
      </h1>
      <p className="mt-6 text-[var(--bb-body)] leading-relaxed md:text-lg">
        {SITE_NAME} is {SITE_TAGLINE.toLowerCase()}. We help Indian families
        compare health, term life, motor, travel, and investment plans from
        IRDAI-registered insurers — with claim ratios, cover details, and
        premiums shown side by side.
      </p>

      <h2 className="bb-display mt-12 text-2xl text-[var(--bb-ink)]">
        What we are
      </h2>
      <p className="mt-4 text-[var(--bb-body)] leading-relaxed">
        We are an insurance web aggregator. We are not an insurer. When you buy
        through us, the policy is issued by the insurer you choose. We earn a
        commission from insurers when you purchase — that does not change the
        premium you see.
      </p>

      <h2 className="bb-display mt-12 text-2xl text-[var(--bb-ink)]">
        How we help
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--bb-body)] leading-relaxed">
        <li>Compare plans across categories in plain language</li>
        <li>See networks, waiting periods, riders, and claim context</li>
        <li>Buy online with guided support for renewals and claims</li>
      </ul>

      <h2 className="bb-display mt-12 text-2xl text-[var(--bb-ink)]">
        Regulation
      </h2>
      <p className="mt-4 text-[var(--bb-body)] leading-relaxed">
        Insurance in India is regulated by IRDAI. Licence and grievance details
        are published on our{" "}
        <Link
          href="/legal"
          className="font-medium text-[var(--bb-primary)] underline-offset-2 hover:underline"
        >
          Legal
        </Link>{" "}
        page. Insurance is the subject matter of solicitation.
      </p>

      <p className="mt-10 text-[var(--bb-body)]">
        Questions?{" "}
        <Link
          href="/contact"
          className="font-medium text-[var(--bb-primary)] underline-offset-2 hover:underline"
        >
          Contact us
        </Link>
        .
      </p>
    </ContentPageShell>
  );
}
