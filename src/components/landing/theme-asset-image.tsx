import Image from "next/image";
import { assetSrc, type ThemeAsset } from "@/lib/theme-assets";
import { cn } from "@/lib/utils";

type ThemeAssetImageProps = {
  asset: ThemeAsset;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export function ThemeAssetImage({
  asset,
  alt,
  className,
  width = 48,
  height = 48,
  priority = false,
}: ThemeAssetImageProps) {
  const src = assetSrc(asset);

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={cn("object-contain", className)}
    />
  );
}
