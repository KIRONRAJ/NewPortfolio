import { useState, useEffect } from 'react';

export const useTypewriter = (text: string | string[], speed = 50, delay = 1000) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const currentPhrase = Array.isArray(text) ? text[phraseIndex] : text;

    if (isTyping) {
      if (displayText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, speed);
      } else {
        // Finished typing
        if (Array.isArray(text)) {
           timeout = setTimeout(() => setIsTyping(false), delay);
        }
      }
    } else {
      // Deleting (if array)
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, speed / 2);
      } else {
        // Finished deleting
        setPhraseIndex((prev) => (prev + 1) % text.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, text, phraseIndex, speed, delay]);

  return displayText;
};