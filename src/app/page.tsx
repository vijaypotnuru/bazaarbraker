import { AdvantageSection } from "@/components/landing/advantage-section";
import { AiExpertSection } from "@/components/landing/ai-expert-section";
import { AppDownloadSection } from "@/components/landing/app-download-section";
import { CalculatorsSection } from "@/components/landing/calculators-section";
import { HelpSection } from "@/components/landing/help-section";
import { HeroSection } from "@/components/landing/hero-section";
import { PartnersSection } from "@/components/landing/partners-section";
import { PromoCardsSection } from "@/components/landing/promo-cards-section";
import { SupportBannerSection } from "@/components/landing/support-banner-section";
import { WhyChooseSection } from "@/components/landing/why-choose-section";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

/**
 * BazaarBraker landing page sections.
 */
export default function Home() {
  return (
    <div className="min-h-full bg-[var(--bb-canvas)] text-[var(--bb-ink)]">
      <SiteHeader />
      <main>
        <HeroSection />
        <PromoCardsSection />
        <WhyChooseSection />
        <AiExpertSection />
        <SupportBannerSection />
        <CalculatorsSection />
        <AdvantageSection />
        <AppDownloadSection />
        <PartnersSection />
        <HelpSection />
      </main>
      <SiteFooter />
    </div>
  );
}
