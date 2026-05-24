"use client";

import React from "react";
import { Phone, Mail, ArrowUpRight } from "lucide-react";

const BASE_URL = "https://www.tostemindia.com/";

const footerLinks = {
  quickLinks: [
    { label: "Get Quotation", href: "get-quotation/" },
    { label: "Testimonials", href: "testimonials/" },
    { label: "Career", href: "career/" },
    { label: "Knowledge Centre", href: "blog.html" },
    { label: "Awards", href: "awards.html" },
    { label: "Gallery", href: "gallery.html" },
    { label: "News Posts", href: "?page_id=3953" },
    { label: "Glossary", href: "glossary/" },
  ],
  products: [
    { label: "Aluminium Doors", href: "aluminium-doors-design-prices.html" },
    { label: "Aluminium Windows", href: "aluminium-windows-design-prices.html" },
    { label: "Steel Entrance Doors", href: "steel-entrance-doors.html" },
    { label: "Façades", href: "aluminium-building-architectural-facades.html" },
    { label: "Interior", href: "aluminium-interior-door.html" },
    { label: "Airflow System", href: "airflow-system.html" },
  ],
  legal: [
    { label: "Privacy Policy", href: "privacy-policy/" },
    { label: "CSR Policy", href: "csr-policy/" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4">
            <img
              src="https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2024/07/logo-tostemindia.png"
              alt="Tostem India Logo"
              className="h-7 w-auto mb-5 brightness-0 invert"
            />
            <p className="text-[13px] text-gray-500 leading-relaxed max-w-xs mb-6">
              TOSTEM India is the world&apos;s leading manufacturer and supplier of
              aluminium windows and doors in India.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="tel:18001036855"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.05] hover:bg-white/[0.12] transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
              </a>
              <a
                href="mailto:support.lwsindia@lixil.com"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.05] hover:bg-white/[0.12] transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-2 md:col-start-5">
            <h4 className="text-white font-semibold text-[11px] mb-5 uppercase tracking-[0.15em]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={`${BASE_URL}${link.href}`}
                    className="text-[13px] text-gray-500 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-2.5 w-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-semibold text-[11px] mb-5 uppercase tracking-[0.15em]">
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={`${BASE_URL}${link.href}`}
                    className="text-[13px] text-gray-500 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-2.5 w-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-3">
            <h4 className="text-white font-semibold text-[11px] mb-5 uppercase tracking-[0.15em]">
              Contact
            </h4>
            <div className="space-y-4">
              <div>
                <div className="text-[10px] text-gray-600 uppercase tracking-[0.15em] mb-1">Phone</div>
                <a
                  href="tel:18001036855"
                  className="text-[13px] text-gray-400 hover:text-white transition-colors font-medium"
                >
                  18001036855
                </a>
              </div>
              <div>
                <div className="text-[10px] text-gray-600 uppercase tracking-[0.15em] mb-1">Email</div>
                <a
                  href="mailto:support.lwsindia@lixil.com"
                  className="text-[13px] text-gray-400 hover:text-white transition-colors font-medium break-all"
                >
                  support.lwsindia@lixil.com
                </a>
              </div>
              <div className="flex gap-4 pt-1">
                <a
                  href={`${BASE_URL}e-catalogue.html`}
                  className="text-[13px] text-gray-500 hover:text-white transition-colors"
                >
                  Catalogue
                </a>
                <a
                  href={`${BASE_URL}get-quotation/`}
                  className="text-[13px] text-gray-500 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.label}
                  href={`${BASE_URL}${link.href}`}
                  className="text-[11px] text-gray-600 hover:text-gray-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-gray-600 tracking-wide">
            © 2022-2025 TOSTEM India. All rights reserved.
          </p>
          <p className="text-[11px] text-gray-600">
            Website Design by{" "}
            <a
              href="https://www.techmagnate.com/website-designing-development.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              Techmagnate
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
