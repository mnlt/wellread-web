"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Top bar */}
      <nav className="flex items-center justify-between px-6 sm:px-10 py-5">
        <div
          className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-base font-semibold select-none"
          style={{
            backgroundColor: "#F6F6F6",
            color: "#E23067",
            borderColor: "#DADADA",
          }}
        >
          <span>#</span>
          <span>wellread</span>
        </div>
        <a
          href="https://github.com/mnlt/wellread"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-base font-semibold no-underline hover:opacity-80 transition-opacity"
          style={{
            backgroundColor: "#F6F6F6",
            color: "#24292f",
            borderColor: "#DADADA",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </nav>

      <main className="flex flex-col items-center gap-14 max-w-3xl w-full mx-auto px-6 py-16">
        {/* Hero */}
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-zinc-900">
            The MCP that gives tokens back.
          </h1>
          <p className="text-xl sm:text-2xl leading-relaxed text-zinc-500 max-w-2xl">
            Stop burning tokens on research someone already did.
            <br />
            Free and open source.
          </p>
        </div>

        {/* Terminal demo */}
        <TerminalDemo />

        {/* How it works */}
        <section className="flex flex-col items-center gap-8 w-full">
          <Badge>How it works</Badge>
          <CopyCommand />
          <p className="text-lg sm:text-xl leading-relaxed text-zinc-500 text-center max-w-2xl">
            Use your agent as usual. When you need to research something, just ask. Your agent will check wellread for existing answers before searching the web.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full">
            <div className="flex flex-col gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-6">
              <h3 className="text-xl font-semibold text-zinc-900">Hit</h3>
              <p className="text-base sm:text-lg leading-relaxed text-zinc-500">Answer already exists. Skip the search, save the tokens.</p>
            </div>
            <div className="flex flex-col gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-6">
              <h3 className="text-xl font-semibold text-zinc-900">Partial hit</h3>
              <p className="text-base sm:text-lg leading-relaxed text-zinc-500">Related research found. Start from there, skip what's already been done.</p>
            </div>
            <div className="flex flex-col gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-6">
              <h3 className="text-xl font-semibold text-zinc-900">Miss</h3>
              <p className="text-base sm:text-lg leading-relaxed text-zinc-500">Nothing found. Research normally using whatever tools you have.</p>
            </div>
          </div>
          <p className="text-lg sm:text-xl leading-relaxed text-zinc-500 text-center max-w-2xl">
            On a partial hit or miss, findings get contributed automatically — so the next person starts ahead and saves the tokens.
          </p>
        </section>

        {/* What gets shared */}
        <section className="flex flex-col items-center gap-4 w-full">
          <Badge>What gets shared</Badge>
          <p className="text-lg sm:text-xl leading-relaxed text-zinc-500 text-center max-w-2xl">
            Generalized research summaries only. No raw code, no project details, no credentials. Nothing private ever leaves your machine.
          </p>
        </section>

        {/* Works with */}
        <section className="flex flex-col items-center gap-4 w-full">
          <Badge>Works with</Badge>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <ToolLogo name="Claude Code" src="/logos/claude.svg" />
            <ToolLogo name="Cursor" src="/logos/cursor.svg" />
            <ToolLogo name="Windsurf" src="/logos/windsurf.svg" />
            <ToolLogo name="Gemini CLI" src="/logos/gemini.svg" />
            <ToolLogo name="VS Code" src="/logos/vscode.svg" />
          </div>
        </section>

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
        className="group flex items-center gap-3 rounded-lg border border-zinc-200 bg-zinc-50 px-6 py-3 font-mono text-lg text-zinc-800 transition-colors hover:border-zinc-300 hover:bg-zinc-100 cursor-pointer"
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

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center rounded-lg border px-3 py-1 text-sm font-semibold"
      style={{
        backgroundColor: "#F6F6F6",
        color: "#E23067",
        borderColor: "#DADADA",
      }}
    >
      {children}
    </span>
  );
}

function ToolLogo({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Image src={src} alt={name} width={32} height={32} />
      <span className="text-sm text-zinc-400">{name}</span>
    </div>
  );
}

function TerminalDemo() {
  return (
    <section className="w-full">
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
            <p className="font-mono text-xs text-white">── # wellread ──</p>
            <p className="text-white">Someone already researched this.</p>
            <p className="text-white font-semibold">🔥 You just saved ~30K tokens!</p>
            <p className="text-white">Your context window says thank you.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
