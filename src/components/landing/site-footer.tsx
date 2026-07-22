import Link from "next/link";
import { Plus } from "lucide-react";
import { themeAssets } from "@/lib/theme-assets";
import { ThemeAssetImage } from "@/components/landing/theme-asset-image";

const footerNav = {
  insurance: {
    title: "Insurance",
    links: [
      { label: "General Insurance", expandable: true },
      { label: "Life Insurance", expandable: true },
      { label: "Term Insurance", expandable: false },
      { label: "Investment", expandable: false },
      { label: "Health Insurance", expandable: false },
      { label: "Other Insurance", expandable: false },
    ],
  },
  calculators: {
    title: "Calculators",
    links: [
      { label: "Investment Calculators", expandable: true },
      { label: "Fitness Calculators", expandable: true },
      { label: "Income Tax Calculator", expandable: false },
      { label: "Term Insurance Calculator", expandable: false },
      { label: "EMI Calculator", expandable: false },
      { label: "LIC Calculator", expandable: false },
      { label: "Life Insurance Calculator", expandable: false },
      { label: "Health Insurance Calculator", expandable: false },
      { label: "Travel Insurance Calculator", expandable: false },
      { label: "Car Insurance Calculator", expandable: false },
      { label: "Bike Insurance Calculator", expandable: false },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Articles", expandable: false },
      { label: "Customer reviews", expandable: false },
      { label: "Insurance companies", expandable: false },
      { label: "Newsroom", expandable: false },
      { label: "Awards", expandable: false },
      { label: "BazaarBraker Life", expandable: false },
      { label: "Consumer Insights", expandable: false },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", expandable: false },
      { label: "Sitemap", expandable: false },
      { label: "Careers", expandable: false },
      { label: "Legal & Admin policies", expandable: false },
      { label: "ISNP", expandable: false },
      { label: "Contact us", expandable: false },
      { label: "Verify your advisor", expandable: false },
      { label: "Investor Relations", expandable: false },
    ],
  },
};

const paymentMethods = [
  { label: "Amex", color: "bg-[#006fcf]" },
  { label: "VISA", color: "bg-[#1a1f71]" },
  { label: "Paytm", color: "bg-[#00baf2]" },
  { label: "RuPay", color: "bg-[#097969]" },
  { label: "Net Banking", color: "bg-[#4a5568]" },
  { label: "Mastercard", color: "bg-[#eb001b]" },
];

