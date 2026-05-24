"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BASE_URL = "https://www.tostemindia.com/";

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text Content */}
        <div>
          <div className="w-10 h-[2px] bg-neutral-900 mb-6" />
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-neutral-900 mb-8 leading-tight tracking-tight">
            TOSTEM — World&apos;s Leading Aluminium Windows and Doors Brand
          </h2>

          <div className="space-y-5 text-gray-500 text-[15px] leading-[1.8]">
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

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p>
                    At TOSTEM, we focus on precision, durability, and a seamless user
                    experience. Our window-in-a-box concept ensures error-free site
                    delivery and installation, making us the preferred choice for
                    homeowners and architects alike.
                  </p>
                  <p className="mt-5">
                    By combining style with strength, TOSTEM offers solutions that
                    enhance both the look and comfort of every living space.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-8">
            <Button
              variant="ghost"
              onClick={() => setExpanded(!expanded)}
              className="text-[13px] font-semibold tracking-wider uppercase text-neutral-900 hover:text-black hover:bg-transparent gap-2 px-0"
            >
              {expanded ? "Read Less" : "Read More"}
              {expanded ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Right: Feature Images Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-xl overflow-hidden shadow-lg group"
            >
              <img
                src="https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2025/05/TostemTexguard-416x647.jpg"
                alt="Tostem Texguard"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-lg group"
            >
              <img
                src="https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2025/04/Red-dot-125x127.jpeg"
                alt="Red dot"
                className="w-full h-32 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          </div>
          <div className="space-y-4 pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-xl overflow-hidden shadow-lg group"
            >
              <img
                src="https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2025/05/Door-Loock-122x124.jpg"
                alt="Windows and Doors Lock"
                className="w-full h-32 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-xl overflow-hidden shadow-lg group"
            >
              <img
                src="https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2025/04/pre-engineered-173x130.jpeg"
                alt="pre-engineered"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
