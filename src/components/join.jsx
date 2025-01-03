import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Join() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/sign-up');
    };

    return (
        <div>
            <button 
                className="fixed bottom-0 right-0 rounded-none text-right m-6 bg-enigma-green px-6 py-4 text-black font-neuebit text-6xl flex items-center justify-center h-24"
                onClick={handleClick}
            >
                JOIN
            </button>
        </div>
    );
}