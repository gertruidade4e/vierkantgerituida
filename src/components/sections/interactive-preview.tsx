"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";

const scenarios = {
  moderation: [
    { user: "mod-bot", text: "Scan complete: 3 messages flagged by keyword policy." },
    { user: "Grace", text: "Muted @StormUser for 30m. Audit ID: MOD-8742." },
  ],
  onboarding: [
    { user: "Grace", text: "Welcome @Nova. Please choose your game role." },
    { user: "Nova", text: "/role select Valorant" },
    { user: "Grace", text: "Role assigned: Valorant Squad." },
  ],
  logging: [
    { user: "Grace", text: "Role change detected: @Kai -> Added 'Event Team'." },
    { user: "Grace", text: "Log persisted to #audit-log with actor trace." },
  ],
} as const;

type ScenarioKey = keyof typeof scenarios;

export function InteractivePreviewSection() {
  const [activeScenario, setActiveScenario] = useState<ScenarioKey>("moderation");

  const messages = useMemo(() => scenarios[activeScenario], [activeScenario]);

  return (
    <section id="interactive" className="section-spacing border-t border-white/10">
      <Container>
        <Reveal>
          <h2 className="section-title">Interactive Preview</h2>
          <p className="section-description">
            Test scripted command flows and behavior responses in a lightweight Discord-style simulation.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[240px,1fr]">
          <div className="panel-glass rounded-2xl border p-3">
            {Object.keys(scenarios).map((scenario) => {
              const key = scenario as ScenarioKey;
              const isActive = key === activeScenario;
              return (
                <button
                  key={key}
                  onClick={() => setActiveScenario(key)}
                  className={`mb-2 w-full rounded-xl px-4 py-3 text-left text-sm font-medium capitalize transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 ${
                    isActive
                      ? "bg-[linear-gradient(110deg,rgba(66,102,255,.45),rgba(30,201,255,.24))] text-white"
                      : "bg-transparent text-zinc-300 hover:bg-white/5"
                  }`}
                >
                  {key}
                </button>
              );
            })}
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0f1119] p-5 shadow-[0_30px_80px_-35px_rgba(45,100,255,.5)]">
            <div className="mb-5 rounded-lg border border-white/10 bg-[#0b0d14] px-4 py-3 text-xs text-zinc-400">
              # operations-live
            </div>

            <motion.ul key={activeScenario} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
              {messages.map((message, index) => (
                <li key={`${message.user}-${index}`} className="mb-4 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                  <p className="text-xs uppercase tracking-wider text-zinc-500">{message.user}</p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-200">{message.text}</p>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
