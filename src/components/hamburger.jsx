import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import AnimatedText from './text';

export default function Hamburger() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            gsap.to(menuRef.current, {
                width: '100%',
                duration: 0.5,
                ease: 'back.out(1.6)',
            });

        } else {
            gsap.to(menuRef.current, {
                width: 'auto',
                duration: 0.5,
                ease: 'back.out(1.6)'
            });
        }
    }, [isOpen]);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className="flex justify-end">
            <div ref={menuRef} className={`flex flex-col justify-end text-black bg-enigma-green font-neuebit uppercase ${isOpen ? 'w-full' : 'w-auto'}`}>
                <div className="hamburger-icon cursor-pointer text-2xl select-none text-right p-4" onClick={toggleMenu}>
                    Menu <span className="text-xl">&#9776;</span> {/* This is the hamburger icon */}
                </div>
                {isOpen && (
                    <div className="menu text-right text-3xl p-4">
                        <ul>
                            <li><Link to="/prizes" onClick={handleLinkClick}><AnimatedText className="text-black hover:bg-white hover:text-black" text="Prizes"/></Link></li>
                            <li><Link to="/timeline" onClick={handleLinkClick}><AnimatedText className="text-black hover:bg-white hover:text-black" text="Timeline"/></Link></li>
                            <li><Link to="/rules" onClick={handleLinkClick}><AnimatedText className="text-black hover:bg-white hover:text-black" text="Rules"/></Link></li>
                            <li><Link to="/about" onClick={handleLinkClick}><AnimatedText text="About" className="text-black hover:bg-white hover:text-black"/></Link></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}