import React, { useState, useRef } from 'react';

const AnimatedText = ({ text, className }) => {
  const [animatedTitle, setAnimatedTitle] = useState(text || '');
  const intervalRef = useRef(null);

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const handleMouseOver = () => {
    let iteration = 0;

    function animateText() {
      intervalRef.current = setInterval(() => {
        const randomText = text
          .split('')
          .map((char, index) => {
            return index < iteration
              ? char
              : letters[Math.floor(Math.random() * letters.length)];
          })
          .join('');

        setAnimatedTitle(randomText);

        iteration += 0.5;

        if (iteration >= text.length) {
          clearInterval(intervalRef.current);
          setAnimatedTitle(text); // Ensure the final text is set correctly
        }
      }, 30);
    }

    animateText();
  };

  const handleMouseOut = () => {
    clearInterval(intervalRef.current);
    setAnimatedTitle(text); // Reset to the original text
  };

  return (
    <p className={className} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {animatedTitle}
    </p>
  );
};

export default AnimatedText;