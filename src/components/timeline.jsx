import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Plane, OrbitControls } from '@react-three/drei';
import { createNoise2D } from 'simplex-noise';
import * as THREE from 'three';

const noise2D = createNoise2D();
const height = 0.1;

function AnimatedPlane() {
  const ref = useRef();

  useFrame(() => {
    const vertices = ref.current.geometry.attributes.position.array;
    for (let i = 0; i < vertices.length; i += 3) {
      const x = vertices[i];
      const y = vertices[i + 1];
      const z = noise2D(x * height, y * height);
      vertices[i + 2] = z;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Plane ref={ref} args={[50, 100, 200, 200]} rotation={[Math.PI / 2, 0, 0]} scale={[3, 3, 3]}>
      <meshBasicMaterial attach="material" color="green" wireframe />
    </Plane>
  );
}

function CameraControls() {
  const controlsRef = useRef();
  const { camera, gl } = useThree();

  useEffect(() => {
    const controls = controlsRef.current;
    const handleChange = (event) => {
      console.log("Position:");
      console.log(controls.object.position);
      console.log("Rotation:");
      console.log(controls.object.rotation);
    };
    controls.addEventListener('change', handleChange);

    return () => {
      controls.removeEventListener('change', handleChange);
    };
  }, []);

  return <OrbitControls ref={controlsRef} args={[camera, gl.domElement]} />;
}

function Scene() {
  const { scene, gl } = useThree();

  useEffect(() => {
    scene.fog = new THREE.FogExp2('black', 0.015);
    gl.setClearColor('black');
  }, [scene, gl]);

  return null;
}

function Timeline() {
  return (
    <div className="h-screen">
      <Canvas
        camera={{
          position: [0.2166624773016082, 7.317632121626254, 29.524806868365605],
          fov: 45,
          rotation: [-0.24295120019828584, 0.007122689397216926, 0.0017653197905153335]
        }}
        className="w-full h-full"
        gl={{ alpha: false, antialias: true }}
      >
        <Scene />
        <AnimatedPlane />
        <CameraControls />
      </Canvas>
    </div>
  );
}

export default Timeline;