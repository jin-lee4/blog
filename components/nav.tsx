import Link from "next/link";

const nav = () => {
  return (
      <nav id="nav-style">
        <Link className="link-style" href="/">
          home
        </Link>
        <Link className="link-style" href="/about">
          about
        </Link>
        <Link className="link-style" href="/work">
          work
        </Link>
        <Link className="link-style" href="https://open.spotify.com/user/jinherondole?si=a78f4d4454b245fa">
          spotify
        </Link>
      </nav>
  );
};

export default nav;