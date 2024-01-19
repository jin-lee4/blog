import getPostMetaData from "./getPostMetadata";
import PostPreview from "../components/PostPreview";

const content = () => {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));


  return (
    <div className="directory">
      <div className="section space">
        <h2 className="section-title">writing</h2>
        <div className="grid grid-cols-1 gap-4">{postPreviews}</div>
      </div>
    </div>
  );
};

export default content;
