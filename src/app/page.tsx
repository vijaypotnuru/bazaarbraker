import type { Metadata } from "next";
import { AiExpertSection } from "@/components/landing/ai-expert-section";
import { CompareClaritySection } from "@/components/landing/compare-clarity-section";
import { FaqSection } from "@/components/landing/faq-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { GradientPathsSection } from "@/components/landing/gradient-paths-section";
import { HeroSection } from "@/components/landing/hero-section";
import { IslandNav } from "@/components/landing/island-nav";
import { PartnersStrip } from "@/components/landing/partners-strip";
import { ProductsBento } from "@/components/landing/products-bento";
import { ResultsSection } from "@/components/landing/results-section";
import { SiteFooter } from "@/components/landing/site-footer";
import { StepsSection } from "@/components/landing/steps-section";
import { TrustProofSection } from "@/components/landing/trust-proof-section";
import { VoicesSection } from "@/components/landing/voices-section";
import { JsonLd } from "@/components/seo/json-ld";
import { homeFaqs } from "@/lib/faqs";
import { buildPageMetadata, faqPageJsonLd } from "@/lib/seo";
import { SITE_DESCRIPTION } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Compare & Buy Insurance Plans in India",
  description: SITE_DESCRIPTION,
  path: "/",
});

/**
 * BazaarBraker landing — Soft Structuralism / anti-clone marketplace.
 * Flow: hero → partners → bento → trust → steps → paths → compare →
 * advisor → results → stories → faq → CTA.
 */
export default function Home() {
  return (
    <div className="min-h-full bg-[var(--bb-canvas)] text-[var(--bb-ink)]">
      <JsonLd data={faqPageJsonLd(homeFaqs)} />
      <IslandNav />
      <main>
        <HeroSection />
        <PartnersStrip />
        <ProductsBento />
        <TrustProofSection />
        <StepsSection />
        <GradientPathsSection />
        <CompareClaritySection />
        <AiExpertSection />
        <ResultsSection />
        <VoicesSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
