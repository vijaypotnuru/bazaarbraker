import type { Metadata } from "next";
import { HealthInsurancePage } from "@/components/product/health-insurance-page";
import { JsonLd } from "@/components/seo/json-ld";
import { healthFaqs } from "@/lib/faqs";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  faqPageJsonLd,
  serviceJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Health Insurance — Compare & Buy",
  description:
    "Compare family floater and individual health plans. Networks, waiting periods, and riders in plain language.",
  path: "/health-insurance",
});

export default function HealthInsuranceRoute() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: "Health Insurance Comparison",
            description:
              "Compare family floater and individual health plans from IRDAI-registered insurers.",
            path: "/health-insurance",
            category: "Health insurance",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Health Insurance", path: "/health-insurance" },
          ]),
          faqPageJsonLd(healthFaqs),
        ]}
      />
      <HealthInsurancePage />
    </>
  );
}
