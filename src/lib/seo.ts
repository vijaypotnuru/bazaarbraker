import type { Metadata } from "next";
import type { FaqItem } from "@/lib/faqs";
import {
  SITE_DESCRIPTION,
  SITE_LOCALE,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  absoluteUrl,
  SITE_CONTACT,
  IRDAI_DISCLOSURE,
} from "@/lib/site";

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  /** Absolute or site-relative OG image path. Defaults to /opengraph-image. */
  image?: string;
  noIndex?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path,
  image,
  noIndex = false,
}: PageSeoInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image
    ? image.startsWith("http")
      ? image
      : absoluteUrl(image)
    : absoluteUrl("/opengraph-image");

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function rootMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `${SITE_NAME} — Compare & Buy Insurance Plans`,
      template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    applicationName: SITE_NAME,
    keywords: [
      "insurance comparison India",
      "health insurance",
      "term insurance",
      "car insurance",
      "bike insurance",
      "travel insurance",
      "ULIP",
      "IRDAI",
      "BazaarBraker",
    ],
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "finance",
    alternates: { canonical: SITE_URL },
    openGraph: {
      title: `${SITE_NAME} — Compare & Buy Insurance Plans`,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      type: "website",
      images: [
        {
          url: absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — ${SITE_TAGLINE}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${SITE_NAME} — Compare & Buy Insurance Plans`,
      description: SITE_DESCRIPTION,
      images: [absoluteUrl("/opengraph-image")],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    formatDetection: {
      telephone: true,
      email: true,
      address: false,
    },
  };
}

export type BreadcrumbItem = { name: string; path: string };

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "FinancialService"],
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/icon"),
    description: SITE_DESCRIPTION,
    slogan: SITE_TAGLINE,
    email: SITE_CONTACT.email,
    telephone: SITE_CONTACT.phoneDisplay,
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    knowsAbout: [
      "Health insurance",
      "Term life insurance",
      "Motor insurance",
      "Travel insurance",
      "Investment plans",
    ],
    sameAs: [],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: SITE_CONTACT.email,
        telephone: SITE_CONTACT.phoneTel,
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Regulatory role",
        value: IRDAI_DISCLOSURE.role,
      },
      {
        "@type": "PropertyValue",
        name: "Regulator",
        value: IRDAI_DISCLOSURE.regulator,
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "en-IN",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/products?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function faqPageJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  path: string;
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: input.category ?? "Insurance comparison",
    category: "Insurance",
  };
}

export function webPageJsonLd(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
