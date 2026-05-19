"use client"
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield, TrendingUp, ArrowRightLeft, CreditCard, Lock, Wallet,
  ChevronRight, Bitcoin, ArrowRight, Eye, EyeOff, Globe, CheckCircle2,
} from "lucide-react";
import Header from "./components/layout/GuestHeader";
import { useRouter } from "next/navigation";

const ACCENT = "#f7931a";

const slides = [
  { id: "intro", label: "Welcome" },
  { id: "what", label: "What" },
  { id: "how", label: "How" },
  { id: "security", label: "Security" },
  { id: "signup", label: "Sign Up" },
];

function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full min-h-screen flex flex-col sm:justify-center justify-start items-center px-6 md:px-20 overflow-visible">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='1' height='1' fill='white'/%3E%3C/svg%3E\")",
          backgroundSize: "4px 4px",
        }}
      />
      <div
        className="pointer-events-none absolute w-[600px] h-[600px] rounded-full opacity-[0.07] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        style={{ background: ACCENT, filter: "blur(160px)" }}
      />
      {children}
    </div>
  );
}

/* ── SLIDE 0: INTRO ───────────────────────────────── */
function SlideIntro({ onNext }: { onNext: () => void }) {
  return (
    <Page>
      <motion.div
        className="text-center max-w-3xl"
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div className="flex justify-center mb-8" initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
          <div className="w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl" style={{ background: ACCENT }}>
            <Bitcoin className="w-10 h-10 text-[#0a0a0f]" />
          </div>
        </motion.div>
        <motion.p className="text-sm font-mono tracking-[0.3em] mb-4 uppercase" style={{ color: ACCENT }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          Flux Pay
        </motion.p>
        <motion.h1 className="text-5xl md:text-7xl font-black leading-[1.05] mb-6" style={{ fontFamily: "'Georgia', serif" }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
          Your Bitcoin.<br />
          <span style={{ color: ACCENT }}>Perfectly Held.</span>
        </motion.h1>
        <motion.p className="text-white/50 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          The secure vault platform that lets you buy, hold, and transfer Bitcoin with military-grade protection — no technical knowledge required.
        </motion.p>
        <motion.button
          onClick={onNext}
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-[#0a0a0f] text-base transition-all"
          style={{ background: ACCENT }}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
        >
          See How It Works
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
        <motion.p className="mt-6 text-white/25 text-xs tracking-widest" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
          USE ARROW KEYS TO NAVIGATE
        </motion.p>
      </motion.div>
    </Page>
  );
}

/* ── SLIDE 1: WHAT ────────────────────────────────── */
function SlideWhat() {
  const features = [
    { icon: <Lock className="w-5 h-5" />, title: "Vault-Grade Storage", desc: "Your BTC lives in a distributed MPC wallet — never on a hot exchange where it can be hacked." },
    { icon: <CreditCard className="w-5 h-5" />, title: "Card-to-BTC Instantly", desc: "Link your debit or credit card and convert to Bitcoin in seconds. No KYC delays, no waiting." },
    { icon: <ArrowRightLeft className="w-5 h-5" />, title: "Frictionless Transfers", desc: "Send Bitcoin to any wallet address worldwide with sub-second confirmation feedback." },
    { icon: <TrendingUp className="w-5 h-5" />, title: "Live Market Data", desc: "Real-time BTC/USD prices, portfolio performance charts, and 24-hour trend analysis." },
  ];
  return (
    <Page>
      <div className="max-w-5xl w-full pt-24 md:pt-12 px-4 mx-auto">
        <motion.div className="mb-8 md:mb-12" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-xs font-mono tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>What We Do</p>
          <h2 className="text-4xl md:text-6xl font-black" style={{ fontFamily: "'Georgia', serif" }}>
            One platform.<br /><span style={{ color: ACCENT }}>Everything Bitcoin.</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <motion.div key={f.title} className="group p-6 bg-[#14141f] border border-white/8 rounded-2xl hover:border-white/20 transition-all"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 * i + 0.2, duration: 0.6 }} whileHover={{ y: -3 }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${ACCENT}18`, color: ACCENT }}>{f.icon}</div>
              <h3 className="font-bold text-base mb-1">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Page>
  );
}

/* ── SLIDE 2: HOW ─────────────────────────────────── */
function SlideHow() {
  const steps = [
    { num: "01", icon: <CreditCard className="w-6 h-6" />, title: "Create your account", desc: "Sign up with your email and link a debit or credit card. Takes under 2 minutes." },
    { num: "02", icon: <Bitcoin className="w-6 h-6" />, title: "Buy Bitcoin instantly", desc: "Enter any USD amount and watch it convert. BTC lands in your vault in seconds." },
    { num: "03", icon: <Shield className="w-6 h-6" />, title: "Your BTC is secured", desc: "Your holdings sit in a distributed MPC vault — inaccessible to anyone but you." },
    { num: "04", icon: <Wallet className="w-6 h-6" />, title: "Withdraw anytime", desc: "Transfer your Bitcoin to any external wallet or back to cash at any time." },
  ];
  return (
    <Page>
      <div className="max-w-5xl w-full">
        <motion.div className="mb-12" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-xs font-mono tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>How It Works</p>
          <h2 className="text-4xl md:text-6xl font-black" style={{ fontFamily: "'Georgia', serif" }}>
            Simple as <span style={{ color: ACCENT }}>four steps.</span>
          </h2>
        </motion.div>
        <div className="space-y-4">
          {steps.map((s, i) => (
            <motion.div key={s.num} className="relative flex gap-6 items-start p-5 bg-[#14141f] border border-white/8 rounded-2xl hover:border-white/20 transition-all group"
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 * i + 0.2, duration: 0.6 }} whileHover={{ x: 4 }}>
              <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: `${ACCENT}15`, color: ACCENT }}>{s.icon}</div>
              <div className="flex-1 pt-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-mono text-white/30">{s.num}</span>
                  <h3 className="font-bold">{s.title}</h3>
                </div>
                <p className="text-white/50 text-sm">{s.desc}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white/50 transition mt-1" style={{ color: `${ACCENT}80` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </Page>
  );
}

/* ── SLIDE 3: SECURITY ───────────────────────────── */
function SlideSecurity() {
  const pillars = [
    { icon: <Shield className="w-7 h-7" />, title: "MPC Wallets", sub: "Multi-Party Computation", desc: "Private keys are never assembled in one place. Cryptographic shards are distributed across independent nodes." },
    { icon: <Lock className="w-7 h-7" />, title: "Zero-Knowledge Auth", sub: "Password-less login", desc: "We never store your password. Authentication uses ZK proofs — we verify without seeing." },
    { icon: <Globe className="w-7 h-7" />, title: "SOC 2 Type II", sub: "Audit certified", desc: "Independent security audits, penetration testing, and continuous compliance monitoring." },
  ];
  return (
    <Page>
      <div className="max-w-5xl w-full">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-xs font-mono tracking-[0.3em] uppercase mb-3" style={{ color: ACCENT }}>Security</p>
          <h2 className="text-4xl md:text-6xl font-black" style={{ fontFamily: "'Georgia', serif" }}>
            Built like a <span style={{ color: ACCENT }}>bank vault.</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto">We've taken every paranoid precaution so you don't have to.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <motion.div key={p.title} className="p-7 bg-[#14141f] border border-white/8 rounded-3xl text-center hover:border-white/20 transition-all"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 * i + 0.3, duration: 0.6 }} whileHover={{ y: -4 }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: `${ACCENT}15`, color: ACCENT }}>{p.icon}</div>
              <h3 className="font-bold text-lg mb-0.5">{p.title}</h3>
              <p className="text-xs text-white/30 mb-3 font-mono">{p.sub}</p>
              <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div className="flex flex-wrap justify-center gap-6 mt-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          {["256-bit AES Encryption", "Cold Storage Backup", "$50M Insurance Coverage", "99.99% Uptime SLA"].map((b) => (
            <div key={b} className="flex items-center gap-2 text-white/40 text-xs">
              <CheckCircle2 className="w-3.5 h-3.5" style={{ color: ACCENT }} />{b}
            </div>
          ))}
        </motion.div>
      </div>
    </Page>
  );
}

/* ── SLIDE 4: SIGN UP ────────────────────────────── */
function SlideSignup({ onSignup }: { onSignup: (u: any) => void }) {
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const handle = (e: any) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const submit = async (e: any) => {
    e.preventDefault(); setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false); setDone(true);
    setTimeout(() => onSignup && onSignup(form), 1200);
  };
  return (
    <Page>
      <div className="w-full max-w-md">
        <AnimatePresence mode="wait">
          {done ? (
            <motion.div key="done" className="text-center" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 200 }}>
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: `${ACCENT}20`, border: `1px solid ${ACCENT}40` }}>
                <CheckCircle2 className="w-10 h-10" style={{ color: ACCENT }} />
              </div>
              <h3 className="text-2xl font-black mb-2">You're in!</h3>
              <p className="text-white/40 text-sm">Redirecting to your vault…</p>
            </motion.div>
          ) : (
            <motion.div key="form" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6 }}>
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: ACCENT }}>
                    <Bitcoin className="w-4 h-4 text-[#0a0a0f]" />
                  </div>
                  <span className="font-bold text-sm">Flux Pay</span>
                </div>
                <p className="text-xs font-mono tracking-[0.3em] uppercase mb-2" style={{ color: ACCENT }}>Create Account</p>
                <h2 className="text-3xl md:text-4xl font-black" style={{ fontFamily: "'Georgia', serif" }}>
                  Start your vault<br /><span style={{ color: ACCENT }}>today.</span>
                </h2>
              </div>
              <form onSubmit={submit} className="space-y-4">
                {[
                  { label: "FULL NAME", name: "name", type: "text", placeholder: "Satoshi Nakamoto" },
                  { label: "EMAIL", name: "email", type: "email", placeholder: "you@example.com" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="text-xs text-white/40 mb-1.5 block font-mono">{f.label}</label>
                    <input name={f.name} type={f.type} value={(form as any)[f.name]} onChange={handle} required placeholder={f.placeholder}
                      className="w-full bg-[#14141f] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/20 outline-none transition-colors"
                      style={{ borderColor: undefined }}
                      onFocus={(e) => e.target.style.borderColor = `${ACCENT}50`}
                      onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
                  </div>
                ))}
                <div>
                  <label className="text-xs text-white/40 mb-1.5 block font-mono">PASSWORD</label>
                  <div className="relative">
                    <input type={showPass ? "text" : "password"} name="password" value={form.password} onChange={handle} required placeholder="••••••••••••"
                      className="w-full bg-[#14141f] border border-white/10 rounded-xl px-4 py-3.5 pr-12 text-sm text-white placeholder-white/20 outline-none transition-colors"
                      onFocus={(e) => e.target.style.borderColor = `${ACCENT}50`}
                      onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
                    <button type="button" onClick={() => setShowPass((s) => !s)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition">
                      {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <button type="submit" disabled={loading} className="w-full py-4 rounded-2xl font-bold text-[#0a0a0f] text-base transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                  style={{ background: ACCENT }}>
                  {loading ? (
                    <><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.7, ease: "linear" }}
                      className="w-4 h-4 border-2 border-[#0a0a0f] border-t-transparent rounded-full" />Creating Vault…</>
                  ) : (<>Create My Vault<ArrowRight className="w-4 h-4" /></>)}
                </button>
              </form>
              <p className="text-center text-white/25 text-xs mt-5">By signing up you agree to our Terms & Privacy Policy.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Page>
  );
}

/* ── TRANSITIONS ──────────────────────────────────── */
const bookVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", rotateY: dir > 0 ? 15 : -15, opacity: 0, scale: 0.95 }),
  center: { x: 0, rotateY: 0, opacity: 1, scale: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", rotateY: dir > 0 ? -15 : 15, opacity: 0, scale: 0.95 }),
};

/* ── MAIN ─────────────────────────────────────────── */
export default function SatoshiLanding() {
  const [[page, dir], setPage] = useState([0, 0]);
  const router = useRouter();

  const goTo = useCallback((idx: number) => {
    if (idx < 0 || idx >= slides.length) return;
    setPage(([p]) => [idx, idx > p ? 1 : -1]);
  }, []);

  const next = useCallback(() => goTo(page + 1), [page, goTo]);
  const prev = useCallback(() => goTo(page - 1), [page, goTo]);

  /* keyboard only — no wheel/swipe */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const slideComponents = [
    <SlideIntro key="intro" onNext={next} />,
    <SlideWhat key="what" />,
    <SlideHow key="how" />,
    <SlideSecurity key="security" />,
    <SlideSignup key="signup" onSignup={(user) => router.push("/home")} />,
  ];

  return (
    <div className="relative w-screen min-h-screen bg-[#0a0a0f] text-white overflow-auto sm:overflow-hidden select-none" style={{ perspective: "1200px" }}>
      <Header goTo={goTo} slides={slides} />

      {/* Slide area */}
      {/* add top padding on small screens so content sits under the fixed header */}
      <div className="absolute inset-0 sm:pb-28 pt-20 sm:pt-0">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div key={page} custom={dir} variants={bookVariants} initial="enter" animate="center" exit="exit"
            transition={{ x: { type: "spring", stiffness: 280, damping: 30 }, rotateY: { type: "spring", stiffness: 280, damping: 30 }, opacity: { duration: 0.25 }, scale: { duration: 0.35 } }}
            className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
            {/* spine shadow */}
            <div className="absolute inset-y-0 right-0 w-8 pointer-events-none z-10" style={{ background: "linear-gradient(to left,rgba(0,0,0,0.5),transparent)" }} />
            {slideComponents[page]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Bottom navigator bar ── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50"
        style={{ background: "rgba(10,10,15,0.95)", borderTop: "1px solid rgba(247,147,26,0.15)", backdropFilter: "blur(20px)" }}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-4">

          {/* Prev button */}
          <button onClick={prev} disabled={page === 0}
            className="flex-shrink-0 w-10 h-10 rounded-xl border flex items-center justify-center transition-all disabled:opacity-20"
            style={{ borderColor: `${ACCENT}40`, color: ACCENT }}
            onMouseEnter={(e) => (e.currentTarget.style.background = `${ACCENT}15`)}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
          </button>

          {/* Slide pills — full width */}
          <div className="flex-1 flex items-center gap-2 overflow-x-auto no-scrollbar">
            {slides.map((s, i) => (
              <button key={s.id} onClick={() => goTo(i)}
                className="flex-shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                style={{
                  background: i === page ? ACCENT : "rgba(255,255,255,0.04)",
                  color: i === page ? "#0a0a0f" : "rgba(255,255,255,0.4)",
                  border: i < page ? `1px solid ${ACCENT}30` : "1px solid transparent",
                }}
              >
                {i < page && <CheckCircle2 className="w-3 h-3" style={{ color: i === page ? "#0a0a0f" : ACCENT }} />}
                <span>{s.label}</span>
              </button>
            ))}
          </div>

          {/* Next button */}
          <button onClick={next} disabled={page === slides.length - 1}
            className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm transition-all disabled:opacity-20"
            style={{ background: ACCENT, color: "#0a0a0f" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {page < slides.length - 1 ? slides[page + 1]?.label : "Done"}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="h-0.5 bg-white/5">
          <motion.div className="h-full" style={{ background: ACCENT }}
            animate={{ width: `${((page + 1) / slides.length) * 100}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }} />
        </div>
      </div>
    </div>
  );
}