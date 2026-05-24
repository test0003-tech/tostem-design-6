"use client";

import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";

const BASE_URL = "https://www.tostemindia.com/";

interface Testimonial {
  videoSrc: string;
  name: string;
  location: string;
  quote: string;
  thumbnail?: string;
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
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Testimonials
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          We have a wealth of happy customers who can&apos;t help but shout about our
          excellent services.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* Video area */}
              <div className="relative aspect-video bg-gray-900">
                <video
                  ref={(el) => { videoRefs.current[i] = el; }}
                  src={t.videoSrc}
                  className="w-full h-full object-cover"
                  playsInline
                  loop
                  muted
                />
                <button
                  onClick={() => togglePlay(i)}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
                  aria-label={playing === i ? "Pause video" : "Play video"}
                >
                  {playing === i ? (
                    <X className="h-12 w-12 text-white" />
                  ) : (
                    <Play className="h-12 w-12 text-white" />
                  )}
                </button>
              </div>

              {/* Text */}
              <div className="p-5">
                <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="font-semibold text-gray-900 text-sm">
                  - {t.name} | {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            asChild
            variant="outline"
            className="border-black text-black hover:bg-black hover:text-white px-8"
          >
            <a href={`${BASE_URL}testimonials/`}>View All Testimonials</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
