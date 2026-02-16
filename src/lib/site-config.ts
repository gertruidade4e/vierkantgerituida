export const siteConfig = {
  name: "Grace",
  description:
    "Grace is a production-focused Discord bot for moderation, automation, engagement workflows, and server reliability.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://gracefully.space",
  docsUrl: process.env.NEXT_PUBLIC_DOCS_URL ?? "https://docs.gracefully.space",
  inviteUrl:
    process.env.NEXT_PUBLIC_DISCORD_INVITE_URL ??
    "https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot%20applications.commands&permissions=8",
  supportUrl: process.env.NEXT_PUBLIC_SUPPORT_URL ?? "https://discord.gg/your-support-server",
  statusUrl: "/status",
  xUrl: process.env.NEXT_PUBLIC_X_URL ?? "https://x.com",
  githubUrl: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com",
} as const;
