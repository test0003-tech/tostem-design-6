"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const BASE_URL = "https://www.tostemindia.com/";

interface ProductTab {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  badge?: string;
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
    <section className="py-16 md:py-24 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-4">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          {/* Tab Navigation */}
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto p-0 mb-12">
            {productTabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="data-[state=active]:bg-black data-[state=active]:text-white px-5 py-2.5 rounded-full text-sm font-medium border border-gray-200 data-[state=active]:border-black transition-all"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content */}
          {productTabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={tab.image}
                    alt={tab.imageAlt}
                    className="w-full h-72 md:h-96 object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {tab.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {tab.description}
                  </p>
                  <Button
                    asChild
                    className="bg-black hover:bg-gray-800 text-white font-semibold px-8"
                  >
                    <a href={`${BASE_URL}${tab.href}`}>Know More</a>
                  </Button>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
