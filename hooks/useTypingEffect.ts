
import { useState, useEffect } from 'react';

export const useTypingEffect = (text: string, speed: number = 100) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText(''); // Reset on text change
    if (text) {
        let i = 0;
        const typingInterval = setInterval(() => {
        if (i < text.length) {
            setDisplayedText(prev => prev + text.charAt(i));
            i++;
        } else {
            clearInterval(typingInterval);
        }
        }, speed);

        return () => {
            clearInterval(typingInterval);
        };
    }
  }, [text, speed]);

  return displayedText;
};
