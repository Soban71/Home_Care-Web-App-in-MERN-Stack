import React from "react";
import "./Style.css"; 
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  const GoHome = () => {
    navigate("/Home");
  }

  return (
    <div className="welcome-container">
      <motion.header className="welcome-header">
        <h1 className="welcome-title">Welcome to the Hospital App</h1>
        <p className="welcome-subtitle">Your trusted partner in healthcare</p>
        <motion.button
          className="get-started-button"
          onClick={GoHome}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          Get Started <i class="fa-solid fa-arrow-right"></i>
        </motion.button>
      </motion.header>
    </div>
  );
};

export default Welcome;
