import React from "react";

/* ---------- CONFIG MAPS ---------- */

const BASE_TYPE_TITLE = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  integration: "Integration",
  fullstack: "Fullstack",
  tools: "DevOps & Tools",
  mobile: "Mobile",
};

const LEVEL_COLOR = {
  beginner: "bg-yellow-400",
  intermediate: "bg-blue-500",
  advanced: "bg-green-500",
};

/* ---------- DATA TRANSFORM ---------- */

const buildSkillsByType = (techList = []) => {
  return techList.reduce((acc, item) => {
    const sectionTitle =
      BASE_TYPE_TITLE[item.base_type] || item.base_type;

    if (!acc[sectionTitle]) acc[sectionTitle] = [];

    acc[sectionTitle].push({
      name: item.name,
      experience: item.experience,
      level: item.level,
      color: LEVEL_COLOR[item.level] || "bg-gray-400",
    });

    return acc;
  }, {});
};

/* ---------- COMPONENT ---------- */

const SkillsSection = ({ tech }) => {
  const skills = buildSkillsByType(tech);

  return (
    <section id="skills" className="pt-32 pb-10 lg:px-6 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h3 className="text-3xl font-bold text-center mb-16">
          Technical Arsenal
        </h3>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="glass-card p-6 rounded-2xl flex flex-col items-center"
            >
              {/* Category Title */}
              <h5 className="text-sm font-bold text-accent-teal uppercase tracking-widest mb-6">
                {category}
              </h5>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-3">
                {items.map((skill) => (
                  <div
                    key={skill.name}
                    className="glass-card px-4 py-2 rounded-full flex items-center gap-3"
                  >
                    {/* Level Dot */}
                    <span
                      className={`size-3 rounded-full ${skill.color}`}
                      title={skill.level}
                    />

                    {/* Name */}
                    <span className="text-sm font-medium whitespace-nowrap">
                      {skill.name}
                    </span>

                    {/* Experience */}
                    <span className="w-[44px] h-[26px] rounded-full bg-emerald-300 text-black text-xs font-semibold flex items-center justify-center">
                      {skill.experience}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
