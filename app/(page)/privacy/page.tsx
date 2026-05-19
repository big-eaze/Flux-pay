"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  FileText,
  CheckCircle2,
} from "lucide-react";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import { THEME } from "../../constants/theme";

export default function PrivacyPage() {
  const ACCENT = THEME.accent;

  const sections = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Information We Collect",
      content:
        "We collect only the information necessary to process your transactions, provide customer support, prevent fraud, and maintain platform security. This may include payment details handled securely by third-party processors and transaction-related wallet information.",
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "How We Protect Data",
      content:
        "Your information is protected using encrypted infrastructure, secure payment systems, and fraud monitoring tools. We do not store sensitive card details directly on our platform.",
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "How Your Data Is Used",
      content:
        "We use your data to complete Bitcoin purchases, verify wallet delivery, prevent suspicious activity, improve customer support, and comply with legal obligations where required.",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Third-Party Services",
      content:
        "Payment processing and compliance checks may be handled by trusted third-party providers. These providers operate under strict security and privacy standards.",
    },
  ];

  const notes = [
    "We never store your wallet private keys",
    "We never ask for your seed phrase",
    "We do not store raw debit or credit card details",
    "We use secure third-party payment providers only",
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Header />

      <main className="pt-28 pb-20">
        {/* Hero */}
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
              Privacy Policy
            </p>

            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Your privacy.
              <br />
              <span style={{ color: ACCENT }}>
                Our responsibility.
              </span>
            </h1>

            <p className="text-white/55 text-lg leading-relaxed max-w-3xl">
              We believe trust begins with transparency. This policy explains
              how Flux Pay collects, uses, and protects your information while
              processing Bitcoin transactions securely.
            </p>
          </motion.div>
        </section>

        {/* Sections */}
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

        {/* Key Notes */}
        <section className="max-w-6xl mx-auto px-5 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[32px] border border-white/10 bg-[#14141f] p-8 md:p-10"
          >
            <h2 className="text-2xl md:text-4xl font-black mb-8">
              Privacy Commitments
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {notes.map((note) => (
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
      </main>

      <Footer />
    </div>
  );
}