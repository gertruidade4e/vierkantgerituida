"use client";

import { useMemo, useState } from "react";
import type { BotCommand } from "@/lib/telemetry";

const categories = ["All", "Moderation", "Security", "Automation", "Utility"] as const;
type Category = (typeof categories)[number];

type CommandsBrowserProps = {
  commands: BotCommand[];
  sourceLabel: string;
};

export function CommandsBrowser({ commands, sourceLabel }: CommandsBrowserProps) {
  const [category, setCategory] = useState<Category>("All");
  const [query, setQuery] = useState("");

  const counts = useMemo(() => {
    return {
      All: commands.length,
      Moderation: commands.filter((c) => c.category === "Moderation").length,
      Security: commands.filter((c) => c.category === "Security").length,
      Automation: commands.filter((c) => c.category === "Automation").length,
      Utility: commands.filter((c) => c.category === "Utility").length,
    } as const;
  }, [commands]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return commands.filter((command) => {
      const matchCategory = category === "All" || command.category === category;
      const matchQuery =
        q.length === 0 ||
        command.name.toLowerCase().includes(q) ||
        command.usage.toLowerCase().includes(q) ||
        command.description.toLowerCase().includes(q) ||
        command.category.toLowerCase().includes(q) ||
        (command.aliases?.toLowerCase().includes(q) ?? false);

      return matchCategory && matchQuery;
    });
  }, [category, commands, query]);

  return (
    <section className="mt-8 space-y-5">
      <div className="panel-glass rounded-2xl border p-5">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((item) => {
            const active = item === category;
            return (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full border px-4 py-2 text-xs tracking-[0.1em] uppercase transition ${
                  active
                    ? "border-white/35 bg-white/15 text-white"
                    : "border-white/10 bg-black/20 text-zinc-300 hover:border-white/25"
                }`}
              >
                {item} {counts[item]}
              </button>
            );
          })}
        </div>

        <div className="mt-4">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search commands"
            className="w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          />
        </div>

        <p className="mt-3 text-sm text-zinc-400">
          {filtered.length} command{filtered.length === 1 ? "" : "s"} shown • {sourceLabel}
        </p>
      </div>

      <div className="space-y-3">
        {filtered.map((command) => (
          <article key={command.name} className="panel-glass rounded-2xl border p-5">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-2xl text-white">/{command.name}</h3>
              <span className="text-xs tracking-[0.12em] text-zinc-500 uppercase">{command.category}</span>
            </div>

            <p className="mt-2 text-sm text-zinc-300">{command.description}</p>

            <p className="mt-3 rounded-lg border border-white/10 bg-black/35 px-3 py-2 font-mono text-sm text-cyan-200">
              Usage: {command.usage}
            </p>

            {command.aliases ? <p className="mt-2 text-sm text-zinc-400">Aliases: {command.aliases}</p> : null}
          </article>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="panel-glass rounded-2xl border p-5 text-sm text-zinc-300">No commands matched your filters.</div>
      ) : null}
    </section>
  );
}
