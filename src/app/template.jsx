"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function Template({ children }) {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onAnimationComplete={() => {
        // Remove transform and filter after animation so that position: fixed 
        // children (like the expanding service cards) aren't trapped!
        if (ref.current) {
          ref.current.style.transform = "none";
          ref.current.style.filter = "none";
        }
      }}
    >
      {children}
    </motion.div>
  );
}
