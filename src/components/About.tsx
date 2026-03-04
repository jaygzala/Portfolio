import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
                        <div className="h-[1px] bg-slate-700 flex-1 ml-4" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                            <p>
                                Hello! My name is [Your Name] and I enjoy creating things that live on the internet.
                                My interest in web development started back in [Year] when I decided to try editing
                                custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about
                                how the web works!
                            </p>
                            <p>
                                Fast-forward to today, and I've had the privilege of working at an advertising agency,
                                a start-up, a huge corporation, and a student-led design studio. My main focus these days
                                is building accessible, inclusive products and digital experiences for a variety of
                                clients.
                            </p>
                            <p>
                                When I'm not coding, you'll find me [insert side hobby/passion here].
                            </p>
                        </div>

                        <div className="relative group mx-auto md:ml-auto md:mr-0 w-3/4 max-w-[300px]">
                            <div className="absolute inset-0 border-2 border-primary rounded-xl translate-x-5 translate-y-5 -z-10 transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
                            <div className="relative rounded-xl overflow-hidden bg-slate-800 border border-slate-700 aspect-[3/4] flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                                <span className="text-slate-500 text-center px-4">Place another image<br />of yourself here</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
