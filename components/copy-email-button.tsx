"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — the email is still visible and selectable as text.
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
    >
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}
