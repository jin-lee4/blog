import Navbar from "../../../components/Navbar";
import Link from 'next/link'

const About = () => {
  return (
    <div className="space-y-5">
      <div className="-space-y-1">
        <Navbar />
        <h1>About</h1>
        <div>
          <p>
            Hello! I'm Jin, a 5th year student at UBC studying Cognitive
            Systems. I'm particularly interested in the reflexive relationship
            between emerging technologies and culture / society. In extension, I
            love learning about HCI research and social theory.
          </p>
          <p>
            <br></br>
            Most of the time, I'm consuming lots of <Link href="/media">media</Link>, cooking indulgent
            meals, on walks, or being silly with friends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
