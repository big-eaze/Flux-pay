"use client";

import { motion } from "framer-motion";
import {
  Bitcoin,
  ArrowUpRight,
  ArrowDownLeft,
  Clock,
  Filter,
  Search,
  CheckCircle2,
  XCircle,
  Loader2,
} from "lucide-react";
import Header from "../../components/layout/header";
import { THEME } from "../../constants/theme";
import { useState } from "react";
import Footer from "../../components/layout/footer";

export default function TransactionsPage() {
  const ACCENT = THEME.accent;
  const [filter, setFilter] = useState("all");

  const transactions = [
    {
      id: "tx_001",
      type: "buy",
      amount: 0.02,
      usd: 1368,
      status: "completed",
      time: "2 hours ago",
    },
    {
      id: "tx_002",
      type: "buy",
      amount: 0.01,
      usd: 684,
      status: "completed",
      time: "1 day ago",
    },
    {
      id: "tx_003",
      type: "transfer",
      amount: 0.005,
      usd: 342,
      status: "pending",
      time: "1 day ago",
    },
    {
      id: "tx_004",
      type: "buy",
      amount: 0.03,
      usd: 2052,
      status: "failed",
      time: "3 days ago",
    },
    {
      id: "tx_005",
      type: "transfer",
      amount: 0.01,
      usd: 684,
      status: "completed",
      time: "1 week ago",
    },
  ];

  const filtered =
    filter === "all"
      ? transactions
      : transactions.filter((t) => t.status === filter);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Header />

      <main className="max-w-6xl mx-auto px-5 lg:px-10 pt-28 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <p
            className="text-xs uppercase tracking-[0.3em] font-mono mb-3"
            style={{ color: ACCENT }}
          >
            Activity Log
          </p>

          <h1 className="text-4xl md:text-6xl font-black mb-3">
            Global <span style={{ color: ACCENT }}>Transactions</span>
          </h1>

          <p className="text-white/50 max-w-2xl">
            Every Bitcoin purchase and transfer in one place. Track your
            conversions from cash to BTC in real time.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center gap-3 mb-8"
        >
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-xl border bg-[#14141f]"
            style={{ borderColor: `${ACCENT}15` }}
          >
            <Search className="w-4 h-4 text-white/40" />
            <input
              placeholder="Search transactions..."
              className="bg-transparent outline-none text-sm text-white/70 placeholder:text-white/30"
            />
          </div>

          {["all", "completed", "pending", "failed"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="px-4 py-2 rounded-xl text-sm font-semibold transition-all"
              style={{
                background:
                  filter === f ? ACCENT : "rgba(255,255,255,0.04)",
                color: filter === f ? "#0a0a0f" : "rgba(255,255,255,0.5)",
              }}
            >
              {f}
            </button>
          ))}

          <button
            className="ml-auto flex items-center gap-2 px-4 py-2 rounded-xl border text-sm text-white/60 hover:text-white transition"
            style={{ borderColor: `${ACCENT}15` }}
          >
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </motion.div>

        {/* Transactions List */}
        <div className="space-y-4">
          {filtered.map((tx, i) => (
            <motion.div
              key={tx.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border p-5 bg-[#14141f] flex items-center justify-between"
              style={{ borderColor: `${ACCENT}10` }}
            >
              {/* Left */}
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${tx.type === "buy"
                    ? "bg-emerald-500/10"
                    : "bg-blue-500/10"
                    }`}
                >
                  {tx.type === "buy" ? (
                    <ArrowDownLeft className="w-5 h-5 text-emerald-500" />
                  ) : (
                    <ArrowUpRight className="w-5 h-5 text-blue-400" />
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold capitalize">{tx.type}</p>
                    <span className="text-xs text-white/30">
                      #{tx.id}
                    </span>
                  </div>

                  <div className="text-xs text-white/40 flex items-center gap-2 mt-1">
                    <Clock className="w-3 h-3" />
                    {tx.time}
                  </div>
                </div>
              </div>

              {/* Middle */}
              <div className="text-center">
                <div className="flex items-center gap-1 justify-center">
                  <Bitcoin className="w-4 h-4 text-[#f7931a]" />
                  <p className="font-bold">{tx.amount} BTC</p>
                </div>
                <p className="text-xs text-white/40">
                  ${tx.usd.toLocaleString()}
                </p>
              </div>

              {/* Status */}
              <div className="flex items-center gap-2">
                {tx.status === "completed" && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                )}
                {tx.status === "pending" && (
                  <Loader2 className="w-4 h-4 text-yellow-500 animate-spin" />
                )}
                {tx.status === "failed" && (
                  <XCircle className="w-4 h-4 text-red-500" />
                )}

                <span
                  className={`text-sm font-medium capitalize ${tx.status === "completed"
                    ? "text-emerald-500"
                    : tx.status === "pending"
                      ? "text-yellow-500"
                      : "text-red-500"
                    }`}
                >
                  {tx.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty state (optional fallback UX) */}
        {filtered.length === 0 && (
          <div className="text-center mt-20 text-white/40">
            No transactions found.
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}