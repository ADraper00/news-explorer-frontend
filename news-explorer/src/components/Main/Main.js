import "./Main.css";
import aboutImage from "../../images/about_me_image.jpg";

const Main = () => {
  return (
    <main className="main">
      <section className="about">
        <img
          src={aboutImage}
          className="about__image"
          alt="A smartphone that is showing a dashboard"
        ></img>
        <div className="about__wrapper">
          <h2 className="about__title">About the author</h2>
          <p className="about__description">
            Hi I am Ashly. I am a Software Engineer with a background in Computer Networking,
            Technical Support and Office Management.
            I have an Associates Degree in Computer Networking Systems.
          </p>
          <p className="about__description">
            I enjoy coding and all of the new technology that I am learning. Coding was a
            hobby that has turned into a career that I love.
         </p>
        </div>
      </section>
    </main>
  );
};

export default Main;
