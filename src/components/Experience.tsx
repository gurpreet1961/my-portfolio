import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
    id: number;
    role: string;
    company: string;
    duration: string;
    location: string;
    description: string[];
}

const experiences: ExperienceItem[] = [
    {
        id: 1,
        role: "Associate Software Engineer",
        company: "GlobalLogic (Hitachi Group)",
        duration: "Aug 2024 – Present",
        location: "Hyderabad",
        description: [
            "Implemented a secure microservices communication framework, improving distributed system reliability, scalability, and overall service-to-service security.",
            "Led API performance optimization by migrating high-volume endpoints from SQL to Redis, reducing latency from ~200ms → ~50ms and increasing throughput from 6K → 19K requests/min.",
            "Diagnosed and resolved major production issues through systematic root cause analysis, improving platform stability and reducing incident frequency.",
            "Maintained 100% sprint delivery with zero spillover, demonstrating strong Agile/Scrum execution.",
            "Managed deployments across DEV, SPRINT, and PROD, ensuring high availability and smooth rollout of microservices.",
            "Improved CI/CD automation by introducing a new Jenkins pipeline stage, reducing manual interventions.",
            "Developed comprehensive JUnit test suites with high code coverage, improving code quality and minimizing regression risks.",
            "Utilized Dynatrace for observability, performance monitoring, and proactive bottleneck detection.",
            "Delivered robust backend solutions using Spring Boot, Kafka, JPA, Redis, MySQL, and Jenkins."
        ]
    },
    {
        id: 2,
        role: "Trainee Software Engineer",
        company: "GlobalLogic (Hitachi Group)",
        duration: "Mar 2024 – Aug 2024",
        location: "Hyderabad",
        description: [
            "Gained practical experience in Java, Spring Boot, Kafka, SQL, and foundational backend engineering concepts.",
            "Contributed to development of product features and resolved multiple functional and integration bugs.",
            "Assisted in building and enhancing microservice components, improving understanding of distributed systems.",
            "Worked in an Agile/Scrum team, participating in sprint planning, daily stand-ups, and iterative delivery cycles.",
            "Collaborated with senior engineers to understand system design patterns, best practices, and service architecture."
        ]
    },
    {
        id: 3,
        role: "Security Associate Intern",
        company: "Accenture",
        duration: "Apr 2023 – Sep 2023",
        location: "Gurgaon",
        description: [
            "Completed a comprehensive cybersecurity internship focused on application security, risk analysis, and secure development practices.",
            "Gained hands-on experience with security assessments, vulnerability identification, and compliance-driven security processes.",
            "Collaborated with senior security analysts to understand incident response workflows and enterprise security standards."
        ]
    }
];

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-20 bg-[var(--color-bg)] transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Professional <span className="text-[var(--color-primary)]">Experience</span>
                    </h2>
                    <p className="text-[var(--color-text-muted)] text-lg max-w-2xl mx-auto">
                        My journey in software engineering, building scalable solutions and secure systems.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[var(--color-bg-secondary)] rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-[var(--color-text)]">{exp.role}</h3>
                                    <h4 className="text-xl text-[var(--color-primary)] font-medium mt-1">{exp.company}</h4>
                                </div>
                                <div className="flex flex-col md:items-end mt-4 md:mt-0 text-[var(--color-text-muted)]">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} />
                                        <span className="text-sm font-medium">{exp.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2 mt-1">
                                        <Briefcase size={16} />
                                        <span className="text-sm">{exp.location}</span>
                                    </div>
                                </div>
                            </div>

                            <ul className="space-y-3">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="flex items-start text-[var(--color-text-muted)]">
                                        <span className="mr-3 mt-1.5 min-w-[6px] h-[6px] rounded-full bg-[var(--color-secondary)]"></span>
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
