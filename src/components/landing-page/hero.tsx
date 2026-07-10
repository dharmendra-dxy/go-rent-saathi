"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  ArrowRight,
  Building2,
  ShieldCheck,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-100">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl" />

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Go Rent Saathi"
              width={42}
              height={42}
              priority
            />
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Go Rent Saathi
              </h2>
              <p className="text-xs text-slate-500">Smart Rental Management</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
            >
              Features
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
            >
              Contact
            </a>

            <button className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
              Get Started
            </button>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t bg-white md:hidden"
          >
            <div className="flex flex-col gap-5 px-6 py-6">
              <a href="#">Features</a>
              <a href="#">About</a>
              <a href="#">Contact</a>

              <button className="rounded-xl bg-blue-600 py-3 font-semibold text-white">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero */}
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-16 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              🚀 Trusted by Brokers & Property Owners
            </div>

            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-slate-900 lg:text-7xl">
              Rent Properties
              <br />
              <span className="text-blue-600">Without the Chaos.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Go Rent Saathi helps property brokers manage leads, tenants,
              owners, rent collection and follow-ups from one beautiful
              dashboard.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-700">
                Start Free
                <ArrowRight size={18} />
              </button>

              <button className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold transition hover:border-blue-600 hover:text-blue-600">
                Book Demo
              </button>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6">
              <div>
                <h3 className="text-3xl font-bold text-slate-900">5K+</h3>
                <p className="text-slate-500">Active Brokers</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900">50K+</h3>
                <p className="text-slate-500">Properties</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900">98%</h3>
                <p className="text-slate-500">Happy Clients</p>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl border border-white/50 bg-white/70 p-8 shadow-2xl backdrop-blur-xl">
              <div className="space-y-6">
                <div className="rounded-2xl bg-blue-50 p-5">
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-blue-600 p-3 text-white">
                      <Building2 />
                    </div>

                    <div>
                      <h3 className="font-semibold">Property Listings</h3>

                      <p className="text-sm text-slate-500">
                        2,480 Active Listings
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-green-50 p-5">
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-green-600 p-3 text-white">
                      <Users />
                    </div>

                    <div>
                      <h3 className="font-semibold">Tenant Management</h3>

                      <p className="text-sm text-slate-500">
                        Manage tenants effortlessly
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-orange-50 p-5">
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-orange-500 p-3 text-white">
                      <ShieldCheck />
                    </div>

                    <div>
                      <h3 className="font-semibold">Secure Documentation</h3>

                      <p className="text-sm text-slate-500">
                        Keep agreements & KYC safe
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute -right-6 -top-6 rounded-2xl bg-blue-600 px-5 py-4 text-white shadow-xl"
              >
                <p className="text-xs opacity-80">Monthly Collection</p>

                <h3 className="text-2xl font-bold">₹12.4L</h3>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-5 shadow-xl"
              >
                <p className="text-xs text-slate-500">New Leads</p>

                <h2 className="text-3xl font-bold text-blue-600">+128</h2>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
