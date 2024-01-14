import getPostMetaData from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";

const content = () => {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="">
      <div className="">
        <h1 className="font-bold text-4x1 py-7">writing</h1>
        <div className="grid grid-cols-1 gap-4">{postPreviews}</div>
      </div>
      <div className=''>
        <h1 className='font-bold text-4x1 py-7'>resume</h1>
      </div>
    </div>
  );
};

export default content;
