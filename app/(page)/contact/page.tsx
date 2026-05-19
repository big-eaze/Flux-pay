"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Shield,
} from "lucide-react";
import { useState } from "react";
import Header from "../../components/layout/header";
import { THEME } from "../../constants/theme";

export default function ContactPage() {
  const ACCENT = THEME.accent;

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Replace with your backend logic
    console.log(form);

    alert("Message sent successfully!");

    setForm({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
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
            Contact Us
          </p>

          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
            Let’s talk about your <br />
            <span style={{ color: ACCENT }}>Bitcoin purchase.</span>
          </h1>

          <p className="text-white/50 max-w-2xl">
            Need help with transactions, wallet delivery, payment issues, or
            general support? Send us a message and our team will get back to
            you quickly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-8">
          {/* FORM SECTION */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-white/10 bg-[#14141f] p-7 md:p-8"
          >
            <h2 className="text-2xl font-bold mb-6">
              Send us a message
            </h2>

            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <Field
                label="Full Name"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="John Doe"
              />

              <Field
                label="Email Address"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </div>

            <div className="mb-5">
              <Field
                label="Subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Payment issue / Wallet delivery / General support"
              />
            </div>

            <div className="mb-6">
              <label className="text-xs text-white/40 uppercase font-mono mb-2 block">
                Message
              </label>

              <textarea
                name="message"
                rows={6}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us how we can help..."
                required
                className="w-full rounded-2xl border border-white/10 bg-[#0f0f16] px-4 py-4 text-sm text-white placeholder:text-white/25 outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl font-bold text-[#0a0a0f] flex items-center justify-center gap-2"
              style={{ background: ACCENT }}
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </motion.form>

          {/* INFO SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-5"
          >
            <InfoCard
              icon={<Mail className="w-5 h-5" />}
              title="Email Support"
              text="support@fluxpay.com"
              accent={ACCENT}
            />

            <InfoCard
              icon={<Phone className="w-5 h-5" />}
              title="Phone Line"
              text="+1 (800) 123-4567"
              accent={ACCENT}
            />

            <InfoCard
              icon={<MapPin className="w-5 h-5" />}
              title="Office Address"
              text="Global Digital Payments Center"
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
                Secure Communication
              </h3>

              <p className="text-sm text-white/50 leading-relaxed">
                We will never ask for your wallet seed phrase, passwords,
                or private keys. Please never share sensitive wallet
                credentials with anyone.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-xs text-white/40 uppercase font-mono mb-2 block">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full rounded-2xl border border-white/10 bg-[#0f0f16] px-4 py-4 text-sm text-white placeholder:text-white/25 outline-none"
      />
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