import type { Metadata } from "next";
import { TravelInsurancePage } from "@/components/product/travel-insurance-page";
import { JsonLd } from "@/components/seo/json-ld";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  serviceJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Travel Insurance — Domestic & International",
  description:
    "Compare travel insurance for medical emergencies, baggage, and trip delays. Domestic and international covers.",
  path: "/travel-insurance",
});

export default function TravelInsuranceRoute() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: "Travel Insurance Comparison",
            description:
              "Compare domestic and international travel insurance for medical emergencies, baggage, and trip delays.",
            path: "/travel-insurance",
            category: "Travel insurance",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Travel Insurance", path: "/travel-insurance" },
          ]),
        ]}
      />
      <TravelInsurancePage />
    </>
  );
}
