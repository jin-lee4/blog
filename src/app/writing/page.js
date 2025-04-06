import getPostMetaData from "../../../components/getPostMetadata";
import PostPreview from "../../../components/PostPreview";
import Link from "next/link";

const Writing = () => {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="w-full space-y-6">
      <h1>Writing</h1>
      <div className="space-y-2.5">
        <h2>Essays</h2>
        <ol>
          <li>
            <Link href="/posts/her">Gender, Agency, & Her</Link>
          </li>
        </ol>
      </div>
      <div className="space-y-2.5">
        <h2>Reflections</h2>
        <ol>
          <li>
            <Link href="/posts/summa">
              Summa 2024
            </Link>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Writing;
