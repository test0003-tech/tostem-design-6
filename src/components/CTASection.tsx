"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Download, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const BASE_URL = "https://www.tostemindia.com/";

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-32 bg-neutral-900 text-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: CTA content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-10 h-[2px] bg-white/40 mb-6" />
            <h2 className="text-3xl md:text-[2.5rem] font-bold mb-6 leading-tight tracking-tight">
              Book An Appointment
            </h2>
            <p className="text-gray-400 mb-10 leading-[1.8] max-w-lg text-[15px]">
              Experience the quality and craftsmanship of TOSTEM products
              firsthand. Visit our studio or schedule a consultation with our
              experts to find the perfect windows and doors for your home.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-white text-neutral-900 hover:bg-gray-100 font-semibold text-[12px] tracking-widest px-8 h-11 rounded-none transition-colors"
              >
                <a href={`${BASE_URL}get-quotation/`}>
                  <Calendar className="h-4 w-4 mr-2" />
                  BOOK NOW
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-neutral-900 font-semibold text-[12px] tracking-widest px-8 h-11 rounded-none transition-colors"
              >
                <a href={`${BASE_URL}e-catalogue.html`}>
                  <Download className="h-4 w-4 mr-2" />
                  DOWNLOAD PDF
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/[0.04] backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/[0.06]"
          >
            <h3 className="text-lg font-bold mb-8 tracking-tight">Get In Touch</h3>
            <div className="space-y-6">
              <a
                href="tel:18001036855"
                className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.12] transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[10px] font-semibold text-gray-600 uppercase tracking-[0.15em] mb-1">Call Us</div>
                  <div className="font-medium text-sm tracking-wide">18001036855</div>
                </div>
              </a>
              <a
                href="mailto:support.lwsindia@lixil.com"
                className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.12] transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[10px] font-semibold text-gray-600 uppercase tracking-[0.15em] mb-1">Email</div>
                  <div className="font-medium text-sm tracking-wide">support.lwsindia@lixil.com</div>
                </div>
              </a>
              <a
                href={`${BASE_URL}contact.html`}
                className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.12] transition-colors">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[10px] font-semibold text-gray-600 uppercase tracking-[0.15em] mb-1">Visit</div>
                  <div className="font-medium text-sm tracking-wide">Find a TOSTEM Office</div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
