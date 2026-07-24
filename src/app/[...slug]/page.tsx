import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductLanding } from "@/components/product/product-landing";
import { JsonLd } from "@/components/seo/json-ld";
import {
  getAllProductSlugs,
  getProductPage,
} from "@/lib/product-catalog";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  serviceJsonLd,
} from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getProductPage(slug);

  if (!page) {
    return buildPageMetadata({
      title: "Page not found",
      description: "This page is not available on BazaarBraker.",
      path: `/${slug.join("/")}`,
      noIndex: true,
    });
  }

  return buildPageMetadata({
    title: `${page.title} — Compare & Buy`,
    description: page.description,
    path: `/${page.slug}`,
  });
}

export default async function ProductSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getProductPage(slug);

  if (!page) {
    notFound();
  }

  const crumbs = [
    { name: "Home", path: "/" },
    ...page.slug.split("/").map((part, index, parts) => {
      const path = "/" + parts.slice(0, index + 1).join("/");
      const isLast = index === parts.length - 1;
      return {
        name: isLast
          ? page.title
          : part.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        path,
      };
    }),
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: page.title,
            description: page.description,
            path: `/${page.slug}`,
            category: page.category,
          }),
          breadcrumbJsonLd(crumbs),
        ]}
      />
      <ProductLanding page={page} />
    </>
  );
}
