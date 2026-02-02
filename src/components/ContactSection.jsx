import ContactForm from "./ContactForm";

const ContactSection = ({ config }) => {
  return (
    <section className="pt-32 pb-10 lg:px-6 px-8 mb-24" id="contact">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-black mb-12">Get In Touch</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Contact Details */}
        <div className="space-y-10">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Let's talk about your project
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              Whether you have a fully-fleshed out brief or just a rough idea,
              I'm here to help refine and build your next big thing.
            </p>
          </div>

          {/* Contact Links */}
          <div className="space-y-6 max-w-[90vw]">

            {/* Email */}
            <a
              href={`mailto:${encodeURIComponent(config.email)}`}
              aria-label="Send email"
              className="flex items-start gap-4 group"
            >
              <div className="size-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all flex-shrink-0">
                <span className="material-symbols-outlined">mail</span>
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Email Me
                </p>
                <p className="text-md font-semibold break-words">
                  {config.email}
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={config.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 group"
            >
              <div className="size-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all flex-shrink-0">
                <span className="material-symbols-outlined">link</span>
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  LinkedIn
                </p>
                <p className="text-md font-semibold break-words">
                  {config.linkedin}
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={config.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 group"
            >
              <div className="size-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all flex-shrink-0">
                <span className="material-symbols-outlined">terminal</span>
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  GitHub
                </p>
                <p className="text-md font-semibold break-words">
                  {config.github}
                </p>
              </div>
            </a>

          </div>


          {/* WhatsApp */}
          <a
            href={`https://wa.me/${config.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            class="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-xl font-bold hover:brightness-105 transition-all shadow-lg shadow-[#25D366]/20"
          >
            <svg class="size-6 fill-current" viewbox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.628 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
            WhatsApp Me
          </a>
        </div>

        {/* Right: Contact Form */}

        <ContactForm />

      </div>
      </div>
    </section>
  );
};

export default ContactSection;
