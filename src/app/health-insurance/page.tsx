import type { Metadata } from "next";
import { HealthInsurancePage } from "@/components/product/health-insurance-page";

export const metadata: Metadata = {
  title: "Health Insurance — Compare & Buy | BazaarBraker",
  description:
    "Compare family floater and individual health plans. Networks, waiting periods, and riders in plain language.",
};

export default function HealthInsuranceRoute() {
  return <HealthInsurancePage />;
}
