import {
  Bitcoin,
  Shield,
  Wallet,
  CheckCircle2,
  Lock,
  HelpCircle,
  BadgeCheck,
  ArrowRightLeft,
  ShieldCheck,
} from "lucide-react";
import { THEME } from "@/app/constants/theme";

/* =====================================================
   BUY BITCOIN HERO
===================================================== */
export function BuyBitcoinHero() {
  const ACCENT = THEME.accent;

  const trustItems = [
    "256-bit encrypted transactions",
    "Instant wallet delivery",
    "Fixed exchange rates",
    "Global customer support",
  ];

  const quickStats = [
    {
      title: "Avg Delivery Time",
      value: "< 2 mins",
    },
    {
      title: "Successful Transactions",
      value: "120K+",
    },
    {
      title: "Security Layer",
      value: "Bank-Grade",
    },
  ];

  return (
    <section className="grid lg:grid-cols-2 gap-10 items-center">
      {/* LEFT CONTENT */}
      <div>
        <p
          className="text-xs font-mono uppercase tracking-[0.3em] mb-4"
          style={{ color: ACCENT }}
        >
          Trusted Bitcoin Checkout
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
          Buy Bitcoin <br />
          <span style={{ color: ACCENT }}>
            Without The Confusion.
          </span>
        </h1>

        <p className="text-white/55 text-lg leading-relaxed max-w-xl mb-8">
          Convert your cash into Bitcoin securely and send directly to any
          wallet address in minutes — no complicated exchanges, no technical
          crypto stress.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap gap-4 mb-10">
          <button
            className="px-7 py-4 rounded-2xl font-bold text-[#0a0a0f] flex items-center gap-2 transition-all hover:opacity-90"
            style={{ background: ACCENT }}
          >
            Buy Bitcoin
            <ArrowRightLeft className="w-4 h-4" />
          </button>

          <button className="px-7 py-4 rounded-2xl border border-white/10 bg-white/[0.02] font-semibold text-white/80 hover:border-white/20 transition-all">
            View Live Rates
          </button>
        </div>

        {/* Trust Points */}
        <div className="space-y-4">
          {trustItems.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3"
            >
              <CheckCircle2
                className="w-5 h-5"
                style={{ color: ACCENT }}
              />
              <span className="text-white/70">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT VISUAL TRUST CARD */}
      <div className="relative">
        <div className="rounded-3xl border border-white/10 bg-[#14141f] p-7 overflow-hidden">
          {/* Top Card */}
          <div className="rounded-2xl border border-white/10 bg-[#101018] p-5 mb-5">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider">
                  Secure Purchase
                </p>
                <h3 className="text-xl font-bold mt-1">
                  BTC Transfer Ready
                </h3>
              </div>

              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{
                  background: `${ACCENT}15`,
                  color: ACCENT,
                }}
              >
                <Bitcoin className="w-6 h-6" />
              </div>
            </div>

            <div className="rounded-xl border border-white/10 p-4 bg-white/[0.02]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white/40 text-sm">
                  Amount
                </span>
                <span className="font-semibold">
                  $1,000
                </span>
              </div>

              <div className="flex items-center justify-between mb-3">
                <span className="text-white/40 text-sm">
                  BTC Delivered
                </span>
                <span
                  className="font-semibold"
                  style={{ color: ACCENT }}
                >
                  0.010432 BTC
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-white/40 text-sm">
                  Status
                </span>
                <span className="text-sm font-medium text-green-400">
                  Ready for Transfer
                </span>
              </div>
            </div>
          </div>

          {/* Security Block */}
          <div className="rounded-2xl border border-white/10 bg-[#101018] p-5 mb-5">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: `${ACCENT}15`,
                  color: ACCENT,
                }}
              >
                <ShieldCheck className="w-5 h-5" />
              </div>

              <div>
                <h4 className="font-semibold">
                  Security Protected
                </h4>
                <p className="text-white/40 text-sm">
                  PCI-DSS + encrypted checkout
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                "Card details never stored",
                "Wallet verification enabled",
                "Real-time fraud monitoring",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-white/60"
                >
                  <CheckCircle2
                    className="w-4 h-4"
                    style={{ color: ACCENT }}
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {quickStats.map((stat) => (
              <div
                key={stat.title}
                className="rounded-2xl border border-white/10 bg-[#101018] p-4"
              >
                <p className="text-white/35 text-xs mb-2">
                  {stat.title}
                </p>
                <p className="font-bold text-sm md:text-base">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Glow */}
        <div
          className="absolute -z-10 top-10 right-10 w-72 h-72 rounded-full blur-[120px] opacity-20"
          style={{ background: ACCENT }}
        />
      </div>
    </section>
  );
}

