import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="block post-preview">
      <Link href={`/posts/${props.slug}`}>
        <p className="">{props.title}</p>
      </Link>
      <p className="date">{new Date(props.date).toLocaleDateString()}</p>
    </div>
  );
};

export default PostPreview;
