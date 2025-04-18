"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import {
  AnimationPlaybackControlsWithThen,
  motion,
  useAnimate,
} from "motion/react";

export default function P() {
  const [prova, setProva] = useState(true);
  const firstRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const getFirstBoundingBox = useCallback(() => {
    return firstRef.current?.getBoundingClientRect();
  }, []);

  const getVideoTime = useCallback(() => {
    return videoRef.current?.currentTime ?? 0;
  }, []);

  return (
    <>
      <div className="h-screen"></div>
      <div onClick={() => setProva((p) => !p)} className="p-12">
        <div className="flex">
          <div className="p-12">prova</div>
          <div
            style={{
              opacity: prova ? 1 : 0,
            }}
            ref={firstRef}
            className="relative w-full"
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
              src="/videos/projects-preview.mp4"
            />
          </div>
        </div>
      </div>
      <Modal
        getVideoTime={getVideoTime}
        getFirstBoundingBox={getFirstBoundingBox}
        close={() => setProva(true)}
        visible={!prova}
      />

      <div className="h-screen"></div>
    </>
  );
}

const Modal = ({
  visible,
  getFirstBoundingBox,
  getVideoTime,
  close,
}: {
  visible: boolean;
  getFirstBoundingBox: () => DOMRect | undefined;
  getVideoTime: () => number;
  close: () => void;
}) => {
  const [lastRef, animate] = useAnimate();
  const videoRef = useRef<HTMLVideoElement>(null);

  useLayoutEffect(() => {
    if (!visible) return;
    if (videoRef.current) {
      videoRef.current.currentTime = getVideoTime();
      videoRef.current.play();
    }
    let animation: AnimationPlaybackControlsWithThen | undefined;
    const firstBoundingBox = getFirstBoundingBox();
    const lastBoundingBox = lastRef.current.getBoundingClientRect();

    function setFinalState() {
      lastRef.current.style.width = "100%";
      lastRef.current.style.height = "auto";
    }

    function stopAnimation() {
      animation?.stop();
      setFinalState();
    }

    window.addEventListener("resize", stopAnimation);

    animation = animate(
      lastRef.current,
      {
        x: [Number(firstBoundingBox?.x) - lastBoundingBox.x, 0],
        y: [Number(firstBoundingBox?.y) - lastBoundingBox.y, 0],
        width: [firstBoundingBox?.width, lastBoundingBox.width],
        height: [firstBoundingBox?.height, lastBoundingBox.height],
      },
      { duration: 1 },
    );
    animation.then(setFinalState, setFinalState);

    return () => {
      window.removeEventListener("resize", stopAnimation);
      stopAnimation();
    };
  }, [getFirstBoundingBox, visible, getVideoTime]);

  return (
    <motion.div
      animate={{
        background: visible ? "rgba(0, 0, 0, 0.75)" : "rgba(0, 0, 0, 0)",
      }}
      style={{
        display: visible ? "block" : "none",
      }}
      transition={{ duration: 1 }}
      className="pointer-events-none fixed inset-0 z-10 p-12"
    >
      <button onClick={close} className="pointer-events-auto">
        chiudi
      </button>
      <motion.div ref={lastRef} className="relative aspect-video">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/projects-preview.mp4"
        />
      </motion.div>
    </motion.div>
  );
};
