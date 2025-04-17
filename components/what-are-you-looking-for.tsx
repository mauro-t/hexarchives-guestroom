export default function WhatAreYouLookingFor() {
  return (
    <section className="my-12 px-3 md:my-32 md:px-6 lg:my-48">
      <h2 className="font-akira text-fluid-lg">what are you looking for?</h2>
      <div className="mt-6 grid grid-cols-1 gap-3 md:mt-12 md:grid-cols-3 md:gap-12">
        <div className="relative flex aspect-square items-center justify-center border font-ot-jubilee text-fluid-md uppercase">
          <div className="absolute top-1/2 left-1/2 z-10 -translate-1/2">
            Projects
          </div>
          <video
            src="/video/projects-preview.mp4"
            autoPlay
            loop
            muted
            className="absolute inset-0 h-full w-full object-cover opacity-75 grayscale"
          />
        </div>
        <div className="relative flex aspect-square items-center justify-center border font-ot-jubilee text-fluid-md uppercase">
          <div className="absolute top-1/2 left-1/2 z-10 -translate-1/2">
            Spots
          </div>
          <video
            src="/video/spots-preview.mp4"
            autoPlay
            loop
            muted
            className="absolute inset-0 h-full w-full object-cover opacity-75 grayscale"
          />
        </div>
        <div className="relative flex aspect-square items-center justify-center border font-ot-jubilee text-fluid-md uppercase">
          <div className="absolute top-1/2 left-1/2 z-10 -translate-1/2">
            Showreel
          </div>
          <video
            src="/video/showreel-preview.mp4"
            autoPlay
            loop
            muted
            className="absolute inset-0 h-full w-full object-cover opacity-75 grayscale"
          />
        </div>
      </div>
    </section>
  );
}
