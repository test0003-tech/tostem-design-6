"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Award, Shield, Cog, Star } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="py-20 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-10 h-[2px] bg-neutral-900 mx-auto mb-6" />
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-neutral-900 mb-5 tracking-tight">
            What Makes Tostem a Leading Brand
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Tostem products are developed to withstand the harshest weather
            conditions, setting new quality benchmarks and yardsticks in the
            industry.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 text-center group border border-gray-100/50 hover:border-gray-200"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-neutral-900 text-white mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-3 tracking-tight">
                  {feat.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {feat.description}
                </p>
                <Button
                  asChild
                  variant="link"
                  className="text-[12px] font-semibold tracking-wider uppercase text-neutral-900 p-0 h-auto hover:text-black group/link"
                >
                  <a href={`${BASE_URL}${feat.href}`}>
                    Know More{" "}
                    <span className="inline-block transition-transform group-hover/link:translate-x-1">
                      →
                    </span>
                  </a>
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
