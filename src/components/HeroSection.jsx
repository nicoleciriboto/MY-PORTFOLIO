import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { motion} from "framer-motion";
 
const messageParts = [
  [
    { text: "Hi, I'm ", className: "text-muted-foreground" },
    { text: "Nicole ", className: "text-primary" },
    { text: "Ciriboto", className: "text-muted-foreground" }
  ],
  [
    { text: "I'm a ", className: "text-muted-foreground" },
    { text: "Front-End Developer.", className: "text-primary" }
  ],
  [
    {text: "I'm a ", className: "text-muted-foreground"},
    {text: "Web Developer.", className: "text-primary" }
  ]
];

export const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState(["", "", ""]);
  const [messageIndex, setMessageIndex] = useState(0);
  const [partIndex, setPartIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentParts = messageParts[messageIndex];
    const currentPart = currentParts[partIndex];

    if (!isDeleting && charIndex < currentPart.text.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => {
          const updated = [...prev];
          updated[partIndex] = currentPart.text.slice(0, charIndex + 1);
          return updated;
        });
        setCharIndex(charIndex + 1);
      }, 100);
    } else if (!isDeleting && charIndex === currentPart.text.length && partIndex < currentParts.length - 1) {
      // Move to next part
      timeout = setTimeout(() => {
        setPartIndex(partIndex + 1);
        setCharIndex(0);
      }, 100);
    } else if (!isDeleting && charIndex === currentPart.text.length && partIndex === currentParts.length - 1) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => {
          const updated = [...prev];
          updated[partIndex] = currentPart.text.slice(0, charIndex - 1);
          return updated;
        });
        setCharIndex(charIndex - 1);
      }, 50);
    } else if (isDeleting && charIndex === 0 && partIndex > 0) {
      // Move to previous part
      timeout = setTimeout(() => {
        setPartIndex(partIndex - 1);
        setCharIndex(currentParts[partIndex - 1].text.length);
      }, 50);
    } else if (isDeleting && charIndex === 0 && partIndex === 0) {
      // Move to next message
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setMessageIndex((prev) => (prev + 1) % messageParts.length);
        setPartIndex(0);
        setCharIndex(0);
        setDisplayedText(["", "", ""]);
      }, 400);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, partIndex, isDeleting, messageIndex]);

  const currentParts = messageParts[messageIndex];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <motion.h1
           className="text-4xl md:text-6xl font-bold tracking-tight"
           initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
            {currentParts.map((part, idx) => (
              <span key={idx} className={part.className}>
                {displayedText[idx]}
              </span>
            ))}
            <span className="blinking-cursor">|</span>
          </motion.h1>
          <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3"
          initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}>
            I am passionate about crafting web and mobile experiences that not only work but wow with
            modern technologies. Merging creativity with code to build digital experiences that matter.
          </motion.p>
          <motion.div 
          className="pt-4 opacity-0 animate-fade-in-delay-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
          >
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div 
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
        <ArrowDown className='h-5 w-5 text-primary' />
      </motion.div>
    </section>
  );
};