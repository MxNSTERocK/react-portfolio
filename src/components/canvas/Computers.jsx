import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  const [rotation, setRotation] = useState([0, 0, 0]);
  const [rotationDirection, setRotationDirection] = useState(1); // 1 for clockwise, -1 for counterclockwise

  useEffect(() => {
    // Function to update the rotation continuously
    const updateRotation = () => {
      setRotation((prevRotation) => [
        prevRotation[0] + 0.005 * rotationDirection, // Rotation around the X-axis
        prevRotation[1] + 0.005 * rotationDirection, // Rotation around the Y-axis
        prevRotation[2] // No rotation around the Z-axis (keeps it upright)
      ]);
    };

    // Start updating the rotation
    const rotationInterval = setInterval(updateRotation, 16); // 60 FPS

    // Clean up the interval when the component unmounts
    return () => clearInterval(rotationInterval);
  }, [rotationDirection]);

  useEffect(() => {
    // Function to update the rotation direction randomly after completing one full rotation
    const updateRotationDirection = () => {
      setRotationDirection(Math.random() > 0.5 ? 1 : -1); // Randomly set direction to 1 (clockwise) or -1 (counterclockwise)
    };

    // Start updating the rotation direction after one full rotation (every 360 degrees)
    const rotationDirectionInterval = setInterval(updateRotationDirection, 60000 / 0.005); // Approximately after one full rotation

    // Clean up the interval when the component unmounts
    return () => clearInterval(rotationDirectionInterval);
  }, []);

  // Adjust the scale and position based on the isMobile variable
  const scaleValue = isMobile ? 0.7 : 0.75;
  const positionValue = isMobile ? [300, -3000, -2000] : [300, -55, -1.5];

  return (
    <mesh rotation={rotation}>
      <hemisphereLight intensity={2} groundColor="black" />
      <spotLight
        position={[-200, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={[scaleValue, scaleValue, scaleValue]} // Adjust the scale
        position={positionValue} // Adjust the position
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [200, 300, 500], fov: 33 }}
      gl={{ preserveDrawingBuffer: false }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
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
