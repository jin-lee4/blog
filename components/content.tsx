import getPostMetaData from "./getPostMetadata";
import PostPreview from "../components/PostPreview";
import styles from "../src/app/styles/content.module.css";

const content = () => {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className={styles.directory}>
      <div className="space-y-2">
        <h2 className={styles.header}>currently</h2>
        <div className=""></div>
      </div>
      <div className="space-y-2">
        <h2 className={styles.header}>writing</h2>
        <div className="grid grid-cols-1 gap-4">{postPreviews}</div>
      </div>
    </div>
  );
};

export default content;
