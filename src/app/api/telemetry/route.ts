import { NextResponse } from "next/server";
import { getSupabaseAdminClient } from "@/lib/supabase";

type CommandPayload = {
  name: string;
  usage: string;
  category: string;
  description: string;
  aliases?: string[] | string;
};

type ShardPayload = {
  shardId: number;
  region: string;
  guilds?: number;
  latencyMs?: number;
  status?: string;
  note?: string;
};

type TelemetryPayload = {
  commands?: CommandPayload[];
  shards?: ShardPayload[];
};

function normalizeAliases(input?: string[] | string): string | null {
  if (!input) {
    return null;
  }
  if (Array.isArray(input)) {
    return input.filter(Boolean).join(", ") || null;
  }
  return input.trim() || null;
}

export async function POST(request: Request) {
  const secret = request.headers.get("x-telemetry-secret");
  const expectedSecret = process.env.TELEMETRY_INGEST_SECRET;

  if (!expectedSecret || secret !== expectedSecret) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  const supabase = getSupabaseAdminClient();
  if (!supabase) {
    return NextResponse.json({ ok: false, error: "supabase_not_configured" }, { status: 500 });
  }

  const body = (await request.json().catch(() => null)) as TelemetryPayload | null;
  if (!body) {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const now = new Date().toISOString();

  if (Array.isArray(body.commands) && body.commands.length > 0) {
    const commands = body.commands
      .filter((cmd) => cmd.name && cmd.usage && cmd.category && cmd.description)
      .map((cmd) => ({
        name: cmd.name,
        usage: cmd.usage,
        category: cmd.category,
        description: cmd.description,
        aliases: normalizeAliases(cmd.aliases),
        updated_at: now,
      }));

    if (commands.length > 0) {
      const { error } = await supabase.from("bot_commands").upsert(commands, { onConflict: "name" });
      if (error) {
        return NextResponse.json({ ok: false, error: "commands_upsert_failed", detail: error.message }, { status: 500 });
      }
    }
  }

  if (Array.isArray(body.shards) && body.shards.length > 0) {
    const shards = body.shards
      .filter((shard) => Number.isInteger(shard.shardId) && shard.region)
      .map((shard) => ({
        shard_id: shard.shardId,
        region: shard.region,
        guilds: typeof shard.guilds === "number" ? shard.guilds : null,
        latency_ms: typeof shard.latencyMs === "number" ? shard.latencyMs : null,
        status: shard.status ?? "online",
        note: shard.note ?? null,
        updated_at: now,
      }));

    if (shards.length > 0) {
      const { error } = await supabase.from("shard_status").upsert(shards, { onConflict: "shard_id" });
      if (error) {
        return NextResponse.json({ ok: false, error: "shards_upsert_failed", detail: error.message }, { status: 500 });
      }
    }
  }

  return NextResponse.json({
    ok: true,
    received: {
      commands: body.commands?.length ?? 0,
      shards: body.shards?.length ?? 0,
    },
  });
}
