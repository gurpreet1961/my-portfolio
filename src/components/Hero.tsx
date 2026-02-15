import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Stars, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const AnimatedSphere = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    const materialRef = useRef<any>(null);

    useFrame(({ clock, mouse }) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
            // Slight mouse interaction
            meshRef.current.position.x = mouse.x * 2;
            meshRef.current.position.y = mouse.y * 2;
        }
        if (materialRef.current) {
            materialRef.current.distort = 0.4 + Math.sin(clock.getElapsedTime()) * 0.2;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <mesh ref={meshRef} position={[2, 0, 0]} scale={2.2}>
                <sphereGeometry args={[1, 100, 200]} />
                <MeshDistortMaterial
                    ref={materialRef}
                    color="#6366f1"
                    attach="material"
                    distort={0.5}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>
        </Float>
    );
};

const BackgroundParticles = () => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame(({ mouse }) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = mouse.x * 0.1;
            groupRef.current.rotation.x = -mouse.y * 0.1;
        }
    });

    return (
        <group ref={groupRef}>
            <Stars radius={100} depth={50} count={7000} factor={4} saturation={0} fade speed={1.5} />
        </group>
    );
}


const Hero: React.FC = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-dark to-slate-900">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                    <Suspense fallback={null}>
                        <ambientLight intensity={0.6} />
                        <directionalLight position={[10, 10, 5]} intensity={1.5} />
                        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#secondary" />

                        <AnimatedSphere />
                        <BackgroundParticles />

                        {/* Secondary floating shape */}
                        <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
                            <mesh position={[-3, -2, -2]} scale={1.2}>
                                <torusKnotGeometry args={[0.6, 0.2, 128, 32]} />
                                <meshStandardMaterial
                                    color="#a855f7"
                                    roughness={0.3}
                                    metalness={0.8}
                                    wireframe={true}
                                />
                            </mesh>
                        </Float>


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
                    <h2 className="text-xl md:text-2xl font-medium text-primary mb-4 tracking-wider uppercase">
                        Hi, I'm Gurpreet Singh
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
                        Turning Code into <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-secondary animate-pulse-slow">
                            Digital Masterpieces
                        </span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
                        Full-stack developer with a passion for building immersive, high-performance web applications.
                    </p>

                    <div className="flex gap-6 justify-center">
                        <a
                            href="#contact"
                            className="bg-primary hover:bg-secondary text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-primary/40 ring-2 ring-primary/50 ring-offset-2 ring-offset-dark"
                        >
                            Hire Me
                        </a>
                        <a
                            href="#projects"
                            className="bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 hover:border-white/40"
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
