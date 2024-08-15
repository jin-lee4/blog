import Link from "next/link";

const HomeContent = () => {
  return (
    <div className="space-y-2.5 mt-9">
      <div className="space-y-2.5">
        <h2>Hi, I'm Jin</h2>
        <p>
          I’m interested in AI alignment, social justice in tech, and community
          building. You’ll probably find me making playlists or justifying my
          3rd coffee of the day.{" "}
        </p>
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
