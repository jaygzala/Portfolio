import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    "JavaScript (ES6+)", "TypeScript", "React", "Next.js",
    "Node.js", "Python", "Tailwind CSS", "Framer Motion",
    "PostgreSQL", "MongoDB", "Git", "Docker"
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-24 relative bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-4 mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">My Tech Stack</h2>
                        <div className="h-[1px] bg-slate-700 flex-1 ml-4" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-darker border border-slate-800 hover:border-primary/50 p-6 rounded-xl flex items-center justify-center text-slate-300 hover:text-primary hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] transition-all cursor-default"
                            >
                                <span className="font-medium">{skill}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
