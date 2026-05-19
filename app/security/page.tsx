"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  CreditCard,
  Wallet,
  CheckCircle2,
  Eye,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import { THEME } from "../constants/theme";

export default function SecurityPage() {
  const ACCENT = THEME.accent;

  const securityLayers = [
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Secure Payment Processing",
      desc: "All card transactions are handled through encrypted, PCI-compliant payment gateways. We never store your debit or credit card details.",
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Direct Wallet Delivery",
      desc: "Your Bitcoin is sent directly to your personal wallet address. We do not operate custodial wallets or hold customer funds.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Fraud Monitoring",
      desc: "Every transaction passes through risk checks, wallet validation, and fraud prevention systems before Bitcoin is delivered.",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Encrypted Infrastructure",
      desc: "Sensitive transaction data is protected with strong encryption and secure infrastructure designed for financial operations.",
    },
  ];

  const trustPoints = [
    "PCI-compliant payment infrastructure",
    "Real-time fraud detection systems",
    "Wallet address verification before delivery",
    "No custodial storage of Bitcoin",
    "Secure encrypted transaction flow",
    "Transparent transaction confirmations",
  ];

  const warnings = [
    "We will never ask for your seed phrase",
    "We will never request your wallet private key",
    "Only use wallet addresses you personally control",
    "Always verify recipient wallet addresses before confirming",
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Header />

      <main className="pt-28 pb-20">
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-5 lg:px-10 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <p
              className="text-xs uppercase tracking-[0.35em] font-mono mb-4"
              style={{ color: ACCENT }}
            >
              Security
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              Built for trust.
              <br />
              <span style={{ color: ACCENT }}>
                Designed for protection.
              </span>
            </h1>

            <p className="text-white/55 text-lg md:text-xl leading-relaxed max-w-3xl">
              Buying Bitcoin should be simple—but security should never be
              optional. Every transaction on Flux Pay is designed with
              protection, transparency, and direct ownership in mind.
            </p>
          </motion.div>
        </section>

        {/* SECURITY LAYERS */}
        <section className="max-w-6xl mx-auto px-5 lg:px-10 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <p
              className="text-xs uppercase tracking-[0.3em] font-mono mb-3"
              style={{ color: ACCENT }}
            >
              Protection Layers
            </p>

            <h2 className="text-3xl md:text-5xl font-black">
              Security at
              <span style={{ color: ACCENT }}> every step.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {securityLayers.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="rounded-3xl border border-white/10 bg-[#14141f] p-7"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{
                    background: `${ACCENT}15`,
                    color: ACCENT,
                  }}
                >
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-white/55 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TRUST POINTS */}
        <section className="max-w-6xl mx-auto px-5 lg:px-10 mb-24">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <p
                className="text-xs uppercase tracking-[0.3em] font-mono mb-3"
                style={{ color: ACCENT }}
              >
                Why It Matters
              </p>

              <h2 className="text-3xl md:text-5xl font-black mb-5">
                Your Bitcoin.
                <span style={{ color: ACCENT }}> Your control.</span>
              </h2>

              <p className="text-white/55 leading-relaxed mb-5">
                Unlike custodial platforms, Flux Pay does not hold your
                Bitcoin for you. Once your transaction is complete,
                your BTC is delivered directly to your own wallet.
              </p>

              <p className="text-white/55 leading-relaxed">
                This reduces unnecessary risk and keeps ownership exactly
                where it belongs—with you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-3xl border border-white/10 bg-[#14141f] p-8"
            >
              <div className="space-y-5">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      className="w-5 h-5"
                      style={{ color: ACCENT }}
                    />
                    <span className="text-white/75">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECURITY WARNINGS */}
        <section className="max-w-6xl mx-auto px-5 lg:px-10 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[32px] border border-white/10 bg-[#14141f] p-8 md:p-10"
          >
            <div className="flex items-start gap-4 mb-8">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: `${ACCENT}15`,
                  color: ACCENT,
                }}
              >
                <AlertTriangle className="w-6 h-6" />
              </div>

              <div>
                <p
                  className="text-xs uppercase tracking-[0.3em] font-mono mb-2"
                  style={{ color: ACCENT }}
                >
                  Stay Safe
                </p>

                <h2 className="text-2xl md:text-4xl font-black mb-3">
                  Protect yourself from scams
                </h2>

                <p className="text-white/55">
                  Security is a shared responsibility. Here are the most
                  important things to always remember.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {warnings.map((warning) => (
                <div
                  key={warning}
                  className="rounded-2xl border border-white/10 p-5"
                >
                  <div className="flex items-start gap-3">
                    <Eye
                      className="w-5 h-5 mt-0.5"
                      style={{ color: ACCENT }}
                    />
                    <p className="text-white/70 text-sm leading-relaxed">
                      {warning}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-5 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[32px] border border-white/10 bg-[#14141f] p-8 md:p-12"
          >
            <div className="max-w-3xl">
              <p
                className="text-xs uppercase tracking-[0.3em] font-mono mb-3"
                style={{ color: ACCENT }}
              >
                Secure Transactions
              </p>

              <h2 className="text-3xl md:text-5xl font-black mb-4">
                Buy Bitcoin with
                <span style={{ color: ACCENT }}> confidence.</span>
              </h2>

              <p className="text-white/55 mb-8 max-w-2xl">
                Secure payments, direct wallet delivery, and transparent
                transaction verification—designed for trust from start to finish.
              </p>

              <button
                className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl font-bold text-[#0a0a0f]"
                style={{ background: ACCENT }}
              >
                Start Secure Purchase
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}