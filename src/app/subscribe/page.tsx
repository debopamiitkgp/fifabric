import type { Metadata } from "next";
import { SubscribeForm } from "@/components/SubscribeForm";

export const metadata: Metadata = {
  title: "Subscribe",
  description: "Get FiFabric analysis delivered to your inbox.",
};

export default function SubscribePage() {
  return (
    <div className="max-w-content mx-auto px-6 py-24 text-center">
      <h1 className="font-headline text-3xl font-bold mb-4" style={{ color: "var(--text)" }}>
        Subscribe
      </h1>
      <p className="text-body mb-2" style={{ color: "var(--text-muted)" }}>
        New analysis delivered when published.
      </p>
      <p className="text-sm mb-10" style={{ color: "var(--text-muted)" }}>
        Plain text preferred. 150-word summary + PDF attachment. One-click unsubscribe.
      </p>
      <SubscribeForm />
    </div>
  );
}
