"use client";
import { motion } from "motion/react";
import Modal from "./modal";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";

const Section = ({ label, videoSrc }: { label: string; videoSrc: string }) => {
  const [open, setOpen] = useState(false);
  const firstRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const lenis = useLenis();
  const getFirstBoundingBox = useCallback(() => {
    return firstRef.current?.getBoundingClientRect();
  }, []);

  const getVideoTime = useCallback(() => {
    return videoRef.current?.currentTime ?? 0;
  }, []);

  useEffect(() => {
    if (open) {
      lenis?.stop();
    } else lenis?.start();
  }, [lenis, open]);

  return (
    <>
      <li
        className="group contents cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <motion.div
          variants={{ init: { opacity: 0 }, inView: { opacity: 1 } }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-2 py-6 md:p-6"
        >
          ⟐
          <div className="relative w-fit font-ot-jubilee text-fluid-base uppercase">
            {label}
            <span className="absolute bottom-0 left-0 h-px w-0 bg-black transition-[width] group-hover:w-full"></span>
          </div>
        </motion.div>
        <motion.div
          variants={{
            init: { clipPath: "inset(0 100% 0 0)" },
            inView: { clipPath: "inset(0 0 0 0)" },
          }}
          transition={{ duration: 0.7, at: "<" }}
        >
          <div
            ref={firstRef}
            className="relative h-full opacity-75 transition-opacity clip-video group-hover:opacity-100"
          >
            <video
              ref={videoRef}
              src={`/videos/${videoSrc}`}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover grayscale transition-[filter] group-hover:grayscale-0"
            />
          </div>
        </motion.div>
      </li>
      <Modal
        getFirstBoundingBox={getFirstBoundingBox}
        getVideoTime={getVideoTime}
        visible={open}
        videoSrc={videoSrc}
        close={() => setOpen(false)}
      />
    </>
  );
};

export default function WhatAreYouLookingFor() {
  return (
    <motion.section
      initial="init"
      whileInView="inView"
      viewport={{
        margin: "0px 0px -200px 0px",
        once: true,
      }}
      className="my-12 px-3 md:my-32 md:px-6 lg:my-48"
      transition={{ staggerChildren: 0.2 }}
    >
      <h2 className="overflow-hidden font-akira text-fluid-lg">
        <motion.div
          variants={{ init: { y: "100%" }, inView: { y: "0%" } }}
          transition={{ duration: 0.4 }}
        >
          what are you looking for?
        </motion.div>
      </h2>
      <ul className="mt-12 grid grid-cols-[auto_1fr] gap-3 md:gap-6">
        <Section label="Projects" videoSrc="projects-preview.mp4" />
        <Section label="Spots" videoSrc="spots-preview.mp4" />
        <Section label="Showreel" videoSrc="showreel-preview.mp4" />
      </ul>
    </motion.section>
  );
}
