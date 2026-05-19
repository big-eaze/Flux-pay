import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import { BuyBitcoinHero, RecentPurchases, Security, SimpleFlow, Support, TrustStrip } from "./components/sections/home";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Header />

      <main className="max-w-350 mx-auto px-6 lg:px-10 pt-28 pb-20 space-y-8">

        <BuyBitcoinHero />

        <TrustStrip />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SimpleFlow />
          <RecentPurchases />
        </div>

        <Security />

        <Support />

      </main>
      <Footer open={true} />
    </div>
  );
}