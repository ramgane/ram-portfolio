const FreelanceCTA = ({ config }) => {
  return (
    <section className="mb-24">
      <div className="cta-gradient rounded-2xl p-8 md:p-16 text-center relative overflow-hidden group">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 size-64 bg-teal-accent/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
        <div className="absolute -bottom-24 -left-24 size-64 bg-white/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            Ready to bring your visionary idea to life?
          </h2>

          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Currently accepting select freelance projects. Let's build a
            high-performance solution that elevates your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Call Me */}
            <a
              href={`tel:${config.phone}`}
             className="w-full sm:w-auto px-10 py-4 bg-white text-primary rounded-xl font-black text-lg hover:bg-slate-100 transition-all shadow-xl text-center"
            >
              Contact Me
            </a>

            {/* Scroll to Services */}
            <a
              href="#service"
              className="w-full sm:w-auto px-10 py-4 border-2 border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all text-center"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreelanceCTA;
