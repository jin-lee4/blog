import intro from "../../components/intro";
import content from "../../components/content";

const HomePage = () => {
  const contentComponent = content();
  const introComponent = intro();

  return (
    <div className="container mx-auto px-40">
      {introComponent}
      {contentComponent}
    </div>
  );
};

export default HomePage;
