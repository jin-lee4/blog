import Link from "next/link";

const Now = () => {
  return (
    <div className="w-full space-y-6">
      <h1>Now</h1>
      <div className="space-y-2.5 text-justify">
        <h2>Last updated: January 15, 2025</h2>
        <h3>How I'm feeling now</h3>
        <p>I'm starting to feel the urgency of needing to figure out what I want to (more accurately, <i>can</i>) do after graduation, or for the summer, for starters. (If anyone is hiring, please please please). 
        </p>{" "}
        <p>
          Lately I'm trying to read more, walk a little longer, and sleep in. I've been thinking about travelling and embodying an abundance mindset. My motto for the last few months has been maximize inside, minimize outside - I think it's been working for me.
        </p>
        <h3>Projects</h3>
        <ol>
          <li>Writing more. Feeling stuck for the last few months though.</li>
          <li>
            Running my <Link href="https://lu.ma/bv6brssp" target="_blank">
              critical AI reading group
            </Link>
          </li>
          <li>Finishing my book in time for book club</li>
          <li>Applying for jobs, and consequently, obtaining one</li>
          <li>Finishing my last class of my degree (!)</li>
        </ol>
        <h3>Media</h3>
        <ol>
          <li>The Vegetarian by Han Kang - Reading for book club</li>
          <li>Either/Or by Elif Batuman - Reading for fun and I'm savoring every word.</li>
          <li>Notes on a Conditional Form by The 1975 - Perfect January album</li>
          <li>10 things I hate about you - Rewatched for the first time in years in my Las Vegas hotel room and squealed.</li>
        </ol>
        <h3>Experiments</h3>
        <ol>
          <li>Dutifully going to the gym and running 5-6 days a week</li>
          <li>Protein-maxxing</li>
          <li>No buy months</li>
        </ol>
      </div>
    </div>
  );
};

export default Now;
