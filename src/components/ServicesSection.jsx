import React from "react";
export default function ServicesSection({offers}) {
  return (
    <section className="pt-32 pb-10 lg:px-6 px-8" id="service">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-2">
              What I Offer
            </h2>
            <h3 className="text-4xl font-bold">Comprehensive Tech Services</h3>
          </div>

          <p className="text-slate-400 max-w-md">
            Tailored development solutions designed for performance, security,
            and long-term maintainability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Service Card */}
          {offers && offers?.map((service, i) => (
            <div
              key={i}
              className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined">{service.icon}</span>
              </div>

              <h4 className="text-xl font-bold mb-3">{service.title}</h4>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <div
                className="bg-cover bg-center rounded-lg h-[200px] w-full"
                style={{ backgroundImage: `url("${service.img}")` }}
                aria-label={service.title}
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
