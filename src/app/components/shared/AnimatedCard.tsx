import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

interface AnimatedCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  index?: number;
  hoverLift?: boolean;
  className?: string;
}

export function AnimatedCard({
  children,
  index = 0,
  hoverLift = false,
  className = "",
  ...motionProps
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={hoverLift ? { y: -5 } : undefined}
      className={`bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 ${className}`}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
