"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Bitcoin, ChevronDown, Wallet, ArrowRightLeft,
  CheckCircle2, CreditCard, X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/app/components/layout/header";
import { THEME } from "@/app/constants/theme";

/* ─────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────── */
const ACCENT = THEME.accent;

const COUNTRIES = [
  { name: "United States", flag: "🇺🇸", currency: "USD", symbol: "$", rate: 65_000 },
  { name: "United Kingdom", flag: "🇬🇧", currency: "GBP", symbol: "£", rate: 51_000 },
  { name: "Canada", flag: "🇨🇦", currency: "CAD", symbol: "C$", rate: 88_000 },
  { name: "Australia", flag: "🇦🇺", currency: "AUD", symbol: "A$", rate: 99_000 },
  { name: "Germany", flag: "🇩🇪", currency: "EUR", symbol: "€", rate: 60_000 },
  { name: "France", flag: "🇫🇷", currency: "EUR", symbol: "€", rate: 60_000 },
  { name: "Netherlands", flag: "🇳🇱", currency: "EUR", symbol: "€", rate: 60_000 },
  { name: "Spain", flag: "🇪🇸", currency: "EUR", symbol: "€", rate: 60_000 },
  { name: "Italy", flag: "🇮🇹", currency: "EUR", symbol: "€", rate: 60_000 },
  { name: "Portugal", flag: "🇵🇹", currency: "EUR", symbol: "€", rate: 60_000 },
  { name: "Belgium", flag: "🇧🇪", currency: "EUR", symbol: "€", rate: 60_000 },
  { name: "Ireland", flag: "🇮🇪", currency: "EUR", symbol: "€", rate: 60_000 },
  { name: "Switzerland", flag: "🇨🇭", currency: "CHF", symbol: "CHF", rate: 58_000 },
  { name: "Sweden", flag: "🇸🇪", currency: "SEK", symbol: "kr", rate: 690_000 },
  { name: "Norway", flag: "🇳🇴", currency: "NOK", symbol: "kr", rate: 710_000 },
  { name: "Denmark", flag: "🇩🇰", currency: "DKK", symbol: "kr", rate: 447_000 },
  { name: "Poland", flag: "🇵🇱", currency: "PLN", symbol: "zł", rate: 258_000 },
  { name: "South Africa", flag: "🇿🇦", currency: "ZAR", symbol: "R", rate: 1_180_000 },
  { name: "Kenya", flag: "🇰🇪", currency: "KES", symbol: "KSh", rate: 8_400_000 },
  { name: "Ghana", flag: "🇬🇭", currency: "GHS", symbol: "₵", rate: 980_000 },
  { name: "India", flag: "🇮🇳", currency: "INR", symbol: "₹", rate: 5_400_000 },
  { name: "Pakistan", flag: "🇵🇰", currency: "PKR", symbol: "₨", rate: 18_200_000 },
  { name: "United Arab Emirates", flag: "🇦🇪", currency: "AED", symbol: "د.إ", rate: 238_000 },
  { name: "Saudi Arabia", flag: "🇸🇦", currency: "SAR", symbol: "﷼", rate: 244_000 },
  { name: "Turkey", flag: "🇹🇷", currency: "TRY", symbol: "₺", rate: 2_100_000 },
  { name: "Singapore", flag: "🇸🇬", currency: "SGD", symbol: "S$", rate: 87_000 },
  { name: "Nigeria", flag: "🇳🇬", currency: "NGN", symbol: "₦", rate: 102_450_000 },
  { name: "Japan", flag: "🇯🇵", currency: "JPY", symbol: "¥", rate: 10_200_000 },
  { name: "South Korea", flag: "🇰🇷", currency: "KRW", symbol: "₩", rate: 89_000_000 },
  { name: "Hong Kong", flag: "🇭🇰", currency: "HKD", symbol: "HK$", rate: 510_000 },
  { name: "Brazil", flag: "🇧🇷", currency: "BRL", symbol: "R$", rate: 360_000 },
  { name: "Mexico", flag: "🇲🇽", currency: "MXN", symbol: "$", rate: 1_100_000 },
  { name: "Argentina", flag: "🇦🇷", currency: "ARS", symbol: "$", rate: 70_000_000 },
  { name: "Chile", flag: "🇨🇱", currency: "CLP", symbol: "$", rate: 61_000_000 },
  { name: "Colombia", flag: "🇨🇴", currency: "COP", symbol: "$", rate: 255_000_000 },
  { name: "New Zealand", flag: "🇳🇿", currency: "NZD", symbol: "NZ$", rate: 106_000 },

] as const;

type Country = (typeof COUNTRIES)[number];

const FEATURES = [
  "Fixed exchange rates",
  "Secure payment gateway",
  "Wallet verification protection",
  "Instant BTC delivery",
];

const SERVICE_FEE_RATE = 0.015;
const NETWORK_FEE_RATE = 0.005;

