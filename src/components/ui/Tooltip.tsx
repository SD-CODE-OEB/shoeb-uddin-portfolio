"use client";

import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";

export const AnimatedTooltip = ({
  children,
  content,
}: {
  children: React.ReactNode;
  content: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <motion.div
      className="group relative"
      style={{ transformStyle: "preserve-3d" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <AnimatePresence mode="popLayout">
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 10,
              },
            }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            style={{
              translateX: translateX,
              rotate: rotate,
              whiteSpace: "nowrap",
            }}
            className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-xl bg-surface px-4 py-2 text-xs ring-1"
          >
            <div className="absolute inset-x-0 right-1 bottom-0 z-30 h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent" />
            {/* <div className="absolute -bottom-px right-1 z-30 h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent" /> */}
            <div className="relative z-30 text-base font-bold  text-accent transition-transform translate-z-[100px] -rotate-x-[25deg] rotate-y-[20deg]">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </motion.div>
  );
};
