import { SOCIAL_LINKS } from "../data";

export function Footer() {
  return (
    <footer className="bg-white py-12 lg:py-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="font-heading text-2xl font-bold tracking-tight text-gray-900 inline-block mb-2"
            >
              JCK<span className="text-blue-500">.</span>
            </a>
            <p className="font-body text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Jamatara Charan Kumar. All
              rights reserved.
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  link.icon ? "w-12" : "px-5"
                } h-12 bg-gray-50 flex items-center justify-center rounded-2xl text-sm font-semibold text-gray-500 border border-gray-100 hover:-translate-y-1 transition-all duration-300 ${link.hoverClass}`}
              >
                {link.icon ? <link.icon className="w-5 h-5" /> : link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
