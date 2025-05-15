import c from "../assets/img/c.png";
import cpp from "../assets/img/cpp.png";
import python from "../assets/img/python.png";
import ds from "../assets/img/ds.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import js from "../assets/img/js.png";
import react from "../assets/img/react.png";
import node from "../assets/img/node.png";
import flask from "../assets/img/flask.png";
import mongo from "../assets/img/mongo.png";
import sql from "../assets/img/sql.png";
import git from "../assets/img/git.png";
import vs from "../assets/img/vs.png";
import firebase from "../assets/img/firebase.png";
import docker from "../assets/img/docker.png";
import colab from "../assets/img/colab.png";
import ubuntu from "../assets/img/ubuntu.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section className="skill" id="skills" style={{ position: 'relative' }}>
      <div
        className="container"
        style={{
          maxHeight: "80vh", // vertical limit
          overflowY: "auto", // scroll on Y axis
          paddingRight: "10px",
          scrollBehavior: "smooth",
        }}
      >
        <div className="skill-bx wow zoomIn" style={{ marginBottom: "50px" }}>
          <h1>Tech Stack</h1>
        </div>

        {/* Languages Section */}
        <div className="skill-bx wow zoomIn" style={{ marginBottom: "50px" }}>
          <p>Languages & Core Concepts</p>
          <Carousel responsive={responsive} infinite={false} className="skill-slider">
            <div className="item"><img src={c} alt="C" className="skill-icon" /></div>
            <div className="item"><img src={cpp} alt="C++" className="skill-icon" /></div>
            <div className="item"><img src={python} alt="Python" className="skill-icon" /></div>
            <div className="item"><img src={ds} alt="DSA" className="skill-icon" /></div>
          </Carousel>
        </div>

        {/* Web Development Section */}
        <div className="skill-bx wow zoomIn" style={{ marginBottom: "50px" }}>
          <p>Web Development</p>
          <Carousel responsive={responsive} infinite={false} className="skill-slider">
            <div className="item"><img src={html} alt="HTML" className="skill-icon" /></div>
            <div className="item"><img src={css} alt="CSS" className="skill-icon" /></div>
            <div className="item"><img src={js} alt="JavaScript" className="skill-icon" /></div>
            <div className="item"><img src={react} alt="React" className="skill-icon" /></div>
            <div className="item"><img src={node} alt="Node.js" className="skill-icon" /></div>
            <div className="item"><img src={flask} alt="Flask" className="skill-icon" /></div>
            <div className="item"><img src={mongo} alt="MongoDB" className="skill-icon" /></div>
            <div className="item"><img src={sql} alt="MySQL" className="skill-icon" /></div>
          </Carousel>
        </div>

        {/* Tools & Version Control Section */}
        <div className="skill-bx wow zoomIn" style={{ marginBottom: "50px" }}>
          <p>Version Control & Tools</p>
          <Carousel responsive={responsive} infinite={false} className="skill-slider">
            <div className="item"><img src={vs} alt="VS Code" className="skill-icon" /></div>
            <div className="item"><img src={git} alt="Git" className="skill-icon" /></div>
            <div className="item"><img src={docker} alt="Docker" className="skill-icon" /></div>
            <div className="item"><img src={colab} alt="Google Colab" className="skill-icon" /></div>
            <div className="item"><img src={firebase} alt="Firebase" className="skill-icon" /></div>
            <div className="item"><img src={ubuntu} alt="Ubuntu" className="skill-icon" /></div>
          </Carousel>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
