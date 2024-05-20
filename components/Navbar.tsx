import Link from "next/link";

const Navbar = () => {
  return (
      <nav id="nav">
        <Link className="nav-link" href="/">
          Home
        </Link>
        <Link className="nav-link" href="/about">
          About
        </Link>
        <Link className="nav-link" href="https://portfolio.jinlee.info/">
          Portfolio
        </Link>
        <Link className="nav-link" href="https://open.spotify.com/user/jinherondole?si=a78f4d4454b245fa">
          Spotify
        </Link>
      </nav>
  );
};

export default Navbar;
