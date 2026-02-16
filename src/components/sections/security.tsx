import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";

const securityItems = [
  {
    title: "Data Handling",
    body: "Runtime data is limited to command execution context, moderation records, and bot configuration state.",
  },
  {
    title: "Permission Transparency",
    body: "Required Discord permissions are mapped to features and can be audited before deployment.",
  },
  {
    title: "Infrastructure",
    body: "Hosted on managed cloud infrastructure with encrypted transport and controlled deployment workflows.",
  },
  {
    title: "Uptime Commitment",
    body: "Availability is monitored continuously and incidents are communicated via status and support channels.",
  },
];

export function SecuritySection() {
  return (
    <section id="security" className="section-spacing border-t border-white/10">
      <Container>
        <Reveal>
          <h2 className="section-title">Security and Reliability</h2>
          <p className="section-description">
            Operational clarity and permission boundaries are product requirements, not optional extras.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {securityItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05} className="panel-glass rounded-2xl border p-6">
              <h3 className="text-xl text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
