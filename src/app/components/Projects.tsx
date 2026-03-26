import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeader } from "./shared/SectionHeader";
import { Badge } from "./shared/Badge";
import { PROJECTS, type Project } from "../data";

/* ── Sub-component ─────────────────────────────────────────────────── */

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group"
    >
      {/* Thumbnail area */}
      <div className="h-56 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
          <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <ActionButton icon={Github} label="View source" />
            <ActionButton icon={ExternalLink} label="Live demo" />
          </div>
        </div>
        {/* Fallback initial */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 bg-white rounded-full shadow-sm flex items-center justify-center">
            <span className="font-heading text-2xl font-bold text-gray-300">
              {project.title.charAt(0)}
            </span>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
          {project.title}
        </h3>
        <p className="font-body text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <Badge key={tag} label={tag} variant="tag" />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ActionButton({
  icon: Icon,
  label,
}: {
  icon: typeof Github;
  label: string;
}) {
  return (
    <button
      aria-label={label}
      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-md hover:text-blue-500 hover:scale-110 transition-transform"
    >
      <Icon className="w-5 h-5" />
    </button>
  );
}

/* ── Main component ────────────────────────────────────────────────── */

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
