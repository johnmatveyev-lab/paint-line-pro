"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#0A1628]">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-9 h-9 rounded-xl bg-[#00C2A8] flex items-center justify-center text-white text-sm">
              PL
            </div>
            Paint Line <span className="text-[#00C2A8]">Pro</span>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-[#0A1628] transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </header>

      <div className="py-10 px-4">
        <div className="max-w-xl mx-auto">
          <div className="flex justify-between mb-8">
            {[1, 2, 3, 4, 5, 6].map((step) => (
              <div
                key={step}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                  step === 1
                    ? "bg-[#00C2A8] text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            {submitted ? (
              <div className="text-center py-6">
                <h1 className="text-2xl font-bold mb-2">Request received</h1>
                <p className="text-gray-600 mb-6">
                  Thanks — we&apos;ll follow up with an approximate quote shortly.
                </p>
                <Link
                  href="/"
                  className="inline-block bg-[#00C2A8] text-white px-8 py-3 rounded-xl font-semibold hover:bg-teal-600 transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            ) : (
              <>
                <h1 className="text-2xl font-bold mb-2">Get an Instant Quote</h1>
                <p className="text-gray-600 mb-6">
                  Tell us about your project. Approximate quote in under 3
                  minutes.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-[#00C2A8]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-[#00C2A8]"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium mb-1"
                    >
                      City / Metro
                    </label>
                    <input
                      id="city"
                      name="city"
                      required
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-[#00C2A8]"
                      placeholder="e.g. Atlanta, GA"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="details"
                      className="block text-sm font-medium mb-1"
                    >
                      Project details
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      rows={4}
                      required
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-[#00C2A8] resize-none"
                      placeholder="Interior/exterior, approx sq ft, unit count…"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#00C2A8] text-white px-8 py-3 rounded-xl font-semibold hover:bg-teal-600 transition-colors"
                  >
                    Request Quote
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
