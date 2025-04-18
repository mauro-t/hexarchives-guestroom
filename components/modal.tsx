export default function Modal() {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black/75 px-3 text-[#F5F5F5] backdrop-blur-lg md:px-6 md:py-12">
      <div className="relative -mx-3 aspect-video md:mx-0 md:aspect-3/1">
        <video
          src={`/videos/projects-preview.mp4`}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="mt-12 mb-6 flex items-center gap-6 md:my-12">
        <h2 className="font-akira text-fluid-lg md:text-fluid-2xl">Projects</h2>
        <div className="h-px w-full bg-[#F5F5F5]"></div>
      </div>
      <div className="mt-6 divide-y md:mt-24 md:space-y-24 lg:mt-32">
        <div className="pb-12">
          <div className="relative grid w-full gap-12 md:aspect-3/1 md:grid-cols-[auto_1fr]">
            {/* <div className="absolute inset-0 z-20 bg-black">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://player.vimeo.com/video/975380835?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="Commissions - Ark: Fjordur [Studio Wildcard - Dynamedion]"
                allowFullScreen
              ></iframe>
            </div> */}
            <div className="relative aspect-square opacity-20 not-md:w-full md:h-full md:opacity-100">
              <img
                className="absolute h-full w-full object-contain object-top brightness-50 grayscale"
                src="/mjolnir.webp"
              />
            </div>
            <div className="absolute top-0 left-0 p-6 md:static">
              <h3 className="font-ot-jubilee text-fluid-lg">Project name</h3>
              <p className="mt-3 max-w-prose font-ot-jubilee text-fluid-base md:mt-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium ex, tempore labore aliquam dolorem error cupiditate
                iusto. Veritatis porro accusamus debitis sunt, id aut vero
                aperiam. Reiciendis voluptatum neque aliquam reprehenderit?
                Fugiat illo reiciendis deleniti, dolore atque assumenda. Aliquid
                cum dolorem illo magni corrupti neque eos vero officia dolore
                porro.
              </p>
            </div>
          </div>
        </div>
        <div className="pb-12">
          <div className="relative grid w-full gap-12 md:aspect-3/1 md:grid-cols-[auto_1fr]">
            {/* <div className="absolute inset-0 z-20 bg-black">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube-nocookie.com/embed/AQCEb9HKO98?si=Uoq0LDvKnmORClQZ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div> */}
            <div className="relative aspect-square opacity-20 not-md:w-full md:h-full md:opacity-100">
              <img
                className="absolute h-full w-full object-contain object-top brightness-50 grayscale"
                src="/geralt.webp"
              />
            </div>
            <div className="absolute top-0 left-0 p-6 md:static">
              <h3 className="font-ot-jubilee text-fluid-lg">Project name</h3>
              <p className="mt-3 max-w-prose font-ot-jubilee text-fluid-base md:mt-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium ex, tempore labore aliquam dolorem error cupiditate
                iusto. Veritatis porro accusamus debitis sunt, id aut vero
                aperiam. Reiciendis voluptatum neque aliquam reprehenderit?
                Fugiat illo reiciendis deleniti, dolore atque assumenda. Aliquid
                cum dolorem illo magni corrupti neque eos vero officia dolore
                porro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
