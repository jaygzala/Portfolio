import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full point-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/20 blur-[100px] rounded-full point-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    <div className="flex-1 text-center md:text-left">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-primary font-medium tracking-wide mb-4"
                        >
                            Hi, my name is
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                        >
                            [Your Name]. <br />
                            <span className="text-slate-400">[Brief Headline or Role].</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed mx-auto md:mx-0"
                        >
                            [Tagline: E.g., I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.]
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
                        >
                            <a
                                href="#projects"
                                className="px-8 py-4 bg-primary text-darker font-bold rounded-lg hover:bg-primary/90 hover:-translate-y-1 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
                            >
                                Check out my work <ArrowRight size={20} />
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-transparent border border-slate-700 text-white font-medium rounded-lg hover:border-slate-500 hover:bg-slate-800/50 transition-all w-full sm:w-auto justify-center text-center"
                            >
                                Contact Me
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex items-center gap-6 mt-12 justify-center md:justify-start text-slate-400"
                        >
                            <a href="[Your GitHub URL]" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors hover:scale-110 transform">
                                <Github size={24} />
                            </a>
                            <a href="[Your LinkedIn URL]" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors hover:scale-110 transform">
                                <Linkedin size={24} />
                            </a>
                            <a href="mailto:[Your Email Address]" className="hover:text-primary transition-colors hover:scale-110 transform">
                                <Mail size={24} />
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex-1 w-full max-w-md"
                    >
                        <div className="relative aspect-square">
                            {/* Outer glowing border */}
                            <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl translate-x-4 translate-y-4 -z-10 transition-transform hover:translate-x-2 hover:translate-y-2"></div>
                            {/* Image Container directly filled with glassmorphism or placeholder image */}
                            <div className="w-full h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden flexItems-center justify-center grayscale hover:grayscale-0 transition-all duration-500 relative group">
                                {/* Provide instructions for user to add image */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 group-hover:text-primary transition-colors p-6 text-center">
                                    <div className="w-20 h-20 rounded-full border-2 border-dashed border-slate-500 group-hover:border-primary mb-4 flex items-center justify-center">
                                        <span className="text-sm">Img</span>
                                    </div>
                                    <p className="text-sm">Replace this block with your <br /> profile photo here.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
