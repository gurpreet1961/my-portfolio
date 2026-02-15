import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-gradient-to-t from-black to-dark text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Let's <span className="text-primary">Connect</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
                        <a
                            href="mailto:contact@gurpreet.dev" // Replace with actual email if known
                            className="group flex items-center gap-3 bg-white/5 hover:bg-primary px-6 py-4 rounded-xl transition-all border border-white/10 hover:border-primary w-full md:w-auto justify-center"
                        >
                            <Mail className="group-hover:text-white text-primary transition-colors" />
                            <span className="font-medium">Send an Email</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/gurpreet-singh-50790a1ab/"
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-center gap-3 bg-white/5 hover:bg-[#0077b5] px-6 py-4 rounded-xl transition-all border border-white/10 hover:border-[#0077b5] w-full md:w-auto justify-center"
                        >
                            <Linkedin className="group-hover:text-white text-[#0077b5] transition-colors" />
                            <span className="font-medium">LinkedIn</span>
                        </a>
                        <a
                            href="https://github.com/gurpreet1961"
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-center gap-3 bg-white/5 hover:bg-gray-800 px-6 py-4 rounded-xl transition-all border border-white/10 hover:border-gray-800 w-full md:w-auto justify-center"
                        >
                            <Github className="group-hover:text-white text-gray-400 transition-colors" />
                            <span className="font-medium">GitHub</span>
                        </a>
                    </div>

                    <div className="mb-12">
                        <p className="text-gray-500 mb-4">Or check out my resume</p>
                        <a
                            href="https://drive.google.com/drive/u/0/folders/1xgqV7-N-PUyFu2HT_QRJSfACXvy3457O"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-secondary hover:text-white transition-colors border-b border-secondary hover:border-white pb-1"
                        >
                            <FileText size={18} />
                            View Resume
                        </a>
                    </div>

                    <footer className="pt-10 border-t border-white/5 text-gray-600 text-sm">
                        <p>© {new Date().getFullYear()} Gurpreet Singh. Built with React & Tailwind.</p>
                    </footer>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
