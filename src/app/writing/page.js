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
            <Link href="/posts/gender-agency-her">Gender, Agency, & Her</Link>
          </li>
        </ol>
      </div>
      <div className="space-y-2.5">
        <h2>Reflections</h2>
        <ol>
          <li>
            <Link href="/posts/dermatologist">
              Existential at the dermatologist
            </Link>
          </li>
          <li>
            <Link href="/posts/what-next">What's next?</Link>
          </li>
          <li>
            <Link href="/posts/myfaucet">My faucet</Link>
          </li>
          <li>
            <Link href="/posts/2024">2024</Link>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Writing;
