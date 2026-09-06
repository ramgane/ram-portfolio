import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FeaturedProjects = ({ projects }) => {
  return (
    <section className="pt-32 pb-10 lg:px-6 px-8" id="projects">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-2 text-center"
        >
          Featured Projects
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-slate-400 text-lg mb-12 text-center">
            A selection of my recent full-stack applications built for scale and
            performance.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects && projects.slice().sort((a, b) => a.sequence - b.sequence).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="project-card group bg-white/5 border border-white/10 rounded-xl overflow-hidden flex flex-col h-full hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <Link to={`/project/${project._id.$oid}`} className="relative aspect-video overflow-hidden block">
                <div
                  className="w-full h-full bg-slate-800 bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url("${project.img}")` }}
                  aria-label={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

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
                <Link to={`/project/${project._id.$oid}`} className="group-hover:text-primary transition-colors">
                  <h3 className="text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                </Link>

                <p className="text-slate-300 text-sm mb-6 flex-1">
                  {project.description.substring(0, 120)}...
                </p>

                <Link
                  to={`/project/${project._id.$oid}`}
                  className="inline-flex items-center text-primary font-bold text-sm gap-2 group/link border border-primary/50 px-4 py-2 rounded-full hover:bg-primary/10 transition-colors w-fit"
                >
                  View Details
                  <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1">
                    arrow_forward
                  </span>
                </Link>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
