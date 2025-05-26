// 
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ 
  "Crafting websites", 
  "Training machines", 
 
];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
   <Container>
  <Row className="justify-content-center text-center">
    <Col xs={12} md={10} lg={8}>
      <TrackVisibility>
        {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            <span
              className="tagline animate__animated animate__zoomIn animate__delay-1s"
              style={{
                marginBottom: '20px',
                display: 'inline-block',
                position: 'relative',
                top: '-20px'
              }}
            >
              Yo! You just scrolled into my digital vibe zone.
            </span>

            <h1 className="cool-gradient-text">
              {`I vibe with `}
              <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Crafting websites", "Training machines" ]'>
                <span className="wrap">{text}</span>
              </span>
            </h1>
            <p>
              I'm a full-stack web developer who turns ideas into slick, scalable apps — and when I'm not building the web, I'm training machines to think smarter. From crafting beautiful UIs to deploying backend logic and playing with ML models — I do it all.
            </p>
            <button onClick={() => console.log('connect')}>Let’s Collab <ArrowRightCircle size={25} /></button>
          </div>}
      </TrackVisibility>
    </Col>
  </Row>
</Container>

    </section>
  );
};
