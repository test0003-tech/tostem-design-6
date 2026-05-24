"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const BASE_URL = "https://www.tostemindia.com/";

interface GalleryImage {
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2025/04/Tara-Keree-43.jpg",
    alt: "Entrance Door - Tostem India",
  },
  {
    src: "https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2025/04/Nirvana-Beyond-03-lowres.jpg",
    alt: "Glass to Glass Corner Window - Tostem India",
  },
  {
    src: "https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2025/04/Nawathani-062.jpg",
    alt: "Folding Door - Tostem India",
  },
  {
    src: "https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2025/04/Copy-of-12-1.jpg",
    alt: "French Window - Tostem India",
  },
  {
    src: "https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2020/07/home-gallery-img-1-748x441.jpg",
    alt: "Aluminium Windows, Doors, and Fences - Tostem India",
  },
  {
    src: "https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2020/07/home-gallery-img-2-461x629.jpg",
    alt: "Aluminium Windows, Doors, and Fences - Tostem India",
  },
  {
    src: "https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2020/07/home-gallery-img-3.jpg",
    alt: "Aluminium Windows, Doors, and Fences - Tostem India",
  },
  {
    src: "https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2020/07/home-gallery-img-4-869x484.jpg",
    alt: "Aluminium Windows, Doors, and Fences - Tostem India",
  },
];

export default function GallerySection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Gallery
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Explore our collection of premium aluminium windows, doors, and facades
          in real homes and projects.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <div className="group relative cursor-pointer overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                      i === 1 || i === 5 ? "h-80" : "h-48"
                    }`}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-0 bg-black border-0 overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            asChild
            variant="outline"
            className="border-black text-black hover:bg-black hover:text-white px-8"
          >
            <a href={`${BASE_URL}gallery.html`}>View Gallery</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
