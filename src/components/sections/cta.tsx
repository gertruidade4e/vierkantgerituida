import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export function CtaSection() {
  return (
    <section className="section-spacing border-y border-white/10">
      <Container>
        <div className="panel-glass rounded-3xl border p-8 sm:p-12">
          <p className="chip w-fit">Deployment</p>
          <h2 className="mt-4 font-heading text-4xl text-white sm:text-5xl">Add Grace to Your Server</h2>
          <p className="mt-5 max-w-2xl text-zinc-200">
            Authorize Grace, map role scopes, and bring policy, moderation, and automation into one operational flow.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/invite">Invite</Button>
            <Button href={siteConfig.supportUrl} external variant="secondary">
              Support Server
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
