import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProjectData from "../data/projects.json";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectDetail() {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        // Find project by sequence or id. Assuming id matches _id.$oid or title slug.
        // However, the links from FeaturedSection will likely just be the ID.
        const foundProject = ProjectData.find((p) => p._id.$oid === id);
        setProject(foundProject);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background-dark text-slate-100">
                <h2 className="text-2xl mb-4">Project Not Found</h2>
                <Link to="/" className="text-primary hover:underline">
                    Return Home
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 font-display">
            {/* Header/Nav */}
            <nav className="p-6">
                <Link
                    to="/"
                    className="inline-flex items-center text-slate-400 hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Portfolio
                </Link>
            </nav>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-6 pb-20 pt-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Project Image */}
                    <div className="w-full aspect-video rounded-2xl overflow-hidden mb-10 shadow-2xl border border-white/10 relative">
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${project.img})` }}
                        />
                    </div>

                    <div className="flex flex-wrap gap-3 mb-6">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="bg-primary/20 text-primary border border-primary/30 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-6">
                        {project.title}
                    </h1>

                    <div className="prose prose-invert max-w-none text-slate-300 mb-10">
                        <p className="text-lg leading-relaxed whitespace-pre-line">
                            {project.description}
                        </p>
                    </div>

                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-full transition-all hover:scale-105 shadow-lg shadow-primary/30"
                        >
                            Visit Project Live
                            <span className="material-symbols-outlined text-sm">open_in_new</span>
                        </a>
                    )}
                </motion.div>
            </main>
        </div>
    );
}
