import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";

// Rotating icosahedron wireframe + sparkle particles
const DiagnosticNodes = () => {
  const meshRef = useRef<any>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.08;
    }
  });
  return (
    <group>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[4, 2]} />
        <meshBasicMaterial color="#ff0044" wireframe transparent opacity={0.07} />
      </mesh>
      <Sparkles count={180} scale={14} size={1.5} speed={0.4} color="#ff0044" opacity={0.25} />
    </group>
  );
};

// Rotating organic torus knot
const OrganicRedCore = () => {
  const meshRef = useRef<any>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.18;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.28;
    }
  });
  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[3.5, 1.1, 200, 60]} />
      <MeshDistortMaterial
        color="#ff0000"
        emissive="#2a0000"
        roughness={0.1}
        metalness={0.8}
        distort={0.45}
        speed={1}
        transparent
        opacity={0.55}
      />
    </mesh>
  );
};

interface CinematicBackgroundProps {
  variant?: "nodes" | "torus";
  opacity?: number;
}

export default function CinematicBackground({
  variant = "torus",
  opacity = 0.75,
}: CinematicBackgroundProps) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        opacity,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, variant === "nodes" ? 6 : 9] }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        {variant === "torus" && (
          <>
            <directionalLight position={[10, 10, 10]} intensity={2.5} color="#ff0044" />
            <directionalLight position={[-10, -10, -10]} intensity={1} color="#550000" />
          </>
        )}
        <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
          {variant === "nodes" ? <DiagnosticNodes /> : <OrganicRedCore />}
        </Float>
      </Canvas>
    </div>
  );
}
