"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const BASE_URL = "https://www.tostemindia.com/";

interface BlogPost {
  category: string;
  date: string;
  title: string;
  href: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    category: "Aluminium Doors",
    date: "3 Oct 2025",
    title: "French Doors vs Sliding Doors for Balcony: Which is a better option?",
    href: "french-doors-vs-sliding-doors-for-balcony-which-is-a-better-option/",
    image:
      "https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2025/04/De-Vielle_36.jpg",
  },
  {
    category: "Aluminium Doors",
    date: "3 Oct 2025",
    title: "Different Stained Glass Designs for Doors and Windows",
    href: "stained-glass-designs/",
    image:
      "https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2025/04/Copy-of-12-1.jpg",
  },
  {
    category: "Miscellaneous",
    date: "12 Nov 2025",
    title: "Plywood Almirah Design Ideas: Modern Storage Solutions with Window Integration",
    href: "plywood-almirah-design/",
    image:
      "https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2025/04/Tostem-Chevalife_10.jpg",
  },
];

export default function KnowledgeSection() {
  return (
    <section className="py-20 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-10 h-[2px] bg-neutral-900 mb-6" />
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-neutral-900 mb-3 tracking-tight">
              Visit our Knowledge Centre
            </h2>
            <p className="text-gray-500 max-w-xl leading-relaxed">
              Stay informed with the latest trends, guides, and insights on
              aluminium windows, doors, and home design.
            </p>
          </motion.div>
          <Button
            asChild
            variant="outline"
            className="mt-6 md:mt-0 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white font-semibold text-[12px] tracking-widest px-6 h-11 rounded-none transition-colors shrink-0"
          >
            <a href={`${BASE_URL}blog.html`}>
              VIEW ALL BLOGS
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.a
              key={i}
              href={`${BASE_URL}${post.href}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100/50 hover:border-gray-200"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-bold text-neutral-900 bg-stone-100 px-3 py-1 tracking-wider uppercase">
                    {post.category}
                  </span>
                  <span className="text-[11px] text-gray-400 tracking-wide">{post.date}</span>
                </div>
                <h3 className="text-[15px] font-bold text-neutral-900 group-hover:text-neutral-700 leading-snug line-clamp-2 transition-colors tracking-tight">
                  {post.title}
                </h3>
                <div className="mt-4 flex items-center gap-1 text-[12px] font-semibold tracking-wider uppercase text-neutral-900 group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
