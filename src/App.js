import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import FloatingHearts from './components/FloatingHearts';
import MobileBlocker from './components/MobileBlocker';
import "./App.css";

// Mobile detection function
const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

const App = () => {
  const [stage, setStage] = useState(0);
  const [runAway, setRunAway] = useState({ x: 0, y: 0 });
  const [showConfetti, setShowConfetti] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);
  const [isMobileDevice] = useState(isMobile());
  const [currentMessage, setCurrentMessage] = useState(0);
  
  // Ref for the background music
  const audioRef = useRef(null);

  // If mobile device is detected, show blocker and return early
  if (isMobileDevice) {
    return <MobileBlocker />;
  }

  const messages = [
    "Every moment with you feels like a beautiful dream... 💫",
    "Your love makes my heart skip a beat! 💝",
    "You're the missing piece to my puzzle... 🧩❤️",
    "Together, we could write the most beautiful love story... 📖✨",
    "Will you be my Valentine? 💖"
  ];

  const handleEnvelopeClick = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => console.log("Audio playing..."))
        .catch((error) => console.log("Playback failed:", error));
    }
    setStage(1);
    setTimeout(() => setStage(2), 2000);
  };

  useEffect(() => {
    if (stage === 2) {
      const interval = setInterval(() => {
        setCurrentMessage((prev) => {
          if (prev === messages.length - 1) {
            clearInterval(interval);
            setStage(3);
            return prev;
          }
          return prev + 1;
        });
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [stage, messages.length]);

  const handleMouseMove = () => {
    const xOffset = (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 100 + 40);
    const yOffset = (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 100 + 40);
    setRunAway((prev) => ({
      x: prev.x + xOffset,
      y: prev.y + yOffset
    }));
  };

  const handleYesClick = () => {
    setShowConfetti(true);
    setShowCongrats(true);
  };

  return (
    <div className="container">
      <FloatingHearts />
      <audio ref={audioRef} src={`${process.env.PUBLIC_URL}/background-music.wav`} loop />

      {stage === 0 && (
        <motion.div
          className="envelope"
          initial={{ scale: 1 }}
          animate={{ scale: 1.2 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
          onClick={handleEnvelopeClick}
        >
          Click to unveil the surprise ✉️
        </motion.div>
      )}

      {stage === 1 && (
        <motion.div
          className="envelope open"
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 1 }}
        />
      )}

      {stage === 2 && (
        <motion.div
          className="message"
          key={currentMessage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          {messages[currentMessage]}
        </motion.div>
      )}

      {stage === 3 && !showCongrats && (
        <div className="final-question">
          <h2>Will you be my Valentine? 💖</h2>
          <div className="button-container">
            <button className="yes-btn" onClick={handleYesClick}>
              Yes
            </button>
            <motion.button
              className="no-btn"
              onMouseEnter={handleMouseMove}
              onMouseLeave={handleMouseMove}
              animate={{ x: runAway.x, y: runAway.y }}
              transition={{ type: "spring", stiffness: 60 }}
            >
              No
            </motion.button>
          </div>
        </div>
      )}

      {showConfetti && <Confetti />}

      {showCongrats && (
        <div className="congrats-message">
          <h1 className="congrats-heading">💖 Congratulations! 💖</h1>
          <p className="congrats-text">
            You have made my day, my Valentine! 🎉
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
