"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Download, Phone } from "lucide-react";

const BASE_URL = "https://www.tostemindia.com/";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: CTA content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Book An Appointment
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed max-w-lg">
              Experience the quality and craftsmanship of TOSTEM products
              firsthand. Visit our studio or schedule a consultation with our
              experts to find the perfect windows and doors for your home.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-white text-black hover:bg-gray-200 font-semibold px-8"
              >
                <a href={`${BASE_URL}get-quotation/`}>
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Now
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black font-semibold px-8"
              >
                <a href={`${BASE_URL}e-catalogue.html`}>
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </a>
              </Button>
            </div>
          </div>

          {/* Right: Contact Info */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-10">
            <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-5">
              <a
                href="tel:18001036855"
                className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Call Us</div>
                  <div className="font-medium">18001036855</div>
                </div>
              </a>
              <a
                href="mailto:support.lwsindia@lixil.com"
                className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-sm">
                  @
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Email</div>
                  <div className="font-medium">support.lwsindia@lixil.com</div>
                </div>
              </a>
              <a
                href={`${BASE_URL}contact.html`}
                className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Visit</div>
                  <div className="font-medium">Find a TOSTEM Office</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
