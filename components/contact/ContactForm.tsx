"use client";

import { useState } from "react";
import { COMPANY } from "@/lib/constants";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-solar-green/30 bg-solar-green/5 p-8 text-center">
        <p className="text-lg font-semibold text-solar-navy">Thank you for your inquiry.</p>
        <p className="mt-2 text-slate-600">
          We will contact you shortly. For urgent queries, call {COMPANY.phone} or message us on
          WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-solar-navy mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-solar-green focus:ring-2 focus:ring-solar-green/20"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-solar-navy mb-1">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-solar-green focus:ring-2 focus:ring-solar-green/20"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-solar-navy mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-solar-green focus:ring-2 focus:ring-solar-green/20"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-solar-navy mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-solar-green focus:ring-2 focus:ring-solar-green/20 resize-y"
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto rounded-lg bg-solar-green px-8 py-3 font-semibold text-white hover:bg-solar-green-dark transition-colors"
      >
        Send Inquiry
      </button>
      <p className="text-xs text-slate-500">
        Static form—no data is sent to a server. Connect to email or CRM when ready.
      </p>
    </form>
  );
}
