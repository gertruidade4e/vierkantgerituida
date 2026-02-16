import type { Metadata } from "next";
import { CommandsBrowser } from "@/components/commands/commands-browser";
import { Container } from "@/components/ui/container";
import { fallbackCommands, type BotCommand } from "@/lib/telemetry";
import { getSupabasePublicClient } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Commands",
  description: "Browse Grace command categories and usage patterns.",
};

export const revalidate = 60;

async function loadCommands(): Promise<{ commands: BotCommand[]; sourceLabel: string }> {
  const supabase = getSupabasePublicClient();

  if (!supabase) {
    return { commands: fallbackCommands, sourceLabel: "local fallback data" };
  }

  const { data, error } = await supabase
    .from("bot_commands")
    .select("name, usage, category, description, aliases")
    .order("category", { ascending: true })
    .order("name", { ascending: true });

  if (error || !data || data.length === 0) {
    return { commands: fallbackCommands, sourceLabel: "local fallback data" };
  }

  return {
    commands: data as BotCommand[],
    sourceLabel: "live Supabase data",
  };
}

export default async function CommandsPage() {
  const { commands, sourceLabel } = await loadCommands();

  return (
    <main className="min-h-screen py-28">
      <Container>
        <h1 className="font-heading text-5xl text-white sm:text-6xl">Commands</h1>
        <p className="mt-4 max-w-2xl text-zinc-300">
          Browse command categories and inspect usage syntax. Data can be synced automatically from your bot via secure
          telemetry ingestion.
        </p>
        <CommandsBrowser commands={commands} sourceLabel={sourceLabel} />
      </Container>
    </main>
  );
}
