import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Grace.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-24">
      <Container className="prose-shell">
        <h1>Privacy Policy</h1>
        <p>Effective date: February 14, 2026</p>
        <p>
          Grace processes only the data required to provide Discord bot functionality, including server configuration,
          moderation events, and command usage context.
        </p>
        <h2>Data Collected</h2>
        <p>
          Stored data may include guild IDs, channel IDs, role IDs, command settings, moderation records, and
          operational logs associated with bot actions.
        </p>
        <h2>Data Usage</h2>
        <p>
          Data is used strictly for feature delivery, reliability monitoring, abuse prevention, and support
          troubleshooting.
        </p>
        <h2>Retention and Deletion</h2>
        <p>
          Configuration and logs are retained only as long as required for service operations. Server administrators can
          request deletion through the support server.
        </p>
        <h2>Third-Party Services</h2>
        <p>
          Infrastructure and analytics vendors may process technical metadata under their own security controls.
        </p>
        <h2>Contact</h2>
        <p>For privacy inquiries, contact the Grace support server administrators.</p>
      </Container>
    </main>
  );
}

