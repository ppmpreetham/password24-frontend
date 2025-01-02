import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Plane, OrbitControls, ScrollControls, useScroll } from '@react-three/drei';
import { createNoise2D } from 'simplex-noise';
import * as THREE from 'three';
import { gsap } from 'gsap';

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
    scene.fog = new THREE.FogExp2('#111111', 0.02);
    gl.setClearColor('#111111');
  }, [scene, gl]);

  return null;
}

function CameraAnimation() {
  const { camera } = useThree();
  const scroll = useScroll();
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 5, 0),
    new THREE.Vector3(1, 5, -10),
    new THREE.Vector3(20, 5, -20),
    new THREE.Vector3(30, 5, -30),
    new THREE.Vector3(40, 5, -40),
    new THREE.Vector3(50, 5, -40),
  ]);

  useFrame(() => {
    const scrollOffset = scroll.offset;
    const point = curve.getPointAt(scrollOffset);
    const tangent = curve.getTangentAt(scrollOffset);

    camera.position.copy(point);
    camera.lookAt(point.clone().add(tangent));
  });

  return null;
}

function Sphere({ position }) {
  const sphereRef = useRef();

  useEffect(() => {
    if (sphereRef.current) {
      const randomOffset = Math.random();

      gsap.to(sphereRef.current.scale, {
        x: 1.5,
        y: 1.5,
        z: 1.5,
        duration: 1,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: randomOffset,
      });

      gsap.to(sphereRef.current.position, {
        y: 4.5,
        duration: 1,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: randomOffset,
      });
    }
  }, []);

  return (
    <mesh ref={sphereRef} position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="green" emissive="green" />
    </mesh>
  );
}

function Spheres() {
  const positions = [
    new THREE.Vector3(0, 5, 0),
    new THREE.Vector3(1, 5, -10),
    new THREE.Vector3(20, 5, -20),
    new THREE.Vector3(30, 5, -30),
    new THREE.Vector3(40, 5, -40),
    new THREE.Vector3(50, 5, -40),
  ];

  return (
    <>
      {positions.map((position, index) => (
        <Sphere key={index} position={position} />
      ))}
    </>
  );
}

function Timeline() {
  return (
    <div className="h-screen">
      <Canvas
        camera={{
          position: [0.2, 7.5, 30],
          fov: 45,
          rotation: [-0,25, 0, 0]
        }}
        className="w-full h-full"
        gl={{ alpha: false, antialias: true }}
      >
        <ScrollControls pages={6} damping={1}>
          <CameraAnimation />
          <Scene />
          <AnimatedPlane />
          <Spheres />
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default Timeline;