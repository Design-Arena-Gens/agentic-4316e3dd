export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.45)_0%,_rgba(56,189,248,0.1)_35%,_transparent_70%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[520px] bg-[radial-gradient(circle_at_bottom,_rgba(56,189,248,0.25)_0%,_rgba(12,74,110,0.0)_60%)]" />
      </div>
      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-6 pb-20 pt-24 sm:px-8 lg:px-12">
        <Hero />
        <CredibilityBand />
        <AtlasExplorer />
        <OperatingSystem />
      </main>
    </div>
  );
}

import Link from "next/link";
import { AtlasExplorer } from "@/components/AtlasExplorer";

function Hero() {
  return (
    <section className="grid gap-8 rounded-[48px] border border-white/20 bg-slate-950/40 p-10 backdrop-blur sm:grid-cols-[minmax(0,1fr),minmax(0,360px)] sm:p-12">
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-[0.5em] text-indigo-300">
          ChatPT Atlas
        </p>
        <h1 className="text-balance text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
          A living map of prompts engineered for performance AI teams.
        </h1>
        <p className="text-pretty text-base text-slate-300 sm:text-lg">
          Surface the prompt territories that unlock leverage faster. Each region in the
          Atlas distills battle-tested instructions, reference flows, and quality guardrails
          so your next conversation starts at expert altitude.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="#atlas-explorer"
            className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400 hover:shadow-indigo-400/60"
          >
            Open the Atlas
          </Link>
          <Link
            href="https://agentic-4316e3dd.vercel.app/api/manifest"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/40 hover:text-white"
          >
            Download manifest
          </Link>
        </div>
      </div>

      <dl className="grid gap-4 self-end rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-sm text-slate-200">
        <ForecastItem
          label="Signals tracked"
          value="127"
          description="Unique prompt territories monitored across 4 workflow verticals."
        />
        <ForecastItem
          label="Iteration velocity"
          value="4.2x"
          description="Faster concept-to-decision loops for teams adopting Atlas patterns."
        />
        <ForecastItem
          label="Precision guardrails"
          value="96%"
          description="Average completion rigidity when using provided output schemas."
        />
      </dl>
    </section>
  );
}

function ForecastItem({
  label,
  value,
  description,
}: {
  label: string;
  value: string;
  description: string;
}) {
  return (
    <div className="border-b border-white/5 pb-4 last:border-none last:pb-0">
      <dt className="text-xs uppercase tracking-[0.35em] text-slate-400">{label}</dt>
      <dd className="mt-2 text-2xl font-semibold text-white">{value}</dd>
      <p className="mt-1 text-xs text-slate-400">{description}</p>
    </div>
  );
}

function CredibilityBand() {
  const logos = [
    { name: "SignalOps", tag: "Workflow Labs" },
    { name: "Northstar PMs", tag: "Product Studio" },
    { name: "Open Research Loop", tag: "Community" },
    { name: "DeltaFoundry", tag: "Venture Collective" },
  ];

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="space-y-3 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-indigo-200">
          Referenced by operators at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-indigo-100 sm:gap-10">
          {logos.map((logo) => (
            <span
              key={logo.name}
              className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-2 shadow-lg shadow-indigo-500/10"
            >
              <span className="text-base font-semibold text-white">{logo.name}</span>
              <span className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                {logo.tag}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function OperatingSystem() {
  const ops = [
    {
      title: "Signal Observatory",
      detail:
        "Every prompt territory is validated against real conversations, scoring for clarity, adaptability, and failure recovery.",
    },
    {
      title: "Prompt Chaining Canvas",
      detail:
        "Map multi-step processes by stacking Atlas regions, then export structured briefs ready for automation or team handoffs.",
    },
    {
      title: "Quality Guardrails",
      detail:
        "Embed rubric prompts and output schemas to create AI-native QA gates and reduce back-and-forth rewrite cycles.",
    },
  ];

  return (
    <section className="grid gap-8 rounded-[40px] border border-white/10 bg-slate-950/40 p-10 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)]">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-indigo-200">
          Operating Stack
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Build your prompt operations nerve center.
        </h2>
        <p className="text-sm text-slate-300">
          Combine Atlas regions with your domain knowledge to craft briefing packets,
          automation-ready schemas, and decision dashboards with ease.
        </p>
        <Link
          href="#"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-100 transition hover:border-white/40 hover:text-white"
        >
          View integration recipes
          <svg
            className="h-3 w-3"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 2h5.5v5.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.5 7.5 10 2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      <div className="grid gap-4">
        {ops.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-slate-200 shadow-lg shadow-indigo-500/10"
          >
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
