import { motion } from "motion/react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      <div className="w-16 h-1.5 bg-blue-500 mx-auto rounded-full" />
      {subtitle && (
        <p className="mt-8 text-gray-600 max-w-2xl mx-auto font-body">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
