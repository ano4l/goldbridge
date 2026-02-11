"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import CounterNumber from "./CounterNumber";

export default function About() {
  return (
    <section id="invest" className="section-padding relative">
      <div className="aurora aurora-gold top-[20%] left-[5%] w-[150px] md:w-[350px] h-[120px] md:h-[250px] opacity-[0.05] md:opacity-[0.1]" />

      <div className="max-w-[1400px] mx-auto relative z-10 px-5 md:px-0">
        {/* Section Header */}
        <AnimateOnScroll scale blur>
          <div className="text-center mb-10 md:mb-16">
            <div className="pill-gold mb-5 mx-auto">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              Portfolio Intelligence
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-5 tracking-tight">
              Institutional-Grade <span className="gold-text">Insights</span>
            </h2>
            <p className="text-[#555] text-sm md:text-base max-w-xl mx-auto leading-relaxed px-2">
              Our proprietary algorithms analyze thousands of data points in real-time,
              delivering the kind of portfolio intelligence once reserved for Wall Street.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Dashboard Card */}
        <AnimateOnScroll delay={0.1} scale>
        <div className="glass p-5 md:p-8 mb-6 md:mb-8 gold-shimmer">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {/* Left - Big stat */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-[#555] text-[10px] uppercase tracking-[0.2em] mb-3">Client Success Rate</p>
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="text-[56px] sm:text-[72px] md:text-[96px] font-bold text-white leading-none font-display">
                    <CounterNumber end={98.2} decimals={1} className="text-white" /><span className="text-[#D4AF37]">%</span>
                  </div>
                  <div className="flex flex-col gap-1 ml-2">
                    <div className="dot-gold" />
                  </div>
                </div>
                <p className="text-[#444] text-xs">Profitable portfolios across all market conditions</p>
              </div>

              {/* Mini chart bars */}
              <div className="flex items-end gap-2 h-28 mt-6">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 50].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm transition-all duration-500"
                    style={{
                      height: `${h}%`,
                      background: i >= 9
                        ? 'linear-gradient(180deg, rgba(212,175,55,0.6) 0%, rgba(212,175,55,0.2) 100%)'
                        : 'rgba(255,255,255,0.04)',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right - Portfolio breakdown */}
            <div>
              {/* Tab pills */}
              <div className="flex items-center gap-2 mb-6 flex-wrap">
                <span className="tag-pill-active">◆ Crypto</span>
                <span className="pill">▲ Indices</span>
                <span className="pill">● Metals</span>
                <span className="pill">◇ Forex</span>
              </div>

              {/* Info cards */}
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6">
                <div className="glass-subtle p-3 md:p-5">
                  <h4 className="text-white text-sm font-semibold mb-2">Diversified Allocation</h4>
                  <p className="text-[#555] text-xs leading-relaxed">
                    Multi-asset strategies spanning crypto, commodities, equities, and FX markets.
                  </p>
                </div>
                <div className="glass-subtle p-3 md:p-5">
                  <h4 className="text-white text-sm font-semibold mb-2">Risk Management</h4>
                  <p className="text-[#555] text-xs leading-relaxed">
                    Dynamic hedging and stop-loss protocols to protect your capital.
                  </p>
                </div>
              </div>

              {/* Stat numbers */}
              <div className="grid grid-cols-2 gap-4">
                <div className="stat-card">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1 h-4 bg-[#D4AF37] rounded-full" />
                    <span className="text-[#555] text-[10px] uppercase tracking-wider">Weekly Avg</span>
                  </div>
                  <p className="text-white text-3xl font-bold font-display"><CounterNumber end={24.8} decimals={1} /><span className="text-[#D4AF37] text-lg">%</span></p>
                  <p className="text-[#444] text-[10px] mt-1">Return on investment</p>
                </div>
                <div className="stat-card">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1 h-4 bg-white/15 rounded-full" />
                    <span className="text-[#555] text-[10px] uppercase tracking-wider">AUM Growth</span>
                  </div>
                  <p className="text-white text-3xl font-bold font-display"><CounterNumber end={340} decimals={0} /><span className="text-[#555] text-lg">%</span></p>
                  <p className="text-[#444] text-[10px] mt-1">Year over year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </AnimateOnScroll>

        {/* Bottom row */}
        <AnimateOnScroll delay={0.15} scale>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <div className="glass p-5 md:p-6">
            <h3 className="text-white text-base md:text-lg font-semibold mb-2 font-display">
              Curated Investment Opportunities
            </h3>
            <p className="text-[#555] text-sm leading-relaxed">
              Every position is vetted by our research team and validated by quantitative models
              before entering your portfolio.
            </p>
          </div>

          <div className="glass p-5 md:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-base md:text-lg font-semibold font-display">
                Asset Allocation · <span className="gold-text">Overview</span>
              </h3>
            </div>
            {/* Donut chart */}
            <div className="flex items-center gap-6">
              <div className="relative w-20 h-20">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="3" />
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#D4AF37" strokeWidth="3" strokeDasharray="35 65" strokeLinecap="round" />
                  <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(212,175,55,0.4)" strokeWidth="3" strokeDasharray="25 75" strokeDashoffset="-35" strokeLinecap="round" />
                  <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(212,175,55,0.2)" strokeWidth="3" strokeDasharray="20 80" strokeDashoffset="-60" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                    <span className="text-[#888] text-[10px]">Crypto</span>
                  </div>
                  <span className="text-white text-[10px] font-medium">35%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37]/50" />
                    <span className="text-[#888] text-[10px]">Indices</span>
                  </div>
                  <span className="text-white text-[10px] font-medium">25%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37]/25" />
                    <span className="text-[#888] text-[10px]">Metals & Forex</span>
                  </div>
                  <span className="text-white text-[10px] font-medium">40%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
