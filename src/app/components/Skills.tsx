import { SectionHeader } from "./shared/SectionHeader";
import { AnimatedCard } from "./shared/AnimatedCard";
import { IconBox } from "./shared/IconBox";
import { Badge } from "./shared/Badge";
import { SKILL_CATEGORIES } from "../data";

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Skills" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <AnimatedCard
              key={category.title}
              index={index}
              hoverLift
              className="p-8 lg:p-10"
            >
              <IconBox icon={category.icon} className="mb-6" />
              <h3 className="font-heading text-xl font-semibold text-gray-900 mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <Badge key={skill} label={skill} variant="skill" />
                ))}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
