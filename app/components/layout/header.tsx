"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bitcoin,
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
  HelpCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { THEME } from "../../constants/theme";
import Image from "next/image";

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
  }
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
      <header
        className="fixed top-0 left-0 w-full z-50 border-b"
        style={{
          borderColor: `${ACCENT}15`,
          background: "rgba(10,10,15,0.92)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div
              className="flex items-center justify-center"
            >
              <Image
                src="/fluxPay1.png"
                alt="Flux Pay"
                width={40}
                height={40}
                className="rounded-lg"
              />
            </div>

            <span className="text-base font-bold tracking-tight">
              Flux Pay
            </span>
          </Link>

          {/* Desktop Nav */}
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

            {/* Company Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDesktopDropdown((prev) => !prev)}
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
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full right-0 mt-3 w-72 rounded-2xl border border-white/10 bg-[#14141f] p-2"
                    style={{
                      boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
                    }}
                  >
                    {[...companyLinks].map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/5 transition"
                      >
                        <div className="flex items-center gap-3">
                          <span style={{ color: ACCENT }}>
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
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/transactions"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold border border-white/10 text-white/80 hover:bg-white/5 transition-all"
            >
              Track Transaction
            </Link>

            <Link
              href="/buy-bitcoin"
              className="px-5 py-2.5 rounded-xl text-sm font-bold text-[#0a0a0f]"
              style={{ background: ACCENT }}
            >
              Buy Bitcoin
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2.5">
            <Link
              href="/buy-bitcoin"
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-[#0a0a0f]"
              style={{ background: ACCENT }}
            >
              Buy
            </Link>

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="w-9 h-9 rounded-xl border flex items-center justify-center"
              style={{
                borderColor: `${ACCENT}30`,
                color: ACCENT,
              }}
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

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 md:hidden bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 h-full z-50 md:hidden w-[80vw] max-w-sm bg-[#111118] border-l border-white/10 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 30,
              }}
            >
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <span className="font-bold">Flux<span className={`text-[${ACCENT}]`}>-Pay</span></span>
                  <button onClick={() => setMenuOpen(false)}>
                    <X className="w-5 h-5 text-white/50" />
                  </button>
                </div>
              </div>

              <div className="p-4 space-y-2">
                {mainNav.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span style={{ color: ACCENT }}>{item.icon}</span>
                      {item.label}
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/30" />
                  </Link>
                ))}

                {/* Company Group */}
                <GroupSection
                  title="Company"
                  open={mobileCompanyOpen}
                  setOpen={setMobileCompanyOpen}
                  links={companyLinks}
                  accent={ACCENT}
                  closeMenu={() => setMenuOpen(false)}
                />

                {/* Legal Group */}
                <GroupSection
                  title="Legal"
                  open={mobileLegalOpen}
                  setOpen={setMobileLegalOpen}
                  links={legalLinks}
                  accent={ACCENT}
                  closeMenu={() => setMenuOpen(false)}
                />
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
    <div className="rounded-2xl border border-white/10 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-4 flex items-center justify-between"
      >
        <span className="font-medium">{title}</span>
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
                className="flex items-center justify-between px-4 py-3 border-t border-white/5 hover:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span style={{ color: accent }}>{item.icon}</span>
                  <span className="text-sm">{item.label}</span>
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