import intro from "../../components/intro";
import content from "../../components/content";
import nav from '../../components/nav';

const HomePage = () => {

  const navComponent = nav();
  const contentComponent = content();
  const introComponent = intro();

  return (
    <div className="container space-y-5 py-20">
      <div className="-space-y-1">
      {navComponent}
      {introComponent}
      </div>
      {contentComponent}
    </div>
  );
};

export default HomePage;
