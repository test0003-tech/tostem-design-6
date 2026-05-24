"use client";

import React from "react";

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
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img
              src="https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/uploads/2024/07/logo-tostemindia.png"
              alt="Tostem India Logo"
              className="h-7 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              TOSTEM India is the world&apos;s leading manufacturer and supplier of
              aluminium windows and doors in India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={`${BASE_URL}${link.href}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Products
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={`${BASE_URL}${link.href}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:18001036855"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  📞 18001036855
                </a>
              </li>
              <li>
                <a
                  href="mailto:support.lwsindia@lixil.com"
                  className="text-sm text-gray-400 hover:text-white transition-colors break-all"
                >
                  ✉️ support.lwsindia@lixil.com
                </a>
              </li>
              <li>
                <a
                  href={`${BASE_URL}e-catalogue.html`}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Catalogue
                </a>
              </li>
              <li>
                <a
                  href={`${BASE_URL}get-quotation/`}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="tel:18001036855"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Call Us
                </a>
              </li>
            </ul>
            <div className="mt-4 space-y-2">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.label}
                  href={`${BASE_URL}${link.href}`}
                  className="block text-xs text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © 2022-2025 TOSTEM India. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Website Design by{" "}
            <a
              href="https://www.techmagnate.com/website-designing-development.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              Techmagnate
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
