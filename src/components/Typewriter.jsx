// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [arrayIndex, setArrayIndex] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    if (currentIndex < text[arrayIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[arrayIndex][currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    // eslint-disable-next-line react/prop-types
    } else if (currentIndex === text[arrayIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentText('');
        setCurrentIndex(0);
        // eslint-disable-next-line react/prop-types
        setArrayIndex((prevIndex) => (prevIndex + 1) % text.length);
      }, 1000); // Delay before starting the next word

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, arrayIndex, delay, text]);

  return <span>{currentText}</span>;
};

export default Typewriter;
