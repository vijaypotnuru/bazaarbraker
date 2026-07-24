import type { Metadata } from "next";
import { InvestmentPlansPage } from "@/components/product/investment-plans-page";
import { JsonLd } from "@/components/seo/json-ld";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  serviceJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Investment Plans — ULIP, Child & Pension",
  description:
    "Compare ULIPs, child plans, and pensions by goal, lock-in, and life cover from IRDAI partners.",
  path: "/investment-plans",
});

export default function InvestmentPlansRoute() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: "Investment Plans Comparison",
            description:
              "Compare ULIPs, child plans, and pensions by goal, lock-in, and life cover.",
            path: "/investment-plans",
            category: "Investment insurance plans",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Investment Plans", path: "/investment-plans" },
          ]),
        ]}
      />
      <InvestmentPlansPage />
    </>
  );
}
