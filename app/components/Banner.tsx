import { ArrowUpRight } from "lucide-react";
import { THEME } from "../constants/theme"

export default function Banner() {

  const ACCENT = THEME.accent;

  return (
    <div className="rounded-3xl border border-white/10 bg-[#14141c] p-8 lg:p-10 mb-16">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <p
            className="text-xs font-mono uppercase tracking-[0.3em] mb-3"
            style={{ color: ACCENT }}
          >
            Ready to Start
          </p>

          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-4">
            Buy Bitcoin <br />
            Without The Stress.
          </h2>

          <p className="text-white/50 max-w-lg">
            Seamless card payments, fixed exchange rates,
            and direct wallet delivery — built for speed
            and trust.
          </p>
        </div>

        <div className="flex lg:justify-end">
          <button
            className="px-8 py-4 rounded-2xl font-bold text-[#0a0a0f] flex items-center gap-2 transition-all hover:opacity-90"
            style={{ background: ACCENT }}
          >
            Buy Bitcoin Now
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}