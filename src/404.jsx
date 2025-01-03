import React, { useEffect } from 'react';
import ErtdfgcvbBG from './components/ertdfgcvb game of life';
import { gsap } from 'gsap';

const PageNotFound = () => {
    useEffect(() => {
        window.scrollBy(10000, -100);
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "scroll"
        };    
    }, []);

    const rows = 8;
    const cols = 19;

    const whiteCells = [[1,5],[1,6],[2,4],[2,6],[3,3],[3,6],[4,2],[4,6],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[6,6],[8,2],[8,3],[8,4],[8,5],[8,6],[8,7],[9,1],[9,8],[10,1],[10,8],[11,1],[11,8],[12,2],[12,3],[12,4],[12,5],[12,6],[12,7],[1+13,5],[1+13,6],[2+13,4],[2+13,6],[3+13,3],[3+13,6],[4+13,2],[4+13,6],[5+13,1],[5+13,2],[5+13,3],[5+13,4],[5+13,5],[5+13,6],[5+13,7],[5+13,8],[6+13,6],];

    const handleMouseEnter = (e) => {
        gsap.to(e.target, { duration: 0.5, backgroundColor: 'rgba(0, 0, 0, 0)', className: 'bg-enigma-green', ease: 'power2.inOut' });
    };  

    const handleMouseLeave = (e) => {
        gsap.to(e.target, { duration: 0.5, backgroundColor: 'rgba(0, 128, 0, 1)', ease: 'power2.inOut' });
    };

    const createGrid = () => {
        let grid = [];
        for (let i = 0; i < rows; i++) {
            let row = [];
            for (let j = 0; j < cols; j++) {
                const isWhiteCell = whiteCells.some(cell => cell[0]-1 === j && cell[1]-1 === i);
                row.push(
                    <div
                        key={`${i}-${j}`}
                        className={`cell border border-double border-white w-16 h-16 ${isWhiteCell ? 'bg-enigma-green' : 'bg-opacity-0'}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    ></div>
                );
            }
            grid.push(<div key={i} className="flex">{row}</div>);
        }
        return grid;
    };

    return (
        <div className="relative bg-bg-black min-h-screen">
            <ErtdfgcvbBG className="absolute inset-0 z-0 h-full w-full"/>
            <div className="fixed inset-0 flex items-center justify-center bg-opacity-0 z-10 mix-blend-exclusion">
                <div className="grid gap-0">
                    {createGrid()}
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;