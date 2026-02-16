import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="hero-gradient" aria-hidden="true" />
      <Container className="relative z-10">
        <Reveal className="max-w-4xl">
          <h1 className="font-heading text-5xl leading-[1.03] text-white sm:text-6xl lg:text-7xl">
            Grace runs moderation and automation like a control plane.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-300">
            Deploy policy enforcement, incident logging, and role-aware workflows from one bot surface built for
            high-volume servers.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/invite">Invite Grace</Button>
            <Button href="/commands" variant="secondary">
              See Commands
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
