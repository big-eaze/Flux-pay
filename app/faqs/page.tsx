"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  HelpCircle,
  ChevronDown,
  MessageSquare,
  Mail,
  Shield,
} from "lucide-react";
import Header from "../components/layout/header";
import { THEME } from "../constants/theme";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
  category: string;
};

const FAQS: FAQItem[] = [
  {
    id: 1,
    category: "Buying Bitcoin",
    question: "How long does Bitcoin delivery take?",
    answer:
      "Bitcoin is typically sent immediately after your payment is confirmed and wallet verification is completed. Depending on blockchain network activity, delivery may take a few seconds to several minutes.",
  },
  {
    id: 2,
    category: "Wallets",
    question: "Where is my Bitcoin sent to?",
    answer:
      "Your Bitcoin is sent directly to the wallet address you provide during checkout. Flux Pay does not hold your Bitcoin in a custodial vault.",
  },
  {
    id: 3,
    category: "Payments",
    question: "What payment methods are supported?",
    answer:
      "We support debit cards, credit cards, and selected local payment methods depending on your country and currency.",
  },
  {
    id: 4,
    category: "Fees",
    question: "Are there hidden fees?",
    answer:
      "No. You always see the exact exchange rate, network fee, and final BTC amount before confirming your purchase.",
  },
  {
    id: 5,
    category: "Security",
    question: "Do you store my card details?",
    answer:
      "No. Payments are processed through secure PCI-compliant payment gateways. We never store your debit or credit card information.",
  },
  {
    id: 6,
    category: "Security",
    question: "Will you ever ask for my wallet seed phrase?",
    answer:
      "Never. Flux Pay will never request your seed phrase, private keys, or wallet passwords. If anyone asks for these, it is a scam.",
  },
  {
    id: 7,
    category: "Transactions",
    question: "Can I cancel a Bitcoin transaction?",
    answer:
      "Once a Bitcoin transaction has been confirmed and sent to the blockchain, it cannot be reversed. Please always verify your wallet address carefully.",
  },
  {
    id: 8,
    category: "Verification",
    question: "Why do I need wallet verification?",
    answer:
      "Wallet verification helps prevent fraud, incorrect transfers, and security risks. It ensures your Bitcoin is sent to the correct destination.",
  },
];

export default function FAQPage() {
  const ACCENT = THEME.accent;

  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<number | null>(1);

  const filteredFaqs = useMemo(() => {
    if (!query.trim()) return FAQS;

    return FAQS.filter(
      (faq) =>
        faq.question.toLowerCase().includes(query.toLowerCase()) ||
        faq.answer.toLowerCase().includes(query.toLowerCase()) ||
        faq.category.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const toggleFAQ = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Header />

      <main className="max-w-7xl mx-auto px-5 lg:px-10 pt-28 pb-20">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p
            className="text-xs uppercase tracking-[0.3em] font-mono mb-3"
            style={{ color: ACCENT }}
          >
            Help Center
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
            Frequently Asked <br />
            <span style={{ color: ACCENT }}>Questions</span>
          </h1>

          <p className="text-white/50 max-w-2xl">
            Find answers to common questions about buying Bitcoin, payments,
            wallet delivery, transaction security, and more.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="relative">
            <Search className="w-5 h-5 text-white/30 absolute left-5 top-1/2 -translate-y-1/2" />

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search FAQs, payments, wallet issues..."
              className="w-full rounded-3xl border border-white/10 bg-[#14141f] pl-14 pr-5 py-5 text-sm text-white placeholder:text-white/30 outline-none"
            />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_.38fr] gap-8">
          {/* FAQ LIST */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isOpen = openId === faq.id;

                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="rounded-3xl border border-white/10 bg-[#14141f] overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                    >
                      <div>
                        <p
                          className="text-xs uppercase font-mono tracking-[0.2em] mb-2"
                          style={{ color: ACCENT }}
                        >
                          {faq.category}
                        </p>

                        <h3 className="font-semibold text-base md:text-lg">
                          {faq.question}
                        </h3>
                      </div>

                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="w-5 h-5 text-white/50" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-sm text-white/60 leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <div className="rounded-3xl border border-white/10 bg-[#14141f] p-10 text-center">
                <HelpCircle
                  className="w-10 h-10 mx-auto mb-4"
                  style={{ color: ACCENT }}
                />

                <h3 className="text-xl font-bold mb-2">
                  No results found
                </h3>

                <p className="text-white/50 text-sm">
                  Try searching with another keyword like wallet, payment,
                  transaction, or security.
                </p>
              </div>
            )}
          </div>

          {/* SIDE PANEL */}
          <div className="space-y-5">
            <InfoCard
              icon={<MessageSquare className="w-5 h-5" />}
              title="Live Chat Support"
              text="Talk to our team instantly for urgent transaction help."
              accent={ACCENT}
            />

            <InfoCard
              icon={<Mail className="w-5 h-5" />}
              title="Email Support"
              text="support@fluxpay.com"
              accent={ACCENT}
            />

            <div className="rounded-3xl border border-white/10 bg-[#14141f] p-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: `${ACCENT}15`,
                  color: ACCENT,
                }}
              >
                <Shield className="w-5 h-5" />
              </div>

              <h3 className="font-bold text-lg mb-2">
                Security Reminder
              </h3>

              <p className="text-sm text-white/50 leading-relaxed">
                We will never ask for your seed phrase, private keys,
                wallet password, or card PIN. Please stay alert and protect
                your wallet credentials.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  text,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  accent: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#14141f] p-6">
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
        style={{
          background: `${accent}15`,
          color: accent,
        }}
      >
        {icon}
      </div>

      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-sm text-white/50">{text}</p>
    </div>
  );
}