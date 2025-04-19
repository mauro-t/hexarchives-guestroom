"use client";

import ReactLenis from "lenis/react";
import {
  AnimationPlaybackControlsWithThen,
  motion,
  useAnimate,
} from "motion/react";
import { useId, useLayoutEffect, useRef } from "react";

const Item = ({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  videoSrc: string;
  title: string;
  description: string;
}) => {
  const noiseId = useId();

  return (
    <motion.div
      initial="init"
      whileInView="inView"
      viewport={{
        margin: "0px 0px -200px 0px",
        once: true,
      }}
      transition={{ staggerChildren: 0.2 }}
      className="pb-12"
    >
      <div className="relative grid w-full gap-12 md:aspect-3/1 md:grid-cols-[auto_1fr]">
        {/* <div className="absolute inset-0 z-20 bg-black">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={videoSrc}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          title="Commissions - Ark: Fjordur [Studio Wildcard - Dynamedion]"
          allowFullScreen
        ></iframe>
      </div> */}
        <div className="relative aspect-square opacity-20 brightness-50 grayscale not-md:w-full md:h-full md:opacity-100">
          <svg viewBox="0 0 180 100" className="absolute h-0 w-0">
            <filter id={noiseId} x="0%" y="0%" width="100%" height="100%">
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
          <img
            style={{
              filter: `url(#${noiseId})`,
            }}
            className="absolute h-full w-full object-contain object-top"
            src={imageSrc}
          />
        </div>
        <div className="absolute top-0 left-0 p-6 md:static">
          <h3 className="overflow-hidden font-ot-jubilee text-fluid-lg">
            <motion.div
              variants={{ init: { y: "100%" }, inView: { y: "0%" } }}
              transition={{ duration: 0.4 }}
            >
              {title}
            </motion.div>
          </h3>
          <motion.p
            variants={{
              init: {
                clipPath: "inset(0 100% 0 0)",
              },
              inView: {
                clipPath: "inset(0 0 0 0)",
              },
            }}
            transition={{ duration: 0.4 }}
            className="mt-3 max-w-prose font-ot-jubilee text-fluid-base md:mt-6"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Modal({
  visible,
  getFirstBoundingBox,
  getVideoTime,
  videoSrc,
  close,
}: {
  visible: boolean;
  getFirstBoundingBox: () => DOMRect | undefined;
  getVideoTime: () => number;
  videoSrc: string;
  close: () => void;
}) {
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
        clipPath: [
          "polygon(0 0, 100% 0, 100% 100%, 15% 100%)",
          "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        ],
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
    <ReactLenis
      style={{
        display: visible ? "block" : "none",
      }}
      className="fixed inset-0 z-50 overflow-auto"
    >
      <motion.div
        animate={visible ? "open" : "init"}
        variants={{
          init: {
            backgroundColor: "rgba(0, 0, 0, 0)",
            backdropFilter: "blur(0px)",
          },
          open: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            backdropFilter: "blur(30px)",
          },
        }}
        transition={{ duration: 1, delayChildren: 0.4 }}
        className="bg-black/75 px-3 text-[#F5F5F5] md:px-6 md:py-6"
      >
        <div className="sticky top-3 z-10 flex h-0 w-full justify-end text-fluid-sm mix-blend-difference md:top-12 md:pr-3">
          <motion.button
            variants={{
              init: { y: 20, opacity: 0 },
              open: { y: 0, opacity: 1 },
            }}
            transition={{ delay: 1.2 }}
            className="inline-block font-akira"
            onClick={close}
          >
            close
          </motion.button>
        </div>
        <div className="relative -mx-3 aspect-video md:mx-0 md:mt-6 md:aspect-3/1">
          <div ref={lastRef} className="absolute inset-0 h-full w-full">
            <video
              ref={videoRef}
              src={`/videos/${videoSrc}`}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
        <motion.div
          variants={{ open: { transition: { staggerChildren: 0.2 } } }}
          className="mt-12 mb-6 flex items-center gap-6 md:my-12"
        >
          <h2 className="w-max overflow-hidden font-akira text-fluid-lg md:text-fluid-2xl">
            <motion.div
              variants={{ init: { y: "100%" }, open: { y: "0%" } }}
              transition={{ duration: 0.4 }}
            >
              projects
            </motion.div>
          </h2>
          <motion.div
            style={{ originX: "left" }}
            variants={{
              init: { scaleX: 0 },
              open: { scaleX: 1, transition: { duration: 0.7 } },
            }}
            className="h-px grow bg-[#F5F5F5]"
          ></motion.div>
        </motion.div>
        <div className="mt-6 divide-y md:mt-24 md:space-y-24 lg:mt-32">
          <Item
            videoSrc="https://player.vimeo.com/video/975380835?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            imageSrc="/mjolnir.webp"
            title="Title"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium ex, tempore labore aliquam dolorem error cupiditate iusto."
          />
          <Item
            videoSrc="https://www.youtube-nocookie.com/embed/AQCEb9HKO98?si=Uoq0LDvKnmORClQZ"
            imageSrc="/geralt.webp"
            title="Title"
            description="Veritatis porro accusamus debitis sunt, id aut vero aperiam. Reiciendis voluptatum neque aliquam reprehenderit? Fugiat illo reiciendis deleniti, dolore atque assumenda. Aliquid cum dolorem illo magni corrupti neque eos vero officia dolore porro."
          />
        </div>
      </motion.div>
    </ReactLenis>
  );
}
