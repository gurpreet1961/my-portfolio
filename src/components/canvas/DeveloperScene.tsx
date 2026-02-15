import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

interface DeveloperSceneProps {
    theme: 'dark' | 'light';
}

const DeveloperScene: React.FC<DeveloperSceneProps> = ({ theme }) => {
    const groupRef = useRef<THREE.Group>(null);
    const headRef = useRef<THREE.Mesh>(null);
    const laptopRef = useRef<THREE.Group>(null);

    // Mouse interaction
    useFrame(({ mouse }) => {
        if (groupRef.current) {
            // Gentle rotation of the whole group
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x * 0.1, 0.1);
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mouse.y * 0.05, 0.1);
        }
        if (headRef.current) {
            // Head tracks mouse more actively
            headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, mouse.x * 0.5, 0.1);
            headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -mouse.y * 0.5, 0.1);
        }
    });

    const isDark = theme === 'dark';

    return (
        <group ref={groupRef} position={[0, -1, 0]} rotation={[0, -0.2, 0]}>
            <PerspectiveCamera makeDefault position={[0, 1, 5]} fov={50} />

            {/* Lights */}
            <ambientLight intensity={isDark ? 0.2 : 0.8} />
            <directionalLight
                position={[5, 10, 5]}
                intensity={isDark ? 0.2 : 1.5}
                castShadow
                shadow-bias={-0.0001}
            />
            {/* Screen Glow (Blue/Purple) - Stronger in Dark Mode */}
            <pointLight
                position={[0, 0.5, 1.5]}
                intensity={isDark ? 2 : 0.5}
                distance={3}
                color={isDark ? "#6366f1" : "#4f46e5"}
            />

            {/* Developer Character (Geometric/Voxel Style) */}
            <group position={[0, 0, 0]}>
                {/* Body */}
                <mesh position={[0, 0.5, 0]}>
                    <boxGeometry args={[1.2, 1.2, 0.8]} />
                    <meshStandardMaterial color={isDark ? "#1e293b" : "#334155"} />
                </mesh>
                {/* Head */}
                <mesh ref={headRef} position={[0, 1.4, 0]}>
                    <boxGeometry args={[0.8, 0.9, 0.8]} />
                    <meshStandardMaterial color="#ffdbac" /> {/* Skin tone */}
                    {/* Glasses/Eyes */}
                    <mesh position={[0, 0.1, 0.41]}>
                        <boxGeometry args={[0.6, 0.2, 0.05]} />
                        <meshStandardMaterial color="#000000" />
                    </mesh>
                </mesh>
            </group>

            {/* Laptop */}
            <group ref={laptopRef} position={[0, 0.5, 1.5]} rotation={[-0.2, 0, 0]}>
                {/* Base */}
                <mesh position={[0, -0.05, 0]}>
                    <boxGeometry args={[1.6, 0.1, 1]} />
                    <meshStandardMaterial color="#94a3b8" metalness={0.8} roughness={0.2} />
                </mesh>
                {/* Screen */}
                <group position={[0, 0.5, -0.5]} rotation={[0.4, 0, 0]}>
                    <mesh position={[0, 0.4, 0.05]}>
                        <boxGeometry args={[1.6, 1, 0.05]} />
                        <meshStandardMaterial color="#94a3b8" metalness={0.8} roughness={0.2} />
                    </mesh>
                    {/* Display (Emissive) */}
                    <mesh position={[0, 0.4, 0.08]}>
                        <planeGeometry args={[1.5, 0.9]} />
                        <meshStandardMaterial
                            emissive={isDark ? "#6366f1" : "#4f46e5"}
                            emissiveIntensity={isDark ? 2 : 1}
                            color="#000000"
                        />
                    </mesh>
                </group>
            </group>

            {/* Desk */}
            <mesh position={[0, -0.1, 1]} rotation={[-0.1, 0, 0]}>
                <boxGeometry args={[4, 0.1, 3]} />
                <meshStandardMaterial color={isDark ? "#334155" : "#e2e8f0"} />
            </mesh>

            {/* Floating Elements (Code symbols) */}
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                <mesh position={[-1.5, 2, 0]} rotation={[0, 0, 0.5]}>
                    <torusGeometry args={[0.2, 0.05, 16, 32]} />
                    <meshStandardMaterial color="#a855f7" />
                </mesh>
                <mesh position={[1.5, 1.5, 0.5]} rotation={[0.5, 0, 0]}>
                    <octahedronGeometry args={[0.2]} />
                    <meshStandardMaterial color="#6366f1" />
                </mesh>
            </Float>
        </group>
    );
};

export default DeveloperScene;
