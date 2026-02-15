import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "TailwindCSS", "Three.js", "HTML5", "CSS3", "Redux"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "REST APIs"] },
    { category: "Tools & Others", items: ["Git", "GitHub", "VS Code", "Postman", "Vite"] },
    { category: "Problem Solving", items: ["Data Structures", "Algorithms", "LeetCode"] }
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-20 bg-[var(--color-bg)] text-[var(--color-text)] relative overflow-hidden transition-colors duration-300">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        My <span className="text-[var(--color-secondary)]">Skills</span>
                    </h2>
                    <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
                        A snapshot of my technical expertise and tools I use to build digital experiences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[var(--color-bg-secondary)] p-6 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-secondary)]/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--color-secondary)]/20 shadow-sm"
                        >
                            <h3 className="text-xl font-bold mb-6 text-center text-[var(--color-primary)] bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {skillGroup.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 text-sm bg-[var(--color-bg)] border border-[var(--color-border)] rounded-full text-[var(--color-text-muted)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] transition-colors cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
