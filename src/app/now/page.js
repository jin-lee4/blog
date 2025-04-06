import Link from "next/link";

const Now = () => {
  return (
    <div className="w-full space-y-6">
      <h1>Now</h1>
      <div className="space-y-2.5 text-justify">
        <h3>Last updated: April 6, 2025</h3>
        <h2>Days</h2>
        <ul>
          <li>Reading <i>Either/Or</i> by Elif Batuman</li>
          <li>Reading <i>Love in a Fucked Up World</i> by Dean Spade</li>
          <li>Coffee-ing</li>
        </ul>
        <h2>Weeks</h2>
        <ul>
          <li>Looking for a full-time job :(</li>
          <li>Running - not training for anything, but focusing on 10k+ distances</li>
        </ul>
        <h2>Months</h2>
        <ul>
          <li>Organizing monthly critical AI reading group</li>
          <li>Redecorating my room :p</li>
          <li>Getting through my reading list</li>
          <li>Finding writing inspiration</li>
          <li>Attempting no buy months</li>
        </ul>
        <h2>Year</h2>
        <ul>
          <li>Finishing my Cognitive Systems degree at UBC</li>
          <li>Scheming up travel plans</li>
          <li>Walking as much as possible</li>
        </ul>
      </div>
    </div>
  );
};

export default Now;
