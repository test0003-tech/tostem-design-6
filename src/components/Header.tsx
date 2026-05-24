"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Phone,
  X,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

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

  const handleMouseEnter = (label: string) => {
    setOpenMenu(label);
  };

  const handleMouseLeave = () => {
    setOpenMenu(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-9 text-xs">
          <a href="contact.html" className="hover:underline">
            TOSTEM Offices
          </a>
          <a
            href="https://studio.tostemindia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline font-medium"
          >
            Find a TOSTEM Studio
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img
            src="https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2024/07/logo-tostemindia.png"
            alt="Tostem India Logo"
            className="h-8 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-800 hover:text-black transition-colors">
                {item.label}
                <ChevronDown className="h-3.5 w-3.5" />
              </button>

              {openMenu === item.label && item.groups && (
                <div className="absolute top-full left-0 bg-white shadow-xl border-t-2 border-black rounded-b-md min-w-[220px] py-2 z-50">
                  {item.groups.map((group, gi) => (
                    <div key={gi}>
                      {group.groupLabel && (
                        <div className="px-4 py-1.5 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                          {group.groupLabel}
                        </div>
                      )}
                      {group.items.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href.startsWith("http") ? sub.href : `${BASE_URL}${sub.href}`}
                          target={sub.href.startsWith("http") ? "_blank" : undefined}
                          rel={sub.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                        >
                          {sub.label}
                        </a>
                      ))}
                      {gi < item.groups!.length - 1 && (
                        <div className="my-1 border-t border-gray-100" />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <a
            href={`${BASE_URL}aluminium-doors-design-prices.html`}
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-800 hover:text-black transition-colors"
          >
            Aluminium Doors
          </a>
          <a
            href={`${BASE_URL}aluminium-windows-design-prices.html`}
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-800 hover:text-black transition-colors"
          >
            Aluminium Windows
          </a>
        </nav>

        {/* CTA + Phone */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:18001036855" className="flex items-center gap-1.5 text-sm font-medium text-gray-800 hover:text-black">
            <Phone className="h-4 w-4" />
            18001036855
          </a>
          <Button
            asChild
            className="bg-black hover:bg-gray-800 text-white text-sm px-5"
          >
            <a href={`${BASE_URL}get-quotation/`}>Get a Quote</a>
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[320px] p-0">
            <div className="flex items-center justify-between p-4 border-b">
              <img
                src="https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2024/07/logo-tostemindia.png"
                alt="Tostem India Logo"
                className="h-6 w-auto"
              />
              <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="overflow-y-auto max-h-[calc(100vh-64px)]">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-gray-100">
                  <button
                    onClick={() =>
                      setMobileSubMenu(mobileSubMenu === item.label ? null : item.label)
                    }
                    className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-gray-800"
                  >
                    {item.label}
                    <ChevronRight
                      className={`h-4 w-4 transition-transform ${
                        mobileSubMenu === item.label ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  {mobileSubMenu === item.label && item.groups && (
                    <div className="bg-gray-50">
                      {item.groups.map((group, gi) => (
                        <div key={gi}>
                          {group.groupLabel && (
                            <div className="px-6 py-1.5 text-xs font-bold text-gray-500 uppercase tracking-wider">
                              {group.groupLabel}
                            </div>
                          )}
                          {group.items.map((sub) => (
                            <a
                              key={sub.label}
                              href={sub.href.startsWith("http") ? sub.href : `${BASE_URL}${sub.href}`}
                              className="block px-6 py-2 text-sm text-gray-600 hover:text-black"
                              onClick={() => setMobileOpen(false)}
                            >
                              {sub.label}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="p-4 space-y-3">
                <a
                  href="tel:18001036855"
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <Phone className="h-4 w-4" /> 18001036855
                </a>
                <Button asChild className="w-full bg-black hover:bg-gray-800 text-white">
                  <a href={`${BASE_URL}get-quotation/`}>Get a Quote</a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
