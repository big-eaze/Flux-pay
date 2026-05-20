"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  Receipt,
  Headphones,
  BarChart3,
  Home,
  Info,
  Shield,
  FileText,
  Mail,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { THEME } from "../../constants/theme";

const mainNav = [
  {
    label: "Home",
    href: "/",
    icon: <Home className="w-4 h-4" />,
  },
  {
    label: "Rates",
    href: "/rates",
    icon: <BarChart3 className="w-4 h-4" />,
  },
  {
    label: "Transactions",
    href: "/transactions",
    icon: <Receipt className="w-4 h-4" />,
  },
];

const companyLinks = [
  {
    label: "About Us",
    href: "/about",
    icon: <Info className="w-4 h-4" />,
  },
  {
    label: "Security",
    href: "/security",
    icon: <Shield className="w-4 h-4" />,
  },
  {
    label: "Support",
    href: "/support",
    icon: <Headphones className="w-4 h-4" />,
  },
];

const legalLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
    icon: <Shield className="w-4 h-4" />,
  },
  {
    label: "Terms",
    href: "/terms",
    icon: <FileText className="w-4 h-4" />,
  },
  {
    label: "Contact Us",
    href: "/contact",
    icon: <Mail className="w-4 h-4" />,
  },
];

export default function Header() {
  const ACCENT = THEME.accent;

  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(false);

  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(true);
  const [mobileLegalOpen, setMobileLegalOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header
        className="fixed top-0 left-0 w-full z-[60] border-b"
        style={{
          borderColor: `${ACCENT}15`,
          background: "rgba(10,10,15,0.92)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-4 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/fluxPay1.png"
              alt="Flux Pay"
              width={42}
              height={42}
              className="rounded-xl"
            />

            <div className="leading-tight">
              <p className="font-bold tracking-tight text-white">
                Flux Pay
              </p>

              <p className="text-[10px] text-white/35 uppercase tracking-[0.2em]">
                BTC Checkout
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {mainNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-white/55 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}

            {/* COMPANY DROPDOWN */}
            <div className="relative">
              <button
                onClick={() =>
                  setDesktopDropdown((prev) => !prev)
                }
                className="flex items-center gap-2 text-sm font-medium text-white/55 hover:text-white transition-colors"
              >
                Company

                <ChevronDown
                  className={`w-4 h-4 transition-transform ${desktopDropdown ? "rotate-180" : ""
                    }`}
                />
              </button>

              <AnimatePresence>
                {desktopDropdown && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 8,
                      scale: 0.98,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: 8,
                      scale: 0.98,
                    }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full right-0 mt-3 w-72 rounded-2xl border border-white/10 bg-[#14141f] p-2 z-[100]"
                    style={{
                      boxShadow:
                        "0 20px 60px rgba(0,0,0,0.45)",
                    }}
                  >
                    {/* COMPANY */}
                    <div className="mb-2">
                      <p className="px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-white/30 font-mono">
                        Company
                      </p>

                      {companyLinks.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/5 transition"
                        >
                          <div className="flex items-center gap-3">
                            <span
                              style={{ color: ACCENT }}
                            >
                              {item.icon}
                            </span>

                            <span className="text-sm text-white/80">
                              {item.label}
                            </span>
                          </div>

                          <ChevronRight
                            className="w-4 h-4 opacity-30"
                            style={{ color: ACCENT }}
                          />
                        </Link>
                      ))}
                    </div>

                    {/* LEGAL */}
                    <div>
                      <p className="px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-white/30 font-mono">
                        Legal
                      </p>

                      {legalLinks.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/5 transition"
                        >
                          <div className="flex items-center gap-3">
                            <span
                              style={{ color: ACCENT }}
                            >
                              {item.icon}
                            </span>

                            <span className="text-sm text-white/80">
                              {item.label}
                            </span>
                          </div>

                          <ChevronRight
                            className="w-4 h-4 opacity-30"
                            style={{ color: ACCENT }}
                          />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/transactions"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold border border-white/10 text-white/80 hover:bg-white/5 transition-all"
            >
              Track Transaction
            </Link>

            <Link
              href="/buy-bitcoin"
              className="px-5 py-2.5 rounded-xl text-sm font-bold text-[#0a0a0f] transition-opacity hover:opacity-85"
              style={{
                background: ACCENT,
              }}
            >
              Buy Bitcoin
            </Link>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="flex md:hidden items-center gap-2.5 relative z-[90]">
            <Link
              href="/buy-bitcoin"
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-[#0a0a0f]"
              style={{
                background: ACCENT,
              }}
            >
              Buy
            </Link>

            <button
              onClick={() =>
                setMenuOpen((prev) => !prev)
              }
              className="w-10 h-10 rounded-xl border flex items-center justify-center active:scale-95 transition-all"
              style={{
                borderColor: `${ACCENT}30`,
                color: ACCENT,
                background: "rgba(255,255,255,0.02)",
              }}
              aria-label="Toggle Menu"
            >
              {menuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 z-[70] md:hidden"
              style={{
                background: "rgba(0,0,0,0.65)",
                backdropFilter: "blur(4px)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* DRAWER */}
            <motion.div
              className="fixed top-0 right-0 h-full z-[80] md:hidden w-[82vw] max-w-sm overflow-y-auto"
              style={{
                background: "rgba(14,14,20,0.98)",
                borderLeft: `1px solid ${ACCENT}15`,
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 30,
              }}
            >
              {/* HEADER */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/fluxPay1.png"
                      alt="Flux Pay"
                      width={36}
                      height={36}
                      className="rounded-lg"
                    />

                    <div>
                      <p className="font-bold text-white">
                        Flux Pay
                      </p>

                      <p className="text-[10px] text-white/35 uppercase tracking-[0.2em]">
                        BTC Checkout
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setMenuOpen(false)}
                    className="w-9 h-9 rounded-xl hover:bg-white/5 flex items-center justify-center"
                  >
                    <X className="w-5 h-5 text-white/50" />
                  </button>
                </div>
              </div>

              {/* NAV CONTENT */}
              <div className="p-4 space-y-3">
                {/* MAIN NAV */}
                <div className="space-y-1">
                  {mainNav.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-3 rounded-2xl hover:bg-white/5 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          style={{ color: ACCENT }}
                        >
                          {item.icon}
                        </span>

                        <span className="text-sm text-white/80">
                          {item.label}
                        </span>
                      </div>

                      <ChevronRight className="w-4 h-4 text-white/30" />
                    </Link>
                  ))}
                </div>

                {/* COMPANY */}
                <GroupSection
                  title="Company"
                  open={mobileCompanyOpen}
                  setOpen={setMobileCompanyOpen}
                  links={companyLinks}
                  accent={ACCENT}
                  closeMenu={() => setMenuOpen(false)}
                />

                {/* LEGAL */}
                <GroupSection
                  title="Legal"
                  open={mobileLegalOpen}
                  setOpen={setMobileLegalOpen}
                  links={legalLinks}
                  accent={ACCENT}
                  closeMenu={() => setMenuOpen(false)}
                />
              </div>

              {/* FOOTER CTA */}
              <div className="p-5 border-t border-white/10 mt-auto">
                <Link
                  href="/buy-bitcoin"
                  onClick={() => setMenuOpen(false)}
                  className="w-full flex items-center justify-center py-3.5 rounded-2xl text-sm font-black text-[#0a0a0f]"
                  style={{
                    background: ACCENT,
                  }}
                >
                  Buy Bitcoin
                </Link>

                <Link
                  href="/transactions"
                  onClick={() => setMenuOpen(false)}
                  className="w-full flex items-center justify-center py-3 mt-3 rounded-2xl border border-white/10 text-sm font-semibold text-white/75 hover:bg-white/5 transition-all"
                >
                  Track Transaction
                </Link>

                <p className="text-center text-[10px] text-white/25 font-mono mt-5 tracking-[0.25em]">
                  FAST • SECURE • BTC DELIVERY
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function GroupSection({
  title,
  open,
  setOpen,
  links,
  accent,
  closeMenu,
}: any) {
  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden bg-[#14141a]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-4 flex items-center justify-between"
      >
        <span className="font-medium text-white/85">
          {title}
        </span>

        <ChevronDown
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""
            }`}
          style={{ color: accent }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden"
          >
            {links.map((item: any) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="flex items-center justify-between px-4 py-3 border-t border-white/5 hover:bg-white/5 transition-all"
              >
                <div className="flex items-center gap-3">
                  <span style={{ color: accent }}>
                    {item.icon}
                  </span>

                  <span className="text-sm text-white/70">
                    {item.label}
                  </span>
                </div>

                <ChevronRight className="w-4 h-4 text-white/30" />
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}