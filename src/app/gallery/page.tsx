import nav from "../../../components/nav";

const Gallery = () => {
  const navComponent = nav();

  return (
    <div className="container mx-auto max-w-screen-xl space-y-5 py-20">
      <div className="-space-y-1">
        {navComponent}
        <h1>gallery</h1>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
          <div className="grid gap-4"></div>
          <div className="grid gap-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
