import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import "./App.css";
import MobileBlocker from './components/MobileBlocker';

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

  // Ref for the background music
  const audioRef = useRef(null);

  // If mobile device is detected, show blocker and return early
  if (isMobileDevice) {
    return <MobileBlocker />;
  }

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

  const messages = [
    "You're the most amazing person I've ever met!!!",
    "Your smile brightens up my darkest days!",
    "I can't imagine my life without you!",
    "Will you be my Valentine? 💖"
  ];

  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    if (stage === 2) {
      const interval = setInterval(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length);
        if (currentMessage === messages.length - 1) {
          setStage(3);
        }
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [stage, currentMessage]);

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
      {/* Background Music */}
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
          <p className="congrats-text">You have made my day, my Valentine! ��</p>
        </div>
      )}
    </div>
  );
};

export default App;
