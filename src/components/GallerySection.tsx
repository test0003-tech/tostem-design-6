"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";

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
    <section className="py-20 md:py-32 bg-white">
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
            Gallery
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Explore our collection of premium aluminium windows, doors, and facades
            in real homes and projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group relative cursor-pointer overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                      i === 1 || i === 5 ? "h-80" : "h-52"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-xs font-medium tracking-wide">
                      {img.alt}
                    </p>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 bg-black border-0 overflow-hidden rounded-2xl">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto max-h-[85vh] object-contain"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white font-semibold text-[12px] tracking-widest px-8 h-11 rounded-none transition-colors"
          >
            <a href={`${BASE_URL}gallery.html`}>VIEW GALLERY</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
