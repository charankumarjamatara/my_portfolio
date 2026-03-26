import { motion } from "motion/react";
import { GraduationCap, Code } from "lucide-react";
import { SectionHeader } from "./shared/SectionHeader";
import { IconBox } from "./shared/IconBox";

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50/50 rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-6 gap-3">
              <IconBox icon={Code} size="sm" />
              <h3 className="font-heading text-xl font-semibold text-gray-900">
                Summary
              </h3>
            </div>
            <p className="font-body text-gray-600 leading-relaxed text-base">
              I am a Computer Science undergraduate with a strong interest in
              problem solving, data structures, and full-stack development. I
              actively participate in hackathons and coding platforms like
              LeetCode and CodeChef. I enjoy bridging the gap between design and
              engineering to build seamless user experiences.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-50/50 rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col justify-center"
          >
            <div className="flex items-center mb-8 gap-3">
              <IconBox icon={GraduationCap} size="sm" />
              <h3 className="font-heading text-xl font-semibold text-gray-900">
                Education
              </h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-blue-200 pl-6 relative">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1 ring-4 ring-white" />
                <h4 className="font-heading font-semibold text-gray-900 text-lg">
                  B.Tech in Computer Science
                </h4>
                <p className="text-gray-500 text-sm mb-2 font-medium">
                  2024 &ndash; 2028
                </p>
                <div className="inline-block px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 font-semibold shadow-sm">
                  CGPA: 8.45
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
