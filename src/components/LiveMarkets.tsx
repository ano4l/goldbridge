"use client";

import { TrendingUp, TrendingDown } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const markets = [
  {
    category: "Crypto",
    pairs: [
      { symbol: "BTC/USD", name: "Bitcoin", price: "97,842.50", change: "+2.34", up: true, spark: [40, 38, 42, 45, 43, 48, 52, 50, 55, 58, 56, 62, 65, 63, 68, 72] },
      { symbol: "ETH/USD", name: "Ethereum", price: "3,456.80", change: "+1.87", up: true, spark: [35, 38, 36, 40, 42, 39, 44, 48, 46, 50, 52, 55, 53, 58, 60, 62] },
      { symbol: "SOL/USD", name: "Solana", price: "198.45", change: "+5.12", up: true, spark: [30, 28, 35, 40, 38, 45, 50, 48, 55, 60, 58, 65, 70, 68, 75, 78] },
    ],
  },
  {
    category: "Indices",
    pairs: [
      { symbol: "S&P 500", name: "US Large Cap", price: "6,012.45", change: "+0.42", up: true, spark: [50, 52, 51, 53, 55, 54, 56, 58, 57, 59, 60, 62, 61, 63, 64, 65] },
      { symbol: "NASDAQ", name: "US Tech", price: "19,234.80", change: "+0.78", up: true, spark: [45, 48, 46, 50, 52, 51, 55, 58, 56, 60, 62, 64, 63, 66, 68, 70] },
      { symbol: "FTSE 100", name: "UK Index", price: "8,456.30", change: "-0.15", up: false, spark: [60, 58, 62, 60, 57, 55, 58, 56, 54, 52, 55, 53, 50, 52, 48, 50] },
    ],
  },
  {
    category: "Metals",
    pairs: [
      { symbol: "XAU/USD", name: "Gold", price: "2,687.40", change: "+0.92", up: true, spark: [50, 52, 54, 53, 56, 58, 60, 59, 62, 64, 63, 66, 68, 67, 70, 72] },
      { symbol: "XAG/USD", name: "Silver", price: "31.24", change: "+1.45", up: true, spark: [40, 42, 44, 43, 46, 48, 50, 52, 51, 54, 56, 58, 57, 60, 62, 64] },
      { symbol: "XPT/USD", name: "Platinum", price: "982.60", change: "-0.38", up: false, spark: [55, 53, 56, 54, 52, 50, 53, 51, 48, 50, 47, 49, 46, 48, 45, 44] },
    ],
  },
  {
    category: "Forex",
    pairs: [
      { symbol: "EUR/USD", name: "Euro", price: "1.0842", change: "+0.12", up: true, spark: [48, 50, 49, 52, 54, 53, 55, 57, 56, 58, 60, 59, 61, 63, 62, 64] },
      { symbol: "GBP/USD", name: "British Pound", price: "1.2634", change: "+0.08", up: true, spark: [50, 52, 51, 53, 52, 54, 56, 55, 57, 58, 60, 59, 61, 60, 62, 63] },
      { symbol: "USD/JPY", name: "Japanese Yen", price: "154.82", change: "-0.24", up: false, spark: [65, 63, 66, 64, 62, 60, 63, 61, 58, 60, 57, 59, 56, 58, 55, 54] },
    ],
  },
];

function Sparkline({ data, up }: { data: number[]; up: boolean }) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const h = 32;
  const w = 80;
  const step = w / (data.length - 1);

  const points = data
    .map((v, i) => `${i * step},${h - ((v - min) / range) * h}`)
    .join(" ");

  const color = up ? "#D4AF37" : "#ef4444";
  const gradientId = `spark-${data[0]}-${up}`;

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="flex-shrink-0">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polygon
        points={`0,${h} ${points} ${w},${h}`}
        fill={`url(#${gradientId})`}
      />
    </svg>
  );
}

export default function LiveMarkets() {
  return (
    <section id="markets" className="section-padding relative overflow-hidden">
      {/* Aurora */}
      <div className="aurora aurora-gold top-[30%] right-[10%] w-[150px] md:w-[400px] h-[120px] md:h-[300px] opacity-[0.05] md:opacity-[0.1]" />

      <div className="max-w-[1400px] mx-auto relative z-10 px-5 md:px-0">
        <AnimateOnScroll scale blur>
          <div className="text-center mb-10 md:mb-16">
            <div className="pill-gold mb-5 mx-auto">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] pulse-gold" />
              Live Market Data
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-5 tracking-tight">
              Markets We <span className="gold-text">Monitor</span>
            </h2>
            <p className="text-[#555] text-sm md:text-base max-w-lg mx-auto leading-relaxed px-2">
              Real-time pricing across the asset classes powering your Goldbridge portfolio.
              Our algorithms scan 200+ instruments 24/7.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Market Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {markets.map((group, gi) => (
            <AnimateOnScroll key={group.category} delay={gi * 0.08} scale>
              <div className="glass p-4 md:p-6">
                {/* Category Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                    <h3 className="text-white text-sm font-semibold tracking-wide uppercase">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-[#444] text-[10px] tracking-wider uppercase">24h</span>
                </div>

                {/* Pairs */}
                <div className="space-y-2">
                  {group.pairs.map((pair) => (
                    <div key={pair.symbol} className="market-card group">
                      {/* Left - Symbol */}
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-semibold truncate">
                          {pair.symbol}
                        </p>
                        <p className="text-[#555] text-[10px] mt-0.5">{pair.name}</p>
                      </div>

                      {/* Center - Sparkline */}
                      <div className="flex-shrink-0">
                        <Sparkline data={pair.spark} up={pair.up} />
                      </div>

                      {/* Right - Price & Change */}
                      <div className="text-right min-w-[70px] sm:min-w-[90px]">
                        <p className="text-white text-sm font-semibold tabular-nums">
                          {pair.price}
                        </p>
                        <div className={`flex items-center justify-end gap-1 mt-0.5 ${
                          pair.up ? "text-[#D4AF37]" : "text-red-400"
                        }`}>
                          {pair.up ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                          <span className="text-[10px] font-medium tabular-nums">
                            {pair.change}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Bottom note */}
        <AnimateOnScroll delay={0.4}>
          <div className="mt-8 text-center">
            <p className="text-[#333] text-[10px] tracking-wider">
              Prices are indicative and updated periodically · Not financial advice · Past performance ≠ future results
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
