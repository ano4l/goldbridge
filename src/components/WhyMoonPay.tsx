"use client";

import { Shield, Zap, Globe, CreditCard, Lock, BadgeCheck } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import TiltCard from "./TiltCard";

const reasons = [
  {
    icon: Shield,
    title: "Regulated & Compliant",
    description: "MoonPay is licensed in 60+ jurisdictions worldwide, ensuring every transaction meets the highest regulatory standards.",
  },
  {
    icon: Zap,
    title: "Instant Processing",
    description: "Deposits are credited within minutes, not days. MoonPay's infrastructure processes payments in real-time, 24/7.",
  },
  {
    icon: Globe,
    title: "160+ Countries Supported",
    description: "Invest from virtually anywhere. MoonPay supports local payment methods across 160+ countries and 80+ currencies.",
  },
  {
    icon: CreditCard,
    title: "Multiple Payment Methods",
    description: "Pay with credit/debit cards, bank transfers, Apple Pay, Google Pay, or crypto — whatever suits you best.",
  },
  {
    icon: Lock,
    title: "Bank-Grade Encryption",
    description: "Every transaction is protected with AES-256 encryption and 3D Secure authentication for complete peace of mind.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted by 20M+ Users",
    description: "MoonPay powers payments for leading brands like OpenSea, Coinbase, and now Goldbridge Capital.",
  },
];

export default function WhyMoonPay() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="aurora aurora-white top-[20%] right-[5%] w-[300px] md:w-[500px] h-[200px] md:h-[350px]" />

      <div className="max-w-[1400px] mx-auto relative z-10 px-5 md:px-0">
        {/* Header */}
        <AnimateOnScroll scale blur>
          <div className="text-center mb-10 md:mb-16">
            <div className="pill-gold mb-5 mx-auto">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              Payment Infrastructure
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-5 tracking-tight">
              Why We Use <span className="gold-text">MoonPay</span>
            </h2>
            <p className="text-[#555] text-sm md:text-base max-w-xl mx-auto leading-relaxed px-2">
              Goldbridge Capital partners with MoonPay — the world&apos;s leading
              fiat-to-crypto payment gateway — to deliver seamless, secure transactions.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Logo + Trust Banner */}
        <AnimateOnScroll delay={0.05}>
          <div className="glass-subtle p-5 md:p-6 mb-8 md:mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {/* MoonPay wordmark */}
              <div className="w-10 h-10 rounded-xl bg-[#7B61FF]/10 border border-[#7B61FF]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#7B61FF] font-bold text-sm">M</span>
              </div>
              <div>
                <p className="text-white text-sm font-semibold">MoonPay</p>
                <p className="text-[#555] text-[10px]">Official Payment Partner</p>
              </div>
            </div>
            <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-[#888] text-[10px]">SOC 2 Certified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span className="text-[#888] text-[10px]">PCI DSS Level 1</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#7B61FF]" />
                <span className="text-[#888] text-[10px]">60+ Licenses</span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {reasons.map((reason, i) => (
            <AnimateOnScroll key={reason.title} delay={i * 0.07} scale>
              <TiltCard>
                <div className="glass p-4 md:p-6 group hover:-translate-y-1 transition-all duration-500 h-full">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#7B61FF]/[0.06] border border-[#7B61FF]/[0.12] flex items-center justify-center flex-shrink-0 group-hover:border-[#7B61FF]/25 group-hover:bg-[#7B61FF]/[0.1] transition-all duration-500">
                      <reason.icon size={15} className="text-[#7B61FF]" />
                    </div>
                    <div>
                      <h3 className="text-white text-sm font-semibold mb-1.5">
                        {reason.title}
                      </h3>
                      <p className="text-[#555] text-xs leading-relaxed">
                        {reason.description}
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
