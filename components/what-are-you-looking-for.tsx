const Section = ({ label, videoSrc }: { label: string; videoSrc: string }) => (
  <li className="group contents">
    <div className="flex items-center gap-2 p-6">
      ⟐
      <div className="relative w-fit font-ot-jubilee text-fluid-base uppercase">
        {label}
        <span className="absolute bottom-0 left-0 h-px w-0 bg-black transition-[width] group-hover:w-full"></span>
      </div>
    </div>
    <div className="relative opacity-75 transition-opacity clip-video group-hover:opacity-100">
      <video
        src={`/videos/${videoSrc}`}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover grayscale transition-[filter] group-hover:grayscale-0"
      />
    </div>
  </li>
);

export default function WhatAreYouLookingFor() {
  return (
    <section className="my-12 px-3 md:my-32 md:px-6 lg:my-48">
      <h2 className="font-akira text-fluid-lg">what are you looking for?</h2>
      <ul className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-[auto_1fr]">
        <Section label="Projects" videoSrc="projects-preview.mp4" />
        <Section label="Spots" videoSrc="spots-preview.mp4" />
        <Section label="Showreel" videoSrc="showreel-preview.mp4" />
      </ul>
    </section>
  );
}
