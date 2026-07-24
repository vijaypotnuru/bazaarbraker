export type ProductPage = {
  /** URL path without leading slash, e.g. "health-insurance" */
  slug: string;
  title: string;
  headline: string;
  description: string;
  category:
    | "term"
    | "health"
    | "motor"
    | "investment"
    | "travel"
    | "home"
    | "other";
  badge?: string;
  highlights: string[];
  related: { label: string; href: string }[];
};

export const productPages: ProductPage[] = [
  {
    slug: "term-insurance",
    title: "Term Insurance",
    headline: "Protect your family with high cover at low premiums",
    description:
      "Compare term life plans from top insurers. Pure protection cover starting at affordable monthly premiums with claim support built in.",
    category: "term",
    badge: "Upto 15% Discount",
    highlights: [
      "Cover up to ₹2 Crore+",
      "Online issuance in minutes",
      "Tax benefits under 80C & 10(10D)",
      "Dedicated claims assistance",
    ],
    related: [
      { label: "1 Crore Term Insurance", href: "/term-insurance/1-crore-term-insurance" },
      { label: "Term Insurance Calculator", href: "/term-insurance/calculator" },
      { label: "Term Insurance for NRI", href: "/term-insurance/nri" },
    ],
  },
  {
    slug: "term-insurance/1-crore-term-insurance",
    title: "1 Crore Term Insurance",
    headline: "₹1 Crore life cover at a price that fits your budget",
    description:
      "Find the best 1 Crore term insurance plans. Compare premiums, claim settlement ratios, and riders side by side.",
    category: "term",
    highlights: [
      "High cover, low premium",
      "Optional return of premium riders",
      "Critical illness add-ons available",
    ],
    related: [
      { label: "Term Insurance", href: "/term-insurance" },
      { label: "Term Insurance Calculator", href: "/term-insurance/calculator" },
    ],
  },
  {
    slug: "term-insurance/nri",
    title: "Term Insurance for NRI",
    headline: "Term cover designed for NRIs living abroad",
    description:
      "Buy and manage term insurance for NRIs online. Compare NRI-friendly plans with global coverage options.",
    category: "term",
    highlights: [
      "Plans accepting NRI applications",
      "Online KYC & payment support",
      "Claim support from India",
    ],
    related: [{ label: "Term Insurance", href: "/term-insurance" }],
  },
  {
    slug: "term-insurance/what-is-term-insurance",
    title: "What is Term Insurance",
    headline: "Understand term insurance in simple terms",
    description:
      "Learn how term insurance works, who needs it, and how to choose the right cover and tenure for your family.",
    category: "term",
    highlights: [
      "Pure protection explained",
      "Cover vs premium trade-offs",
      "Common riders clarified",
    ],
    related: [{ label: "Compare Term Plans", href: "/term-insurance" }],
  },
  {
    slug: "term-insurance/calculator",
    title: "Term Insurance Calculator",
    headline: "Estimate your ideal term cover in seconds",
    description:
      "Use our term insurance calculator to estimate cover based on income, liabilities, and family needs.",
    category: "term",
    highlights: [
      "Income-based cover estimate",
      "Compare premiums instantly",
      "Adjust tenure & riders",
    ],
    related: [{ label: "Buy Term Insurance", href: "/term-insurance" }],
  },
  {
    slug: "life-insurance",
    title: "Life Insurance",
    headline: "Life cover for every stage of your journey",
    description:
      "Explore term, endowment, ULIP, and whole life plans. Compare life insurance options from leading insurers.",
    category: "term",
    highlights: [
      "Term & savings plans",
      "Child & retirement options",
      "Tax-efficient structures",
    ],
    related: [
      { label: "Term Insurance", href: "/term-insurance" },
      { label: "Investment Plans", href: "/investment-plans" },
    ],
  },
  {
    slug: "health-insurance",
    title: "Health Insurance",
    headline: "Cashless hospitalisation cover for you and your family",
    description:
      "Compare health insurance plans with wide hospital networks, no-claim bonuses, and daycare coverage.",
    category: "health",
    badge: "Lowest Price Guarantee",
    highlights: [
      "Family floater & individual options",
      "Cashless network hospitals",
      "Restore & no-claim benefits",
      "Pre & post hospitalisation cover",
    ],
    related: [
      { label: "Family Health Insurance", href: "/health-insurance/family" },
      { label: "Senior Citizen Health Insurance", href: "/health-insurance/senior-citizen" },
      { label: "Critical Illness Insurance", href: "/health-insurance/critical-illness" },
    ],
  },
  {
    slug: "health-insurance/family",
    title: "Health Insurance for Family",
    headline: "One policy that covers your entire family",
    description:
      "Family floater health plans with shared sum insured, maternity options, and cashless treatment across India.",
    category: "health",
    highlights: [
      "Cover spouse, kids & parents",
      "Shared or separate sum insured",
      "Maternity & newborn options",
    ],
    related: [
      { label: "Health Insurance", href: "/health-insurance" },
      { label: "Health Insurance Calculator", href: "/health-insurance/calculator" },
    ],
  },
  {
    slug: "health-insurance/senior-citizen",
    title: "Senior Citizen Health Insurance",
    headline: "Health cover tailored for parents and seniors",
    description:
      "Compare senior citizen health plans with higher entry ages, pre-existing disease waiting periods, and home care options.",
    category: "health",
    highlights: [
      "Higher entry age accepted",
      "Cover for age-related conditions",
      "Cashless hospital network",
    ],
    related: [
      { label: "Health Insurance for Parents", href: "/health-insurance/parents" },
      { label: "Health Insurance", href: "/health-insurance" },
    ],
  },
  {
    slug: "health-insurance/parents",
    title: "Health Insurance for Parents",
    headline: "Give your parents the medical safety they deserve",
    description:
      "Find health insurance for parents with suitable waiting periods, room rent options, and senior care benefits.",
    category: "health",
    highlights: [
      "Plans for parents above 60",
      "Daycare & domiciliary options",
      "Compare waiting periods easily",
    ],
    related: [{ label: "Senior Citizen Plans", href: "/health-insurance/senior-citizen" }],
  },
  {
    slug: "health-insurance/maternity",
    title: "Maternity Insurance",
    headline: "Maternity and newborn cover when you need it most",
    description:
      "Compare maternity insurance benefits, waiting periods, and newborn cover across popular health plans.",
    category: "health",
    highlights: [
      "Normal & C-section cover",
      "Newborn baby inclusion",
      "Pre & post natal benefits",
    ],
    related: [{ label: "Family Health Insurance", href: "/health-insurance/family" }],
  },
  {
    slug: "health-insurance/critical-illness",
    title: "Critical Illness Insurance",
    headline: "Lump-sum payout when a critical illness strikes",
    description:
      "Critical illness cover pays a fixed benefit on diagnosis of covered conditions — use it for treatment or income replacement.",
    category: "health",
    highlights: [
      "Lump-sum on diagnosis",
      "Multiple illness lists available",
      "Can be bought as standalone or rider",
    ],
    related: [
      { label: "Cancer Insurance", href: "/health-insurance/cancer-insurance" },
      { label: "Health Insurance", href: "/health-insurance" },
    ],
  },
  {
    slug: "health-insurance/cancer-insurance",
    title: "Cancer Insurance",
    headline: "Financial support for cancer treatment costs",
    description:
      "Compare cancer insurance plans that pay fixed benefits on diagnosis stages and help manage high treatment expenses.",
    category: "health",
    highlights: [
      "Stage-wise benefit options",
      "Use funds freely on treatment",
      "Standalone cancer cover available",
    ],
    related: [{ label: "Critical Illness", href: "/health-insurance/critical-illness" }],
  },
  {
    slug: "health-insurance/personal-accident",
    title: "Personal Accident Insurance",
    headline: "Accident cover for unexpected injuries and disability",
    description:
      "Personal accident insurance offers accidental death, disability, and hospitalisation benefits at low premiums.",
    category: "health",
    highlights: [
      "Accidental death benefit",
      "Permanent & temporary disability",
      "Affordable annual premiums",
    ],
    related: [{ label: "Health Insurance", href: "/health-insurance" }],
  },
  {
    slug: "health-insurance/calculator",
    title: "Health Insurance Calculator",
    headline: "Estimate health cover and premium in minutes",
    description:
      "Use the health insurance calculator to pick a sum insured and compare estimated premiums for your family.",
    category: "health",
    highlights: [
      "Sum insured guidance",
      "Family vs individual estimate",
      "Compare plan premiums",
    ],
    related: [{ label: "Buy Health Insurance", href: "/health-insurance" }],
  },
  {
    slug: "investment-plans",
    title: "Investment Plans",
    headline: "Grow wealth with insurance-backed investment options",
    description:
      "Compare ULIPs, guaranteed return plans, child plans, and pension products from top life insurers.",
    category: "investment",
    badge: "In-Built Life Cover",
    highlights: [
      "Market-linked & guaranteed options",
      "Life cover built into plans",
      "Goal-based investing",
    ],
    related: [
      { label: "ULIP Plans", href: "/investment-plans/ulip" },
      { label: "Child Plans", href: "/investment-plans/child-plans" },
      { label: "Pension Plans", href: "/investment-plans/pension-plans" },
    ],
  },
  {
    slug: "investment-plans/ulip",
    title: "ULIP Plans",
    headline: "Market-linked returns with life cover",
    description:
      "Unit Linked Insurance Plans combine investment and protection. Compare fund options, charges, and lock-in features.",
    category: "investment",
    highlights: [
      "Equity & debt fund choices",
      "5-year lock-in",
      "Life cover included",
    ],
    related: [{ label: "Investment Plans", href: "/investment-plans" }],
  },
  {
    slug: "investment-plans/sip",
    title: "Best SIP Plans",
    headline: "Start wealth creation with systematic investing",
    description:
      "Explore SIP-style insurance and investment options. Use our SIP calculator to plan monthly contributions.",
    category: "investment",
    highlights: [
      "Monthly investment habit",
      "Goal-based planning",
      "SIP calculator included",
    ],
    related: [
      { label: "SIP Calculator", href: "/calculators/sip" },
      { label: "Investment Plans", href: "/investment-plans" },
    ],
  },
  {
    slug: "investment-plans/child-plans",
    title: "Child Plans",
    headline: "Secure your child’s education and future milestones",
    description:
      "Child insurance plans help you save for education and marriage while providing life cover and premium waiver benefits.",
    category: "investment",
    highlights: [
      "Education goal planning",
      "Premium waiver options",
      "Guaranteed & market-linked choices",
    ],
    related: [{ label: "Investment Plans", href: "/investment-plans" }],
  },
  {
    slug: "investment-plans/pension-plans",
    title: "Pension Plans",
    headline: "Build a retirement income you can rely on",
    description:
      "Compare pension and annuity plans to create a steady retirement corpus and income stream.",
    category: "investment",
    highlights: [
      "Deferred & immediate annuity",
      "Retirement income focus",
      "Tax-efficient structures",
    ],
    related: [{ label: "Investment Plans", href: "/investment-plans" }],
  },
  {
    slug: "lic",
    title: "LIC Plans",
    headline: "Explore popular LIC policies in one place",
    description:
      "Compare LIC endowment, money-back, term, and pension plans. Get guidance on which LIC policy fits your goal.",
    category: "investment",
    highlights: [
      "Endowment & money-back",
      "Term & pension options",
      "Trusted public-sector brand",
    ],
    related: [
      { label: "Investment Plans", href: "/investment-plans" },
      { label: "Term Insurance", href: "/term-insurance" },
    ],
  },
  {
    slug: "calculators/sip",
    title: "SIP Calculator",
    headline: "Project your SIP returns over time",
    description:
      "Estimate future value of monthly SIPs based on expected returns and tenure.",
    category: "investment",
    highlights: [
      "Monthly contribution planner",
      "Return scenarios",
      "Goal amount reverse-calc",
    ],
    related: [{ label: "Best SIP Plans", href: "/investment-plans/sip" }],
  },
  {
    slug: "car-insurance",
    title: "Car Insurance",
    headline: "Comprehensive and third-party car cover online",
    description:
      "Compare car insurance premiums, IDV, and add-ons. Buy or renew motor insurance in a few clicks.",
    category: "motor",
    badge: "Lowest Price Guarantee",
    highlights: [
      "Own damage + third party",
      "Zero depreciation & other add-ons",
      "Instant policy download",
    ],
    related: [
      { label: "Bike Insurance", href: "/two-wheeler-insurance" },
      { label: "Car Insurance Calculator", href: "/car-insurance/calculator" },
      { label: "Third Party Insurance", href: "/car-insurance/third-party" },
    ],
  },
  {
    slug: "car-insurance/third-party",
    title: "Third Party Car Insurance",
    headline: "Mandatory third-party liability cover for your car",
    description:
      "Buy IRDAI-compliant third-party car insurance online and stay legally covered on the road.",
    category: "motor",
    highlights: [
      "Mandatory by law",
      "Liability cover for third parties",
      "Quick online purchase",
    ],
    related: [{ label: "Comprehensive Car Insurance", href: "/car-insurance" }],
  },
  {
    slug: "car-insurance/calculator",
    title: "Car Insurance Calculator",
    headline: "Estimate car insurance premium before you buy",
    description:
      "Get a quick premium estimate based on car make, model, city, and cover type.",
    category: "motor",
    highlights: [
      "IDV-based estimate",
      "Compare add-on costs",
      "Renewal & new quotes",
    ],
    related: [{ label: "Buy Car Insurance", href: "/car-insurance" }],
  },
  {
    slug: "two-wheeler-insurance",
    title: "Bike Insurance",
    headline: "Two-wheeler insurance at competitive premiums",
    description:
      "Compare bike and scooter insurance — third party and comprehensive — with instant online issuance.",
    category: "motor",
    badge: "Upto 85% Discount",
    highlights: [
      "Third party & comprehensive",
      "Add-ons for engine & accessories",
      "Fast renewals online",
    ],
    related: [
      { label: "Bike Insurance Calculator", href: "/two-wheeler-insurance/calculator" },
      { label: "Car Insurance", href: "/car-insurance" },
    ],
  },
  {
    slug: "two-wheeler-insurance/calculator",
    title: "Bike Insurance Calculator",
    headline: "Calculate two-wheeler insurance premium",
    description:
      "Estimate bike insurance cost based on vehicle details and preferred cover.",
    category: "motor",
    highlights: [
      "Quick premium estimate",
      "Compare plan types",
      "Renewal reminders ready",
    ],
    related: [{ label: "Buy Bike Insurance", href: "/two-wheeler-insurance" }],
  },
  {
    slug: "commercial-vehicle-insurance",
    title: "Commercial Vehicle Insurance",
    headline: "Insurance for goods and passenger commercial vehicles",
    description:
      "Protect commercial fleets with third-party and package policies designed for business vehicles.",
    category: "motor",
    highlights: [
      "Goods & passenger vehicles",
      "Package & liability options",
      "Business-use cover",
    ],
    related: [{ label: "Car Insurance", href: "/car-insurance" }],
  },
  {
    slug: "motor-insurance",
    title: "Motor Insurance",
    headline: "Car, bike, and commercial vehicle cover in one place",
    description:
      "Compare motor insurance products across private cars, two-wheelers, and commercial vehicles.",
    category: "motor",
    highlights: [
      "All motor categories",
      "Instant quotes",
      "Cashless garage network",
    ],
    related: [
      { label: "Car Insurance", href: "/car-insurance" },
      { label: "Bike Insurance", href: "/two-wheeler-insurance" },
    ],
  },
  {
    slug: "travel-insurance",
    title: "Travel Insurance",
    headline: "Travel safe with medical and trip protection",
    description:
      "Compare domestic and international travel insurance for medical emergencies, baggage, and trip delays.",
    category: "travel",
    highlights: [
      "International & domestic plans",
      "Medical emergency cover",
      "Baggage & trip delay benefits",
    ],
    related: [
      { label: "International Travel Insurance", href: "/travel-insurance/international" },
    ],
  },
  {
    slug: "travel-insurance/international",
    title: "International Travel Insurance",
    headline: "Worldwide medical cover for your overseas trips",
    description:
      "Get international travel insurance with COVID options, Schengen-compliant cover, and 24×7 assistance.",
    category: "travel",
    highlights: [
      "Schengen visa friendly plans",
      "Medical evacuation cover",
      "Multi-trip annual options",
    ],
    related: [{ label: "Travel Insurance", href: "/travel-insurance" }],
  },
  {
    slug: "home-insurance",
    title: "Home Insurance",
    headline: "Protect your home and belongings from unexpected risks",
    description:
      "Compare home insurance for structure and contents — fire, burglary, natural calamities, and more.",
    category: "home",
    badge: "Upto 25% Discount",
    highlights: [
      "Structure & contents cover",
      "Natural calamity protection",
      "Affordable annual premiums",
    ],
    related: [{ label: "Home Loan Insurance", href: "/home-loan-insurance" }],
  },
  {
    slug: "home-loan-insurance",
    title: "Home Loan Insurance",
    headline: "Secure your home loan EMI if life takes a turn",
    description:
      "Home loan insurance / EMI protection helps your family stay EMI-free if the borrower faces death or disability.",
    category: "home",
    highlights: [
      "EMI protection benefit",
      "Decreasing cover options",
      "Lender-friendly structures",
    ],
    related: [{ label: "Home Insurance", href: "/home-insurance" }],
  },
  {
    slug: "marine-insurance",
    title: "Marine Insurance",
    headline: "Cargo and marine transit cover for businesses",
    description:
      "Protect goods in transit with marine cargo insurance for domestic and international shipments.",
    category: "other",
    highlights: [
      "Inland & ocean transit",
      "Single shipment or open cover",
      "Business cargo protection",
    ],
    related: [{ label: "SME Insurance", href: "/sme-insurance" }],
  },
  {
    slug: "sme-insurance",
    title: "SME / Business Insurance",
    headline: "Insurance solutions for growing businesses",
    description:
      "Explore shopkeepers, fire, liability, and workmen compensation covers tailored for SMEs.",
    category: "other",
    highlights: [
      "Shop & office packages",
      "Liability covers",
      "Workmen compensation",
    ],
    related: [{ label: "Marine Insurance", href: "/marine-insurance" }],
  },
];

const bySlug = new Map(productPages.map((page) => [page.slug, page]));

export function getProductPage(slugParts: string[]): ProductPage | undefined {
  const slug = slugParts.join("/");
  return bySlug.get(slug);
}

export function getAllProductSlugs(): string[][] {
  /** Dedicated Soft Structuralism pages own these top-level routes */
  const dedicated = new Set([
    "term-insurance",
    "health-insurance",
    "motor-insurance",
    "investment-plans",
    "travel-insurance",
  ]);
  return productPages
    .filter((page) => !dedicated.has(page.slug))
    .map((page) => page.slug.split("/"));
}
