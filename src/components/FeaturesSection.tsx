"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Award, Shield, Cog, Star } from "lucide-react";

const BASE_URL = "https://www.tostemindia.com/";

const features = [
  {
    icon: Star,
    title: "Japanese Innovation",
    description:
      "Tostem products are developed to withstand the harshest weather conditions, setting new quality benchmarks and yardsticks in the industry, which is why they are recognized as the world's leading brand.",
    href: "japanese-innovation.html",
  },
  {
    icon: Cog,
    title: "Pre Engineered System",
    description:
      "Our pre-engineered system ensures precision manufacturing with consistent quality across every product, delivering reliable performance you can trust.",
    href: "pre-engineered-system-windows.html",
  },
  {
    icon: Shield,
    title: "Patented 'TEXGUARD' Technology",
    description:
      "Tostem's patented TEXGUARD technology provides superior surface and colour protection, ensuring your windows and doors maintain their beauty for years to come.",
    href: "anodized-aluminum-windows-surface-colour-protection.html",
  },
  {
    icon: Award,
    title: "Award Winning Product",
    description:
      "Recognized with prestigious international awards including Red Dot, iF Design, Best100, and Good Design Award — a true testament to our commitment to excellence.",
    href: "awards.html",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          What Makes Tostem a Leading Brand
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Tostem products are developed to withstand the harshest weather
          conditions, setting new quality benchmarks and yardsticks in the
          industry.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gray-900 text-white mb-5 group-hover:bg-black transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feat.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {feat.description}
                </p>
                <Button
                  asChild
                  variant="link"
                  className="text-sm font-medium text-gray-900 p-0 h-auto"
                >
                  <a href={`${BASE_URL}${feat.href}`}>Know More →</a>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
