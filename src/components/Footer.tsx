import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="py-8 bg-darker border-t border-slate-800 text-center">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
                <div className="flex items-center gap-6 mb-4 text-slate-400">
                    <a href="[Your GitHub URL]" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="[Your LinkedIn URL]" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                        <Twitter size={20} />
                    </a>
                    <a href="mailto:[Your Email Address]" className="hover:text-primary transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
                <p className="text-slate-500 font-mono text-sm group transition-all">
                    <a href="https://github.com/[Your GitHub Username]/[Repo Name]" target="_blank" rel="noreferrer" className="inline-block hover:text-primary transition-colors">
                        Designed & Built by [Your Name]
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
