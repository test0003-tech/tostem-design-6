"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Visit our Knowledge Centre
            </h2>
            <p className="text-gray-600 max-w-xl">
              Stay informed with the latest trends, guides, and insights on
              aluminium windows, doors, and home design.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="mt-4 md:mt-0 border-black text-black hover:bg-black hover:text-white px-6"
          >
            <a href={`${BASE_URL}blog.html`}>
              View All Blogs <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <a
              key={i}
              href={`${BASE_URL}${post.href}`}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
                <h3 className="text-base font-semibold text-gray-900 group-hover:text-black leading-snug line-clamp-2">
                  {post.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
