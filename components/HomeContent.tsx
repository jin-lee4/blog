import Link from "next/link";

const HomeContent = () => {
  return (
    <div className="space-y-2.5 mt-9">
      <div className="space-y-2.5">
        <h2>Hi, I'm Jin</h2>
        <p>
          I’m excited by people, executing big ideas, and learning about the human condition. My curiosities have led me down many paths, ranging from AI alignment and critical tech studies to reality TV... {" "}
        </p>
        <p>In my free time, I like reading self-help books, perfecting playlists, and running outside!</p>
      </div>
      <div className="space-y-2.5">
        <h2>Let's connect!</h2>
        <ul>
          <li>
            Twitter:{" "}
            <Link href="https://x.com/chocoganache444" target="_blank">
              @chocoganache444
            </Link>
          </li>
          <li>Email: leejinbc [at] gmail [dot] com</li>
        </ul>
      </div>
    </div>
  );
};

export default HomeContent;
