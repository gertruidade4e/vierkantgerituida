import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Grace.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen py-24">
      <Container className="prose-shell">
        <h1>Terms of Service</h1>
        <p>Effective date: February 14, 2026</p>
        <p>
          By inviting or using Grace, you agree to these terms and confirm you have authority to manage the Discord
          server where Grace is installed.
        </p>
        <h2>Service Scope</h2>
        <p>
          Grace provides moderation, automation, logging, and configuration utilities. Features may evolve without prior
          notice as long as core safety and reliability requirements are maintained.
        </p>
        <h2>Acceptable Use</h2>
        <p>
          You may not use Grace to violate platform rules, applicable law, or to perform abusive, deceptive, or harmful
          operations.
        </p>
        <h2>Availability</h2>
        <p>
          Grace is provided on a best-effort basis with monitored uptime targets. Temporary outages may occur during
          maintenance or incident response.
        </p>
        <h2>Limitation of Liability</h2>
        <p>
          Grace is provided as-is. To the maximum extent permitted by law, operators are not liable for indirect or
          consequential damages.
        </p>
        <h2>Termination</h2>
        <p>
          Access may be restricted for abuse, security risk, or terms violations. You may remove Grace from your server
          at any time.
        </p>
      </Container>
    </main>
  );
}

