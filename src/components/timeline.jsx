import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Plane, ScrollControls, useScroll } from '@react-three/drei';
import { createNoise4D } from 'simplex-noise';
import * as THREE from 'three';
import { gsap } from 'gsap';

const noise4D = createNoise4D();
const height = 0.08;
const speed = 0.75;

const events = [
  { name: "Event 1", description: "Registration" },
  { name: "Event 2", description: "Opening Ceremony" },
  { name: "Event 3", description: "Keynote Speech" },
  { name: "Event 4", description: "Lunch Break" },
  { name: "Event 5", description: "Workshops" },
  { name: "Event 6", description: "Closing Ceremony" },
];

function AnimatedPlane() {
  const ref = useRef();
  const timeRef = useRef(0);

  useFrame((state, delta) => {
    const vertices = ref.current.geometry.attributes.position.array;
    timeRef.current += delta;
    for (let i = 0; i < vertices.length; i += 3) {
      const x = vertices[i];
      const y = vertices[i + 1];
      const z = noise4D(x * height, y * height, 0, timeRef.current * speed);
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

function Scene() {
  const { scene, gl } = useThree();

  useEffect(() => {
    scene.fog = new THREE.FogExp2('#111111', 0.02);
    gl.setClearColor('#000000', 0);
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

function Sphere({ position, onHover, onClick, name }) {
  const sphereRef = useRef();

  useEffect(() => {
    if (sphereRef.current) {
      const randomOffset = Math.random();

      gsap.to(sphereRef.current.position, {
        y: 4.5,
        duration: 1,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: randomOffset,
      });
    }
  }, []);

  const handlePointerMove = (event) => {
    onHover(true, { x: event.clientX, y: event.clientY });
  };

  const handlePointerOut = () => {
    onHover(false, { x: 0, y: 0 });
  };

  const handleClick = () => {
    onClick(name, position);
  };

  return (
    <mesh
      ref={sphereRef}
      position={position}
      onPointerMove={handlePointerMove}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
      className="cursor-pointer"
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#22ec08" emissive="#22ec08" />
    </mesh>
  );
}

function Spheres({ onHover, onClick }) {
  const positions = [
    // new THREE.Vector3(0, 5, 0),
    new THREE.Vector3(1, 5, -10),
    new THREE.Vector3(20, 5, -20),
    new THREE.Vector3(30, 5, -30),
    new THREE.Vector3(40, 5, -40),
    new THREE.Vector3(50, 5, -40),
  ];

  return (
    <>
      {positions.map((position, index) => (
        <Sphere
          key={index}
          position={position}
          onHover={onHover}
          onClick={onClick}
          name={`Sphere${index + 1}`}
        />
      ))}
    </>
  );
}

function Timeline() {
  const [hovered, setHovered] = useState(false);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleHover = (isHovered, position) => {
    setHovered(isHovered);
    setHoverPosition(position);
  };

  const handleClick = (name, position) => {
    const eventIndex = parseInt(name.replace('Sphere', '')) - 1;
    setSelectedEvent(events[eventIndex]);
  };

  return (
    <div className="h-big-height">
      <Canvas
        camera={{
          position: [0.2, 7.5, 30],
          fov: 45,
          rotation: [-0, 25, 0, 0],
        }}
        className="w-full h-full"
        gl={{ alpha: true, antialias: true }}
      >
        <ScrollControls pages={6} damping={1}>
          <CameraAnimation />
          <Scene />
          <AnimatedPlane />
          <Spheres onHover={handleHover} onClick={handleClick} />
        </ScrollControls>
      </Canvas>
      {hovered && (
        <div
          className="fixed w-24 h-24 rounded-full bg-green-500 bg-opacity-50 flex items-center justify-center pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50"
          style={{
            left: hoverPosition.x,
            top: hoverPosition.y,
          }}
        >
          <span className="text-black font-bold">Click me!</span>
        </div>
      )}
      {selectedEvent && (
        <div className="fixed bottom-1/2 left-1/2 p-4 text-black bg-white shadow-lg z-50" >
          <h2 className="text-lg font-bold">{selectedEvent.name}</h2>
          <p>{selectedEvent.description}</p>
        </div>
      )}
    </div>
  );
}

export default Timeline;