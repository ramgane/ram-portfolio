import React, { useState } from "react";
import { saveAs } from "file-saver";

export default function Header({ config }) {
  const [open, setOpen] = useState(false);

  if (!config) return null;

  function handleDownload() {
    saveAs(
      `${config?.resume}`,
      `${config?.name}_Resume.pdf`
    );
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-10 py-4">
      <div className="max-w-7xl mx-auto">
        <nav className="glass-card rounded-xl px-6 py-3">

          {/* Top Bar */}
          <div className="flex items-center justify-between">
            {/* Logo & Name */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 text-primary">
                <svg fill="none" viewBox="0 0 48 48">
                  <path
                    clipRule="evenodd"
                    d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <h2 className="text-lg font-bold tracking-tight">
                {config.name || config.title || "Ram Kumar N."}
              </h2>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#about">About</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#service">Service</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#skills">Skills</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#projects">Projects</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#contact">Contact</a>

              {config.resume && (
                <button
                  onClick={handleDownload}
                  className="bg-primary hover:bg-primary/90 text-white text-sm font-bold px-5 py-2 rounded-lg transition-all flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">download</span>
                  Resume
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setOpen(!open)}
            >
              <span className="material-symbols-outlined">
                {open ? "close" : "menu"}
              </span>
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden mt-6 flex flex-col gap-5">
              <a onClick={() => setOpen(false)} href="#about" className="text-sm font-medium hover:text-primary">About</a>
              <a onClick={() => setOpen(false)} href="#service" className="text-sm font-medium hover:text-primary">Service</a>
              <a onClick={() => setOpen(false)} href="#skills" className="text-sm font-medium hover:text-primary">Skills</a>
              <a onClick={() => setOpen(false)} href="#projects" className="text-sm font-medium hover:text-primary">Projects</a>
              <a onClick={() => setOpen(false)} href="#contact" className="text-sm font-medium hover:text-primary">Contact</a>

              {config.resume && (
                <button
                  onClick={() => {
                    handleDownload();
                    setOpen(false);
                  }}
                  className="bg-primary hover:bg-primary/90 text-white text-sm font-bold px-5 py-2 rounded-lg transition-all flex items-center gap-2 w-fit"
                >
                  <span className="material-symbols-outlined text-sm">download</span>
                  Resume
                </button>
              )}
            </div>
          )}

        </nav>
      </div>
    </header>
  );
}
