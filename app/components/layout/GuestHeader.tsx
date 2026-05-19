import { Bitcoin } from "lucide-react";

export default function Header({goTo, slides}: any) {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 bg-gradient-to-br from-[#f7931a] to-[#e07b10] rounded-lg flex items-center justify-center">
          <Bitcoin className="w-4 h-4 text-[#0a0a0f]" />
        </div>
        <span className="text-sm font-bold tracking-tight">Flux Pay</span>
      </div>
      <button
        onClick={() => goTo(slides.length - 1)}
        className="px-4 py-2 bg-[#f7931a] text-[#0a0a0f] rounded-xl text-xs font-bold hover:bg-[#e07b10] transition"
      >
        Sign Up Free
      </button>
    </header>
  );
}