const importantLinks = [
  { label: "IRDAI", href: "https://irdai.gov.in/" },
  { label: "IRDAI Customer Education Website", href: "#" },
  { label: "Bima Bharosa", href: "#" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; expandable: boolean }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-bold text-white">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href="#"
              className="group flex items-center gap-2 text-[13px] leading-snug text-[#8fa3c4] transition-colors hover:text-white"
            >
              {link.expandable && (
                <span className="flex size-4 shrink-0 items-center justify-center rounded-full border border-[#4a6080] text-[#8fa3c4] group-hover:border-white group-hover:text-white">
                  <Plus className="size-2.5" strokeWidth={2.5} />
                </span>
              )}
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <>
      <footer className="bg-[#0a1628] text-[#8fa3c4]">
        {/* Link columns */}
        <div className="bb-container py-12">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <FooterColumn
              title={footerNav.insurance.title}
              links={footerNav.insurance.links}
            />
            <FooterColumn
              title={footerNav.calculators.title}
              links={footerNav.calculators.links}
            />
            <FooterColumn
              title={footerNav.resources.title}
              links={footerNav.resources.links}
            />
            <FooterColumn
              title={footerNav.company.title}
              links={footerNav.company.links}
            />
          </div>
        </div>

        {/* Payment / Security / Social bar */}
        <div className="bb-container pb-10">
          <div className="grid gap-0 overflow-hidden rounded-lg bg-[#152238] md:grid-cols-3">
            <div className="border-b border-[#1e3050] px-6 py-5 md:border-b-0 md:border-r md:border-[#1e3050]">
              <p className="mb-3 text-xs font-semibold text-white">
                Payment Methods
              </p>
              <div className="flex flex-wrap gap-2">
                {paymentMethods.map((method) => (
                  <span
                    key={method.label}
                    className={`inline-flex h-7 items-center rounded px-2 text-[10px] font-bold tracking-wide text-white ${method.color}`}
                  >
                    {method.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-b border-[#1e3050] px-6 py-5 md:border-b-0 md:border-r md:border-[#1e3050]">
              <p className="mb-3 text-xs font-semibold text-white">
                Secured With
              </p>
              <div className="inline-flex items-center gap-2 rounded border border-[#2a4060] bg-[#0d1e35] px-3 py-1.5">
                <span className="flex size-6 items-center justify-center rounded bg-[#05b169] text-[9px] font-bold text-white">
                  PCI
                </span>
                <span className="text-[11px] font-medium text-[#8fa3c4]">
                  PCI DSS
                  <br />
                  <span className="text-[10px] text-[#6a8099]">Compliant</span>
                </span>
              </div>
            </div>

            <div className="px-6 py-5">
              <p className="mb-3 text-xs font-semibold text-white">
                Follow us on
              </p>
              <div className="flex gap-2">
                {[
                  { icon: FacebookIcon, label: "Facebook", href: "#" },
                  { icon: XIcon, label: "X", href: "#" },
                  { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
                  { icon: YoutubeIcon, label: "YouTube", href: "#" },
                ].map(({ icon: Icon, label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex size-9 items-center justify-center rounded-lg bg-[#1e3050] text-[#8fa3c4] transition-colors hover:bg-[#2a4060] hover:text-white"
                  >
                    <Icon className="size-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legal & disclaimers */}
        <div className="bb-container space-y-5 border-t border-[#1e3050] py-8">
          <div>
            <p className="mb-2 text-xs font-semibold text-white">
              Important Links
            </p>
            <div className="flex flex-wrap items-center gap-x-1 text-[13px]">
              {importantLinks.map((link, i) => (
                <span key={link.label} className="flex items-center">
                  {i > 0 && (
                    <span className="mx-2 text-[#4a6080]">|</span>
                  )}
                  <Link
                    href={link.href}
                    className="text-[#8fa3c4] hover:text-white hover:underline"
                    {...(link.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </Link>
                </span>
              ))}
            </div>
          </div>

          <ul className="space-y-4 text-[12px] leading-relaxed text-[#6a8099]">
            <li>
              CIN: U74999HR2014PTC053454. Registered Office - Plot No.119,
              Sector - 44, Gurugram, Haryana – 122001. BazaarBraker Insurance
              Brokers Private Limited (formerly known as BazaarBraker Insurance
              Web Aggregator Private Limited){" "}
              <Link href="#" className="text-[#8fa3c4] hover:underline">
                Licence No. 742
              </Link>
              ,{" "}
              <Link href="#" className="text-[#8fa3c4] hover:underline">
                Valid till: 09/07/2027
              </Link>
              , License category- Composite Broker (
              <Link href="#" className="text-[#8fa3c4] hover:underline">
                Visitors are hereby informed
              </Link>
              ). Email:{" "}
              <Link
                href="mailto:support@bazaarbraker.com"
                className="text-[#8fa3c4] hover:underline"
              >
                support@bazaarbraker.com
              </Link>
            </li>
            <li>
              IRDAI Web aggregator Registration No. 06 Registration Code No.
              IRDAI/WBA21/15 Valid till 13/07/2027. Insurance is the subject
              matter of solicitation. Visitors are hereby informed that their
              information submitted on the website may be shared with insurers.
              Product information is authentic and solely based on the
              information received from the insurers.
            </li>
            <li>
              <strong className="font-semibold text-[#8fa3c4]">
                BEWARE OF SPURIOUS PHONE CALLS AND FICTITIOUS / FRAUDULENT
                OFFERS
              </strong>
              <br />
              IRDAI or its officials do not involve in activities like selling
              insurance policies, announcing bonus or investment of premiums.
              Public receiving such phone calls are requested to lodge a police
              complaint.
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#1e3050] py-5">
          <p className="text-center text-[13px] text-[#6a8099]">
            © Copyright 2008-{new Date().getFullYear()} bazaarbraker.com. All
            Rights Reserved.
          </p>
        </div>
      </footer>

      {/* Live chat FAB */}
      <button
        type="button"
        aria-label="Live chat"
        className="fixed bottom-6 right-6 z-50 shadow-lg transition-transform hover:scale-105"
      >
        <ThemeAssetImage
          asset={themeAssets.chatFloatingIcon}
          alt="Live chat"
          width={61}
          height={76}
          className="h-[76px] w-[61px]"
        />
      </button>
    </>
  );
}
