"use client";

import { useMemo, useState } from "react";
import { atlasRegions, AtlasTheme } from "@/data/atlasRegions";

const themeCopy: Record<AtlasTheme, { label: string; color: string }> = {
  Strategy: {
    label: "Strategy",
    color: "bg-indigo-500/20 text-indigo-400 border-indigo-400/40",
  },
  Creativity: {
    label: "Creativity",
    color: "bg-pink-500/20 text-pink-400 border-pink-400/40",
  },
  Research: {
    label: "Research",
    color: "bg-emerald-500/20 text-emerald-400 border-emerald-400/40",
  },
  Synthesis: {
    label: "Synthesis",
    color: "bg-sky-500/20 text-sky-400 border-sky-400/40",
  },
  Automation: {
    label: "Automation",
    color: "bg-amber-500/20 text-amber-400 border-amber-400/40",
  },
};

const themes: AtlasTheme[] = ["Strategy", "Creativity", "Research", "Synthesis", "Automation"];

export function AtlasExplorer() {
  const [search, setSearch] = useState("");
  const [activeTheme, setActiveTheme] = useState<AtlasTheme | "All">("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredRegions = useMemo(() => {
    const normalizedQuery = search.trim().toLowerCase();
    return atlasRegions.filter((region) => {
      const matchesTheme = activeTheme === "All" || region.theme === activeTheme;
      if (!matchesTheme) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      const haystack = [
        region.name,
        region.headline,
        region.focus,
        region.bestFor.join(" "),
        region.starterPrompt,
        region.insights,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [search, activeTheme]);

  const featured = useMemo(() => atlasRegions.slice(0, 3), []);

  return (
    <section id="atlas-explorer" className="space-y-12">
      <div className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-indigo-500/10 backdrop-blur">
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-[0.4em] text-indigo-300">
            Navigation Stack
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Decode the prompt territories shaping high-leverage conversations.
          </h2>
          <p className="text-balance text-sm text-slate-300 sm:text-base">
            ChatPT Atlas curates living playbooks for outperforming assistants. Filter
            by theme, search for use-cases, and copy prompts engineered for clarity,
            velocity, and confidence.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr),minmax(0,420px)]">
          <div className="space-y-4">
            <div className="relative">
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-900/60 py-3 pl-12 pr-4 text-sm text-slate-100 outline-none ring-0 transition focus:border-indigo-400/50 focus:bg-slate-900 focus:shadow-[0_0_0_4px_rgba(99,102,241,0.15)]"
                placeholder="Search by goal, role, or keyword"
              />
              <svg
                className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-indigo-300/70"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
                />
              </svg>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTheme("All")}
                className={`rounded-full border px-4 py-1.5 text-sm transition ${
                  activeTheme === "All"
                    ? "border-indigo-400 bg-indigo-500/30 text-white"
                    : "border-white/10 bg-white/5 text-slate-200 hover:border-indigo-400/40 hover:text-white"
                }`}
              >
                All themes
              </button>
              {themes.map((theme) => (
                <button
                  key={theme}
                  onClick={() => setActiveTheme(theme)}
                  className={`rounded-full border px-4 py-1.5 text-sm transition ${
                    activeTheme === theme
                      ? "border-white/20 bg-white/15 text-white"
                      : "border-white/10 bg-white/5 text-slate-200 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {themeCopy[theme].label}
                </button>
              ))}
            </div>
          </div>

          <aside className="space-y-4 rounded-2xl border border-white/10 bg-slate-950/80 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Northbound Signals
            </p>
            <ul className="space-y-4">
              {featured.map((region) => (
                <li key={region.id} className="rounded-xl bg-white/3 p-4 text-slate-200">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-white">{region.name}</p>
                    <span className="text-xs text-indigo-300">
                      {region.signalStrength}% signal
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    {region.headline}
                  </p>
                  <div className="mt-4 h-1.5 rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-400 via-indigo-300 to-blue-400"
                      style={{ width: `${region.signalStrength}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-400">
              Signal strength blends adoption velocity, completion quality, and prompt
              resilience after 100+ iterations tracked by the Atlas observatory.
            </p>
          </aside>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {filteredRegions.map((region) => (
          <article
            key={region.id}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-8 transition hover:border-indigo-400/40 hover:bg-slate-950/90"
          >
            <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/20 via-fuchsia-400/10 to-transparent blur-3xl transition duration-500 group-hover:from-indigo-500/30 group-hover:via-fuchsia-400/20" />

            <div className="relative space-y-4">
              <span
                className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] ${themeCopy[region.theme].color}`}
              >
                {region.theme}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold text-white">{region.name}</h3>
                <p className="text-sm font-medium text-indigo-200">{region.headline}</p>
                <p className="text-sm text-slate-300">{region.focus}</p>
                <ul className="flex flex-wrap gap-2 pt-2 text-xs text-slate-300">
                  {region.bestFor.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Starter prompt
                </p>
                <pre className="whitespace-pre-wrap text-sm text-slate-200">
                  {region.starterPrompt}
                </pre>
                <CopyButton
                  isActive={copiedId === region.id}
                  onCopy={async () => {
                    try {
                      await navigator.clipboard.writeText(region.starterPrompt);
                      setCopiedId(region.id);
                      setTimeout(() => setCopiedId(null), 2000);
                    } catch (error) {
                      console.error("Failed to copy prompt", error);
                    }
                  }}
                />
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Field Insight
                </p>
                <p className="text-sm text-slate-200">{region.insights}</p>
              </div>
            </div>
          </article>
        ))}

        {filteredRegions.length === 0 && (
          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-10 text-center text-slate-300">
            <h3 className="text-lg font-semibold text-white">No regions located</h3>
            <p className="mt-2 text-sm">
              Try a broader keyword or switch themes to uncover other prompt territories.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function CopyButton({
  onCopy,
  isActive,
}: {
  onCopy: () => void | Promise<void>;
  isActive: boolean;
}) {
  return (
    <button
      onClick={onCopy}
      className={`inline-flex w-full items-center justify-center rounded-lg border px-3 py-2 text-xs font-semibold transition ${
        isActive
          ? "border-emerald-400/50 bg-emerald-500/20 text-emerald-100"
          : "border-indigo-400/40 bg-indigo-500/20 text-indigo-100 hover:bg-indigo-500/30 hover:text-white"
      }`}
    >
      {isActive ? "Copied" : "Copy prompt"}
    </button>
  );
}
