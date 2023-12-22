import getPostMetaData from "../../components/getPostMetadata";
import PostPreview from "../../components/PostPreview";
import hero from "../../components/hero";

const HomePage = () => {
  const postMetaData = getPostMetaData();
  const heroComponent = hero();
  const postPreviews = postMetaData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div>
      {heroComponent}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {postPreviews}
      </div>
    </div>
  );
};

export default HomePage;
