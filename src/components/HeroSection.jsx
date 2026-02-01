const HeroSection = ({config}) => {
  return (
    <section className="relative pt-32 pb-10 px-6 overflow-hidden" id="about">
      <div className="max-w-4xl mx-auto text-center">
        {
          config?.avail && 
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-teal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-teal"></span>
          </span>
          AVAILABLE FOR NEW PROJECTS
        </div>
       }

        <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-8 hero-gradient-text">
         {config?.title}
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          {config?.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
           <a
              href={`tel:${config.phone}`}
               className="w-full sm:w-auto min-w-[160px] bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all">
            Hire Me
          </a>

          <a href="#projects" className="w-full sm:w-auto min-w-[160px] glass-card hover:bg-white/5 text-white font-bold py-4 rounded-xl transition-all">
            View Projects
          </a>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
