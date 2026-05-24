"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const BASE_URL = "https://www.tostemindia.com/";

interface ProductTab {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
}

const productTabs: ProductTab[] = [
  {
    id: "aluminium-doors",
    label: "Aluminium Doors",
    title: "Aluminium Doors",
    description:
      "TOSTEM brings you the finest-designed aluminium doors for your home and office spaces. From aluminium bi-fold doors to sliding doors, folding doors, casement doors, and French doors — our collection offers versatility, durability, and stunning aesthetics to complement every architectural style.",
    image:
      "https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2025/04/Aluminum-Doors-Home-Office.jpg",
    imageAlt: "Aluminium Doors - Home & Office",
    href: "aluminium-doors-design-prices.html",
  },
  {
    id: "aluminium-windows",
    label: "Aluminium Windows",
    title: "Aluminium Windows",
    description:
      "At TOSTEM India, we redefine the concept of aluminium windows manufactured with cutting-edge design, superior performance, and modern functionality. Our products are a perfect blend of style and technology, offering energy efficiency and long-lasting performance for every home.",
    image:
      "https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2025/04/Aluminium-Windows-Home-Office-1.jpg",
    imageAlt: "Aluminium Windows - Home & Office",
    href: "aluminium-windows-design-prices.html",
  },
  {
    id: "steel-doors",
    label: "Steel Entrance Doors",
    title: "Steel Entrance Doors",
    description:
      "TOSTEM introduces ultra-modern steel front doors designed to enhance the look and security of contemporary homes. Available in exquisite patterns and premium colours, these doors combine robust security features with elegant aesthetics.",
    image:
      "https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2025/04/Warangkana-House-57.jpg",
    imageAlt: "Steel Entrance Doors",
    href: "steel-entrance-doors.html",
  },
  {
    id: "facades",
    label: "Aluminium Façades",
    title: "Aluminium Façades",
    description:
      "TOSTEM INDIA introduces an exquisite collection of highly durable, performance-tested, and impeccably designed aluminium glass facades. Engineered with cutting-edge Japanese innovation, our facades offer superior aesthetics and structural integrity.",
    image:
      "https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2025/04/DSC03783-1.jpg",
    imageAlt: "Fixed Window - Façade",
    href: "aluminium-building-architectural-facades.html",
  },
  {
    id: "interior",
    label: "Aluminium Interior",
    title: "Aluminium Interior",
    description:
      "TOSTEM introduces its new IN16 interior series, embodying Japan's wisdom in the art of harmonious living. We create dividers that are not only made with precision engineering but also bring elegance and functionality to interior spaces.",
    image:
      "https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2025/04/d-Natures-Island-58.jpg",
    imageAlt: "Aluminium Interior",
    href: "aluminium-interior-door.html",
  },
  {
    id: "airflow",
    label: "Airflow System",
    title: "Airflow System",
    description:
      "Understanding the unique needs of Indian homes, Tostem presents its innovative Airflow System, designed to enhance your living space with improved ventilation, safety, and comfort — all while maintaining a sleek and modern appearance.",
    image:
      "https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2025/04/DJI_0528-1.jpg",
    imageAlt: "Airflow System - Sliding Window",
    href: "airflow-system.html",
  },
];

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState("aluminium-doors");

  return (
    <section className="py-20 md:py-32 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="w-10 h-[2px] bg-neutral-900 mx-auto mb-6" />
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-neutral-900 tracking-tight">
            Our Products
          </h2>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          {/* Tab Navigation */}
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto p-0 mb-14">
            {productTabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="data-[state=active]:bg-neutral-900 data-[state=active]:text-white data-[state=active]:shadow-lg px-5 py-2.5 rounded-none text-[12px] font-semibold tracking-wider uppercase border border-gray-200 data-[state=active]:border-neutral-900 transition-all duration-300 hover:border-neutral-400"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content */}
          {productTabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-0">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <motion.div
                  key={`img-${tab.id}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl overflow-hidden shadow-2xl group"
                >
                  <img
                    src={tab.image}
                    alt={tab.imageAlt}
                    className="w-full h-72 md:h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.div>
                <motion.div
                  key={`text-${tab.id}`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-10 h-[2px] bg-neutral-900 mb-5" />
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-5 tracking-tight">
                    {tab.title}
                  </h3>
                  <p className="text-gray-500 leading-[1.8] mb-8 text-[15px]">
                    {tab.description}
                  </p>
                  <Button
                    asChild
                    className="bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-[12px] tracking-widest px-10 h-11 rounded-none transition-colors"
                  >
                    <a href={`${BASE_URL}${tab.href}`}>KNOW MORE</a>
                  </Button>
                </motion.div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
