"use client";

import GlitchText from "./glitch-text";
import { motion } from "motion/react";

export default function ProceedDeeper() {
  return (
    <motion.div
      initial="init"
      whileHover="hover"
      className="relative font-ot-jubilee text-fluid-md uppercase"
    >
      <GlitchText text="feel like going deeper?" />
      <motion.div
        variants={{
          init: {
            clipPath: "inset(100% 0 0 0)",
          },
          hover: {
            clipPath: "inset(0 0 0 0)",
          },
        }}
        className="absolute bottom-0 flex w-full translate-y-full -scale-100 justify-between font-akira text-fluid-sm"
      >
        <span>proceed</span> <span>deeper</span>
      </motion.div>
    </motion.div>
  );
}
