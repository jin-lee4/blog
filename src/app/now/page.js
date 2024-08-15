const Now = () => {
  return (
    <div className="w-full space-y-6">
      <h1>Now</h1>
      <div className="space-y-2.5 text-justify">
        <h2>Last updated: August 14, 2024</h2>
        <h3>How I'm feeling now</h3>
        <p>
          I’m in the midst of a two week lull, in between the end of my summer
          school semester and a new job. I’m filling my time with updating my
          personal website/portfolio, building a routine, and staying up late
          watching movies.
        </p>{" "}
        <p>
          These days, I’m feeling the usual melancholy most of us feel around
          mid-August. I’ve learned a lot this summer and hope to take this time
          to reflect and synthesize my experiences into something I can carry
          with me into the next season. I should also probably clean my
          keyboard.
        </p>
        <h3>Projects</h3>
        <ol>
          <li>
            ruleaid - A RAG tool to help administrators develop AI policies for
            their organizations
          </li>
          <li>Writing here!</li>
          <li>
            Developing a loose HCI reading group curriculum for the fall,
            hopefully
          </li>
          <li>Starting a balcony garden</li>
        </ol>
        <h3>Reading list</h3>
        <ol>
          <li>Crip Negativity by J. Logan Smilges</li>
          <li>12 Bytes by Jeanette Winterson</li>
          <li>Either/Or by Elif Batuman</li>
          <li>All About Love by bell hooks</li>
        </ol>
        <h3>Experiments</h3>
        <ol>
          <li>Dutifully going to the gym and running 5-6 days a week</li>
          <li>Trying recipes focused on eating whole foods</li>
          <li>
            Meeting the first Monday of each month with Matthew to set goals and
            reflect
          </li>
          <li>Establishing long-term financial investments</li>
          <li>
            Watching as many old Hollywood movies as possible (so far, Sabrina
            is my favorite)
          </li>
          <li>Bi-weekly walk and talks around Vancouver</li>
        </ol>
      </div>
    </div>
  );
};

export default Now;
