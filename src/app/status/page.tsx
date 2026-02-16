import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { fallbackShards, type ShardSnapshot } from "@/lib/telemetry";
import { getSupabasePublicClient } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Shards",
  description: "Shard page scaffold for Grace. Can read live snapshot data from Supabase.",
};

export const revalidate = 30;

async function loadShards(): Promise<{ shards: ShardSnapshot[]; sourceLabel: string }> {
  const supabase = getSupabasePublicClient();

  if (!supabase) {
    return { shards: fallbackShards, sourceLabel: "local fallback data" };
  }

  const { data, error } = await supabase
    .from("shard_status")
    .select("shard_id, region, guilds, latency_ms, status, note, updated_at")
    .order("shard_id", { ascending: true });

  if (error || !data || data.length === 0) {
    return { shards: fallbackShards, sourceLabel: "local fallback data" };
  }

  return {
    shards: data as ShardSnapshot[],
    sourceLabel: "live Supabase data",
  };
}

export default async function StatusPage() {
  const { shards, sourceLabel } = await loadShards();

  return (
    <main className="min-h-screen py-28">
      <Container>
        <h1 className="font-heading text-5xl text-white">Shard Status</h1>
        <p className="mt-4 max-w-2xl text-zinc-300">
          Snapshot status for shard health and latency. Source: {sourceLabel}.
        </p>

        <div className="mt-8 space-y-3">
          {shards.map((shard) => (
            <article key={shard.shard_id} className="panel-glass flex flex-wrap items-center justify-between gap-4 rounded-2xl border p-5">
              <div>
                <h2 className="text-lg text-white">Shard {shard.shard_id}</h2>
                <p className="text-sm text-zinc-400">{shard.region}</p>
              </div>
              <div className="flex flex-wrap items-center gap-5 text-sm text-zinc-300">
                <p>Guilds: {(shard.guilds ?? 0).toLocaleString()}</p>
                <p>Latency: {shard.latency_ms ?? 0}ms</p>
                <p>{shard.note ?? "No note"}</p>
                <p className="rounded-full border border-emerald-400/35 bg-emerald-400/15 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-300 uppercase">
                  {shard.status}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
