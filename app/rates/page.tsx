"use client";

import { motion } from "framer-motion";
import {
  Bitcoin,
  TrendingUp,
  TrendingDown,
  Clock3,
  ArrowUpRight,
  Activity,
  BarChart3,
} from "lucide-react";
import Header from "../components/layout/header";
import { THEME } from "../constants/theme";
import Footer from "../components/layout/footer";

export default function RatesPage() {
  const ACCENT = THEME.accent;

  const marketStats = [
    {
      label: "BTC Price",
      value: "$68,420.50",
      change: "+2.4%",
      positive: true,
      icon: <Bitcoin className="w-5 h-5" />,
    },
    {
      label: "24h Volume",
      value: "$32.8B",
      change: "+5.8%",
      positive: true,
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      label: "Market Cap",
      value: "$1.34T",
      change: "+1.9%",
      positive: true,
      icon: <Activity className="w-5 h-5" />,
    },
    {
      label: "Network Fees",
      value: "$4.20",
      change: "-0.8%",
      positive: false,
      icon: <Clock3 className="w-5 h-5" />,
    },
  ];

  const recentRates = [
    {
      time: "09:00 AM",
      price: "$68,120",
      change: "+1.2%",
      positive: true,
    },
    {
      time: "11:30 AM",
      price: "$68,310",
      change: "+0.8%",
      positive: true,
    },
    {
      time: "01:00 PM",
      price: "$68,420",
      change: "+0.4%",
      positive: true,
    },
    {
      time: "03:15 PM",
      price: "$68,280",
      change: "-0.2%",
      positive: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Header />

      <main className="max-w-7xl mx-auto px-5 lg:px-10 pt-28 pb-20">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <p
            className="text-xs uppercase tracking-[0.3em] font-mono mb-3"
            style={{ color: ACCENT }}
          >
            Live Bitcoin Market
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
            Real-Time <span style={{ color: ACCENT }}>BTC Rates</span>
          </h1>

          <p className="text-white/50 max-w-2xl text-base md:text-lg">
            Track live Bitcoin pricing before purchasing. Transparent exchange
            rates, no hidden surprises — know exactly what your cash converts
            into.
          </p>
        </motion.div>

        {/* Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-3xl border p-8 mb-8 relative overflow-hidden"
          style={{
            borderColor: `${ACCENT}15`,
            background:
              "linear-gradient(135deg, rgba(20,20,31,1), rgba(10,10,15,1))",
          }}
        >
          <div
            className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-20"
            style={{ background: ACCENT }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <div className="text-sm text-white/50 mb-2">
                Current Bitcoin Price
              </div>

              <div className="text-5xl md:text-6xl font-black mb-3">
                $68,420.50
              </div>

              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-500" />
                <span className="text-emerald-500 font-medium">
                  +2.4% today
                </span>
                <span className="text-white/30 text-sm">
                  updated live
                </span>
              </div>
            </div>

            <button
              className="px-7 py-4 rounded-2xl font-bold text-sm flex items-center gap-2 transition-opacity hover:opacity-85"
              style={{
                background: ACCENT,
                color: "#0a0a0f",
              }}
            >
              Buy Bitcoin Now
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Market Stats */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
          {marketStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.08 }}
              className="rounded-2xl border p-6"
              style={{
                borderColor: `${ACCENT}10`,
                background: "#14141f",
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${ACCENT}15`,
                    color: ACCENT,
                  }}
                >
                  {stat.icon}
                </div>

                <div
                  className={`text-sm font-semibold flex items-center gap-1 ${stat.positive ? "text-emerald-500" : "text-red-500"
                    }`}
                >
                  {stat.positive ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  {stat.change}
                </div>
              </div>

              <p className="text-white/40 text-sm mb-1">{stat.label}</p>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
            </motion.div>
          ))}
        </div>

        {/* Recent Rate Changes */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="lg:col-span-2 rounded-3xl border p-7"
            style={{
              borderColor: `${ACCENT}10`,
              background: "#14141f",
            }}
          >
            <h2 className="text-xl font-bold mb-6">
              Recent Price Movement
            </h2>

            <div className="space-y-4">
              {recentRates.map((rate, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-2xl border border-white/5 bg-[#0f0f16]"
                >
                  <div>
                    <p className="font-medium">{rate.time}</p>
                    <p className="text-xs text-white/35">
                      BTC/USD Market Rate
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-lg">{rate.price}</p>
                    <p
                      className={`text-sm font-medium ${rate.positive
                        ? "text-emerald-500"
                        : "text-red-500"
                        }`}
                    >
                      {rate.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="rounded-3xl border p-7"
            style={{
              borderColor: `${ACCENT}10`,
              background: "#14141f",
            }}
          >
            <h2 className="text-lg font-bold mb-5">
              Why Monitor Rates?
            </h2>

            <div className="space-y-5 text-sm text-white/55 leading-relaxed">
              <p>
                Bitcoin prices move quickly. Watching live rates helps you buy
                at the best possible value.
              </p>

              <p>
                Flux Pay keeps pricing transparent so you know exactly how much
                BTC reaches your wallet before payment.
              </p>

              <p>
                No hidden fees. No confusing crypto jargon. Just simple BTC
                conversion.
              </p>
            </div>

            <button
              className="w-full mt-8 py-3.5 rounded-xl font-bold text-sm transition-opacity hover:opacity-85"
              style={{
                background: ACCENT,
                color: "#0a0a0f",
              }}
            >
              Start Your Purchase
            </button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}