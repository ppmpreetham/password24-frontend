import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hamburger() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            gsap.to(menuRef.current,{
                width: '25%',
                duration: 0.5,
                ease: 'back.out(1.6)',
            });
        } else {
            gsap.to(menuRef.current,{ 
                width: 'auto', 
                duration: 0.5,
                ease: 'back.out(1.6)'
            });
        }
    }, [isOpen]);

    return (
        <div className="flex justify-end">
            <div ref={menuRef} className={`flex flex-col justify-end text-black bg-enigma-green font-neuebit uppercase ${isOpen ? 'w-1/2' : 'w-auto'}`}>
                <div className="hamburger-icon cursor-pointer text-2xl select-none text-right p-4" onClick={toggleMenu}>
                    Menu <span className="text-xl">&#9776;</span> {/* This is the hamburger icon */}
                </div>
                {isOpen && (
                    <div className="menu text-right text-3xl p-4">
                        <ul>
                            <li><a className="text-black hover:bg-white hover:text-black" href="#home">Prizes</a></li>
                            <li><a className="text-black hover:bg-white hover:text-black" href="#about">Timeline</a></li>
                            <li><a className="text-black hover:bg-white hover:text-black" href="#services">Rules</a></li>
                            <li><a className="text-black hover:bg-white hover:text-black" href="#contact">About</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}