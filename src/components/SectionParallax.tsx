"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface SectionParallaxProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export default function SectionParallax({
  children,
  className = "",
  speed = 0.15,
}: SectionParallaxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60 * speed, -60 * speed]);

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
