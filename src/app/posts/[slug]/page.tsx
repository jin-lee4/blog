import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetaData from "../../../../components/getPostMetadata";
import Navbar from "../../../../components/Navbar";
import style from '../../styles/post.module.css'

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
    <div className="">
      <Navbar />
      <div className="pt-5">
        <h2 className={style.title}>{post.data.title}</h2>
      </div>
      <p className="metadata">{post.data.date}</p>
      <article className="w-full">
        <Markdown className="blog-post">{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
