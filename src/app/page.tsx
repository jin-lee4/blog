import Intro from "../../components/Intro";
import Content from "../../components/HomeContent";
import Nav from "../../components/Navbar";

const HomePage = () => {

  return (
    <div className="space-y-5 w-full">
      <div className="-space-y-1">
      <Nav />
      <Intro />
      </div>
      <Content />
      {/* <h1>Hi, I'm Jin!</h1>
      <p>
        This space is currently under construction as I play around and put my
        vision into fruition (and also find said vision).
      </p>
      <p>
        For now, <b>find me elsewhere:</b>
      </p>
      <ul>
        <li>
          <Link
            className="link-style"
            href="https://open.spotify.com/user/jinherondole?si=a78f4d4454b245fa"
          >
            Spotify
          </Link>
        </li>
        <li>
          <Link className="link-style" href="https://x.com/chocoganache444">
            Twitter
          </Link>
        </li>
        <li>
          <Link
            className="link-style"
            href="https://www.linkedin.com/in/jin-leebc/"
          >
            LinkedIn
          </Link>
        </li>
        <li>
          <Link className="link-style" href="https://portfolio.jinlee.info/">
            Portfolio
          </Link>
        </li>
      </ul> */}
      {/* <div className="space-y-5">
        <p>
          <b>Writing:</b>
        </p>
        <div className="grid grid-cols-1">{postPreviews}</div>
      </div>
      <p>See you soon!</p> */}
    </div>
  );
};

export default HomePage;
