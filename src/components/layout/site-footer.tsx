import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

const year = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/50 py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-5">
          <div className="space-y-3 md:col-span-2">
            <p className="font-heading text-2xl text-white">Grace</p>
            <p className="max-w-sm text-sm text-zinc-400">
              Reliable Discord operations with moderation, auditability, and automation workflows.
            </p>
          </div>

          <div>
            <h3 className="footer-heading">Product</h3>
            <ul className="footer-list">
              <li>
                <a href="/commands">Commands</a>
              </li>
              <li>
                <a href="/invite">Invite</a>
              </li>
              <li>
                <a href={siteConfig.docsUrl} target="_blank" rel="noreferrer noopener">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-list">
              <li>
                <a href={siteConfig.supportUrl} target="_blank" rel="noreferrer noopener">
                  Support Server
                </a>
              </li>
              <li>
                <a href={siteConfig.statusUrl}>Status</a>
              </li>
              <li>
                <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer noopener">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Legal</h3>
            <ul className="footer-list">
              <li>
                <a href="/privacy">Privacy</a>
              </li>
              <li>
                <a href="/terms">Terms</a>
              </li>
              <li>
                <a href={siteConfig.xUrl} target="_blank" rel="noreferrer noopener">
                  X / Updates
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-zinc-500">
          <p>(c) {year} Grace. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
