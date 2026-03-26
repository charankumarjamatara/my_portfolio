import { SectionHeader } from "./shared/SectionHeader";
import { AnimatedCard } from "./shared/AnimatedCard";
import { IconBox } from "./shared/IconBox";
import { ACTIVITIES } from "../data";

export function Activities() {
  return (
    <section id="activities" className="py-24 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Activities & Focus" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACTIVITIES.map((item, index) => (
            <AnimatedCard
              key={item.title}
              index={index}
              className="p-8 flex items-start gap-6 hover:border-blue-200 transform hover:-translate-y-1"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <IconBox icon={item.icon} className="shadow-sm" />
              <div>
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
