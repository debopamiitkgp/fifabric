"use client";

import { useState } from "react";

export function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to Resend API
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-4">
        <p className="font-headline text-lg font-semibold" style={{ color: "var(--accent)" }}>
          Noted.
        </p>
        <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
          You&apos;ll receive new analysis as it publishes.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="flex-1 px-4 py-2.5 rounded-md text-sm border focus:outline-none focus:ring-1"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border)",
          color: "var(--text)",
        }}
      />
      <button
        type="submit"
        className="px-6 py-2.5 rounded-md text-sm font-medium transition-opacity hover:opacity-90"
        style={{ backgroundColor: "var(--accent)", color: "#0A0F1C" }}
      >
        Subscribe
      </button>
    </form>
  );
}
