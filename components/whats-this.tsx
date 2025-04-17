export default function WhatsThis() {
  return (
    <section className="mt-12 mb-6 px-3 md:mt-32 md:mb-12 md:px-6 lg:mt-48 lg:mb-32">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div className="col-start-1 row-start-1">
          <h2 className="font-akira text-fluid-lg">what's this?</h2>
          <div className="mt-6 max-w-prose font-ot-jubilee text-fluid-base md:mt-12">
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
            <ul style={{ listStyleType: "'⟐ '" }} className="list-inside">
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
          </div>
        </div>
        <div className="flex justify-center opacity-5 max-md:col-start-1 max-md:row-start-1 md:opacity-75">
          <img
            className="w-3/4 object-contain md:w-full md:max-w-54"
            src="/hand.webp"
          />
        </div>
      </div>
    </section>
  );
}
