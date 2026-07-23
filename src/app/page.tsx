import { AiExpertSection } from "@/components/landing/ai-expert-section";
import { CompareClaritySection } from "@/components/landing/compare-clarity-section";
import { FaqSection } from "@/components/landing/faq-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { GradientPathsSection } from "@/components/landing/gradient-paths-section";
import { HeroSection } from "@/components/landing/hero-section";
import { IslandNav } from "@/components/landing/island-nav";
import { PartnersStrip } from "@/components/landing/partners-strip";
import { ProductsBento } from "@/components/landing/products-bento";
import { SiteFooter } from "@/components/landing/site-footer";
import { StepsSection } from "@/components/landing/steps-section";
import { TrustProofSection } from "@/components/landing/trust-proof-section";
import { VoicesSection } from "@/components/landing/voices-section";

/**
 * BazaarBraker landing — Soft Structuralism / anti-clone marketplace.
 * Flow: hero → partners → bento → trust → steps → paths → compare →
 * advisor → stories → faq → CTA.
 */
export default function Home() {
  return (
    <div className="min-h-full bg-[var(--bb-canvas)] text-[var(--bb-ink)]">
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
        <VoicesSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
