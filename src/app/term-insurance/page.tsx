import type { Metadata } from "next";
import { TermInsurancePage } from "@/components/product/term-insurance-page";

export const metadata: Metadata = {
  title: "Term Insurance — Compare & Buy | BazaarBraker",
  description:
    "Compare term life plans from IRDAI partners. High cover, clear premiums, claim ratios side by side.",
};

export default function TermInsuranceRoute() {
  return <TermInsurancePage />;
}
