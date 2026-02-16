import { redirect } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export default function InvitePage() {
  const inviteUrl = siteConfig.inviteUrl;
  const missingClientId =
    !inviteUrl ||
    inviteUrl.includes("YOUR_CLIENT_ID") ||
    inviteUrl.includes("your-client-id") ||
    inviteUrl.endsWith("client_id=");

  if (missingClientId) {
    return (
      <main className="min-h-screen py-24">
        <Container>
          <div className="panel-glass max-w-2xl rounded-3xl border p-8">
            <h1 className="font-heading text-4xl text-white">Invite Link Not Configured</h1>
            <p className="mt-4 text-zinc-300">
              Set <code>NEXT_PUBLIC_DISCORD_INVITE_URL</code> in your environment to a valid Discord OAuth URL.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="nav-link rounded-full border border-white/20 px-4 py-2" href="/">
                Back Home
              </Link>
              <a
                className="nav-link rounded-full border border-white/20 px-4 py-2"
                href={siteConfig.supportUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                Support
              </a>
            </div>
          </div>
        </Container>
      </main>
    );
  }

  redirect(inviteUrl);
}
