import getPostMetaData from "./getPostMetadata";
import PostPreview from "../components/PostPreview";
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


  return (
    <div className="directory">
      <div className="section">
        <h1 className="section-title">writing</h1>
        <div className="grid grid-cols-1 gap-4">{postPreviews}</div>
      </div>
      <div className="section">
        <h1 className="section-title">
          <Link href={"/about"}>about me</Link>
        </h1>
      </div>
      <div className="section">
        <h1 className="section-title">
          {/* // onClick={() => toggleDivVisibility(isDivVisible, setDivVisible)} */}
          <Link href={"/resume"}>resume</Link>
        </h1>
        {/* {isDivVisible &&  */}
        {/* <div>{resumeContent}</div> */}
      </div>
      <div className="section">
        <h1 className="section-title">
          <Link href={"/"}>social</Link>
        </h1>
      </div>
    </div>
  );
};

export default content;
