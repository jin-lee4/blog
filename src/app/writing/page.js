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
            <Link href="https://substack.com/home/post/p-178526679">An interview with myself about AI (Safety)</Link>
          </li>
          <li>
            <Link href="/posts/her">Gender, Agency, & Her</Link>
          </li>
        </ol>
      </div>
      <div className="space-y-2.5">
        <h2>Reflections</h2>
        <ol>
        <li><Link href="/posts/2025">2025 Top 5s</Link></li>
        <li>
            <Link href="/posts/legacy">
              On Legacy & B2B SaaS
            </Link>
          </li>
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
