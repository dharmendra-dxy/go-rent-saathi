"use client";

import * as React from "react";
import { ArrowRight, MapPin, ShieldCheck, Star } from "lucide-react";

import { Button } from "@/components/ui/button";

const STATS = [
  { value: "12,400+", label: "Verified listings" },
  { value: "48", label: "Cities covered" },
  { value: "3 days", label: "Avg. time to move in" },
];

const CITIES = ["Delhi NCR", "Bengaluru", "Mumbai", "Pune", "Hyderabad"];

export function Hero() {
  const [city, setCity] = React.useState("");

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "linear-gradient(to bottom, black, transparent 80%)",
        }}
      />
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full bg-accent blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 pb-20 pt-16 md:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-28">
        {/* Left: copy */}
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-accent px-3.5 py-1.5 text-xs font-medium text-accent-foreground">
            <ShieldCheck className="h-3.5 w-3.5" />
            Verified brokers, zero brokerage confusion
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
            Home hunting needs a{" "}
            <span className="italic text-primary">saathi</span>, not a
            hundred open tabs.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Go Rent Saathi matches you with verified local brokers who
            actually know the street, not just the listing. Real homes, real
            people, and a lease signed in days — not weeks.
          </p>

          {/* Quick search */}
          <div className="mt-8 flex flex-col gap-3 rounded-xl border border-border bg-card p-2 shadow-sm sm:flex-row sm:items-center">
            <div className="flex flex-1 items-center gap-2.5 rounded-lg px-3 py-2.5">
              <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" />
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Which city are you moving to?"
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>
            <Button size="lg" className="w-full sm:w-auto">
              Find my saathi
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs text-muted-foreground">
            <span className="text-muted-foreground/70">Popular:</span>
            {CITIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCity(c)}
                className="rounded-full border border-border px-2.5 py-1 transition-colors hover:border-primary/40 hover:text-foreground"
              >
                {c}
              </button>
            ))}
          </div>

          {/* Stats */}
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-6">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-semibold text-foreground sm:text-3xl">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: signature visual */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] w-full sm:aspect-[5/5]">
            <SkylineIllustration className="absolute inset-0 h-full w-full" />

            {/* Floating match card */}
            <div className="absolute left-1/2 top-1/2 w-[86%] max-w-xs -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-card p-4 shadow-xl sm:w-[78%]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">
                  Matched saathi nearby
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-foreground">
                  <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                  4.9
                </span>
              </div>

              <div className="mt-3 flex items-center gap-3">
                <div className="flex -space-x-3">
                  {["A", "R", "P"].map((initial, i) => (
                    <div
                      key={initial}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-card bg-primary text-xs font-semibold text-primary-foreground"
                      style={{ zIndex: 3 - i }}
                    >
                      {initial}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Anjali, Rohit + 6 more
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Ready near you today
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between rounded-lg bg-muted px-3 py-2">
                <span className="text-xs text-muted-foreground">
                  2BHK · Indiranagar
                </span>
                <span className="text-xs font-semibold text-foreground">
                  ₹28,000/mo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkylineIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Illustrated city skyline with highlighted verified rental locations"
    >
      <g opacity="0.5">
        <rect x="20" y="260" width="60" height="260" fill="var(--accent)" />
        <rect x="95" y="200" width="46" height="320" fill="var(--accent)" />
        <rect x="330" y="230" width="52" height="290" fill="var(--accent)" />
        <rect x="400" y="180" width="60" height="340" fill="var(--accent)" />
      </g>

      <g>
        <rect x="45" y="330" width="70" height="190" fill="var(--card)" stroke="var(--border)" />
        <rect x="140" y="260" width="64" height="260" fill="var(--card)" stroke="var(--border)" />
        <rect x="222" y="300" width="58" height="220" fill="var(--card)" stroke="var(--border)" />
        <rect x="298" y="240" width="70" height="280" fill="var(--card)" stroke="var(--border)" />
        <rect x="382" y="310" width="62" height="210" fill="var(--card)" stroke="var(--border)" />

        {Array.from({ length: 5 }).map((_, col) =>
          Array.from({ length: 6 }).map((_, row) => (
            <rect
              key={`${col}-${row}`}
              x={[54, 150, 232, 308, 392][col] + (col === 3 ? 6 : 0)}
              y={[344, 274, 314, 254, 324][col] + row * 26}
              width="10"
              height="14"
              fill="var(--muted-foreground)"
              opacity={(col + row) % 3 === 0 ? 0.35 : 0.12}
            />
          ))
        )}
      </g>

      {[
        { cx: 115, cy: 300 },
        { cx: 260, cy: 250 },
        { cx: 350, cy: 210 },
      ].map((p, i) => (
        <g key={i}>
          <circle cx={p.cx} cy={p.cy} r="14" fill="var(--primary)" opacity="0.15" />
          <circle cx={p.cx} cy={p.cy} r="5" fill="var(--primary)" />
        </g>
      ))}

      <rect x="0" y="518" width="480" height="2" fill="var(--border)" />
    </svg>
  );
}