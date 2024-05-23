import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
    return ( 
    <div className="inline-flex">
    <Link href={`/posts/${props.slug}`}>
    <p className="">{props.title}</p>
    </Link>
    <p className='metadata text-xs px-6'> {props.date}</p>
  </div>
  );
};

export default PostPreview;