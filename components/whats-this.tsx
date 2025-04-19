"use client";

import { motion } from "motion/react";

export default function WhatsThis() {
  return (
    <motion.section
      initial="init"
      whileInView="inView"
      viewport={{
        margin: "0px 0px -200px 0px",
        once: true,
      }}
      transition={{ staggerChildren: 0.2 }}
      className="mt-12 mb-6 px-3 md:mt-32 md:mb-12 md:px-6 lg:mt-48 lg:mb-32"
    >
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] md:pl-[6%]">
        <div className="col-start-1 row-start-1">
          <h2 className="overflow-hidden font-akira text-fluid-lg">
            <motion.div
              variants={{ init: { y: "100%" }, inView: { y: "0%" } }}
              transition={{ duration: 0.4 }}
            >
              what&lsquo;s this?
            </motion.div>
          </h2>
          <motion.div
            variants={{
              init: { clipPath: "inset(0 100% 0 0)" },
              inView: { clipPath: "inset(0 0 0 0)" },
            }}
            transition={{ duration: 0.7 }}
            className="mt-6 max-w-[52ch] font-ot-jubilee text-fluid-base md:mt-12"
          >
            <p>
              <em>Hex Archive</em> is an Italian audio production studio based
              in Venice and Turin, whose <em>goal</em> is to{" "}
              <em>establish a custom and unique generative process</em> around
              each production we face, always <em>starting from scratch</em>.
            </p>

            <p>
              Through a series of partnerships with other trusted companies and
              contractors <strong>we’ve built a modular</strong> structure that
              allows us to <strong>shape ourselves</strong> around each scope
              and size.
            </p>
            <ul style={{ listStyleType: "'⟐ '" }} className="mt-6 list-inside">
              <li>
                <em>sound design</em>
              </li>
              <li>
                <em>music composition, arrangement and production</em>
              </li>
              <li>
                <em>audio post-production</em>
              </li>
              <li>
                <em>audio implementation</em>
              </li>
            </ul>
          </motion.div>
        </div>
        <svg viewBox="0 0 180 100" className="absolute h-0 w-0">
          <filter id="noise" x="0%" y="0%" width="100%" height="100%">
            <motion.feTurbulence
              type="fractalNoise"
              variants={{
                init: { baseFrequency: 0.2 },
                inView: { baseFrequency: 0.000000001 },
              }}
              transition={{ duration: 1.2 }}
              result="NOISE"
              numOctaves="2"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="NOISE"
              scale="30"
              xChannelSelector="R"
              yChannelSelector="R"
            ></feDisplacementMap>
          </filter>
        </svg>
        <div
          style={{
            filter: "url(#noise)",
          }}
          className="flex justify-center opacity-5 max-md:col-start-1 max-md:row-start-1 md:opacity-75"
        >
          <motion.img
            variants={{ init: { opacity: 0 }, inView: { opacity: 1 } }}
            transition={{ at: "<" }}
            className="w-3/4 object-contain md:w-full md:max-w-54"
            src="/hand.webp"
          />
        </div>
      </div>
    </motion.section>
  );
}
