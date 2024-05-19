import Intro from "../../components/intro";
import Content from "../../components/content";
import Nav from "../../components/nav";
import ImageGrid from "../../components/ImageGrid";

const HomePage = () => {
  return (
    <div className="space-y-4 py-20 w-full">
      <div className="space-y-1">
        <Nav />
        <Intro />
      </div>
      <ImageGrid />
      <Content />
    </div>
  );
};

export default HomePage;
