"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}

export default function Marquee({
  children,
  speed = 30,
  direction = "left",
  className = "",
}: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-12 w-max"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
