"use client";

import { TrendingUp, Shield, Zap, PieChart, Lock, Headphones } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import TiltCard from "./TiltCard";

const features = [
  {
    icon: TrendingUp,
    title: "Algorithmic Growth Engine",
    description: "Proprietary algorithms scan 200+ instruments to identify high-conviction opportunities in real-time.",
    bars: [35, 50, 42, 68, 55, 78, 62, 85, 70, 92, 80, 95],
  },
  {
    icon: Shield,
    title: "Institutional Security",
    description: "Bank-grade encryption, multi-signature wallets, and segregated client accounts for absolute protection.",
    bars: [60, 65, 58, 72, 68, 75, 70, 78, 74, 80, 76, 82],
  },
  {
    icon: Zap,
    title: "7-Day Payout Cycle",
    description: "Automated weekly distributions directly to your wallet. No lock-ups, no hidden fees, no delays.",
    bars: [40, 55, 48, 65, 58, 72, 65, 80, 72, 88, 78, 90],
  },
  {
    icon: PieChart,
    title: "Multi-Asset Diversification",
    description: "Strategic allocation across crypto, indices, precious metals, and forex for optimal risk-adjusted returns.",
    bars: [50, 45, 55, 48, 60, 52, 65, 58, 70, 62, 75, 68],
  },
  {
    icon: Lock,
    title: "Cold Storage Custody",
    description: "95% of assets held in air-gapped cold storage with geographic redundancy across three continents.",
    bars: [70, 72, 68, 75, 71, 78, 74, 80, 76, 82, 78, 85],
  },
  {
    icon: Headphones,
    title: "White-Glove Support",
    description: "Dedicated relationship managers for Premium clients. 24/7 priority support across all tiers.",
    bars: [45, 52, 48, 58, 54, 65, 60, 72, 68, 78, 74, 82],
  },
];

export default function Performance() {
  return (
    <section id="features" className="section-padding relative">
      <div className="aurora aurora-gold top-[40%] right-[5%] w-[120px] md:w-[300px] h-[100px] md:h-[250px] opacity-[0.05] md:opacity-[0.1]" />

      <div className="max-w-[1400px] mx-auto relative z-10 px-5 md:px-0">
        {/* Section Header */}
        <AnimateOnScroll scale blur>
        <div className="text-center mb-10 md:mb-16">
          <div className="pill-gold mb-5 mx-auto">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            Why Goldbridge
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-5 tracking-tight">
            Engineered for <span className="gold-text">Excellence</span>
          </h2>
          <p className="text-[#555] text-sm md:text-base max-w-xl mx-auto leading-relaxed px-2">
            Every aspect of Goldbridge Capital is designed to deliver consistent,
            risk-managed returns for the discerning investor.
          </p>
        </div>
        </AnimateOnScroll>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {features.map((feature, index) => (
            <AnimateOnScroll key={feature.title} delay={index * 0.07} scale>
            <TiltCard>
            <div className="glass p-4 md:p-6 group hover:-translate-y-1 transition-all duration-500">
              {/* Mini chart visual */}
              <div className="mb-5 h-20 flex items-end gap-1">
                {feature.bars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm transition-all duration-500"
                    style={{
                      height: `${h}%`,
                      background:
                        i > 8
                          ? "linear-gradient(180deg, rgba(212,175,55,0.5) 0%, rgba(212,175,55,0.15) 100%)"
                          : "rgba(255,255,255,0.03)",
                    }}
                  />
                ))}
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/[0.06] border border-[#D4AF37]/[0.1] flex items-center justify-center flex-shrink-0 group-hover:border-[#D4AF37]/25 group-hover:bg-[#D4AF37]/[0.1] transition-all duration-500">
                  <feature.icon size={15} className="text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-semibold mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-[#555] text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
            </TiltCard>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
