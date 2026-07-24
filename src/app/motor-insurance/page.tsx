import type { Metadata } from "next";
import { MotorInsurancePage } from "@/components/product/motor-insurance-page";
import { JsonLd } from "@/components/seo/json-ld";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  serviceJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Motor Insurance — Compare Car, Bike & Commercial",
  description:
    "Compare motor insurance across cars, bikes, and commercial vehicles. IDV, add-ons, and cashless garages side by side.",
  path: "/motor-insurance",
});

export default function MotorInsuranceRoute() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: "Motor Insurance Comparison",
            description:
              "Compare car, bike, and commercial vehicle insurance with IDV and add-ons side by side.",
            path: "/motor-insurance",
            category: "Motor insurance",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Motor Insurance", path: "/motor-insurance" },
          ]),
        ]}
      />
      <MotorInsurancePage />
    </>
  );
}
