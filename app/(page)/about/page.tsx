"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Globe,
  Zap,
  CheckCircle2,
} from "lucide-react";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import { THEME } from "../../constants/theme";

export default function AboutPage() {
  const ACCENT = THEME.accent;

  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security First",
      desc: "Every transaction is protected with secure payment infrastructure, fraud monitoring, and verified wallet delivery.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Simplicity",
      desc: "Buying Bitcoin should feel as simple as paying for anything online—fast, intuitive, and stress-free.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Access",
      desc: "We make Bitcoin accessible across borders with local payment options and direct wallet delivery worldwide.",
    },
  ];

  const stats = [
    "150K+ Transactions Completed",
    "40+ Supported Countries",
    "24/7 Customer Support",
    "Bank-Level Payment Security",
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Header />

      <main className="pt-28">
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
              About Flux Pay
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              Making Bitcoin
              <br />
              <span style={{ color: ACCENT }}>
                simple for everyone.
              </span>
            </h1>

            <p className="text-white/55 text-lg md:text-xl leading-relaxed max-w-3xl">
              Flux Pay exists to remove the complexity around buying Bitcoin.
              No confusing exchanges. No unnecessary technical barriers.
              Just a secure, simple way to convert your cash into Bitcoin
              and send it directly to your wallet.
            </p>
          </motion.div>
        </section>

        {/* STORY */}
        <section className="max-w-6xl mx-auto px-5 lg:px-10 mb-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <p
                className="text-xs uppercase tracking-[0.3em] font-mono mb-3"
                style={{ color: ACCENT }}
              >
                Our Story
              </p>

              <h2 className="text-3xl md:text-5xl font-black mb-5">
                Crypto shouldn’t feel
                <span style={{ color: ACCENT }}> complicated.</span>
              </h2>

              <p className="text-white/55 leading-relaxed mb-5">
                Most platforms make buying Bitcoin feel overwhelming—
                wallets, exchanges, long verification flows, and
                confusing interfaces.
              </p>

              <p className="text-white/55 leading-relaxed mb-5">
                We built Flux Pay to change that. A platform focused on
                clarity, trust, and direct delivery. You pay securely,
                we handle the conversion, and your Bitcoin goes straight
                to your wallet.
              </p>

              <p className="text-white/55 leading-relaxed">
                No holding your funds. No unnecessary friction.
                Just Bitcoin—done right.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-3xl border border-white/10 bg-[#14141f] p-8"
            >
              <div className="space-y-5">
                {stats.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      className="w-5 h-5"
                      style={{ color: ACCENT }}
                    />
                    <span className="text-white/75">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* VALUES */}
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
              What We Believe
            </p>

            <h2 className="text-3xl md:text-5xl font-black">
              Built on trust,
              <span style={{ color: ACCENT }}> speed & clarity.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
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
                  {value.icon}
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {value.title}
                </h3>

                <p className="text-white/55 leading-relaxed text-sm">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer open={true} />
    </div>
  );
}