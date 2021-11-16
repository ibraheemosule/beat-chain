import "../../assets/scss/home/hero.scss";
import video from "../../assets/video/video.mp4";
import thumbnail from "../../assets/img/thumbnail.png";
import { useRef, useLayoutEffect } from "react";

const Hero = () => {
  const videoTag = useRef(null);

  useLayoutEffect(() => {
    videoTag.current.addEventListener("mouseover", () => {
      videoTag.current.play();
    });
  }, []);

  return (
    <main className="container">
      <div className="hero">
        <div className="hero__title">
          <h1>
            Card with capabilities to <br />
            play video
          </h1>
          <p>
            At BeatChain, we believe that music is more than just a file. That's
            why we created an entirely new way that you can buy and sell music,
            starting with just a single component of a song. As a BeatChain is
            bought and sold, it expands and unlocks from a component to a
            complete song.
          </p>
          <span className="hero__title-link">Get Started</span>
          <div className="hero__icons">
            <span>
              <i className="fab fa-twitter"></i>
            </span>
            <span>
              <i className="fab fa-dribbble"></i>
            </span>
            <span>
              <i className="fab fa-facebook"></i>
            </span>
          </div>
        </div>
        <div className="hero__video-container">
          <video
            ref={videoTag}
            muted="muted"
            poster={thumbnail}
            controls
            loop
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </main>
  );
};

export default Hero;
