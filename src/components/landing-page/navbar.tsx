"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UI_ROUTES } from "@/utils/ui-routes";

const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Cities", href: "#cities" },
  { label: "For brokers", href: "#for-brokers" },
  { label: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6"
      >
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Go Rent Saathi"
            width={36}
            height={36}
            className="h-9 w-9 rounded-md"
            priority
          />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Go Rent Saathi
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={UI_ROUTES.SIGNIN}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Log in
          </Link>
          <Link  href={UI_ROUTES.SINGUP}>
          <Button size="default">Get started</Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-border transition-[max-height,opacity] duration-300 ease-in-out md:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 border-t-0 opacity-0"
        )}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 bg-background px-6 pb-6 pt-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-2 px-2">
            <Link
              href="#login"
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium text-muted-foreground"
            >
              Log in
            </Link>
            <Button className="w-full">Get started</Button>
          </div>
        </div>
      </div>
    </header>
  );
}