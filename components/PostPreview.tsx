import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
    return ( 
    // <div className='border border-slate-200 p-4 rounded-md shadow-md bg-white'>
    <div className="inline-flex">
    <Link href={`/posts/${props.slug}`}>
    <h2 className='font-bold text-slate-800 hover:underline'>{props.title}</h2>
    </Link>
    <p className=' text-slate-400 px-5'>{props.date}</p>
  </div>
  );
};

export default PostPreview;