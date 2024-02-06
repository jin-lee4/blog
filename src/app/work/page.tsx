import nav from "../../../components/nav";

const pickflick = () => {
    return (
        <div className="-space-y-5">
        <h2 className="section-title">pickflick</h2>
        <p className="metadata">StormHacks 2022 —</p>
      </div>
    )
}

const frijspace = () => {
    return (
      <div className="-space-y-5">
        <h2 className="section-title">frij.space</h2>
        <p className="metadata">nwHacks 2021</p>
      </div>
    );
  };

const jinleeinfo = () => {
  return (
    <div className="-space-y-5">
      <h2 className="section-title">jinlee.info</h2>
      <p className="metadata">Jan 2024 —</p>
    </div>
  );
};

const planit = () => {
  return (
    <div className="-space-y-5">
      <h2 className="section-title">planit</h2>
      <p className="metadata">nwHacks 2024 —</p>
    </div>
  );
};

const Work = () => {
  const navComponent = nav();

  return (
    <div className="container mx-auto max-w-screen-xl space-y-5 py-20">
      <div className="-space-y-1">
        {navComponent}
        <h1>work</h1>
        <div>
          {planit()}
          {jinleeinfo()}
          {pickflick()}
          {frijspace()}
        </div>
      </div>
    </div>
  );
};

export default Work;
