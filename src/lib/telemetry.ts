export type BotCommand = {
  name: string;
  usage: string;
  category: "Moderation" | "Security" | "Automation" | "Utility";
  description: string;
  aliases?: string | null;
};

export type ShardSnapshot = {
  shard_id: number;
  region: string;
  guilds: number | null;
  latency_ms: number | null;
  status: string;
  note: string | null;
  updated_at: string;
};

export const fallbackCommands: BotCommand[] = [
  {
    name: "ban",
    usage: "/ban user:<member> reason:<text>",
    category: "Moderation",
    description: "Remove a member and store moderation context.",
    aliases: "banuser",
  },
  {
    name: "mute",
    usage: "/mute user:<member> duration:<time>",
    category: "Moderation",
    description: "Apply timed communication restrictions.",
    aliases: "timeout",
  },
  {
    name: "warn",
    usage: "/warn user:<member> reason:<text>",
    category: "Moderation",
    description: "Issue warning records for escalation workflows.",
    aliases: "warning",
  },
  {
    name: "antinuke",
    usage: "/antinuke mode:<off|monitor|strict>",
    category: "Security",
    description: "Enable protection against destructive bulk actions.",
    aliases: "nukeguard",
  },
  {
    name: "antiraid",
    usage: "/antiraid profile:<normal|strict>",
    category: "Security",
    description: "Apply anti-raid checks for suspicious join waves.",
    aliases: "raidguard",
  },
  {
    name: "permissions",
    usage: "/permissions audit role:<role>",
    category: "Security",
    description: "Review role permissions against risk policy.",
    aliases: "perms",
  },
  {
    name: "workflow",
    usage: "/workflow create name:<id>",
    category: "Automation",
    description: "Create chained automation for recurring operations.",
    aliases: "flow",
  },
  {
    name: "schedule",
    usage: "/schedule add event:<name> at:<time>",
    category: "Automation",
    description: "Run command tasks on recurring schedules.",
    aliases: "cron",
  },
  {
    name: "welcome",
    usage: "/welcome template:<id>",
    category: "Automation",
    description: "Configure onboarding and welcome behavior.",
    aliases: "greet",
  },
  {
    name: "userinfo",
    usage: "/userinfo user:<member>",
    category: "Utility",
    description: "Display account and server-specific metadata.",
    aliases: "whois",
  },
  {
    name: "serverinfo",
    usage: "/serverinfo",
    category: "Utility",
    description: "Show guild diagnostics and configuration summary.",
    aliases: "guildinfo",
  },
  {
    name: "logs",
    usage: "/logs recent count:<number>",
    category: "Utility",
    description: "Read recent moderation and command history.",
    aliases: "history",
  },
];

export const fallbackShards: ShardSnapshot[] = [
  {
    shard_id: 0,
    region: "US-East",
    guilds: 0,
    latency_ms: 0,
    status: "Sample",
    note: "Placeholder shard row",
    updated_at: new Date().toISOString(),
  },
  {
    shard_id: 1,
    region: "US-Central",
    guilds: 0,
    latency_ms: 0,
    status: "Sample",
    note: "Placeholder shard row",
    updated_at: new Date().toISOString(),
  },
  {
    shard_id: 2,
    region: "EU-West",
    guilds: 0,
    latency_ms: 0,
    status: "Sample",
    note: "Placeholder shard row",
    updated_at: new Date().toISOString(),
  },
  {
    shard_id: 3,
    region: "AP-South",
    guilds: 0,
    latency_ms: 0,
    status: "Sample",
    note: "Placeholder shard row",
    updated_at: new Date().toISOString(),
  },
];
