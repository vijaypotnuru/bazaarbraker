import type { Metadata } from "next";
import { TermInsurancePage } from "@/components/product/term-insurance-page";
import { JsonLd } from "@/components/seo/json-ld";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  serviceJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Term Insurance — Compare & Buy",
  description:
    "Compare term life plans from IRDAI partners. High cover, clear premiums, claim ratios side by side.",
  path: "/term-insurance",
});

export default function TermInsuranceRoute() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: "Term Insurance Comparison",
            description:
              "Compare term life plans from IRDAI-registered insurers with clear premiums and claim ratios.",
            path: "/term-insurance",
            category: "Term life insurance",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Term Insurance", path: "/term-insurance" },
          ]),
        ]}
      />
      <TermInsurancePage />
    </>
  );
}
