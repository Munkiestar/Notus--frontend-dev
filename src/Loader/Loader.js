import React from "react";
import "./Loader.scss";

import { motion } from "framer-motion";

import logo from "../assets/logo-loading.svg";

function Loader() {
  return (
    <div className="loader">
      <motion.img
        className="loader__img"
        src={logo}
        alt="logo"
        animate={{
          scale: [1, 1.5, 1.5, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          restSpeed: 0.1,
        }}
        transition={{
          duration: 2,
          restDelta: 0.5,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatType: 1,
        }}
      />
    </div>
  );
}

export default Loader;
