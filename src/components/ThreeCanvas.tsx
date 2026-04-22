import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, Float } from "@react-three/drei";
import * as THREE from "three";

function M60MirrorScanner() {
  return (
    <group position={[0, -1, 0]}>
        <mesh position={[0, 2, 0]}>
            <boxGeometry args={[1.5, 4, 0.2]} />
            <meshPhysicalMaterial color="#111111" metalness={0.9} roughness={0.05} clearcoat={1} />
        </mesh>
        <mesh position={[0, 3.8, 0.15]}>
            <boxGeometry args={[0.8, 0.2, 0.1]} />
            <meshStandardMaterial color="#ff0015" emissive="#ff0015" emissiveIntensity={2} />
        </mesh>
        <mesh position={[0, 0, -0.2]}>
            <boxGeometry args={[1.2, 0.1, 0.8]} />
            <meshStandardMaterial color="#333333" metalness={0.6} roughness={0.8} />
        </mesh>
    </group>
  );
}

function S30FitnessScanner() {
    return (
      <group position={[0, -1, 0]}>
          <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[1.2, 1.2, 0.15, 32]} />
              <meshStandardMaterial color="#1f1f1f" metalness={0.5} roughness={0.7} />
          </mesh>
          <mesh position={[0, 1.5, -0.6]}>
              <boxGeometry args={[0.3, 3, 0.2]} />
              <meshStandardMaterial color="#cfcfcf" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[0, 2.5, -0.4]}>
              <boxGeometry args={[1.5, 0.1, 0.1]} />
              <meshStandardMaterial color="#ff0015" metalness={0.4} roughness={0.5} />
          </mesh>
          <mesh position={[0, 3.2, -0.5]} rotation={[Math.PI/2, 0, 0]}>
              <cylinderGeometry args={[0.2, 0.2, 0.4, 16]} />
              <meshStandardMaterial color="#111" metalness={0.9} roughness={0.1} />
          </mesh>
      </group>
    );
}

function R60MedicalScanner() {
    return (
      <group position={[0, -1, 0]}>
          <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[1.5, 1.5, 0.2, 32]} />
              <meshStandardMaterial color="#222" metalness={0.4} roughness={0.8} />
          </mesh>
          <mesh position={[0, 1.8, 0]}>
              <torusGeometry args={[1.8, 0.15, 16, 64]} />
              <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.3} />
          </mesh>
          <mesh position={[0, 1.8, 0]}>
              <torusGeometry args={[1.7, 0.02, 16, 64]} />
              <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={2} />
          </mesh>
          <mesh position={[0, 1.5, -1.8]}>
              <boxGeometry args={[0.8, 3, 0.2]} />
              <meshStandardMaterial color="#111" metalness={0.6} roughness={0.5} />
          </mesh>
      </group>
    );
}

function AvatarHologram() {
    return (
      <group position={[0, -2, 0]}>
          <mesh position={[0, -0.1, 0]}>
             <cylinderGeometry args={[2.5, 2.5, 0.2, 64]} />
             <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.5} wireframe opacity={0.3} transparent />
          </mesh>
          <mesh position={[0, -0.05, 0]}>
             <cylinderGeometry args={[2.2, 2.2, 0.05, 64]} />
             <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} opacity={0.1} transparent />
          </mesh>
          
          <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
             <mesh position={[0, 4.6, 0]}>
                 <sphereGeometry args={[0.3, 16, 16]} />
                 <meshStandardMaterial color="#00e5ff" wireframe opacity={0.6} transparent emissive="#00e5ff" />
             </mesh>
             <group position={[0, 3.2, 0]}>
                <mesh>
                   <capsuleGeometry args={[0.5, 1.2, 8, 16]} />
                   <meshStandardMaterial color="#00e5ff" wireframe opacity={0.2} transparent />
                </mesh>
                {[0, 0.2, 0.4, 0.6, -0.2, -0.4].map((y, i) => (
                   <mesh key={i} position={[0, y, 0]} rotation={[Math.PI/2, 0, 0]}>
                      <torusGeometry args={[0.55, 0.01, 8, 32]} />
                      <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" opacity={0.5} transparent />
                   </mesh>
                ))}
             </group>
             
             <mesh position={[0, 1.8, 0]} rotation={[Math.PI/2, 0, 0]}>
                 <torusGeometry args={[0.4, 0.1, 12, 16]} />
                 <meshStandardMaterial color="#3b82f6" wireframe opacity={0.5} transparent />
             </mesh>

             <mesh position={[0, 3, -0.2]}>
                <cylinderGeometry args={[0.05, 0.05, 3, 8]} />
                <meshStandardMaterial color="#ffffff" emissive="#ffffff" opacity={0.2} transparent />
             </mesh>

             <group position={[-0.8, 3.8, 0]} rotation={[0, 0, 0.3]}>
                 <mesh><capsuleGeometry args={[0.15, 1.2, 4, 8]} /><meshStandardMaterial color="#3b82f6" wireframe opacity={0.3} transparent /></mesh>
                 <mesh position={[0, -0.6, 0]}><sphereGeometry args={[0.18, 8, 8]} /><meshStandardMaterial color="#00e5ff" opacity={0.5} transparent /></mesh>
             </group>
             <group position={[0.8, 3.8, 0]} rotation={[0, 0, -0.3]}>
                 <mesh><capsuleGeometry args={[0.15, 1.2, 4, 8]} /><meshStandardMaterial color="#3b82f6" wireframe opacity={0.3} transparent /></mesh>
                 <mesh position={[0, -0.6, 0]}><sphereGeometry args={[0.18, 8, 8]} /><meshStandardMaterial color="#00e5ff" opacity={0.5} transparent /></mesh>
             </group>
          </Float>

          <mesh position={[0, 2.5, 0]}>
             <cylinderGeometry args={[2, 0.1, 5, 32]} />
             <meshStandardMaterial color="#00e5ff" opacity={0.05} transparent side={THREE.DoubleSide} />
          </mesh>
      </group>
    );
}

function ProceduralScannerModel({ productId }: { productId: string }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
        groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  const getModel = () => {
      const id = productId.toLowerCase();
      if (id.includes('avatar')) return <AvatarHologram />;
      if (id.includes('m60')) return <M60MirrorScanner />;
      if (id.includes('r60') || id.includes('explorer')) return <R60MedicalScanner />;
      return <S30FitnessScanner />;
  };

  return (
    <group ref={groupRef}>
        <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
            {getModel()}
        </Float>
    </group>
  );
}

export default function ThreeCanvas({ productId = "visbody-s30" }: { productId?: string }) {
  return (
    <Canvas camera={{ position: [2, 1.5, 6], fov: 55 }} className="w-full h-full cursor-grab active:cursor-grabbing">
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-5, 5, -5]} intensity={0.5} color="#ff0015" />
      <pointLight position={[0, 2, 2]} intensity={0.8} color="#06b6d4" />
      <ProceduralScannerModel productId={productId} />
      <Environment preset="studio" />
      <ContactShadows position={[0, -1.5, 0]} opacity={0.6} scale={10} blur={2.5} far={4} color="#000000" />
    </Canvas>
  );
}
