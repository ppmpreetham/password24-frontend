import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedText from './text';

export default function Join({ className }) {
    return (
        <div className={className}>
            <Link to="/sign-up">
                <AnimatedText text="JOIN" className="fixed bottom-0 right-0 rounded-none text-right m-6 bg-enigma-green px-6 py-4 text-black font-neuebit text-6xl flex items-center justify-center h-24"/>
            </Link>
        </div>
    );
}