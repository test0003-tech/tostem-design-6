"use client";

import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const BASE_URL = "https://www.tostemindia.com/";

interface SlideData {
  videoDesktop: string;
  videoMobile: string;
  image: string;
  alt: string;
}

const slides: SlideData[] = [
  {
    videoDesktop: `${BASE_URL}wp-content/themes/tostem/video/WebsiteBanner_Grants.mp4`,
    videoMobile: `${BASE_URL}wp-content/themes/tostem/video/MobileVersion_Grants.mp4`,
    image:
      "https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2020/08/ez-banner-slide-1171x506.jpg",
    alt: "Aluminium EZ Series - Tostem India",
  },
  {
    videoDesktop: `${BASE_URL}wp-content/themes/tostem/video/WebsiteBanner_Grants.mp4`,
    videoMobile: `${BASE_URL}wp-content/themes/tostem/video/MobileVersion_Grants.mp4`,
    image:
      "https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2025/08/Header-Image_IN-16-1171x506.jpg",
    alt: "IN-16 Interior Series - Tostem India",
  },
  {
    videoDesktop: `${BASE_URL}wp-content/themes/tostem/video/WebsiteBanner_Grants.mp4`,
    videoMobile: `${BASE_URL}wp-content/themes/tostem/video/MobileVersion_Grants.mp4`,
    image:
      "https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2025/07/Vive-32-lowres-2-1171x506.jpg",
    alt: "Ventilation Slots - Tostem India",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [current]);

  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Desktop Video */}
      <div className="hidden md:block relative w-full aspect-[2.35/1]">
        <video
          key={`desktop-${current}`}
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105"
          poster={slides[current].image}
        >
          <source src={slides[current].videoDesktop} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16 max-w-xl">
          <motion.div
            key={`hero-text-${current}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-12 h-[2px] bg-white/60 mb-6" />
            <h1 className="text-white text-3xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-6 tracking-tight">
              TOSTEM — World&apos;s Leading Aluminium Windows and Doors Brand
            </h1>
            <Button
              asChild
              className="bg-white text-neutral-900 hover:bg-gray-100 font-semibold text-[13px] tracking-widest px-8 h-11 rounded-none transition-colors"
            >
              <a href={`${BASE_URL}get-quotation/`}>GET A QUOTE</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Image/Video */}
      <div className="block md:hidden relative w-full aspect-[16/9]">
        <video
          key={`mobile-${current}`}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster={slides[current].image}
        >
          <source src={slides[current].videoMobile} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-6 left-5 right-5">
          <motion.div
            key={`hero-text-m-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-8 h-[2px] bg-white/60 mb-4" />
            <h1 className="text-white text-xl font-bold leading-tight mb-4 tracking-tight">
              TOSTEM — World&apos;s Leading Aluminium Windows and Doors Brand
            </h1>
            <Button
              asChild
              className="bg-white text-neutral-900 hover:bg-gray-100 font-semibold text-[11px] tracking-widest px-6 h-9 rounded-none"
            >
              <a href={`${BASE_URL}get-quotation/`}>GET A QUOTE</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full p-2.5 transition-all duration-200 hidden md:block"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full p-2.5 transition-all duration-200 hidden md:block"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 ${
              i === current
                ? "w-8 h-1.5 bg-white rounded-full"
                : "w-1.5 h-1.5 bg-white/40 rounded-full hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
