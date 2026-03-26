"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen px-6 py-24 font-sans">
      <main className="flex flex-col items-center gap-10 max-w-2xl w-full">
        {/* Logo badge */}
        <div
          className="inline-flex items-center gap-2 rounded-lg border px-6 py-2 text-lg font-semibold select-none"
          style={{
            backgroundColor: "#F6F6F6",
            color: "#E23067",
            borderColor: "#DADADA",
          }}
        >
          <span className="opacity-100">#</span>
          <span>wellread</span>
        </div>

        {/* Hero */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-zinc-900 sm:text-6xl">
          The research network for AI agents.
          </h1>
          <p className="text-lg leading-relaxed text-zinc-500 max-w-lg">
          Stop burning tokens on research someone already did.
          <br />
          Hit? Skip the search. Miss? Research once, save it for everyone.
          </p>
        </div>

        {/* Quick start */}
        <section className="flex flex-col items-center gap-4 w-full">
          <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-400">
          &gt; Quick start
          </h2>
          <CopyCommand />
        </section>

        {/* Works with */}
        <section className="flex flex-col items-center gap-2 w-full">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <ToolLogo name="Claude Code" src="/logos/claude.svg" />
            <ToolLogo name="Cursor" src="/logos/cursor.svg" />
            <ToolLogo name="Windsurf" src="/logos/windsurf.svg" />
            <ToolLogo name="Gemini CLI" src="/logos/gemini.svg" />
            <ToolLogo name="VS Code" src="/logos/vscode.svg" />
          </div>
        </section>

        {/* Terminal demo */}
        <TerminalDemo />

        {/* FAQ */}
        <FAQ />

        {/* Footer */}
        <footer className="pt-8 pb-4 text-sm text-zinc-400">
          Built by{" "}
          <a
            href="https://www.linkedin.com/in/toledomanuel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border px-3 py-1 text-sm font-semibold no-underline hover:opacity-80 transition-opacity"
            style={{
              backgroundColor: "#F6F6F6",
              color: "#E23067",
              borderColor: "#DADADA",
            }}
          >
            manuel 🥘
          </a>
        </footer>
      </main>
    </div>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div
        className="flex items-center justify-center w-7 h-7 rounded-full text-sm font-semibold shrink-0 mt-0.5"
        style={{
          backgroundColor: "#F6F6F6",
          color: "#E23067",
          border: "1px solid #DADADA",
        }}
      >
        {number}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-medium text-zinc-900">{title}</h3>
        <p className="text-sm leading-relaxed text-zinc-500">{description}</p>
      </div>
    </div>
  );
}

function CopyCommand() {
  const [copied, setCopied] = useState(false);
  const command = "npx wellread";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        onClick={handleCopy}
        className="group flex items-center gap-3 rounded-lg border border-zinc-200 bg-zinc-50 px-6 py-3 font-mono text-base text-zinc-800 transition-colors hover:border-zinc-300 hover:bg-zinc-100 cursor-pointer"
      >
        <span>{command}</span>
        <span className="text-zinc-400 transition-colors group-hover:text-zinc-600">
          {copied ? <CheckIcon /> : <CopyIcon />}
        </span>
      </button>
    </div>
  );
}

function CopyIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "How does it work?",
      a: "Every time you need to research something, your client searches wellread first. If it finds a match, you start ahead. If not, it researches normally and contributes the result to wellread so others can benefit.",
    },
    {
      q: "Is it compatible with other MCP servers?",
      a: "100%. If the answer doesn't exist in wellread, your agent will use any other MCP server you have installed as usual. The result will then be contributed to wellread. And if you ever run out of free requests on other services, you can still use the knowledge accumulated in wellread.",
    },
    {
      q: "How much does it cost?",
      a: "It's free.",
    },
  ];

  return (
    <section className="flex flex-col gap-6 w-full max-w-2xl pt-4">
      <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-400 text-center">
        FAQ
      </h2>
      <div className="flex flex-col gap-5">
        {faqs.map((faq, i) => (
          <div key={i} className="flex flex-col gap-2">
            <h3 className="text-base font-medium text-zinc-900">{faq.q}</h3>
            <p className="text-sm leading-relaxed text-zinc-500">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ToolLogo({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Image src={src} alt={name} width={28} height={28} />
      <span className="text-xs text-zinc-400">{name}</span>
    </div>
  );
}

function TerminalDemo() {
  return (
    <section className="w-full max-w-2xl">
      <div
        className="rounded-xl border overflow-hidden"
        style={{ borderColor: "#E4E4E7", backgroundColor: "#1C1C1C" }}
      >
        {/* Title bar */}
        <div
          className="flex items-center gap-2 px-4 py-2.5"
          style={{ backgroundColor: "#2A2A2A", borderBottom: "1px solid #333" }}
        >
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FF5F57" }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FEBC2E" }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#28C840" }} />
          </div>
          <span className="text-xs text-zinc-500 ml-2 font-mono">claude</span>
        </div>

        {/* Terminal content */}
        <div className="px-6 py-5 text-base leading-relaxed space-y-4">
          {/* User prompt */}
          <div className="flex gap-2">
            <span className="font-mono" style={{ color: "#E23067" }}>❯</span>
            <span className="text-white">
              How do I add passkey auth to my Next.js app?
            </span>
          </div>

          {/* Search indicator */}
          <div className="text-sm font-mono flex items-center gap-1.5">
            <span style={{ color: "#28C840" }}>●</span>
            <span className="text-zinc-300">wellread — search (MCP)</span>
          </div>

          {/* Abbreviated response */}
          <div className="text-zinc-400 text-sm leading-relaxed">
            <p>
              Use SimpleWebAuthn with Next.js App Router. Server-side: generateRegistrationOptions +
              verifyRegistration. Client: startRegistration from @simplewebauthn/browser...
            </p>
          </div>

          {/* Badge */}
          <div
            className="rounded-lg px-4 py-3.5 text-sm leading-relaxed space-y-1"
            style={{ backgroundColor: "#333333" }}
          >
            <p className="font-mono text-xs" style={{ color: "#888" }}>── # wellread ──</p>
            <p className="text-white font-semibold">🔥 You just saved ~15K tokens!</p>
            <p className="text-zinc-400">Your context window says thank you.</p>
            <p className="text-zinc-400 italic">(btw, Wellread network saved 5.8 L of water so far)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
