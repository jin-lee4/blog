import getPostMetaData from "./getPostMetadata";
import PostPreview from "../components/PostPreview";
import resume from "../components/resume";
import Link from "next/link";
// import { Dispatch, SetStateAction, useState } from "react";

const content = () => {
  // const [isDivVisible, setDivVisible] = useState<boolean>(false);
  // const toggleDivVisibility = (
  //   isDivVisible: boolean,
  //   setDivVisible: Dispatch<SetStateAction<boolean>>
  // ) => {
  //   setDivVisible(!isDivVisible);
  // };

  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  const resumeContent = resume();

  return (
    <div className="directory">
      <div className="section">
        <h1 className="font-bold text-4x1 py-7">writing</h1>
        <div className="grid grid-cols-1 gap-4">{postPreviews}</div>
      </div>
      <div className="section">
        <h1 className="font-bold text-4x1 py-7">
          <Link href={"/"}>about me</Link>
        </h1>
      </div>
      <div className="section">
        <h1 className="font-bold text-4x1 py-7">
          {/* // onClick={() => toggleDivVisibility(isDivVisible, setDivVisible)} */}
          <Link href={"/"}>resume</Link>
        </h1>
        {/* {isDivVisible &&  */}
        {/* <div>{resumeContent}</div> */}
      </div>
      <div className="section">
        <h1>
          <Link href={"/"}>social</Link>
        </h1>
      </div>
    </div>
  );
};

export default content;
