# Supabase Telemetry Setup

This setup allows your home-hosted bot to push telemetry safely to Supabase, while the Vercel site only reads snapshots.

## 1) Environment Variables

Set these in Vercel and `.env.local`:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `TELEMETRY_INGEST_SECRET`

Never expose `SUPABASE_SERVICE_ROLE_KEY` or `TELEMETRY_INGEST_SECRET` in client code.

## 2) Supabase Tables

Run this SQL in Supabase SQL editor:

```sql
create table if not exists public.bot_commands (
  name text primary key,
  usage text not null,
  category text not null,
  description text not null,
  aliases text,
  updated_at timestamptz not null default now()
);

create table if not exists public.shard_status (
  shard_id integer primary key,
  region text not null,
  guilds integer,
  latency_ms integer,
  status text not null default 'online',
  note text,
  updated_at timestamptz not null default now()
);

alter table public.bot_commands enable row level security;
alter table public.shard_status enable row level security;

create policy "public_read_commands"
on public.bot_commands
for select
to anon
using (true);

create policy "public_read_shards"
on public.shard_status
for select
to anon
using (true);
```

## 3) Bot -> Website Push

POST snapshots from your bot to:

- `https://gracefully.space/api/telemetry`

with header:

- `x-telemetry-secret: <TELEMETRY_INGEST_SECRET>`

body example:

```json
{
  "commands": [
    {
      "name": "ban",
      "usage": "/ban user:<member> reason:<text>",
      "category": "Moderation",
      "description": "Ban a member and write a case log.",
      "aliases": ["banuser"]
    }
  ],
  "shards": [
    {
      "shardId": 0,
      "region": "US-East",
      "guilds": 6142,
      "latencyMs": 93,
      "status": "online",
      "note": "Healthy"
    }
  ]
}
```

## 4) Update Strategy

- Push commands at startup and after command-sync changes.
- Push shards every 30-60 seconds.
- Site reads via Supabase and auto-revalidates (`/commands`: 60s, `/status`: 30s).

## 5) Security Notes

- Keep bot outbound-only; do not expose home network inbound API.
- Rotate `TELEMETRY_INGEST_SECRET` if leaked.
- Store bot token only on bot host.
