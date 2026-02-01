const AboutSection = ({config}) => {
  return (
    <section className="py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="glass-card p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center gap-10">
          
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent-teal rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

            <div
              className="relative bg-center bg-no-repeat aspect-square bg-cover rounded-xl w-48 h-48 md:w-64 md:h-64"
              style={{
                backgroundImage:
                  `url("${process.env.REACT_APP_API_URL}${config?.profileImg}")`,
              }}
              aria-label="Professional headshot of Ram Kumar N looking confident"
            />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-6">
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
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
