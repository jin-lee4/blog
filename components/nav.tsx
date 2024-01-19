import Link from "next/link";

const nav = () => {
  return (
      <nav id="nav-style">
        <Link className="link-style" href="/">
          home
        </Link>
        <Link className="link-style" href="https://open.spotify.com/user/jinherondole?si=a78f4d4454b245fa">
          spotify
        </Link>
        <Link className="link-style" href="">
          twitter
        </Link>
      </nav>
  );
};

export default nav;
