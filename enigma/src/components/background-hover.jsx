"use client"
import React, { useEffect, useRef } from 'react';

const BackgroundEffect = () => {
  const containerRef = useRef(null);
  const lastMousePosition = useRef({ x: 0, y: 0 });
  const lastTimestamp = useRef(0);

  useEffect(() => {
    const GRID_SIZE = 20;
    let MOVEMENT_RADIUS = 20;
    const container = document.createElement('div');
    
    
    container.className = `
      fixed top-0 left-0 w-full h-screen grid z-[100] pointer-events-none overflow-hidden mix-blend-difference
    `;

    const cols = Math.ceil(window.innerWidth / GRID_SIZE);
    const rows = Math.ceil(window.innerHeight / GRID_SIZE);
    
    container.style.gridTemplateColumns = `repeat(${cols}, ${GRID_SIZE}px)`;
    container.style.gridTemplateRows = `repeat(${rows}, ${GRID_SIZE}px)`;

    
    for (let i = 0; i < rows * cols; i++) {
      const pixel = document.createElement('div');
      pixel.className = `
        w-[${GRID_SIZE}px] h-[${GRID_SIZE}px] bg-[rgba(0,0,0,0.1)] transition-transform ease-out duration-300
      `;
      container.appendChild(pixel);
    }

    document.body.appendChild(container);

    
    const handleMouseMove = (e) => {
      const { clientX, clientY, timeStamp } = e;
      const pixels = container.children;

      
      const deltaX = clientX - lastMousePosition.current.x;
      const deltaY = clientY - lastMousePosition.current.y;
      const deltaT = timeStamp - lastTimestamp.current;
      const speed = Math.sqrt(deltaX * deltaX + deltaY * deltaY) / deltaT;

      
      MOVEMENT_RADIUS = Math.min(50, 20 + speed * 10);

      lastMousePosition.current = { x: clientX, y: clientY };
      lastTimestamp.current = timeStamp;

      Array.from(pixels).forEach((pixel) => {
        const rect = pixel.getBoundingClientRect();
        const pixelX = rect.left + rect.width / 2;
        const pixelY = rect.top + rect.height / 2;

        const deltaX = clientX - pixelX;
        const deltaY = clientY - pixelY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if (distance < MOVEMENT_RADIUS) {
          const force = (MOVEMENT_RADIUS - distance) / MOVEMENT_RADIUS;
          const moveX = (deltaX / distance) * force * 10;
          const moveY = (deltaY / distance) * force * 10;
          pixel.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + force * 0.2})`;
          pixel.style.backgroundColor = `rgb(0, 255, 0)`;
        } else {
          pixel.style.transform = 'translate(0, 0) scale(1)';
          pixel.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        }
      });
    };

    
    const handleResize = () => {
      const newCols = Math.ceil(window.innerWidth / GRID_SIZE);
      const newRows = Math.ceil(window.innerHeight / GRID_SIZE);
      
      container.style.gridTemplateColumns = `repeat(${newCols}, ${GRID_SIZE}px)`;
      container.style.gridTemplateRows = `repeat(${newRows}, ${GRID_SIZE}px)`;
      
      
      container.innerHTML = '';
      for (let i = 0; i < newRows * newCols; i++) {
        const pixel = document.createElement('div');
        pixel.className = `
          w-[${GRID_SIZE}px] h-[${GRID_SIZE}px] bg-[rgba(0,255,0,0.1)] transition-transform ease-out duration-300 border border-[rgba(0,255,0,0.05)]
        `;
        container.appendChild(pixel);
      }
    };

    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      container.remove();
    };
  }, []);

  return null;
};

export default BackgroundEffect;