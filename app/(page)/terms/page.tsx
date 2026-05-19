"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Shield,
  CreditCard,
  Wallet,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import { THEME } from "../../constants/theme";

export default function TermsPage() {
  const ACCENT = THEME.accent;

  const sections = [
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Use of Service",
      content:
        "Flux Pay provides a platform for converting supported fiat currencies into Bitcoin and sending it directly to your provided wallet address. We do not operate as a custodial wallet and we do not hold customer Bitcoin after transaction completion.",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Payments & Transactions",
      content:
        "All payments are processed through secure third-party payment gateways. By using Flux Pay, you confirm that you are authorized to use the selected payment method and understand that completed Bitcoin transactions are generally irreversible.",
    },
    {
      icon: <Wallet className="w-5 h-5" />,
      title: "Wallet Responsibility",
      content:
        "You are solely responsible for providing a valid and accurate Bitcoin wallet address. Transactions sent to incorrect, invalid, or inaccessible wallet addresses cannot be reversed or recovered by Flux Pay.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Security & Fraud Prevention",
      content:
        "We reserve the right to delay, review, reject, or cancel transactions that trigger fraud detection systems, compliance reviews, or security concerns. This helps protect users and maintain platform integrity.",
    },
  ];

  const importantNotes = [
    "Bitcoin transactions are irreversible once confirmed",
    "We never ask for your private keys or seed phrase",
    "We do not provide investment or financial advice",
    "Users must comply with local laws regarding crypto usage",
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Header />

      <main className="pt-28 pb-20">
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-5 lg:px-10 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <p
              className="text-xs uppercase tracking-[0.35em] font-mono mb-4"
              style={{ color: ACCENT }}
            >
              Terms & Conditions
            </p>

            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Clear rules.
              <br />
              <span style={{ color: ACCENT }}>
                Transparent transactions.
              </span>
            </h1>

            <p className="text-white/55 text-lg leading-relaxed max-w-3xl">
              These terms govern your use of Flux Pay. By using our platform,
              you agree to the conditions below regarding payments, Bitcoin
              delivery, wallet ownership, and transaction security.
            </p>
          </motion.div>
        </section>

        {/* TERMS SECTIONS */}
        <section className="max-w-6xl mx-auto px-5 lg:px-10 mb-24">
          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="rounded-3xl border border-white/10 bg-[#14141f] p-7"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `${ACCENT}15`,
                    color: ACCENT,
                  }}
                >
                  {section.icon}
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {section.title}
                </h3>

                <p className="text-white/55 text-sm leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* IMPORTANT NOTICE */}
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
                  Important Notice
                </p>

                <h2 className="text-2xl md:text-4xl font-black mb-3">
                  Please read before using Flux Pay
                </h2>

                <p className="text-white/55">
                  Bitcoin transactions work differently from traditional
                  payments. Understanding these basics helps avoid mistakes.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {importantNotes.map((note) => (
                <div
                  key={note}
                  className="rounded-2xl border border-white/10 p-5"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5"
                      style={{ color: ACCENT }}
                    />
                    <p className="text-white/70 text-sm leading-relaxed">
                      {note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* DISCLAIMER */}
        <section className="max-w-6xl mx-auto px-5 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-white/10 bg-[#14141f] p-8"
          >
            <h2 className="text-2xl font-bold mb-4">
              Final Disclaimer
            </h2>

            <p className="text-white/55 leading-relaxed">
              Flux Pay is a transaction platform for purchasing Bitcoin and
              sending it directly to your wallet. We do not provide financial,
              tax, or investment advice. Users are responsible for complying
              with applicable laws and regulations in their country or region.
            </p>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}