/* ─────────────────────────────────────────
   HELPERS
───────────────────────────────────────── */
function fmt(n: number) {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

function calcBtc(amount: number, rate: number) {
  if (!amount || !rate) return "0.000000";
  return (amount / rate).toFixed(6);
}

/* ─────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────── */

/** Thin section card */
function Panel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-white/8 bg-[#14141f] ${className}`}>
      {children}
    </div>
  );
}

/** Label above a field */
function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/35 mb-2.5">
      {children}
    </p>
  );
}

/** Row in the summary */
function SummaryRow({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-white/50">{label}</span>
      <span className={accent ? "font-black" : "text-white/80"} style={accent ? { color: ACCENT } : undefined}>
        {value}
      </span>
    </div>
  );
}

/** Country dropdown */
function CountrySelect({
  value,
  onChange,
}: {
  value: Country;
  onChange: (c: Country) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    if (!open) return;
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between rounded-xl border border-white/8 bg-[#101018] px-4 py-3.5 hover:border-white/15 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-xl leading-none">{value.flag}</span>
          <div className="text-left">
            <p className="text-sm font-semibold leading-none">{value.name}</p>
            <p className="text-xs text-white/40 mt-0.5">{value.currency}</p>
          </div>
        </div>
        <ChevronDown
          className="w-4 h-4 text-white/30 transition-transform"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-2 rounded-2xl border border-white/10 bg-[#14141f] overflow-hidden z-30"
            style={{
              boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
            }}
          >
            {/* Scrollable wrapper */}
            <div className="max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {COUNTRIES.map((c, i) => (
                <button
                  key={i + 1}
                  onClick={() => {
                    onChange(c);
                    setOpen(false);
                  }}
                  className="w-full flex items-center justify-between px-4 py-3.5 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg leading-none">{c.flag}</span>

                    <div className="text-left">
                      <p className="text-sm font-medium">{c.name}</p>
                      <p className="text-xs text-white/40">{c.currency}</p>
                    </div>
                  </div>

                  {c.currency === value.currency && (
                    <CheckCircle2
                      className="w-4 h-4"
                      style={{ color: ACCENT }}
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="text-[11px] text-white/30 font-mono mt-2">
        1 BTC ≈ {value.symbol}{fmt(value.rate)}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────── */
export default function BuyBitcoinPage() {
  const [country, setCountry] = useState<Country>(COUNTRIES[1]);
  const [rawAmount, setRawAmount] = useState("100");
  const [wallet, setWallet] = useState("");

  const QUICK_AMOUNTS = useMemo(
    () => (country.currency === "USD" ? ["100", "500", "1000", "5000"] :
      country.currency === "GBP" ? ["100", "250", "500", "1000"] :
        ["50000", "100000", "250000", "500000"]),
    [country.currency]
  );

  const amount = useMemo(() => Math.max(0, Number(rawAmount.replace(/,/g, "")) || 0), [rawAmount]);

  const btcAmount = useMemo(() => calcBtc(amount, country.rate), [amount, country.rate]);

  const fees = useMemo(() => {
    const service = Math.round(amount * SERVICE_FEE_RATE);
    const network = Math.round(amount * NETWORK_FEE_RATE);
    return { service, network, total: amount + service + network };
  }, [amount]);

  const walletValid = wallet.length > 25;

  function handleCountryChange(c: Country) {
    setCountry(c);
    setRawAmount(QUICK_AMOUNTS[2]); // reset to a sensible default
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Header />

      <main className="max-w-350 mx-auto px-5 lg:px-10 pt-28 pb-24">
        <div className="grid lg:grid-cols-[1fr_480px] gap-12 items-start">

          {/* ── LEFT: Hero ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-5" style={{ color: ACCENT }}>
              Bitcoin Checkout
            </p>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-black leading-[1.05] mb-5">
              Convert Cash.<br />
              <span style={{ color: ACCENT }}>Receive Bitcoin.</span>
            </h1>

            <p className="text-white/50 text-base md:text-lg max-w-md mb-10 leading-relaxed">
              Buy Bitcoin securely using your local currency and send directly
              to your wallet — fast, protected, and simple.
            </p>

            <div className="space-y-3 mb-12">
              {FEATURES.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: ACCENT }} />
                  <span className="text-white/65 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Live rate display */}
            <Panel className="p-4 flex items-center justify-between max-w-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${ACCENT}15` }}>
                  <Bitcoin className="w-4 h-4" style={{ color: ACCENT }} />
                </div>
                <div>
                  <p className="text-[10px] text-white/35 font-mono uppercase tracking-wider">Live Rate</p>
                  <p className="text-sm font-bold">1 BTC = {country.symbol}{fmt(country.rate)}</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: ACCENT }} />
                <span className="text-[10px] text-white/35 font-mono">LIVE</span>
              </div>
            </Panel>
          </motion.div>

          {/* ── RIGHT: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4"
          >

            {/* ① Country & amount */}
            <Panel className="p-5 space-y-5">
              <div>
                <FieldLabel>Country & Currency</FieldLabel>
                <CountrySelect value={country} onChange={handleCountryChange} />
              </div>

              <div className="h-px bg-white/5" />

              <div>
                <FieldLabel>Amount to Convert</FieldLabel>
                <div className="rounded-xl border border-white/8 bg-[#101018] px-4 py-4 focus-within:border-white/20 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-black text-white/30 shrink-0">{country.symbol}</span>
                    <input
                      value={rawAmount}
                      onChange={(e) => setRawAmount(e.target.value.replace(/[^0-9]/g, ""))}
                      className="bg-transparent outline-none text-3xl font-black w-full min-w-0"
                      inputMode="numeric"
                      placeholder="0"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
                    {QUICK_AMOUNTS.map((v) => (
                      <button
                        key={v}
                        onClick={() => setRawAmount(v)}
                        className="px-3.5 py-1.5 rounded-lg border text-xs font-semibold transition-all"
                        style={{
                          borderColor: rawAmount === v ? `${ACCENT}50` : "rgba(255,255,255,0.08)",
                          color: rawAmount === v ? ACCENT : "rgba(255,255,255,0.5)",
                          background: rawAmount === v ? `${ACCENT}10` : "transparent",
                        }}
                      >
                        {country.symbol}{Number(v).toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Panel>

            {/* ② Conversion result */}
            <Panel className="px-5 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl border border-white/8 flex items-center justify-center shrink-0" style={{ background: `${ACCENT}10` }}>
                    <ArrowRightLeft className="w-4 h-4" style={{ color: ACCENT }} />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/35 font-mono uppercase tracking-wider mb-0.5">You Receive</p>
                    <p className="text-xl font-black">{btcAmount} <span className="text-white/40 text-base font-semibold">BTC</span></p>
                  </div>
                </div>
                <Bitcoin className="w-6 h-6 opacity-25" style={{ color: ACCENT }} />
              </div>
            </Panel>

            {/* ③ Wallet + Payment info */}
            <Panel className="p-5 space-y-5">
              <div>
                <FieldLabel>Destination Wallet</FieldLabel>
                <div className="relative rounded-xl border border-white/8 bg-[#101018] px-4 py-3.5 flex items-center gap-3 focus-within:border-white/20 transition-colors">
                  <Wallet className="w-4 h-4 text-white/30 shrink-0" />
                  <input
                    value={wallet}
                    onChange={(e) => setWallet(e.target.value)}
                    placeholder="Paste BTC wallet address"
                    className="bg-transparent outline-none flex-1 text-sm min-w-0 placeholder-white/25"
                  />
                  {wallet.length > 0 && (
                    <button onClick={() => setWallet("")} className="text-white/25 hover:text-white/60 transition-colors shrink-0">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
                <p className="text-[11px] text-white/30 mt-2">
                  Always verify addresses carefully. Bitcoin transactions cannot be reversed.
                </p>
              </div>

              <div className="h-px bg-white/5" />

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center" style={{ background: `${ACCENT}12` }}>
                  <CreditCard className="w-4 h-4" style={{ color: ACCENT }} />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">Secure Checkout</p>
                  <p className="text-xs text-white/45 leading-relaxed">
                    You&apos;ll be redirected to our secure payment gateway. Your card details are never stored on our servers.
                  </p>
                </div>
              </div>
            </Panel>

            {/* ④ Summary + CTA */}
            <Panel className="p-5">
              <p className="text-xs font-mono uppercase tracking-widest text-white/35 mb-4">Purchase Summary</p>

              <div className="space-y-2.5 mb-4">
                <SummaryRow label="Amount" value={`${country.symbol}${fmt(amount)}`} />
                <SummaryRow label={`Service Fee (${(SERVICE_FEE_RATE * 100).toFixed(1)}%)`} value={`${country.symbol}${fmt(fees.service)}`} />
                <SummaryRow label={`Network Fee (${(NETWORK_FEE_RATE * 100).toFixed(1)}%)`} value={`${country.symbol}${fmt(fees.network)}`} />
              </div>

              <div className="flex items-center justify-between py-3 border-t border-white/8 mb-5">
                <span className="text-sm font-bold">Total</span>
                <span className="text-base font-black" style={{ color: ACCENT }}>{country.symbol}{fmt(fees.total)}</span>
              </div>

              <button
                disabled={!amount || !walletValid}
                className="w-full py-4 rounded-2xl font-black text-[#0a0a0f] text-sm transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-35 disabled:cursor-not-allowed"
                style={{ background: ACCENT }}
              >
                Continue to Secure Checkout
              </button>

              {!walletValid && wallet.length > 0 && (
                <p className="text-center text-xs text-red-400/80 mt-2">
                  Please enter a valid Bitcoin wallet address.
                </p>
              )}
              {!wallet && (
                <p className="text-center text-[11px] text-white/25 mt-2">
                  Enter a wallet address to continue.
                </p>
              )}
            </Panel>

          </motion.div>
        </div>
      </main>
    </div>
  );
}