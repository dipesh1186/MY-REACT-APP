import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const createHeart = () => {
      const heart = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        size: Math.random() * 30 + 10,
        duration: Math.random() * 4 + 2,
        delay: Math.random() * 2
      };
      setHearts(prev => [...prev, heart]);
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== heart.id));
      }, heart.duration * 1000);
    };

    const interval = setInterval(createHeart, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-hearts">
      {hearts.map(heart => (
        <motion.div
          key={heart.id}
          className="floating-heart"
          initial={{ y: '100vh', x: heart.x, opacity: 0 }}
          animate={{ y: '-100vh', opacity: [0, 0.6, 0] }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            ease: 'easeOut'
          }}
          style={{
            fontSize: heart.size,
            position: 'absolute'
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts; 