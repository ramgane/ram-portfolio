import { motion } from "framer-motion";

const AboutSection = ({ config }) => {
  return (
    <section className="py-10 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="glass-card p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center gap-10">

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group w-48 h-48 md:w-64 md:h-64 flex-shrink-0"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent-teal rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

            <div
              className="relative bg-center bg-no-repeat w-full h-full bg-cover rounded-xl shadow-xl border border-white/5"
              style={{
                backgroundImage:
                  `url("${config?.profileImg}")`,
              }}
              aria-label="Professional headshot of Ram Kumar N looking confident"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 space-y-6"
          >
            <div>
              <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-2">
                About Me
              </h2>
              <h3 className="text-3xl font-bold leading-tight">
                {config?.abt_title}
              </h3>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed">
              {config?.abt_description}
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent-teal">
                  location_on
                </span>
                <span className="text-sm font-medium">{config?.place} / Remote</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent-teal">
                  verified
                </span>
                <span className="text-sm font-medium">{config?.position}</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
