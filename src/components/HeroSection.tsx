"use client";

import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          className="w-full h-full object-cover"
          poster={slides[current].image}
        >
          <source src={slides[current].videoDesktop} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-lg">
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-4 drop-shadow-lg">
            TOSTEM - World&apos;s Leading Aluminium Windows and Doors Brand
          </h1>
          <Button
            asChild
            className="bg-white text-black hover:bg-gray-200 font-semibold px-6"
          >
            <a href={`${BASE_URL}get-quotation/`}>Get a Quote</a>
          </Button>
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-6 left-4 right-4">
          <h1 className="text-white text-2xl font-bold leading-tight mb-3">
            TOSTEM - World&apos;s Leading Aluminium Windows and Doors Brand
          </h1>
          <Button
            asChild
            className="bg-white text-black hover:bg-gray-200 font-semibold px-5 text-sm"
          >
            <a href={`${BASE_URL}get-quotation/`}>Get a Quote</a>
          </Button>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === current ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
