import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award } from 'lucide-react';

interface ExperienceItem {
    id: number;
    role: string;
    company: string;
    duration: string;
    location: string;
    keyLearnings: string[];
}

const experiences: ExperienceItem[] = [
    {
        id: 0,
        role: "Software Developer",
        company: "GlobalLogic (Hitachi Group)",
        duration: "Jan 2026 – Present",
        location: "Hyderabad",
        keyLearnings: [
            "Microservices Architecture",
            "Technical Leadership",
            "Backend Strategy",
            "System Design"
        ]
    },
    {
        id: 1,
        role: "Associate Software Engineer",
        company: "GlobalLogic (Hitachi Group)",
        duration: "Aug 2024 – Dec 2025",
        location: "Hyderabad",
        keyLearnings: [
            "Performance Optimization (Redis)",
            "System Reliability & Security",
            "CI/CD Automation (Jenkins)",
            "Observability (Dynatrace)",
            "Java Spring Boot & Kafka"
        ]
    },
    {
        id: 2,
        role: "Trainee Software Engineer",
        company: "GlobalLogic (Hitachi Group)",
        duration: "Mar 2024 – Aug 2024",
        location: "Hyderabad",
        keyLearnings: [
            "Clean Code Principles",
            "Distributed Systems Basics",
            "Agile/Scrum Methodologies",
            "Bug Fixing & Stability"
        ]
    },
    {
        id: 3,
        role: "Security Associate Intern",
        company: "Accenture",
        duration: "Apr 2023 – Sep 2023",
        location: "Gurgaon",
        keyLearnings: [
            "Application Security",
            "Vulnerability Assessment",
            "Risk Analysis",
            "Compliance Standards"
        ]
    }
];

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-20 bg-[var(--color-bg)] transition-colors duration-300 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Professional <span className="text-[var(--color-primary)]">Journey</span>
                    </h2>
                    <p className="text-[var(--color-text-muted)] text-lg max-w-2xl mx-auto">
                        My career path and the key technical milestones I've achieved along the way.
                    </p>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-[var(--color-border)] rounded-full"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center w-full`}
                            >
                                {/* Spacer for opposite side */}
                                <div className="flex-1 hidden md:block"></div>

                                {/* Center Dot */}
                                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-[var(--color-primary)] ring-4 ring-[var(--color-bg)] z-10 mt-6 md:mt-0"></div>

                                {/* Content Card */}
                                <div className="flex-1 w-full pl-8 md:pl-0 md:px-8">
                                    <div className="bg-[var(--color-bg-secondary)] rounded-2xl p-6 border border-[var(--color-border)] shadow-sm hover:shadow-lg transition-all relative">

                                        {/* Connector Line for Mobile */}
                                        <div className="absolute top-8 left-[-32px] w-8 h-[2px] bg-[var(--color-border)] md:hidden"></div>

                                        <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-primary)] font-bold mb-2 uppercase tracking-wider">
                                            <span className="bg-[var(--color-primary)]/10 px-3 py-1 rounded-full">{exp.duration}</span>
                                        </div>

                                        <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text)] mb-1">{exp.role}</h3>
                                        <h4 className="text-lg text-[var(--color-text-muted)] font-medium flex items-center gap-2 mb-4">
                                            <Briefcase size={16} />
                                            {exp.company}
                                            <span className="text-sm font-normal opacity-75">• {exp.location}</span>
                                        </h4>

                                        <div className="pt-4 border-t border-[var(--color-border)]">
                                            <p className="text-sm text-[var(--color-text-muted)] font-semibold mb-3 flex items-center gap-2">
                                                <Award size={16} className="text-[var(--color-secondary)]" />
                                                Key Learnings & achievements
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.keyLearnings.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1 text-xs font-medium rounded-md bg-[var(--color-bg)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
