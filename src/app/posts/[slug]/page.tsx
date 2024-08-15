import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetaData from "../../../../components/getPostMetadata";
import Navbar from "../../../../components/Nav";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetaData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <div className="w-full space-y-6">
      <h1>Writing</h1>
      <div className="space-y-2.5">
        <h2 id="post-title">{post.data.title}</h2>
        <p className="">{post.data.date}</p>
        <article className="">
          <Markdown className="blog-post space-y-3 text-justify">
            {post.content}
          </Markdown>
        </article>
      </div>
    </div>
  );
};

export default PostPage;
