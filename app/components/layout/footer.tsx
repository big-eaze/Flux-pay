import {
  Bitcoin,
  ShieldCheck,
  Mail,
  Globe,
  Clock3,
} from "lucide-react";
import { THEME } from "../../constants/theme";
import Banner from "../Banner";
import Image from "next/image";

interface FooterProps {
  open?: boolean;
}

export default function Footer({ open }: FooterProps) {
  const ACCENT = THEME.accent;

  const footerLinks = {
    Product: [
      "Buy Bitcoin",
      "Live Rates",
      "Transactions"
    ],
    Company: [
      "About Us",
      "Security",
      "Support",
      "Terms",
    ],
    Resources: [
      "FAQs",
      "Privacy Policy",
      "Contact",
    ],
  };

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-[#0d0d12] overflow-hidden">

      <div className="max-w-350 mx-auto px-6 lg:px-10 py-20 relative z-10">
        {/* TOP CTA STRIP */}
        {
          open && <Banner />
        }

        {/* MAIN FOOTER */}
        <div className="grid lg:grid-cols-5 gap-12">
          {/* BRAND */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-1 mb-5">
              <div
                className="w-16 h-16 flex items-center justify-center"
              >
                <Image
                  src={"/fluxPay1.png"}
                  alt="brand logo"
                  width={30}
                  height={30}
                />
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  Flux Pay
                </h3>
                <p className="text-white/35 text-sm">
                  Secure Bitcoin Checkout
                </p>
              </div>
            </div>

            <p className="text-white/45 leading-relaxed max-w-md mb-8">
              The easiest way to convert cash into Bitcoin and
              send directly to your wallet securely, instantly,
              and without crypto complexity.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/55 text-sm">
                <ShieldCheck
                  className="w-4 h-4"
                  style={{ color: ACCENT }}
                />
                PCI-DSS secured payments
              </div>

              <div className="flex items-center gap-3 text-white/55 text-sm">
                <Globe
                  className="w-4 h-4"
                  style={{ color: ACCENT }}
                />
                Available globally
              </div>

              <div className="flex items-center gap-3 text-white/55 text-sm">
                <Clock3
                  className="w-4 h-4"
                  style={{ color: ACCENT }}
                />
                Instant transaction delivery
              </div>
            </div>
          </div>

          {/* LINK COLUMNS */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-white/80">
                {title}
              </h4>

              <div className="space-y-3">
                {links.map((link) => (
                  <button
                    key={link}
                    className="block text-sm text-white/45 hover:text-white transition-all"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © 2026 Flux Pay. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button className="text-white/35 hover:text-white text-sm transition-all">
              Terms
            </button>

            <button className="text-white/35 hover:text-white text-sm transition-all">
              Privacy
            </button>

            <button className="flex items-center gap-2 text-white/35 hover:text-white text-sm transition-all">
              <Mail className="w-4 h-4" />
              Support
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}