import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center gap-12"
                >
                    {/* Image / Visual */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary to-secondary rounded-2xl rotate-3 hover:rotate-0 transition-all duration-300 shadow-2xl">
                            <div className="absolute inset-1 bg-dark rounded-2xl flex items-center justify-center overflow-hidden">
                                {/* Placeholder for an actual image, using a gradient or icon for now */}
                                <span className="text-6xl">👨‍💻</span>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold">
                            About <span className="text-[var(--color-primary)]">Me</span>
                        </h2>
                        <p className="text-[var(--color-text-muted)] text-lg leading-relaxed">
                            I am a passionate Full Stack Developer dedicated to crafting efficient and scalable web applications.
                            With a strong foundation in <span className="text-[var(--color-secondary)] font-semibold">React, TypeScript, and Node.js</span>,
                            I love solving complex problems and turning ideas into reality.
                        </p>
                        <p className="text-[var(--color-text-muted)] text-lg leading-relaxed">
                            My journey involves continuous learning and experimenting with new technologies.
                            From building interactive 3D user interfaces to optimizing backend performance,
                            I strive for excellence in every line of code I write.
                        </p>

                        <div className="flex gap-4 pt-4">
                            <div className="text-center p-4 bg-[var(--color-bg-secondary)] rounded-xl border border-[var(--color-border)] shadow-sm">
                                <h3 className="text-2xl font-bold text-[var(--color-primary)]">20+</h3>
                                <p className="text-sm text-[var(--color-text-muted)]">Projects Completed</p>
                            </div>
                            <div className="text-center p-4 bg-[var(--color-bg-secondary)] rounded-xl border border-[var(--color-border)] shadow-sm">
                                <h3 className="text-2xl font-bold text-[var(--color-secondary)]">100+</h3>
                                <p className="text-sm text-[var(--color-text-muted)]">LeetCode Solved</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
