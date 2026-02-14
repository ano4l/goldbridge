"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, ArrowUpRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import CounterNumber from "./CounterNumber";

const tiers = [
  { name: "Starter", min: 1000, max: 9999, rate: 0.20, label: "20% /week" },
  { name: "Growth", min: 10000, max: 99999, rate: 0.25, label: "25% /week" },
  { name: "Premium", min: 100000, max: 1000000, rate: 0.30, label: "30% /week" },
];

const durations = [
  { weeks: 4, label: "1 Month" },
  { weeks: 12, label: "3 Months" },
  { weeks: 26, label: "6 Months" },
  { weeks: 52, label: "1 Year" },
];

export default function InvestmentCalculator() {
  const [amount, setAmount] = useState(10000);
  const [selectedTier, setSelectedTier] = useState(1);
  const [selectedDuration, setSelectedDuration] = useState(1);

  const tier = tiers[selectedTier];
  const duration = durations[selectedDuration];

  // Clamp amount to tier range
  const clampedAmount = Math.max(tier.min, Math.min(tier.max, amount));

  const projections = useMemo(() => {
    const weeklyReturn = clampedAmount * tier.rate;
    const totalReturn = weeklyReturn * duration.weeks;
    const totalValue = clampedAmount + totalReturn;
    const roi = (totalReturn / clampedAmount) * 100;

    // Build weekly growth data for the mini chart
    const chartData: number[] = [];
    let cumulative = clampedAmount;
    for (let w = 0; w <= duration.weeks; w++) {
      chartData.push(cumulative);
      cumulative += weeklyReturn;
    }

    return { weeklyReturn, totalReturn, totalValue, roi, chartData };
  }, [clampedAmount, tier.rate, duration.weeks]);

  // Mini growth chart
  const chartH = 120;
  const chartW = 400;
  const minVal = projections.chartData[0];
  const maxVal = projections.chartData[projections.chartData.length - 1];
  const range = maxVal - minVal || 1;
  const step = chartW / (projections.chartData.length - 1);
  const points = projections.chartData
    .map((v, i) => `${i * step},${chartH - ((v - minVal) / range) * (chartH - 10)}`)
    .join(" ");

  return (
    <section id="calculator" className="section-padding relative overflow-hidden">
      <div className="aurora aurora-gold top-[30%] left-[10%] w-[150px] md:w-[350px] h-[120px] md:h-[250px] opacity-[0.05] md:opacity-[0.1]" />

      <div className="max-w-[1400px] mx-auto relative z-10 px-5 md:px-0">
        {/* Header */}
        <AnimateOnScroll scale blur>
          <div className="text-center mb-10 md:mb-16">
            <div className="pill-gold mb-5 mx-auto">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] pulse-gold" />
              Return Calculator
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-5 tracking-tight">
              Project Your <span className="gold-text">Returns</span>
            </h2>
            <p className="text-[#555] text-sm md:text-base max-w-xl mx-auto leading-relaxed px-2">
              See how your investment could grow with Goldbridge Capital.
              Adjust the amount, tier, and timeframe to explore projections.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1} scale>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 md:gap-6">
            {/* Left — Controls */}
            <div className="lg:col-span-2 glass p-5 md:p-7 flex flex-col gap-6">
              {/* Investment Amount */}
              <div>
                <label className="text-[#555] text-[10px] uppercase tracking-[0.2em] mb-3 block">
                  Investment Amount
                </label>
                <div className="relative mb-3">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37] font-bold text-lg">R</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    min={tier.min}
                    max={tier.max}
                    inputMode="numeric"
                    className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl pl-9 pr-4 py-3.5 text-white text-[16px] sm:text-lg font-bold font-display outline-none focus:border-[#D4AF37]/30 transition-colors tabular-nums"
                  />
                </div>
                <input
                  type="range"
                  min={tier.min}
                  max={tier.max}
                  step={tier.min < 1000 ? 50 : tier.min < 10000 ? 500 : 1000}
                  value={clampedAmount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full accent-[#D4AF37] h-1 bg-white/[0.06] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#D4AF37] [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-[#D4AF37]/30"
                />
                <div className="flex justify-between mt-1.5">
                  <span className="text-[#444] text-[10px]">R{tier.min.toLocaleString()}</span>
                  <span className="text-[#444] text-[10px]">R{tier.max.toLocaleString()}</span>
                </div>
              </div>

              {/* Tier Selection */}
              <div>
                <label className="text-[#555] text-[10px] uppercase tracking-[0.2em] mb-3 block">
                  Investment Tier
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {tiers.map((t, i) => (
                    <button
                      key={t.name}
                      onClick={() => {
                        setSelectedTier(i);
                        setAmount(Math.max(t.min, Math.min(t.max, amount)));
                      }}
                      className={`py-3 px-2 rounded-xl text-center transition-all duration-300 border ${
                        selectedTier === i
                          ? "bg-[#D4AF37]/10 border-[#D4AF37]/25 text-[#D4AF37]"
                          : "bg-white/[0.02] border-white/[0.06] text-[#666] hover:border-white/[0.1]"
                      }`}
                    >
                      <span className="text-xs font-semibold block">{t.name}</span>
                      <span className="text-[10px] mt-0.5 block opacity-70">{t.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration Selection */}
              <div>
                <label className="text-[#555] text-[10px] uppercase tracking-[0.2em] mb-3 block">
                  Time Period
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {durations.map((d, i) => (
                    <button
                      key={d.label}
                      onClick={() => setSelectedDuration(i)}
                      className={`py-2.5 px-2 rounded-xl text-center transition-all duration-300 border ${
                        selectedDuration === i
                          ? "bg-[#D4AF37]/10 border-[#D4AF37]/25 text-[#D4AF37]"
                          : "bg-white/[0.02] border-white/[0.06] text-[#666] hover:border-white/[0.1]"
                      }`}
                    >
                      <span className="text-[11px] font-medium">{d.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-[#333] text-[9px] leading-relaxed mt-auto">
                * Projected returns are estimates based on historical performance and are not guaranteed.
                Past performance does not guarantee future results.
              </p>
            </div>

            {/* Right — Results */}
            <div className="lg:col-span-3 glass-gold p-5 md:p-7 gold-shimmer">
              {/* Top stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-[#555] text-[10px] uppercase tracking-[0.2em] mb-1.5">Weekly Return</p>
                  <motion.p
                    key={projections.weeklyReturn}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-emerald-400 text-2xl md:text-3xl font-bold font-display"
                  >
                    +R{projections.weeklyReturn.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </motion.p>
                  <p className="text-[#444] text-[10px] mt-0.5">Every 7 days</p>
                </div>
                <div>
                  <p className="text-[#555] text-[10px] uppercase tracking-[0.2em] mb-1.5">Total ROI</p>
                  <motion.p
                    key={projections.roi}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[#D4AF37] text-2xl md:text-3xl font-bold font-display"
                  >
                    {projections.roi.toFixed(0)}%
                  </motion.p>
                  <p className="text-[#444] text-[10px] mt-0.5">Over {duration.label.toLowerCase()}</p>
                </div>
              </div>

              {/* Growth Chart */}
              <div className="glass-subtle p-4 rounded-xl mb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={12} className="text-[#D4AF37]" />
                    <span className="text-[#888] text-[10px] uppercase tracking-wider">Projected Growth</span>
                  </div>
                  <span className="text-[#D4AF37] text-[10px] font-medium">{duration.weeks} weeks</span>
                </div>
                <svg
                  viewBox={`0 0 ${chartW} ${chartH}`}
                  className="w-full h-[100px] md:h-[120px]"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="calcGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Grid lines */}
                  {[0.25, 0.5, 0.75].map((pct) => (
                    <line
                      key={pct}
                      x1="0"
                      y1={chartH * pct}
                      x2={chartW}
                      y2={chartH * pct}
                      stroke="rgba(255,255,255,0.03)"
                      strokeWidth="1"
                    />
                  ))}
                  <polygon
                    points={`0,${chartH} ${points} ${chartW},${chartH}`}
                    fill="url(#calcGrad)"
                  />
                  <polyline
                    points={points}
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* End dot */}
                  {projections.chartData.length > 0 && (
                    <circle
                      cx={chartW}
                      cy={chartH - ((projections.chartData[projections.chartData.length - 1] - minVal) / range) * (chartH - 10)}
                      r="4"
                      fill="#D4AF37"
                      className="animate-pulse"
                    />
                  )}
                </svg>
              </div>

              {/* Bottom summary */}
              <div className="grid grid-cols-3 gap-3">
                <div className="glass-subtle p-3 rounded-xl text-center">
                  <p className="text-[#555] text-[9px] uppercase tracking-wider mb-1">Invested</p>
                  <p className="text-white text-sm md:text-base font-bold font-display">
                    R{clampedAmount.toLocaleString()}
                  </p>
                </div>
                <div className="glass-subtle p-3 rounded-xl text-center">
                  <p className="text-[#555] text-[9px] uppercase tracking-wider mb-1">Total Return</p>
                  <motion.p
                    key={projections.totalReturn}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-emerald-400 text-sm md:text-base font-bold font-display"
                  >
                    +R{projections.totalReturn.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </motion.p>
                </div>
                <div className="glass-subtle p-3 rounded-xl text-center">
                  <p className="text-[#555] text-[9px] uppercase tracking-wider mb-1">Total Value</p>
                  <motion.p
                    key={projections.totalValue}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[#D4AF37] text-sm md:text-base font-bold font-display"
                  >
                    R{projections.totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </motion.p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                <a href="#pricing" className="btn-gold gap-2 px-6 py-3 text-sm w-full sm:w-auto justify-center">
                  Start With R{clampedAmount.toLocaleString()}
                  <ArrowUpRight size={14} />
                </a>
                <p className="text-[#444] text-[10px]">No lock-ups · Withdraw anytime</p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
