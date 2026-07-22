import {
  Bike,
  Car,
  Coins,
  HeartPulse,
  Home,
  LayoutGrid,
  Phone,
  Umbrella,
  type LucideIcon,
} from "lucide-react";

export type NavMenuId = "insurance" | "renew" | "claim" | "support" | null;

export type NavLink = { label: string; href: string };

export type InsuranceColumn = {
  title: string;
  icon: LucideIcon;
  iconColor: string;
  links: NavLink[];
};

export type RenewItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
};

export type SupportItem = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export const insuranceColumns: InsuranceColumn[] = [
  {
    title: "Term Insurance",
    icon: Umbrella,
    iconColor: "text-[#7c5ce7]",
    links: [
      { label: "Life Insurance", href: "/life-insurance" },
      { label: "Best Term Insurance Plan", href: "/term-insurance" },
      { label: "Term Insurance for NRI", href: "/term-insurance/nri" },
      { label: "What is Term Insurance", href: "/term-insurance/what-is-term-insurance" },
      { label: "1 Crore Term Insurance", href: "/term-insurance/1-crore-term-insurance" },
      { label: "Term Insurance Calculator", href: "/term-insurance/calculator" },
    ],
  },
  {
    title: "Investment Plans",
    icon: Coins,
    iconColor: "text-[#e8870a]",
    links: [
      { label: "ULIP Plans", href: "/investment-plans/ulip" },
      { label: "Best SIP Plans", href: "/investment-plans/sip" },
      { label: "Child Plans", href: "/investment-plans/child-plans" },
      { label: "Pension Plans", href: "/investment-plans/pension-plans" },
      { label: "SIP Calculator", href: "/calculators/sip" },
      { label: "LIC", href: "/lic" },
    ],
  },
  {
    title: "Health Insurance",
    icon: HeartPulse,
    iconColor: "text-[#e05a8a]",
    links: [
      { label: "Health Insurance Plans for Family", href: "/health-insurance/family" },
      { label: "Senior Citizen Health Insurance", href: "/health-insurance/senior-citizen" },
      { label: "Health Insurance for Parents", href: "/health-insurance/parents" },
      { label: "Maternity Insurance", href: "/health-insurance/maternity" },
      { label: "Critical Illness Insurance", href: "/health-insurance/critical-illness" },
      { label: "Health Insurance Calculator", href: "/health-insurance/calculator" },
    ],
  },
  {
    title: "Car Insurance",
    icon: Car,
    iconColor: "text-[#4a7fd4]",
    links: [
      { label: "Motor Insurance", href: "/motor-insurance" },
      { label: "Bike Insurance", href: "/two-wheeler-insurance" },
      { label: "Third Party Insurance", href: "/car-insurance/third-party" },
      { label: "Car Insurance Calculator", href: "/car-insurance/calculator" },
      { label: "Bike Insurance Calculator", href: "/two-wheeler-insurance/calculator" },
      { label: "Commercial Vehicle Insurance", href: "/commercial-vehicle-insurance" },
    ],
  },
];

export const otherInsuranceLinks: NavLink[] = [
  { label: "Travel Insurance", href: "/travel-insurance" },
  { label: "International Travel Insurance", href: "/travel-insurance/international" },
  { label: "Marine Insurance", href: "/marine-insurance" },
];

export const renewItems: RenewItem[] = [
  {
    label: "Term Life Renewal",
    href: "/term-insurance",
    icon: Umbrella,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    label: "Investment Renewal",
    href: "/investment-plans",
    icon: Coins,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    label: "Health Renewal",
    href: "/health-insurance",
    icon: HeartPulse,
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
  },
  {
    label: "Motor Renewal",
    href: "/car-insurance",
    icon: Car,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    label: "Two Wheeler Renewal",
    href: "/two-wheeler-insurance",
    icon: Bike,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    label: "Home Insurance Renewal",
    href: "/home-insurance",
    icon: Home,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
  },
];

export const claimLinks: NavLink[] = [
  { label: "File a new claim", href: "/health-insurance" },
  { label: "Claim is already filed with the Insurer", href: "/health-insurance" },
  { label: "Know more about filing claim", href: "/health-insurance" },
  { label: "Track existing claim", href: "/health-insurance" },
  { label: "Cashless network", href: "/health-insurance" },
];

export const supportPrimary: SupportItem[] = [
  { label: "Track payments / policy status", href: "/#help", variant: "primary" },
  { label: "View / manage policies", href: "/#help", variant: "primary" },
  { label: "Claims", href: "/health-insurance", variant: "primary" },
  { label: "Communication preferences", href: "/#help", variant: "primary" },
  { label: "Get help/Report an issue", href: "/#help", variant: "primary" },
];

export const supportSecondary: SupportItem[] = [
  { label: "Verify advisor", href: "/#help", variant: "secondary" },
  { label: "Advisor Feedback", href: "/#help", variant: "secondary" },
  { label: "Get a call back", href: "/#help", variant: "secondary" },
  { label: "Chat With Us", href: "/#help", variant: "secondary" },
  { label: "View more", href: "/#help", variant: "secondary" },
];

export const navItems: { id: Exclude<NavMenuId, null>; label: string }[] = [
  { id: "insurance", label: "Insurance Products" },
  { id: "renew", label: "Renew Your Policy" },
  { id: "claim", label: "Claim" },
  { id: "support", label: "Support" },
];

export { LayoutGrid, Phone };
