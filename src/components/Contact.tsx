import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24 relative bg-slate-900/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-primary font-mono mb-4 text-sm tracking-widest uppercase">What's Next?</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Get In Touch</h2>

                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
                        Although I'm not currently looking for any new opportunities, my inbox is always open.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <a
                        href="mailto:[Your Email Address]"
                        className="inline-block px-10 py-5 bg-transparent border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition-colors"
                    >
                        Say Hello
                    </a>
                </motion.div>
            </div>

            {/* Decorative blurred background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
        </section>
    );
};

export default Contact;
