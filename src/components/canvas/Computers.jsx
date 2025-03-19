import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./network/scene.gltf");

  const AmbientLight = () => {
    return <ambientLight intensity={isMobile ? 1 : 100} color={0xfff} />;
  };

  return (
    <mesh>
      <AmbientLight />
      <spotLight
        position={[-20, 50, 10]}
        angle={0}
        penumbra={1}
        intensity={isMobile ? 0.5 : 2}
        castShadow
        shadow-mapSize={isMobile ? 12 : 24}
        
      />
      <pointLight intensity={isMobile ? 1 : 2} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 1 : 1} // Adjust the scale for mobile
        position={isMobile ? [0, -3, -0.8] : [0, -3.25, -1.5]}
        rotation={[-0.1, 0.5, -0.01]}
        
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 800px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: isMobile ? 25 : 35 }} // Adjust the FOV for mobile
      gl={{ preserveDrawingBuffer: true }}
      className='cursor-pointer'
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false} // Disable zoom on mobile
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
