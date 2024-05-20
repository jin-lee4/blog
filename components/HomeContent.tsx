import getPostMetaData from "./getPostMetadata";
import PostPreview from "./PostPreview";
import CurrentlySection from "./Currently";
import PhotoGrid from "./PhotoGrid";

const HomeContent = () => {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="space-y-3">
      <div className="space-y-3">
        <h2>Currently</h2>
        <CurrentlySection />
      </div>
      <div className="space-y-3">
        <h2 className="">Reflections</h2>
        <div className="grid grid-cols-1">{postPreviews}</div>
      </div>
      <div className="space-y-3">
        <h2 className="">Writing</h2>
        <div className="">Coming soon!</div>
      </div>
      <div className="space-y-3">
        <h2>Photography</h2>
        <div>
          Coming soon!
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
