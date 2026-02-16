import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";

const detailSections = [
  {
    title: "Advanced Moderation Controls",
    body: "Configure timed sanctions, escalation thresholds, and case workflows aligned to your policy model.",
    bullets: [
      "Timed mute, ban, and warning actions",
      "Escalation thresholds by offense count",
      "Staff-only sensitive action controls",
    ],
  },
  {
    title: "Role and Permission Management",
    body: "Bind commands to role scopes so sensitive operations stay available only to authorized staff.",
    bullets: [
      "Command-level role restriction",
      "Safe defaults for new moderators",
      "Permission audit visibility",
    ],
  },
  {
    title: "Logging and Audit Tools",
    body: "Every moderation action and setting change can be traced through structured logs and incident IDs.",
    bullets: [
      "Action actor and target tracking",
      "Case references and timestamps",
      "Dedicated audit channel support",
    ],
  },
  {
    title: "Performance and Uptime Reliability",
    body: "Monitored infrastructure and fail-safe queues keep command flow stable during traffic spikes.",
    bullets: [
      "Queue-based execution controls",
      "Runtime monitoring and alerting",
      "Graceful degradation handling",
    ],
  },
  {
    title: "Customization and Extensibility",
    body: "Build server-specific workflows with custom command templates and webhook-connected automations.",
    bullets: [
      "Custom command templates",
      "Webhook and integration hooks",
      "Environment-specific settings",
    ],
  },
];

export function FeatureDetailSections() {
  return (
    <section id="features" className="section-spacing border-t border-white/10">
      <Container>
        <div className="space-y-6">
          {detailSections.map((section, index) => (
            <Reveal key={section.title} delay={index * 0.04} className="panel-glass rounded-3xl border p-6 sm:p-10">
              <h3 className="text-3xl text-white">{section.title}</h3>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-300">{section.body}</p>
              <ul className="mt-5 grid gap-2 text-sm text-zinc-200 sm:grid-cols-2">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="rounded-xl border border-white/10 bg-black/20 px-4 py-3">
                    {bullet}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
