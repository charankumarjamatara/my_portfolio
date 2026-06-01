import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white min-h-[90vh] flex items-center"
    >
      {/* Background Image / Portrait */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-end justify-end">
        <img
          src={`${import.meta.env.BASE_URL}profile.png`}
          alt="Charan Kumar Jamatara"
          className="h-[100%] w-[100%] object-contain object-right-bottom select-none"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left max-w-3xl"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-orange-50 text-orange-600 text-sm font-semibold mb-8 border border-orange-100 shadow-sm"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-orange-500 mr-2.5 animate-pulse" />
            Available for new opportunities
          </motion.div>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
            Charan Kumar{" "}
            <span className="text-orange-500 relative inline-block">Jamatara</span>
          </h1>

          <h2 className="font-heading text-xl md:text-2xl text-gray-600 font-medium mb-8">
            Computer Science Undergraduate | Full-Stack Developer
          </h2>

          <p className="font-body text-lg text-gray-500 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Building real-world projects and solving problems with code.
            Passionate about crafting beautiful, interactive, and efficient web
            applications.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-white bg-orange-500 hover:bg-orange-600 shadow-md hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-200 text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Me
              <Mail className="ml-2 h-5 w-5 text-gray-400" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
