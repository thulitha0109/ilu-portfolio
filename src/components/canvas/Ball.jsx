import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  PerspectiveCamera,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Box = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={0.5} floatIntensity={5}>
      <ambientLight intensity={5} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial
          color='#fff'
          polygonOffset
          polygonOffsetFactor={5}
          flatShading
        />
        <Decal
          position={[0, 0, 1.5]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={[2, 2, 2]}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas camera={{ position: [0, 0, 15] }}>
      <PerspectiveCamera makeDefault fov={50} position={[0, 0, 15]} />
      <Suspense fallback={<CanvasLoader />}>
        <Box imgUrl={icon} />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} />
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
