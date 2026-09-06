import { motion } from "framer-motion";

const HeroSection = ({ config }) => {
  return (
    <section className="relative pt-32 pb-10 px-6 overflow-hidden" id="about">
      <div className="max-w-4xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-teal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-teal"></span>
          </span>
          AVAILABLE FOR NEW PROJECTS
        </motion.div>


        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-8 hero-gradient-text"
        >
          {config?.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10"
        >
          {config?.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={`tel:${config.phone}`}
            className="w-full sm:w-auto min-w-[160px] bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105 transition-all">
            Hire Me
          </a>

          <a href="#projects" className="w-full sm:w-auto min-w-[160px] glass-card hover:bg-white/10 text-white font-bold py-4 rounded-xl hover:scale-105 transition-all">
            View Projects
          </a>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
