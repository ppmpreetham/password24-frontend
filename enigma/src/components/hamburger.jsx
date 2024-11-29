import React, { useState } from 'react';

export default function Hamburger() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex justify-end">
            <div className={`flex flex-col justify-end text-black bg-enigma-green font-neuebit uppercase ${isOpen ? 'w-1/5' : 'w-auto'}`}>
                <div className="hamburger-icon cursor-pointer text-2xl select-none text-right p-4" onClick={toggleMenu}>
                    Menu <span className="text-xl">&#9776;</span> {/* Hamburger icon :D */}
                </div>
                {isOpen && (
                    <div className="menu text-right text-3xl p-4">
                        <ul>
                            <li><a className="text-black hover:bg-white hover:text-black" href="#home">Home</a></li>
                            <li><a className="text-black hover:bg-white hover:text-black" href="#about">About</a></li>
                            <li><a className="text-black hover:bg-white hover:text-black" href="#services">Services</a></li>
                            <li><a className="text-black hover:bg-white hover:text-black" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}