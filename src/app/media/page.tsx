import style from "./../styles/media.module.css";
import Navbar from "../../../components/Navbar";
import Link from "next/link";

export default function Media() {
  return (
    <div className="space-y-5">
      <div className="-space-y-1">
        <Navbar />
        <h2 className="page-title">Media</h2>
        <p>
          Collect more pieces of me through my favorite media. Always down to
          discuss them too!
        </p>
      </div>
      <div className="{style.section} space-y-3">
        <div>
          <h2>Movies</h2>
          <p>
            <Link href="">Letterboxd</Link>
          </p>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div>
            <div className={style.title}>Her</div>
            <p>Description</p>
          </div>
          <div>
            <div className={style.title}>Kiki's Delivery Service</div>
            <p>Description</p>
          </div>
          <div>
            <div className={style.title}>The Handmaiden</div>
            <p>Description</p>
          </div>
          <div>
            <div className={style.title}>Minari</div>
            <p>Description</p>
          </div>
          <div>
            <div className={style.title}>Little Women</div>
            <p>Description</p>
          </div>
          <div>
            <div className={style.title}>Jumanji (Reboot)</div>
            <p>Description</p>
          </div>
          <div>
            <div className={style.title}>Perks of Being a Wallflower</div>
            <p>Description</p>
          </div>
          <div>
            <div className={style.title}>Lady Bird</div>
            <p>Description</p>
          </div>
        </div>
      </div>
      <div className={style.section}>
        <h2>TV Shows</h2>
        <div className="grid grid-cols-4 gap-3">
        <div>
            <div className={style.title}>Gilmore Girls</div>
            <p>Description</p>
          </div>
        </div>
      </div>
      <div className={style.section}>
        <h2>Books</h2>
        <div className="grid grid-cols-4 gap-3"></div>
      </div>
      <div className={style.section}>
        <h2>4 playlists to get to know me</h2>
        <p>
          I am a playlist maximalist - I make playlists to capture any vaguely
          distinct feeling or experience.{" "}
        </p>
        <div className="grid grid-cols-4 gap-3"></div>
      </div>
    </div>
  );
}
