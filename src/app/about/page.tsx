import Image from "next/image";

const About = () => {
  return (
    <div className="space-y-6 w-full">
      <h1>About</h1>
      <div className="space-y-2.5 text-justify">
        <p>
          I am currently studying Cognitive Systems at the University of British
          Columbia. I love discussions about AI through a critical social
          justice lens, and understanding the historical and cultural contexts
          behind current innovations.
        </p>
        <p>
          In my free time, I love to try indulgent recipes, rewatch the same
          shows on repeat, and be silly with friends. I like to do a lot of
          reflecting, hence this space I have carved out for myself.
        </p>
        <h2>Experience</h2>
        <ol>
          <li>Project Management & Communications @ SAP (current)</li>
          <li>Web Community & Portal Administrator @ Samsung R&D Canada</li>
        </ol>
        <h2>Experiments</h2>
        <ol>
          <li>Walk & Talk Vancouver</li>
          <li>HCI reading group (coming soon)</li>
        </ol>
      </div>
    </div>
  );
};

export default About;
