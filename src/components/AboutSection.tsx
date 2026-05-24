"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const BASE_URL = "https://www.tostemindia.com/";

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            TOSTEM - World&apos;s Leading Aluminium Windows and Doors Brand
          </h2>

          <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
            <p>
              TOSTEM is a globally trusted Japanese brand known for its high-quality
              aluminium windows and doors. With a legacy of over 100 years, we blend
              thoughtful design with cutting-edge Japanese technology to deliver
              world-class window and door solutions.
            </p>
            <p>
              Our products, considered as an all-time favourite around the country,
              have been awarded with prestigious recognitions like the Red Dot, iF,
              Best100, and Good Design Award — a true testament to our commitment
              to excellence.
            </p>

            {expanded && (
              <>
                <p>
                  At TOSTEM, we focus on precision, durability, and a seamless user
                  experience. Our window-in-a-box concept ensures error-free site
                  delivery and installation, making us the preferred choice for
                  homeowners and architects alike.
                </p>
                <p>
                  By combining style with strength, TOSTEM offers solutions that
                  enhance both the look and comfort of every living space.
                </p>
              </>
            )}
          </div>

          <div className="mt-6 flex items-center gap-3">
            {expanded ? (
              <Button
                variant="outline"
                onClick={() => setExpanded(false)}
                className="text-sm gap-1"
              >
                Read Less <ChevronUp className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                variant="outline"
                onClick={() => setExpanded(true)}
                className="text-sm gap-1"
              >
                Read More <ChevronDown className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Right: Feature Images Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2025/05/TostemTexguard-416x647.jpg"
                alt="Tostem Texguard"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2025/04/Red-dot-125x127.jpeg"
                alt="Red dot"
                className="w-full h-32 object-cover"
              />
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2025/05/Door-Loock-122x124.jpg"
                alt="Windows and Doors Lock"
                className="w-full h-32 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2025/04/pre-engineered-173x130.jpeg"
                alt="pre-engineered"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
