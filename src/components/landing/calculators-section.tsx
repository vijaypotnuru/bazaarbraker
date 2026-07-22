"use client";

import Link from "next/link";
import { ChevronRight, CirclePlay } from "lucide-react";

type CalcBox = {
  title: string;
  titleAccent: string;
  headerClass: string;
  links: string[];
};

const calculatorBoxes: CalcBox[] = [
  {
    title: "Investment",
    titleAccent: "calculators",
    headerClass: "bg-[#fff8e1] text-[#1a3a6b]",
    links: [
      "SIP Calculator",
      "Income Tax Calculator",
      "ULIP Calculator",
      "NPS Calculator",
    ],
  },
  {
    title: "Health & Wellness",
    titleAccent: "calculators",
    headerClass: "bg-[#e8f5e9] text-[#1a3a6b]",
    links: [
      "BMI Calculator",
      "Ideal Weight Calculator",
      "Calorie Calculator",
      "Body Fat Calculator",
    ],
  },
  {
    title: "Term Insurance",
    titleAccent: "calculators",
    headerClass: "bg-[#e3f2fd] text-[#1a3a6b]",
    links: [
      "Life Insurance Calculator",
      "Term Insurance Calculator",
      "Human Life Value Calculator",
      "Home Loan Insurance Calculator",
    ],
  },
  {
    title: "Policy premium",
    titleAccent: "calculators",
    headerClass: "bg-[#f3e5f5] text-[#1a3a6b]",
    links: [
      "Health Insurance Premium Calculator",
      "Car Insurance Calculator",
      "Bike Insurance Calculator",
      "Travel Insurance Calculator",
    ],
  },
];

function CalcBoxCard({ box }: { box: CalcBox }) {
  return (
    <div className="overflow-hidden rounded-xl border border-[#e2e8f0] bg-white">
      <div className={`px-4 py-4 text-sm font-bold ${box.headerClass}`}>
        {box.title}{" "}
        <span className="font-normal text-[#6a8099]">{box.titleAccent}</span>
      </div>
      <ul>
        {box.links.map((item, i) => (
          <li key={item}>
            <Link
              href="#compare"
              className="flex items-center justify-between px-4 py-3.5 text-sm text-[#4a5568] transition-colors hover:bg-[#f8faff] hover:text-[#00a8e1]"
            >
              {item}
              <ChevronRight className="size-4 text-[#c5d5ea]" />
            </Link>
            {i < box.links.length - 1 && (
              <div className="mx-4 border-b border-[#eef2f7]" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CalculatorsSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="bb-container">
        <h2 className="text-2xl font-bold text-[#1a3a6b] md:text-3xl">
          Popular calculators
        </h2>

        <div className="mt-4 flex gap-3">
          <CirclePlay className="mt-0.5 size-5 shrink-0 fill-[#1a3a6b] text-white" />
          <p className="max-w-3xl text-sm leading-relaxed text-[#6a8099] md:text-base">
            Discover our user-friendly calculators tailored to help you make
            informed financial decisions. Our diverse range of insurance
            calculators ensures you find the perfect fit for your needs. Explore
            the options below to get started.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {calculatorBoxes.map((box) => (
            <CalcBoxCard key={box.title} box={box} />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="#compare"
            className="text-sm font-semibold text-[#00a8e1] hover:underline"
          >
            View all health calculators ›
          </Link>
          <Link
            href="#compare"
            className="text-sm font-semibold text-[#00a8e1] hover:underline"
          >
            View all financial calculators ›
          </Link>
        </div>
      </div>
    </section>
  );
}
