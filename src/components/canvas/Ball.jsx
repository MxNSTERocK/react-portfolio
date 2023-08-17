import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={0} rotationIntensity={1} floatIntensity={5}>
      <ambientLight intensity={8} />
      <directionalLight position={[0, 0, 0]} />
      <group>
        {/* Black border */}
        <mesh scale={2.75}>
          <boxGeometry args={[2.1, 2.1, 2.1]} />
          <meshStandardMaterial color="#260B73" flatShading />
        </mesh>

        {/* White square */}
        <mesh scale={2.75}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="#F85A38" flatShading />
          <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={decal} flatShading />
        </mesh>
      </group>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" dpr={[2, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
