import "../../assets/scss/home/about.scss";
import {useRef} from "react"

const About = () => {

const element = useRef(null)
let show = false

const displayMore  = () => {
    show = !show
element.current.style.display = show ? "block": "none"
console.log(show)
}

  return (
    <section id="about" className="about container">
      <h1 className="about__title">ABOUT US</h1>
      <div className="about__body">
        <p>
          BeatChain is a new way to trade and buy songs. Every BeatChain starts
          with a single component of a song. As BeatChains are bought and sold
          in secondary markets, they unlock new phases that add elements to grow
          a BeatChain from a single component to a full song. Each Beatchain
          uses AI to generate a dynamic music video for each phase. So when you
          buy a BeatChain, regardless of the phase, you receive a newly evolved
          song and original music video generated using GAN technology 
          
        </p>
        <details>
          <summary>read more...</summary>
        <div className="read-more" ref={element}>
          <h4>Here's the catch</h4>
          <p>
            BeatChain’s only have 4-5 evolutionary phases. This means that after
            the 4th or 5th phase, the BeatChain locks and can no longer evolve.
          </p>
          <h4>you might ask</h4>
          <p>
            Who are the artists behind a BeatChain? The first collection of
            BeatChains, consisting of 200 songs, is made by our AI music
            collective. Yep, you read that right, the first drop of beats was
            made by a recursive neural network trained on a dataset of the best
            music humans have ever created, from Mozart to Kanye. That being
            said, Beatchain aims to revolutionize the ownership and trading of
            music by giving opportunities to all musicians. Because of this,
            following the sale of the first 200 AI-generated BeatChains, we will
            expand the BeatChain universe to include thousands of songs made by
            human and AI musicians. A beat chain is made up of beat blocks. Each
            block is a unique beat with a stellar visual. Beat blocks are not
            static. Members can evolve their beat chain by adding new beat
            blocks. In the future, we plan to support other beat chain
            modifications. This includes key changes, bpm changes, mashups, and
            other effects.
          </p>
          </div>
          </details>
        
      </div>
    </section>
  );
};

export default About;
