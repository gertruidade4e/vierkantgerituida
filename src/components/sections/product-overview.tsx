import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";

const moderationSecurityItems = [
  {
    title: "Filters",
    body: "Set automated checks for spam bursts, unsafe links, blocked phrases, and repeated message behavior.",
  },
  {
    title: "Fake Permissions",
    body: "Block high-risk permission paths that can be exploited through unauthorized or abusive API usage.",
  },
  {
    title: "Anti-Nuke",
    body: "Detect destructive admin activity and trigger threshold-based protection for bans, channel edits, and role updates.",
  },
  {
    title: "Anti-Raid",
    body: "Mitigate coordinated join attacks with account-age checks, profile heuristics, and mass-join response rules.",
  },
];

export function ProductOverviewSection() {
  return (
    <section id="moderation-security" className="section-spacing border-t border-white/10">
      <Container>
        <Reveal>
          <h2 className="section-title">Premium Moderation and Security</h2>
          <p className="section-description">
            Grace gives your team precise controls to protect community health, enforce policy, and respond to abuse quickly.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {moderationSecurityItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05} className="panel-glass rounded-2xl border p-6">
              <h3 className="text-2xl text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">{item.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6 panel-glass rounded-2xl border p-6 sm:p-8">
          <p className="text-3xl font-semibold text-white sm:text-4xl">Expanding Command Library</p>
          <p className="mt-2 text-zinc-300">
            The total command count is expected to evolve and can be connected to a verified API source when ready.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
