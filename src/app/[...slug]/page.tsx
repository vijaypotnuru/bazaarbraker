import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductLanding } from "@/components/product/product-landing";
import {
  getAllProductSlugs,
  getProductPage,
} from "@/lib/product-catalog";

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
    return { title: "Page not found" };
  }

  return {
    title: `${page.title} — Compare & Buy | BazaarBraker`,
    description: page.description,
  };
}

export default async function ProductSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getProductPage(slug);

  if (!page) {
    notFound();
  }

  return <ProductLanding page={page} />;
}
