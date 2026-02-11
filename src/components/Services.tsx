"use client";

import { ArrowUpRight, ArrowDown, Zap, TrendingUp } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const tags = [
  { label: "Multi-Asset", active: false },
  { label: "Automated", active: false },
  { label: "Institutional", active: true },
  { label: "Risk-Managed", active: false },
  { label: "Weekly Payouts", active: false },
  { label: "Cold Storage", active: false },
  { label: "24/7 Support", active: false },
];

export default function Services() {
  return (
    <section id="assets" className="section-padding relative overflow-hidden">
      <div className="aurora aurora-white top-[30%] right-[10%] w-[120px] md:w-[300px] h-[100px] md:h-[250px] opacity-[0.02] md:opacity-[0.04]" />

      <div className="max-w-[1400px] mx-auto relative z-10 px-5 md:px-0">
        {/* Section Header */}
        <AnimateOnScroll scale blur>
        <div className="text-center mb-10 md:mb-16">
          <div className="pill-gold mb-5 mx-auto">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            How It Works
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-5 tracking-tight">
            Your Capital, <span className="gold-text">Amplified</span>
          </h2>
          <p className="text-[#555] text-sm md:text-base max-w-xl mx-auto leading-relaxed px-2">
            From deposit to payout in three simple steps. Goldbridge handles the complexity
            so you can focus on what matters.
          </p>
        </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1} scale>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8 mb-8 md:mb-12">
          {/* Left - Recent Activity */}
          <div className="relative">
            <div className="glass p-4 md:p-6">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div>
                  <p className="text-[#555] text-[10px] uppercase tracking-[0.2em] mb-1">Portfolio Value</p>
                  <p className="text-white text-3xl md:text-4xl font-bold font-display">
                    R47,832<span className="text-[#D4AF37] text-lg">.50</span>
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <TrendingUp size={10} className="text-emerald-400" />
                  <span className="text-emerald-400 text-[10px] font-medium">+24.8%</span>
                </div>
              </div>

              {/* Transaction cards */}
              <div className="space-y-2.5 mb-6">
                <div className="tx-card">
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37]/8 flex items-center justify-center">
                    <ArrowUpRight size={12} className="text-[#D4AF37]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-xs font-medium">Payout Processed</p>
                    <p className="text-[#444] text-[10px]">Weekly distribution · 2h ago</p>
                  </div>
                  <div className="text-right">
                    <p className="text-emerald-400 text-xs font-medium">+R2,450.00</p>
                    <p className="text-[#444] text-[10px]">ZAR</p>
                  </div>
                </div>

                <div className="tx-card">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/8 flex items-center justify-center">
                    <ArrowDown size={12} className="text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-xs font-medium">Deposit Confirmed</p>
                    <p className="text-[#444] text-[10px]">Bank transfer · 3d ago</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white text-xs font-medium">R10,000.00</p>
                    <p className="text-[#444] text-[10px]">ZAR</p>
                  </div>
                </div>

                <div className="tx-card">
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37]/8 flex items-center justify-center">
                    <ArrowUpRight size={12} className="text-[#D4AF37]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-xs font-medium">Payout Processed</p>
                    <p className="text-[#444] text-[10px]">Weekly distribution · 9d ago</p>
                  </div>
                  <div className="text-right">
                    <p className="text-emerald-400 text-xs font-medium">+R1,890.00</p>
                    <p className="text-[#444] text-[10px]">ZAR</p>
                  </div>
                </div>
              </div>

              {/* Status labels */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span className="text-[#555] text-[10px]">Payouts</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-[#555] text-[10px]">Deposits</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/15" />
                  <span className="text-[#555] text-[10px]">Pending</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - 3 Steps */}
          <div className="glass p-4 md:p-6 flex flex-col justify-center">
            <div className="space-y-6">
              {[
                { step: "01", title: "Deposit", desc: "Fund your account with as little as R1,000 via bank transfer, crypto, or card." },
                { step: "02", title: "We Invest", desc: "Our algorithms allocate across crypto, indices, metals, and forex for optimal returns." },
                { step: "03", title: "Weekly Payout", desc: "Receive automated distributions every 7 days. Withdraw anytime, no lock-ups." },
              ].map((item, i) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    i === 1 ? "bg-[#D4AF37]/10 border border-[#D4AF37]/20" : "bg-white/[0.03] border border-white/[0.06]"
                  }`}>
                    {i === 1 ? (
                      <Zap size={16} className="text-[#D4AF37]" />
                    ) : (
                      <span className="text-[#555] text-[10px] font-bold">{item.step}</span>
                    )}
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-1">{item.title}</h4>
                    <p className="text-[#555] text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </AnimateOnScroll>

        {/* Tag pills row */}
        <AnimateOnScroll delay={0.2} direction="up">
        <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap px-2">
          {tags.map((tag) => (
            <span
              key={tag.label}
              className={tag.active ? "tag-pill-active" : "tag-pill"}
            >
              <span className="w-1 h-1 rounded-full bg-current" />
              {tag.label}
            </span>
          ))}
        </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
