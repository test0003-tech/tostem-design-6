"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Phone,
  X,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BASE_URL = "https://www.tostemindia.com/";

interface SubItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: SubItem[];
  groups?: { groupLabel: string; items: SubItem[] }[];
}

const navItems: NavItem[] = [
  {
    label: "About Tostem",
    href: "#",
    groups: [
      {
        groupLabel: "",
        items: [
          { label: "About Tostem", href: "about-tostem.html" },
          { label: "Leader's Message", href: "directors-message.html" },
          { label: "Our Purpose And Behaviour", href: "our-purpose-and-behaviour.html" },
          { label: "Lixil Window System", href: "lixil-window-system.html" },
          { label: "Awards", href: "awards.html" },
        ],
      },
    ],
  },
  {
    label: "Why Tostem",
    href: "#",
    groups: [
      {
        groupLabel: "",
        items: [
          { label: "Total Housing Solutions", href: "total-housing-solutions.html" },
          { label: "Japanese Innovation", href: "japanese-innovation.html" },
          { label: "Pre Engineered System Windows", href: "pre-engineered-system-windows.html" },
          { label: "Quality Assurance and Testing", href: "quality-assurance-and-services.html" },
          { label: "TOSTEM Product Performance", href: "soundproof-window-door-performance.html" },
          { label: "Surface & Colour Protection", href: "anodized-aluminum-windows-surface-colour-protection.html" },
          { label: "Anodised Aluminium Window", href: "anodised-aluminium-windows-doors-colour.html" },
          { label: "Sound Insulated Doors and Windows", href: "soundproof-insulated-doors-and-windows.html" },
        ],
      },
    ],
  },
  {
    label: "Our Product",
    href: "#",
    groups: [
      {
        groupLabel: "Aluminium Doors",
        items: [
          { label: "Sliding Doors", href: "aluminium-sliding-doors.html" },
          { label: "Casement Doors", href: "aluminium-casement-doors.html" },
          { label: "French Doors", href: "aluminium-french-doors.html" },
          { label: "Folding (Bi Fold) Doors", href: "aluminium-bi-folding-doors.html" },
          { label: "Corner Slider Door", href: "aluminium-corner-slider-door.html" },
          { label: "Slide and Fold Doors", href: "designs/aluminium-slide-fold-doors/" },
          { label: "Ventilation Doors", href: "ventilation-doors.html" },
        ],
      },
      {
        groupLabel: "Aluminium Windows",
        items: [
          { label: "Sliding Windows", href: "aluminium-sliding-windows-designs.html" },
          { label: "Casement Windows", href: "aluminium-casement-windows.html" },
          { label: "Awning Windows", href: "aluminium-hung-awning-windows.html" },
          { label: "Fixed Windows", href: "aluminium-fixed-window.html" },
          { label: "Glass To Glass Corner Windows", href: "aluminium-glass-to-glass-corner-window.html" },
          { label: "French Windows", href: "aluminium-french-windows.html" },
          { label: "Tilt and Slide Windows", href: "aluminium-tilt-slide-windows.html" },
          { label: "Slit Windows", href: "aluminium-slit-windows.html" },
          { label: "Vertical Sliding Windows", href: "aluminium-vertical-sliding-windows.html" },
        ],
      },
      {
        groupLabel: "Our Series",
        items: [
          { label: "ATIS Framing The Beauty Of Living", href: "atis-windows-doors-series.html" },
          { label: "We Plus Performance Oriented Design", href: "we-plus-windows-doors-series.html" },
          { label: "We 70 Design Meets Performance & Reliability", href: "we-70-windows-doors-series.html" },
        ],
      },
      {
        groupLabel: "Steel Entrance Doors",
        items: [
          { label: "GIESTA Design Simulation", href: "frame_design_selection.html" },
          { label: "Giesta Doors", href: "giesta-doors.html" },
          { label: "Giesta with Ventilation", href: "giesta-ventilation-doors.html" },
        ],
      },
      {
        groupLabel: "Airflow System",
        items: [
          { label: "GIESTA Airflow", href: "giesta-ventilation-doors.html" },
          { label: "Ventilation Doors", href: "ventilation-doors.html" },
          { label: "Ventilation Slot", href: "ventilation-slots.html" },
          { label: "Aluminium Louvers", href: "aluminum-louver.html" },
          { label: "Glass Louvers", href: "glass-louver.html" },
          { label: "GIESTA Simulation Airflow", href: "main.html?id=OUT-A01-10-CB-A1A-W035-T027-STANDARD-SC0-NON&lang=ENG" },
        ],
      },
      {
        groupLabel: "Façades",
        items: [
          { label: "Curtain Wall Facades", href: "facade-curtain-wall.html" },
          { label: "Store Front Facades", href: "facade-store-front.html" },
        ],
      },
      {
        groupLabel: "Interior",
        items: [
          { label: "Hanging Doors", href: "hanging-door.html" },
          { label: "Swing Doors", href: "swing-door.html" },
          { label: "Fixed Divider", href: "fixed-divider.html" },
        ],
      },
    ],
  },
  {
    label: "Driving Experience",
    href: "#",
    groups: [
      {
        groupLabel: "",
        items: [
          { label: "E-catalogue", href: "e-catalogue.html" },
          { label: "Modern Window & Door Design", href: "modern-window-door-design.html" },
          { label: "GIESTA Design Simulation", href: "frame_design_selection.html" },
          { label: "Gallery", href: "gallery.html" },
        ],
      },
    ],
  },
  {
    label: "TADA",
    href: "#",
    groups: [
      {
        groupLabel: "",
        items: [
          { label: "TADA-2025", href: "tada-2025.html" },
          { label: "TADA-2024", href: "tada-2024.html" },
          { label: "TADA-2023", href: "tada-2023.html" },
        ],
      },
    ],
  },
  {
    label: "Knowledge Experience",
    href: "#",
    groups: [
      {
        groupLabel: "",
        items: [
          { label: "Pre Engineered System Windows", href: "what-is-pre-engineered-system-window/" },
          { label: "Planning a System Window", href: "planning-a-system-window/" },
          { label: "System Aluminum Windows", href: "system-aluminum-windows/" },
          { label: "Blog", href: "blog.html" },
          { label: "Glossary", href: "glossary/" },
          { label: "Testimonials", href: "testimonials/" },
        ],
      },
    ],
  },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      {/* Top bar */}
      <div className="bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9 text-[11px] tracking-wide uppercase">
          <a
            href={`${BASE_URL}contact.html`}
            className="hover:text-gray-300 transition-colors font-medium"
          >
            TOSTEM Offices
          </a>
          <a
            href="https://studio.tostemindia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors font-medium"
          >
            Find a TOSTEM Studio
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[68px]">
        {/* Logo */}
        <a href="/" className="flex-shrink-0 group">
          <img
            src="https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2024/07/logo-tostemindia.png"
            alt="Tostem India Logo"
            className="h-9 w-auto transition-transform group-hover:scale-105"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                className={`flex items-center gap-1 px-3.5 py-2 text-[13px] font-medium tracking-wide transition-colors ${
                  openMenu === item.label
                    ? "text-black"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {item.label}
                <ChevronDown
                  className={`h-3 w-3 transition-transform duration-200 ${
                    openMenu === item.label ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openMenu === item.label && item.groups && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 bg-white shadow-2xl border border-gray-100 rounded-b-xl min-w-[240px] py-3 z-50 overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-neutral-900" />
                    {item.groups.map((group, gi) => (
                      <div key={gi}>
                        {group.groupLabel && (
                          <div className="px-5 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] border-b border-gray-50">
                            {group.groupLabel}
                          </div>
                        )}
                        {group.items.map((sub) => (
                          <a
                            key={sub.label}
                            href={
                              sub.href.startsWith("http")
                                ? sub.href
                                : `${BASE_URL}${sub.href}`
                            }
                            target={
                              sub.href.startsWith("http") ? "_blank" : undefined
                            }
                            rel={
                              sub.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="block px-5 py-2 text-[13px] text-gray-600 hover:text-black hover:bg-gray-50 hover:pl-6 transition-all duration-200"
                          >
                            {sub.label}
                          </a>
                        ))}
                        {gi < item.groups!.length - 1 && (
                          <div className="my-1 mx-4 border-t border-gray-100" />
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* CTA + Phone */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:18001036855"
            className="flex items-center gap-1.5 text-[13px] font-medium text-gray-600 hover:text-black transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="tracking-wide">18001036855</span>
          </a>
          <div className="w-px h-5 bg-gray-200" />
          <Button
            asChild
            className="bg-neutral-900 hover:bg-neutral-800 text-white text-[13px] font-semibold tracking-wide px-6 rounded-none h-9 transition-colors"
          >
            <a href={`${BASE_URL}get-quotation/`}>GET A QUOTE</a>
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="hover:bg-gray-50">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[320px] p-0 bg-white">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <img
                src="https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2024/07/logo-tostemindia.png"
                alt="Tostem India Logo"
                className="h-6 w-auto"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileOpen(false)}
                className="hover:bg-gray-50"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="overflow-y-auto max-h-[calc(100vh-64px)] custom-scrollbar">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-gray-50">
                  <button
                    onClick={() =>
                      setMobileSubMenu(
                        mobileSubMenu === item.label ? null : item.label
                      )
                    }
                    className="flex items-center justify-between w-full px-5 py-3.5 text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors"
                  >
                    {item.label}
                    <ChevronRight
                      className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                        mobileSubMenu === item.label ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileSubMenu === item.label && item.groups && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden bg-gray-50/80"
                      >
                        {item.groups.map((group, gi) => (
                          <div key={gi}>
                            {group.groupLabel && (
                              <div className="px-7 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]">
                                {group.groupLabel}
                              </div>
                            )}
                            {group.items.map((sub) => (
                              <a
                                key={sub.label}
                                href={
                                  sub.href.startsWith("http")
                                    ? sub.href
                                    : `${BASE_URL}${sub.href}`
                                }
                                className="block px-7 py-2.5 text-[13px] text-gray-500 hover:text-black transition-colors"
                                onClick={() => setMobileOpen(false)}
                              >
                                {sub.label}
                              </a>
                            ))}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="p-5 space-y-3 border-t border-gray-100">
                <a
                  href="tel:18001036855"
                  className="flex items-center gap-2 text-sm font-medium text-gray-700"
                >
                  <Phone className="h-4 w-4" /> 18001036855
                </a>
                <Button
                  asChild
                  className="w-full bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-semibold tracking-wide rounded-none"
                >
                  <a href={`${BASE_URL}get-quotation/`}>GET A QUOTE</a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
