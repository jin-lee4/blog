import Link from "next/link";

const Navbar = () => {
  return (
    <nav id="nav">
      <Link className="nav-text" href="/">
        home
      </Link>
      <Link className="nav-text" href="/about">
        about
      </Link>
      <Link className="nav-text" href="/now">
        now
      </Link>
      <Link className="nav-text" href="/writing">
        writing
      </Link>
      <Link className="nav-text" href="/photography">
        photography
      </Link>
    </nav>
  );
};

export default Navbar;
