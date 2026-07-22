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
      { label: "Life Insurance", href: "#compare" },
      { label: "Best Term Insurance Plan", href: "#compare" },
      { label: "Term Insurance for NRI", href: "#compare" },
      { label: "What is Term Insurance", href: "#compare" },
      { label: "1 Crore Term Insurance", href: "#compare" },
      { label: "Term Insurance Calculator", href: "#compare" },
    ],
  },
  {
    title: "Investment Plans",
    icon: Coins,
    iconColor: "text-[#e8870a]",
    links: [
      { label: "ULIP Plans", href: "#compare" },
      { label: "Best SIP Plans", href: "#compare" },
      { label: "Child Plans", href: "#compare" },
      { label: "Pension Plans", href: "#compare" },
      { label: "SIP Calculator", href: "#compare" },
      { label: "LIC", href: "#compare" },
    ],
  },
  {
    title: "Health Insurance",
    icon: HeartPulse,
    iconColor: "text-[#e05a8a]",
    links: [
      { label: "Health Insurance Plans for Family", href: "#compare" },
      { label: "Senior Citizen Health Insurance", href: "#compare" },
      { label: "Health Insurance for Parents", href: "#compare" },
      { label: "Maternity Insurance", href: "#compare" },
      { label: "Critical Illness Insurance", href: "#compare" },
      { label: "Health Insurance Calculator", href: "#compare" },
    ],
  },
  {
    title: "Car Insurance",
    icon: Car,
    iconColor: "text-[#4a7fd4]",
    links: [
      { label: "Motor Insurance", href: "#compare" },
      { label: "Bike Insurance", href: "#compare" },
      { label: "Third Party Insurance", href: "#compare" },
      { label: "Car Insurance Calculator", href: "#compare" },
      { label: "Bike Insurance Calculator", href: "#compare" },
      { label: "Commercial Vehicle Insurance", href: "#compare" },
    ],
  },
];

export const otherInsuranceLinks: NavLink[] = [
  { label: "Travel Insurance", href: "#compare" },
  { label: "International Travel Insurance", href: "#compare" },
  { label: "Marine Insurance", href: "#compare" },
];

export const renewItems: RenewItem[] = [
  {
    label: "Term Life Renewal",
    href: "#compare",
    icon: Umbrella,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    label: "Investment Renewal",
    href: "#compare",
    icon: Coins,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    label: "Health Renewal",
    href: "#compare",
    icon: HeartPulse,
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
  },
  {
    label: "Motor Renewal",
    href: "#compare",
    icon: Car,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    label: "Two Wheeler Renewal",
    href: "#compare",
    icon: Bike,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    label: "Home Insurance Renewal",
    href: "#compare",
    icon: Home,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
  },
];

export const claimLinks: NavLink[] = [
  { label: "File a new claim", href: "#compare" },
  { label: "Claim is already filed with the Insurer", href: "#compare" },
  { label: "Know more about filing claim", href: "#compare" },
  { label: "Track existing claim", href: "#compare" },
  { label: "Cashless network", href: "#compare" },
];

export const supportPrimary: SupportItem[] = [
  { label: "Track payments / policy status", href: "#compare", variant: "primary" },
  { label: "View / manage policies", href: "#compare", variant: "primary" },
  { label: "Claims", href: "#compare", variant: "primary" },
  { label: "Communication preferences", href: "#compare", variant: "primary" },
  { label: "Get help/Report an issue", href: "#compare", variant: "primary" },
];

export const supportSecondary: SupportItem[] = [
  { label: "Verify advisor", href: "#compare", variant: "secondary" },
  { label: "Advisor Feedback", href: "#compare", variant: "secondary" },
  { label: "Get a call back", href: "#compare", variant: "secondary" },
  { label: "Chat With Us", href: "#compare", variant: "secondary" },
  { label: "View more", href: "#compare", variant: "secondary" },
];

export const navItems: { id: Exclude<NavMenuId, null>; label: string }[] = [
  { id: "insurance", label: "Insurance Products" },
  { id: "renew", label: "Renew Your Policy" },
  { id: "claim", label: "Claim" },
  { id: "support", label: "Support" },
];

export { LayoutGrid, Phone };
