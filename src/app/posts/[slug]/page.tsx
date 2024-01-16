import fs from 'fs';
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter';
import getPostMetaData from '../../../../components/getPostMetadata';

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
    return (
        <div className="container mx-auto">
            <h1 className='text-green-800'>{post.data.title}</h1>
            <p className="metadata">{post.data.date}</p>
            <article className='prose lg:prose-xl'>
            <Markdown className="grid grid-cols-1 gap-4">{post.content}</Markdown>
            </article>
        </div>
    );
};

export default PostPage;