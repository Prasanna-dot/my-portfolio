import { useEffect, useState } from "react";

interface TypingEffectProps {
    text: string; // Define the type of 'text' prop as a string
}
  
const TypingEffect: React.FC<TypingEffectProps> = ({ text }) => {
    const [displayText, setDisplayText] = useState('');
  
    useEffect(() => {
      let timer: any = null;
      let index = 0;
  
      // Start typing animation
      if (index < text.length) {
        timer = setInterval(() => {
          setDisplayText((prevText) => prevText + text.charAt(index));
          index++;
          // Stop the typing animation when text is fully displayed
          if (index === text.length) {
            clearInterval(timer);
          }
        }, 50);
      }
      // Clean up interval on component unmount or re-render
      return () => {
        clearInterval(timer);
      };
    }, [text]);
  
    return <span>{displayText}</span>;
};
  
export default TypingEffect;