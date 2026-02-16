"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <Container>
        <div
          className={`panel-glass flex items-center justify-between rounded-full border px-5 py-3 transition-all duration-300 ${
            isScrolled
              ? "border-white/10 bg-black/55 shadow-[0_18px_40px_-24px_rgba(0,0,0,.9)]"
              : "border-white/5 bg-black/20"
          }`}
        >
          <Link href="/" className="font-heading text-lg text-white" aria-label="Go to Grace home screen">
            Grace
          </Link>

          <nav aria-label="Main navigation" className="flex items-center gap-4 sm:gap-6">
            <Link className={`nav-link hidden sm:inline ${pathname === "/commands" ? "text-white" : ""}`} href="/commands">
              Commands
            </Link>
            <a
              className="nav-link hidden sm:inline"
              href={siteConfig.supportUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              Support
            </a>
            <Link className={`nav-link hidden sm:inline ${pathname === "/status" ? "text-white" : ""}`} href={siteConfig.statusUrl}>
              Shards
            </Link>
            <Button href="/invite" className="px-4 py-2 text-xs sm:px-5 sm:py-2.5">
              Invite
            </Button>
          </nav>
        </div>
      </Container>
    </header>
  );
}
