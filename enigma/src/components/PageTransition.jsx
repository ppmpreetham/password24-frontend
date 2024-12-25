import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const PageTransition = ({ onComplete }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const pixels = Array.from({ length: 400 }, (_, i) => {
            const pixel = document.createElement('div');
            pixel.className = 'w-16 h-16 bg-enigma-green m-0';
            return pixel;
        });
        container.append(...pixels);

        gsap.fromTo(
            container.querySelectorAll('.w-16.h-16.bg-enigma-green.m-0'),
            { opacity: 1 },
            {
                opacity: 0,
                duration: 0.05,
                stagger: 0.01, 
                onComplete: () => {
                    container.innerHTML = '';
                    onComplete();
                }
            }
        );
    }, [onComplete]);

    return <div ref={containerRef} className="fixed inset-0 z-50 flex flex-wrap pointer-events-none"></div>;
};

export default PageTransition;