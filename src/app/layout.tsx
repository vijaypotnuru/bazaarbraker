import type { Metadata } from "next";
import { Figtree, Geist_Mono, Outfit } from "next/font/google";
import { Providers } from "@/components/providers";
import "./bazaar.css";
import "./globals.css";

/** Display — geometric, strong presence for headlines */
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/** Body / UI — readable, modern, not Inter/Jakarta defaults */
const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BazaarBraker — Compare & Buy Insurance Plans",
  description:
    "Compare health, term life, motor, travel, and investment insurance from 50+ insurers. Clear cover for Indian families.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${figtree.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-[family-name:var(--font-figtree)]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
