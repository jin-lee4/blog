import Intro from "../../components/Intro";
import Content from "../../components/HomeContent";
import Nav from "../../components/Navbar";

const HomePage = () => {
  return (
    <div className="space-y-5 w-full">
      <div className="space-y-1">
        <Nav />
        <Intro />
      </div>
      <Content />
    </div>
  );
};

export default HomePage;
