import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetaData from "../../../../components/getPostMetadata";
import Navbar from "../../../../components/Navbar";
import style from "../../styles/post.module.css";

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
    <div className="space-y-3">
      <div className="space-y-3">
        <Navbar />
        <h2 className="page-title">Reflections</h2>
      </div>
      <div className="-space-y-1 text-gray-400">
        <h2 className="">{post.data.title}</h2>
        <p className="">{post.data.date}</p>
      </div>
      <article className="w-full mt-3">
        <Markdown className="blog-post space-y-3">{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
