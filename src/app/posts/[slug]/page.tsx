import fs from 'fs';
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter';
import getPostMetaData from '../../../../components/getPostMetadata';
import nav from '../../../../components/nav';

const getPostContent = (slug: string) => {
    const folder = 'posts/';
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async() => {
    const posts = getPostMetaData();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    const navComponent = nav();

    return (
        <div className="container max-w-screen-xl mx-auto space-y-5 py-20">
            <div className='-space-y-1'>
            {navComponent}
            <h1>{post.data.title}</h1>
            </div>
            <p className="metadata">{post.data.date}</p>
            <article className='prose lg:prose-xl'>
            <Markdown className="blog-post">{post.content}</Markdown>
            </article>
        </div>
    );
};

export default PostPage;