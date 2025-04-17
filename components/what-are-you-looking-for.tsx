const Section = ({ label, videoSrc }: { label: string; videoSrc: string }) => (
  <div className="grid grid-cols-2 bg-black/75 md:grid-cols-[1fr_5fr]">
    <div className="relative z-10 px-6 py-10 font-ot-jubilee text-fluid-md text-[#f5f5f5] uppercase">
      {label}
    </div>
    <div className="relative clip-video">
      <video
        src={`/videos/${videoSrc}`}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover grayscale"
      />
    </div>
  </div>
);

export default function WhatAreYouLookingFor() {
  return (
    <section className="my-12 px-3 md:my-32 md:px-6 lg:my-48">
      <h2 className="font-akira text-fluid-lg">what are you looking for?</h2>
      <div className="mt-12 space-y-6">
        <Section label="Projects" videoSrc="projects-preview.mp4" />
        <Section label="Spots" videoSrc="spots-preview.mp4" />
        <Section label="Showreel" videoSrc="showreel-preview.mp4" />
      </div>
    </section>
  );
}
