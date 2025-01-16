import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const RotatingHuman = () => {
  // Load the 3D human model
  const Model = () => {
    const { scene } = useGLTF("/path-to-your-3d-model.glb"); // Replace with the path to your .glb file
    return <primitive object={scene} scale={1.5} />;
  };

  return (
    <div className="w-full h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Model />
        {/* Controls for rotation and zoom */}
        <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default RotatingHuman;
