import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "[Project 1 Name]",
        description: "[Short description of Project 1. E.g., A comprehensive web app built with React, demonstrating state management and component reusability. Integrates deeply with an external API.]",
        tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        github: "#",
        live: "#"
    },
    {
        title: "[Project 2 Name]",
        description: "[Short description of Project 2. E.g., An innovative e-commerce platform featuring a custom-built shopping cart, Stripe integration, and real-time inventory tracking.]",
        tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
        github: "#",
        live: "#"
    },
    {
        title: "[Project 3 Name]",
        description: "[Short description of Project 3. E.g., A real-time chat application utilizing Socket.io and Redis for instant messaging and presence indicators.]",
        tech: ["React", "Socket.io", "Express", "Redis"],
        github: "#",
        live: "#"
    }
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-4 mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Some Things I've Built</h2>
                        <div className="h-[1px] bg-slate-700 flex-1 ml-4" />
                    </div>

                    <div className="space-y-24">
                        {projects.map((project, index) => (
                            <div key={index} className="relative grid md:grid-cols-12 gap-8 items-center group">

                                {/* Image Placeholder (Left for even, Right for odd) */}
                                <div className={`md:col-span-7 relative z-10 ${index % 2 !== 0 ? 'md:order-2 md:col-start-6' : ''}`}>
                                    <a href={project.live} target="_blank" rel="noreferrer" className="block relative h-[300px] md:h-[400px] rounded-xl overflow-hidden bg-slate-800 border border-slate-700 group-hover:border-primary/50 transition-colors">
                                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 mix-blend-multiply" />
                                        <div className="w-full h-full flex items-center justify-center text-slate-500">
                                            <span>Screenshot Placeholder</span>
                                        </div>
                                    </a>
                                </div>

                                {/* Content */}
                                <div className={`md:col-span-6 relative z-20 ${index % 2 !== 0 ? 'md:order-1 md:col-start-1 md:text-left' : 'md:col-start-7 md:text-right text-left'} text-left`}>
                                    <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                                    <h3 className="text-2xl font-bold text-white mb-4 hover:text-primary transition-colors">
                                        <a href={project.live} target="_blank" rel="noreferrer">{project.title}</a>
                                    </h3>

                                    <div className={`bg-slate-900/90 backdrop-blur-sm border border-slate-800 p-6 rounded-xl shadow-xl mb-6 text-slate-400 leading-relaxed ${index % 2 !== 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                        <p>{project.description}</p>
                                    </div>

                                    <ul className={`flex flex-wrap gap-4 text-sm font-mono text-slate-300 mb-6 ${index % 2 !== 0 ? 'justify-start' : 'md:justify-end justify-start'}`}>
                                        {project.tech.map((t, i) => (
                                            <li key={i}>{t}</li>
                                        ))}
                                    </ul>

                                    <div className={`flex items-center gap-4 ${index % 2 !== 0 ? 'justify-start' : 'md:justify-end justify-start'} text-slate-300`}>
                                        <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
