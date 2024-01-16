import intro from "../../components/intro";
import content from "../../components/content";

const HomePage = () => {
  const contentComponent = content();
  const introComponent = intro();

  return (
    <div className="container mx-auto">
      {introComponent}
      {contentComponent}
    </div>
  );
};

export default HomePage;
