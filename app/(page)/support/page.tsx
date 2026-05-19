"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  MessageSquare,
  Mail,
  Phone,
  Shield,
  Search,
  ArrowRight,
  ChevronRight,
  X,
  Send,
} from "lucide-react";
import { useState } from "react";
import Header from "../../components/layout/header";
import { THEME } from "../../constants/theme";
import Footer from "../../components/layout/footer";

export default function SupportPage() {
  const ACCENT = THEME.accent;
  const [query, setQuery] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");

  const faqs = [
    {
      q: "How long does Bitcoin delivery take?",
      a: "Bitcoin is sent instantly after payment confirmation and network validation. Usually within seconds to a few minutes.",
    },
    {
      q: "Where is my Bitcoin sent to?",
      a: "You enter your own wallet address at checkout. We do not store your BTC in a custodial vault.",
    },
    {
      q: "What payment methods are supported?",
      a: "Debit cards, credit cards, and select local payment methods depending on region.",
    },
    {
      q: "Are there hidden fees?",
      a: "No hidden fees. You always see the final BTC amount before confirming your purchase.",
    },
  ];

  const contacts = [
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Live Chat",
      desc: "Talk to support instantly",
      action: "Start chat",
      onClick: () => setChatOpen(true),
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Support",
      desc: "support@fluxpay.com",
      action: "Send email",
      onClick: () =>
        window.open(
          "https://mail.google.com/mail/?view=cm&fs=1&to=support@fluxpay.com",
          "_blank"
        ),
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone Support",
      desc: "+1 (800) 123-4567",
      action: "Call now",
      onClick: () => window.open("tel:+18001234567"),
    },
  ];

  const filteredFaqs = faqs.filter(
    (f) =>
      f.q.toLowerCase().includes(query.toLowerCase()) ||
      f.a.toLowerCase().includes(query.toLowerCase())
  );

  const handleSendMessage = () => {
    if (!message.trim()) return;

    alert("Message sent to support!");
    setMessage("");
    setChatOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Header />

      <main className="max-w-6xl mx-auto px-5 lg:px-10 pt-28 pb-20">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <p
            className="text-xs uppercase tracking-[0.3em] font-mono mb-3"
            style={{ color: ACCENT }}
          >
            Support Center
          </p>

          <h1 className="text-4xl md:text-6xl font-black mb-3">
            How can we <span style={{ color: ACCENT }}>help you?</span>
          </h1>

          <p className="text-white/50 max-w-2xl">
            Everything you need to know about buying Bitcoin, payments, and
            sending BTC directly to your wallet.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div
            className="flex items-center gap-3 px-5 py-4 rounded-2xl border bg-[#14141f]"
            style={{ borderColor: `${ACCENT}15` }}
          >
            <Search className="w-4 h-4 text-white/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search help articles..."
              className="bg-transparent outline-none text-sm w-full text-white/70 placeholder:text-white/30"
            />
          </div>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {contacts.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border p-6 bg-[#14141f]"
              style={{ borderColor: `${ACCENT}10` }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${ACCENT}15`, color: ACCENT }}
              >
                {c.icon}
              </div>

              <h3 className="font-bold text-lg mb-1">{c.title}</h3>
              <p className="text-white/50 text-sm mb-4">{c.desc}</p>

              <button
                onClick={c.onClick}
                className="flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition"
                style={{ color: ACCENT }}
              >
                {c.action}
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <HelpCircle className="w-5 h-5" style={{ color: ACCENT }} />
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {filteredFaqs.map((f, i) => (
              <details
                key={i}
                className="group rounded-2xl border bg-[#14141f] p-5"
                style={{ borderColor: `${ACCENT}10` }}
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-semibold">{f.q}</span>
                  <ChevronRight className="w-4 h-4 text-white/40 group-open:rotate-90 transition-transform" />
                </summary>

                <p className="text-white/50 text-sm mt-3 leading-relaxed">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </motion.div>

        {/* Security Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border p-7 bg-[#14141f] flex items-start gap-4"
          style={{ borderColor: `${ACCENT}15` }}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: `${ACCENT}15`, color: ACCENT }}
          >
            <Shield className="w-6 h-6" />
          </div>

          <div>
            <h3 className="font-bold text-lg mb-1">
              Your security matters
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Flux Pay never stores your Bitcoin. All BTC is sent directly to
              your wallet. If anyone asks for your seed phrase, it is a scam —
              we will never request it.
            </p>
          </div>
        </motion.div>
      </main>

      {/* Chat Modal */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              className="w-full max-w-lg rounded-3xl border border-white/10 bg-[#14141f] p-6"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold">Live Support Chat</h3>

                <button onClick={() => setChatOpen(false)}>
                  <X className="w-5 h-5 text-white/40" />
                </button>
              </div>

              <p className="text-white/50 text-sm mb-5">
                Send us your issue and our support team will respond shortly.
              </p>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your issue..."
                rows={5}
                className="w-full rounded-2xl bg-[#0f0f15] border border-white/10 px-4 py-4 outline-none resize-none text-sm"
              />

              <button
                onClick={handleSendMessage}
                className="w-full mt-5 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 text-[#0a0a0f]"
                style={{ background: ACCENT }}
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
}