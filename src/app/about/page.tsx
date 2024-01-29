import nav from "../../../components/nav";

const About = () => {
  const navComponent = nav();

  return (
    <div className="container mx-auto max-w-screen-xl space-y-5 py-20">
      <div className="-space-y-1">
        {navComponent}
        <h1>about</h1>
        <div>
        <p>
          hi, i'm jin! i'm a fifth year student at the university of british columbia studying cognitive systems. i'm particularly interested in thinking and learning about the reflexive relationship between emerging technologies, namely ai, and societal / systemic structures. in extension, i love learning about hci and ux research!
        </p>
        <p>
          <br></br>in my free time (most of the time), i like to consume lots of media, cook indulgent meals, go on walks, and be silly with  friends. 
        </p>
        <p>
          <br></br>i am currently:
          <ul><li><b>reading: </b>either/or by elif batuman <i>&</i> for the love of men by elizabeth plank</li></ul>
          <ul><li><b>listening to: </b>better oblivion community center</li></ul>
          <ul><li><b>watching: </b>modern family...</li></ul>
          <ul><li><b>learning: </b>how to network</li></ul>
          <ul><li><b>working on: </b>living each day with intention and challenging myself / this website!</li></ul>
        </p>
        </div>
      </div>
    </div>
  );
};

export default About;
