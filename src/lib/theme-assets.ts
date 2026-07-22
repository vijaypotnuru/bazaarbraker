/**
 * Theme pack assets from src/assets/theme-pack
 */

import appStoreBadge from "@/assets/theme-pack/app_store.svg";
import chatFloatingIcon from "@/assets/theme-pack/chat-floating-icon.svg";
import dollarTermPlan from "@/assets/theme-pack/dollar_based_term_plan.svg";
import freeTermInsurance from "@/assets/theme-pack/free-of cost-term-insurance.svg";
import homeInsurance from "@/assets/theme-pack/insurance-home.svg";
import homeLoanInsurance from "@/assets/theme-pack/home-loan-insurance.svg";
import licLogo from "@/assets/theme-pack/lic-logo.svg";
import personalCyberInsurance from "@/assets/theme-pack/personal-cyber-insurance.svg";
import playStoreBadge from "@/assets/theme-pack/playstore_logo.svg";
import termInsuranceDiabetic from "@/assets/theme-pack/term-insurance-diabetic.svg";
import supportUserIcon from "@/assets/theme-pack/usericon.svg";

export type ThemeAsset = string | { src: string; width?: number; height?: number };

export function assetSrc(asset: ThemeAsset): string {
  return typeof asset === "string" ? asset : asset.src;
}

export const themeAssets = {
  chatFloatingIcon,
  supportUserIcon,
  freeTermInsurance,
  homeInsurance,
  homeLoanInsurance,
  licLogo,
  personalCyberInsurance,
  dollarTermPlan,
  termInsuranceDiabetic,
  appStoreBadge,
  playStoreBadge,
} as const;

export const themeSprites = {
  homePageIcons: "@/assets/theme-pack/home-page-icons.svg",
  supportUi: "@/assets/theme-pack/suppor-ui.svg",
} as const;

export const productIconMap: Record<string, ThemeAsset> = {
  "Term Life Insurance": themeAssets.freeTermInsurance,
  "Health Insurance": themeAssets.termInsuranceDiabetic,
  "Investment Plans": themeAssets.dollarTermPlan,
  "Home Insurance": themeAssets.homeInsurance,
  "Term Plans with Return of Premium": themeAssets.dollarTermPlan,
  "Return of Premium": themeAssets.dollarTermPlan,
  "LIC Plans": themeAssets.licLogo,
  "Personal Cyber Insurance": themeAssets.personalCyberInsurance,
  "Home Loan Insurance": themeAssets.homeLoanInsurance,
};
