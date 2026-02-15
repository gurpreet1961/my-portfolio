import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import DeveloperScene from './canvas/DeveloperScene';

interface HeroProps {
    theme: 'dark' | 'light';
}

const Hero: React.FC<HeroProps> = ({ theme }) => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[var(--color-bg)] transition-colors duration-300">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Canvas shadows camera={{ position: [0, 0, 5], fov: 75 }}>
                    <Suspense fallback={null}>
                        <DeveloperScene theme={theme} />
                    </Suspense>
                </Canvas>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="pointer-events-auto"
                >
                    <h2 className="text-xl md:text-2xl font-medium text-[var(--color-primary)] mb-4 tracking-wider uppercase">
                        Hi, I'm Gurpreet Singh
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-[var(--color-text)] mb-6 leading-tight tracking-tight drop-shadow-lg">
                        Turning Code into <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] via-purple-500 to-[var(--color-secondary)] animate-pulse-slow">
                            Digital Masterpieces
                        </span>
                    </h1>
                    <p className="text-[var(--color-text-muted)] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
                        Full-stack developer with a passion for building immersive, high-performance web applications.
                    </p>

                    <div className="flex gap-6 justify-center">
                        <a
                            href="#contact"
                            className="bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-[var(--color-primary)]/40 ring-2 ring-[var(--color-primary)]/50 ring-offset-2 ring-offset-[var(--color-bg)]"
                        >
                            Hire Me
                        </a>
                        <a
                            href="#projects"
                            className="bg-[var(--color-bg-secondary)]/50 backdrop-blur-sm border border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)] text-[var(--color-text)] font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 hover:border-[var(--color-primary)]/40"
                        >
                            View Work
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
