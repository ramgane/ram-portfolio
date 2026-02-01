import { Link } from "react-router-dom";

const FeaturedProjects = ({ projects }) => {

  return (
    <section className="pt-32 pb-10 px-6" id="projects">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold mb-2 text-center">
          Featured Projects
        </h3>
        <div>
          <p className="text-slate-400 text-lg mb-12 text-center">
            A selection of my recent full-stack applications built for scale and
            performance.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects && projects.slice().sort((a, b) => a.sequence - b.sequence).map((project) => (
          <div
            key={project.title}
            className="project-card group bg-white/5 border border-white/10 rounded-xl overflow-hidden flex flex-col h-full"
          >
            {/* Image */}
            <div className="relative aspect-video overflow-hidden">
              <div
                className="w-full h-full bg-slate-800 bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url("${process.env.REACT_APP_API_URL}${project.img}")` }}
                aria-label={project.title}
              />

              
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <div className="top-4 left-4 flex flex-wrap gap-2 max-w-[90%] mb-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary/90 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider text-center"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-300 text-sm mb-6 flex-1">
                {project.description}
              </p>
              {
                project.link &&
                <Link
                  target="_blank"
                  to={project.link}
                  className="inline-flex items-center text-primary font-bold text-sm gap-2 group/link"
                >
                  View Project
                  <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1">
                    arrow_forward
                  </span>
                </Link>
              }

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
