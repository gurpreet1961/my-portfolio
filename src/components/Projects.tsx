import React, { useEffect, useState } from 'react';
import { fetchGitHubProjects, type Project } from '../services/githubService';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    // Manual Crio Projects (as per request)
    const crioProjects = [
        {
            id: 9991,
            name: "QKart Frontend",
            description: "Developed a functional e-commerce frontend using React, utilizing REST APIs to fetch product data and implementing responsive design.",
            html_url: "https://www.crio.do/learn/portfolio/gurpreet012guru/?edit=true",
            homepage: "https://www.crio.do/learn/portfolio/gurpreet012guru/?edit=true",
            language: "React",
            topics: ["crio", "ecommerce", "react"],
        },
        {
            id: 9992,
            name: "XBoard",
            description: "Built a news feed aggregator with filtering and sorting capabilities using pure JavaScript, HTML, and CSS.",
            html_url: "https://www.crio.do/learn/portfolio/gurpreet012guru/?edit=true",
            homepage: "",
            language: "JavaScript",
            topics: ["crio", "news-feed", "dom-manipulation"]
        }
    ];

    useEffect(() => {
        const loadProjects = async () => {
            const githubData = await fetchGitHubProjects();
            // Filter out forks if desired, or keep them.
            // Merging Crio projects at the top
            const manualProjects = crioProjects.map(p => ({
                ...p,
                stargazers_count: 0 // Default for manual
            })) as unknown as Project[];

            setProjects([...manualProjects, ...githubData]);
            setLoading(false);
        };
        loadProjects();
    }, []);

    return (
        <section id="projects" className="py-20 bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Featured <span className="text-[var(--color-primary)]">Projects</span>
                    </h2>
                    <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
                        A collection of my work from GitHub, Crio.do, and other experiments.
                    </p>
                </motion.div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--color-primary)]"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 transition-all hover:shadow-lg hover:shadow-[var(--color-primary)]/20 group"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 bg-[var(--color-primary)]/20 rounded-lg text-[var(--color-primary)]">
                                        <Folder size={24} />
                                    </div>
                                    <div className="flex space-x-3">
                                        {project.html_url && (
                                            <a href={project.html_url} target="_blank" rel="noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {project.homepage && (
                                            <a href={project.homepage} target="_blank" rel="noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors text-[var(--color-text)]">
                                    {project.name}
                                </h3>
                                <p className="text-[var(--color-text-muted)] text-sm mb-4 line-clamp-3">
                                    {project.description || "No description available."}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.language && (
                                        <span className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300">
                                            {project.language}
                                        </span>
                                    )}
                                    {project.topics && project.topics.slice(0, 3).map(topic => (
                                        <span key={topic} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
