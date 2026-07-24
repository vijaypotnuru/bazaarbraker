import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { ContentPageShell } from "@/components/seo/content-page-shell";
import { JsonLd } from "@/components/seo/json-ld";
import { buildPageMetadata, webPageJsonLd } from "@/lib/seo";
import { SITE_CONTACT } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact BazaarBraker",
  description:
    "Contact BazaarBraker for insurance comparison help, renewals, claims guidance, and support. Email and phone available.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <ContentPageShell
      jsonLd={
        <JsonLd
          data={webPageJsonLd({
            name: "Contact BazaarBraker",
            description:
              "Customer support channels for quotes, renewals, and claim guidance.",
            path: "/contact",
          })}
        />
      }
    >
      <p className="text-sm font-medium text-[var(--bb-primary)]">Contact</p>
      <h1 className="bb-display mt-3 text-[clamp(2rem,4vw,3rem)] text-[var(--bb-ink)]">
        We&apos;re here to help
      </h1>
      <p className="mt-6 max-w-[48ch] text-[var(--bb-body)] leading-relaxed md:text-lg">
        Reach us for quotes, renewals, claim document guidance, or general
        questions about comparing cover.
      </p>

      <div className="mt-12 space-y-6 border-t border-[var(--bb-hairline)] pt-10">
        <a
          href={`mailto:${SITE_CONTACT.email}`}
          className="group flex items-start gap-4"
        >
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[var(--bb-primary-soft)] text-[var(--bb-primary)]">
            <Mail className="size-5" strokeWidth={1.5} />
          </span>
          <span>
            <span className="block font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--bb-ink)]">
              Email
            </span>
            <span className="mt-1 block text-[var(--bb-body)] transition-colors group-hover:text-[var(--bb-primary)]">
              {SITE_CONTACT.email}
            </span>
          </span>
        </a>

        <a href={SITE_CONTACT.phoneHref} className="group flex items-start gap-4">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[var(--bb-primary-soft)] text-[var(--bb-primary)]">
            <Phone className="size-5" strokeWidth={1.5} />
          </span>
          <span>
            <span className="block font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--bb-ink)]">
              Phone
            </span>
            <span className="mt-1 block font-[family-name:var(--font-geist-mono)] tabular-nums text-[var(--bb-body)] transition-colors group-hover:text-[var(--bb-primary)]">
              {SITE_CONTACT.phoneDisplay}
            </span>
          </span>
        </a>
      </div>

      <p className="mt-12 text-sm leading-relaxed text-[var(--bb-muted)]">
        For claim settlement decisions, the issuing insurer remains responsible.
        We guide documents and status where supported.
      </p>
    </ContentPageShell>
  );
}
