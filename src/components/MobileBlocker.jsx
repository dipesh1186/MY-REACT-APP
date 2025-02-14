import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const MobileBlocker = () => {
  useEffect(() => {
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden';
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleExit = () => {
    window.close();
    // Fallback for browsers that don't allow window.close()
    window.location.href = 'about:blank';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mobile-blocker"
    >
      <div className="mobile-blocker-content">
        <h2>⚠️ Mobile Access Restricted</h2>
        <p>This experience is designed for desktop viewing only.</p>
        <p>Please visit this website on a desktop or laptop computer.</p>
        <button onClick={handleExit} className="exit-btn">
          Exit Website
        </button>
      </div>
    </motion.div>
  );
};

export default MobileBlocker; 