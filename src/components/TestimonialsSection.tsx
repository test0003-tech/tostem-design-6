"use client";

import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Quote } from "lucide-react";
import { motion } from "framer-motion";

const BASE_URL = "https://www.tostemindia.com/";

interface Testimonial {
  videoSrc: string;
  name: string;
  location: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    videoSrc: `${BASE_URL}wp-content/uploads/2024/09/Customer-Testimonial-Mr.-Amarnath-Deltra-Global.mp4`,
    name: "Mr. Amarnath",
    location: "Deltra Global",
    quote:
      "TOSTEM products give consumers the flexibility and reliability to design their homes to meet the needs of themselves and their families. No matter which product you choose, you can be sure that it will meet the highest standards of quality and performance.",
  },
  {
    videoSrc: `${BASE_URL}wp-content/uploads/2024/09/Customer-Testimonial-Mr.-Dheeraj-Hyderabad-Deltra-Global.mp4`,
    name: "Mr. Dheeraj",
    location: "Hyderabad, Deltra Global",
    quote:
      "TOSTEM products give consumers the flexibility and reliability to design their homes to meet the needs of themselves and their families. No matter which product you choose, you can be sure that it will meet the highest standards of quality and performance.",
  },
  {
    videoSrc: `${BASE_URL}wp-content/uploads/2024/09/Real-Homes-Real-Stories-Deltra-Aluminum-Doors-Windows.mp4`,
    name: "Real Homes, Real Stories",
    location: "Deltra Aluminium Doors & Windows",
    quote:
      "We have a wealth of happy customers who can't help but shout about our excellent services.",
  },
];

export default function TestimonialsSection() {
  const [playing, setPlaying] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const togglePlay = (index: number) => {
    if (playing === index) {
      videoRefs.current[index]?.pause();
      setPlaying(null);
    } else {
      if (playing !== null && videoRefs.current[playing]) {
        videoRefs.current[playing]?.pause();
      }
      videoRefs.current[index]?.play().catch(() => {});
      setPlaying(index);
    }
  };

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
            Testimonials
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We have a wealth of happy customers who can&apos;t help but shout about our
            excellent services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-100/50"
            >
              {/* Video area */}
              <div className="relative aspect-video bg-neutral-900 overflow-hidden">
                <video
                  ref={(el) => { videoRefs.current[i] = el; }}
                  src={t.videoSrc}
                  className="w-full h-full object-cover"
                  playsInline
                  loop
                  muted
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <button
                  onClick={() => togglePlay(i)}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    playing === i ? "opacity-0 hover:opacity-100" : ""
                  }`}
                  aria-label={playing === i ? "Pause video" : "Play video"}
                >
                  <div className={`flex items-center justify-center rounded-full transition-all duration-300 ${
                    playing === i
                      ? "w-14 h-14 bg-white/20 backdrop-blur-sm"
                      : "w-16 h-16 bg-white/15 backdrop-blur-md border border-white/20"
                  }`}>
                    {playing === i ? (
                      <Pause className="h-5 w-5 text-white" />
                    ) : (
                      <Play className="h-6 w-6 text-white ml-0.5" />
                    )}
                  </div>
                </button>
              </div>

              {/* Text */}
              <div className="p-6">
                <Quote className="h-5 w-5 text-neutral-300 mb-3" />
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {t.quote}
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-semibold text-neutral-900 text-sm tracking-tight">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5 tracking-wide">
                    {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white font-semibold text-[12px] tracking-widest px-8 h-11 rounded-none transition-colors"
          >
            <a href={`${BASE_URL}testimonials/`}>VIEW ALL TESTIMONIALS</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
