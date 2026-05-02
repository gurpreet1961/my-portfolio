import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface HeroProps {
    theme: 'dark' | 'light';
}

// ─── Globe with 2 orbit rings ─────────────────────────────────────────────────
const Globe = ({ theme }: { theme: 'dark' | 'light' }) => {
    const globeRef = useRef<THREE.Mesh>(null);
    const ring1Ref = useRef<THREE.Mesh>(null);
    const ring2Ref = useRef<THREE.Mesh>(null);
    const dot1Ref = useRef<THREE.Mesh>(null);
    const dot2Ref = useRef<THREE.Mesh>(null);

    const primary = theme === 'dark' ? '#6366f1' : '#4f46e5';
    const secondary = theme === 'dark' ? '#a855f7' : '#9333ea';

    useFrame(({ clock, mouse }) => {
        const t = clock.getElapsedTime();
        if (globeRef.current) {
            globeRef.current.rotation.y = t * 0.15;
            globeRef.current.position.x = 2 + mouse.x * 0.3;
            globeRef.current.position.y = mouse.y * 0.25;
        }
        if (ring1Ref.current) ring1Ref.current.rotation.z = t * 0.35;
        if (ring2Ref.current) {
            ring2Ref.current.rotation.z = -t * 0.25;
            ring2Ref.current.rotation.y = t * 0.15;
        }
        // Orbit dot 1
        if (dot1Ref.current) {
            dot1Ref.current.position.x = 2 + Math.cos(t * 0.9) * 2.2;
            dot1Ref.current.position.y = Math.sin(t * 0.9) * 2.2 * 0.7;
        }
        // Orbit dot 2
        if (dot2Ref.current) {
            dot2Ref.current.position.x = 2 + Math.cos(-t * 0.55) * 2.8;
            dot2Ref.current.position.y = Math.sin(-t * 0.55) * 2.8 * 0.5;
        }
    });

    return (
        <group>
            {/* Core globe — low poly */}
            <mesh ref={globeRef} position={[2, 0, 0]}>
                <sphereGeometry args={[1.4, 32, 32]} />
                <MeshDistortMaterial
                    color={primary}
                    distort={0.2}
                    speed={1.2}
                    roughness={0.15}
                    metalness={0.85}
                />
            </mesh>

            {/* Orbit ring 1 */}
            <mesh ref={ring1Ref} position={[2, 0, 0]} rotation={[Math.PI / 4, 0, 0]}>
                <torusGeometry args={[2.2, 0.02, 6, 80]} />
                <meshBasicMaterial color={primary} transparent opacity={0.6} />
            </mesh>

            {/* Orbit ring 2 */}
            <mesh ref={ring2Ref} position={[2, 0, 0]} rotation={[Math.PI / 3, 0, 0]}>
                <torusGeometry args={[2.8, 0.015, 6, 80]} />
                <meshBasicMaterial color={secondary} transparent opacity={0.4} />
            </mesh>

            {/* Orbiting dots */}
            <mesh ref={dot1Ref} position={[2, 0, 0]}>
                <sphereGeometry args={[0.07, 8, 8]} />
                <meshBasicMaterial color={primary} />
            </mesh>
            <mesh ref={dot2Ref} position={[2, 0, 0]}>
                <sphereGeometry args={[0.06, 8, 8]} />
                <meshBasicMaterial color={secondary} />
            </mesh>
        </group>
    );
};

// ─── Lightweight network: 4 nodes + edges ─────────────────────────────────────
const NetworkGraph = ({ theme }: { theme: 'dark' | 'light' }) => {
    const groupRef = useRef<THREE.Group>(null);
    const primary = theme === 'dark' ? '#6366f1' : '#4f46e5';
    const secondary = theme === 'dark' ? '#a855f7' : '#9333ea';
    const accent = theme === 'dark' ? '#22d3ee' : '#0891b2';

    const nodes = useMemo<[number, number, number][]>(() => [
        [-4.2, 1.2, -1],
        [-3.0, -1.0, -0.5],
        [-5.2, -0.4, -1],
        [-3.6, 0.8, -1.5],
    ], []);

    const colors = [primary, secondary, accent, primary];

    const edges = useMemo(() => [[0, 1], [1, 2], [2, 3], [3, 0], [0, 2]], []);

    const lineGeo = useMemo(() => {
        const points: THREE.Vector3[] = [];
        edges.forEach(([a, b]) => {
            points.push(new THREE.Vector3(...nodes[a]));
            points.push(new THREE.Vector3(...nodes[b]));
        });
        return new THREE.BufferGeometry().setFromPoints(points);
    }, [nodes, edges]);

    useFrame(({ clock, mouse }) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = mouse.x * 0.06 + clock.getElapsedTime() * 0.03;
            groupRef.current.rotation.x = -mouse.y * 0.04;
        }
    });

    return (
        <group ref={groupRef}>
            <lineSegments geometry={lineGeo}>
                <lineBasicMaterial color={primary} transparent opacity={0.2} />
            </lineSegments>
            {nodes.map((pos, i) => (
                <Float key={i} speed={0.8 + i * 0.2} floatIntensity={0.3} rotationIntensity={0.2}>
                    <mesh position={pos}>
                        <octahedronGeometry args={[0.16, 0]} />
                        <meshStandardMaterial
                            color={colors[i]}
                            emissive={colors[i]}
                            emissiveIntensity={0.5}
                            roughness={0.3}
                            metalness={0.7}
                        />
                    </mesh>
                </Float>
            ))}
        </group>
    );
};

// ─── Single floating accent shape ────────────────────────────────────────────
const AccentShape = ({ theme }: { theme: 'dark' | 'light' }) => {
    const color = theme === 'dark' ? '#22d3ee' : '#0891b2';
    return (
        <Float speed={1.0} floatIntensity={0.6} rotationIntensity={0.6} position={[-1.2, 2.2, -2.5]}>
            <mesh>
                <icosahedronGeometry args={[0.38, 0]} />
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.3}
                    roughness={0.3}
                    metalness={0.7}
                    wireframe
                />
            </mesh>
        </Float>
    );
};

// ─── Stars background ─────────────────────────────────────────────────────────
const Background = () => (
    <Stars radius={100} depth={50} count={3000} factor={3} saturation={0} fade speed={0.8} />
);

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero: React.FC<HeroProps> = ({ theme }) => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[var(--color-bg)] transition-colors duration-300">
            <div className="absolute inset-0 z-0">
                <Canvas
                    camera={{ position: [0, 0, 7], fov: 70 }}
                    dpr={[1, 1.5]}
                    performance={{ min: 0.5 }}
                >
                    <Suspense fallback={null}>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[10, 10, 5]} intensity={1.0} />
                        <pointLight
                            position={[-8, 4, 2]}
                            intensity={1.2}
                            color={theme === 'dark' ? '#a855f7' : '#9333ea'}
                        />

                        <Globe theme={theme} />
                        <NetworkGraph theme={theme} />
                        <AccentShape theme={theme} />
                        <Background />
                    </Suspense>
                </Canvas>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
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
