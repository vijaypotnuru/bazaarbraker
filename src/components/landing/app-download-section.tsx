import Link from "next/link";
import Image from "next/image";
import { Smartphone } from "lucide-react";
import { themeAssets } from "@/lib/theme-assets";

export function AppDownloadSection() {
  return (
    <section className="bg-[#f0f4fa] py-12 md:py-16">
      <div className="bb-container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-[#1a3a6b] md:text-3xl">
              Get the <span className="text-[#00a8e1]">BazaarBraker app</span>
            </h2>
            <div className="mt-2 h-1 w-12 rounded-full bg-[#00a8e1]" />
            <p className="mt-4 text-sm text-[#6a8099] md:text-base">
              Get control of all your insurance needs anywhere, anytime
            </p>
            <ul className="mt-5 space-y-2 text-sm text-[#4a5568]">
              <li>• Compare different insurance policies</li>
              <li>• Buy, store and share all your policies online</li>
              <li>• Track your policy status on the go</li>
              <li>• Download your policy with a single tap</li>
            </ul>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-[#6a8099]">
              Download our app from
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link href="#compare" aria-label="Get it on Google Play">
                <Image
                  src={themeAssets.playStoreBadge}
                  alt="Google Play"
                  width={140}
                  height={42}
                  className="h-10 w-auto"
                />
              </Link>
              <Link href="#compare" aria-label="Download on the App Store">
                <Image
                  src={themeAssets.appStoreBadge}
                  alt="App Store"
                  width={140}
                  height={42}
                  className="h-10 w-auto"
                />
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="flex h-[380px] w-[220px] flex-col items-center justify-center rounded-[2.5rem] border-4 border-[#1a3a6b] bg-gradient-to-b from-[#eef3fb] to-white shadow-xl">
              <Smartphone className="mb-4 size-16 text-[#4a7fd4]" strokeWidth={1.25} />
              <p className="text-center text-sm font-bold text-[#1a3a6b]">
                BazaarBraker
              </p>
              <p className="mt-1 text-center text-xs text-[#6a8099]">
                Insurance in your pocket
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
