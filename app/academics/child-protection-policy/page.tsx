"use client";

import React from 'react';
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Download, ExternalLink, FileText, CheckCircle2 } from "lucide-react";

export default function ChildProtectionPolicyPage() {
  const pdfUrl = "/Child-Protection-Policy.pdf";

  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-slate-900 selection:text-white">
      <TopBar />
      <Navbar />

      {/* Header */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 bg-[#0B1121] text-white overflow-hidden flex flex-col items-center justify-center border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2000&auto=format&fit=crop"
            alt="Child Protection Policy background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1121]/80 via-[#0B1121]/95 to-[#0B1121]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Safeguarding & Student Welfare</span>
          </div>

          <h1 className="py-2 text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-white drop-shadow-md">
            Child Protection Policy
          </h1>

          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-slate-300 font-normal leading-relaxed">
            Chinmaya Vidyalaya is firmly committed to providing a safe, positive, and nurturing environment where every child is protected, valued, and empowered.
          </p>
        </div>
      </section>

      {/* Highlights / Key Pillars */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 -mt-6 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200 flex items-start gap-3">
            <div className="p-2.5 rounded-md bg-emerald-50 text-emerald-600 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 text-sm mb-1">Zero Tolerance</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Strict zero tolerance policy against any form of harm, neglect, or abuse.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200 flex items-start gap-3">
            <div className="p-2.5 rounded-md bg-blue-50 text-blue-600 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 text-sm mb-1">Safe Environment</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Comprehensive background verifications, staff guidelines, and vigilant campus monitoring.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200 flex items-start gap-3">
            <div className="p-2.5 rounded-md bg-amber-50 text-amber-600 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 text-sm mb-1">Transparent Redressal</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Defined reporting channels and dedicated committee ensuring prompt, confidential action.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Viewer Section */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-10">
        <div className="bg-white rounded-xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden">
          {/* Action Bar */}
          <div className="bg-slate-900 px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
            <div className="flex items-center gap-3 text-white">
              <div className="p-2 rounded-lg bg-red-500/20 text-red-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold tracking-wide text-white">
                  Child Protection Policy Document
                </h2>
                <p className="text-xs text-slate-400">Official Chinmaya Vidyalaya Policy Guidelines (PDF)</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-sm font-semibold rounded-lg transition-colors flex items-center gap-2 border border-slate-700"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="hidden sm:inline">Open in New Tab</span>
              </a>

              <a
                href={pdfUrl}
                download="Child-Protection-Policy.pdf"
                className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-sm font-bold rounded-lg transition-all shadow-md hover:shadow-red-900/30 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Embedded Viewer */}
          <div className="w-full h-[750px] md:h-[850px] bg-slate-100">
            <object
              data={pdfUrl}
              type="application/pdf"
              className="w-full h-full"
            >
              <iframe
                src={`${pdfUrl}#toolbar=1&navpanes=0`}
                className="w-full h-full border-none"
                title="Child Protection Policy PDF"
              >
                <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-white">
                  <ShieldCheck className="w-16 h-16 text-emerald-500 mb-4" />
                  <h3 className="text-xl font-bold text-slate-800 mb-2">View Child Protection Policy</h3>
                  <p className="text-slate-500 max-w-md mb-6">
                    Your browser does not support directly embedding PDFs inside the page. You can view or download the complete policy document below:
                  </p>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-md transition-all inline-flex items-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Download / Open Policy PDF
                  </a>
                </div>
              </iframe>
            </object>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