/* =====================================================
   TRUST STRIP
===================================================== */
export function TrustStrip() {
  const ACCENT = THEME.accent;

  const items = [
    "Secure Payments",
    "No Hidden Fees",
    "Fixed Rates",
    "Wallet Verification",
    "Instant Delivery",
    "Human Support",
  ];

  return (
    <section className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
      {items.map((item) => (
        <div
          key={item}
          className="rounded-2xl border border-white/8 bg-[#14141f] px-4 py-5 text-center"
        >
          <BadgeCheck
            className="w-5 h-5 mx-auto mb-2"
            style={{ color: ACCENT }}
          />
          <p className="text-sm text-white/70">{item}</p>
        </div>
      ))}
    </section>
  );
}

/* =====================================================
   SIMPLE FLOW
===================================================== */
export function SimpleFlow() {
  const ACCENT = THEME.accent;

  const steps = [
    "Enter amount",
    "Add wallet address",
    "Pay securely",
    "Bitcoin delivered",
  ];

  return (
    <section className="rounded-3xl border border-white/10 bg-[#14141f] p-7">
      <h2 className="text-2xl font-bold mb-6">How It Works</h2>

      <div className="space-y-4">
        {steps.map((step, i) => (
          <div
            key={i + 1}
            className="flex items-center gap-4 p-4 rounded-2xl border border-white/8"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center font-bold"
              style={{ background: `${ACCENT}15`, color: ACCENT }}
            >
              0{i + 1}
            </div>
            <p className="text-white/80">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =====================================================
   RECENT PURCHASES
===================================================== */
export function RecentPurchases() {
  const ACCENT = THEME.accent;

  const purchases = [
    "$850 → 0.012 BTC",
    "$1200 → 0.018 BTC",
    "$500 → 0.007 BTC",
  ];

  return (
    <section className="rounded-3xl border border-white/10 bg-[#14141f] p-7">
      <h2 className="text-2xl font-bold mb-6">Recent Purchases</h2>

      <div className="space-y-4">
        {purchases.map((item) => (
          <div
            key={item}
            className="p-4 rounded-2xl border border-white/8 bg-[#0a0a0f]"
          >
            <p className="font-semibold mb-1">{item}</p>
            <p className="text-sm text-white/40">Sent to bc1x...82ad</p>
            <p
              className="text-xs mt-2 font-medium"
              style={{ color: ACCENT }}
            >
              Completed • 2 mins ago
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =====================================================
   SECURITY
===================================================== */
export function Security() {
  const ACCENT = THEME.accent;

  const pillars = [
    {
      title: "MPC Vaults",
      desc: "Your Bitcoin is protected with distributed wallet security.",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      title: "Fraud Monitoring",
      desc: "Every transaction is reviewed for unusual activity.",
      icon: <Lock className="w-5 h-5" />,
    },
    {
      title: "Verified Transfers",
      desc: "Wallet verification helps prevent irreversible mistakes.",
      icon: <Wallet className="w-5 h-5" />,
    },
  ];

  return (
    <section className="rounded-3xl border border-white/10 bg-[#14141f] p-8">
      <h2 className="text-3xl font-bold mb-8">Built for Security</h2>

      <div className="grid md:grid-cols-3 gap-5">
        {pillars.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/8 p-6"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{ background: `${ACCENT}15`, color: ACCENT }}
            >
              {item.icon}
            </div>
            <h3 className="font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-white/50">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =====================================================
   SUPPORT
===================================================== */
export function Support() {
  const faqs = [
    "Where do I find my wallet address?",
    "How long does Bitcoin delivery take?",
    "Can I use debit card?",
    "Is my payment secure?",
  ];

  return (
    <section className="rounded-3xl border border-white/10 bg-[#14141f] p-8">
      <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
      <p className="text-white/50 mb-6">
        Live support is available to guide you through your Bitcoin purchase.
      </p>

      <div className="space-y-3">
        {faqs.map((faq) => (
          <div
            key={faq}
            className="flex items-center justify-between p-4 rounded-2xl border border-white/8"
          >
            <span>{faq}</span>
            <HelpCircle className="w-4 h-4 text-white/40" />
          </div>
        ))}
      </div>
    </section>
  );
}
